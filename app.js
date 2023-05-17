function App(t) {
    this.widgets = t.widgets,
    this.config = t.config
}
Array.prototype.indexOf || (Array.prototype.indexOf = function(t, n) {
    n = n || 0;
    for (var i = this.length; n < i; ) {
        if (this[n] === t)
            return n;
        ++n
    }
    return -1
}
),
Array.prototype.remove = function() {
    for (var t, n, i = arguments, o = i.length; o && this.length; )
        for (t = i[--o]; -1 != (n = this.indexOf(t)); )
            this.splice(n, 1);
    return this
}
,
Array.prototype.sum = function() {
    return this.reduce(function(t, n) {
        return t + n
    })
}
,
Array.prototype.max = function() {
    return Math.max.apply(null, this)
}
,
Array.prototype.min = function() {
    return Math.min.apply(null, this)
}
,
Array.prototype.avg = Array.prototype.avg || function() {
    return this.reduce(function(t, n, i, o) {
        return t + n / o.length
    }, 0)
}
,
Array.prototype.last = function() {
    return this[this.length - 1]
}
,
Array.prototype.indexOf || (Array.prototype.indexOf = function(t, n) {
    n = n || 0;
    for (var i = this.length; n < i; ) {
        if (this[n] === t)
            return n;
        ++n
    }
    return -1
}
),
App.prototype.init = function() {
    window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""));
    var i = this;
    Object.keys(this.widgets).forEach(function(t) {
        var n = "widget" + t.charAt(0).toUpperCase() + t.substr(1);
        void 0 !== i[n] && i[n](i.widgets[t])
    })
}
,
App.setCookie = function(t, n, i) {
    var o = new Date;
    o.setTime(o.getTime() + 24 * i * 60 * 60 * 1e3);
    var r = "expires=" + o.toGMTString();
    document.cookie = t + "=" + n + "; " + r
}
,
App.getCookie = function(t) {
    for (var t = t + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
        for (var o = n[i]; " " == o.charAt(0); )
            o = o.substring(1);
        if (0 == o.indexOf(t))
            return o.substring(t.length, o.length)
    }
    return ""
}
,
App.getUrlVars = function() {
    var o = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(t, n, i) {
        o[n] = i
    });
    return o
}
;
var app, browserTab = !0;
window.onfocus = function() {
    browserTab = !0
}
,
window.onblur = function() {
    browserTab = !1
}
,
$(function() {
    (app = new App(options)).init(),
    $(".mobile-menu-toggle").click(function() {
        $("body").toggleClass("sidebar-open")
    })
});
var stationListShips = $("#statistics-ships")
  , stationListStationsOnline = $("#statistics-stations-online")
  , stationListStationsOffline = $("#statistics-stations-offline");
App.prototype.widgetStationListUpdate = function() {
    $.getJSON("https://www.aishub.net/stations/realtime.json", function(t) {
        stationListShips.numerator({
            easing: "linear",
            duration: 700,
            toValue: t.ships
        }),
        stationListStationsOnline.numerator({
            easing: "linear",
            duration: 700,
            toValue: t.stationsOnline
        }),
        stationListStationsOffline.numerator({
            easing: "linear",
            duration: 700,
            toValue: t.stationsOffline
        })
    })
}
,
App.prototype.widgetStationList = function() {
    setInterval(function() {
        window.browserTab && app.widgetStationListUpdate()
    }, 6e4)
}
;
