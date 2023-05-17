var stationPage, stationRealtimeLoader = $(".stationRealtimeLoaderLoader"), stationRealtimeShipAll = $(".stationRealtimeShipAll"),
	stationRealtimeShipUnique = $(".stationRealtimeShipUnique"),
	stationRealtimeClassA = $("#stationRealtimeClassA"), stationRealtimeClassB = $("#stationRealtimeClassB"), 
	stationRealtimeUptime = $("#uptime"), stationRealtimeUptimeContainer = $(".uptime");
function StationPage(t) {
    this.widgets = t.widgets,
    this.config = t.config,
    this.id = t.widgets.station.id,
    this.statisticsConfig = t.widgets.station.statistics
}
StationPage.prototype.realtimeShipType = void 0,
StationPage.prototype.statistics = {
    daily: void 0,
    weekly: void 0,
    monthly: void 0,
    yearly: void 0
},
StationPage.prototype.realtime = function() {
    $.getJSON("https://www.aishub.net/station/" + this.id + "/realtime.json", function(t) {
        stationRealtimeLoader.css("color", "green"),
        stationRealtimeShipAll.numerator({
            easing: "linear",
            duration: 700,
            toValue: t.ships.all
        }),
        stationRealtimeShipUnique.numerator({
            easing: "linear",
            duration: 700,
            toValue: t.ships.unique
        }),
        void 0 === StationPage.realtimeShipType ? StationPage.realtimeShipType = new Chart("realtimeShipType",{
            type: "doughnut",
            data: t.shipType,
            options: {
                responsive: !0,
                maintainAspectRatio: !1,
                legend: {
                    position: "right",
                    onClick: function() {}
                },
                title: {
                    display: !1,
                    text: "Vessel Types",
                    fontSize: 15,
                    fontFamily: "'Exo 2', sans-serif",
                    fontStyle: "normal",
                    color: "#555"
                },
                animation: {
                    easing: "easeOutExpo",
                    animateScale: !0,
                    animateRotate: !0
                },
                tooltips: {
                    callbacks: {
                        label: function(t, a) {
                            var e = a.datasets[t.datasetIndex]
                              , i = e.data.reduce(function(t, a, e, i) {
                                return t + a
                            })
                              , s = e.data[t.index]
                              , n = Math.floor(s / i * 100 + .5);
                            return " " + a.labels[t.index] + " " + n + "% (" + e.data[t.index] + ")"
                        }
                    }
                }
            }
        }) : (StationPage.realtimeShipType.data.datasets.push(t.shipType.datasets[0]),
        StationPage.realtimeShipType.data.datasets.shift(),
        StationPage.realtimeShipType.update(0)),
        stationRealtimeClassA.attr("title", "Class A " + t.class.a.percent + "%"),
        stationRealtimeClassA.css("width", t.class.a.percent + "%"),
        stationRealtimeClassA.tooltip(),
        stationRealtimeClassA.removeAttr("title"),
        stationRealtimeClassB.attr("title", "Class B " + t.class.b.percent + "%"),
        stationRealtimeClassB.css("width", t.class.b.percent + "%"),
        stationRealtimeClassB.tooltip(),
        stationRealtimeClassB.removeAttr("title"),
        stationRealtimeUptime.numerator({
            easing: "linear",
            duration: 700,
            toValue: t.uptime
        }),
        80 <= t.uptime ? (stationRealtimeUptimeContainer.addClass("text-green"),
        stationRealtimeUptimeContainer.removeClass("text-red")) : (stationRealtimeUptimeContainer.removeClass("text-green"),
        stationRealtimeUptimeContainer.addClass("text-red")),
        stationRealtimeLoader.css("color", "green"),
        setTimeout(function() {
            stationRealtimeLoader.css("color", "#555")
        }, 400)
    })
}
,
StationPage.prototype.initStatistics = function(e) {
    $.getJSON("https://www.aishub.net/station/" + this.id + "/" + e.type + "-statistics.json", dataType: 'jsonp', function(t) {
        $("#" + e.type + "Loader").hide(),
        stationPage.statistics[e.type] = {
            config: "",
            chart: "",
            lastUpdate: ""
        },
        stationPage.statistics[e.type].config = e,
        stationPage.statistics[e.type].lastUpdate = t.end,
        stationPage.statistics[e.type].chart = new Chart("stationStatistics-" + e.type,{
            type: "line",
            data: {
                labels: t.labels,
                datasets: [{
                    backgroundColor: "rgb(54, 162, 235)",
                    borderColor: "rgb(54, 162, 235)",
                    borderWidth: 2,
                    fill: !1,
                    pointRadius: 0,
                    pointHitRadius: 10,
                    data: t.count,
                    label: " All vessels"
                }, {
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor: "rgb(255, 99, 132)",
                    borderWidth: 2,
                    fill: !1,
                    pointRadius: 0,
                    pointHitRadius: 10,
                    data: t.distinct,
                    label: " Unique vessels "
                }]
            },
            options: {
                responsive: !0,
                maintainAspectRatio: !1,
                animation: {
                    easing: "easeOutExpo"
                },
                legend: {
                    display: !1
                },
                legendCallback: function(t) {
                    legend = $("#" + t.ctx.canvas.id + "Legend"),
                    t.data.datasets.forEach(function(t) {
                        legend.append($("<tr/>").append($("<td/>").html('<span class="labelColor" style="background: ' + t.backgroundColor + '"></span> <span class="labelText">' + t.label + " </span>")).append($("<td/>").html('<span class="labelValueText">CURRENT:</span> <span class="labelValue">' + t.data.filter(function(t) {
                            return null != t
                        }).last() + "</span>")).append($("<td/>").html('<span class="labelValueText">AVERAGE:</span>  <span class="labelValue">' + Math.round(t.data.avg(), 1) + "</span>")).append($("<td/>").html('<span class="labelValueText">MAX:</span>  <span class="labelValue">' + t.data.max() + "</span>")))
                    })
                },
                tooltips: {
                    mode: "index",
                    intersect: !1
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: !0,
                            labelString: "Vessels"
                        },
                        ticks: {
                            autoSkip: !0,
                            beginAtZero: !0
                        }
                    }],
                    xAxes: [{
                        type: "time",
                        time: {
                            min: t.begin,
                            max: t.end,
                            unit: e.stepUnit,
                            stepSize: e.stepSize,
                            displayFormats: {
                                hour: e.timeFormat,
                                day: e.timeFormat,
                                week: e.timeFormat,
                                month: e.timeFormat
                            },
                            parser: "X",
                            tooltipFormat: e.timeLabelFormat
                        },
                        display: !0,
                        scaleLabel: {
                            display: !0,
                            labelString: "Date"
                        },
                        ticks: {
                            beginAtZero: !0,
                            autoSkip: !1,
                            callback: function(t, a) {
                                return "daily" == e.type && a % 2 == 0 ? "" : t
                            }
                        }
                    }]
                }
            }
        }),
        $(stationPage.statistics[e.type].chart.canvas.parentNode).append(stationPage.statistics[e.type].chart.generateLegend())
    })
}
,
StationPage.prototype.updateStatistics = function(a) {
    $.getJSON("https://www.aishub.net/station/" + this.id + "/" + a.config.type + "-statistics.json?lastUpdate=" + a.chart.data.labels.last(), dataType: 'jsonp', function(t) {
        void 0 !== t.count && (a.chart.data.labels.shift(),
        t.labels.forEach(function(t) {
            a.chart.data.labels.push(t)
        }),
        a.chart.data.datasets.forEach(function(t) {
            t.data.shift()
        }),
        t.count.forEach(function(t) {
            a.chart.data.datasets[0].data.push(t)
        }),
        t.distinct.forEach(function(t) {
            a.chart.data.datasets[1].data.push(t)
        }),
        a.chart.options.scales.xAxes[0].time.max = t.labels.last(),
        a.chart.options.scales.xAxes[0].time.min = t.labels[0],
        a.lastUpdate = t.labels.last(),
        a.chart.update())
    })
}
,
$(function() {
    var t = 0;
    (stationPage = new StationPage(options)).realtime(),
    stationPage.statisticsConfig.forEach(function(t) {
        stationPage.initStatistics(t)
    }),
    setInterval(function() {
        window.browserTab && stationPage.realtime()
    }, 6e4),
    setInterval(function() {
        window.browserTab && stationPage.updateStatistics(stationPage.statistics.daily)
    }, 305e3),
    setInterval(function() {
        window.browserTab && stationPage.updateStatistics(stationPage.statistics.weekly)
    }, 6048e5),
    setInterval(function() {
        30 == ++t && window.browserTab && (stationPage.updateStatistics(stationPage.statistics.monthly),
        t = 0),
        365 == t && window.browserTab && (stationPage.updateStatistics(stationPage.statistics.yearly),
        0)
    }, 864e5)
});
