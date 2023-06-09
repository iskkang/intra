// OpenLayers. See https://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/openlayers/master/LICENSE.md
// Version: v4.3.1
;(function(root, factory) {
    if (typeof exports === "object") {
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.ol = factory();
    }
}(this, function() {
    var OPENLAYERS = {};
    var k, aa = this;
    function r(a, b) {
        var c = OPENLAYERS;
        a = a.split(".");
        c = c || aa;
        a[0]in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
    ;var ba, ca;
    function fa(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function ha(a, b) {
        return 0 <= a.indexOf(b)
    }
    function ja(a, b, c) {
        var d = a.length;
        if (a[0] <= b)
            return 0;
        if (!(b <= a[d - 1]))
            if (0 < c)
                for (c = 1; c < d; ++c) {
                    if (a[c] < b)
                        return c - 1
                }
            else if (0 > c)
                for (c = 1; c < d; ++c) {
                    if (a[c] <= b)
                        return c
                }
            else
                for (c = 1; c < d; ++c) {
                    if (a[c] == b)
                        return c;
                    if (a[c] < b)
                        return a[c - 1] - b < b - a[c] ? c - 1 : c
                }
        return d - 1
    }
    function ka(a, b) {
        var c = Array.isArray(b) ? b : [b]
          , d = c.length;
        for (b = 0; b < d; b++)
            a[a.length] = c[b]
    }
    function la(a, b) {
        for (var c = a.length >>> 0, d, e = 0; e < c; e++)
            if (d = a[e],
            b(d, e, a))
                return d;
        return null
    }
    function ma(a, b) {
        var c = a.length;
        if (c !== b.length)
            return !1;
        for (var d = 0; d < c; d++)
            if (a[d] !== b[d])
                return !1;
        return !0
    }
    function na(a) {
        var b = oa, c = a.length, d = Array(a.length), e;
        for (e = 0; e < c; e++)
            d[e] = {
                index: e,
                value: a[e]
            };
        d.sort(function(a, c) {
            return b(a.value, c.value) || a.index - c.index
        });
        for (e = 0; e < a.length; e++)
            a[e] = d[e].value
    }
    function pa(a, b) {
        var c;
        return a.every(function(d, e) {
            c = e;
            return !b(d, e, a)
        }) ? -1 : c
    }
    function qa(a, b) {
        var c = b || fa;
        return a.every(function(b, e) {
            if (!e)
                return !0;
            b = c(a[e - 1], b);
            return !(0 < b || 0 === b)
        })
    }
    ;function v(a, b) {
        a.prototype = Object.create(b.prototype);
        a.prototype.constructor = a
    }
    function ra() {}
    function w(a) {
        return a.ip || (a.ip = ++sa)
    }
    var sa = 0;
    function ua(a) {
        this.message = "Assertion failed. See https://openlayers.org/en/v4.3.1/doc/errors/#" + a + " for details.";
        this.code = a;
        this.name = "AssertionError"
    }
    v(ua, Error);
    function va(a, b) {
        if (!a)
            throw new ua(b);
    }
    ;function wa(a, b, c, d) {
        this.ca = a;
        this.da = b;
        this.ea = c;
        this.ha = d
    }
    function xa(a, b, c) {
        return a.ca <= b && b <= a.da && a.ea <= c && c <= a.ha
    }
    function ya(a, b) {
        return a.ca == b.ca && a.ea == b.ea && a.da == b.da && a.ha == b.ha
    }
    function za(a, b) {
        return a.ca <= b.da && a.da >= b.ca && a.ea <= b.ha && a.ha >= b.ea
    }
    ;function Aa(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }
    var Ba = function() {
        var a;
        "cosh"in Math ? a = Math.cosh : a = function(a) {
            a = Math.exp(a);
            return (a + 1 / a) / 2
        }
        ;
        return a
    }();
    function Ca(a) {
        va(0 < a, 29);
        return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2))
    }
    function Da(a, b, c, d, e, f) {
        var g = e - c
          , h = f - d;
        if (g || h) {
            var l = ((a - c) * g + (b - d) * h) / (g * g + h * h);
            1 < l ? (c = e,
            d = f) : 0 < l && (c += g * l,
            d += h * l)
        }
        return Ea(a, b, c, d)
    }
    function Ea(a, b, c, d) {
        a = c - a;
        b = d - b;
        return a * a + b * b
    }
    function Fa(a) {
        return a * Math.PI / 180
    }
    function Ga(a, b) {
        a %= b;
        return 0 > a * b ? a + b : a
    }
    function Ha(a, b, c) {
        return a + c * (b - a)
    }
    ;function Ia(a, b, c) {
        void 0 === c && (c = [0, 0]);
        c[0] = a[0] + 2 * b;
        c[1] = a[1] + 2 * b;
        return c
    }
    function Ja(a, b, c) {
        void 0 === c && (c = [0, 0]);
        c[0] = a[0] * b + .5 | 0;
        c[1] = a[1] * b + .5 | 0;
        return c
    }
    function Ka(a, b) {
        if (Array.isArray(a))
            return a;
        void 0 === b ? b = [a, a] : b[0] = b[1] = a;
        return b
    }
    ;function La(a) {
        for (var b = Ma(), c = 0, d = a.length; c < d; ++c)
            Na(b, a[c]);
        return b
    }
    function Oa(a, b, c) {
        return c ? (c[0] = a[0] - b,
        c[1] = a[1] - b,
        c[2] = a[2] + b,
        c[3] = a[3] + b,
        c) : [a[0] - b, a[1] - b, a[2] + b, a[3] + b]
    }
    function Pa(a, b) {
        return b ? (b[0] = a[0],
        b[1] = a[1],
        b[2] = a[2],
        b[3] = a[3],
        b) : a.slice()
    }
    function Qa(a, b, c) {
        b = b < a[0] ? a[0] - b : a[2] < b ? b - a[2] : 0;
        a = c < a[1] ? a[1] - c : a[3] < c ? c - a[3] : 0;
        return b * b + a * a
    }
    function Ra(a, b) {
        return Sa(a, b[0], b[1])
    }
    function Ta(a, b) {
        return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
    }
    function Sa(a, b, c) {
        return a[0] <= b && b <= a[2] && a[1] <= c && c <= a[3]
    }
    function Ua(a, b) {
        var c = a[1]
          , d = a[2]
          , e = a[3]
          , f = b[0];
        b = b[1];
        var g = 0;
        f < a[0] ? g |= 16 : f > d && (g |= 4);
        b < c ? g |= 8 : b > e && (g |= 2);
        g || (g = 1);
        return g
    }
    function Ma() {
        return [Infinity, Infinity, -Infinity, -Infinity]
    }
    function Va(a, b, c, d, e) {
        return e ? (e[0] = a,
        e[1] = b,
        e[2] = c,
        e[3] = d,
        e) : [a, b, c, d]
    }
    function Wa(a) {
        return Va(Infinity, Infinity, -Infinity, -Infinity, a)
    }
    function Xa(a, b) {
        var c = a[0];
        a = a[1];
        return Va(c, a, c, a, b)
    }
    function Za(a, b, c, d, e) {
        e = Wa(e);
        return $a(e, a, b, c, d)
    }
    function ab(a, b) {
        return a[0] == b[0] && a[2] == b[2] && a[1] == b[1] && a[3] == b[3]
    }
    function bb(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[2] > a[2] && (a[2] = b[2]);
        b[1] < a[1] && (a[1] = b[1]);
        b[3] > a[3] && (a[3] = b[3]);
        return a
    }
    function Na(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[0] > a[2] && (a[2] = b[0]);
        b[1] < a[1] && (a[1] = b[1]);
        b[1] > a[3] && (a[3] = b[1])
    }
    function $a(a, b, c, d, e) {
        for (; c < d; c += e) {
            var f = a
              , g = b[c]
              , h = b[c + 1];
            f[0] = Math.min(f[0], g);
            f[1] = Math.min(f[1], h);
            f[2] = Math.max(f[2], g);
            f[3] = Math.max(f[3], h)
        }
        return a
    }
    function cb(a, b, c) {
        var d;
        return (d = b.call(c, db(a))) || (d = b.call(c, eb(a))) || (d = b.call(c, fb(a))) ? d : (d = b.call(c, gb(a))) ? d : !1
    }
    function hb(a) {
        var b = 0;
        ib(a) || (b = jb(a) * kb(a));
        return b
    }
    function db(a) {
        return [a[0], a[1]]
    }
    function eb(a) {
        return [a[2], a[1]]
    }
    function lb(a) {
        return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
    }
    function mb(a, b, c, d, e) {
        var f = b * d[0] / 2;
        d = b * d[1] / 2;
        b = Math.cos(c);
        var g = Math.sin(c);
        c = f * b;
        f *= g;
        b *= d;
        var h = d * g
          , l = a[0]
          , m = a[1];
        a = l - c + h;
        d = l - c - h;
        g = l + c - h;
        c = l + c + h;
        h = m - f - b;
        l = m - f + b;
        var n = m + f + b;
        f = m + f - b;
        return Va(Math.min(a, d, g, c), Math.min(h, l, n, f), Math.max(a, d, g, c), Math.max(h, l, n, f), e)
    }
    function kb(a) {
        return a[3] - a[1]
    }
    function nb(a, b, c) {
        c = c ? c : Ma();
        ob(a, b) && (c[0] = a[0] > b[0] ? a[0] : b[0],
        c[1] = a[1] > b[1] ? a[1] : b[1],
        c[2] = a[2] < b[2] ? a[2] : b[2],
        c[3] = a[3] < b[3] ? a[3] : b[3]);
        return c
    }
    function gb(a) {
        return [a[0], a[3]]
    }
    function fb(a) {
        return [a[2], a[3]]
    }
    function jb(a) {
        return a[2] - a[0]
    }
    function ob(a, b) {
        return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
    }
    function ib(a) {
        return a[2] < a[0] || a[3] < a[1]
    }
    function pb(a, b) {
        var c = (a[2] - a[0]) / 2 * (b - 1);
        b = (a[3] - a[1]) / 2 * (b - 1);
        a[0] -= c;
        a[2] += c;
        a[1] -= b;
        a[3] += b
    }
    function qb(a, b, c) {
        a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
        b(a, a, 2);
        var d = [a[0], a[2], a[4], a[6]]
          , e = [a[1], a[3], a[5], a[7]];
        b = Math.min.apply(null, d);
        a = Math.min.apply(null, e);
        d = Math.max.apply(null, d);
        e = Math.max.apply(null, e);
        return Va(b, a, d, e, c)
    }
    ;var rb = "function" === typeof Object.assign ? Object.assign : function(a, b) {
        if (!a || null === a)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var c = Object(a), d = 1, e = arguments.length; d < e; ++d) {
            var f = arguments[d];
            if (void 0 !== f && null !== f)
                for (var g in f)
                    f.hasOwnProperty(g) && (c[g] = f[g])
        }
        return c
    }
    ;
    function sb(a) {
        for (var b in a)
            delete a[b]
    }
    function tb(a) {
        var b = [], c;
        for (c in a)
            b.push(a[c]);
        return b
    }
    function ub(a) {
        for (var b in a)
            return !1;
        return !b
    }
    ;/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
    function vb(a) {
        this.radius = a
    }
    vb.prototype.a = function(a) {
        for (var b = this.radius, c = 0, d = a.length, e = a[d - 1][0], f = a[d - 1][1], g = 0; g < d; g++) {
            var h = a[g][0]
              , l = a[g][1];
            c += Fa(h - e) * (2 + Math.sin(Fa(f)) + Math.sin(Fa(l)));
            e = h;
            f = l
        }
        return c * b * b / 2
    }
    ;
    vb.prototype.b = function(a, b) {
        var c = Fa(a[1])
          , d = Fa(b[1])
          , e = (d - c) / 2;
        a = Fa(b[0] - a[0]) / 2;
        c = Math.sin(e) * Math.sin(e) + Math.sin(a) * Math.sin(a) * Math.cos(c) * Math.cos(d);
        return 2 * this.radius * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
    }
    ;
    vb.prototype.offset = function(a, b, c) {
        var d = Fa(a[1]);
        b /= this.radius;
        var e = Math.asin(Math.sin(d) * Math.cos(b) + Math.cos(d) * Math.sin(b) * Math.cos(c));
        return [180 * (Fa(a[0]) + Math.atan2(Math.sin(c) * Math.sin(b) * Math.cos(d), Math.cos(b) - Math.sin(d) * Math.sin(e))) / Math.PI, 180 * e / Math.PI]
    }
    ;
    var wb = {};
    wb.degrees = 12741994 * Math.PI / 360;
    wb.ft = .3048;
    wb.m = 1;
    wb["us-ft"] = 1200 / 3937;
    var xb = null;
    function yb(a) {
        this.pb = a.code;
        this.b = a.units;
        this.i = void 0 !== a.extent ? a.extent : null;
        this.g = void 0 !== a.worldExtent ? a.worldExtent : null;
        this.a = void 0 !== a.axisOrientation ? a.axisOrientation : "enu";
        this.c = void 0 !== a.global ? a.global : !1;
        this.f = !(!this.c || !this.i);
        this.l = a.getPointResolution;
        this.j = null;
        this.o = a.metersPerUnit;
        var b = a.code
          , c = xb || window.proj4;
        "function" == typeof c && (b = c.defs(b),
        void 0 !== b && (void 0 !== b.axis && void 0 === a.axisOrientation && (this.a = b.axis),
        void 0 === a.metersPerUnit && (this.o = b.to_meter),
        void 0 === a.units && (this.b = b.units)))
    }
    k = yb.prototype;
    k.Uk = function() {
        return this.pb
    }
    ;
    k.G = function() {
        return this.i
    }
    ;
    k.jo = function() {
        return this.b
    }
    ;
    k.Nc = function() {
        return this.o || wb[this.b]
    }
    ;
    k.Fl = function() {
        return this.g
    }
    ;
    k.rm = function() {
        return this.c
    }
    ;
    k.nq = function(a) {
        this.c = a;
        this.f = !(!a || !this.i)
    }
    ;
    k.ko = function(a) {
        this.i = a;
        this.f = !(!this.c || !a)
    }
    ;
    k.yq = function(a) {
        this.g = a
    }
    ;
    k.mq = function(a) {
        this.l = a
    }
    ;
    function zb(a) {
        yb.call(this, {
            code: a,
            units: "m",
            extent: Ab,
            global: !0,
            worldExtent: Bb,
            getPointResolution: function(a, c) {
                return a / Ba(c[1] / 6378137)
            }
        })
    }
    v(zb, yb);
    var Cb = 6378137 * Math.PI
      , Ab = [-Cb, -Cb, Cb, Cb]
      , Bb = [-180, -85, 180, 85]
      , Db = [new zb("EPSG:3857"), new zb("EPSG:102100"), new zb("EPSG:102113"), new zb("EPSG:900913"), new zb("urn:ogc:def:crs:EPSG:6.18:3:3857"), new zb("urn:ogc:def:crs:EPSG::3857"), new zb("http://www.opengis.net/gml/srs/epsg.xml#3857")];
    function Eb(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
        for (var e = 0; e < d; e += c) {
            b[e] = Cb * a[e] / 180;
            var f = 6378137 * Math.log(Math.tan(Math.PI * (a[e + 1] + 90) / 360));
            f > Cb ? f = Cb : f < -Cb && (f = -Cb);
            b[e + 1] = f
        }
        return b
    }
    function Fb(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
        for (var e = 0; e < d; e += c)
            b[e] = 180 * a[e] / Cb,
            b[e + 1] = 360 * Math.atan(Math.exp(a[e + 1] / 6378137)) / Math.PI - 90;
        return b
    }
    ;function Gb(a, b) {
        yb.call(this, {
            code: a,
            units: "degrees",
            extent: Hb,
            axisOrientation: b,
            global: !0,
            metersPerUnit: Ib,
            worldExtent: Hb
        })
    }
    v(Gb, yb);
    var Hb = [-180, -90, 180, 90]
      , Ib = 6378137 * Math.PI / 180
      , Jb = [new Gb("CRS:84"), new Gb("EPSG:4326","neu"), new Gb("urn:ogc:def:crs:EPSG::4326","neu"), new Gb("urn:ogc:def:crs:EPSG:6.6:4326","neu"), new Gb("urn:ogc:def:crs:OGC:1.3:CRS84"), new Gb("urn:ogc:def:crs:OGC:2:84"), new Gb("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"), new Gb("urn:x-ogc:def:crs:EPSG:4326","neu")];
    var Kb = {};
    var Lb = {};
    function Mb(a, b, c) {
        a = a.pb;
        b = b.pb;
        a in Lb || (Lb[a] = {});
        Lb[a][b] = c
    }
    function Nb(a, b) {
        var c;
        a in Lb && b in Lb[a] && (c = Lb[a][b]);
        return c
    }
    ;var Ob = new vb(6371008.8);
    function Pb(a, b, c, d) {
        a = Qb(a);
        var e = a.l;
        e ? b = e(b, c) : "degrees" == a.b && !d || "degrees" == d || (e = Rb(a, Qb("EPSG:4326")),
        b = [c[0] - b / 2, c[1], c[0] + b / 2, c[1], c[0], c[1] - b / 2, c[0], c[1] + b / 2],
        b = e(b, b, 2),
        b = (Ob.b(b.slice(0, 2), b.slice(2, 4)) + Ob.b(b.slice(4, 6), b.slice(6, 8))) / 2,
        a = d ? wb[d] : a.Nc(),
        void 0 !== a && (b /= a));
        return b
    }
    function Sb(a) {
        a.forEach(Tb);
        a.forEach(function(b) {
            a.forEach(function(a) {
                b !== a && Mb(b, a, Ub)
            })
        })
    }
    function Wb() {
        Jb.forEach(function(a) {
            Db.forEach(function(b) {
                Mb(a, b, Eb);
                Mb(b, a, Fb)
            })
        })
    }
    function Tb(a) {
        Kb[a.pb] = a;
        Mb(a, a, Ub)
    }
    function Xb(a) {
        return a ? "string" === typeof a ? Qb(a) : a : Qb("EPSG:3857")
    }
    function Yb(a, b, c, d) {
        a = Qb(a);
        b = Qb(b);
        Mb(a, b, Zb(c));
        Mb(b, a, Zb(d))
    }
    function Zb(a) {
        return function(b, c, d) {
            var e = b.length;
            d = void 0 !== d ? d : 2;
            c = void 0 !== c ? c : Array(e);
            var f;
            for (f = 0; f < e; f += d) {
                var g = a([b[f], b[f + 1]]);
                c[f] = g[0];
                c[f + 1] = g[1];
                for (g = d - 1; 2 <= g; --g)
                    c[f + g] = b[f + g]
            }
            return c
        }
    }
    function Qb(a) {
        var b = null;
        if (a instanceof yb)
            b = a;
        else if ("string" === typeof a && (b = Kb[a] || null,
        !b)) {
            var c = xb || window.proj4;
            "function" == typeof c && void 0 !== c.defs(a) && (b = new yb({
                code: a
            }),
            Tb(b))
        }
        return b
    }
    function $b(a, b) {
        if (a === b)
            return !0;
        var c = a.b === b.b;
        return a.pb === b.pb ? c : Rb(a, b) === Ub && c
    }
    function ac(a, b) {
        a = Qb(a);
        b = Qb(b);
        return Rb(a, b)
    }
    function Rb(a, b) {
        var c = a.pb
          , d = b.pb
          , e = Nb(c, d);
        if (!e) {
            var f = xb || window.proj4;
            if ("function" == typeof f) {
                var g = f.defs(c)
                  , h = f.defs(d);
                void 0 !== g && void 0 !== h && (g === h ? Sb([b, a]) : (e = f(d, c),
                Yb(b, a, e.forward, e.inverse)),
                e = Nb(c, d))
            }
        }
        e || (e = bc);
        return e
    }
    function bc(a, b) {
        if (void 0 !== b && a !== b) {
            for (var c = 0, d = a.length; c < d; ++c)
                b[c] = a[c];
            a = b
        }
        return a
    }
    function Ub(a, b) {
        if (void 0 !== b) {
            for (var c = 0, d = a.length; c < d; ++c)
                b[c] = a[c];
            a = b
        } else
            a = a.slice();
        return a
    }
    function cc(a, b, c) {
        return ac(b, c)(a, void 0, a.length)
    }
    function dc(a, b, c) {
        b = ac(b, c);
        return qb(a, b)
    }
    function ec() {
        Sb(Db);
        Sb(Jb);
        Wb()
    }
    ec();
    function fc(a, b, c, d) {
        return void 0 !== d ? (d[0] = a,
        d[1] = b,
        d[2] = c,
        d) : [a, b, c]
    }
    function gc(a) {
        var b = a[0], c = Array(b), d = 1 << b - 1, e;
        for (e = 0; e < b; ++e) {
            var f = 48;
            a[1] & d && (f += 1);
            a[2] & d && (f += 2);
            c[e] = String.fromCharCode(f);
            d >>= 1
        }
        return c.join("")
    }
    ;function hc(a) {
        this.minZoom = void 0 !== a.minZoom ? a.minZoom : 0;
        this.b = a.resolutions;
        va(qa(this.b, function(a, b) {
            return b - a
        }), 17);
        this.maxZoom = this.b.length - 1;
        this.f = void 0 !== a.origin ? a.origin : null;
        this.c = null;
        void 0 !== a.origins && (this.c = a.origins,
        va(this.c.length == this.b.length, 20));
        var b = a.extent;
        void 0 === b || this.f || this.c || (this.f = gb(b));
        va(!this.f && this.c || this.f && !this.c, 18);
        this.i = null;
        void 0 !== a.tileSizes && (this.i = a.tileSizes,
        va(this.i.length == this.b.length, 19));
        this.g = void 0 !== a.tileSize ? a.tileSize : this.i ? null : 256;
        va(!this.g && this.i || this.g && !this.i, 22);
        this.v = void 0 !== b ? b : null;
        this.a = null;
        this.j = [0, 0];
        void 0 !== a.sizes ? this.a = a.sizes.map(function(a) {
            return new wa(Math.min(0, a[0]),Math.max(a[0] - 1, -1),Math.min(0, a[1]),Math.max(a[1] - 1, -1))
        }, this) : b && ic(this, b)
    }
    var jc = [0, 0, 0];
    k = hc.prototype;
    k.Yf = function(a, b, c) {
        a = kc(this, a, b);
        for (var d = a.ca, e = a.da; d <= e; ++d)
            for (var f = a.ea, g = a.ha; f <= g; ++f)
                c([b, d, f])
    }
    ;
    function lc(a, b, c, d, e) {
        e = a.Fa(b, e);
        for (b = b[0] - 1; b >= a.minZoom; ) {
            if (c.call(null, b, kc(a, e, b, d)))
                return !0;
            --b
        }
        return !1
    }
    k.G = function() {
        return this.v
    }
    ;
    k.cj = function() {
        return this.maxZoom
    }
    ;
    k.dj = function() {
        return this.minZoom
    }
    ;
    k.Sc = function(a) {
        return this.f ? this.f : this.c[a]
    }
    ;
    k.Ca = function(a) {
        return this.b[a]
    }
    ;
    k.ej = function() {
        return this.b
    }
    ;
    function mc(a, b, c, d) {
        return b[0] < a.maxZoom ? (d = a.Fa(b, d),
        kc(a, d, b[0] + 1, c)) : null
    }
    function nc(a, b, c, d) {
        oc(a, b[0], b[1], c, !1, jc);
        var e = jc[1]
          , f = jc[2];
        oc(a, b[2], b[3], c, !0, jc);
        a = jc[1];
        b = jc[2];
        void 0 !== d ? (d.ca = e,
        d.da = a,
        d.ea = f,
        d.ha = b) : d = new wa(e,a,f,b);
        return d
    }
    function kc(a, b, c, d) {
        return nc(a, b, a.Ca(c), d)
    }
    function pc(a, b) {
        var c = a.Sc(b[0])
          , d = a.Ca(b[0]);
        a = Ka(a.eb(b[0]), a.j);
        return [c[0] + (b[1] + .5) * a[0] * d, c[1] + (b[2] + .5) * a[1] * d]
    }
    k.Fa = function(a, b) {
        var c = this.Sc(a[0])
          , d = this.Ca(a[0])
          , e = Ka(this.eb(a[0]), this.j)
          , f = c[0] + a[1] * e[0] * d;
        a = c[1] + a[2] * e[1] * d;
        return Va(f, a, f + e[0] * d, a + e[1] * d, b)
    }
    ;
    k.Me = function(a, b, c) {
        return oc(this, a[0], a[1], b, !1, c)
    }
    ;
    function oc(a, b, c, d, e, f) {
        var g = a.uc(d)
          , h = d / a.Ca(g)
          , l = a.Sc(g);
        a = Ka(a.eb(g), a.j);
        b = h * Math.floor((b - l[0]) / d + (e ? .5 : 0)) / a[0];
        c = h * Math.floor((c - l[1]) / d + (e ? 0 : .5)) / a[1];
        e ? (b = Math.ceil(b) - 1,
        c = Math.ceil(c) - 1) : (b = Math.floor(b),
        c = Math.floor(c));
        return fc(g, b, c, f)
    }
    k.kg = function(a, b, c) {
        return oc(this, a[0], a[1], this.Ca(b), !1, c)
    }
    ;
    k.eb = function(a) {
        return this.g ? this.g : this.i[a]
    }
    ;
    k.uc = function(a, b) {
        return Aa(ja(this.b, a, b || 0), this.minZoom, this.maxZoom)
    }
    ;
    function ic(a, b) {
        for (var c = a.b.length, d = Array(c), e = a.minZoom; e < c; ++e)
            d[e] = kc(a, b, e);
        a.a = d
    }
    ;function qc(a) {
        var b = a.j;
        b || (b = rc(a),
        a.j = b);
        return b
    }
    function sc(a) {
        var b = {};
        rb(b, a ? a : {});
        void 0 === b.extent && (b.extent = Qb("EPSG:3857").G());
        b.resolutions = tc(b.extent, b.maxZoom, b.tileSize);
        delete b.maxZoom;
        return new hc(b)
    }
    function tc(a, b, c) {
        b = void 0 !== b ? b : 42;
        var d = kb(a);
        a = jb(a);
        c = Ka(void 0 !== c ? c : 256);
        c = Math.max(a / c[0], d / c[1]);
        b += 1;
        d = Array(b);
        for (a = 0; a < b; ++a)
            d[a] = c / Math.pow(2, a);
        return d
    }
    function rc(a, b, c) {
        a = uc(a);
        b = tc(a, b, c);
        return new hc({
            extent: a,
            origin: gb(a),
            resolutions: b,
            tileSize: c
        })
    }
    function uc(a) {
        a = Qb(a);
        var b = a.G();
        b || (a = 180 * wb.degrees / a.Nc(),
        b = Va(-a, -a, a, a));
        return b
    }
    ;function vc(a) {
        this.b = a.html;
        this.a = a.tileRanges ? a.tileRanges : null
    }
    vc.prototype.f = function() {
        return this.b
    }
    ;
    function wc(a) {
        return function(b) {
            if (b)
                return [Aa(b[0], a[0], a[2]), Aa(b[1], a[1], a[3])]
        }
    }
    function xc(a) {
        return a
    }
    ;function yc(a) {
        function b(b) {
            var c = a.listener
              , e = a.rh || a.target;
            a.th && zc(a);
            return c.call(e, b)
        }
        return a.sh = b
    }
    function Cc(a, b, c, d) {
        for (var e, f = 0, g = a.length; f < g; ++f)
            if (e = a[f],
            e.listener === b && e.rh === c)
                return d && (e.deleteIndex = f),
                e
    }
    function Dc(a, b) {
        return (a = a.jb) ? a[b] : void 0
    }
    function Ec(a) {
        var b = a.jb;
        b || (b = a.jb = {});
        return b
    }
    function Fc(a, b) {
        var c = Dc(a, b);
        if (c) {
            for (var d = 0, e = c.length; d < e; ++d)
                a.removeEventListener(b, c[d].sh),
                sb(c[d]);
            c.length = 0;
            if (c = a.jb)
                delete c[b],
                Object.keys(c).length || delete a.jb
        }
    }
    function y(a, b, c, d, e) {
        var f = Ec(a)
          , g = f[b];
        g || (g = f[b] = []);
        (f = Cc(g, c, d, !1)) ? e || (f.th = !1) : (f = {
            rh: d,
            th: !!e,
            listener: c,
            target: a,
            type: b
        },
        a.addEventListener(b, yc(f)),
        g.push(f));
        return f
    }
    function Gc(a, b, c, d) {
        return y(a, b, c, d, !0)
    }
    function Hc(a, b, c, d) {
        (a = Dc(a, b)) && (c = Cc(a, c, d, !0)) && zc(c)
    }
    function zc(a) {
        if (a && a.target) {
            a.target.removeEventListener(a.type, a.sh);
            var b = Dc(a.target, a.type);
            if (b) {
                var c = "deleteIndex"in a ? a.deleteIndex : b.indexOf(a);
                -1 !== c && b.splice(c, 1);
                b.length || Fc(a.target, a.type)
            }
            sb(a)
        }
    }
    function Ic(a) {
        var b = Ec(a), c;
        for (c in b)
            Fc(a, c)
    }
    ;function Jc() {}
    Jc.prototype.mc = !1;
    function Kc(a) {
        a.mc || (a.mc = !0,
        a.ka())
    }
    Jc.prototype.ka = ra;
    function Lc(a) {
        this.type = a;
        this.target = null
    }
    Lc.prototype.preventDefault = Lc.prototype.stopPropagation = function() {
        this.Dp = !0
    }
    ;
    function Mc(a) {
        a.stopPropagation()
    }
    ;function Nc() {
        this.Va = {};
        this.qa = {};
        this.pa = {}
    }
    v(Nc, Jc);
    Nc.prototype.addEventListener = function(a, b) {
        var c = this.pa[a];
        c || (c = this.pa[a] = []);
        -1 === c.indexOf(b) && c.push(b)
    }
    ;
    Nc.prototype.b = function(a) {
        var b = "string" === typeof a ? new Lc(a) : a;
        a = b.type;
        b.target = this;
        var c = this.pa[a];
        if (c) {
            a in this.qa || (this.qa[a] = 0,
            this.Va[a] = 0);
            ++this.qa[a];
            for (var d = 0, e = c.length; d < e; ++d)
                if (!1 === c[d].call(this, b) || b.Dp) {
                    var f = !1;
                    break
                }
            --this.qa[a];
            if (!this.qa[a]) {
                b = this.Va[a];
                for (delete this.Va[a]; b--; )
                    this.removeEventListener(a, ra);
                delete this.qa[a]
            }
            return f
        }
    }
    ;
    Nc.prototype.ka = function() {
        Ic(this)
    }
    ;
    function Oc(a, b) {
        return b ? b in a.pa : 0 < Object.keys(a.pa).length
    }
    Nc.prototype.removeEventListener = function(a, b) {
        var c = this.pa[a];
        c && (b = c.indexOf(b),
        a in this.Va ? (c[b] = ra,
        ++this.Va[a]) : (c.splice(b, 1),
        c.length || delete this.pa[a]))
    }
    ;
    function Pc() {
        Nc.call(this);
        this.f = 0
    }
    v(Pc, Nc);
    k = Pc.prototype;
    k.s = function() {
        ++this.f;
        this.b("change")
    }
    ;
    k.L = function() {
        return this.f
    }
    ;
    k.J = function(a, b, c) {
        if (Array.isArray(a)) {
            for (var d = a.length, e = Array(d), f = 0; f < d; ++f)
                e[f] = y(this, a[f], b, c);
            return e
        }
        return y(this, a, b, c)
    }
    ;
    k.once = function(a, b, c) {
        if (Array.isArray(a)) {
            for (var d = a.length, e = Array(d), f = 0; f < d; ++f)
                e[f] = Gc(this, a[f], b, c);
            return e
        }
        return Gc(this, a, b, c)
    }
    ;
    k.K = function(a, b, c) {
        if (Array.isArray(a))
            for (var d = 0, e = a.length; d < e; ++d)
                Hc(this, a[d], b, c);
        else
            Hc(this, a, b, c)
    }
    ;
    function Qc(a) {
        Pc.call(this);
        w(this);
        this.R = {};
        void 0 !== a && this.H(a)
    }
    v(Qc, Pc);
    var Rc = {};
    function Sc(a) {
        return Rc.hasOwnProperty(a) ? Rc[a] : Rc[a] = "change:" + a
    }
    k = Qc.prototype;
    k.get = function(a) {
        var b;
        this.R.hasOwnProperty(a) && (b = this.R[a]);
        return b
    }
    ;
    k.O = function() {
        return Object.keys(this.R)
    }
    ;
    k.N = function() {
        return rb({}, this.R)
    }
    ;
    function Tc(a, b, c) {
        var d = Sc(b);
        a.b(new Uc(d,b,c));
        a.b(new Uc("propertychange",b,c))
    }
    k.set = function(a, b, c) {
        c ? this.R[a] = b : (c = this.R[a],
        this.R[a] = b,
        c !== b && Tc(this, a, c))
    }
    ;
    k.H = function(a, b) {
        for (var c in a)
            this.set(c, a[c], b)
    }
    ;
    k.P = function(a, b) {
        if (a in this.R) {
            var c = this.R[a];
            delete this.R[a];
            b || Tc(this, a, c)
        }
    }
    ;
    function Uc(a, b, c) {
        Lc.call(this, a);
        this.key = b;
        this.oldValue = c
    }
    v(Uc, Lc);
    function Vc(a, b) {
        Qc.call(this);
        this.c = !!(b || {}).unique;
        this.a = a ? a : [];
        if (this.c)
            for (a = 0,
            b = this.a.length; a < b; ++a)
                Wc(this, this.a[a], a);
        Xc(this)
    }
    v(Vc, Qc);
    k = Vc.prototype;
    k.clear = function() {
        for (; 0 < this.ec(); )
            this.pop()
    }
    ;
    k.ng = function(a) {
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c)
            this.push(a[c]);
        return this
    }
    ;
    k.forEach = function(a, b) {
        a = b ? a.bind(b) : a;
        b = this.a;
        for (var c = 0, d = b.length; c < d; ++c)
            a(b[c], c, b)
    }
    ;
    k.Hm = function() {
        return this.a
    }
    ;
    k.item = function(a) {
        return this.a[a]
    }
    ;
    k.ec = function() {
        return this.get(Yc)
    }
    ;
    k.Se = function(a, b) {
        this.c && Wc(this, b);
        this.a.splice(a, 0, b);
        Xc(this);
        this.b(new Zc("add",b))
    }
    ;
    k.pop = function() {
        return this.Pg(this.ec() - 1)
    }
    ;
    k.push = function(a) {
        this.c && Wc(this, a);
        var b = this.ec();
        this.Se(b, a);
        return this.ec()
    }
    ;
    k.remove = function(a) {
        var b = this.a, c;
        var d = 0;
        for (c = b.length; d < c; ++d)
            if (b[d] === a)
                return this.Pg(d)
    }
    ;
    k.Pg = function(a) {
        var b = this.a[a];
        this.a.splice(a, 1);
        Xc(this);
        this.b(new Zc("remove",b));
        return b
    }
    ;
    k.jq = function(a, b) {
        var c = this.ec();
        if (a < c)
            this.c && Wc(this, b, a),
            c = this.a[a],
            this.a[a] = b,
            this.b(new Zc("remove",c)),
            this.b(new Zc("add",b));
        else {
            for (; c < a; ++c)
                this.Se(c, void 0);
            this.Se(a, b)
        }
    }
    ;
    function Xc(a) {
        a.set(Yc, a.a.length)
    }
    function Wc(a, b, c) {
        for (var d = 0, e = a.a.length; d < e; ++d)
            if (a.a[d] === b && d !== c)
                throw new ua(58);
    }
    var Yc = "length";
    function Zc(a, b) {
        Lc.call(this, a);
        this.element = b
    }
    v(Zc, Lc);
    var $c = /^#(?:[0-9a-f]{3}){1,2}$/i
      , ad = /^([a-z]*)$/i;
    function bd(a) {
        return Array.isArray(a) ? a : cd(a)
    }
    function dd(a) {
        if ("string" !== typeof a) {
            var b = a[0];
            b != (b | 0) && (b = b + .5 | 0);
            var c = a[1];
            c != (c | 0) && (c = c + .5 | 0);
            var d = a[2];
            d != (d | 0) && (d = d + .5 | 0);
            a = "rgba(" + b + "," + c + "," + d + "," + (void 0 === a[3] ? 1 : a[3]) + ")"
        }
        return a
    }
    var cd = function() {
        var a = {}
          , b = 0;
        return function(c) {
            if (a.hasOwnProperty(c))
                var d = a[c];
            else {
                if (1024 <= b) {
                    d = 0;
                    for (var e in a)
                        d++ & 3 || (delete a[e],
                        --b)
                }
                d = c;
                ad.exec(d) && (e = document.createElement("div"),
                e.style.color = d,
                document.body.appendChild(e),
                d = getComputedStyle(e).color,
                document.body.removeChild(e));
                if ($c.exec(d)) {
                    var f = d.length - 1;
                    va(3 == f || 6 == f, 54);
                    var g = 3 == f ? 1 : 2;
                    f = parseInt(d.substr(1 + 0 * g, g), 16);
                    e = parseInt(d.substr(1 + 1 * g, g), 16);
                    d = parseInt(d.substr(1 + 2 * g, g), 16);
                    1 == g && (f = (f << 4) + f,
                    e = (e << 4) + e,
                    d = (d << 4) + d);
                    f = [f, e, d, 1]
                } else
                    d.indexOf("rgba(") ? d.indexOf("rgb(") ? va(!1, 14) : (d = d.slice(4, -1).split(",").map(Number),
                    d.push(1),
                    f = ed(d)) : (d = d.slice(5, -1).split(",").map(Number),
                    f = ed(d));
                d = f;
                a[c] = d;
                ++b
            }
            return d
        }
    }();
    function ed(a) {
        var b = [];
        b[0] = Aa(a[0] + .5 | 0, 0, 255);
        b[1] = Aa(a[1] + .5 | 0, 0, 255);
        b[2] = Aa(a[2] + .5 | 0, 0, 255);
        b[3] = Aa(a[3], 0, 1);
        return b
    }
    ;function fd(a) {
        return "string" === typeof a || a instanceof CanvasPattern || a instanceof CanvasGradient ? a : dd(a)
    }
    ;function gd(a, b) {
        var c = document.createElement("CANVAS");
        a && (c.width = a);
        b && (c.height = b);
        return c.getContext("2d")
    }
    function hd(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    }
    function id(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
    ;function jd(a) {
        Qc.call(this);
        this.element = a.element ? a.element : null;
        this.a = this.S = null;
        this.v = [];
        this.render = a.render ? a.render : ra;
        a.target && this.i(a.target)
    }
    v(jd, Qc);
    jd.prototype.ka = function() {
        id(this.element);
        Qc.prototype.ka.call(this)
    }
    ;
    jd.prototype.g = function() {
        return this.a
    }
    ;
    jd.prototype.setMap = function(a) {
        this.a && id(this.element);
        for (var b = 0, c = this.v.length; b < c; ++b)
            zc(this.v[b]);
        this.v.length = 0;
        if (this.a = a)
            (this.S ? this.S : a.D).appendChild(this.element),
            this.render !== ra && this.v.push(y(a, "postrender", this.render, this)),
            a.render()
    }
    ;
    jd.prototype.i = function(a) {
        this.S = "string" === typeof a ? document.getElementById(a) : a
    }
    ;
    function kd(a) {
        a = a ? a : {};
        this.I = document.createElement("UL");
        this.u = document.createElement("LI");
        this.I.appendChild(this.u);
        this.u.style.display = "none";
        this.c = void 0 !== a.collapsed ? a.collapsed : !0;
        this.l = void 0 !== a.collapsible ? a.collapsible : !0;
        this.l || (this.c = !1);
        var b = void 0 !== a.className ? a.className : "ol-attribution"
          , c = void 0 !== a.tipLabel ? a.tipLabel : "Attributions"
          , d = void 0 !== a.collapseLabel ? a.collapseLabel : "\u00bb";
        "string" === typeof d ? (this.D = document.createElement("span"),
        this.D.textContent = d) : this.D = d;
        d = void 0 !== a.label ? a.label : "i";
        "string" === typeof d ? (this.B = document.createElement("span"),
        this.B.textContent = d) : this.B = d;
        var e = this.l && !this.c ? this.D : this.B;
        d = document.createElement("button");
        d.setAttribute("type", "button");
        d.title = c;
        d.appendChild(e);
        y(d, "click", this.jn, this);
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control" + (this.c && this.l ? " ol-collapsed" : "") + (this.l ? "" : " ol-uncollapsible");
        c.appendChild(this.I);
        c.appendChild(d);
        jd.call(this, {
            element: c,
            render: a.render ? a.render : ld,
            target: a.target
        });
        this.C = !0;
        this.o = {};
        this.j = {};
        this.U = {}
    }
    v(kd, jd);
    function ld(a) {
        if (a = a.frameState) {
            var b, c, d, e, f, g = a.layerStatesArray, h = rb({}, a.attributions), l = {}, m = {}, n = a.viewState.projection;
            var p = 0;
            for (b = g.length; p < b; p++)
                if (e = g[p].layer.ia()) {
                    var q = w(e).toString();
                    if (f = e.j) {
                        var t = 0;
                        for (c = f.length; t < c; t++) {
                            var u = f[t];
                            var x = w(u).toString();
                            if (!(x in h)) {
                                if (d = a.usedTiles[q]) {
                                    var B = e.Ta(n);
                                    a: {
                                        var z = void 0;
                                        var G, E = u, ia = B, T = n;
                                        if (E.a) {
                                            for (z in d)
                                                if (z in E.a) {
                                                    B = d[z];
                                                    var R = 0;
                                                    for (G = E.a[z].length; R < G; ++R) {
                                                        var U = E.a[z][R];
                                                        if (za(U, B)) {
                                                            z = !0;
                                                            break a
                                                        }
                                                        var ta = kc(ia, uc(T), parseInt(z, 10))
                                                          , A = ta.da - ta.ca + 1;
                                                        if (B.ca < ta.ca || B.da > ta.da)
                                                            if (za(U, new wa(Ga(B.ca, A),Ga(B.da, A),B.ea,B.ha)) || B.da - B.ca + 1 > A && za(U, ta)) {
                                                                z = !0;
                                                                break a
                                                            }
                                                    }
                                                }
                                            z = !1
                                        } else
                                            z = !0
                                    }
                                } else
                                    z = !1;
                                z ? (x in l && delete l[x],
                                z = u.b,
                                z in m || (m[z] = !0,
                                h[x] = u)) : l[x] = u
                            }
                        }
                    }
                }
            b = [h, l];
            p = b[0];
            b = b[1];
            for (var ea in this.o)
                ea in p ? (this.j[ea] || (this.o[ea].style.display = "",
                this.j[ea] = !0),
                delete p[ea]) : ea in b ? (this.j[ea] && (this.o[ea].style.display = "none",
                delete this.j[ea]),
                delete b[ea]) : (id(this.o[ea]),
                delete this.o[ea],
                delete this.j[ea]);
            for (ea in p)
                t = document.createElement("LI"),
                t.innerHTML = p[ea].b,
                this.I.appendChild(t),
                this.o[ea] = t,
                this.j[ea] = !0;
            for (ea in b)
                t = document.createElement("LI"),
                t.innerHTML = b[ea].b,
                t.style.display = "none",
                this.I.appendChild(t),
                this.o[ea] = t;
            ea = !ub(this.j) || !ub(a.logos);
            this.C != ea && (this.element.style.display = ea ? "" : "none",
            this.C = ea);
            ea && ub(this.j) ? this.element.classList.add("ol-logo-only") : this.element.classList.remove("ol-logo-only");
            a = a.logos;
            ea = this.U;
            for (da in ea)
                da in a || (id(ea[da]),
                delete ea[da]);
            for (var Ya in a)
                if (b = a[Ya],
                b instanceof HTMLElement && (this.u.appendChild(b),
                ea[Ya] = b),
                !(Ya in ea)) {
                    var da = new Image;
                    da.src = Ya;
                    "" === b ? p = da : (p = document.createElement("a"),
                    p.href = b,
                    p.appendChild(da));
                    this.u.appendChild(p);
                    ea[Ya] = p
                }
            this.u.style.display = ub(a) ? "none" : ""
        } else
            this.C && (this.element.style.display = "none",
            this.C = !1)
    }
    k = kd.prototype;
    k.jn = function(a) {
        a.preventDefault();
        md(this)
    }
    ;
    function md(a) {
        a.element.classList.toggle("ol-collapsed");
        a.c ? hd(a.D, a.B) : hd(a.B, a.D);
        a.c = !a.c
    }
    k.hn = function() {
        return this.l
    }
    ;
    k.ln = function(a) {
        this.l !== a && (this.l = a,
        this.element.classList.toggle("ol-uncollapsible"),
        !a && this.c && md(this))
    }
    ;
    k.kn = function(a) {
        this.l && this.c !== a && md(this)
    }
    ;
    k.gn = function() {
        return this.c
    }
    ;
    function nd(a) {
        return Math.pow(a, 3)
    }
    function od(a) {
        return 1 - nd(1 - a)
    }
    function pd(a) {
        return 3 * a * a - 2 * a * a * a
    }
    function qd(a) {
        return a
    }
    ;function rd(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-rotate"
          , c = void 0 !== a.label ? a.label : "\u21e7";
        this.c = null;
        "string" === typeof c ? (this.c = document.createElement("span"),
        this.c.className = "ol-compass",
        this.c.textContent = c) : (this.c = c,
        this.c.classList.add("ol-compass"));
        var d = a.tipLabel ? a.tipLabel : "Reset rotation";
        c = document.createElement("button");
        c.className = b + "-reset";
        c.setAttribute("type", "button");
        c.title = d;
        c.appendChild(this.c);
        y(c, "click", rd.prototype.D, this);
        d = document.createElement("div");
        d.className = b + " ol-unselectable ol-control";
        d.appendChild(c);
        b = a.render ? a.render : sd;
        this.l = a.resetNorth ? a.resetNorth : void 0;
        jd.call(this, {
            element: d,
            render: b,
            target: a.target
        });
        this.o = void 0 !== a.duration ? a.duration : 250;
        this.j = void 0 !== a.autoHide ? a.autoHide : !0;
        this.u = void 0;
        this.j && this.element.classList.add("ol-hidden")
    }
    v(rd, jd);
    rd.prototype.D = function(a) {
        a.preventDefault();
        this.l ? this.l() : (a = this.a.$()) && void 0 !== a.Qa() && (0 < this.o ? a.animate({
            rotation: 0,
            duration: this.o,
            easing: od
        }) : a.Ze(0))
    }
    ;
    function sd(a) {
        if (a = a.frameState) {
            a = a.viewState.rotation;
            if (a != this.u) {
                var b = "rotate(" + a + "rad)";
                if (this.j) {
                    var c = this.element.classList.contains("ol-hidden");
                    c || a ? c && a && this.element.classList.remove("ol-hidden") : this.element.classList.add("ol-hidden")
                }
                this.c.style.msTransform = b;
                this.c.style.webkitTransform = b;
                this.c.style.transform = b
            }
            this.u = a
        }
    }
    ;function td(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-zoom"
          , c = void 0 !== a.delta ? a.delta : 1
          , d = void 0 !== a.zoomInLabel ? a.zoomInLabel : "+"
          , e = void 0 !== a.zoomOutLabel ? a.zoomOutLabel : "\u2212"
          , f = void 0 !== a.zoomInTipLabel ? a.zoomInTipLabel : "Zoom in"
          , g = void 0 !== a.zoomOutTipLabel ? a.zoomOutTipLabel : "Zoom out"
          , h = document.createElement("button");
        h.className = b + "-in";
        h.setAttribute("type", "button");
        h.title = f;
        h.appendChild("string" === typeof d ? document.createTextNode(d) : d);
        y(h, "click", td.prototype.j.bind(this, c));
        d = document.createElement("button");
        d.className = b + "-out";
        d.setAttribute("type", "button");
        d.title = g;
        d.appendChild("string" === typeof e ? document.createTextNode(e) : e);
        y(d, "click", td.prototype.j.bind(this, -c));
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control";
        c.appendChild(h);
        c.appendChild(d);
        jd.call(this, {
            element: c,
            target: a.target
        });
        this.c = void 0 !== a.duration ? a.duration : 250
    }
    v(td, jd);
    td.prototype.j = function(a, b) {
        b.preventDefault();
        if (b = this.a.$()) {
            var c = b.Pa();
            c && (a = b.constrainResolution(c, a),
            0 < this.c ? (b.Kc() && b.hd(),
            b.animate({
                resolution: a,
                duration: this.c,
                easing: od
            })) : b.Yc(a))
        }
    }
    ;
    function ud(a) {
        a = a ? a : {};
        var b = new Vc;
        (void 0 !== a.zoom ? a.zoom : 1) && b.push(new td(a.zoomOptions));
        (void 0 !== a.rotate ? a.rotate : 1) && b.push(new rd(a.rotateOptions));
        (void 0 !== a.attribution ? a.attribution : 1) && b.push(new kd(a.attributionOptions));
        return b
    }
    ;function vd(a) {
        a = a ? a : {};
        this.c = void 0 !== a.className ? a.className : "ol-full-screen";
        var b = void 0 !== a.label ? a.label : "\u2922";
        this.l = "string" === typeof b ? document.createTextNode(b) : b;
        b = void 0 !== a.labelActive ? a.labelActive : "\u00d7";
        this.o = "string" === typeof b ? document.createTextNode(b) : b;
        var c = a.tipLabel ? a.tipLabel : "Toggle full-screen";
        b = document.createElement("button");
        b.className = this.c + "-" + wd();
        b.setAttribute("type", "button");
        b.title = c;
        b.appendChild(this.l);
        y(b, "click", this.B, this);
        c = document.createElement("div");
        c.className = this.c + " ol-unselectable ol-control " + (xd() ? "" : "ol-unsupported");
        c.appendChild(b);
        jd.call(this, {
            element: c,
            target: a.target
        });
        this.D = void 0 !== a.keys ? a.keys : !1;
        this.j = a.source
    }
    v(vd, jd);
    vd.prototype.B = function(a) {
        a.preventDefault();
        xd() && (a = this.a) && (wd() ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : (a = this.j ? "string" === typeof this.j ? document.getElementById(this.j) : this.j : a.od(),
        this.D ? a.mozRequestFullScreenWithKeys ? a.mozRequestFullScreenWithKeys() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : yd(a) : yd(a)))
    }
    ;
    vd.prototype.u = function() {
        var a = this.element.firstElementChild
          , b = this.a;
        wd() ? (a.className = this.c + "-true",
        hd(this.o, this.l)) : (a.className = this.c + "-false",
        hd(this.l, this.o));
        b && b.Ed()
    }
    ;
    vd.prototype.setMap = function(a) {
        jd.prototype.setMap.call(this, a);
        a && this.v.push(y(document, zd(), this.u, this))
    }
    ;
    function xd() {
        var a = document.body;
        return !!(a.webkitRequestFullscreen || a.mozRequestFullScreen && document.mozFullScreenEnabled || a.msRequestFullscreen && document.msFullscreenEnabled || a.requestFullscreen && document.fullscreenEnabled)
    }
    function wd() {
        return !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
    }
    function yd(a) {
        a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
    }
    var zd = function() {
        var a;
        return function() {
            if (!a) {
                var b = document.body;
                b.webkitRequestFullscreen ? a = "webkitfullscreenchange" : b.mozRequestFullScreen ? a = "mozfullscreenchange" : b.msRequestFullscreen ? a = "MSFullscreenChange" : b.requestFullscreen && (a = "fullscreenchange")
            }
            return a
        }
    }();
    function Ad(a) {
        a = a ? a : {};
        var b = document.createElement("DIV");
        b.className = void 0 !== a.className ? a.className : "ol-mouse-position";
        jd.call(this, {
            element: b,
            render: a.render ? a.render : Bd,
            target: a.target
        });
        y(this, Sc(Cd), this.mn, this);
        a.coordinateFormat && this.uj(a.coordinateFormat);
        a.projection && this.ji(a.projection);
        this.u = void 0 !== a.undefinedHTML ? a.undefinedHTML : "";
        this.o = b.innerHTML;
        this.l = this.j = this.c = null
    }
    v(Ad, jd);
    function Bd(a) {
        a = a.frameState;
        a ? this.c != a.viewState.projection && (this.c = a.viewState.projection,
        this.j = null) : this.c = null;
        Dd(this, this.l)
    }
    k = Ad.prototype;
    k.mn = function() {
        this.j = null
    }
    ;
    k.Fh = function() {
        return this.get(Ed)
    }
    ;
    k.ii = function() {
        return this.get(Cd)
    }
    ;
    k.Xl = function(a) {
        this.l = this.a.Ge(a);
        Dd(this, this.l)
    }
    ;
    k.Yl = function() {
        Dd(this, null);
        this.l = null
    }
    ;
    k.setMap = function(a) {
        jd.prototype.setMap.call(this, a);
        a && (a = a.a,
        this.v.push(y(a, "mousemove", this.Xl, this), y(a, "mouseout", this.Yl, this)))
    }
    ;
    k.uj = function(a) {
        this.set(Ed, a)
    }
    ;
    k.ji = function(a) {
        this.set(Cd, Qb(a))
    }
    ;
    function Dd(a, b) {
        var c = a.u;
        if (b && a.c) {
            if (!a.j) {
                var d = a.ii();
                a.j = d ? Rb(a.c, d) : bc
            }
            if (b = a.a.Xa(b))
                a.j(b, b),
                c = (c = a.Fh()) ? c(b) : b.toString()
        }
        a.o && c == a.o || (a.element.innerHTML = c,
        a.o = c)
    }
    var Cd = "projection"
      , Ed = "coordinateFormat";
    function Fd(a, b, c) {
        Lc.call(this, a);
        this.map = b;
        this.frameState = void 0 !== c ? c : null
    }
    v(Fd, Lc);
    function Gd(a, b, c, d, e) {
        Fd.call(this, a, b, e);
        this.originalEvent = c;
        this.pixel = b.Ge(c);
        this.coordinate = b.Xa(this.pixel);
        this.dragging = void 0 !== d ? d : !1
    }
    v(Gd, Fd);
    Gd.prototype.preventDefault = function() {
        Fd.prototype.preventDefault.call(this);
        this.originalEvent.preventDefault()
    }
    ;
    Gd.prototype.stopPropagation = function() {
        Fd.prototype.stopPropagation.call(this);
        this.originalEvent.stopPropagation()
    }
    ;
    var Hd = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];
    function Id(a, b) {
        var c, d, e = Hd.length;
        for (d = 0; d < e; ++d)
            try {
                if (c = a.getContext(Hd[d], b))
                    return c
            } catch (f) {}
        return null
    }
    ;var Jd, Kd = "undefined" !== typeof navigator ? navigator.userAgent.toLowerCase() : "", Ld = -1 !== Kd.indexOf("firefox"), Md = -1 !== Kd.indexOf("safari") && -1 == Kd.indexOf("chrom"), Nd = -1 !== Kd.indexOf("webkit") && -1 == Kd.indexOf("edge"), Od = -1 !== Kd.indexOf("macintosh"), Pd = window.devicePixelRatio || 1, Qd = !1, Rd = function() {
        if (!("HTMLCanvasElement"in window))
            return !1;
        try {
            var a = document.createElement("CANVAS").getContext("2d");
            return a ? (void 0 !== a.setLineDash && (Qd = !0),
            !0) : !1
        } catch (b) {
            return !1
        }
    }(), Sd = "DeviceOrientationEvent"in window, Td = "geolocation"in navigator, Ud = "ontouchstart"in window, Vd = "PointerEvent"in window, Wd = !!navigator.msPointerEnabled, Xd = !1, Yd, Zd = [];
    if ("WebGLRenderingContext"in window)
        try {
            var $d = Id(document.createElement("CANVAS"), {
                failIfMajorPerformanceCaveat: !0
            });
            $d && (Xd = !0,
            Yd = $d.getParameter($d.MAX_TEXTURE_SIZE),
            Zd = $d.getSupportedExtensions())
        } catch (a) {}
    Jd = Xd;
    ca = Zd;
    ba = Yd;
    var ae = {
        Wq: "singleclick",
        Lq: "click",
        Mq: "dblclick",
        Pq: "pointerdrag",
        Sq: "pointermove",
        Oq: "pointerdown",
        Vq: "pointerup",
        Uq: "pointerover",
        Tq: "pointerout",
        Qq: "pointerenter",
        Rq: "pointerleave",
        Nq: "pointercancel"
    };
    function be(a, b, c, d, e) {
        Gd.call(this, a, b, c.b, d, e);
        this.b = c
    }
    v(be, Gd);
    function ce(a, b) {
        this.b = a;
        this.i = b
    }
    ;function de(a) {
        ce.call(this, a, {
            mousedown: this.tm,
            mousemove: this.um,
            mouseup: this.xm,
            mouseover: this.wm,
            mouseout: this.vm
        });
        this.a = a.f;
        this.f = []
    }
    v(de, ce);
    function ee(a, b) {
        a = a.f;
        var c = b.clientX;
        b = b.clientY;
        for (var d = 0, e = a.length, f; d < e && (f = a[d]); d++) {
            var g = Math.abs(b - f[1]);
            if (25 >= Math.abs(c - f[0]) && 25 >= g)
                return !0
        }
        return !1
    }
    function fe(a) {
        var b = ie(a, a)
          , c = b.preventDefault;
        b.preventDefault = function() {
            a.preventDefault();
            c()
        }
        ;
        b.pointerId = 1;
        b.isPrimary = !0;
        b.pointerType = "mouse";
        return b
    }
    k = de.prototype;
    k.tm = function(a) {
        if (!ee(this, a)) {
            (1).toString()in this.a && this.cancel(a);
            var b = fe(a);
            this.a[(1).toString()] = a;
            je(this.b, "pointerdown", b, a)
        }
    }
    ;
    k.um = function(a) {
        if (!ee(this, a)) {
            var b = fe(a);
            je(this.b, "pointermove", b, a)
        }
    }
    ;
    k.xm = function(a) {
        if (!ee(this, a)) {
            var b = this.a[(1).toString()];
            b && b.button === a.button && (b = fe(a),
            je(this.b, "pointerup", b, a),
            delete this.a[(1).toString()])
        }
    }
    ;
    k.wm = function(a) {
        if (!ee(this, a)) {
            var b = fe(a);
            ke(this.b, b, a)
        }
    }
    ;
    k.vm = function(a) {
        if (!ee(this, a)) {
            var b = fe(a);
            le(this.b, b, a)
        }
    }
    ;
    k.cancel = function(a) {
        var b = fe(a);
        this.b.cancel(b, a);
        delete this.a[(1).toString()]
    }
    ;
    function me(a) {
        ce.call(this, a, {
            MSPointerDown: this.Cm,
            MSPointerMove: this.Dm,
            MSPointerUp: this.Gm,
            MSPointerOut: this.Em,
            MSPointerOver: this.Fm,
            MSPointerCancel: this.Bm,
            MSGotPointerCapture: this.zm,
            MSLostPointerCapture: this.Am
        });
        this.a = a.f;
        this.f = ["", "unavailable", "touch", "pen", "mouse"]
    }
    v(me, ce);
    function ne(a, b) {
        var c = b;
        "number" === typeof b.pointerType && (c = ie(b, b),
        c.pointerType = a.f[b.pointerType]);
        return c
    }
    k = me.prototype;
    k.Cm = function(a) {
        this.a[a.pointerId.toString()] = a;
        var b = ne(this, a);
        je(this.b, "pointerdown", b, a)
    }
    ;
    k.Dm = function(a) {
        var b = ne(this, a);
        je(this.b, "pointermove", b, a)
    }
    ;
    k.Gm = function(a) {
        var b = ne(this, a);
        je(this.b, "pointerup", b, a);
        delete this.a[a.pointerId.toString()]
    }
    ;
    k.Em = function(a) {
        var b = ne(this, a);
        le(this.b, b, a)
    }
    ;
    k.Fm = function(a) {
        var b = ne(this, a);
        ke(this.b, b, a)
    }
    ;
    k.Bm = function(a) {
        var b = ne(this, a);
        this.b.cancel(b, a);
        delete this.a[a.pointerId.toString()]
    }
    ;
    k.Am = function(a) {
        this.b.b(new oe("lostpointercapture",a,a))
    }
    ;
    k.zm = function(a) {
        this.b.b(new oe("gotpointercapture",a,a))
    }
    ;
    function pe(a) {
        ce.call(this, a, {
            pointerdown: this.vp,
            pointermove: this.wp,
            pointerup: this.zp,
            pointerout: this.xp,
            pointerover: this.yp,
            pointercancel: this.up,
            gotpointercapture: this.Gl,
            lostpointercapture: this.sm
        })
    }
    v(pe, ce);
    k = pe.prototype;
    k.vp = function(a) {
        qe(this.b, a)
    }
    ;
    k.wp = function(a) {
        qe(this.b, a)
    }
    ;
    k.zp = function(a) {
        qe(this.b, a)
    }
    ;
    k.xp = function(a) {
        qe(this.b, a)
    }
    ;
    k.yp = function(a) {
        qe(this.b, a)
    }
    ;
    k.up = function(a) {
        qe(this.b, a)
    }
    ;
    k.sm = function(a) {
        qe(this.b, a)
    }
    ;
    k.Gl = function(a) {
        qe(this.b, a)
    }
    ;
    function oe(a, b, c) {
        Lc.call(this, a);
        this.b = b;
        a = c ? c : {};
        this.buttons = re(a);
        this.pressure = se(a, this.buttons);
        this.bubbles = "bubbles"in a ? a.bubbles : !1;
        this.cancelable = "cancelable"in a ? a.cancelable : !1;
        this.view = "view"in a ? a.view : null;
        this.detail = "detail"in a ? a.detail : null;
        this.screenX = "screenX"in a ? a.screenX : 0;
        this.screenY = "screenY"in a ? a.screenY : 0;
        this.clientX = "clientX"in a ? a.clientX : 0;
        this.clientY = "clientY"in a ? a.clientY : 0;
        this.ctrlKey = "ctrlKey"in a ? a.ctrlKey : !1;
        this.altKey = "altKey"in a ? a.altKey : !1;
        this.shiftKey = "shiftKey"in a ? a.shiftKey : !1;
        this.metaKey = "metaKey"in a ? a.metaKey : !1;
        this.button = "button"in a ? a.button : 0;
        this.relatedTarget = "relatedTarget"in a ? a.relatedTarget : null;
        this.pointerId = "pointerId"in a ? a.pointerId : 0;
        this.width = "width"in a ? a.width : 0;
        this.height = "height"in a ? a.height : 0;
        this.tiltX = "tiltX"in a ? a.tiltX : 0;
        this.tiltY = "tiltY"in a ? a.tiltY : 0;
        this.pointerType = "pointerType"in a ? a.pointerType : "";
        this.isPrimary = "isPrimary"in a ? a.isPrimary : !1;
        b.preventDefault && (this.preventDefault = function() {
            b.preventDefault()
        }
        )
    }
    v(oe, Lc);
    function re(a) {
        if (a.buttons || te)
            a = a.buttons;
        else
            switch (a.which) {
            case 1:
                a = 1;
                break;
            case 2:
                a = 4;
                break;
            case 3:
                a = 2;
                break;
            default:
                a = 0
            }
        return a
    }
    function se(a, b) {
        var c = 0;
        a.pressure ? c = a.pressure : c = b ? .5 : 0;
        return c
    }
    var te = !1;
    try {
        te = 1 === (new MouseEvent("click",{
            buttons: 1
        })).buttons
    } catch (a) {}
    ;function ue(a, b) {
        ce.call(this, a, {
            touchstart: this.Fq,
            touchmove: this.Eq,
            touchend: this.Dq,
            touchcancel: this.Cq
        });
        this.a = a.f;
        this.j = b;
        this.f = void 0;
        this.g = 0;
        this.c = void 0
    }
    v(ue, ce);
    k = ue.prototype;
    k.sj = function() {
        this.g = 0;
        this.c = void 0
    }
    ;
    function ve(a, b, c) {
        b = ie(b, c);
        b.pointerId = c.identifier + 2;
        b.bubbles = !0;
        b.cancelable = !0;
        b.detail = a.g;
        b.button = 0;
        b.buttons = 1;
        b.width = c.webkitRadiusX || c.radiusX || 0;
        b.height = c.webkitRadiusY || c.radiusY || 0;
        b.pressure = c.webkitForce || c.force || .5;
        b.isPrimary = a.f === c.identifier;
        b.pointerType = "touch";
        b.clientX = c.clientX;
        b.clientY = c.clientY;
        b.screenX = c.screenX;
        b.screenY = c.screenY;
        return b
    }
    function we(a, b, c) {
        function d() {
            b.preventDefault()
        }
        var e = Array.prototype.slice.call(b.changedTouches), f = e.length, g;
        for (g = 0; g < f; ++g) {
            var h = ve(a, b, e[g]);
            h.preventDefault = d;
            c.call(a, b, h)
        }
    }
    k.Fq = function(a) {
        var b = a.touches
          , c = Object.keys(this.a)
          , d = c.length;
        if (d >= b.length) {
            var e = [], f;
            for (f = 0; f < d; ++f) {
                var g = c[f];
                var h = this.a[g];
                var l;
                if (!(l = 1 == g))
                    a: {
                        for (var m = b.length, n = 0; n < m; n++)
                            if (l = b[n],
                            l.identifier === g - 2) {
                                l = !0;
                                break a
                            }
                        l = !1
                    }
                l || e.push(h.out)
            }
            for (f = 0; f < e.length; ++f)
                this.Rf(a, e[f])
        }
        b = a.changedTouches[0];
        c = Object.keys(this.a).length;
        if (!c || 1 === c && (1).toString()in this.a)
            this.f = b.identifier,
            void 0 !== this.c && clearTimeout(this.c);
        xe(this, a);
        this.g++;
        we(this, a, this.qp)
    }
    ;
    k.qp = function(a, b) {
        this.a[b.pointerId] = {
            target: b.target,
            out: b,
            fj: b.target
        };
        var c = this.b;
        b.bubbles = !0;
        je(c, "pointerover", b, a);
        c = this.b;
        b.bubbles = !1;
        je(c, "pointerenter", b, a);
        je(this.b, "pointerdown", b, a)
    }
    ;
    k.Eq = function(a) {
        a.preventDefault();
        we(this, a, this.ym)
    }
    ;
    k.ym = function(a, b) {
        var c = this.a[b.pointerId];
        if (c) {
            var d = c.out
              , e = c.fj;
            je(this.b, "pointermove", b, a);
            d && e !== b.target && (d.relatedTarget = b.target,
            b.relatedTarget = e,
            d.target = e,
            b.target ? (le(this.b, d, a),
            ke(this.b, b, a)) : (b.target = e,
            b.relatedTarget = null,
            this.Rf(a, b)));
            c.out = b;
            c.fj = b.target
        }
    }
    ;
    k.Dq = function(a) {
        xe(this, a);
        we(this, a, this.Gq)
    }
    ;
    k.Gq = function(a, b) {
        je(this.b, "pointerup", b, a);
        this.b.out(b, a);
        ye(this.b, b, a);
        delete this.a[b.pointerId];
        b.isPrimary && (this.f = void 0,
        this.c = setTimeout(this.sj.bind(this), 200))
    }
    ;
    k.Cq = function(a) {
        we(this, a, this.Rf)
    }
    ;
    k.Rf = function(a, b) {
        this.b.cancel(b, a);
        this.b.out(b, a);
        ye(this.b, b, a);
        delete this.a[b.pointerId];
        b.isPrimary && (this.f = void 0,
        this.c = setTimeout(this.sj.bind(this), 200))
    }
    ;
    function xe(a, b) {
        var c = a.j.f;
        b = b.changedTouches[0];
        if (a.f === b.identifier) {
            var d = [b.clientX, b.clientY];
            c.push(d);
            setTimeout(function() {
                var a = c.indexOf(d);
                -1 < a && c.splice(a, 1)
            }, 2500)
        }
    }
    ;function ze(a) {
        Nc.call(this);
        this.g = a;
        this.f = {};
        this.i = {};
        this.a = [];
        Vd ? Ae(this, new pe(this)) : Wd ? Ae(this, new me(this)) : (a = new de(this),
        Ae(this, a),
        Ud && Ae(this, new ue(this,a)));
        a = this.a.length;
        for (var b, c = 0; c < a; c++)
            b = this.a[c],
            Be(this, Object.keys(b.i))
    }
    v(ze, Nc);
    function Ae(a, b) {
        var c = Object.keys(b.i);
        c && (c.forEach(function(a) {
            var c = b.i[a];
            c && (this.i[a] = c.bind(b))
        }, a),
        a.a.push(b))
    }
    ze.prototype.c = function(a) {
        var b = this.i[a.type];
        b && b(a)
    }
    ;
    function Be(a, b) {
        b.forEach(function(a) {
            y(this.g, a, this.c, this)
        }, a)
    }
    function Ce(a, b) {
        b.forEach(function(a) {
            Hc(this.g, a, this.c, this)
        }, a)
    }
    function ie(a, b) {
        for (var c = {}, d, e = 0, f = De.length; e < f; e++)
            d = De[e][0],
            c[d] = a[d] || b[d] || De[e][1];
        return c
    }
    function ye(a, b, c) {
        b.bubbles = !1;
        je(a, "pointerleave", b, c)
    }
    ze.prototype.out = function(a, b) {
        a.bubbles = !0;
        je(this, "pointerout", a, b)
    }
    ;
    ze.prototype.cancel = function(a, b) {
        je(this, "pointercancel", a, b)
    }
    ;
    function le(a, b, c) {
        a.out(b, c);
        var d = b.target
          , e = b.relatedTarget;
        d && e && d.contains(e) || ye(a, b, c)
    }
    function ke(a, b, c) {
        b.bubbles = !0;
        je(a, "pointerover", b, c);
        var d = b.target
          , e = b.relatedTarget;
        d && e && d.contains(e) || (b.bubbles = !1,
        je(a, "pointerenter", b, c))
    }
    function je(a, b, c, d) {
        a.b(new oe(b,d,c))
    }
    function qe(a, b) {
        a.b(new oe(b.type,b,b))
    }
    ze.prototype.ka = function() {
        for (var a = this.a.length, b, c = 0; c < a; c++)
            b = this.a[c],
            Ce(this, Object.keys(b.i));
        Nc.prototype.ka.call(this)
    }
    ;
    var De = [["bubbles", !1], ["cancelable", !1], ["view", null], ["detail", null], ["screenX", 0], ["screenY", 0], ["clientX", 0], ["clientY", 0], ["ctrlKey", !1], ["altKey", !1], ["shiftKey", !1], ["metaKey", !1], ["button", 0], ["relatedTarget", null], ["buttons", 0], ["pointerId", 0], ["width", 0], ["height", 0], ["pressure", 0], ["tiltX", 0], ["tiltY", 0], ["pointerType", ""], ["hwTimestamp", 0], ["isPrimary", !1], ["type", ""], ["target", null], ["currentTarget", null], ["which", 0]];
    function Ee(a, b) {
        Nc.call(this);
        this.f = a;
        this.j = 0;
        this.l = !1;
        this.i = [];
        this.D = b ? b * Pd : Pd;
        this.c = null;
        a = this.f.a;
        this.R = 0;
        this.u = {};
        this.g = new ze(a);
        this.a = null;
        this.o = y(this.g, "pointerdown", this.$l, this);
        this.v = y(this.g, "pointermove", this.Yp, this)
    }
    v(Ee, Nc);
    function Fe(a, b) {
        var c = new be("click",a.f,b);
        a.b(c);
        a.j ? (clearTimeout(a.j),
        a.j = 0,
        c = new be("dblclick",a.f,b),
        a.b(c)) : a.j = setTimeout(function() {
            this.j = 0;
            var a = new be("singleclick",this.f,b);
            this.b(a)
        }
        .bind(a), 250)
    }
    function Ge(a, b) {
        "pointerup" == b.type || "pointercancel" == b.type ? delete a.u[b.pointerId] : "pointerdown" == b.type && (a.u[b.pointerId] = !0);
        a.R = Object.keys(a.u).length
    }
    k = Ee.prototype;
    k.Sh = function(a) {
        Ge(this, a);
        var b = new be("pointerup",this.f,a);
        this.b(b);
        this.l || a.button || Fe(this, this.c);
        this.R || (this.i.forEach(zc),
        this.i.length = 0,
        this.l = !1,
        this.c = null,
        Kc(this.a),
        this.a = null)
    }
    ;
    k.$l = function(a) {
        Ge(this, a);
        var b = new be("pointerdown",this.f,a);
        this.b(b);
        this.c = a;
        this.i.length || (this.a = new ze(document),
        this.i.push(y(this.a, "pointermove", this.Vm, this), y(this.a, "pointerup", this.Sh, this), y(this.g, "pointercancel", this.Sh, this)))
    }
    ;
    k.Vm = function(a) {
        if (He(this, a)) {
            this.l = !0;
            var b = new be("pointerdrag",this.f,a,this.l);
            this.b(b)
        }
        a.preventDefault()
    }
    ;
    k.Yp = function(a) {
        this.b(new be(a.type,this.f,a,!(!this.c || !He(this, a))))
    }
    ;
    function He(a, b) {
        return Math.abs(b.clientX - a.c.clientX) > a.D || Math.abs(b.clientY - a.c.clientY) > a.D
    }
    k.ka = function() {
        this.v && (zc(this.v),
        this.v = null);
        this.o && (zc(this.o),
        this.o = null);
        this.i.forEach(zc);
        this.i.length = 0;
        this.a && (Kc(this.a),
        this.a = null);
        this.g && (Kc(this.g),
        this.g = null);
        Nc.prototype.ka.call(this)
    }
    ;
    function Ie(a, b) {
        this.o = a;
        this.c = b;
        this.b = [];
        this.f = [];
        this.a = {}
    }
    Ie.prototype.clear = function() {
        this.b.length = 0;
        this.f.length = 0;
        sb(this.a)
    }
    ;
    function Je(a) {
        var b = a.b
          , c = a.f
          , d = b[0];
        1 == b.length ? (b.length = 0,
        c.length = 0) : (b[0] = b.pop(),
        c[0] = c.pop(),
        Ke(a, 0));
        b = a.c(d);
        delete a.a[b];
        return d
    }
    Ie.prototype.i = function(a) {
        va(!(this.c(a)in this.a), 31);
        var b = this.o(a);
        return Infinity != b ? (this.b.push(a),
        this.f.push(b),
        this.a[this.c(a)] = !0,
        Le(this, 0, this.b.length - 1),
        !0) : !1
    }
    ;
    function Ke(a, b) {
        for (var c = a.b, d = a.f, e = c.length, f = c[b], g = d[b], h = b; b < e >> 1; ) {
            var l = 2 * b + 1
              , m = 2 * b + 2;
            l = m < e && d[m] < d[l] ? m : l;
            c[b] = c[l];
            d[b] = d[l];
            b = l
        }
        c[b] = f;
        d[b] = g;
        Le(a, h, b)
    }
    function Le(a, b, c) {
        var d = a.b;
        a = a.f;
        for (var e = d[c], f = a[c]; c > b; ) {
            var g = c - 1 >> 1;
            if (a[g] > f)
                d[c] = d[g],
                a[c] = a[g],
                c = g;
            else
                break
        }
        d[c] = e;
        a[c] = f
    }
    function Me(a) {
        var b = a.o, c = a.b, d = a.f, e = 0, f = c.length, g;
        for (g = 0; g < f; ++g) {
            var h = c[g];
            var l = b(h);
            Infinity == l ? delete a.a[a.c(h)] : (d[e] = l,
            c[e++] = h)
        }
        c.length = e;
        d.length = e;
        for (b = (a.b.length >> 1) - 1; 0 <= b; b--)
            Ke(a, b)
    }
    ;function Ne(a, b) {
        Ie.call(this, function(b) {
            return a.apply(null, b)
        }, function(a) {
            return a[0].fb()
        });
        this.v = b;
        this.j = 0;
        this.g = {}
    }
    v(Ne, Ie);
    Ne.prototype.i = function(a) {
        var b = Ie.prototype.i.call(this, a);
        b && y(a[0], "change", this.l, this);
        return b
    }
    ;
    Ne.prototype.l = function(a) {
        a = a.target;
        var b = a.getState();
        if (2 === b || 3 === b || 4 === b || 5 === b)
            Hc(a, "change", this.l, this),
            a = a.fb(),
            a in this.g && (delete this.g[a],
            --this.j),
            this.v()
    }
    ;
    function Oe(a, b, c) {
        for (var d = 0, e = !1, f, g, h; a.j < b && d < c && 0 < a.b.length; )
            g = Je(a)[0],
            h = g.fb(),
            f = g.getState(),
            5 === f ? e = !0 : 0 !== f || h in a.g || (a.g[h] = !0,
            ++a.j,
            ++d,
            g.load());
        !d && e && a.v()
    }
    ;function Pe(a) {
        return function(b, c, d) {
            if (void 0 !== b)
                return b = ja(a, b, d),
                b = Aa(b + c, 0, a.length - 1),
                c = Math.floor(b),
                b != c && c < a.length - 1 ? a[c] / Math.pow(a[c] / a[c + 1], b - c) : a[c]
        }
    }
    function Qe(a, b, c) {
        return function(d, e, f) {
            if (void 0 !== d)
                return d = Math.max(Math.floor(Math.log(b / d) / Math.log(a) + (-f / 2 + .5)) + e, 0),
                void 0 !== c && (d = Math.min(d, c)),
                b / Math.pow(a, d)
        }
    }
    ;function Re(a) {
        if (void 0 !== a)
            return 0
    }
    function Se(a, b) {
        if (void 0 !== a)
            return a + b
    }
    function Te(a) {
        var b = 2 * Math.PI / a;
        return function(a, d) {
            if (void 0 !== a)
                return a = Math.floor((a + d) / b + .5) * b
        }
    }
    function Ue() {
        var a = Fa(5);
        return function(b, c) {
            if (void 0 !== b)
                return Math.abs(b + c) <= a ? 0 : b + c
        }
    }
    ;function Ve(a, b) {
        a = void 0 !== b ? a.toFixed(b) : "" + a;
        b = a.indexOf(".");
        b = -1 === b ? a.length : b;
        return 2 < b ? a : Array(3 - b).join("0") + a
    }
    function We(a) {
        a = ("" + a).split(".");
        for (var b = ["1", "3"], c = 0; c < Math.max(a.length, b.length); c++) {
            var d = parseInt(a[c] || "0", 10)
              , e = parseInt(b[c] || "0", 10);
            if (d > e)
                return 1;
            if (e > d)
                return -1
        }
        return 0
    }
    ;function Xe(a, b) {
        a[0] += b[0];
        a[1] += b[1];
        return a
    }
    function Ye(a, b) {
        var c = b.ud()
          , d = b.xa();
        b = d[0];
        d = d[1];
        var e = a[0] - b;
        a = a[1] - d;
        e || a || (e = 1);
        var f = Math.sqrt(e * e + a * a);
        return [b + c * e / f, d + c * a / f]
    }
    function Ze(a, b) {
        var c = a[0];
        a = a[1];
        var d = b[0]
          , e = b[1];
        b = d[0];
        d = d[1];
        var f = e[0];
        e = e[1];
        var g = f - b
          , h = e - d;
        c = g || h ? (g * (c - b) + h * (a - d)) / (g * g + h * h || 0) : 0;
        0 >= c ? (a = b,
        c = d) : 1 <= c ? (a = f,
        c = e) : (a = b + c * g,
        c = d + c * h);
        return [a, c]
    }
    function $e(a, b, c) {
        b = Ga(b + 180, 360) - 180;
        var d = Math.abs(3600 * b);
        c = c || 0;
        var e = Math.pow(10, c)
          , f = Math.floor(d / 3600)
          , g = Math.floor((d - 3600 * f) / 60);
        d = Math.ceil((d - 3600 * f - 60 * g) * e) / e;
        60 <= d && (d = 0,
        g += 1);
        60 <= g && (g = 0,
        f += 1);
        return f + "\u00b0 " + Ve(g) + "\u2032 " + Ve(d, c) + "\u2033" + (b ? " " + a.charAt(0 > b ? 1 : 0) : "")
    }
    function af(a, b, c) {
        return a ? b.replace("{x}", a[0].toFixed(c)).replace("{y}", a[1].toFixed(c)) : ""
    }
    function bf(a, b) {
        for (var c = !0, d = a.length - 1; 0 <= d; --d)
            if (a[d] != b[d]) {
                c = !1;
                break
            }
        return c
    }
    function cf(a, b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        var d = a[1] * c + a[0] * b;
        a[0] = a[0] * c - a[1] * b;
        a[1] = d;
        return a
    }
    function df(a, b) {
        a[0] *= b;
        a[1] *= b
    }
    function ef(a, b) {
        var c = a[0] - b[0];
        a = a[1] - b[1];
        return c * c + a * a
    }
    function ff(a, b) {
        return Math.sqrt(ef(a, b))
    }
    function gf(a, b) {
        return ef(a, Ze(a, b))
    }
    function hf(a, b) {
        return af(a, "{x}, {y}", b)
    }
    ;function jf() {
        return !0
    }
    function kf() {
        return !1
    }
    ;function lf() {
        Qc.call(this);
        this.o = Ma();
        this.v = -1;
        this.i = {};
        this.l = this.g = 0
    }
    v(lf, Qc);
    k = lf.prototype;
    k.Db = function(a, b) {
        b = b ? b : [NaN, NaN];
        this.Jb(a[0], a[1], b, Infinity);
        return b
    }
    ;
    k.vb = function(a) {
        return this.Pc(a[0], a[1])
    }
    ;
    k.Pc = kf;
    k.G = function(a) {
        this.v != this.f && (this.o = this.Ce(this.o),
        this.v = this.f);
        var b = this.o;
        a ? (a[0] = b[0],
        a[1] = b[1],
        a[2] = b[2],
        a[3] = b[3]) : a = b;
        return a
    }
    ;
    k.Pb = function(a) {
        return this.$d(a * a)
    }
    ;
    k.wb = function(a, b) {
        this.Fc(ac(a, b));
        return this
    }
    ;
    function mf(a, b, c, d, e, f) {
        for (var g = f ? f : [], h = 0; b < c; b += d) {
            var l = a[b]
              , m = a[b + 1];
            g[h++] = e[0] * l + e[2] * m + e[4];
            g[h++] = e[1] * l + e[3] * m + e[5]
        }
        f && g.length != h && (g.length = h);
        return g
    }
    function nf(a, b, c, d, e, f, g) {
        for (var h = g ? g : [], l = 0, m; b < c; b += d)
            for (h[l++] = a[b] + e,
            h[l++] = a[b + 1] + f,
            m = b + 2; m < b + d; ++m)
                h[l++] = a[m];
        g && h.length != l && (h.length = l);
        return h
    }
    ;function pf() {
        lf.call(this);
        this.ja = "XY";
        this.a = 2;
        this.A = null
    }
    v(pf, lf);
    function qf(a) {
        var b;
        "XY" == a ? b = 2 : "XYZ" == a || "XYM" == a ? b = 3 : "XYZM" == a && (b = 4);
        return b
    }
    k = pf.prototype;
    k.Pc = kf;
    k.Ce = function(a) {
        return Za(this.A, 0, this.A.length, this.a, a)
    }
    ;
    k.bc = function() {
        return this.A.slice(0, this.a)
    }
    ;
    k.ba = function() {
        return this.A
    }
    ;
    k.cc = function() {
        return this.A.slice(this.A.length - this.a)
    }
    ;
    k.dc = function() {
        return this.ja
    }
    ;
    k.$d = function(a) {
        this.l != this.f && (sb(this.i),
        this.g = 0,
        this.l = this.f);
        if (0 > a || this.g && a <= this.g)
            return this;
        var b = a.toString();
        if (this.i.hasOwnProperty(b))
            return this.i[b];
        var c = this.md(a);
        if (c.ba().length < this.A.length)
            return this.i[b] = c;
        this.g = a;
        return this
    }
    ;
    k.md = function() {
        return this
    }
    ;
    k.ma = function() {
        return this.a
    }
    ;
    function rf(a, b, c) {
        a.a = qf(b);
        a.ja = b;
        a.A = c
    }
    function sf(a, b, c, d) {
        if (b)
            c = qf(b);
        else {
            for (b = 0; b < d; ++b)
                if (c.length)
                    c = c[0];
                else {
                    a.ja = "XY";
                    a.a = 2;
                    return
                }
            c = c.length;
            var e;
            2 == c ? e = "XY" : 3 == c ? e = "XYZ" : 4 == c && (e = "XYZM");
            b = e
        }
        a.ja = b;
        a.a = c
    }
    k.Fc = function(a) {
        this.A && (a(this.A, this.A, this.a),
        this.s())
    }
    ;
    k.rotate = function(a, b) {
        var c = this.ba();
        if (c) {
            var d = c.length
              , e = this.ma()
              , f = c ? c : []
              , g = Math.cos(a);
            a = Math.sin(a);
            var h = b[0];
            b = b[1];
            for (var l = 0, m = 0; m < d; m += e) {
                var n = c[m] - h
                  , p = c[m + 1] - b;
                f[l++] = h + n * g - p * a;
                f[l++] = b + n * a + p * g;
                for (n = m + 2; n < m + e; ++n)
                    f[l++] = c[n]
            }
            c && f.length != l && (f.length = l);
            this.s()
        }
    }
    ;
    k.scale = function(a, b, c) {
        var d = b;
        void 0 === d && (d = a);
        var e = c;
        e || (e = lb(this.G()));
        if (c = this.ba()) {
            b = c.length;
            var f = this.ma()
              , g = c ? c : []
              , h = e[0];
            e = e[1];
            for (var l = 0, m = 0; m < b; m += f) {
                var n = c[m] - h
                  , p = c[m + 1] - e;
                g[l++] = h + a * n;
                g[l++] = e + d * p;
                for (n = m + 2; n < m + f; ++n)
                    g[l++] = c[n]
            }
            c && g.length != l && (g.length = l);
            this.s()
        }
    }
    ;
    k.translate = function(a, b) {
        var c = this.ba();
        c && (nf(c, 0, c.length, this.ma(), a, b, c),
        this.s())
    }
    ;
    function tf(a, b, c, d) {
        for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d) {
            var h = a[b]
              , l = a[b + 1];
            e += g * h - f * l;
            f = h;
            g = l
        }
        return e / 2
    }
    function uf(a, b, c, d) {
        var e = 0, f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g];
            e += tf(a, b, h, d);
            b = h
        }
        return e
    }
    ;function vf(a, b, c, d, e, f, g) {
        var h = a[b]
          , l = a[b + 1]
          , m = a[c] - h
          , n = a[c + 1] - l;
        if (m || n)
            if (f = ((e - h) * m + (f - l) * n) / (m * m + n * n),
            1 < f)
                b = c;
            else if (0 < f) {
                for (e = 0; e < d; ++e)
                    g[e] = Ha(a[b + e], a[c + e], f);
                g.length = d;
                return
            }
        for (e = 0; e < d; ++e)
            g[e] = a[b + e];
        g.length = d
    }
    function wf(a, b, c, d, e) {
        var f = a[b]
          , g = a[b + 1];
        for (b += d; b < c; b += d) {
            var h = a[b]
              , l = a[b + 1];
            f = Ea(f, g, h, l);
            f > e && (e = f);
            f = h;
            g = l
        }
        return e
    }
    function xf(a, b, c, d, e) {
        var f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g];
            e = wf(a, b, h, d, e);
            b = h
        }
        return e
    }
    function yf(a, b, c, d, e, f, g, h, l, m, n) {
        if (b == c)
            return m;
        if (!e) {
            var p = Ea(g, h, a[b], a[b + 1]);
            if (p < m) {
                for (n = 0; n < d; ++n)
                    l[n] = a[b + n];
                l.length = d;
                return p
            }
            return m
        }
        for (var q = n ? n : [NaN, NaN], t = b + d; t < c; )
            if (vf(a, t - d, t, d, g, h, q),
            p = Ea(g, h, q[0], q[1]),
            p < m) {
                m = p;
                for (n = 0; n < d; ++n)
                    l[n] = q[n];
                l.length = d;
                t += d
            } else
                t += d * Math.max((Math.sqrt(p) - Math.sqrt(m)) / e | 0, 1);
        if (f && (vf(a, c - d, b, d, g, h, q),
        p = Ea(g, h, q[0], q[1]),
        p < m)) {
            m = p;
            for (n = 0; n < d; ++n)
                l[n] = q[n];
            l.length = d
        }
        return m
    }
    function zf(a, b, c, d, e, f, g, h, l, m, n) {
        n = n ? n : [NaN, NaN];
        var p;
        var q = 0;
        for (p = c.length; q < p; ++q) {
            var t = c[q];
            m = yf(a, b, t, d, e, f, g, h, l, m, n);
            b = t
        }
        return m
    }
    ;function Af(a, b) {
        var c = 0, d;
        var e = 0;
        for (d = b.length; e < d; ++e)
            a[c++] = b[e];
        return c
    }
    function Bf(a, b, c, d) {
        var e;
        var f = 0;
        for (e = c.length; f < e; ++f) {
            var g = c[f], h;
            for (h = 0; h < d; ++h)
                a[b++] = g[h]
        }
        return b
    }
    function Cf(a, b, c, d, e) {
        e = e ? e : [];
        var f = 0, g;
        var h = 0;
        for (g = c.length; h < g; ++h)
            b = Bf(a, b, c[h], d),
            e[f++] = b;
        e.length = f;
        return e
    }
    ;function Df(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        for (var f = 0; b < c; b += d)
            e[f++] = a.slice(b, b + d);
        e.length = f;
        return e
    }
    function Ef(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        var f = 0, g;
        var h = 0;
        for (g = c.length; h < g; ++h) {
            var l = c[h];
            e[f++] = Df(a, b, l, d, e[f]);
            b = l
        }
        e.length = f;
        return e
    }
    function Ff(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        var f = 0, g;
        var h = 0;
        for (g = c.length; h < g; ++h) {
            var l = c[h];
            e[f++] = Ef(a, b, l, d, e[f]);
            b = l[l.length - 1]
        }
        e.length = f;
        return e
    }
    ;function Gf(a, b, c, d, e, f, g) {
        var h = (c - b) / d;
        if (3 > h) {
            for (; b < c; b += d)
                f[g++] = a[b],
                f[g++] = a[b + 1];
            return g
        }
        var l = Array(h);
        l[0] = 1;
        l[h - 1] = 1;
        c = [b, c - d];
        for (var m = 0, n; 0 < c.length; ) {
            var p = c.pop()
              , q = c.pop()
              , t = 0
              , u = a[q]
              , x = a[q + 1]
              , B = a[p]
              , z = a[p + 1];
            for (n = q + d; n < p; n += d) {
                var G = Da(a[n], a[n + 1], u, x, B, z);
                G > t && (m = n,
                t = G)
            }
            t > e && (l[(m - b) / d] = 1,
            q + d < m && c.push(q, m),
            m + d < p && c.push(m, p))
        }
        for (n = 0; n < h; ++n)
            l[n] && (f[g++] = a[b + n * d],
            f[g++] = a[b + n * d + 1]);
        return g
    }
    function Hf(a, b, c, d, e, f, g, h) {
        var l;
        var m = 0;
        for (l = c.length; m < l; ++m) {
            var n = c[m];
            a: {
                var p = a
                  , q = n
                  , t = d
                  , u = e
                  , x = f
                  , B = g;
                if (b != q) {
                    var z = u * Math.round(p[b] / u)
                      , G = u * Math.round(p[b + 1] / u);
                    b += t;
                    x[B++] = z;
                    x[B++] = G;
                    do {
                        var E = u * Math.round(p[b] / u);
                        g = u * Math.round(p[b + 1] / u);
                        b += t;
                        if (b == q) {
                            x[B++] = E;
                            x[B++] = g;
                            g = B;
                            break a
                        }
                    } while (E == z && g == G);
                    for (; b < q; ) {
                        var ia = u * Math.round(p[b] / u);
                        var T = u * Math.round(p[b + 1] / u);
                        b += t;
                        if (ia != E || T != g) {
                            var R = E - z
                              , U = g - G
                              , ta = ia - z
                              , A = T - G;
                            R * A == U * ta && (0 > R && ta < R || R == ta || 0 < R && ta > R) && (0 > U && A < U || U == A || 0 < U && A > U) || (x[B++] = E,
                            x[B++] = g,
                            z = E,
                            G = g);
                            E = ia;
                            g = T
                        }
                    }
                    x[B++] = E;
                    x[B++] = g
                }
                g = B
            }
            h.push(g);
            b = n
        }
        return g
    }
    ;function If(a, b) {
        pf.call(this);
        this.c = this.j = -1;
        this.na(a, b)
    }
    v(If, pf);
    k = If.prototype;
    k.clone = function() {
        var a = new If(null);
        Jf(a, this.ja, this.A.slice());
        return a
    }
    ;
    k.Jb = function(a, b, c, d) {
        if (d < Qa(this.G(), a, b))
            return d;
        this.c != this.f && (this.j = Math.sqrt(wf(this.A, 0, this.A.length, this.a, 0)),
        this.c = this.f);
        return yf(this.A, 0, this.A.length, this.a, this.j, !0, a, b, c, d)
    }
    ;
    k.Fn = function() {
        return tf(this.A, 0, this.A.length, this.a)
    }
    ;
    k.X = function() {
        return Df(this.A, 0, this.A.length, this.a)
    }
    ;
    k.md = function(a) {
        var b = [];
        b.length = Gf(this.A, 0, this.A.length, this.a, a, b, 0);
        a = new If(null);
        Jf(a, "XY", b);
        return a
    }
    ;
    k.T = function() {
        return "LinearRing"
    }
    ;
    k.Ya = function() {}
    ;
    k.na = function(a, b) {
        a ? (sf(this, b, a, 1),
        this.A || (this.A = []),
        this.A.length = Bf(this.A, 0, a, this.a),
        this.s()) : Jf(this, "XY", null)
    }
    ;
    function Jf(a, b, c) {
        rf(a, b, c);
        a.s()
    }
    ;function C(a, b) {
        pf.call(this);
        this.na(a, b)
    }
    v(C, pf);
    k = C.prototype;
    k.clone = function() {
        var a = new C(null);
        a.aa(this.ja, this.A.slice());
        return a
    }
    ;
    k.Jb = function(a, b, c, d) {
        var e = this.A;
        a = Ea(a, b, e[0], e[1]);
        if (a < d) {
            d = this.a;
            for (b = 0; b < d; ++b)
                c[b] = e[b];
            c.length = d;
            return a
        }
        return d
    }
    ;
    k.X = function() {
        return this.A ? this.A.slice() : []
    }
    ;
    k.Ce = function(a) {
        return Xa(this.A, a)
    }
    ;
    k.T = function() {
        return "Point"
    }
    ;
    k.Ya = function(a) {
        return Sa(a, this.A[0], this.A[1])
    }
    ;
    k.na = function(a, b) {
        a ? (sf(this, b, a, 0),
        this.A || (this.A = []),
        this.A.length = Af(this.A, a),
        this.s()) : this.aa("XY", null)
    }
    ;
    k.aa = function(a, b) {
        rf(this, a, b);
        this.s()
    }
    ;
    function Kf(a, b, c, d, e) {
        return !cb(e, function(e) {
            return !Lf(a, b, c, d, e[0], e[1])
        })
    }
    function Lf(a, b, c, d, e, f) {
        for (var g = 0, h = a[c - d], l = a[c - d + 1]; b < c; b += d) {
            var m = a[b]
              , n = a[b + 1];
            l <= f ? n > f && 0 < (m - h) * (f - l) - (e - h) * (n - l) && g++ : n <= f && 0 > (m - h) * (f - l) - (e - h) * (n - l) && g--;
            h = m;
            l = n
        }
        return !!g
    }
    function Mf(a, b, c, d, e, f) {
        if (!c.length || !Lf(a, b, c[0], d, e, f))
            return !1;
        var g;
        b = 1;
        for (g = c.length; b < g; ++b)
            if (Lf(a, c[b - 1], c[b], d, e, f))
                return !1;
        return !0
    }
    ;function Of(a, b, c, d, e, f, g) {
        var h, l = e[f + 1], m = [], n = c[0];
        var p = a[n - d];
        var q = a[n - d + 1];
        for (h = b; h < n; h += d) {
            var t = a[h];
            var u = a[h + 1];
            if (l <= q && u <= l || q <= l && l <= u)
                p = (l - q) / (u - q) * (t - p) + p,
                m.push(p);
            p = t;
            q = u
        }
        n = NaN;
        q = -Infinity;
        m.sort(fa);
        p = m[0];
        h = 1;
        for (u = m.length; h < u; ++h) {
            t = m[h];
            var x = Math.abs(t - p);
            x > q && (p = (p + t) / 2,
            Mf(a, b, c, d, p, l) && (n = p,
            q = x));
            p = t
        }
        isNaN(n) && (n = e[f]);
        return g ? (g.push(n, l),
        g) : [n, l]
    }
    ;function Pf(a, b, c, d, e, f) {
        for (var g = [a[b], a[b + 1]], h = [], l; b + d < c; b += d) {
            h[0] = a[b + d];
            h[1] = a[b + d + 1];
            if (l = e.call(f, g, h))
                return l;
            g[0] = h[0];
            g[1] = h[1]
        }
        return !1
    }
    ;function Qf(a, b, c, d, e) {
        var f = $a(Ma(), a, b, c, d);
        return ob(e, f) ? Ta(e, f) || f[0] >= e[0] && f[2] <= e[2] || f[1] >= e[1] && f[3] <= e[3] ? !0 : Pf(a, b, c, d, function(a, b) {
            var c = !1
              , d = Ua(e, a)
              , f = Ua(e, b);
            if (1 === d || 1 === f)
                c = !0;
            else {
                var g = e[0]
                  , h = e[1]
                  , t = e[2]
                  , u = e[3]
                  , x = b[0];
                b = b[1];
                a = (b - a[1]) / (x - a[0]);
                f & 2 && !(d & 2) && (c = x - (b - u) / a,
                c = c >= g && c <= t);
                c || !(f & 4) || d & 4 || (c = b - (x - t) * a,
                c = c >= h && c <= u);
                c || !(f & 8) || d & 8 || (c = x - (b - h) / a,
                c = c >= g && c <= t);
                c || !(f & 16) || d & 16 || (c = b - (x - g) * a,
                c = c >= h && c <= u)
            }
            return c
        }) : !1
    }
    function Rf(a, b, c, d, e) {
        var f = c[0];
        if (!(Qf(a, b, f, d, e) || Lf(a, b, f, d, e[0], e[1]) || Lf(a, b, f, d, e[0], e[3]) || Lf(a, b, f, d, e[2], e[1]) || Lf(a, b, f, d, e[2], e[3])))
            return !1;
        if (1 === c.length)
            return !0;
        b = 1;
        for (f = c.length; b < f; ++b)
            if (Kf(a, c[b - 1], c[b], d, e))
                return !1;
        return !0
    }
    ;function Sf(a, b, c, d) {
        for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d) {
            var h = a[b]
              , l = a[b + 1];
            e += (h - f) * (l + g);
            f = h;
            g = l
        }
        return 0 < e
    }
    function Tf(a, b, c, d) {
        var e = 0;
        d = void 0 !== d ? d : !1;
        var f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g];
            e = Sf(a, e, h, c);
            if (!g) {
                if (d && e || !d && !e)
                    return !1
            } else if (d && !e || !d && e)
                return !1;
            e = h
        }
        return !0
    }
    function Uf(a, b, c, d, e) {
        e = void 0 !== e ? e : !1;
        var f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g]
              , l = Sf(a, b, h, d);
            if (g ? e && !l || !e && l : e && l || !e && !l) {
                l = a;
                for (var m = h, n = d; b < m - n; ) {
                    var p;
                    for (p = 0; p < n; ++p) {
                        var q = l[b + p];
                        l[b + p] = l[m - n + p];
                        l[m - n + p] = q
                    }
                    b += n;
                    m -= n
                }
            }
            b = h
        }
        return b
    }
    function Vf(a, b, c, d) {
        var e = 0, f;
        var g = 0;
        for (f = b.length; g < f; ++g)
            e = Uf(a, e, b[g], c, d);
        return e
    }
    ;function D(a, b) {
        pf.call(this);
        this.c = [];
        this.u = -1;
        this.D = null;
        this.I = this.B = this.C = -1;
        this.j = null;
        this.na(a, b)
    }
    v(D, pf);
    k = D.prototype;
    k.zk = function(a) {
        this.A ? ka(this.A, a.ba()) : this.A = a.ba().slice();
        this.c.push(this.A.length);
        this.s()
    }
    ;
    k.clone = function() {
        var a = new D(null);
        a.aa(this.ja, this.A.slice(), this.c.slice());
        return a
    }
    ;
    k.Jb = function(a, b, c, d) {
        if (d < Qa(this.G(), a, b))
            return d;
        this.B != this.f && (this.C = Math.sqrt(xf(this.A, 0, this.c, this.a, 0)),
        this.B = this.f);
        return zf(this.A, 0, this.c, this.a, this.C, !0, a, b, c, d)
    }
    ;
    k.Pc = function(a, b) {
        return Mf(this.Tb(), 0, this.c, this.a, a, b)
    }
    ;
    k.In = function() {
        return uf(this.Tb(), 0, this.c, this.a)
    }
    ;
    k.X = function(a) {
        if (void 0 !== a) {
            var b = this.Tb().slice();
            Uf(b, 0, this.c, this.a, a)
        } else
            b = this.A;
        return Ef(b, 0, this.c, this.a)
    }
    ;
    k.rb = function() {
        return this.c
    }
    ;
    function Wf(a) {
        if (a.u != a.f) {
            var b = lb(a.G());
            a.D = Of(a.Tb(), 0, a.c, a.a, b, 0);
            a.u = a.f
        }
        return a.D
    }
    k.el = function() {
        return new C(Wf(this))
    }
    ;
    k.kl = function() {
        return this.c.length
    }
    ;
    k.Kh = function(a) {
        if (0 > a || this.c.length <= a)
            return null;
        var b = new If(null);
        Jf(b, this.ja, this.A.slice(a ? this.c[a - 1] : 0, this.c[a]));
        return b
    }
    ;
    k.Yd = function() {
        var a = this.ja, b = this.A, c = this.c, d = [], e = 0, f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g]
              , l = new If(null);
            Jf(l, a, b.slice(e, h));
            d.push(l);
            e = h
        }
        return d
    }
    ;
    k.Tb = function() {
        if (this.I != this.f) {
            var a = this.A;
            Tf(a, this.c, this.a) ? this.j = a : (this.j = a.slice(),
            this.j.length = Uf(this.j, 0, this.c, this.a));
            this.I = this.f
        }
        return this.j
    }
    ;
    k.md = function(a) {
        var b = []
          , c = [];
        b.length = Hf(this.A, 0, this.c, this.a, Math.sqrt(a), b, 0, c);
        a = new D(null);
        a.aa("XY", b, c);
        return a
    }
    ;
    k.T = function() {
        return "Polygon"
    }
    ;
    k.Ya = function(a) {
        return Rf(this.Tb(), 0, this.c, this.a, a)
    }
    ;
    k.na = function(a, b) {
        a ? (sf(this, b, a, 2),
        this.A || (this.A = []),
        a = Cf(this.A, 0, a, this.a, this.c),
        this.A.length = a.length ? a[a.length - 1] : 0,
        this.s()) : this.aa("XY", null, this.c)
    }
    ;
    k.aa = function(a, b, c) {
        rf(this, a, b);
        this.c = c;
        this.s()
    }
    ;
    function Xf(a, b, c, d) {
        var e = d ? d : 32;
        d = [];
        var f;
        for (f = 0; f < e; ++f)
            ka(d, a.offset(b, c, 2 * Math.PI * f / e));
        d.push(d[0], d[1]);
        a = new D(null);
        a.aa("XY", d, [d.length]);
        return a
    }
    function Yf(a) {
        var b = a[0]
          , c = a[1]
          , d = a[2];
        a = a[3];
        b = [b, c, b, a, d, a, d, c, b, c];
        c = new D(null);
        c.aa("XY", b, [b.length]);
        return c
    }
    function Zf(a, b, c) {
        var d = b ? b : 32
          , e = a.ma();
        b = a.ja;
        var f = new D(null,b);
        d = e * (d + 1);
        e = Array(d);
        for (var g = 0; g < d; g++)
            e[g] = 0;
        f.aa(b, e, [e.length]);
        $f(f, a.xa(), a.ud(), c);
        return f
    }
    function $f(a, b, c, d) {
        var e = a.ba()
          , f = a.ja
          , g = a.ma()
          , h = a.rb()
          , l = e.length / g - 1;
        d = d ? d : 0;
        for (var m, n, p = 0; p <= l; ++p)
            n = p * g,
            m = d + 2 * Ga(p, l) * Math.PI / l,
            e[n] = b[0] + c * Math.cos(m),
            e[n + 1] = b[1] + c * Math.sin(m);
        a.aa(f, e, h)
    }
    ;function F(a) {
        Qc.call(this);
        a = rb({}, a);
        this.l = [0, 0];
        this.c = [];
        this.Ff = this.Ff.bind(this);
        this.v = Xb(a.projection);
        ag(this, a)
    }
    v(F, Qc);
    function ag(a, b) {
        var c = {};
        c.center = void 0 !== b.center ? b.center : null;
        var d = void 0 !== b.minZoom ? b.minZoom : 0;
        var e = void 0 !== b.maxZoom ? b.maxZoom : 28;
        var f = void 0 !== b.zoomFactor ? b.zoomFactor : 2;
        if (void 0 !== b.resolutions) {
            e = b.resolutions;
            var g = e[0];
            var h = e[e.length - 1];
            e = Pe(e)
        } else {
            g = Xb(b.projection);
            h = g.G();
            var l = (h ? Math.max(jb(h), kb(h)) : 360 * wb.degrees / g.Nc()) / 256 / Math.pow(2, 0)
              , m = l / Math.pow(2, 28);
            g = b.maxResolution;
            void 0 !== g ? d = 0 : g = l / Math.pow(f, d);
            h = b.minResolution;
            void 0 === h && (h = void 0 !== b.maxZoom ? void 0 !== b.maxResolution ? g / Math.pow(f, e) : l / Math.pow(f, e) : m);
            e = d + Math.floor(Math.log(g / h) / Math.log(f));
            h = g / Math.pow(f, e - d);
            e = Qe(f, g, e - d)
        }
        a.a = g;
        a.i = h;
        a.B = f;
        a.j = b.resolutions;
        a.o = d;
        (void 0 !== b.enableRotation ? b.enableRotation : 1) ? (d = b.constrainRotation,
        d = void 0 === d || !0 === d ? Ue() : !1 === d ? Se : "number" === typeof d ? Te(d) : Se) : d = Re;
        a.g = {
            center: void 0 !== b.extent ? wc(b.extent) : xc,
            resolution: e,
            rotation: d
        };
        void 0 !== b.resolution ? c.resolution = b.resolution : void 0 !== b.zoom && (c.resolution = a.constrainResolution(a.a, b.zoom - a.o));
        c.rotation = void 0 !== b.rotation ? b.rotation : 0;
        a.H(c);
        a.D = b
    }
    function bg(a, b) {
        var c = rb({}, a.D);
        void 0 !== c.resolution ? c.resolution = a.Pa() : c.zoom = a.Qh();
        c.center = a.xa();
        c.rotation = a.Qa();
        return rb({}, c, b)
    }
    k = F.prototype;
    k.animate = function(a) {
        var b = Date.now()
          , c = this.xa().slice()
          , d = this.Pa()
          , e = this.Qa()
          , f = arguments.length;
        if (1 < f && "function" === typeof arguments[f - 1]) {
            var g = arguments[f - 1];
            --f
        }
        for (var h = [], l = 0; l < f; ++l) {
            var m = arguments[l]
              , n = {
                start: b,
                complete: !1,
                anchor: m.anchor,
                duration: void 0 !== m.duration ? m.duration : 1E3,
                easing: m.easing || pd
            };
            m.center && (n.ke = c,
            n.oe = m.center,
            c = n.oe);
            void 0 !== m.zoom ? (n.me = d,
            n.ad = this.constrainResolution(this.a, m.zoom - this.o, 0),
            d = n.ad) : m.resolution && (n.me = d,
            n.ad = m.resolution,
            d = n.ad);
            void 0 !== m.rotation && (n.Df = e,
            n.pe = e + (Ga(m.rotation - e + Math.PI, 2 * Math.PI) - Math.PI),
            e = n.pe);
            n.callback = g;
            n.ke && n.oe && !bf(n.ke, n.oe) || n.me !== n.ad || n.Df !== n.pe ? b += n.duration : n.complete = !0;
            h.push(n)
        }
        this.c.push(h);
        cg(this, 0, 1);
        this.Ff()
    }
    ;
    k.Kc = function() {
        return 0 < dg(this)[0]
    }
    ;
    k.cl = function() {
        return 0 < dg(this)[1]
    }
    ;
    k.hd = function() {
        cg(this, 0, -dg(this)[0]);
        for (var a = 0, b = this.c.length; a < b; ++a) {
            var c = this.c[a];
            c[0].callback && c[0].callback(!1)
        }
        this.c.length = 0
    }
    ;
    k.Ff = function() {
        void 0 !== this.u && (cancelAnimationFrame(this.u),
        this.u = void 0);
        if (this.Kc()) {
            for (var a = Date.now(), b = !1, c = this.c.length - 1; 0 <= c; --c) {
                for (var d = this.c[c], e = !0, f = 0, g = d.length; f < g; ++f) {
                    var h = d[f];
                    if (!h.complete) {
                        b = a - h.start;
                        b = 0 < h.duration ? b / h.duration : 1;
                        1 <= b ? (h.complete = !0,
                        b = 1) : e = !1;
                        b = h.easing(b);
                        if (h.ke) {
                            var l = h.ke[0]
                              , m = h.ke[1];
                            this.set("center", [l + b * (h.oe[0] - l), m + b * (h.oe[1] - m)])
                        }
                        h.me && h.ad && (l = 1 === b ? h.ad : h.me + b * (h.ad - h.me),
                        h.anchor && this.set("center", eg(this, l, h.anchor)),
                        this.set("resolution", l));
                        void 0 !== h.Df && void 0 !== h.pe && (b = 1 === b ? Ga(h.pe + Math.PI, 2 * Math.PI) - Math.PI : h.Df + b * (h.pe - h.Df),
                        h.anchor && this.set("center", fg(this, b, h.anchor)),
                        this.set("rotation", b));
                        b = !0;
                        if (!h.complete)
                            break
                    }
                }
                e && (this.c[c] = null,
                cg(this, 0, -1),
                (d = d[0].callback) && d(!0))
            }
            this.c = this.c.filter(Boolean);
            b && void 0 === this.u && (this.u = requestAnimationFrame(this.Ff))
        }
    }
    ;
    function fg(a, b, c) {
        var d = a.xa();
        if (void 0 !== d) {
            var e = [d[0] - c[0], d[1] - c[1]];
            cf(e, b - a.Qa());
            Xe(e, c)
        }
        return e
    }
    function eg(a, b, c) {
        var d, e = a.xa();
        a = a.Pa();
        void 0 !== e && void 0 !== a && (d = [c[0] - b * (c[0] - e[0]) / a, c[1] - b * (c[1] - e[1]) / a]);
        return d
    }
    function gg(a) {
        var b = [100, 100];
        a = '.ol-viewport[data-view="' + w(a) + '"]';
        if (a = document.querySelector(a))
            a = getComputedStyle(a),
            b[0] = parseInt(a.width, 10),
            b[1] = parseInt(a.height, 10);
        return b
    }
    k.Gc = function(a) {
        return this.g.center(a)
    }
    ;
    k.constrainResolution = function(a, b, c) {
        return this.g.resolution(a, b || 0, c || 0)
    }
    ;
    k.constrainRotation = function(a, b) {
        return this.g.rotation(a, b || 0)
    }
    ;
    k.xa = function() {
        return this.get("center")
    }
    ;
    function dg(a, b) {
        return void 0 !== b ? (b[0] = a.l[0],
        b[1] = a.l[1],
        b) : a.l.slice()
    }
    k.gd = function(a) {
        a = a || gg(this);
        var b = this.xa();
        va(b, 1);
        var c = this.Pa();
        va(void 0 !== c, 2);
        var d = this.Qa();
        va(void 0 !== d, 3);
        return mb(b, c, d, a)
    }
    ;
    k.an = function() {
        return this.a
    }
    ;
    k.cn = function() {
        return this.i
    }
    ;
    k.bn = function() {
        return this.Ne(this.i)
    }
    ;
    k.rq = function(a) {
        ag(this, bg(this, {
            maxZoom: a
        }))
    }
    ;
    k.dn = function() {
        return this.Ne(this.a)
    }
    ;
    k.sq = function(a) {
        ag(this, bg(this, {
            minZoom: a
        }))
    }
    ;
    k.en = function() {
        return this.v
    }
    ;
    k.Pa = function() {
        return this.get("resolution")
    }
    ;
    k.fn = function() {
        return this.j
    }
    ;
    k.Ke = function(a, b) {
        b = b || gg(this);
        return Math.max(jb(a) / b[0], kb(a) / b[1])
    }
    ;
    function hg(a) {
        var b = a.a
          , c = Math.log(b / a.i) / Math.log(2);
        return function(a) {
            return b / Math.pow(2, a * c)
        }
    }
    k.Qa = function() {
        return this.get("rotation")
    }
    ;
    function ig(a) {
        var b = a.a
          , c = Math.log(b / a.i) / Math.log(2);
        return function(a) {
            return Math.log(b / a) / Math.log(2) / c
        }
    }
    k.getState = function() {
        var a = this.xa()
          , b = this.v
          , c = this.Pa()
          , d = this.Qa();
        return {
            center: a.slice(),
            projection: void 0 !== b ? b : null,
            resolution: c,
            rotation: d
        }
    }
    ;
    k.Qh = function() {
        var a, b = this.Pa();
        void 0 !== b && (a = this.Ne(b));
        return a
    }
    ;
    k.Ne = function(a) {
        if (a >= this.i && a <= this.a) {
            var b = this.o || 0;
            if (this.j) {
                var c = ja(this.j, a, 1);
                b += c;
                if (c == this.j.length - 1)
                    return b;
                var d = this.j[c];
                c = d / this.j[c + 1]
            } else
                d = this.a,
                c = this.B;
            b += Math.log(d / a) / Math.log(c)
        }
        return b
    }
    ;
    k.Oh = function(a) {
        return this.constrainResolution(this.a, a - this.o, 0)
    }
    ;
    k.Xf = function(a, b) {
        b = b || {};
        var c = b.size;
        c || (c = gg(this));
        if (a instanceof pf)
            if ("Circle" === a.T()) {
                a = a.G();
                var d = Yf(a);
                d.rotate(this.Qa(), lb(a))
            } else
                d = a;
        else
            va(Array.isArray(a), 24),
            va(!ib(a), 25),
            d = Yf(a);
        var e = b.padding ? b.padding : [0, 0, 0, 0], f = void 0 !== b.constrainResolution ? b.constrainResolution : !0, g = void 0 !== b.nearest ? b.nearest : !1, h;
        void 0 !== b.minResolution ? h = b.minResolution : void 0 !== b.maxZoom ? h = this.constrainResolution(this.a, b.maxZoom - this.o, 0) : h = 0;
        var l = d.ba()
          , m = this.Qa();
        a = Math.cos(-m);
        m = Math.sin(-m);
        var n = Infinity
          , p = Infinity
          , q = -Infinity
          , t = -Infinity;
        d = d.ma();
        for (var u = 0, x = l.length; u < x; u += d) {
            var B = l[u] * a - l[u + 1] * m
              , z = l[u] * m + l[u + 1] * a;
            n = Math.min(n, B);
            p = Math.min(p, z);
            q = Math.max(q, B);
            t = Math.max(t, z)
        }
        c = this.Ke([n, p, q, t], [c[0] - e[1] - e[3], c[1] - e[0] - e[2]]);
        c = isNaN(c) ? h : Math.max(c, h);
        f && (h = this.constrainResolution(c, 0, 0),
        !g && h < c && (h = this.constrainResolution(h, -1, 0)),
        c = h);
        m = -m;
        h = (n + q) / 2 + (e[1] - e[3]) / 2 * c;
        e = (p + t) / 2 + (e[0] - e[2]) / 2 * c;
        a = [h * a - e * m, e * a + h * m];
        e = b.callback ? b.callback : ra;
        void 0 !== b.duration ? this.animate({
            resolution: c,
            center: a,
            duration: b.duration,
            easing: b.easing
        }, e) : (this.Yc(c),
        this.qb(a),
        setTimeout(e.bind(void 0, !0), 0))
    }
    ;
    k.Fk = function(a, b, c) {
        var d = this.Qa()
          , e = Math.cos(-d);
        d = Math.sin(-d);
        var f = a[0] * e - a[1] * d;
        a = a[1] * e + a[0] * d;
        var g = this.Pa();
        f += (b[0] / 2 - c[0]) * g;
        a += (c[1] - b[1] / 2) * g;
        d = -d;
        this.qb([f * e - a * d, a * e + f * d])
    }
    ;
    function jg(a) {
        return !!a.xa() && void 0 !== a.Pa()
    }
    k.rotate = function(a, b) {
        void 0 !== b && (b = fg(this, a, b),
        this.qb(b));
        this.Ze(a)
    }
    ;
    k.qb = function(a) {
        this.set("center", a);
        this.Kc() && this.hd()
    }
    ;
    function cg(a, b, c) {
        a.l[b] += c;
        a.s()
    }
    k.Yc = function(a) {
        this.set("resolution", a);
        this.Kc() && this.hd()
    }
    ;
    k.Ze = function(a) {
        this.set("rotation", a);
        this.Kc() && this.hd()
    }
    ;
    k.zq = function(a) {
        this.Yc(this.Oh(a))
    }
    ;
    function kg(a, b, c) {
        this.i = a;
        this.c = b;
        this.g = c;
        this.b = [];
        this.a = this.f = 0
    }
    function lg(a) {
        a.b.length = 0;
        a.f = 0;
        a.a = 0
    }
    function mg(a) {
        if (6 > a.b.length)
            return !1;
        var b = Date.now() - a.g
          , c = a.b.length - 3;
        if (a.b[c + 2] < b)
            return !1;
        for (var d = c - 3; 0 < d && a.b[d + 2] > b; )
            d -= 3;
        b = a.b[c + 2] - a.b[d + 2];
        if (b < 1E3 / 60)
            return !1;
        var e = a.b[c] - a.b[d];
        c = a.b[c + 1] - a.b[d + 1];
        a.f = Math.atan2(c, e);
        a.a = Math.sqrt(e * e + c * c) / b;
        return a.a > a.c
    }
    ;function ng(a) {
        Qc.call(this);
        this.v = null;
        this.Ia(!0);
        this.handleEvent = a.handleEvent
    }
    v(ng, Qc);
    ng.prototype.c = function() {
        return this.get("active")
    }
    ;
    ng.prototype.i = function() {
        return this.v
    }
    ;
    ng.prototype.Ia = function(a) {
        this.set("active", a)
    }
    ;
    ng.prototype.setMap = function(a) {
        this.v = a
    }
    ;
    function og(a, b, c, d) {
        if (void 0 !== b) {
            var e = a.Qa()
              , f = a.xa();
            void 0 !== e && f && 0 < d ? a.animate({
                rotation: b,
                anchor: c,
                duration: d,
                easing: od
            }) : a.rotate(b, c)
        }
    }
    function pg(a, b, c, d) {
        var e = a.Pa();
        b = a.constrainResolution(e, b, 0);
        if (c && void 0 !== b && b !== e) {
            var f = a.xa();
            c = eg(a, b, c);
            c = a.Gc(c);
            c = [(b * f[0] - e * c[0]) / (b - e), (b * f[1] - e * c[1]) / (b - e)]
        }
        qg(a, b, c, d)
    }
    function qg(a, b, c, d) {
        if (b) {
            var e = a.Pa()
              , f = a.xa();
            void 0 !== e && f && b !== e && d ? a.animate({
                resolution: b,
                anchor: c,
                duration: d,
                easing: od
            }) : (c && (c = eg(a, b, c),
            a.qb(c)),
            a.Yc(b))
        }
    }
    ;function rg(a) {
        a = a ? a : {};
        this.a = a.delta ? a.delta : 1;
        ng.call(this, {
            handleEvent: sg
        });
        this.g = void 0 !== a.duration ? a.duration : 250
    }
    v(rg, ng);
    function sg(a) {
        var b = !1
          , c = a.originalEvent;
        if ("dblclick" == a.type) {
            b = a.coordinate;
            c = c.shiftKey ? -this.a : this.a;
            var d = a.map.$();
            pg(d, c, b, this.g);
            a.preventDefault();
            b = !0
        }
        return !b
    }
    ;function tg(a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
    }
    function ug(a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }
    function vg(a) {
        a = a.originalEvent;
        return !a.button && !(Nd && Od && a.ctrlKey)
    }
    function wg(a) {
        return "pointermove" == a.type
    }
    function xg(a) {
        return "singleclick" == a.type
    }
    function yg(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
    }
    function zg(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }
    function Ag(a) {
        a = a.originalEvent.target.tagName;
        return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a
    }
    function Bg(a) {
        va(a.b, 56);
        return "mouse" == a.b.pointerType
    }
    function Cg(a) {
        a = a.b;
        return a.isPrimary && 0 === a.button
    }
    ;function Dg(a) {
        a = a ? a : {};
        ng.call(this, {
            handleEvent: a.handleEvent ? a.handleEvent : Eg
        });
        this.Hf = a.handleDownEvent ? a.handleDownEvent : kf;
        this.Qf = a.handleDragEvent ? a.handleDragEvent : ra;
        this.Ck = a.handleMoveEvent ? a.handleMoveEvent : ra;
        this.Dk = a.handleUpEvent ? a.handleUpEvent : kf;
        this.D = !1;
        this.ta = {};
        this.l = []
    }
    v(Dg, ng);
    function Fg(a) {
        for (var b = a.length, c = 0, d = 0, e = 0; e < b; e++)
            c += a[e].clientX,
            d += a[e].clientY;
        return [c / b, d / b]
    }
    function Eg(a) {
        if (!(a instanceof be))
            return !0;
        var b = !1
          , c = a.type;
        if ("pointerdown" === c || "pointerdrag" === c || "pointerup" === c)
            c = a.b,
            "pointerup" == a.type ? delete this.ta[c.pointerId] : "pointerdown" == a.type ? this.ta[c.pointerId] = c : c.pointerId in this.ta && (this.ta[c.pointerId] = c),
            this.l = tb(this.ta);
        this.D ? "pointerdrag" == a.type ? this.Qf(a) : "pointerup" == a.type && (this.D = this.Dk(a) && 0 < this.l.length) : "pointerdown" == a.type ? (this.D = a = this.Hf(a),
        b = this.$c(a)) : "pointermove" == a.type && this.Ck(a);
        return !b
    }
    Dg.prototype.$c = function(a) {
        return a
    }
    ;
    function Gg(a) {
        Dg.call(this, {
            handleDownEvent: Hg,
            handleDragEvent: Jg,
            handleUpEvent: Kg
        });
        a = a ? a : {};
        this.a = a.kinetic;
        this.g = null;
        this.u = a.condition ? a.condition : yg;
        this.j = !1
    }
    v(Gg, Dg);
    function Jg(a) {
        var b = this.l
          , c = Fg(b);
        if (b.length == this.o) {
            if (this.a && this.a.b.push(c[0], c[1], Date.now()),
            this.g) {
                var d = this.g[0] - c[0]
                  , e = c[1] - this.g[1];
                a = a.map.$();
                var f = a.getState();
                d = [d, e];
                df(d, f.resolution);
                cf(d, f.rotation);
                Xe(d, f.center);
                d = a.Gc(d);
                a.qb(d)
            }
        } else
            this.a && lg(this.a);
        this.g = c;
        this.o = b.length
    }
    function Kg(a) {
        var b = a.map;
        a = b.$();
        if (this.l.length)
            return this.a && lg(this.a),
            this.g = null,
            !0;
        if (!this.j && this.a && mg(this.a)) {
            var c = this.a;
            c = (c.c - c.a) / c.i;
            var d = this.a.f
              , e = a.xa();
            e = b.Ka(e);
            b = b.Xa([e[0] - c * Math.cos(d), e[1] - c * Math.sin(d)]);
            a.animate({
                center: a.Gc(b),
                duration: 500,
                easing: od
            })
        }
        cg(a, 1, -1);
        return !1
    }
    function Hg(a) {
        if (0 < this.l.length && this.u(a)) {
            var b = a.map.$();
            this.g = null;
            this.D || cg(b, 1, 1);
            dg(b)[0] && b.qb(a.frameState.viewState.center);
            this.a && lg(this.a);
            this.j = 1 < this.l.length;
            return !0
        }
        return !1
    }
    Gg.prototype.$c = kf;
    function Lg(a) {
        a = a ? a : {};
        Dg.call(this, {
            handleDownEvent: Mg,
            handleDragEvent: Ng,
            handleUpEvent: Og
        });
        this.g = a.condition ? a.condition : ug;
        this.a = void 0;
        this.j = void 0 !== a.duration ? a.duration : 250
    }
    v(Lg, Dg);
    function Ng(a) {
        if (Bg(a)) {
            var b = a.map
              , c = b.$();
            if (c.g.rotation !== Re) {
                b = b.Mb();
                a = a.pixel;
                a = Math.atan2(b[1] / 2 - a[1], a[0] - b[0] / 2);
                if (void 0 !== this.a) {
                    b = a - this.a;
                    var d = c.Qa();
                    og(c, d - b)
                }
                this.a = a
            }
        }
    }
    function Og(a) {
        if (!Bg(a))
            return !0;
        a = a.map.$();
        cg(a, 1, -1);
        var b = a.Qa()
          , c = this.j;
        b = a.constrainRotation(b, 0);
        og(a, b, void 0, c);
        return !1
    }
    function Mg(a) {
        return Bg(a) && vg(a) && this.g(a) ? (cg(a.map.$(), 1, 1),
        this.a = void 0,
        !0) : !1
    }
    Lg.prototype.$c = kf;
    function Pg(a) {
        this.Ic = null;
        this.a = document.createElement("div");
        this.a.style.position = "absolute";
        this.a.className = "ol-box " + a;
        this.f = this.c = this.b = null
    }
    v(Pg, Jc);
    Pg.prototype.ka = function() {
        this.setMap(null)
    }
    ;
    function Qg(a) {
        var b = a.c
          , c = a.f;
        a = a.a.style;
        a.left = Math.min(b[0], c[0]) + "px";
        a.top = Math.min(b[1], c[1]) + "px";
        a.width = Math.abs(c[0] - b[0]) + "px";
        a.height = Math.abs(c[1] - b[1]) + "px"
    }
    Pg.prototype.setMap = function(a) {
        if (this.b) {
            this.b.B.removeChild(this.a);
            var b = this.a.style;
            b.left = b.top = b.width = b.height = "inherit"
        }
        (this.b = a) && this.b.B.appendChild(this.a)
    }
    ;
    function Rg(a) {
        var b = a.c
          , c = a.f;
        b = [b, [b[0], c[1]], c, [c[0], b[1]]].map(a.b.Xa, a.b);
        b[4] = b[0].slice();
        a.Ic ? a.Ic.na([b]) : a.Ic = new D([b])
    }
    Pg.prototype.V = function() {
        return this.Ic
    }
    ;
    function Sg(a) {
        Dg.call(this, {
            handleDownEvent: Tg,
            handleDragEvent: Ug,
            handleUpEvent: Vg
        });
        a = a ? a : {};
        this.a = new Pg(a.className || "ol-dragbox");
        this.u = void 0 !== a.minArea ? a.minArea : 64;
        this.g = null;
        this.B = a.condition ? a.condition : jf;
        this.o = a.boxEndCondition ? a.boxEndCondition : Wg
    }
    v(Sg, Dg);
    function Wg(a, b, c) {
        a = c[0] - b[0];
        b = c[1] - b[1];
        return a * a + b * b >= this.u
    }
    function Ug(a) {
        if (Bg(a)) {
            var b = this.a
              , c = a.pixel;
            b.c = this.g;
            b.f = c;
            Rg(b);
            Qg(b);
            this.b(new Xg(Yg,a.coordinate,a))
        }
    }
    Sg.prototype.V = function() {
        return this.a.V()
    }
    ;
    Sg.prototype.j = ra;
    function Vg(a) {
        if (!Bg(a))
            return !0;
        this.a.setMap(null);
        this.o(a, this.g, a.pixel) && (this.j(a),
        this.b(new Xg(Zg,a.coordinate,a)));
        return !1
    }
    function Tg(a) {
        if (Bg(a) && vg(a) && this.B(a)) {
            this.g = a.pixel;
            this.a.setMap(a.map);
            var b = this.a
              , c = this.g;
            b.c = this.g;
            b.f = c;
            Rg(b);
            Qg(b);
            this.b(new Xg($g,a.coordinate,a));
            return !0
        }
        return !1
    }
    var $g = "boxstart"
      , Yg = "boxdrag"
      , Zg = "boxend";
    function Xg(a, b, c) {
        Lc.call(this, a);
        this.coordinate = b;
        this.mapBrowserEvent = c
    }
    v(Xg, Lc);
    function ah(a) {
        a = a ? a : {};
        var b = a.condition ? a.condition : zg;
        this.C = void 0 !== a.duration ? a.duration : 200;
        this.I = void 0 !== a.out ? a.out : !1;
        Sg.call(this, {
            condition: b,
            className: a.className || "ol-dragzoom"
        })
    }
    v(ah, Sg);
    ah.prototype.j = function() {
        var a = this.v
          , b = a.$()
          , c = a.Mb()
          , d = this.V().G();
        if (this.I) {
            var e = b.gd(c);
            d = [a.Ka(db(d)), a.Ka(fb(d))];
            a = Wa(void 0);
            var f;
            var g = 0;
            for (f = d.length; g < f; ++g)
                Na(a, d[g]);
            d = b.Ke(a, c);
            pb(e, 1 / d);
            d = e
        }
        c = b.constrainResolution(b.Ke(d, c));
        e = lb(d);
        e = b.Gc(e);
        b.animate({
            resolution: c,
            center: e,
            duration: this.C,
            easing: od
        })
    }
    ;
    function bh(a) {
        ng.call(this, {
            handleEvent: ch
        });
        a = a || {};
        this.a = function(a) {
            return yg(a) && Ag(a)
        }
        ;
        this.g = a.condition ? a.condition : this.a;
        this.j = void 0 !== a.duration ? a.duration : 100;
        this.l = void 0 !== a.pixelDelta ? a.pixelDelta : 128
    }
    v(bh, ng);
    function ch(a) {
        var b = !1;
        if ("keydown" == a.type) {
            var c = a.originalEvent.keyCode;
            if (this.g(a) && (40 == c || 37 == c || 39 == c || 38 == c)) {
                b = a.map.$();
                var d = b.Pa() * this.l
                  , e = 0
                  , f = 0;
                40 == c ? f = -d : 37 == c ? e = -d : 39 == c ? e = d : f = d;
                d = [e, f];
                cf(d, b.Qa());
                c = this.j;
                if (e = b.xa())
                    d = b.Gc([e[0] + d[0], e[1] + d[1]]),
                    c ? b.animate({
                        duration: c,
                        easing: qd,
                        center: d
                    }) : b.qb(d);
                a.preventDefault();
                b = !0
            }
        }
        return !b
    }
    ;function dh(a) {
        ng.call(this, {
            handleEvent: eh
        });
        a = a ? a : {};
        this.g = a.condition ? a.condition : Ag;
        this.a = a.delta ? a.delta : 1;
        this.j = void 0 !== a.duration ? a.duration : 100
    }
    v(dh, ng);
    function eh(a) {
        var b = !1;
        if ("keydown" == a.type || "keypress" == a.type) {
            var c = a.originalEvent.charCode;
            !this.g(a) || 43 != c && 45 != c || (b = 43 == c ? this.a : -this.a,
            c = a.map.$(),
            pg(c, b, void 0, this.j),
            a.preventDefault(),
            b = !0)
        }
        return !b
    }
    ;function fh(a) {
        ng.call(this, {
            handleEvent: gh
        });
        a = a || {};
        this.j = 0;
        this.D = void 0 !== a.duration ? a.duration : 250;
        this.ta = void 0 !== a.timeout ? a.timeout : 80;
        this.B = void 0 !== a.useAnchor ? a.useAnchor : !0;
        this.S = a.constrainResolution || !1;
        this.a = null;
        this.o = this.l = this.u = this.g = void 0
    }
    v(fh, ng);
    function gh(a) {
        var b = a.type;
        if ("wheel" !== b && "mousewheel" !== b)
            return !0;
        a.preventDefault();
        b = a.map;
        var c = a.originalEvent;
        this.B && (this.a = a.coordinate);
        if ("wheel" == a.type) {
            var d = c.deltaY;
            Ld && c.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (d /= Pd);
            c.deltaMode === WheelEvent.DOM_DELTA_LINE && (d *= 40)
        } else
            "mousewheel" == a.type && (d = -c.wheelDeltaY,
            Md && (d /= 3));
        if (0 === d)
            return !1;
        a = Date.now();
        void 0 === this.g && (this.g = a);
        if (!this.l || 400 < a - this.g)
            this.l = 4 > Math.abs(d) ? hh : ih;
        if (this.l === hh) {
            b = b.$();
            this.o ? clearTimeout(this.o) : cg(b, 1, 1);
            this.o = setTimeout(this.C.bind(this), 400);
            c = b.Pa() * Math.pow(2, d / 300);
            var e = b.i
              , f = b.a
              , g = 0;
            c < e ? (c = Math.max(c, e / 1.5),
            g = 1) : c > f && (c = Math.min(c, 1.5 * f),
            g = -1);
            if (this.a) {
                var h = eg(b, c, this.a);
                b.qb(b.Gc(h))
            }
            b.Yc(c);
            !g && this.S && b.animate({
                resolution: b.constrainResolution(c, 0 < d ? -1 : 1),
                easing: od,
                anchor: this.a,
                duration: this.D
            });
            0 < g ? b.animate({
                resolution: e,
                easing: od,
                anchor: this.a,
                duration: 500
            }) : 0 > g && b.animate({
                resolution: f,
                easing: od,
                anchor: this.a,
                duration: 500
            });
            this.g = a;
            return !1
        }
        this.j += d;
        d = Math.max(this.ta - (a - this.g), 0);
        clearTimeout(this.u);
        this.u = setTimeout(this.I.bind(this, b), d);
        return !1
    }
    fh.prototype.C = function() {
        this.o = void 0;
        cg(this.v.$(), 1, -1)
    }
    ;
    fh.prototype.I = function(a) {
        a = a.$();
        a.Kc() && a.hd();
        pg(a, -Aa(this.j, -1, 1), this.a, this.D);
        this.l = void 0;
        this.j = 0;
        this.a = null;
        this.u = this.g = void 0
    }
    ;
    fh.prototype.U = function(a) {
        this.B = a;
        a || (this.a = null)
    }
    ;
    var hh = "trackpad"
      , ih = "wheel";
    function jh(a) {
        Dg.call(this, {
            handleDownEvent: kh,
            handleDragEvent: lh,
            handleUpEvent: mh
        });
        a = a || {};
        this.g = null;
        this.j = void 0;
        this.a = !1;
        this.o = 0;
        this.B = void 0 !== a.threshold ? a.threshold : .3;
        this.u = void 0 !== a.duration ? a.duration : 250
    }
    v(jh, Dg);
    function lh(a) {
        var b = 0
          , c = this.l[0]
          , d = this.l[1];
        c = Math.atan2(d.clientY - c.clientY, d.clientX - c.clientX);
        void 0 !== this.j && (b = c - this.j,
        this.o += b,
        !this.a && Math.abs(this.o) > this.B && (this.a = !0));
        this.j = c;
        a = a.map;
        c = a.$();
        if (c.g.rotation !== Re) {
            d = a.a.getBoundingClientRect();
            var e = Fg(this.l);
            e[0] -= d.left;
            e[1] -= d.top;
            this.g = a.Xa(e);
            this.a && (d = c.Qa(),
            a.render(),
            og(c, d + b, this.g))
        }
    }
    function mh(a) {
        if (2 > this.l.length) {
            a = a.map.$();
            cg(a, 1, -1);
            if (this.a) {
                var b = a.Qa()
                  , c = this.g
                  , d = this.u;
                b = a.constrainRotation(b, 0);
                og(a, b, c, d)
            }
            return !1
        }
        return !0
    }
    function kh(a) {
        return 2 <= this.l.length ? (a = a.map,
        this.g = null,
        this.j = void 0,
        this.a = !1,
        this.o = 0,
        this.D || cg(a.$(), 1, 1),
        !0) : !1
    }
    jh.prototype.$c = kf;
    function nh(a) {
        Dg.call(this, {
            handleDownEvent: oh,
            handleDragEvent: ph,
            handleUpEvent: qh
        });
        a = a ? a : {};
        this.o = a.constrainResolution || !1;
        this.g = null;
        this.u = void 0 !== a.duration ? a.duration : 400;
        this.a = void 0;
        this.j = 1
    }
    v(nh, Dg);
    function ph(a) {
        var b = 1
          , c = this.l[0]
          , d = this.l[1]
          , e = c.clientX - d.clientX;
        c = c.clientY - d.clientY;
        e = Math.sqrt(e * e + c * c);
        void 0 !== this.a && (b = this.a / e);
        this.a = e;
        a = a.map;
        e = a.$();
        d = e.Pa();
        var f = e.a
          , g = e.i;
        c = d * b;
        c > f ? (b = f / d,
        c = f) : c < g && (b = g / d,
        c = g);
        1 != b && (this.j = b);
        b = a.a.getBoundingClientRect();
        d = Fg(this.l);
        d[0] -= b.left;
        d[1] -= b.top;
        this.g = a.Xa(d);
        a.render();
        qg(e, c, this.g)
    }
    function qh(a) {
        if (2 > this.l.length) {
            a = a.map.$();
            cg(a, 1, -1);
            var b = a.Pa();
            if (this.o || b < a.i || b > a.a) {
                var c = this.g
                  , d = this.u;
                b = a.constrainResolution(b, 0, this.j - 1);
                qg(a, b, c, d)
            }
            return !1
        }
        return !0
    }
    function oh(a) {
        return 2 <= this.l.length ? (a = a.map,
        this.g = null,
        this.a = void 0,
        this.j = 1,
        this.D || cg(a.$(), 1, 1),
        !0) : !1
    }
    nh.prototype.$c = kf;
    function rh(a) {
        a = a ? a : {};
        var b = new Vc
          , c = new kg(-.005,.05,100);
        (void 0 !== a.altShiftDragRotate ? a.altShiftDragRotate : 1) && b.push(new Lg);
        (void 0 !== a.doubleClickZoom ? a.doubleClickZoom : 1) && b.push(new rg({
            delta: a.zoomDelta,
            duration: a.zoomDuration
        }));
        (void 0 !== a.dragPan ? a.dragPan : 1) && b.push(new Gg({
            kinetic: c
        }));
        (void 0 !== a.pinchRotate ? a.pinchRotate : 1) && b.push(new jh);
        (void 0 !== a.pinchZoom ? a.pinchZoom : 1) && b.push(new nh({
            constrainResolution: a.constrainResolution,
            duration: a.zoomDuration
        }));
        if (void 0 !== a.keyboard ? a.keyboard : 1)
            b.push(new bh),
            b.push(new dh({
                delta: a.zoomDelta,
                duration: a.zoomDuration
            }));
        (void 0 !== a.mouseWheelZoom ? a.mouseWheelZoom : 1) && b.push(new fh({
            constrainResolution: a.constrainResolution,
            duration: a.zoomDuration
        }));
        (void 0 !== a.shiftDragZoom ? a.shiftDragZoom : 1) && b.push(new ah({
            duration: a.zoomDuration
        }));
        return b
    }
    ;function sh(a) {
        Qc.call(this);
        var b = rb({}, a);
        b.opacity = void 0 !== a.opacity ? a.opacity : 1;
        b.visible = void 0 !== a.visible ? a.visible : !0;
        b.zIndex = void 0 !== a.zIndex ? a.zIndex : 0;
        b.maxResolution = void 0 !== a.maxResolution ? a.maxResolution : Infinity;
        b.minResolution = void 0 !== a.minResolution ? a.minResolution : 0;
        this.H(b);
        this.a = {
            layer: this,
            Ue: !0
        }
    }
    v(sh, Qc);
    function th(a) {
        a.a.opacity = Aa(a.hc(), 0, 1);
        a.a.Ij = a.hg();
        a.a.visible = a.Sb();
        a.a.extent = a.G();
        a.a.zIndex = a.za();
        a.a.maxResolution = a.fc();
        a.a.minResolution = Math.max(a.gc(), 0);
        return a.a
    }
    k = sh.prototype;
    k.G = function() {
        return this.get("extent")
    }
    ;
    k.fc = function() {
        return this.get("maxResolution")
    }
    ;
    k.gc = function() {
        return this.get("minResolution")
    }
    ;
    k.hc = function() {
        return this.get("opacity")
    }
    ;
    k.Sb = function() {
        return this.get("visible")
    }
    ;
    k.za = function() {
        return this.get("zIndex")
    }
    ;
    k.xc = function(a) {
        this.set("extent", a)
    }
    ;
    k.Bc = function(a) {
        this.set("maxResolution", a)
    }
    ;
    k.Cc = function(a) {
        this.set("minResolution", a)
    }
    ;
    k.yc = function(a) {
        this.set("opacity", a)
    }
    ;
    k.zc = function(a) {
        this.set("visible", a)
    }
    ;
    k.Wb = function(a) {
        this.set("zIndex", a)
    }
    ;
    function uh(a) {
        var b = a || {};
        a = rb({}, b);
        delete a.layers;
        b = b.layers;
        sh.call(this, a);
        this.i = [];
        this.c = {};
        y(this, Sc(vh), this.Tl, this);
        b ? Array.isArray(b) ? b = new Vc(b.slice(),{
            unique: !0
        }) : va(b instanceof Vc, 43) : b = new Vc(void 0,{
            unique: !0
        });
        this.Hi(b)
    }
    v(uh, sh);
    k = uh.prototype;
    k.Kd = function() {}
    ;
    k.Qe = function() {
        this.s()
    }
    ;
    k.Tl = function() {
        this.i.forEach(zc);
        this.i.length = 0;
        var a = this.vd();
        this.i.push(y(a, "add", this.Sl, this), y(a, "remove", this.Ul, this));
        for (var b in this.c)
            this.c[b].forEach(zc);
        sb(this.c);
        a = a.a;
        var c;
        b = 0;
        for (c = a.length; b < c; b++) {
            var d = a[b];
            this.c[w(d).toString()] = [y(d, "propertychange", this.Qe, this), y(d, "change", this.Qe, this)]
        }
        this.s()
    }
    ;
    k.Sl = function(a) {
        a = a.element;
        var b = w(a).toString();
        this.c[b] = [y(a, "propertychange", this.Qe, this), y(a, "change", this.Qe, this)];
        this.s()
    }
    ;
    k.Ul = function(a) {
        a = w(a.element).toString();
        this.c[a].forEach(zc);
        delete this.c[a];
        this.s()
    }
    ;
    k.vd = function() {
        return this.get(vh)
    }
    ;
    k.Hi = function(a) {
        this.set(vh, a)
    }
    ;
    k.fg = function(a) {
        var b = void 0 !== a ? a : []
          , c = b.length;
        this.vd().forEach(function(a) {
            a.fg(b)
        });
        a = th(this);
        var d;
        for (d = b.length; c < d; c++) {
            var e = b[c];
            e.opacity *= a.opacity;
            e.visible = e.visible && a.visible;
            e.maxResolution = Math.min(e.maxResolution, a.maxResolution);
            e.minResolution = Math.max(e.minResolution, a.minResolution);
            void 0 !== a.extent && (e.extent = void 0 !== e.extent ? nb(e.extent, a.extent) : a.extent)
        }
        return b
    }
    ;
    k.hg = function() {
        return "ready"
    }
    ;
    var vh = "layers";
    function wh(a) {
        var b = rb({}, a);
        delete b.source;
        sh.call(this, b);
        this.o = this.l = this.j = null;
        a.map && this.setMap(a.map);
        y(this, Sc("source"), this.gm, this);
        this.Zc(a.source ? a.source : null)
    }
    v(wh, sh);
    function xh(a, b) {
        return a.visible && b >= a.minResolution && b < a.maxResolution
    }
    k = wh.prototype;
    k.fg = function(a) {
        a = a ? a : [];
        a.push(th(this));
        return a
    }
    ;
    k.ia = function() {
        return this.get("source") || null
    }
    ;
    k.hg = function() {
        var a = this.ia();
        return a ? a.getState() : "undefined"
    }
    ;
    k.io = function() {
        this.s()
    }
    ;
    k.gm = function() {
        this.o && (zc(this.o),
        this.o = null);
        var a = this.ia();
        a && (this.o = y(a, "change", this.io, this));
        this.s()
    }
    ;
    k.setMap = function(a) {
        this.j && (zc(this.j),
        this.j = null);
        a || this.s();
        this.l && (zc(this.l),
        this.l = null);
        a && (this.j = y(a, "precompose", function(a) {
            var b = th(this);
            b.Ue = !1;
            b.zIndex = Infinity;
            a.frameState.layerStatesArray.push(b);
            a.frameState.layerStates[w(this)] = b
        }, this),
        this.l = y(this, "change", a.render, a),
        this.s())
    }
    ;
    k.Zc = function(a) {
        this.set("source", a)
    }
    ;
    function yh() {
        this.b = {};
        this.a = 0
    }
    yh.prototype.clear = function() {
        this.b = {};
        this.a = 0
    }
    ;
    yh.prototype.get = function(a, b, c) {
        a = b + ":" + a + ":" + (c ? dd(c) : "null");
        return a in this.b ? this.b[a] : null
    }
    ;
    yh.prototype.set = function(a, b, c, d) {
        this.b[b + ":" + a + ":" + (c ? dd(c) : "null")] = d;
        ++this.a
    }
    ;
    var Bh = new yh;
    var Ch = Array(6);
    function Dh() {
        return [1, 0, 0, 1, 0, 0]
    }
    function Eh(a) {
        return Fh(a, 1, 0, 0, 1, 0, 0)
    }
    function Gh(a, b) {
        var c = a[0]
          , d = a[1]
          , e = a[2]
          , f = a[3]
          , g = a[4]
          , h = a[5]
          , l = b[0]
          , m = b[1]
          , n = b[2]
          , p = b[3]
          , q = b[4];
        b = b[5];
        a[0] = c * l + e * m;
        a[1] = d * l + f * m;
        a[2] = c * n + e * p;
        a[3] = d * n + f * p;
        a[4] = c * q + e * b + g;
        a[5] = d * q + f * b + h;
        return a
    }
    function Fh(a, b, c, d, e, f, g) {
        a[0] = b;
        a[1] = c;
        a[2] = d;
        a[3] = e;
        a[4] = f;
        a[5] = g;
        return a
    }
    function Hh(a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3];
        a[4] = b[4];
        a[5] = b[5];
        return a
    }
    function Ih(a, b) {
        var c = b[0]
          , d = b[1];
        b[0] = a[0] * c + a[2] * d + a[4];
        b[1] = a[1] * c + a[3] * d + a[5];
        return b
    }
    function Jh(a, b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        Gh(a, Fh(Ch, c, b, -b, c, 0, 0))
    }
    function Kh(a, b, c) {
        return Gh(a, Fh(Ch, b, 0, 0, c, 0, 0))
    }
    function Lh(a, b, c) {
        Gh(a, Fh(Ch, 1, 0, 0, 1, b, c))
    }
    function Mh(a, b, c, d, e, f, g, h) {
        var l = Math.sin(f);
        f = Math.cos(f);
        a[0] = d * f;
        a[1] = e * l;
        a[2] = -d * l;
        a[3] = e * f;
        a[4] = g * d * f - h * d * l + b;
        a[5] = g * e * l + h * e * f + c;
        return a
    }
    function Nh(a) {
        var b = a[0] * a[3] - a[1] * a[2];
        va(!!b, 32);
        var c = a[0]
          , d = a[1]
          , e = a[2]
          , f = a[3]
          , g = a[4]
          , h = a[5];
        a[0] = f / b;
        a[1] = -d / b;
        a[2] = -e / b;
        a[3] = c / b;
        a[4] = (e * h - f * g) / b;
        a[5] = -(c * h - d * g) / b;
        return a
    }
    ;function Oh(a, b) {
        this.l = b;
        this.c = {};
        this.v = {}
    }
    v(Oh, Jc);
    function Ph(a) {
        var b = a.viewState
          , c = a.coordinateToPixelTransform
          , d = a.pixelToCoordinateTransform;
        Mh(c, a.size[0] / 2, a.size[1] / 2, 1 / b.resolution, -1 / b.resolution, -b.rotation, -b.center[0], -b.center[1]);
        Nh(Hh(d, c))
    }
    k = Oh.prototype;
    k.ka = function() {
        for (var a in this.c)
            Kc(this.c[a])
    }
    ;
    function Qh() {
        if (32 < Bh.a) {
            var a = 0, b;
            for (b in Bh.b) {
                var c = Bh.b[b];
                a++ & 3 || Oc(c) || (delete Bh.b[b],
                --Bh.a)
            }
        }
    }
    k.Ha = function(a, b, c, d, e, f, g) {
        function h(a, c) {
            var f = w(a).toString()
              , g = b.layerStates[w(c)].Ue;
            if (!(f in b.skippedFeatureUids) || g)
                return d.call(e, a, g ? c : null)
        }
        var l, m = b.viewState, n = m.resolution, p = m.projection;
        m = a;
        if (p.f) {
            p = p.G();
            var q = jb(p)
              , t = a[0];
            if (t < p[0] || t > p[2])
                m = [t + q * Math.ceil((p[0] - t) / q), a[1]]
        }
        p = b.layerStatesArray;
        for (q = p.length - 1; 0 <= q; --q) {
            var u = p[q];
            t = u.layer;
            if (xh(u, n) && f.call(g, t) && (u = Rh(this, t),
            t.ia() && (l = u.Ha(t.ia().u ? m : a, b, c, h, e)),
            l))
                return l
        }
    }
    ;
    k.Oi = function(a, b, c, d, e) {
        return void 0 !== this.Ha(a, b, c, jf, this, d, e)
    }
    ;
    function Rh(a, b) {
        var c = w(b).toString();
        if (c in a.c)
            return a.c[c];
        b = b.Kd(a);
        a.c[c] = b;
        a.v[c] = y(b, "change", a.Rl, a);
        return b
    }
    k.Rl = function() {
        this.l.render()
    }
    ;
    k.Rg = ra;
    k.eq = function(a, b) {
        for (var c in this.c)
            if (!(b && c in b.layerStates)) {
                a = c;
                var d = this.c[a];
                delete this.c[a];
                zc(this.v[a]);
                delete this.v[a];
                Kc(d)
            }
    }
    ;
    function Sh(a, b) {
        for (var c in a.c)
            if (!(c in b.layerStates)) {
                b.postRenderFunctions.push(a.eq.bind(a));
                break
            }
    }
    function oa(a, b) {
        return a.zIndex - b.zIndex
    }
    ;function Th(a, b, c, d, e) {
        Lc.call(this, a);
        this.vectorContext = b;
        this.frameState = c;
        this.context = d;
        this.glContext = e
    }
    v(Th, Lc);
    var Uh = [0, 0, 0, 1]
      , Vh = []
      , Wh = [0, 0, 0, 1];
    function Xh(a, b, c, d) {
        b && (a.translate(c, d),
        a.rotate(b),
        a.translate(-c, -d))
    }
    ;function Yh() {}
    k = Yh.prototype;
    k.wh = function() {}
    ;
    k.Cb = function() {}
    ;
    k.wd = function() {}
    ;
    k.$b = function() {}
    ;
    k.De = function() {}
    ;
    k.Ee = function() {}
    ;
    k.oc = function() {}
    ;
    k.pc = function() {}
    ;
    k.qc = function() {}
    ;
    k.rc = function() {}
    ;
    k.sc = function() {}
    ;
    k.tc = function() {}
    ;
    k.Qb = function() {}
    ;
    k.Na = function() {}
    ;
    k.Vb = function() {}
    ;
    k.gb = function() {}
    ;
    function Zh(a, b, c, d, e) {
        this.f = a;
        this.g = b;
        this.c = c;
        this.R = d;
        this.Zb = e;
        this.M = this.b = this.a = this.Va = this.S = this.I = null;
        this.ta = this.U = this.v = this.C = this.B = this.D = 0;
        this.ga = !1;
        this.i = this.jb = 0;
        this.oa = !1;
        this.pa = 0;
        this.ua = "";
        this.mc = this.va = 0;
        this.Sa = !1;
        this.l = this.Za = 0;
        this.qa = this.o = this.j = null;
        this.u = [];
        this.Ib = Dh()
    }
    v(Zh, Yh);
    function $h(a, b, c) {
        if (a.M) {
            b = mf(b, 0, c, 2, a.R, a.u);
            c = a.f;
            var d = a.Ib
              , e = c.globalAlpha;
            1 != a.v && (c.globalAlpha = e * a.v);
            var f = a.jb;
            a.ga && (f += a.Zb);
            var g;
            var h = 0;
            for (g = b.length; h < g; h += 2) {
                var l = b[h] - a.D
                  , m = b[h + 1] - a.B;
                a.oa && (l = Math.round(l),
                m = Math.round(m));
                if (f || 1 != a.i) {
                    var n = l + a.D
                      , p = m + a.B;
                    Mh(d, n, p, a.i, a.i, f, -n, -p);
                    c.setTransform.apply(c, d)
                }
                c.drawImage(a.M, a.U, a.ta, a.pa, a.C, l, m, a.pa, a.C)
            }
            (f || 1 != a.i) && c.setTransform(1, 0, 0, 1, 0, 0);
            1 != a.v && (c.globalAlpha = e)
        }
    }
    function ai(a, b, c, d) {
        var e = 0;
        if (a.qa && "" !== a.ua) {
            a.j && bi(a, a.j);
            a.o && ci(a, a.o);
            var f = a.qa
              , g = a.f
              , h = a.Va;
            h ? (h.font != f.font && (h.font = g.font = f.font),
            h.textAlign != f.textAlign && (h.textAlign = g.textAlign = f.textAlign),
            h.textBaseline != f.textBaseline && (h.textBaseline = g.textBaseline = f.textBaseline)) : (g.font = f.font,
            g.textAlign = f.textAlign,
            g.textBaseline = f.textBaseline,
            a.Va = {
                font: f.font,
                textAlign: f.textAlign,
                textBaseline: f.textBaseline
            });
            b = mf(b, e, c, d, a.R, a.u);
            f = a.f;
            g = a.Za;
            for (a.Sa && (g += a.Zb); e < c; e += d) {
                h = b[e] + a.va;
                var l = b[e + 1] + a.mc;
                if (g || 1 != a.l) {
                    var m = Mh(a.Ib, h, l, a.l, a.l, g, -h, -l);
                    f.setTransform.apply(f, m)
                }
                a.o && f.strokeText(a.ua, h, l);
                a.j && f.fillText(a.ua, h, l)
            }
            (g || 1 != a.l) && f.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
    function di(a, b, c, d, e, f) {
        var g = a.f;
        a = mf(b, c, d, e, a.R, a.u);
        g.moveTo(a[0], a[1]);
        b = a.length;
        f && (b -= 2);
        for (c = 2; c < b; c += 2)
            g.lineTo(a[c], a[c + 1]);
        f && g.closePath();
        return d
    }
    function ei(a, b, c, d, e) {
        var f;
        var g = 0;
        for (f = d.length; g < f; ++g)
            c = di(a, b, c, d[g], e, !0);
        return c
    }
    k = Zh.prototype;
    k.$b = function(a) {
        if (ob(this.c, a.G())) {
            if (this.a || this.b) {
                this.a && bi(this, this.a);
                this.b && ci(this, this.b);
                var b = this.R;
                var c = this.u
                  , d = a.ba();
                b = d ? mf(d, 0, d.length, a.ma(), b, c) : null;
                c = b[2] - b[0];
                d = b[3] - b[1];
                c = Math.sqrt(c * c + d * d);
                d = this.f;
                d.beginPath();
                d.arc(b[0], b[1], c, 0, 2 * Math.PI);
                this.a && d.fill();
                this.b && d.stroke()
            }
            "" !== this.ua && ai(this, a.xa(), 2, 2)
        }
    }
    ;
    k.wd = function(a) {
        this.Na(a.Da(), a.Ea());
        this.Vb(a.Y());
        this.gb(a.Ja())
    }
    ;
    k.Cb = function(a) {
        switch (a.T()) {
        case "Point":
            this.sc(a);
            break;
        case "LineString":
            this.oc(a);
            break;
        case "Polygon":
            this.tc(a);
            break;
        case "MultiPoint":
            this.qc(a);
            break;
        case "MultiLineString":
            this.pc(a);
            break;
        case "MultiPolygon":
            this.rc(a);
            break;
        case "GeometryCollection":
            this.Ee(a);
            break;
        case "Circle":
            this.$b(a)
        }
    }
    ;
    k.De = function(a, b) {
        (a = (0,
        b.$a)(a)) && ob(this.c, a.G()) && (this.wd(b),
        this.Cb(a))
    }
    ;
    k.Ee = function(a) {
        a = a.a;
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c)
            this.Cb(a[c])
    }
    ;
    k.sc = function(a) {
        var b = a.ba();
        a = a.ma();
        this.M && $h(this, b, b.length);
        "" !== this.ua && ai(this, b, b.length, a)
    }
    ;
    k.qc = function(a) {
        var b = a.ba();
        a = a.ma();
        this.M && $h(this, b, b.length);
        "" !== this.ua && ai(this, b, b.length, a)
    }
    ;
    k.oc = function(a) {
        if (ob(this.c, a.G())) {
            if (this.b) {
                ci(this, this.b);
                var b = this.f
                  , c = a.ba();
                b.beginPath();
                di(this, c, 0, c.length, a.ma(), !1);
                b.stroke()
            }
            "" !== this.ua && (a = fi(a),
            ai(this, a, 2, 2))
        }
    }
    ;
    k.pc = function(a) {
        var b = a.G();
        if (ob(this.c, b)) {
            if (this.b) {
                ci(this, this.b);
                b = this.f;
                var c = a.ba()
                  , d = 0
                  , e = a.rb()
                  , f = a.ma();
                b.beginPath();
                var g;
                var h = 0;
                for (g = e.length; h < g; ++h)
                    d = di(this, c, d, e[h], f, !1);
                b.stroke()
            }
            "" !== this.ua && (a = gi(a),
            ai(this, a, a.length, 2))
        }
    }
    ;
    k.tc = function(a) {
        if (ob(this.c, a.G())) {
            if (this.b || this.a) {
                this.a && bi(this, this.a);
                this.b && ci(this, this.b);
                var b = this.f;
                b.beginPath();
                ei(this, a.Tb(), 0, a.rb(), a.ma());
                this.a && b.fill();
                this.b && b.stroke()
            }
            "" !== this.ua && (a = Wf(a),
            ai(this, a, 2, 2))
        }
    }
    ;
    k.rc = function(a) {
        if (ob(this.c, a.G())) {
            if (this.b || this.a) {
                this.a && bi(this, this.a);
                this.b && ci(this, this.b);
                var b = this.f, c = hi(a), d = 0, e = a.c, f = a.ma(), g;
                b.beginPath();
                var h = 0;
                for (g = e.length; h < g; ++h)
                    d = ei(this, c, d, e[h], f);
                this.a && b.fill();
                this.b && b.stroke()
            }
            "" !== this.ua && (a = ii(a),
            ai(this, a, a.length, 2))
        }
    }
    ;
    function bi(a, b) {
        var c = a.f
          , d = a.I;
        d ? d.fillStyle != b.fillStyle && (d.fillStyle = c.fillStyle = b.fillStyle) : (c.fillStyle = b.fillStyle,
        a.I = {
            fillStyle: b.fillStyle
        })
    }
    function ci(a, b) {
        var c = a.f
          , d = a.S;
        d ? (d.lineCap != b.lineCap && (d.lineCap = c.lineCap = b.lineCap),
        Qd && (ma(d.lineDash, b.lineDash) || c.setLineDash(d.lineDash = b.lineDash),
        d.lineDashOffset != b.lineDashOffset && (d.lineDashOffset = c.lineDashOffset = b.lineDashOffset)),
        d.lineJoin != b.lineJoin && (d.lineJoin = c.lineJoin = b.lineJoin),
        d.lineWidth != b.lineWidth && (d.lineWidth = c.lineWidth = b.lineWidth),
        d.miterLimit != b.miterLimit && (d.miterLimit = c.miterLimit = b.miterLimit),
        d.strokeStyle != b.strokeStyle && (d.strokeStyle = c.strokeStyle = b.strokeStyle)) : (c.lineCap = b.lineCap,
        Qd && (c.setLineDash(b.lineDash),
        c.lineDashOffset = b.lineDashOffset),
        c.lineJoin = b.lineJoin,
        c.lineWidth = b.lineWidth,
        c.miterLimit = b.miterLimit,
        c.strokeStyle = b.strokeStyle,
        a.S = {
            lineCap: b.lineCap,
            lineDash: b.lineDash,
            lineDashOffset: b.lineDashOffset,
            lineJoin: b.lineJoin,
            lineWidth: b.lineWidth,
            miterLimit: b.miterLimit,
            strokeStyle: b.strokeStyle
        })
    }
    k.Na = function(a, b) {
        a ? (a = a.b,
        this.a = {
            fillStyle: fd(a ? a : Uh)
        }) : this.a = null;
        if (b) {
            a = b.b;
            var c = b.g
              , d = b.f
              , e = b.i
              , f = b.j
              , g = b.c;
            b = b.l;
            this.b = {
                lineCap: void 0 !== c ? c : "round",
                lineDash: d ? d : Vh,
                lineDashOffset: e ? e : 0,
                lineJoin: void 0 !== f ? f : "round",
                lineWidth: this.g * (void 0 !== g ? g : 1),
                miterLimit: void 0 !== b ? b : 10,
                strokeStyle: fd(a ? a : Wh)
            }
        } else
            this.b = null
    }
    ;
    k.Vb = function(a) {
        if (a) {
            var b = a.Jc()
              , c = a.Y(1)
              , d = a.Rc()
              , e = a.ic();
            this.D = b[0];
            this.B = b[1];
            this.C = e[1];
            this.M = c;
            this.v = a.i;
            this.U = d[0];
            this.ta = d[1];
            this.ga = a.o;
            this.jb = a.g;
            this.i = a.a * this.g;
            this.oa = a.v;
            this.pa = e[0]
        } else
            this.M = null
    }
    ;
    k.gb = function(a) {
        if (a) {
            var b = a.Da();
            b ? (b = b.b,
            this.j = {
                fillStyle: fd(b ? b : Uh)
            }) : this.j = null;
            var c = a.Ea();
            if (c) {
                b = c.b;
                var d = c.g
                  , e = c.f
                  , f = c.i
                  , g = c.j
                  , h = c.c;
                c = c.l;
                this.o = {
                    lineCap: void 0 !== d ? d : "round",
                    lineDash: e ? e : Vh,
                    lineDashOffset: f ? f : 0,
                    lineJoin: void 0 !== g ? g : "round",
                    lineWidth: void 0 !== h ? h : 1,
                    miterLimit: void 0 !== c ? c : 10,
                    strokeStyle: fd(b ? b : Wh)
                }
            } else
                this.o = null;
            b = a.a;
            d = a.f;
            e = a.c;
            f = a.l;
            g = a.i;
            h = a.b;
            c = a.Ja();
            var l = a.g;
            a = a.j;
            this.qa = {
                font: void 0 !== b ? b : "10px sans-serif",
                textAlign: void 0 !== l ? l : "center",
                textBaseline: void 0 !== a ? a : "middle"
            };
            this.ua = void 0 !== c ? c : "";
            this.va = void 0 !== d ? this.g * d : 0;
            this.mc = void 0 !== e ? this.g * e : 0;
            this.Sa = void 0 !== f ? f : !1;
            this.Za = void 0 !== g ? g : 0;
            this.l = this.g * (void 0 !== h ? h : 1)
        } else
            this.ua = ""
    }
    ;
    function ji(a, b) {
        Oh.call(this, 0, b);
        this.f = gd();
        this.b = this.f.canvas;
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.style.display = "block";
        this.b.className = "ol-unselectable";
        a.insertBefore(this.b, a.childNodes[0] || null);
        this.a = !0;
        this.i = Dh()
    }
    v(ji, Oh);
    function ki(a, b, c) {
        var d = a.l
          , e = a.f;
        if (Oc(d, b)) {
            var f = c.extent
              , g = c.pixelRatio
              , h = c.viewState.rotation
              , l = c.viewState
              , m = c.pixelRatio / l.resolution;
            a = Mh(a.i, a.b.width / 2, a.b.height / 2, m, -m, -l.rotation, -l.center[0], -l.center[1]);
            d.b(new Th(b,new Zh(e,g,f,a,h),c,e,null))
        }
    }
    ji.prototype.T = function() {
        return "canvas"
    }
    ;
    ji.prototype.Rg = function(a) {
        if (a) {
            var b = this.f
              , c = a.pixelRatio
              , d = Math.round(a.size[0] * c)
              , e = Math.round(a.size[1] * c);
            this.b.width != d || this.b.height != e ? (this.b.width = d,
            this.b.height = e) : b.clearRect(0, 0, d, e);
            c = a.viewState.rotation;
            Ph(a);
            ki(this, "precompose", a);
            var f = a.layerStatesArray;
            na(f);
            c && (b.save(),
            Xh(b, c, d / 2, e / 2));
            d = a.viewState.resolution;
            var g;
            e = 0;
            for (g = f.length; e < g; ++e) {
                var h = f[e];
                var l = h.layer;
                l = Rh(this, l);
                xh(h, d) && "ready" == h.Ij && l.xd(a, h) && l.u(a, h, b)
            }
            c && b.restore();
            ki(this, "postcompose", a);
            this.a || (this.b.style.display = "",
            this.a = !0);
            Sh(this, a);
            a.postRenderFunctions.push(Qh)
        } else
            this.a && (this.b.style.display = "none",
            this.a = !1)
    }
    ;
    ji.prototype.Ni = function(a, b, c, d, e, f) {
        var g = b.viewState.resolution
          , h = b.layerStatesArray
          , l = h.length;
        a = Ih(b.pixelToCoordinateTransform, a.slice());
        for (--l; 0 <= l; --l) {
            var m = h[l];
            var n = m.layer;
            if (xh(m, g) && e.call(f, n) && (m = Rh(this, n).v(a, b, c, d)))
                return m
        }
    }
    ;
    var li = "Polygon Circle LineString Image Text Default".split(" ");
    function mi() {}
    ;function ni(a) {
        this.b = a
    }
    ;function oi(a) {
        this.b = a
    }
    v(oi, ni);
    oi.prototype.T = function() {
        return 35632
    }
    ;
    function pi(a) {
        this.b = a
    }
    v(pi, ni);
    pi.prototype.T = function() {
        return 35633
    }
    ;
    function qi() {
        this.b = "precision mediump float;varying vec2 a;varying vec2 b;varying float c;varying float d;uniform float m;uniform vec4 n;uniform vec4 o;uniform vec2 p;void main(void){vec2 windowCenter=vec2((a.x+1.0)/2.0*p.x*d,(a.y+1.0)/2.0*p.y*d);vec2 windowOffset=vec2((b.x+1.0)/2.0*p.x*d,(b.y+1.0)/2.0*p.y*d);float radius=length(windowCenter-windowOffset);float dist=length(windowCenter-gl_FragCoord.xy);if(dist>radius+c){if(o.a==0.0){gl_FragColor=n;}else{gl_FragColor=o;}gl_FragColor.a=gl_FragColor.a-(dist-(radius+c));}else if(n.a==0.0){gl_FragColor=o;if(dist<radius-c){gl_FragColor.a=gl_FragColor.a-(radius-c-dist);}} else{gl_FragColor=n;float strokeDist=radius-c;float antialias=2.0*d;if(dist>strokeDist){gl_FragColor=o;}else if(dist>=strokeDist-antialias){float step=smoothstep(strokeDist-antialias,strokeDist,dist);gl_FragColor=mix(n,o,step);}} gl_FragColor.a=gl_FragColor.a*m;if(gl_FragColor.a<=0.0){discard;}}"
    }
    v(qi, oi);
    var ri = new qi;
    function si() {
        this.b = "varying vec2 a;varying vec2 b;varying float c;varying float d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;void main(void){mat4 offsetMatrix=i*j;a=vec4(h*vec4(e,0.0,1.0)).xy;d=l;float lineWidth=k*l;c=lineWidth/2.0;if(lineWidth==0.0){lineWidth=2.0*l;}vec2 offset;float radius=g+3.0*l;if(f==0.0){offset=vec2(-1.0,1.0);}else if(f==1.0){offset=vec2(-1.0,-1.0);}else if(f==2.0){offset=vec2(1.0,-1.0);}else{offset=vec2(1.0,1.0);}gl_Position=h*vec4(e+offset*radius,0.0,1.0)+offsetMatrix*vec4(offset*lineWidth,0.0,0.0);b=vec4(h*vec4(e.x+g,e.y,0.0,1.0)).xy;if(distance(a,b)>20000.0){gl_Position=vec4(a,0.0,1.0);}}"
    }
    v(si, pi);
    var ti = new si;
    function ui(a, b) {
        this.B = a.getUniformLocation(b, "n");
        this.pa = a.getUniformLocation(b, "k");
        this.c = a.getUniformLocation(b, "j");
        this.i = a.getUniformLocation(b, "i");
        this.a = a.getUniformLocation(b, "m");
        this.qa = a.getUniformLocation(b, "l");
        this.f = a.getUniformLocation(b, "h");
        this.I = a.getUniformLocation(b, "p");
        this.S = a.getUniformLocation(b, "o");
        this.j = a.getAttribLocation(b, "f");
        this.b = a.getAttribLocation(b, "e");
        this.R = a.getAttribLocation(b, "g")
    }
    ;function vi() {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }
    function wi(a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[4] = b[2];
        a[5] = b[3];
        a[12] = b[4];
        a[13] = b[5];
        return a
    }
    ;function xi(a, b) {
        this.origin = lb(b);
        this.Ib = Dh();
        this.Sa = Dh();
        this.Za = Dh();
        this.U = vi();
        this.b = [];
        this.j = null;
        this.f = [];
        this.i = [];
        this.a = [];
        this.o = null;
        this.g = void 0
    }
    v(xi, Yh);
    xi.prototype.Ma = function(a, b, c, d, e, f, g, h, l, m, n) {
        var p = a.b;
        if (this.g) {
            var q = p.isEnabled(p.STENCIL_TEST);
            var t = p.getParameter(p.STENCIL_FUNC);
            var u = p.getParameter(p.STENCIL_VALUE_MASK);
            var x = p.getParameter(p.STENCIL_REF);
            var B = p.getParameter(p.STENCIL_WRITEMASK);
            var z = p.getParameter(p.STENCIL_FAIL);
            var G = p.getParameter(p.STENCIL_PASS_DEPTH_PASS);
            var E = p.getParameter(p.STENCIL_PASS_DEPTH_FAIL);
            p.enable(p.STENCIL_TEST);
            p.clear(p.STENCIL_BUFFER_BIT);
            p.stencilMask(255);
            p.stencilFunc(p.ALWAYS, 1, 255);
            p.stencilOp(p.KEEP, p.KEEP, p.REPLACE);
            this.g.Ma(a, b, c, d, e, f, g, h, l, m, n);
            p.stencilMask(0);
            p.stencilFunc(p.NOTEQUAL, 1, 255)
        }
        yi(a, 34962, this.o);
        yi(a, 34963, this.j);
        f = this.Bf(p, a, e, f);
        var ia = Eh(this.Ib);
        Kh(ia, 2 / (c * e[0]), 2 / (c * e[1]));
        Jh(ia, -d);
        Lh(ia, -(b[0] - this.origin[0]), -(b[1] - this.origin[1]));
        b = Eh(this.Za);
        Kh(b, 2 / e[0], 2 / e[1]);
        e = Eh(this.Sa);
        d && Jh(e, -d);
        p.uniformMatrix4fv(f.f, !1, wi(this.U, ia));
        p.uniformMatrix4fv(f.i, !1, wi(this.U, b));
        p.uniformMatrix4fv(f.c, !1, wi(this.U, e));
        p.uniform1f(f.a, g);
        if (l) {
            m ? a = this.Fe(p, a, h, l, n) : (p.clear(p.COLOR_BUFFER_BIT | p.DEPTH_BUFFER_BIT),
            this.Td(p, a, h, !0),
            a = (a = l(null)) ? a : void 0);
            var T = a
        } else
            this.Td(p, a, h, !1);
        this.Cf(p, f);
        this.g && (q || p.disable(p.STENCIL_TEST),
        p.clear(p.STENCIL_BUFFER_BIT),
        p.stencilFunc(t, x, u),
        p.stencilMask(B),
        p.stencilOp(z, E, G));
        return T
    }
    ;
    function zi(a, b, c, d) {
        a.drawElements(4, d - c, b.g ? 5125 : 5123, c * (b.g ? 4 : 2))
    }
    ;var Ai = [0, 0, 0, 1]
      , Bi = []
      , Ci = [0, 0, 0, 1];
    function Di(a, b, c, d, e, f) {
        a = (c - a) * (f - b) - (e - a) * (d - b);
        return a <= Ei && a >= -Ei ? void 0 : 0 < a
    }
    var Ei = Number.EPSILON || 2.220446049250313E-16;
    function Fi(a) {
        this.b = void 0 !== a ? a : [];
        this.a = Gi
    }
    var Gi = 35044;
    function Hi(a, b) {
        xi.call(this, 0, b);
        this.v = null;
        this.l = [];
        this.u = [];
        this.R = 0;
        this.c = {
            fillColor: null,
            strokeColor: null,
            lineDash: null,
            lineDashOffset: void 0,
            lineWidth: void 0,
            s: !1
        }
    }
    v(Hi, xi);
    k = Hi.prototype;
    k.$b = function(a, b) {
        var c = a.ud()
          , d = a.ma();
        if (c) {
            this.f.push(this.b.length);
            this.i.push(b);
            this.c.s && (this.u.push(this.b.length),
            this.c.s = !1);
            this.R = c;
            a = a.ba();
            a = nf(a, 0, 2, d, -this.origin[0], -this.origin[1]);
            b = this.a.length;
            c = this.b.length;
            var e = b / 4, f;
            for (f = 0; 2 > f; f += d)
                this.a[b++] = a[f],
                this.a[b++] = a[f + 1],
                this.a[b++] = 0,
                this.a[b++] = this.R,
                this.a[b++] = a[f],
                this.a[b++] = a[f + 1],
                this.a[b++] = 1,
                this.a[b++] = this.R,
                this.a[b++] = a[f],
                this.a[b++] = a[f + 1],
                this.a[b++] = 2,
                this.a[b++] = this.R,
                this.a[b++] = a[f],
                this.a[b++] = a[f + 1],
                this.a[b++] = 3,
                this.a[b++] = this.R,
                this.b[c++] = e,
                this.b[c++] = e + 1,
                this.b[c++] = e + 2,
                this.b[c++] = e + 2,
                this.b[c++] = e + 3,
                this.b[c++] = e,
                e += 4
        } else
            this.c.s && (this.l.pop(),
            this.l.length && (d = this.l[this.l.length - 1],
            this.c.fillColor = d[0],
            this.c.strokeColor = d[1],
            this.c.lineWidth = d[2],
            this.c.s = !1))
    }
    ;
    k.ab = function() {
        this.o = new Fi(this.a);
        this.j = new Fi(this.b);
        this.f.push(this.b.length);
        !this.u.length && 0 < this.l.length && (this.l = []);
        this.b = this.a = null
    }
    ;
    k.xb = function(a) {
        var b = this.o
          , c = this.j;
        return function() {
            Ii(a, b);
            Ii(a, c)
        }
    }
    ;
    k.Bf = function(a, b, c, d) {
        var e = Ji(b, ri, ti);
        if (this.v)
            var f = this.v;
        else
            this.v = f = new ui(a,e);
        b.Tc(e);
        a.enableVertexAttribArray(f.b);
        a.vertexAttribPointer(f.b, 2, 5126, !1, 16, 0);
        a.enableVertexAttribArray(f.j);
        a.vertexAttribPointer(f.j, 1, 5126, !1, 16, 8);
        a.enableVertexAttribArray(f.R);
        a.vertexAttribPointer(f.R, 1, 5126, !1, 16, 12);
        a.uniform2fv(f.I, c);
        a.uniform1f(f.qa, d);
        return f
    }
    ;
    k.Cf = function(a, b) {
        a.disableVertexAttribArray(b.b);
        a.disableVertexAttribArray(b.j);
        a.disableVertexAttribArray(b.R)
    }
    ;
    k.Td = function(a, b, c) {
        if (ub(c)) {
            var d = this.f[this.f.length - 1];
            for (c = this.u.length - 1; 0 <= c; --c) {
                var e = this.u[c];
                var f = this.l[c];
                a.uniform4fv(this.v.B, f[0]);
                Ki(this, a, f[1], f[2]);
                zi(a, b, e, d);
                d = e
            }
        } else {
            var g = this.f.length - 2;
            f = d = this.f[g + 1];
            for (e = this.u.length - 1; 0 <= e; --e) {
                var h = this.l[e];
                a.uniform4fv(this.v.B, h[0]);
                Ki(this, a, h[1], h[2]);
                for (h = this.u[e]; 0 <= g && this.f[g] >= h; ) {
                    var l = this.f[g];
                    var m = this.i[g];
                    m = w(m).toString();
                    c[m] && (d !== f && zi(a, b, d, f),
                    f = l);
                    g--;
                    d = l
                }
                d !== f && zi(a, b, d, f);
                d = f = h
            }
        }
    }
    ;
    k.Fe = function(a, b, c, d, e) {
        var f, g;
        var h = this.f.length - 2;
        var l = this.f[h + 1];
        for (f = this.u.length - 1; 0 <= f; --f) {
            var m = this.l[f];
            a.uniform4fv(this.v.B, m[0]);
            Ki(this, a, m[1], m[2]);
            for (g = this.u[f]; 0 <= h && this.f[h] >= g; ) {
                m = this.f[h];
                var n = this.i[h];
                var p = w(n).toString();
                if (void 0 === c[p] && n.V() && (void 0 === e || ob(e, n.V().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT),
                zi(a, b, m, l),
                l = d(n)))
                    return l;
                h--;
                l = m
            }
        }
    }
    ;
    function Ki(a, b, c, d) {
        b.uniform4fv(a.v.S, c);
        b.uniform1f(a.v.pa, d)
    }
    k.Na = function(a, b) {
        if (b) {
            var c = b.f;
            this.c.lineDash = c ? c : Bi;
            c = b.i;
            this.c.lineDashOffset = c ? c : 0;
            c = b.b;
            c instanceof CanvasGradient || c instanceof CanvasPattern ? c = Ci : c = bd(c).map(function(a, b) {
                return 3 != b ? a / 255 : a
            }) || Ci;
            b = b.c;
            b = void 0 !== b ? b : 1
        } else
            c = [0, 0, 0, 0],
            b = 0;
        a = a ? a.b : [0, 0, 0, 0];
        a instanceof CanvasGradient || a instanceof CanvasPattern ? a = Ai : a = bd(a).map(function(a, b) {
            return 3 != b ? a / 255 : a
        }) || Ai;
        this.c.strokeColor && ma(this.c.strokeColor, c) && this.c.fillColor && ma(this.c.fillColor, a) && this.c.lineWidth === b || (this.c.s = !0,
        this.c.fillColor = a,
        this.c.strokeColor = c,
        this.c.lineWidth = b,
        this.l.push([a, c, b]))
    }
    ;
    function Li() {
        this.b = "precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"
    }
    v(Li, oi);
    var Mi = new Li;
    function Ni() {
        this.b = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.0,0.0);gl_Position=h*vec4(c,0.0,1.0)+offsets;a=d;b=f;}"
    }
    v(Ni, pi);
    var Oi = new Ni;
    function Pi(a, b) {
        this.c = a.getUniformLocation(b, "j");
        this.i = a.getUniformLocation(b, "i");
        this.a = a.getUniformLocation(b, "k");
        this.f = a.getUniformLocation(b, "h");
        this.v = a.getAttribLocation(b, "e");
        this.u = a.getAttribLocation(b, "f");
        this.b = a.getAttribLocation(b, "c");
        this.D = a.getAttribLocation(b, "g");
        this.C = a.getAttribLocation(b, "d")
    }
    ;function Qi(a, b) {
        this.j = a;
        this.b = b;
        this.a = {};
        this.c = {};
        this.f = {};
        this.o = this.v = this.i = this.l = null;
        (this.g = ha(ca, "OES_element_index_uint")) && b.getExtension("OES_element_index_uint");
        y(this.j, "webglcontextlost", this.kp, this);
        y(this.j, "webglcontextrestored", this.lp, this)
    }
    v(Qi, Jc);
    function yi(a, b, c) {
        var d = a.b
          , e = c.b
          , f = String(w(c));
        if (f in a.a)
            d.bindBuffer(b, a.a[f].buffer);
        else {
            var g = d.createBuffer();
            d.bindBuffer(b, g);
            var h;
            34962 == b ? h = new Float32Array(e) : 34963 == b && (h = a.g ? new Uint32Array(e) : new Uint16Array(e));
            d.bufferData(b, h, c.a);
            a.a[f] = {
                nc: c,
                buffer: g
            }
        }
    }
    function Ii(a, b) {
        var c = a.b;
        b = String(w(b));
        var d = a.a[b];
        c.isContextLost() || c.deleteBuffer(d.buffer);
        delete a.a[b]
    }
    k = Qi.prototype;
    k.ka = function() {
        Ic(this.j);
        var a = this.b;
        if (!a.isContextLost()) {
            for (var b in this.a)
                a.deleteBuffer(this.a[b].buffer);
            for (b in this.f)
                a.deleteProgram(this.f[b]);
            for (b in this.c)
                a.deleteShader(this.c[b]);
            a.deleteFramebuffer(this.i);
            a.deleteRenderbuffer(this.o);
            a.deleteTexture(this.v)
        }
    }
    ;
    k.jp = function() {
        return this.b
    }
    ;
    function Ri(a) {
        if (!a.i) {
            var b = a.b
              , c = b.createFramebuffer();
            b.bindFramebuffer(b.FRAMEBUFFER, c);
            var d = Si(b, 1, 1)
              , e = b.createRenderbuffer();
            b.bindRenderbuffer(b.RENDERBUFFER, e);
            b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, 1, 1);
            b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, d, 0);
            b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, e);
            b.bindTexture(b.TEXTURE_2D, null);
            b.bindRenderbuffer(b.RENDERBUFFER, null);
            b.bindFramebuffer(b.FRAMEBUFFER, null);
            a.i = c;
            a.v = d;
            a.o = e
        }
        return a.i
    }
    function Ti(a, b) {
        var c = String(w(b));
        if (c in a.c)
            return a.c[c];
        var d = a.b
          , e = d.createShader(b.T());
        d.shaderSource(e, b.b);
        d.compileShader(e);
        return a.c[c] = e
    }
    function Ji(a, b, c) {
        var d = w(b) + "/" + w(c);
        if (d in a.f)
            return a.f[d];
        var e = a.b
          , f = e.createProgram();
        e.attachShader(f, Ti(a, b));
        e.attachShader(f, Ti(a, c));
        e.linkProgram(f);
        return a.f[d] = f
    }
    k.kp = function() {
        sb(this.a);
        sb(this.c);
        sb(this.f);
        this.o = this.v = this.i = this.l = null
    }
    ;
    k.lp = function() {}
    ;
    k.Tc = function(a) {
        if (a == this.l)
            return !1;
        this.b.useProgram(a);
        this.l = a;
        return !0
    }
    ;
    function Ui(a, b, c) {
        var d = a.createTexture();
        a.bindTexture(a.TEXTURE_2D, d);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
        void 0 !== b && a.texParameteri(3553, 10242, b);
        void 0 !== c && a.texParameteri(3553, 10243, c);
        return d
    }
    function Si(a, b, c) {
        var d = Ui(a, void 0, void 0);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, b, c, 0, a.RGBA, a.UNSIGNED_BYTE, null);
        return d
    }
    function Vi(a, b) {
        var c = Ui(a, 33071, 33071);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b);
        return c
    }
    ;function Wi(a, b) {
        xi.call(this, 0, b);
        this.B = this.D = void 0;
        this.v = [];
        this.u = [];
        this.qa = this.pa = this.height = void 0;
        this.Va = null;
        this.width = this.scale = this.rotation = this.rotateWithView = this.S = this.I = this.opacity = void 0
    }
    v(Wi, xi);
    k = Wi.prototype;
    k.xb = function(a) {
        var b = this.o
          , c = this.j
          , d = this.jg(!0)
          , e = a.b;
        return function() {
            if (!e.isContextLost()) {
                var f;
                var g = 0;
                for (f = d.length; g < f; ++g)
                    e.deleteTexture(d[g])
            }
            Ii(a, b);
            Ii(a, c)
        }
    }
    ;
    function Xi(a, b, c, d, e) {
        var f = a.D
          , g = a.B
          , h = a.height
          , l = a.pa
          , m = a.qa
          , n = a.opacity
          , p = a.I
          , q = a.S
          , t = a.rotateWithView ? 1 : 0
          , u = -a.rotation
          , x = a.scale
          , B = a.width
          , z = Math.cos(u);
        u = Math.sin(u);
        for (var G = a.b.length, E = a.a.length, ia, T, R, U, ta; c < d; c += e)
            U = b[c] - a.origin[0],
            ta = b[c + 1] - a.origin[1],
            ia = E / 8,
            T = -x * f,
            R = -x * (h - g),
            a.a[E++] = U,
            a.a[E++] = ta,
            a.a[E++] = T * z - R * u,
            a.a[E++] = T * u + R * z,
            a.a[E++] = p / m,
            a.a[E++] = (q + h) / l,
            a.a[E++] = n,
            a.a[E++] = t,
            T = x * (B - f),
            R = -x * (h - g),
            a.a[E++] = U,
            a.a[E++] = ta,
            a.a[E++] = T * z - R * u,
            a.a[E++] = T * u + R * z,
            a.a[E++] = (p + B) / m,
            a.a[E++] = (q + h) / l,
            a.a[E++] = n,
            a.a[E++] = t,
            T = x * (B - f),
            R = x * g,
            a.a[E++] = U,
            a.a[E++] = ta,
            a.a[E++] = T * z - R * u,
            a.a[E++] = T * u + R * z,
            a.a[E++] = (p + B) / m,
            a.a[E++] = q / l,
            a.a[E++] = n,
            a.a[E++] = t,
            T = -x * f,
            R = x * g,
            a.a[E++] = U,
            a.a[E++] = ta,
            a.a[E++] = T * z - R * u,
            a.a[E++] = T * u + R * z,
            a.a[E++] = p / m,
            a.a[E++] = q / l,
            a.a[E++] = n,
            a.a[E++] = t,
            a.b[G++] = ia,
            a.b[G++] = ia + 1,
            a.b[G++] = ia + 2,
            a.b[G++] = ia,
            a.b[G++] = ia + 2,
            a.b[G++] = ia + 3
    }
    function Yi(a, b, c, d) {
        var e, f = b.length;
        for (e = 0; e < f; ++e) {
            var g = b[e];
            var h = w(g).toString();
            h in c ? g = c[h] : (g = Vi(d, g),
            c[h] = g);
            a[e] = g
        }
    }
    k.Bf = function(a, b) {
        var c = Ji(b, Mi, Oi);
        if (this.Va)
            var d = this.Va;
        else
            this.Va = d = new Pi(a,c);
        b.Tc(c);
        a.enableVertexAttribArray(d.b);
        a.vertexAttribPointer(d.b, 2, 5126, !1, 32, 0);
        a.enableVertexAttribArray(d.v);
        a.vertexAttribPointer(d.v, 2, 5126, !1, 32, 8);
        a.enableVertexAttribArray(d.C);
        a.vertexAttribPointer(d.C, 2, 5126, !1, 32, 16);
        a.enableVertexAttribArray(d.u);
        a.vertexAttribPointer(d.u, 1, 5126, !1, 32, 24);
        a.enableVertexAttribArray(d.D);
        a.vertexAttribPointer(d.D, 1, 5126, !1, 32, 28);
        return d
    }
    ;
    k.Cf = function(a, b) {
        a.disableVertexAttribArray(b.b);
        a.disableVertexAttribArray(b.v);
        a.disableVertexAttribArray(b.C);
        a.disableVertexAttribArray(b.u);
        a.disableVertexAttribArray(b.D)
    }
    ;
    k.Td = function(a, b, c, d) {
        var e = d ? this.dg() : this.jg();
        d = d ? this.u : this.v;
        if (ub(c)) {
            var f;
            c = 0;
            var g = e.length;
            for (f = 0; c < g; ++c) {
                a.bindTexture(3553, e[c]);
                var h = d[c];
                zi(a, b, f, h);
                f = h
            }
        } else
            for (f = g = 0,
            h = e.length; f < h; ++f) {
                a.bindTexture(3553, e[f]);
                for (var l = 0 < f ? d[f - 1] : 0, m = d[f], n = l; g < this.f.length && this.f[g] <= m; ) {
                    var p = w(this.i[g]).toString();
                    void 0 !== c[p] ? (n !== l && zi(a, b, n, l),
                    l = n = g === this.f.length - 1 ? m : this.f[g + 1]) : l = g === this.f.length - 1 ? m : this.f[g + 1];
                    g++
                }
                n !== l && zi(a, b, n, l)
            }
    }
    ;
    k.Fe = function(a, b, c, d, e) {
        var f, g, h = this.f.length - 1, l = this.dg();
        for (f = l.length - 1; 0 <= f; --f) {
            a.bindTexture(3553, l[f]);
            var m = 0 < f ? this.u[f - 1] : 0;
            for (g = this.u[f]; 0 <= h && this.f[h] >= m; ) {
                var n = this.f[h];
                var p = this.i[h];
                var q = w(p).toString();
                if (void 0 === c[q] && p.V() && (void 0 === e || ob(e, p.V().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT),
                zi(a, b, n, g),
                g = d(p)))
                    return g;
                g = n;
                h--
            }
        }
    }
    ;
    k.ab = function() {
        this.qa = this.pa = this.height = this.B = this.D = void 0;
        this.b = null;
        this.scale = this.rotation = this.rotateWithView = this.S = this.I = this.opacity = void 0;
        this.a = null;
        this.width = void 0
    }
    ;
    function Zi(a, b) {
        Wi.call(this, 0, b);
        this.l = [];
        this.c = [];
        this.C = [];
        this.R = []
    }
    v(Zi, Wi);
    k = Zi.prototype;
    k.qc = function(a, b) {
        this.f.push(this.b.length);
        this.i.push(b);
        b = a.ba();
        Xi(this, b, 0, b.length, a.ma())
    }
    ;
    k.sc = function(a, b) {
        this.f.push(this.b.length);
        this.i.push(b);
        b = a.ba();
        Xi(this, b, 0, b.length, a.ma())
    }
    ;
    k.ab = function(a) {
        var b = a.b;
        this.v.push(this.b.length);
        this.u.push(this.b.length);
        this.o = new Fi(this.a);
        this.j = new Fi(this.b);
        var c = {};
        Yi(this.C, this.l, c, b);
        Yi(this.R, this.c, c, b);
        this.c = this.l = null;
        Wi.prototype.ab.call(this, a)
    }
    ;
    k.Vb = function(a) {
        var b = a.Jc()
          , c = a.Y(1)
          , d = a.Ie()
          , e = a.yg(1)
          , f = a.i
          , g = a.Rc()
          , h = a.o
          , l = a.g
          , m = a.ic();
        a = a.a;
        if (this.l.length) {
            var n = this.l[this.l.length - 1];
            w(n) != w(c) && (this.v.push(this.b.length),
            this.l.push(c))
        } else
            this.l.push(c);
        this.c.length ? (n = this.c[this.c.length - 1],
        w(n) != w(e) && (this.u.push(this.b.length),
        this.c.push(e))) : this.c.push(e);
        this.D = b[0];
        this.B = b[1];
        this.height = m[1];
        this.pa = d[1];
        this.qa = d[0];
        this.opacity = f;
        this.I = g[0];
        this.S = g[1];
        this.rotation = l;
        this.rotateWithView = h;
        this.scale = a;
        this.width = m[0]
    }
    ;
    k.jg = function(a) {
        return a ? this.C.concat(this.R) : this.C
    }
    ;
    k.dg = function() {
        return this.R
    }
    ;
    function $i(a, b, c) {
        var d = b - c;
        return a[0] === a[d] && a[1] === a[d + 1] && 3 < (b - 0) / c ? !!tf(a, 0, b, c) : !1
    }
    ;function aj() {
        this.b = "precision mediump float;varying float a;varying vec2 b;varying float c;uniform float m;uniform vec4 n;uniform vec2 o;uniform float p;void main(void){if(a>0.0){vec2 windowCoords=vec2((b.x+1.0)/2.0*o.x*p,(b.y+1.0)/2.0*o.y*p);if(length(windowCoords-gl_FragCoord.xy)>c*p){discard;}} gl_FragColor=n;float alpha=n.a*m;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"
    }
    v(aj, oi);
    var bj = new aj;
    function cj() {
        this.b = "varying float a;varying vec2 b;varying float c;attribute vec2 d;attribute vec2 e;attribute vec2 f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;bool nearlyEquals(in float value,in float ref){float epsilon=0.000000000001;return value>=ref-epsilon&&value<=ref+epsilon;}void alongNormal(out vec2 offset,in vec2 nextP,in float turnDir,in float direction){vec2 dirVect=nextP-e;vec2 normal=normalize(vec2(-turnDir*dirVect.y,turnDir*dirVect.x));offset=k/2.0*normal*direction;}void miterUp(out vec2 offset,out float round,in bool isRound,in float direction){float halfWidth=k/2.0;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=f-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;round=0.0;if(isRound){round=1.0;}else if(miterLength>l+k){offset=halfWidth*tmpNormal*direction;}} bool miterDown(out vec2 offset,in vec4 projPos,in mat4 offsetMatrix,in float direction){bool degenerate=false;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=d-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));vec2 longOffset,shortOffset,longVertex;vec4 shortProjVertex;float halfWidth=k/2.0;if(length(f-e)>length(d-e)){longOffset=tmpNormal*direction*halfWidth;shortOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=f;shortProjVertex=h*vec4(d,0.0,1.0);}else{shortOffset=tmpNormal*direction*halfWidth;longOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=d;shortProjVertex=h*vec4(f,0.0,1.0);}vec4 p1=h*vec4(longVertex,0.0,1.0)+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p2=projPos+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p3=shortProjVertex+offsetMatrix*vec4(-shortOffset,0.0,0.0);vec4 p4=shortProjVertex+offsetMatrix*vec4(shortOffset,0.0,0.0);float denom=(p4.y-p3.y)*(p2.x-p1.x)-(p4.x-p3.x)*(p2.y-p1.y);float firstU=((p4.x-p3.x)*(p1.y-p3.y)-(p4.y-p3.y)*(p1.x-p3.x))/denom;float secondU=((p2.x-p1.x)*(p1.y-p3.y)-(p2.y-p1.y)*(p1.x-p3.x))/denom;float epsilon=0.000000000001;if(firstU>epsilon&&firstU<1.0-epsilon&&secondU>epsilon&&secondU<1.0-epsilon){shortProjVertex.x=p1.x+firstU*(p2.x-p1.x);shortProjVertex.y=p1.y+firstU*(p2.y-p1.y);offset=shortProjVertex.xy;degenerate=true;}else{float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;}return degenerate;}void squareCap(out vec2 offset,out float round,in bool isRound,in vec2 nextP,in float turnDir,in float direction){round=0.0;vec2 dirVect=e-nextP;vec2 firstNormal=normalize(dirVect);vec2 secondNormal=vec2(turnDir*firstNormal.y*direction,-turnDir*firstNormal.x*direction);vec2 hypotenuse=normalize(firstNormal-secondNormal);vec2 normal=vec2(turnDir*hypotenuse.y*direction,-turnDir*hypotenuse.x*direction);float length=sqrt(c*c*2.0);offset=normal*length;if(isRound){round=1.0;}} void main(void){bool degenerate=false;float direction=float(sign(g));mat4 offsetMatrix=i*j;vec2 offset;vec4 projPos=h*vec4(e,0.0,1.0);bool round=nearlyEquals(mod(g,2.0),0.0);a=0.0;c=k/2.0;b=projPos.xy;if(nearlyEquals(mod(g,3.0),0.0)||nearlyEquals(mod(g,17.0),0.0)){alongNormal(offset,f,1.0,direction);}else if(nearlyEquals(mod(g,5.0),0.0)||nearlyEquals(mod(g,13.0),0.0)){alongNormal(offset,d,-1.0,direction);}else if(nearlyEquals(mod(g,23.0),0.0)){miterUp(offset,a,round,direction);}else if(nearlyEquals(mod(g,19.0),0.0)){degenerate=miterDown(offset,projPos,offsetMatrix,direction);}else if(nearlyEquals(mod(g,7.0),0.0)){squareCap(offset,a,round,f,1.0,direction);}else if(nearlyEquals(mod(g,11.0),0.0)){squareCap(offset,a,round,d,-1.0,direction);}if(!degenerate){vec4 offsets=offsetMatrix*vec4(offset,0.0,0.0);gl_Position=projPos+offsets;}else{gl_Position=vec4(offset,0.0,1.0);}}"
    }
    v(cj, pi);
    var dj = new cj;
    function ej(a, b) {
        this.B = a.getUniformLocation(b, "n");
        this.pa = a.getUniformLocation(b, "k");
        this.S = a.getUniformLocation(b, "l");
        this.c = a.getUniformLocation(b, "j");
        this.i = a.getUniformLocation(b, "i");
        this.a = a.getUniformLocation(b, "m");
        this.qa = a.getUniformLocation(b, "p");
        this.f = a.getUniformLocation(b, "h");
        this.I = a.getUniformLocation(b, "o");
        this.g = a.getAttribLocation(b, "g");
        this.l = a.getAttribLocation(b, "d");
        this.o = a.getAttribLocation(b, "f");
        this.b = a.getAttribLocation(b, "e")
    }
    ;function fj(a, b) {
        xi.call(this, 0, b);
        this.v = null;
        this.u = [];
        this.l = [];
        this.c = {
            strokeColor: null,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0,
            s: !1
        }
    }
    v(fj, xi);
    function gj(a, b, c, d) {
        var e, f = a.a.length, g = a.b.length, h = "bevel" === a.c.lineJoin ? 0 : "miter" === a.c.lineJoin ? 1 : 2, l = "butt" === a.c.lineCap ? 0 : "square" === a.c.lineCap ? 1 : 2, m = $i(b, c, d), n = g, p = 1;
        for (e = 0; e < c; e += d) {
            var q = f / 7;
            var t = u;
            var u = x || [b[e], b[e + 1]];
            if (e)
                if (e === c - d) {
                    if (m)
                        var x = B;
                    else
                        t = t || [0, 0],
                        f = hj(a, t, u, [0, 0], p * ij * (l || 1), f),
                        f = hj(a, t, u, [0, 0], -p * ij * (l || 1), f),
                        a.b[g++] = q,
                        a.b[g++] = n - 1,
                        a.b[g++] = n,
                        a.b[g++] = n,
                        a.b[g++] = q + 1,
                        a.b[g++] = q,
                        l && (f = hj(a, t, u, [0, 0], p * jj * l, f),
                        f = hj(a, t, u, [0, 0], -p * jj * l, f),
                        a.b[g++] = q + 2,
                        a.b[g++] = q,
                        a.b[g++] = q + 1,
                        a.b[g++] = q + 1,
                        a.b[g++] = q + 3,
                        a.b[g++] = q + 2);
                    break
                } else
                    x = [b[e + d], b[e + d + 1]];
            else {
                x = [b[e + d], b[e + d + 1]];
                if (c - 0 === 2 * d && ma(u, x))
                    break;
                if (m) {
                    t = [b[c - 2 * d], b[c - 2 * d + 1]];
                    var B = x
                } else {
                    l && (f = hj(a, [0, 0], u, x, p * kj * l, f),
                    f = hj(a, [0, 0], u, x, -p * kj * l, f),
                    a.b[g++] = q + 2,
                    a.b[g++] = q,
                    a.b[g++] = q + 1,
                    a.b[g++] = q + 1,
                    a.b[g++] = q + 3,
                    a.b[g++] = q + 2);
                    f = hj(a, [0, 0], u, x, p * lj * (l || 1), f);
                    f = hj(a, [0, 0], u, x, -p * lj * (l || 1), f);
                    n = f / 7 - 1;
                    continue
                }
            }
            var z = Di(t[0], t[1], u[0], u[1], x[0], x[1]) ? -1 : 1;
            f = hj(a, t, u, x, z * mj * (h || 1), f);
            f = hj(a, t, u, x, z * nj * (h || 1), f);
            f = hj(a, t, u, x, -z * oj * (h || 1), f);
            0 < e && (a.b[g++] = q,
            a.b[g++] = n - 1,
            a.b[g++] = n,
            a.b[g++] = q + 2,
            a.b[g++] = q,
            a.b[g++] = 0 < p * z ? n : n - 1);
            a.b[g++] = q;
            a.b[g++] = q + 2;
            a.b[g++] = q + 1;
            n = q + 2;
            p = z;
            h && (f = hj(a, t, u, x, z * pj * h, f),
            a.b[g++] = q + 1,
            a.b[g++] = q + 3,
            a.b[g++] = q)
        }
        m && (q = q || f / 7,
        z = Sf([t[0], t[1], u[0], u[1], x[0], x[1]], 0, 6, 2) ? 1 : -1,
        f = hj(a, t, u, x, z * mj * (h || 1), f),
        hj(a, t, u, x, -z * oj * (h || 1), f),
        a.b[g++] = q,
        a.b[g++] = n - 1,
        a.b[g++] = n,
        a.b[g++] = q + 1,
        a.b[g++] = q,
        a.b[g++] = 0 < p * z ? n : n - 1)
    }
    function hj(a, b, c, d, e, f) {
        a.a[f++] = b[0];
        a.a[f++] = b[1];
        a.a[f++] = c[0];
        a.a[f++] = c[1];
        a.a[f++] = d[0];
        a.a[f++] = d[1];
        a.a[f++] = e;
        return f
    }
    function qj(a, b, c, d) {
        c -= b;
        return c < 2 * d ? !1 : c === 2 * d ? !ma([a[b], a[b + 1]], [a[b + d], a[b + d + 1]]) : !0
    }
    k = fj.prototype;
    k.oc = function(a, b) {
        var c = a.ba();
        a = a.ma();
        qj(c, 0, c.length, a) && (c = nf(c, 0, c.length, a, -this.origin[0], -this.origin[1]),
        this.c.s && (this.l.push(this.b.length),
        this.c.s = !1),
        this.f.push(this.b.length),
        this.i.push(b),
        gj(this, c, c.length, a))
    }
    ;
    k.pc = function(a, b) {
        var c = this.b.length
          , d = a.rb();
        d.unshift(0);
        var e = a.ba();
        a = a.ma();
        var f;
        if (1 < d.length) {
            var g = 1;
            for (f = d.length; g < f; ++g)
                if (qj(e, d[g - 1], d[g], a)) {
                    var h = nf(e, d[g - 1], d[g], a, -this.origin[0], -this.origin[1]);
                    gj(this, h, h.length, a)
                }
        }
        this.b.length > c && (this.f.push(c),
        this.i.push(b),
        this.c.s && (this.l.push(c),
        this.c.s = !1))
    }
    ;
    function rj(a, b, c, d) {
        $i(b, b.length, d) || (b.push(b[0]),
        b.push(b[1]));
        gj(a, b, b.length, d);
        if (c.length) {
            var e;
            b = 0;
            for (e = c.length; b < e; ++b)
                $i(c[b], c[b].length, d) || (c[b].push(c[b][0]),
                c[b].push(c[b][1])),
                gj(a, c[b], c[b].length, d)
        }
    }
    function sj(a, b, c) {
        c = void 0 === c ? a.b.length : c;
        a.f.push(c);
        a.i.push(b);
        a.c.s && (a.l.push(c),
        a.c.s = !1)
    }
    k.ab = function() {
        this.o = new Fi(this.a);
        this.j = new Fi(this.b);
        this.f.push(this.b.length);
        !this.l.length && 0 < this.u.length && (this.u = []);
        this.b = this.a = null
    }
    ;
    k.xb = function(a) {
        var b = this.o
          , c = this.j;
        return function() {
            Ii(a, b);
            Ii(a, c)
        }
    }
    ;
    k.Bf = function(a, b, c, d) {
        var e = Ji(b, bj, dj);
        if (this.v)
            var f = this.v;
        else
            this.v = f = new ej(a,e);
        b.Tc(e);
        a.enableVertexAttribArray(f.l);
        a.vertexAttribPointer(f.l, 2, 5126, !1, 28, 0);
        a.enableVertexAttribArray(f.b);
        a.vertexAttribPointer(f.b, 2, 5126, !1, 28, 8);
        a.enableVertexAttribArray(f.o);
        a.vertexAttribPointer(f.o, 2, 5126, !1, 28, 16);
        a.enableVertexAttribArray(f.g);
        a.vertexAttribPointer(f.g, 1, 5126, !1, 28, 24);
        a.uniform2fv(f.I, c);
        a.uniform1f(f.qa, d);
        return f
    }
    ;
    k.Cf = function(a, b) {
        a.disableVertexAttribArray(b.l);
        a.disableVertexAttribArray(b.b);
        a.disableVertexAttribArray(b.o);
        a.disableVertexAttribArray(b.g)
    }
    ;
    k.Td = function(a, b, c, d) {
        var e = a.getParameter(a.DEPTH_FUNC)
          , f = a.getParameter(a.DEPTH_WRITEMASK);
        d || (a.enable(a.DEPTH_TEST),
        a.depthMask(!0),
        a.depthFunc(a.NOTEQUAL));
        if (ub(c)) {
            var g = this.f[this.f.length - 1];
            for (c = this.l.length - 1; 0 <= c; --c) {
                var h = this.l[c];
                var l = this.u[c];
                tj(this, a, l[0], l[1], l[2]);
                zi(a, b, h, g);
                a.clear(a.DEPTH_BUFFER_BIT);
                g = h
            }
        } else {
            var m = this.f.length - 2;
            l = g = this.f[m + 1];
            for (h = this.l.length - 1; 0 <= h; --h) {
                var n = this.u[h];
                tj(this, a, n[0], n[1], n[2]);
                for (n = this.l[h]; 0 <= m && this.f[m] >= n; ) {
                    var p = this.f[m];
                    var q = this.i[m];
                    q = w(q).toString();
                    c[q] && (g !== l && (zi(a, b, g, l),
                    a.clear(a.DEPTH_BUFFER_BIT)),
                    l = p);
                    m--;
                    g = p
                }
                g !== l && (zi(a, b, g, l),
                a.clear(a.DEPTH_BUFFER_BIT));
                g = l = n
            }
        }
        d || (a.disable(a.DEPTH_TEST),
        a.clear(a.DEPTH_BUFFER_BIT),
        a.depthMask(f),
        a.depthFunc(e))
    }
    ;
    k.Fe = function(a, b, c, d, e) {
        var f, g;
        var h = this.f.length - 2;
        var l = this.f[h + 1];
        for (f = this.l.length - 1; 0 <= f; --f) {
            var m = this.u[f];
            tj(this, a, m[0], m[1], m[2]);
            for (g = this.l[f]; 0 <= h && this.f[h] >= g; ) {
                m = this.f[h];
                var n = this.i[h];
                var p = w(n).toString();
                if (void 0 === c[p] && n.V() && (void 0 === e || ob(e, n.V().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT),
                zi(a, b, m, l),
                l = d(n)))
                    return l;
                h--;
                l = m
            }
        }
    }
    ;
    function tj(a, b, c, d, e) {
        b.uniform4fv(a.v.B, c);
        b.uniform1f(a.v.pa, d);
        b.uniform1f(a.v.S, e)
    }
    k.Na = function(a, b) {
        a = b.g;
        this.c.lineCap = void 0 !== a ? a : "round";
        a = b.f;
        this.c.lineDash = a ? a : Bi;
        a = b.i;
        this.c.lineDashOffset = a ? a : 0;
        a = b.j;
        this.c.lineJoin = void 0 !== a ? a : "round";
        a = b.b;
        a instanceof CanvasGradient || a instanceof CanvasPattern ? a = Ci : a = bd(a).map(function(a, b) {
            return 3 != b ? a / 255 : a
        }) || Ci;
        var c = b.c;
        c = void 0 !== c ? c : 1;
        b = b.l;
        b = void 0 !== b ? b : 10;
        this.c.strokeColor && ma(this.c.strokeColor, a) && this.c.lineWidth === c && this.c.miterLimit === b || (this.c.s = !0,
        this.c.strokeColor = a,
        this.c.lineWidth = c,
        this.c.miterLimit = b,
        this.u.push([a, c, b]))
    }
    ;
    var lj = 3
      , ij = 5
      , kj = 7
      , jj = 11
      , mj = 13
      , nj = 17
      , oj = 19
      , pj = 23;
    function uj() {
        this.b = "precision mediump float;uniform vec4 e;uniform float f;void main(void){gl_FragColor=e;float alpha=e.a*f;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"
    }
    v(uj, oi);
    var vj = new uj;
    function wj() {
        this.b = "attribute vec2 a;uniform mat4 b;uniform mat4 c;uniform mat4 d;void main(void){gl_Position=b*vec4(a,0.0,1.0);}"
    }
    v(wj, pi);
    var xj = new wj;
    function yj(a, b) {
        this.B = a.getUniformLocation(b, "e");
        this.c = a.getUniformLocation(b, "d");
        this.i = a.getUniformLocation(b, "c");
        this.a = a.getUniformLocation(b, "f");
        this.f = a.getUniformLocation(b, "b");
        this.b = a.getAttribLocation(b, "a")
    }
    ;function zj(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.g = a.lineCap;
        this.f = void 0 !== a.lineDash ? a.lineDash : null;
        this.i = a.lineDashOffset;
        this.j = a.lineJoin;
        this.l = a.miterLimit;
        this.c = a.width;
        this.a = void 0
    }
    k = zj.prototype;
    k.clone = function() {
        var a = this.b;
        return new zj({
            color: a && a.slice ? a.slice() : a || void 0,
            lineCap: this.g,
            lineDash: this.f ? this.f.slice() : void 0,
            lineDashOffset: this.i,
            lineJoin: this.j,
            miterLimit: this.l,
            width: this.c
        })
    }
    ;
    k.$o = function() {
        return this.b
    }
    ;
    k.gl = function() {
        return this.g
    }
    ;
    k.ap = function() {
        return this.f
    }
    ;
    k.hl = function() {
        return this.i
    }
    ;
    k.il = function() {
        return this.j
    }
    ;
    k.nl = function() {
        return this.l
    }
    ;
    k.bp = function() {
        return this.c
    }
    ;
    k.cp = function(a) {
        this.b = a;
        this.a = void 0
    }
    ;
    k.oq = function(a) {
        this.g = a;
        this.a = void 0
    }
    ;
    k.setLineDash = function(a) {
        this.f = a;
        this.a = void 0
    }
    ;
    k.pq = function(a) {
        this.i = a;
        this.a = void 0
    }
    ;
    k.qq = function(a) {
        this.j = a;
        this.a = void 0
    }
    ;
    k.tq = function(a) {
        this.l = a;
        this.a = void 0
    }
    ;
    k.xq = function(a) {
        this.c = a;
        this.a = void 0
    }
    ;
    function Aj(a) {
        this.b = this.a = this.f = void 0;
        this.i = void 0 === a ? !0 : a;
        this.c = 0
    }
    function Bj(a) {
        var b = a.b;
        if (b) {
            var c = b.next
              , d = b.yb;
            c && (c.yb = d);
            d && (d.next = c);
            a.b = c || d;
            a.f === a.a ? (a.b = void 0,
            a.f = void 0,
            a.a = void 0) : a.f === b ? a.f = a.b : a.a === b && (a.a = d ? a.b.yb : a.b);
            a.c--
        }
    }
    function Cj(a) {
        a.b = a.f;
        if (a.b)
            return a.b.data
    }
    function Dj(a) {
        if (a.b && a.b.next)
            return a.b = a.b.next,
            a.b.data
    }
    function Ej(a) {
        if (a.b && a.b.next)
            return a.b.next.data
    }
    function Fj(a) {
        if (a.b && a.b.yb)
            return a.b = a.b.yb,
            a.b.data
    }
    function Gj(a) {
        if (a.b && a.b.yb)
            return a.b.yb.data
    }
    function Hj(a) {
        if (a.b)
            return a.b.data
    }
    Aj.prototype.concat = function(a) {
        if (a.b) {
            if (this.b) {
                var b = this.b.next;
                this.b.next = a.f;
                a.f.yb = this.b;
                b.yb = a.a;
                a.a.next = b;
                this.c += a.c
            } else
                this.b = a.b,
                this.f = a.f,
                this.a = a.a,
                this.c = a.c;
            a.b = void 0;
            a.f = void 0;
            a.a = void 0;
            a.c = 0
        }
    }
    ;
    var Ij = {
        fe: function() {}
    };
    (function(a) {
        function b(a, e, f, g, h) {
            f = f || 0;
            g = g || a.length - 1;
            for (h = h || d; g > f; ) {
                if (600 < g - f) {
                    var l = g - f + 1
                      , m = e - f + 1
                      , n = Math.log(l)
                      , p = .5 * Math.exp(2 * n / 3);
                    n = .5 * Math.sqrt(n * p * (l - p) / l) * (0 > m - l / 2 ? -1 : 1);
                    b(a, e, Math.max(f, Math.floor(e - m * p / l + n)), Math.min(g, Math.floor(e + (l - m) * p / l + n)), h)
                }
                l = a[e];
                m = f;
                p = g;
                c(a, f, e);
                for (0 < h(a[g], l) && c(a, f, g); m < p; ) {
                    c(a, m, p);
                    m++;
                    for (p--; 0 > h(a[m], l); )
                        m++;
                    for (; 0 < h(a[p], l); )
                        p--
                }
                0 === h(a[f], l) ? c(a, f, p) : (p++,
                c(a, p, g));
                p <= e && (f = p + 1);
                e <= p && (g = p - 1)
            }
        }
        function c(a, b, c) {
            var d = a[b];
            a[b] = a[c];
            a[c] = d
        }
        function d(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        }
        function e(a, b) {
            if (!(this instanceof e))
                return new e(a,b);
            this.Pf = Math.max(4, a || 9);
            this.kh = Math.max(2, Math.ceil(.4 * this.Pf));
            b && this.pk(b);
            this.clear()
        }
        function f(a, b) {
            g(a, 0, a.children.length, b, a)
        }
        function g(a, b, c, d, e) {
            e || (e = u(null));
            e.ca = Infinity;
            e.ea = Infinity;
            e.da = -Infinity;
            e.ha = -Infinity;
            for (var f; b < c; b++)
                f = a.children[b],
                h(e, a.lb ? d(f) : f);
            return e
        }
        function h(a, b) {
            a.ca = Math.min(a.ca, b.ca);
            a.ea = Math.min(a.ea, b.ea);
            a.da = Math.max(a.da, b.da);
            a.ha = Math.max(a.ha, b.ha)
        }
        function l(a, b) {
            return a.ca - b.ca
        }
        function m(a, b) {
            return a.ea - b.ea
        }
        function n(a) {
            return (a.da - a.ca) * (a.ha - a.ea)
        }
        function p(a) {
            return a.da - a.ca + (a.ha - a.ea)
        }
        function q(a, b) {
            return a.ca <= b.ca && a.ea <= b.ea && b.da <= a.da && b.ha <= a.ha
        }
        function t(a, b) {
            return b.ca <= a.da && b.ea <= a.ha && b.da >= a.ca && b.ha >= a.ea
        }
        function u(a) {
            return {
                children: a,
                height: 1,
                lb: !0,
                ca: Infinity,
                ea: Infinity,
                da: -Infinity,
                ha: -Infinity
            }
        }
        function x(a, b, c, d, e) {
            for (var f = [b, c], g; f.length; )
                c = f.pop(),
                b = f.pop(),
                c - b <= d || (g = b + Math.ceil((c - b) / d / 2) * d,
                B(a, g, b, c, e),
                f.push(b, g, g, c))
        }
        var B = b;
        e.prototype = {
            all: function() {
                return this.fh(this.data, [])
            },
            search: function(a) {
                var b = this.data
                  , c = []
                  , d = this.Ab;
                if (!t(a, b))
                    return c;
                for (var e = [], f, g, h, l; b; ) {
                    f = 0;
                    for (g = b.children.length; f < g; f++)
                        h = b.children[f],
                        l = b.lb ? d(h) : h,
                        t(a, l) && (b.lb ? c.push(h) : q(a, l) ? this.fh(h, c) : e.push(h));
                    b = e.pop()
                }
                return c
            },
            load: function(a) {
                if (!a || !a.length)
                    return this;
                if (a.length < this.kh) {
                    for (var b = 0, c = a.length; b < c; b++)
                        this.Ga(a[b]);
                    return this
                }
                a = this.hh(a.slice(), 0, a.length - 1, 0);
                this.data.children.length ? this.data.height === a.height ? this.mh(this.data, a) : (this.data.height < a.height && (b = this.data,
                this.data = a,
                a = b),
                this.jh(a, this.data.height - a.height - 1, !0)) : this.data = a;
                return this
            },
            Ga: function(a) {
                a && this.jh(a, this.data.height - 1);
                return this
            },
            clear: function() {
                this.data = u([]);
                return this
            },
            remove: function(a, b) {
                if (!a)
                    return this;
                for (var c = this.data, d = this.Ab(a), e = [], f = [], g, h, l, m; c || e.length; ) {
                    c || (c = e.pop(),
                    h = e[e.length - 1],
                    g = f.pop(),
                    m = !0);
                    if (c.lb) {
                        a: {
                            l = a;
                            var n = c.children
                              , p = b;
                            if (p) {
                                for (var t = 0; t < n.length; t++)
                                    if (p(l, n[t])) {
                                        l = t;
                                        break a
                                    }
                                l = -1
                            } else
                                l = n.indexOf(l)
                        }
                        if (-1 !== l) {
                            c.children.splice(l, 1);
                            e.push(c);
                            this.mk(e);
                            break
                        }
                    }
                    m || c.lb || !q(c, d) ? h ? (g++,
                    c = h.children[g],
                    m = !1) : c = null : (e.push(c),
                    f.push(g),
                    g = 0,
                    h = c,
                    c = c.children[0])
                }
                return this
            },
            Ab: function(a) {
                return a
            },
            Sf: l,
            Tf: m,
            toJSON: function() {
                return this.data
            },
            fh: function(a, b) {
                for (var c = []; a; )
                    a.lb ? b.push.apply(b, a.children) : c.push.apply(c, a.children),
                    a = c.pop();
                return b
            },
            hh: function(a, b, c, d) {
                var e = c - b + 1
                  , g = this.Pf;
                if (e <= g) {
                    var h = u(a.slice(b, c + 1));
                    f(h, this.Ab);
                    return h
                }
                d || (d = Math.ceil(Math.log(e) / Math.log(g)),
                g = Math.ceil(e / Math.pow(g, d - 1)));
                h = u([]);
                h.lb = !1;
                h.height = d;
                e = Math.ceil(e / g);
                g = e * Math.ceil(Math.sqrt(g));
                var l;
                for (x(a, b, c, g, this.Sf); b <= c; b += g) {
                    var m = Math.min(b + g - 1, c);
                    x(a, b, m, e, this.Tf);
                    for (l = b; l <= m; l += e) {
                        var n = Math.min(l + e - 1, m);
                        h.children.push(this.hh(a, l, n, d - 1))
                    }
                }
                f(h, this.Ab);
                return h
            },
            lk: function(a, b, c, d) {
                for (var e, f, g, h, l, m, p, q; ; ) {
                    d.push(b);
                    if (b.lb || d.length - 1 === c)
                        break;
                    p = q = Infinity;
                    e = 0;
                    for (f = b.children.length; e < f; e++)
                        g = b.children[e],
                        l = n(g),
                        m = (Math.max(g.da, a.da) - Math.min(g.ca, a.ca)) * (Math.max(g.ha, a.ha) - Math.min(g.ea, a.ea)) - l,
                        m < q ? (q = m,
                        p = l < p ? l : p,
                        h = g) : m === q && l < p && (p = l,
                        h = g);
                    b = h || b.children[0]
                }
                return b
            },
            jh: function(a, b, c) {
                var d = this.Ab;
                c = c ? a : d(a);
                d = [];
                var e = this.lk(c, this.data, b, d);
                e.children.push(a);
                for (h(e, c); 0 <= b; )
                    if (d[b].children.length > this.Pf)
                        this.uk(d, b),
                        b--;
                    else
                        break;
                this.ik(c, d, b)
            },
            uk: function(a, b) {
                var c = a[b]
                  , d = c.children.length
                  , e = this.kh;
                this.jk(c, e, d);
                d = this.kk(c, e, d);
                d = u(c.children.splice(d, c.children.length - d));
                d.height = c.height;
                d.lb = c.lb;
                f(c, this.Ab);
                f(d, this.Ab);
                b ? a[b - 1].children.push(d) : this.mh(c, d)
            },
            mh: function(a, b) {
                this.data = u([a, b]);
                this.data.height = a.height + 1;
                this.data.lb = !1;
                f(this.data, this.Ab)
            },
            kk: function(a, b, c) {
                var d, e;
                var f = e = Infinity;
                for (d = b; d <= c - b; d++) {
                    var h = g(a, 0, d, this.Ab);
                    var l = g(a, d, c, this.Ab);
                    var m = Math.max(0, Math.min(h.da, l.da) - Math.max(h.ca, l.ca)) * Math.max(0, Math.min(h.ha, l.ha) - Math.max(h.ea, l.ea));
                    h = n(h) + n(l);
                    if (m < f) {
                        f = m;
                        var p = d;
                        e = h < e ? h : e
                    } else
                        m === f && h < e && (e = h,
                        p = d)
                }
                return p
            },
            jk: function(a, b, c) {
                var d = a.lb ? this.Sf : l
                  , e = a.lb ? this.Tf : m
                  , f = this.gh(a, b, c, d);
                b = this.gh(a, b, c, e);
                f < b && a.children.sort(d)
            },
            gh: function(a, b, c, d) {
                a.children.sort(d);
                d = this.Ab;
                var e = g(a, 0, b, d), f = g(a, c - b, c, d), l = p(e) + p(f), m;
                for (m = b; m < c - b; m++) {
                    var n = a.children[m];
                    h(e, a.lb ? d(n) : n);
                    l += p(e)
                }
                for (m = c - b - 1; m >= b; m--)
                    n = a.children[m],
                    h(f, a.lb ? d(n) : n),
                    l += p(f);
                return l
            },
            ik: function(a, b, c) {
                for (; 0 <= c; c--)
                    h(b[c], a)
            },
            mk: function(a) {
                for (var b = a.length - 1, c; 0 <= b; b--)
                    0 === a[b].children.length ? 0 < b ? (c = a[b - 1].children,
                    c.splice(c.indexOf(a[b]), 1)) : this.clear() : f(a[b], this.Ab)
            },
            pk: function(a) {
                var b = ["return a", " - b", ";"];
                this.Sf = new Function("a","b",b.join(a[0]));
                this.Tf = new Function("a","b",b.join(a[1]));
                this.Ab = new Function("a","return {minX: a" + a[0] + ", minY: a" + a[1] + ", maxX: a" + a[2] + ", maxY: a" + a[3] + "};")
            }
        };
        a["default"] = e
    }
    )(Ij.fe = Ij.fe || {});
    Ij.fe = Ij.fe.default;
    function Jj(a) {
        this.a = Ij.fe(a);
        this.b = {}
    }
    k = Jj.prototype;
    k.Ga = function(a, b) {
        a = {
            ca: a[0],
            ea: a[1],
            da: a[2],
            ha: a[3],
            value: b
        };
        this.a.Ga(a);
        this.b[w(b)] = a
    }
    ;
    k.load = function(a, b) {
        for (var c = Array(b.length), d = 0, e = b.length; d < e; d++) {
            var f = a[d]
              , g = b[d];
            f = {
                ca: f[0],
                ea: f[1],
                da: f[2],
                ha: f[3],
                value: g
            };
            c[d] = f;
            this.b[w(g)] = f
        }
        this.a.load(c)
    }
    ;
    k.remove = function(a) {
        a = w(a);
        var b = this.b[a];
        delete this.b[a];
        return null !== this.a.remove(b)
    }
    ;
    function Kj(a, b, c) {
        var d = a.b[w(c)];
        ab([d.ca, d.ea, d.da, d.ha], b) || (a.remove(c),
        a.Ga(b, c))
    }
    function Lj(a) {
        return a.a.all().map(function(a) {
            return a.value
        })
    }
    function Mj(a, b) {
        return a.a.search({
            ca: b[0],
            ea: b[1],
            da: b[2],
            ha: b[3]
        }).map(function(a) {
            return a.value
        })
    }
    k.forEach = function(a, b) {
        return Nj(Lj(this), a, b)
    }
    ;
    function Oj(a, b, c, d) {
        return Nj(Mj(a, b), c, d)
    }
    function Nj(a, b, c) {
        for (var d, e = 0, f = a.length; e < f && !(d = b.call(c, a[e])); e++)
            ;
        return d
    }
    k.clear = function() {
        this.a.clear();
        this.b = {}
    }
    ;
    k.G = function(a) {
        var b = this.a.data;
        return Va(b.ca, b.ea, b.da, b.ha, a)
    }
    ;
    k.concat = function(a) {
        this.a.load(a.a.all());
        for (var b in a.b)
            this.b[b | 0] = a.b[b | 0]
    }
    ;
    function Pj(a, b) {
        xi.call(this, 0, b);
        this.g = new fj(0,b);
        this.v = null;
        this.u = [];
        this.c = [];
        this.l = {
            fillColor: null,
            s: !1
        }
    }
    v(Pj, xi);
    function Qj(a, b, c, d) {
        var e = new Aj
          , f = new Jj;
        Rj(a, b, d, e, f, !0);
        b = Sj(e);
        if (c.length) {
            var g, h = [];
            var l = 0;
            for (g = c.length; l < g; ++l) {
                var m = {
                    list: new Aj,
                    wc: void 0,
                    Ug: new Jj
                };
                h.push(m);
                Rj(a, c[l], d, m.list, m.Ug, !1);
                Tj(m.list, m.Ug, !0);
                m.wc = Sj(m.list)
            }
            h.sort(function(a, b) {
                return b.wc[0] === a.wc[0] ? a.wc[1] - b.wc[1] : b.wc[0] - a.wc[0]
            });
            for (l = 0; l < h.length; ++l) {
                c = h[l].list;
                g = d = Cj(c);
                do {
                    if (Uj(g, f).length) {
                        var n = !0;
                        break
                    }
                    g = Dj(c)
                } while (d !== g);
                !n && Vj(c, h[l].wc[0], e, b[0], f) && (f.concat(h[l].Ug),
                Tj(e, f, !1))
            }
        } else
            Tj(e, f, !1);
        Wj(a, e, f)
    }
    function Rj(a, b, c, d, e, f) {
        var g, h = a.a.length / 2, l = [], m = [];
        if (f === Sf(b, 0, b.length, c)) {
            var n = f = Xj(a, b[0], b[1], h++);
            var p = c;
            for (g = b.length; p < g; p += c) {
                var q = Xj(a, b[p], b[p + 1], h++);
                m.push(Yj(n, q, d));
                l.push([Math.min(n.x, q.x), Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y)]);
                n = q
            }
        } else
            for (p = b.length - c,
            n = f = Xj(a, b[p], b[p + 1], h++),
            p -= c,
            g = 0; p >= g; p -= c)
                q = Xj(a, b[p], b[p + 1], h++),
                m.push(Yj(n, q, d)),
                l.push([Math.min(n.x, q.x), Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y)]),
                n = q;
        m.push(Yj(q, f, d));
        l.push([Math.min(n.x, q.x), Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y)]);
        e.load(l, m)
    }
    function Sj(a) {
        var b = Cj(a)
          , c = b
          , d = [c.Z.x, c.Z.y];
        do
            c = Dj(a),
            c.Z.x > d[0] && (d = [c.Z.x, c.Z.y]);
        while (c !== b);
        return d
    }
    function Tj(a, b, c) {
        var d = Cj(a)
          , e = d
          , f = Dj(a)
          , g = !1;
        do {
            var h = c ? Di(f.W.x, f.W.y, e.W.x, e.W.y, e.Z.x, e.Z.y) : Di(e.Z.x, e.Z.y, e.W.x, e.W.y, f.W.x, f.W.y);
            void 0 === h ? (Zj(e, f, a, b),
            g = !0,
            f === d && (d = Ej(a)),
            f = e,
            Fj(a)) : e.W.Eb !== h && (e.W.Eb = h,
            g = !0);
            e = f;
            f = Dj(a)
        } while (e !== d);
        return g
    }
    function Vj(a, b, c, d, e) {
        for (var f = Cj(a); f.W.x !== b; )
            f = Dj(a);
        b = f.W;
        d = {
            x: d,
            y: b.y,
            kb: -1
        };
        var g = Infinity, h;
        var l = Uj({
            Z: b,
            W: d
        }, e, !0);
        var m = 0;
        for (h = l.length; m < h; ++m) {
            var n = l[m]
              , p = ak(b, d, n.Z, n.W, !0)
              , q = Math.abs(b.x - p[0]);
            if (q < g && void 0 !== Di(b.x, b.y, n.Z.x, n.Z.y, n.W.x, n.W.y)) {
                g = q;
                var t = {
                    x: p[0],
                    y: p[1],
                    kb: -1
                };
                f = n
            }
        }
        if (Infinity === g)
            return !1;
        l = f.W;
        if (0 < g && (f = bk(b, t, f.W, e),
        f.length))
            for (t = Infinity,
            m = 0,
            h = f.length; m < h; ++m)
                if (g = f[m],
                n = Math.atan2(b.y - g.y, d.x - g.x),
                n < t || n === t && g.x < l.x)
                    t = n,
                    l = g;
        for (f = Cj(c); f.W.x !== l.x || f.W.y !== l.y; )
            f = Dj(c);
        d = {
            x: b.x,
            y: b.y,
            kb: b.kb,
            Eb: void 0
        };
        m = {
            x: f.W.x,
            y: f.W.y,
            kb: f.W.kb,
            Eb: void 0
        };
        Ej(a).Z = d;
        Yj(b, f.W, a, e);
        Yj(m, d, a, e);
        f.W = m;
        a.i && a.b && (a.f = a.b,
        a.a = a.b.yb);
        c.concat(a);
        return !0
    }
    function Wj(a, b, c) {
        for (var d = !1, e = ck(b, c); 3 < b.c; )
            if (e) {
                if (!dk(a, b, c, e, d) && !Tj(b, c, d) && !ek(a, b, c, !0))
                    break
            } else if (!dk(a, b, c, e, d) && !Tj(b, c, d) && !ek(a, b, c))
                if (e = ck(b, c)) {
                    d = b;
                    var f = 2 * d.c
                      , g = Array(f)
                      , h = Cj(d)
                      , l = h
                      , m = 0;
                    do
                        g[m++] = l.Z.x,
                        g[m++] = l.Z.y,
                        l = Dj(d);
                    while (l !== h);
                    d = !Sf(g, 0, f, 2);
                    Tj(b, c, d)
                } else {
                    e = a;
                    d = b;
                    f = g = Cj(d);
                    do {
                        h = Uj(f, c);
                        if (h.length) {
                            g = h[0];
                            h = ak(f.Z, f.W, g.Z, g.W);
                            h = Xj(e, h[0], h[1], e.a.length / 2);
                            l = new Aj;
                            m = new Jj;
                            Yj(h, f.W, l, m);
                            f.W = h;
                            Kj(c, [Math.min(f.Z.x, h.x), Math.min(f.Z.y, h.y), Math.max(f.Z.x, h.x), Math.max(f.Z.y, h.y)], f);
                            for (f = Dj(d); f !== g; )
                                Yj(f.Z, f.W, l, m),
                                c.remove(f),
                                Bj(d),
                                f = Hj(d);
                            Yj(g.Z, h, l, m);
                            g.Z = h;
                            Kj(c, [Math.min(g.W.x, h.x), Math.min(g.W.y, h.y), Math.max(g.W.x, h.x), Math.max(g.W.y, h.y)], g);
                            Tj(d, c, !1);
                            Wj(e, d, c);
                            Tj(l, m, !1);
                            Wj(e, l, m);
                            break
                        }
                        f = Dj(d)
                    } while (f !== g);
                    break
                }
        3 === b.c && (e = a.b.length,
        a.b[e++] = Gj(b).Z.kb,
        a.b[e++] = Hj(b).Z.kb,
        a.b[e++] = Ej(b).Z.kb)
    }
    function dk(a, b, c, d, e) {
        var f = a.b.length
          , g = Cj(b)
          , h = Gj(b)
          , l = g
          , m = Dj(b)
          , n = Ej(b)
          , p = !1;
        do {
            var q = l.Z;
            var t = l.W;
            var u = m.W;
            if (!1 === t.Eb) {
                var x = d ? !bk(q, t, u, c, !0).length : e ? fk(n.W, u, t, q, h.Z) : fk(h.Z, q, t, u, n.W);
                !d && Uj({
                    Z: q,
                    W: u
                }, c).length || !x || !d && !1 !== q.Eb && !1 !== u.Eb && Sf([h.Z.x, h.Z.y, q.x, q.y, t.x, t.y, u.x, u.y, n.W.x, n.W.y], 0, 10, 2) !== !e || (a.b[f++] = q.kb,
                a.b[f++] = t.kb,
                a.b[f++] = u.kb,
                Zj(l, m, b, c),
                m === g && (g = n),
                p = !0)
            }
            h = Gj(b);
            l = Hj(b);
            m = Dj(b);
            n = Ej(b)
        } while (l !== g && 3 < b.c);
        return p
    }
    function ek(a, b, c, d) {
        var e = Cj(b);
        Dj(b);
        var f = e
          , g = Dj(b)
          , h = !1;
        do {
            var l = ak(f.Z, f.W, g.Z, g.W, d);
            if (l) {
                h = a.b.length;
                var m = a.a.length / 2
                  , n = Fj(b);
                Bj(b);
                c.remove(n);
                var p = n === e;
                d ? (l[0] === f.Z.x && l[1] === f.Z.y ? (Fj(b),
                l = f.Z,
                g.Z = l,
                c.remove(f),
                p = p || f === e) : (l = g.W,
                f.W = l,
                c.remove(g),
                p = p || g === e),
                Bj(b)) : (l = Xj(a, l[0], l[1], m),
                f.W = l,
                g.Z = l,
                Kj(c, [Math.min(f.Z.x, f.W.x), Math.min(f.Z.y, f.W.y), Math.max(f.Z.x, f.W.x), Math.max(f.Z.y, f.W.y)], f),
                Kj(c, [Math.min(g.Z.x, g.W.x), Math.min(g.Z.y, g.W.y), Math.max(g.Z.x, g.W.x), Math.max(g.Z.y, g.W.y)], g));
                a.b[h++] = n.Z.kb;
                a.b[h++] = n.W.kb;
                a.b[h++] = l.kb;
                h = !0;
                if (p)
                    break
            }
            f = Gj(b);
            g = Dj(b)
        } while (f !== e);
        return h
    }
    function ck(a, b) {
        var c = Cj(a)
          , d = c;
        do {
            if (Uj(d, b).length)
                return !1;
            d = Dj(a)
        } while (d !== c);
        return !0
    }
    function Xj(a, b, c, d) {
        var e = a.a.length;
        a.a[e++] = b;
        a.a[e++] = c;
        return {
            x: b,
            y: c,
            kb: d,
            Eb: void 0
        }
    }
    function Yj(a, b, c, d) {
        var e = {
            Z: a,
            W: b
        }
          , f = {
            yb: void 0,
            next: void 0,
            data: e
        }
          , g = c.b;
        if (g) {
            var h = g.next;
            f.yb = g;
            f.next = h;
            g.next = f;
            h && (h.yb = f);
            g === c.a && (c.a = f)
        } else
            c.f = f,
            c.a = f,
            c.i && (f.next = f,
            f.yb = f);
        c.b = f;
        c.c++;
        d && d.Ga([Math.min(a.x, b.x), Math.min(a.y, b.y), Math.max(a.x, b.x), Math.max(a.y, b.y)], e);
        return e
    }
    function Zj(a, b, c, d) {
        Hj(c) === b && (Bj(c),
        a.W = b.W,
        d.remove(b),
        Kj(d, [Math.min(a.Z.x, a.W.x), Math.min(a.Z.y, a.W.y), Math.max(a.Z.x, a.W.x), Math.max(a.Z.y, a.W.y)], a))
    }
    function bk(a, b, c, d, e) {
        var f, g, h = [], l = Mj(d, [Math.min(a.x, b.x, c.x), Math.min(a.y, b.y, c.y), Math.max(a.x, b.x, c.x), Math.max(a.y, b.y, c.y)]);
        d = 0;
        for (f = l.length; d < f; ++d)
            for (g in l[d]) {
                var m = l[d][g];
                "object" !== typeof m || e && !m.Eb || m.x === a.x && m.y === a.y || m.x === b.x && m.y === b.y || m.x === c.x && m.y === c.y || -1 !== h.indexOf(m) || !Lf([a.x, a.y, b.x, b.y, c.x, c.y], 0, 6, 2, m.x, m.y) || h.push(m)
            }
        return h
    }
    function Uj(a, b, c) {
        var d = a.Z
          , e = a.W;
        b = Mj(b, [Math.min(d.x, e.x), Math.min(d.y, e.y), Math.max(d.x, e.x), Math.max(d.y, e.y)]);
        var f = [], g;
        var h = 0;
        for (g = b.length; h < g; ++h) {
            var l = b[h];
            a !== l && (c || l.Z !== e || l.W !== d) && ak(d, e, l.Z, l.W, c) && f.push(l)
        }
        return f
    }
    function ak(a, b, c, d, e) {
        var f = (d.y - c.y) * (b.x - a.x) - (d.x - c.x) * (b.y - a.y);
        if (f && (d = ((d.x - c.x) * (a.y - c.y) - (d.y - c.y) * (a.x - c.x)) / f,
        c = ((b.x - a.x) * (a.y - c.y) - (b.y - a.y) * (a.x - c.x)) / f,
        !e && d > Ei && d < 1 - Ei && c > Ei && c < 1 - Ei || e && 0 <= d && 1 >= d && 0 <= c && 1 >= c))
            return [a.x + d * (b.x - a.x), a.y + d * (b.y - a.y)]
    }
    function fk(a, b, c, d, e) {
        if (void 0 === b.Eb || void 0 === d.Eb)
            return !1;
        var f = (c.x - d.x) * (b.y - d.y) > (c.y - d.y) * (b.x - d.x);
        e = (e.x - d.x) * (b.y - d.y) < (e.y - d.y) * (b.x - d.x);
        a = (a.x - b.x) * (d.y - b.y) > (a.y - b.y) * (d.x - b.x);
        c = (c.x - b.x) * (d.y - b.y) < (c.y - b.y) * (d.x - b.x);
        b = b.Eb ? c || a : c && a;
        return (d.Eb ? e || f : e && f) && b
    }
    k = Pj.prototype;
    k.rc = function(a, b) {
        var c = a.c
          , d = a.ma()
          , e = this.b.length
          , f = this.g.b.length;
        a = a.ba();
        var g, h, l;
        var m = h = 0;
        for (g = c.length; m < g; ++m) {
            var n = c[m];
            if (0 < n.length) {
                var p = nf(a, h, n[0], d, -this.origin[0], -this.origin[1]);
                if (p.length) {
                    var q = [];
                    h = 1;
                    for (l = n.length; h < l; ++h)
                        if (n[h] !== n[h - 1]) {
                            var t = nf(a, n[h - 1], n[h], d, -this.origin[0], -this.origin[1]);
                            q.push(t)
                        }
                    rj(this.g, p, q, d);
                    Qj(this, p, q, d)
                }
            }
            h = n[n.length - 1]
        }
        this.b.length > e && (this.f.push(e),
        this.i.push(b),
        this.l.s && (this.c.push(e),
        this.l.s = !1));
        this.g.b.length > f && sj(this.g, b, f)
    }
    ;
    k.tc = function(a, b) {
        var c = a.rb()
          , d = a.ma();
        if (0 < c.length) {
            a = a.ba().map(Number);
            var e = nf(a, 0, c[0], d, -this.origin[0], -this.origin[1]);
            if (e.length) {
                var f = [], g;
                var h = 1;
                for (g = c.length; h < g; ++h)
                    if (c[h] !== c[h - 1]) {
                        var l = nf(a, c[h - 1], c[h], d, -this.origin[0], -this.origin[1]);
                        f.push(l)
                    }
                this.f.push(this.b.length);
                this.i.push(b);
                this.l.s && (this.c.push(this.b.length),
                this.l.s = !1);
                sj(this.g, b);
                rj(this.g, e, f, d);
                Qj(this, e, f, d)
            }
        }
    }
    ;
    k.ab = function(a) {
        this.o = new Fi(this.a);
        this.j = new Fi(this.b);
        this.f.push(this.b.length);
        this.g.ab(a);
        !this.c.length && 0 < this.u.length && (this.u = []);
        this.b = this.a = null
    }
    ;
    k.xb = function(a) {
        var b = this.o
          , c = this.j
          , d = this.g.xb(a);
        return function() {
            Ii(a, b);
            Ii(a, c);
            d()
        }
    }
    ;
    k.Bf = function(a, b) {
        var c = Ji(b, vj, xj);
        if (this.v)
            var d = this.v;
        else
            this.v = d = new yj(a,c);
        b.Tc(c);
        a.enableVertexAttribArray(d.b);
        a.vertexAttribPointer(d.b, 2, 5126, !1, 8, 0);
        return d
    }
    ;
    k.Cf = function(a, b) {
        a.disableVertexAttribArray(b.b)
    }
    ;
    k.Td = function(a, b, c, d) {
        var e = a.getParameter(a.DEPTH_FUNC)
          , f = a.getParameter(a.DEPTH_WRITEMASK);
        d || (a.enable(a.DEPTH_TEST),
        a.depthMask(!0),
        a.depthFunc(a.NOTEQUAL));
        if (ub(c)) {
            var g = this.f[this.f.length - 1];
            for (c = this.c.length - 1; 0 <= c; --c) {
                var h = this.c[c];
                var l = this.u[c];
                a.uniform4fv(this.v.B, l);
                zi(a, b, h, g);
                g = h
            }
        } else {
            var m = this.f.length - 2;
            l = g = this.f[m + 1];
            for (h = this.c.length - 1; 0 <= h; --h) {
                var n = this.u[h];
                a.uniform4fv(this.v.B, n);
                for (n = this.c[h]; 0 <= m && this.f[m] >= n; ) {
                    var p = this.f[m];
                    var q = this.i[m];
                    q = w(q).toString();
                    c[q] && (g !== l && (zi(a, b, g, l),
                    a.clear(a.DEPTH_BUFFER_BIT)),
                    l = p);
                    m--;
                    g = p
                }
                g !== l && (zi(a, b, g, l),
                a.clear(a.DEPTH_BUFFER_BIT));
                g = l = n
            }
        }
        d || (a.disable(a.DEPTH_TEST),
        a.clear(a.DEPTH_BUFFER_BIT),
        a.depthMask(f),
        a.depthFunc(e))
    }
    ;
    k.Fe = function(a, b, c, d, e) {
        var f, g;
        var h = this.f.length - 2;
        var l = this.f[h + 1];
        for (f = this.c.length - 1; 0 <= f; --f) {
            var m = this.u[f];
            a.uniform4fv(this.v.B, m);
            for (g = this.c[f]; 0 <= h && this.f[h] >= g; ) {
                m = this.f[h];
                var n = this.i[h];
                var p = w(n).toString();
                if (void 0 === c[p] && n.V() && (void 0 === e || ob(e, n.V().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT),
                zi(a, b, m, l),
                l = d(n)))
                    return l;
                h--;
                l = m
            }
        }
    }
    ;
    k.Na = function(a, b) {
        a = a ? a.b : [0, 0, 0, 0];
        a instanceof CanvasGradient || a instanceof CanvasPattern ? a = Ai : a = bd(a).map(function(a, b) {
            return 3 != b ? a / 255 : a
        }) || Ai;
        this.l.fillColor && ma(a, this.l.fillColor) || (this.l.fillColor = a,
        this.l.s = !0,
        this.u.push(a));
        b ? this.g.Na(null, b) : this.g.Na(null, new zj({
            color: [0, 0, 0, 0],
            lineWidth: 0
        }))
    }
    ;
    function gk(a, b) {
        this.b = b;
        this.a = [{
            x: 0,
            y: 0,
            width: a,
            height: a
        }];
        this.c = {};
        this.f = gd(a, a);
        this.i = this.f.canvas
    }
    gk.prototype.get = function(a) {
        return this.c[a] || null
    }
    ;
    gk.prototype.add = function(a, b, c, d, e) {
        var f;
        var g = 0;
        for (f = this.a.length; g < f; ++g) {
            var h = this.a[g];
            if (h.width >= b + this.b && h.height >= c + this.b)
                return f = {
                    offsetX: h.x + this.b,
                    offsetY: h.y + this.b,
                    image: this.i
                },
                this.c[a] = f,
                d.call(e, this.f, h.x + this.b, h.y + this.b),
                a = g,
                b += this.b,
                d = c + this.b,
                h.width - b > h.height - d ? (c = {
                    x: h.x + b,
                    y: h.y,
                    width: h.width - b,
                    height: h.height
                },
                b = {
                    x: h.x,
                    y: h.y + d,
                    width: b,
                    height: h.height - d
                },
                hk(this, a, c, b)) : (c = {
                    x: h.x + b,
                    y: h.y,
                    width: h.width - b,
                    height: d
                },
                b = {
                    x: h.x,
                    y: h.y + d,
                    width: h.width,
                    height: h.height - d
                },
                hk(this, a, c, b)),
                f
        }
        return null
    }
    ;
    function hk(a, b, c, d) {
        b = [b, 1];
        0 < c.width && 0 < c.height && b.push(c);
        0 < d.width && 0 < d.height && b.push(d);
        a.a.splice.apply(a.a, b)
    }
    ;function ik(a) {
        a = a || {};
        this.a = void 0 !== a.initialSize ? a.initialSize : 256;
        this.f = void 0 !== a.maxSize ? a.maxSize : void 0 !== ba ? ba : 2048;
        this.b = void 0 !== a.space ? a.space : 1;
        this.g = [new gk(this.a,this.b)];
        this.c = this.a;
        this.i = [new gk(this.c,this.b)]
    }
    function jk(a, b) {
        var c;
        var d = 0;
        for (c = a.length; d < c; ++d) {
            var e = a[d];
            if (e = e.get(b))
                return e
        }
        return null
    }
    function kk(a, b) {
        return {
            offsetX: a.offsetX,
            offsetY: a.offsetY,
            image: a.image,
            mm: b.image
        }
    }
    ik.prototype.add = function(a, b, c, d, e, f) {
        if (b + this.b > this.f || c + this.b > this.f)
            return null;
        d = lk(this, !1, a, b, c, d, f);
        if (!d)
            return null;
        a = lk(this, !0, a, b, c, e ? e : ra, f);
        return kk(d, a)
    }
    ;
    function lk(a, b, c, d, e, f, g) {
        var h = b ? a.i : a.g, l;
        var m = 0;
        for (l = h.length; m < l; ++m) {
            var n = h[m];
            if (n = n.add(c, d, e, f, g))
                return n;
            n || m !== l - 1 || (b ? (n = Math.min(2 * a.c, a.f),
            a.c = n) : (n = Math.min(2 * a.a, a.f),
            a.a = n),
            n = new gk(n,a.b),
            h.push(n),
            ++l)
        }
        return null
    }
    ;function mk(a, b) {
        Wi.call(this, 0, b);
        this.c = [];
        this.va = [];
        this.mc = gd(0, 0).canvas;
        this.R = {
            strokeColor: null,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: 0,
            miterLimit: void 0,
            fillColor: null,
            font: void 0,
            scale: void 0
        };
        this.ua = "";
        this.ga = this.ta = this.oa = this.jb = void 0;
        this.C = {};
        this.l = void 0;
        this.opacity = this.scale = 1
    }
    v(mk, Wi);
    k = mk.prototype;
    k.Qb = function(a, b, c, d, e, f) {
        if (this.ua) {
            this.f.push(this.b.length);
            this.i.push(f);
            e = this.l;
            f = this.ua.split("\n");
            var g = nk(this, f), h, l, m = Math.round(g[0] * this.jb - this.ta), n = Math.round(g[1] * this.oa - this.ga), p = this.R.lineWidth / 2 * this.R.scale;
            g = 0;
            for (h = f.length; g < h; ++g) {
                var q = 0;
                var t = e.height * g;
                var u = f[g].split("");
                var x = 0;
                for (l = u.length; x < l; ++x) {
                    var B = e.qh;
                    var z = u[x]
                      , G = jk(B.g, z);
                    G ? (B = jk(B.i, z),
                    B = kk(G, B)) : B = null;
                    if (B) {
                        G = B.image;
                        this.D = m - q;
                        this.B = n - t;
                        this.I = x ? B.offsetX : B.offsetX - p;
                        this.S = B.offsetY;
                        this.height = e.height;
                        this.width = x && x !== u.length - 1 ? e.width[u[x]] : e.width[u[x]] + p;
                        this.pa = G.height;
                        this.qa = G.width;
                        this.c.length ? (B = this.c[this.c.length - 1],
                        w(B) != w(G) && (this.v.push(this.b.length),
                        this.c.push(G))) : this.c.push(G);
                        B = a;
                        z = b;
                        var E = c
                          , ia = d;
                        for (G = z; G < E; G += ia)
                            Xi(this, B, z, E, ia)
                    }
                    q += this.width
                }
            }
        }
    }
    ;
    function nk(a, b) {
        var c = a.l
          , d = b.length * c.height;
        return [b.map(function(b) {
            var d = 0, e;
            var h = 0;
            for (e = b.length; h < e; ++h) {
                var l = b[h];
                c.width[l] || ok(a, l);
                d += c.width[l] ? c.width[l] : 0
            }
            return d
        }).reduce(function(a, b) {
            return Math.max(a, b)
        }), d]
    }
    function ok(a, b) {
        if (1 === b.length) {
            var c = a.l
              , d = a.R;
            a = a.mc.getContext("2d");
            a.font = d.font;
            a = Math.ceil(a.measureText(b).width * d.scale);
            c.qh.add(b, a, c.height, function(a, c, g) {
                a.font = d.font;
                a.fillStyle = d.fillColor;
                a.strokeStyle = d.strokeColor;
                a.lineWidth = d.lineWidth;
                a.lineCap = d.lineCap;
                a.lineJoin = d.lineJoin;
                a.miterLimit = d.miterLimit;
                a.textAlign = "left";
                a.textBaseline = "top";
                Qd && d.lineDash && (a.setLineDash(d.lineDash),
                a.lineDashOffset = d.lineDashOffset);
                1 !== d.scale && a.setTransform(d.scale, 0, 0, d.scale, 0, 0);
                d.strokeColor && a.strokeText(b, c, g);
                d.fillColor && a.fillText(b, c, g)
            }) && (c.width[b] = a)
        }
    }
    k.ab = function(a) {
        var b = a.b;
        this.v.push(this.b.length);
        this.u = this.v;
        this.o = new Fi(this.a);
        this.j = new Fi(this.b);
        Yi(this.va, this.c, {}, b);
        this.R = {
            strokeColor: null,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: 0,
            miterLimit: void 0,
            fillColor: null,
            font: void 0,
            scale: void 0
        };
        this.ua = "";
        this.ga = this.ta = this.oa = this.jb = void 0;
        this.c = null;
        this.C = {};
        this.l = void 0;
        Wi.prototype.ab.call(this, a)
    }
    ;
    k.gb = function(a) {
        var b = this.R
          , c = a.Da()
          , d = a.Ea();
        if (a && a.Ja() && (c || d)) {
            c ? (c = c.b,
            b.fillColor = fd(c ? c : Ai)) : b.fillColor = null;
            d ? (c = d.b,
            b.strokeColor = fd(c ? c : Ci),
            b.lineWidth = d.c || 1,
            b.lineCap = d.g || "round",
            b.lineDashOffset = d.i || 0,
            b.lineJoin = d.j || "round",
            b.miterLimit = d.l || 10,
            d = d.f,
            b.lineDash = d ? d.slice() : Bi) : (b.strokeColor = null,
            b.lineWidth = 0);
            b.font = a.a || "10px sans-serif";
            b.scale = a.b || 1;
            this.ua = a.Ja();
            d = pk[a.g];
            c = pk[a.j];
            this.jb = void 0 === d ? .5 : d;
            this.oa = void 0 === c ? .5 : c;
            this.ta = a.f || 0;
            this.ga = a.c || 0;
            this.rotateWithView = !!a.l;
            this.rotation = a.i || 0;
            a = [];
            for (var e in b)
                if (b[e] || 0 === b[e])
                    Array.isArray(b[e]) ? a = a.concat(b[e]) : a.push(b[e]);
            c = "";
            e = 0;
            for (d = a.length; e < d; ++e)
                c += a[e];
            e = c;
            this.C[e] || (a = this.mc.getContext("2d"),
            a.font = b.font,
            a = Math.ceil((1.5 * a.measureText("M").width + b.lineWidth / 2) * b.scale),
            this.C[e] = {
                qh: new ik({
                    space: b.lineWidth + 1
                }),
                width: {},
                height: a
            });
            this.l = this.C[e]
        } else
            this.ua = ""
    }
    ;
    k.jg = function() {
        return this.va
    }
    ;
    k.dg = function() {
        return this.va
    }
    ;
    var pk = {
        left: 0,
        end: 0,
        center: .5,
        right: 1,
        start: 1,
        top: 0,
        br: .5,
        $q: .2,
        Yq: .8,
        ar: .8,
        bottom: 1
    };
    function qk(a, b, c) {
        this.g = b;
        this.j = a;
        this.i = c;
        this.f = {}
    }
    v(qk, mi);
    function rk(a, b) {
        var c = [], d;
        for (d in a.f) {
            var e = a.f[d], f;
            for (f in e)
                c.push(e[f].xb(b))
        }
        return function() {
            for (var a = c.length, b, d = 0; d < a; d++)
                b = c[d].apply(this, arguments);
            return b
        }
    }
    function sk(a, b) {
        for (var c in a.f) {
            var d = a.f[c], e;
            for (e in d)
                d[e].ab(b)
        }
    }
    qk.prototype.b = function(a, b) {
        var c = void 0 !== a ? a.toString() : "0";
        a = this.f[c];
        void 0 === a && (a = {},
        this.f[c] = a);
        c = a[b];
        void 0 === c && (c = new tk[b](this.j,this.g),
        a[b] = c);
        return c
    }
    ;
    qk.prototype.c = function() {
        return ub(this.f)
    }
    ;
    qk.prototype.Ma = function(a, b, c, d, e, f, g, h) {
        var l = Object.keys(this.f).map(Number);
        l.sort(fa);
        var m, n;
        var p = 0;
        for (m = l.length; p < m; ++p) {
            var q = this.f[l[p].toString()];
            var t = 0;
            for (n = li.length; t < n; ++t) {
                var u = q[li[t]];
                void 0 !== u && u.Ma(a, b, c, d, e, f, g, h, void 0, !1)
            }
        }
    }
    ;
    function uk(a, b, c, d, e, f, g, h, l, m, n) {
        var p = vk
          , q = Object.keys(a.f).map(Number);
        q.sort(function(a, b) {
            return b - a
        });
        var t, u;
        var x = 0;
        for (t = q.length; x < t; ++x) {
            var B = a.f[q[x].toString()];
            for (u = li.length - 1; 0 <= u; --u) {
                var z = B[li[u]];
                if (void 0 !== z && (z = z.Ma(b, c, d, e, p, f, g, h, l, m, n)))
                    return z
            }
        }
    }
    qk.prototype.Ha = function(a, b, c, d, e, f, g, h, l, m) {
        var n = b.b;
        n.bindFramebuffer(n.FRAMEBUFFER, Ri(b));
        var p;
        void 0 !== this.i && (p = Oa(Xa(a), d * this.i));
        return uk(this, b, a, d, e, g, h, l, function(a) {
            var b = new Uint8Array(4);
            n.readPixels(0, 0, 1, 1, n.RGBA, n.UNSIGNED_BYTE, b);
            if (0 < b[3] && (a = m(a)))
                return a
        }, !0, p)
    }
    ;
    function wk(a, b, c, d, e, f, g, h) {
        var l = c.b;
        l.bindFramebuffer(l.FRAMEBUFFER, Ri(c));
        return void 0 !== uk(a, c, b, d, e, f, g, h, function() {
            var a = new Uint8Array(4);
            l.readPixels(0, 0, 1, 1, l.RGBA, l.UNSIGNED_BYTE, a);
            return 0 < a[3]
        }, !1)
    }
    var vk = [1, 1]
      , tk = {
        Circle: Hi,
        Image: Zi,
        LineString: fj,
        Polygon: Pj,
        Text: mk
    };
    function xk(a, b, c, d, e, f, g) {
        this.b = a;
        this.f = b;
        this.c = f;
        this.i = g;
        this.l = e;
        this.j = d;
        this.g = c;
        this.a = this.o = this.v = this.u = null
    }
    v(xk, Yh);
    function yk(a, b, c, d, e) {
        var f = a.b;
        b = b.b(0, "Text");
        b.gb(a.a);
        b.Qb(c, 0, d, e, null, null);
        b.ab(f);
        b.Ma(a.b, a.f, a.g, a.j, a.l, a.i, 1, {}, void 0, !1);
        b.xb(f)()
    }
    k = xk.prototype;
    k.wd = function(a) {
        this.Na(a.Da(), a.Ea());
        this.Vb(a.Y());
        this.gb(a.Ja())
    }
    ;
    k.Cb = function(a) {
        switch (a.T()) {
        case "Point":
            this.sc(a, null);
            break;
        case "LineString":
            this.oc(a, null);
            break;
        case "Polygon":
            this.tc(a, null);
            break;
        case "MultiPoint":
            this.qc(a, null);
            break;
        case "MultiLineString":
            this.pc(a, null);
            break;
        case "MultiPolygon":
            this.rc(a, null);
            break;
        case "GeometryCollection":
            this.Ee(a, null);
            break;
        case "Circle":
            this.$b(a, null)
        }
    }
    ;
    k.De = function(a, b) {
        (a = (0,
        b.$a)(a)) && ob(this.c, a.G()) && (this.wd(b),
        this.Cb(a))
    }
    ;
    k.Ee = function(a) {
        a = a.a;
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c)
            this.Cb(a[c])
    }
    ;
    k.sc = function(a, b) {
        var c = this.b
          , d = new qk(1,this.c)
          , e = d.b(0, "Image");
        e.Vb(this.u);
        e.sc(a, b);
        e.ab(c);
        e.Ma(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.xb(c)();
        this.a && (b = a.ba(),
        yk(this, d, b, b.length, a.ma()))
    }
    ;
    k.qc = function(a, b) {
        var c = this.b
          , d = new qk(1,this.c)
          , e = d.b(0, "Image");
        e.Vb(this.u);
        e.qc(a, b);
        e.ab(c);
        e.Ma(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.xb(c)();
        this.a && (b = a.ba(),
        yk(this, d, b, b.length, a.ma()))
    }
    ;
    k.oc = function(a, b) {
        var c = this.b
          , d = new qk(1,this.c)
          , e = d.b(0, "LineString");
        e.Na(null, this.o);
        e.oc(a, b);
        e.ab(c);
        e.Ma(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.xb(c)();
        this.a && (a = fi(a),
        yk(this, d, a, 2, 2))
    }
    ;
    k.pc = function(a, b) {
        var c = this.b
          , d = new qk(1,this.c)
          , e = d.b(0, "LineString");
        e.Na(null, this.o);
        e.pc(a, b);
        e.ab(c);
        e.Ma(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.xb(c)();
        this.a && (a = gi(a),
        yk(this, d, a, a.length, 2))
    }
    ;
    k.tc = function(a, b) {
        var c = this.b
          , d = new qk(1,this.c)
          , e = d.b(0, "Polygon");
        e.Na(this.v, this.o);
        e.tc(a, b);
        e.ab(c);
        e.Ma(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.xb(c)();
        this.a && (a = Wf(a),
        yk(this, d, a, 2, 2))
    }
    ;
    k.rc = function(a, b) {
        var c = this.b
          , d = new qk(1,this.c)
          , e = d.b(0, "Polygon");
        e.Na(this.v, this.o);
        e.rc(a, b);
        e.ab(c);
        e.Ma(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.xb(c)();
        this.a && (a = ii(a),
        yk(this, d, a, a.length, 2))
    }
    ;
    k.$b = function(a, b) {
        var c = this.b
          , d = new qk(1,this.c)
          , e = d.b(0, "Circle");
        e.Na(this.v, this.o);
        e.$b(a, b);
        e.ab(c);
        e.Ma(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.xb(c)();
        this.a && yk(this, d, a.xa(), 2, 2)
    }
    ;
    k.Vb = function(a) {
        this.u = a
    }
    ;
    k.Na = function(a, b) {
        this.v = a;
        this.o = b
    }
    ;
    k.gb = function(a) {
        this.a = a
    }
    ;
    function zk() {
        this.c = 0;
        this.b = {};
        this.f = this.a = null
    }
    k = zk.prototype;
    k.clear = function() {
        this.c = 0;
        this.b = {};
        this.f = this.a = null
    }
    ;
    k.forEach = function(a, b) {
        for (var c = this.a; c; )
            a.call(b, c.bd, c.vc, this),
            c = c.Lb
    }
    ;
    k.get = function(a) {
        a = this.b[a];
        va(!!a, 15);
        if (a === this.f)
            return a.bd;
        a === this.a ? (this.a = this.a.Lb,
        this.a.Ad = null) : (a.Lb.Ad = a.Ad,
        a.Ad.Lb = a.Lb);
        a.Lb = null;
        a.Ad = this.f;
        this.f = this.f.Lb = a;
        return a.bd
    }
    ;
    k.pop = function() {
        var a = this.a;
        delete this.b[a.vc];
        a.Lb && (a.Lb.Ad = null);
        this.a = a.Lb;
        this.a || (this.f = null);
        --this.c;
        return a.bd
    }
    ;
    k.replace = function(a, b) {
        this.get(a);
        this.b[a].bd = b
    }
    ;
    k.set = function(a, b) {
        va(!(a in this.b), 16);
        b = {
            vc: a,
            Lb: null,
            Ad: this.f,
            bd: b
        };
        this.f ? this.f.Lb = b : this.a = b;
        this.f = b;
        this.b[a] = b;
        ++this.c
    }
    ;
    function Ak(a, b) {
        Oh.call(this, 0, b);
        this.b = document.createElement("CANVAS");
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.style.display = "block";
        this.b.className = "ol-unselectable";
        a.insertBefore(this.b, a.childNodes[0] || null);
        this.R = this.D = 0;
        this.B = gd();
        this.o = !0;
        this.f = Id(this.b, {
            antialias: !0,
            depth: !0,
            failIfMajorPerformanceCaveat: !0,
            preserveDrawingBuffer: !1,
            stencil: !0
        });
        this.i = new Qi(this.b,this.f);
        y(this.b, "webglcontextlost", this.no, this);
        y(this.b, "webglcontextrestored", this.oo, this);
        this.a = new zk;
        this.u = null;
        this.j = new Ie(function(a) {
            var b = a[1];
            a = a[2];
            var c = b[0] - this.u[0];
            b = b[1] - this.u[1];
            return 65536 * Math.log(a) + Math.sqrt(c * c + b * b) / a
        }
        .bind(this),function(a) {
            return a[0].fb()
        }
        );
        this.C = function() {
            if (this.j.b.length) {
                Me(this.j);
                var a = Je(this.j);
                Bk(this, a[0], a[3], a[4])
            }
            return !1
        }
        .bind(this);
        this.g = 0;
        Ck(this)
    }
    v(Ak, Oh);
    function Bk(a, b, c, d) {
        var e = a.f
          , f = b.fb();
        if (a.a.b.hasOwnProperty(f))
            a = a.a.get(f),
            e.bindTexture(3553, a.Hb),
            9729 != a.Yh && (e.texParameteri(3553, 10240, 9729),
            a.Yh = 9729),
            9729 != a.$h && (e.texParameteri(3553, 10241, 9729),
            a.$h = 9729);
        else {
            var g = e.createTexture();
            e.bindTexture(3553, g);
            if (0 < d) {
                var h = a.B.canvas
                  , l = a.B;
                a.D !== c[0] || a.R !== c[1] ? (h.width = c[0],
                h.height = c[1],
                a.D = c[0],
                a.R = c[1]) : l.clearRect(0, 0, c[0], c[1]);
                l.drawImage(b.Y(), d, d, c[0], c[1], 0, 0, c[0], c[1]);
                e.texImage2D(3553, 0, 6408, 6408, 5121, h)
            } else
                e.texImage2D(3553, 0, 6408, 6408, 5121, b.Y());
            e.texParameteri(3553, 10240, 9729);
            e.texParameteri(3553, 10241, 9729);
            e.texParameteri(3553, 10242, 33071);
            e.texParameteri(3553, 10243, 33071);
            a.a.set(f, {
                Hb: g,
                Yh: 9729,
                $h: 9729
            })
        }
    }
    function Dk(a, b, c) {
        var d = a.l;
        if (Oc(d, b)) {
            a = a.i;
            var e = c.viewState;
            d.b(new Th(b,new xk(a,e.center,e.resolution,e.rotation,c.size,c.extent,c.pixelRatio),c,null,a))
        }
    }
    k = Ak.prototype;
    k.ka = function() {
        var a = this.f;
        a.isContextLost() || this.a.forEach(function(b) {
            b && a.deleteTexture(b.Hb)
        });
        Kc(this.i);
        Oh.prototype.ka.call(this)
    }
    ;
    k.Ik = function(a, b) {
        a = this.f;
        for (var c; 1024 < this.a.c - this.g; ) {
            if (c = this.a.a.bd)
                a.deleteTexture(c.Hb);
            else if (+this.a.a.vc == b.index)
                break;
            else
                --this.g;
            this.a.pop()
        }
    }
    ;
    k.T = function() {
        return "webgl"
    }
    ;
    k.no = function(a) {
        a.preventDefault();
        this.a.clear();
        this.g = 0;
        a = this.c;
        for (var b in a)
            a[b].ug()
    }
    ;
    k.oo = function() {
        Ck(this);
        this.l.render()
    }
    ;
    function Ck(a) {
        a = a.f;
        a.activeTexture(33984);
        a.blendFuncSeparate(770, 771, 1, 771);
        a.disable(2884);
        a.disable(2929);
        a.disable(3089);
        a.disable(2960)
    }
    k.Rg = function(a) {
        var b = this.i
          , c = this.f;
        if (c.isContextLost())
            return !1;
        if (!a)
            return this.o && (this.b.style.display = "none",
            this.o = !1),
            !1;
        this.u = a.focus;
        this.a.set((-a.index).toString(), null);
        ++this.g;
        Dk(this, "precompose", a);
        var d = []
          , e = a.layerStatesArray;
        na(e);
        var f = a.viewState.resolution, g;
        var h = 0;
        for (g = e.length; h < g; ++h) {
            var l = e[h];
            if (xh(l, f) && "ready" == l.Ij) {
                var m = Rh(this, l.layer);
                m.vg(a, l, b) && d.push(l)
            }
        }
        e = a.size[0] * a.pixelRatio;
        f = a.size[1] * a.pixelRatio;
        if (this.b.width != e || this.b.height != f)
            this.b.width = e,
            this.b.height = f;
        c.bindFramebuffer(36160, null);
        c.clearColor(0, 0, 0, 0);
        c.clear(16384);
        c.enable(3042);
        c.viewport(0, 0, this.b.width, this.b.height);
        h = 0;
        for (g = d.length; h < g; ++h)
            l = d[h],
            m = Rh(this, l.layer),
            m.Qi(a, l, b);
        this.o || (this.b.style.display = "",
        this.o = !0);
        Ph(a);
        1024 < this.a.c - this.g && a.postRenderFunctions.push(this.Ik.bind(this));
        this.j.b.length && (a.postRenderFunctions.push(this.C),
        a.animate = !0);
        Dk(this, "postcompose", a);
        Sh(this, a);
        a.postRenderFunctions.push(Qh)
    }
    ;
    k.Ha = function(a, b, c, d, e, f, g) {
        if (this.f.isContextLost())
            return !1;
        var h = b.viewState, l = b.layerStatesArray, m;
        for (m = l.length - 1; 0 <= m; --m) {
            var n = l[m];
            var p = n.layer;
            if (xh(n, h.resolution) && f.call(g, p) && (n = Rh(this, p).Ha(a, b, c, d, e)))
                return n
        }
    }
    ;
    k.Oi = function(a, b, c, d, e) {
        c = !1;
        if (this.f.isContextLost())
            return !1;
        var f = b.viewState, g = b.layerStatesArray, h;
        for (h = g.length - 1; 0 <= h; --h) {
            var l = g[h]
              , m = l.layer;
            if (xh(l, f.resolution) && d.call(e, m) && (c = Rh(this, m).ef(a, b)))
                return !0
        }
        return c
    }
    ;
    k.Ni = function(a, b, c, d, e) {
        if (this.f.isContextLost())
            return !1;
        var f = b.viewState, g = b.layerStatesArray, h;
        for (h = g.length - 1; 0 <= h; --h) {
            var l = g[h];
            var m = l.layer;
            if (xh(l, f.resolution) && e.call(d, m) && (l = Rh(this, m).tg(a, b, c, d)))
                return l
        }
    }
    ;
    var Ek = ["canvas", "webgl"];
    function H(a) {
        Qc.call(this);
        var b = Fk(a);
        this.ed = void 0 !== a.loadTilesWhileAnimating ? a.loadTilesWhileAnimating : !1;
        this.Id = void 0 !== a.loadTilesWhileInteracting ? a.loadTilesWhileInteracting : !1;
        this.Hf = void 0 !== a.pixelRatio ? a.pixelRatio : Pd;
        this.Lf = b.logos;
        this.ga = function() {
            this.j = void 0;
            this.fq.call(this, Date.now())
        }
        .bind(this);
        this.Ib = Dh();
        this.Qf = Dh();
        this.Zb = 0;
        this.C = this.I = this.S = this.g = this.c = null;
        this.a = document.createElement("DIV");
        this.a.className = "ol-viewport" + (Ud ? " ol-touch" : "");
        this.a.style.position = "relative";
        this.a.style.overflow = "hidden";
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.style.msTouchAction = "none";
        this.a.style.touchAction = "none";
        this.B = document.createElement("DIV");
        this.B.className = "ol-overlaycontainer";
        this.a.appendChild(this.B);
        this.D = document.createElement("DIV");
        this.D.className = "ol-overlaycontainer-stopevent";
        for (var c = "click dblclick mousedown touchstart MSPointerDown pointerdown mousewheel wheel".split(" "), d = 0, e = c.length; d < e; ++d)
            y(this.D, c[d], Mc);
        this.a.appendChild(this.D);
        this.va = new Ee(this,a.moveTolerance);
        for (var f in ae)
            y(this.va, ae[f], this.Rh, this);
        this.oa = b.keyboardEventTarget;
        this.u = null;
        y(this.a, "wheel", this.qd, this);
        y(this.a, "mousewheel", this.qd, this);
        this.o = b.controls;
        this.l = b.interactions;
        this.v = b.overlays;
        this.zg = {};
        this.jc = new b.hq(this.a,this);
        this.U = null;
        this.Za = [];
        this.Sa = new Ne(this.Cl.bind(this),this.jm.bind(this));
        this.ta = {};
        y(this, Sc("layergroup"), this.Ql, this);
        y(this, Sc("view"), this.km, this);
        y(this, Sc("size"), this.em, this);
        y(this, Sc("target"), this.im, this);
        this.H(b.values);
        this.o.forEach(function(a) {
            a.setMap(this)
        }, this);
        y(this.o, "add", function(a) {
            a.element.setMap(this)
        }, this);
        y(this.o, "remove", function(a) {
            a.element.setMap(null)
        }, this);
        this.l.forEach(function(a) {
            a.setMap(this)
        }, this);
        y(this.l, "add", function(a) {
            a.element.setMap(this)
        }, this);
        y(this.l, "remove", function(a) {
            a.element.setMap(null)
        }, this);
        this.v.forEach(this.ph, this);
        y(this.v, "add", function(a) {
            this.ph(a.element)
        }, this);
        y(this.v, "remove", function(a) {
            var b = a.element.g;
            void 0 !== b && delete this.zg[b.toString()];
            a.element.setMap(null)
        }, this)
    }
    v(H, Qc);
    k = H.prototype;
    k.vk = function(a) {
        this.o.push(a)
    }
    ;
    k.wk = function(a) {
        this.l.push(a)
    }
    ;
    k.nh = function(a) {
        this.Mc().vd().push(a)
    }
    ;
    k.oh = function(a) {
        this.v.push(a)
    }
    ;
    k.ph = function(a) {
        var b = a.g;
        void 0 !== b && (this.zg[b.toString()] = a);
        a.setMap(this)
    }
    ;
    k.ka = function() {
        Kc(this.va);
        Kc(this.jc);
        Hc(this.a, "wheel", this.qd, this);
        Hc(this.a, "mousewheel", this.qd, this);
        this.i && (window.removeEventListener("resize", this.i, !1),
        this.i = void 0);
        this.j && (cancelAnimationFrame(this.j),
        this.j = void 0);
        this.We(null);
        Qc.prototype.ka.call(this)
    }
    ;
    k.Vd = function(a, b, c) {
        if (this.c)
            return a = this.Xa(a),
            c = c ? c : {},
            this.jc.Ha(a, this.c, void 0 !== c.hitTolerance ? c.hitTolerance * this.c.pixelRatio : 0, b, null, c.layerFilter ? c.layerFilter : jf, null)
    }
    ;
    k.Yk = function(a, b) {
        var c = null;
        this.Vd(a, function(a) {
            c || (c = []);
            c.push(a)
        }, b);
        return c
    }
    ;
    k.Wm = function(a, b, c, d, e) {
        if (this.c)
            return this.jc.Ni(a, this.c, b, void 0 !== c ? c : null, d ? d : jf, void 0 !== e ? e : null)
    }
    ;
    k.lm = function(a, b) {
        if (!this.c)
            return !1;
        a = this.Xa(a);
        b = b ? b : {};
        return this.jc.Oi(a, this.c, void 0 !== b.hitTolerance ? b.hitTolerance * this.c.pixelRatio : 0, b.layerFilter ? b.layerFilter : jf, null)
    }
    ;
    k.$f = function(a) {
        return this.Xa(this.Ge(a))
    }
    ;
    k.Ge = function(a) {
        var b = this.a.getBoundingClientRect();
        a = a.changedTouches ? a.changedTouches[0] : a;
        return [a.clientX - b.left, a.clientY - b.top]
    }
    ;
    k.ig = function() {
        return this.get("target")
    }
    ;
    k.od = function() {
        var a = this.ig();
        return void 0 !== a ? "string" === typeof a ? document.getElementById(a) : a : null
    }
    ;
    k.Xa = function(a) {
        var b = this.c;
        return b ? Ih(b.pixelToCoordinateTransform, a.slice()) : null
    }
    ;
    k.Wk = function() {
        return this.o
    }
    ;
    k.rl = function() {
        return this.v
    }
    ;
    k.ql = function(a) {
        a = this.zg[a.toString()];
        return void 0 !== a ? a : null
    }
    ;
    k.dl = function() {
        return this.l
    }
    ;
    k.Mc = function() {
        return this.get("layergroup")
    }
    ;
    k.fi = function() {
        return this.Mc().vd()
    }
    ;
    k.Ka = function(a) {
        var b = this.c;
        return b ? Ih(b.coordinateToPixelTransform, a.slice(0, 2)) : null
    }
    ;
    k.Je = function() {
        return this.jc
    }
    ;
    k.Mb = function() {
        return this.get("size")
    }
    ;
    k.$ = function() {
        return this.get("view")
    }
    ;
    k.El = function() {
        return this.a
    }
    ;
    k.Cl = function(a, b, c, d) {
        var e = this.c;
        if (!(e && b in e.wantedTiles && e.wantedTiles[b][a.fb()]))
            return Infinity;
        a = c[0] - e.focus[0];
        c = c[1] - e.focus[1];
        return 65536 * Math.log(d) + Math.sqrt(a * a + c * c) / d
    }
    ;
    k.qd = function(a, b) {
        a = new Gd(b || a.type,this,a);
        this.Rh(a)
    }
    ;
    k.Rh = function(a) {
        if (this.c) {
            this.U = a.coordinate;
            a.frameState = this.c;
            var b = this.l.a, c;
            if (!1 !== this.b(a))
                for (c = b.length - 1; 0 <= c; c--) {
                    var d = b[c];
                    if (d.c() && !d.handleEvent(a))
                        break
                }
        }
    }
    ;
    k.cm = function() {
        var a = this.c
          , b = this.Sa;
        if (b.b.length) {
            var c = 16
              , d = c;
            if (a) {
                var e = a.viewHints;
                e[0] && (c = this.ed ? 8 : 0,
                d = 2);
                e[1] && (c = this.Id ? 8 : 0,
                d = 2)
            }
            b.j < c && (Me(b),
            Oe(b, c, d))
        }
        b = this.Za;
        c = 0;
        for (d = b.length; c < d; ++c)
            b[c](this, a);
        b.length = 0
    }
    ;
    k.em = function() {
        this.render()
    }
    ;
    k.im = function() {
        var a;
        this.ig() && (a = this.od());
        if (this.u) {
            for (var b = 0, c = this.u.length; b < c; ++b)
                zc(this.u[b]);
            this.u = null
        }
        a ? (a.appendChild(this.a),
        a = this.oa ? this.oa : a,
        this.u = [y(a, "keydown", this.qd, this), y(a, "keypress", this.qd, this)],
        this.i || (this.i = this.Ed.bind(this),
        window.addEventListener("resize", this.i, !1))) : (id(this.a),
        this.i && (window.removeEventListener("resize", this.i, !1),
        this.i = void 0));
        this.Ed()
    }
    ;
    k.jm = function() {
        this.render()
    }
    ;
    k.Uh = function() {
        this.render()
    }
    ;
    k.km = function() {
        this.S && (zc(this.S),
        this.S = null);
        this.I && (zc(this.I),
        this.I = null);
        var a = this.$();
        a && (this.a.setAttribute("data-view", w(a)),
        this.S = y(a, "propertychange", this.Uh, this),
        this.I = y(a, "change", this.Uh, this));
        this.render()
    }
    ;
    k.Ql = function() {
        this.C && (this.C.forEach(zc),
        this.C = null);
        var a = this.Mc();
        a && (this.C = [y(a, "propertychange", this.render, this), y(a, "change", this.render, this)]);
        this.render()
    }
    ;
    k.gq = function() {
        this.j && cancelAnimationFrame(this.j);
        this.ga()
    }
    ;
    k.render = function() {
        void 0 === this.j && (this.j = requestAnimationFrame(this.ga))
    }
    ;
    k.Zp = function(a) {
        return this.o.remove(a)
    }
    ;
    k.$p = function(a) {
        return this.l.remove(a)
    }
    ;
    k.bq = function(a) {
        return this.Mc().vd().remove(a)
    }
    ;
    k.cq = function(a) {
        return this.v.remove(a)
    }
    ;
    k.fq = function(a) {
        var b, c = this.Mb(), d = this.$(), e = Ma(), f = this.c, g = null;
        if (void 0 !== c && 0 < c[0] && 0 < c[1] && d && jg(d)) {
            g = dg(d, this.c ? this.c.viewHints : void 0);
            var h = this.Mc().fg()
              , l = {};
            var m = 0;
            for (b = h.length; m < b; ++m)
                l[w(h[m].layer)] = h[m];
            m = d.getState();
            g = {
                animate: !1,
                attributions: {},
                coordinateToPixelTransform: this.Ib,
                extent: e,
                focus: this.U ? this.U : m.center,
                index: this.Zb++,
                layerStates: l,
                layerStatesArray: h,
                logos: rb({}, this.Lf),
                pixelRatio: this.Hf,
                pixelToCoordinateTransform: this.Qf,
                postRenderFunctions: [],
                size: c,
                skippedFeatureUids: this.ta,
                tileQueue: this.Sa,
                time: a,
                usedTiles: {},
                viewState: m,
                viewHints: g,
                wantedTiles: {}
            }
        }
        g && (g.extent = mb(m.center, m.resolution, m.rotation, g.size, e));
        this.c = g;
        this.jc.Rg(g);
        g && (g.animate && this.render(),
        Array.prototype.push.apply(this.Za, g.postRenderFunctions),
        !f || this.g && (ib(this.g) || ab(g.extent, this.g)) || (this.b(new Fd("movestart",this,f)),
        this.g = Wa(this.g)),
        !this.g || g.viewHints[0] || g.viewHints[1] || ab(g.extent, this.g) || (this.b(new Fd("moveend",this,g)),
        Pa(g.extent, this.g)));
        this.b(new Fd("postrender",this,g));
        setTimeout(this.cm.bind(this), 0)
    }
    ;
    k.Aj = function(a) {
        this.set("layergroup", a)
    }
    ;
    k.Yg = function(a) {
        this.set("size", a)
    }
    ;
    k.We = function(a) {
        this.set("target", a)
    }
    ;
    k.wq = function(a) {
        this.set("view", a)
    }
    ;
    k.Hj = function(a) {
        a = w(a).toString();
        this.ta[a] = !0;
        this.render()
    }
    ;
    k.Ed = function() {
        var a = this.od();
        if (a) {
            var b = getComputedStyle(a);
            this.Yg([a.offsetWidth - parseFloat(b.borderLeftWidth) - parseFloat(b.paddingLeft) - parseFloat(b.paddingRight) - parseFloat(b.borderRightWidth), a.offsetHeight - parseFloat(b.borderTopWidth) - parseFloat(b.paddingTop) - parseFloat(b.paddingBottom) - parseFloat(b.borderBottomWidth)])
        } else
            this.Yg(void 0)
    }
    ;
    k.Mj = function(a) {
        a = w(a).toString();
        delete this.ta[a];
        this.render()
    }
    ;
    function Fk(a) {
        var b = null;
        void 0 !== a.keyboardEventTarget && (b = "string" === typeof a.keyboardEventTarget ? document.getElementById(a.keyboardEventTarget) : a.keyboardEventTarget);
        var c = {}
          , d = {};
        if (void 0 === a.logo || "boolean" === typeof a.logo && a.logo)
            d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] = "https://openlayers.org/";
        else {
            var e = a.logo;
            "string" === typeof e ? d[e] = "" : e instanceof HTMLElement ? d[w(e).toString()] = e : e && (va("string" == typeof e.href, 44),
            va("string" == typeof e.src, 45),
            d[e.src] = e.href)
        }
        e = a.layers instanceof uh ? a.layers : new uh({
            layers: a.layers
        });
        c.layergroup = e;
        c.target = a.target;
        c.view = void 0 !== a.view ? a.view : new F;
        e = Oh;
        var f;
        void 0 !== a.renderer ? (Array.isArray(a.renderer) ? f = a.renderer : "string" === typeof a.renderer ? f = [a.renderer] : va(!1, 46),
        0 <= f.indexOf("dom") && (f = f.concat(Ek))) : f = Ek;
        var g;
        var h = 0;
        for (g = f.length; h < g; ++h) {
            var l = f[h];
            if ("canvas" == l) {
                if (Rd) {
                    e = ji;
                    break
                }
            } else if ("webgl" == l && Jd) {
                e = Ak;
                break
            }
        }
        void 0 !== a.controls ? Array.isArray(a.controls) ? f = new Vc(a.controls.slice()) : (va(a.controls instanceof Vc, 47),
        f = a.controls) : f = ud();
        void 0 !== a.interactions ? Array.isArray(a.interactions) ? h = new Vc(a.interactions.slice()) : (va(a.interactions instanceof Vc, 48),
        h = a.interactions) : h = rh();
        void 0 !== a.overlays ? Array.isArray(a.overlays) ? a = new Vc(a.overlays.slice()) : (va(a.overlays instanceof Vc, 49),
        a = a.overlays) : a = new Vc;
        return {
            controls: f,
            interactions: h,
            keyboardEventTarget: b,
            logos: d,
            overlays: a,
            hq: e,
            values: c
        }
    }
    ;function Gk(a) {
        Qc.call(this);
        this.g = a.id;
        this.o = void 0 !== a.insertFirst ? a.insertFirst : !0;
        this.v = void 0 !== a.stopEvent ? a.stopEvent : !0;
        this.c = document.createElement("DIV");
        this.c.className = "ol-overlay-container ol-selectable";
        this.c.style.position = "absolute";
        this.autoPan = void 0 !== a.autoPan ? a.autoPan : !1;
        this.j = a.autoPanAnimation || {};
        this.l = void 0 !== a.autoPanMargin ? a.autoPanMargin : 20;
        this.a = {
            Be: "",
            Te: "",
            yf: "",
            Ef: "",
            visible: !0
        };
        this.i = null;
        y(this, Sc(Hk), this.Ll, this);
        y(this, Sc(Ik), this.Vl, this);
        y(this, Sc(Jk), this.Zl, this);
        y(this, Sc(Kk), this.am, this);
        y(this, Sc(Lk), this.bm, this);
        void 0 !== a.element && this.vj(a.element);
        this.Bj(void 0 !== a.offset ? a.offset : [0, 0]);
        this.Ej(void 0 !== a.positioning ? a.positioning : "top-left");
        void 0 !== a.position && this.Ye(a.position)
    }
    v(Gk, Qc);
    k = Gk.prototype;
    k.Xd = function() {
        return this.get(Hk)
    }
    ;
    k.Xm = function() {
        return this.g
    }
    ;
    k.Xe = function() {
        return this.get(Ik)
    }
    ;
    k.Lh = function() {
        return this.get(Jk)
    }
    ;
    k.gi = function() {
        return this.get(Kk)
    }
    ;
    k.Mh = function() {
        return this.get(Lk)
    }
    ;
    k.Ll = function() {
        for (var a = this.c; a.lastChild; )
            a.removeChild(a.lastChild);
        (a = this.Xd()) && this.c.appendChild(a)
    }
    ;
    k.Vl = function() {
        this.i && (id(this.c),
        zc(this.i),
        this.i = null);
        var a = this.Xe();
        a && (this.i = y(a, "postrender", this.render, this),
        Mk(this),
        a = this.v ? a.D : a.B,
        this.o ? a.insertBefore(this.c, a.childNodes[0] || null) : a.appendChild(this.c))
    }
    ;
    k.render = function() {
        Mk(this)
    }
    ;
    k.Zl = function() {
        Mk(this)
    }
    ;
    k.am = function() {
        Mk(this);
        if (this.get(Kk) && this.autoPan) {
            var a = this.Xe();
            if (a && a.od()) {
                var b = Nk(a.od(), a.Mb())
                  , c = this.Xd()
                  , d = c.offsetWidth
                  , e = getComputedStyle(c);
                d += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10);
                e = c.offsetHeight;
                var f = getComputedStyle(c);
                e += parseInt(f.marginTop, 10) + parseInt(f.marginBottom, 10);
                var g = Nk(c, [d, e]);
                c = this.l;
                Ta(b, g) || (d = g[0] - b[0],
                e = b[2] - g[2],
                f = g[1] - b[1],
                g = b[3] - g[3],
                b = [0, 0],
                0 > d ? b[0] = d - c : 0 > e && (b[0] = Math.abs(e) + c),
                0 > f ? b[1] = f - c : 0 > g && (b[1] = Math.abs(g) + c),
                0 === b[0] && 0 === b[1]) || (c = a.$().xa(),
                c = a.Ka(c),
                b = [c[0] + b[0], c[1] + b[1]],
                a.$().animate({
                    center: a.Xa(b),
                    duration: this.j.duration,
                    easing: this.j.easing
                }))
            }
        }
    }
    ;
    k.bm = function() {
        Mk(this)
    }
    ;
    k.vj = function(a) {
        this.set(Hk, a)
    }
    ;
    k.setMap = function(a) {
        this.set(Ik, a)
    }
    ;
    k.Bj = function(a) {
        this.set(Jk, a)
    }
    ;
    k.Ye = function(a) {
        this.set(Kk, a)
    }
    ;
    function Nk(a, b) {
        var c = a.getBoundingClientRect();
        a = c.left + window.pageXOffset;
        c = c.top + window.pageYOffset;
        return [a, c, a + b[0], c + b[1]]
    }
    k.Ej = function(a) {
        this.set(Lk, a)
    }
    ;
    function Ok(a, b) {
        a.a.visible !== b && (a.c.style.display = b ? "" : "none",
        a.a.visible = b)
    }
    function Mk(a) {
        var b = a.Xe()
          , c = a.gi();
        if (b && b.c && c) {
            c = b.Ka(c);
            var d = b.Mb();
            b = a.c.style;
            var e = a.Lh()
              , f = a.Mh();
            Ok(a, !0);
            var g = e[0];
            e = e[1];
            if ("bottom-right" == f || "center-right" == f || "top-right" == f)
                "" !== a.a.Te && (a.a.Te = b.left = ""),
                g = d[0] - c[0] - g + "px",
                a.a.yf != g && (a.a.yf = b.right = g);
            else {
                "" !== a.a.yf && (a.a.yf = b.right = "");
                if ("bottom-center" == f || "center-center" == f || "top-center" == f)
                    g -= a.c.offsetWidth / 2;
                g = c[0] + g + "px";
                a.a.Te != g && (a.a.Te = b.left = g)
            }
            if ("bottom-left" == f || "bottom-center" == f || "bottom-right" == f)
                "" !== a.a.Ef && (a.a.Ef = b.top = ""),
                c = d[1] - c[1] - e + "px",
                a.a.Be != c && (a.a.Be = b.bottom = c);
            else {
                "" !== a.a.Be && (a.a.Be = b.bottom = "");
                if ("center-left" == f || "center-center" == f || "center-right" == f)
                    e -= a.c.offsetHeight / 2;
                c = c[1] + e + "px";
                a.a.Ef != c && (a.a.Ef = b.top = c)
            }
        } else
            Ok(a, !1)
    }
    var Hk = "element"
      , Ik = "map"
      , Jk = "offset"
      , Kk = "position"
      , Lk = "positioning";
    function Pk(a) {
        function b(a) {
            a = h.$f(a);
            l.a.$().qb(a);
            window.removeEventListener("mousemove", c);
            window.removeEventListener("mouseup", b)
        }
        function c(a) {
            a = h.$f({
                clientX: a.clientX - n.offsetWidth / 2,
                clientY: a.clientY + n.offsetHeight / 2
            });
            m.Ye(a)
        }
        a = a ? a : {};
        this.j = void 0 !== a.collapsed ? a.collapsed : !0;
        this.l = void 0 !== a.collapsible ? a.collapsible : !0;
        this.l || (this.j = !1);
        var d = void 0 !== a.className ? a.className : "ol-overviewmap"
          , e = void 0 !== a.tipLabel ? a.tipLabel : "Overview map"
          , f = void 0 !== a.collapseLabel ? a.collapseLabel : "\u00ab";
        "string" === typeof f ? (this.u = document.createElement("span"),
        this.u.textContent = f) : this.u = f;
        f = void 0 !== a.label ? a.label : "\u00bb";
        "string" === typeof f ? (this.D = document.createElement("span"),
        this.D.textContent = f) : this.D = f;
        var g = this.l && !this.j ? this.u : this.D;
        f = document.createElement("button");
        f.setAttribute("type", "button");
        f.title = e;
        f.appendChild(g);
        y(f, "click", this.qn, this);
        this.B = document.createElement("DIV");
        this.B.className = "ol-overviewmap-map";
        var h = this.c = new H({
            controls: new Vc,
            interactions: new Vc,
            view: a.view
        });
        a.layers && a.layers.forEach(function(a) {
            h.nh(a)
        }, this);
        e = document.createElement("DIV");
        e.className = "ol-overviewmap-box";
        e.style.boxSizing = "border-box";
        this.o = new Gk({
            position: [0, 0],
            positioning: "bottom-left",
            element: e
        });
        this.c.oh(this.o);
        e = document.createElement("div");
        e.className = d + " ol-unselectable ol-control" + (this.j && this.l ? " ol-collapsed" : "") + (this.l ? "" : " ol-uncollapsible");
        e.appendChild(this.B);
        e.appendChild(f);
        jd.call(this, {
            element: e,
            render: a.render ? a.render : Qk,
            target: a.target
        });
        var l = this
          , m = this.o
          , n = this.o.Xd();
        n.addEventListener("mousedown", function() {
            window.addEventListener("mousemove", c);
            window.addEventListener("mouseup", b)
        })
    }
    v(Pk, jd);
    k = Pk.prototype;
    k.setMap = function(a) {
        var b = this.a;
        a !== b && (b && ((b = b.$()) && Hc(b, Sc("rotation"), this.Re, this),
        this.c.We(null)),
        jd.prototype.setMap.call(this, a),
        a && (this.c.We(this.B),
        this.v.push(y(a, "propertychange", this.Wl, this)),
        this.c.fi().ec() || this.c.Aj(a.Mc()),
        a = a.$())) && (y(a, Sc("rotation"), this.Re, this),
        jg(a) && (this.c.Ed(),
        Rk(this)))
    }
    ;
    k.Wl = function(a) {
        "view" === a.key && ((a = a.oldValue) && Hc(a, Sc("rotation"), this.Re, this),
        a = this.a.$(),
        y(a, Sc("rotation"), this.Re, this))
    }
    ;
    k.Re = function() {
        this.c.$().Ze(this.a.$().Qa())
    }
    ;
    function Qk() {
        var a = this.a
          , b = this.c;
        if (a.c && b.c) {
            var c = a.Mb();
            a = a.$().gd(c);
            var d = b.Mb();
            c = b.$().gd(d);
            var e = b.Ka(gb(a))
              , f = b.Ka(eb(a));
            b = Math.abs(e[0] - f[0]);
            e = Math.abs(e[1] - f[1]);
            f = d[0];
            d = d[1];
            b < .1 * f || e < .1 * d || b > .75 * f || e > .75 * d ? Rk(this) : Ta(c, a) || (a = this.c,
            c = this.a.$(),
            a.$().qb(c.xa()))
        }
        Sk(this)
    }
    function Rk(a) {
        var b = a.a;
        a = a.c;
        var c = b.Mb();
        b = b.$().gd(c);
        a = a.$();
        pb(b, 1 / (.1 * Math.pow(2, Math.log(7.5) / Math.LN2 / 2)));
        a.Xf(b)
    }
    function Sk(a) {
        var b = a.a
          , c = a.c;
        if (b.c && c.c) {
            var d = b.Mb()
              , e = b.$()
              , f = c.$();
            c = e.Qa();
            b = a.o;
            var g = a.o.Xd()
              , h = e.gd(d);
            d = f.Pa();
            e = db(h);
            f = fb(h);
            if (a = a.a.$().xa()) {
                var l = [e[0] - a[0], e[1] - a[1]];
                cf(l, c);
                Xe(l, a)
            }
            b.Ye(l);
            g && (g.style.width = Math.abs((e[0] - f[0]) / d) + "px",
            g.style.height = Math.abs((f[1] - e[1]) / d) + "px")
        }
    }
    k.qn = function(a) {
        a.preventDefault();
        Tk(this)
    }
    ;
    function Tk(a) {
        a.element.classList.toggle("ol-collapsed");
        a.j ? hd(a.u, a.D) : hd(a.D, a.u);
        a.j = !a.j;
        var b = a.c;
        a.j || b.c || (b.Ed(),
        Rk(a),
        Gc(b, "postrender", function() {
            Sk(this)
        }, a))
    }
    k.pn = function() {
        return this.l
    }
    ;
    k.sn = function(a) {
        this.l !== a && (this.l = a,
        this.element.classList.toggle("ol-uncollapsible"),
        !a && this.j && Tk(this))
    }
    ;
    k.rn = function(a) {
        this.l && this.j !== a && Tk(this)
    }
    ;
    k.nn = function() {
        return this.j
    }
    ;
    k.sl = function() {
        return this.c
    }
    ;
    function Uk(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-scale-line";
        this.l = document.createElement("DIV");
        this.l.className = b + "-inner";
        this.c = document.createElement("DIV");
        this.c.className = b + " ol-unselectable";
        this.c.appendChild(this.l);
        this.u = null;
        this.o = void 0 !== a.minWidth ? a.minWidth : 64;
        this.j = !1;
        this.C = void 0;
        this.D = "";
        jd.call(this, {
            element: this.c,
            render: a.render ? a.render : Vk,
            target: a.target
        });
        y(this, Sc(Wk), this.U, this);
        this.I(a.units || "metric")
    }
    v(Uk, jd);
    var Xk = [1, 2, 5];
    Uk.prototype.B = function() {
        return this.get(Wk)
    }
    ;
    function Vk(a) {
        (a = a.frameState) ? this.u = a.viewState : this.u = null;
        Yk(this)
    }
    Uk.prototype.U = function() {
        Yk(this)
    }
    ;
    Uk.prototype.I = function(a) {
        this.set(Wk, a)
    }
    ;
    function Yk(a) {
        var b = a.u;
        if (b) {
            var c = b.center
              , d = b.projection
              , e = a.B();
            b = Pb(d, b.resolution, c, "degrees" == e ? "degrees" : "m");
            var f = a.o * b;
            c = "";
            "degrees" == e ? (c = wb.degrees,
            "degrees" == d.b ? f *= c : b /= c,
            f < c / 60 ? (c = "\u2033",
            b *= 3600) : f < c ? (c = "\u2032",
            b *= 60) : c = "\u00b0") : "imperial" == e ? .9144 > f ? (c = "in",
            b /= .0254) : 1609.344 > f ? (c = "ft",
            b /= .3048) : (c = "mi",
            b /= 1609.344) : "nautical" == e ? (b /= 1852,
            c = "nm") : "metric" == e ? .001 > f ? (c = "\u03bcm",
            b *= 1E6) : 1 > f ? (c = "mm",
            b *= 1E3) : 1E3 > f ? c = "m" : (c = "km",
            b /= 1E3) : "us" == e ? .9144 > f ? (c = "in",
            b *= 39.37) : 1609.344 > f ? (c = "ft",
            b /= .30480061) : (c = "mi",
            b /= 1609.3472) : va(!1, 33);
            for (e = 3 * Math.floor(Math.log(a.o * b) / Math.log(10)); ; ) {
                f = Xk[(e % 3 + 3) % 3] * Math.pow(10, Math.floor(e / 3));
                d = Math.round(f / b);
                if (isNaN(d)) {
                    a.c.style.display = "none";
                    a.j = !1;
                    return
                }
                if (d >= a.o)
                    break;
                ++e
            }
            b = f + " " + c;
            a.D != b && (a.l.innerHTML = b,
            a.D = b);
            a.C != d && (a.l.style.width = d + "px",
            a.C = d);
            a.j || (a.c.style.display = "",
            a.j = !0)
        } else
            a.j && (a.c.style.display = "none",
            a.j = !1)
    }
    var Wk = "units";
    function Zk(a) {
        a = a ? a : {};
        this.c = void 0;
        this.j = $k;
        this.D = this.o = 0;
        this.I = null;
        this.ta = !1;
        this.U = void 0 !== a.duration ? a.duration : 200;
        var b = void 0 !== a.className ? a.className : "ol-zoomslider"
          , c = document.createElement("button");
        c.setAttribute("type", "button");
        c.className = b + "-thumb ol-unselectable";
        var d = document.createElement("div");
        d.className = b + " ol-unselectable ol-control";
        d.appendChild(c);
        this.l = new ze(d);
        y(this.l, "pointerdown", this.Kl, this);
        y(this.l, "pointermove", this.Il, this);
        y(this.l, "pointerup", this.Jl, this);
        y(d, "click", this.Hl, this);
        y(c, "click", Mc);
        jd.call(this, {
            element: d,
            render: a.render ? a.render : al
        })
    }
    v(Zk, jd);
    Zk.prototype.ka = function() {
        Kc(this.l);
        jd.prototype.ka.call(this)
    }
    ;
    var $k = 0;
    k = Zk.prototype;
    k.setMap = function(a) {
        jd.prototype.setMap.call(this, a);
        a && a.render()
    }
    ;
    function al(a) {
        if (a.frameState) {
            if (!this.ta) {
                var b = this.element
                  , c = b.offsetWidth
                  , d = b.offsetHeight
                  , e = b.firstElementChild
                  , f = getComputedStyle(e);
                b = e.offsetWidth + parseFloat(f.marginRight) + parseFloat(f.marginLeft);
                e = e.offsetHeight + parseFloat(f.marginTop) + parseFloat(f.marginBottom);
                this.I = [b, e];
                c > d ? (this.j = 1,
                this.D = c - b) : (this.j = $k,
                this.o = d - e);
                this.ta = !0
            }
            a = a.frameState.viewState.resolution;
            a !== this.c && (this.c = a,
            bl(this, a))
        }
    }
    k.Hl = function(a) {
        var b = this.a.$();
        a = cl(this, Aa(1 === this.j ? (a.offsetX - this.I[0] / 2) / this.D : (a.offsetY - this.I[1] / 2) / this.o, 0, 1));
        b.animate({
            resolution: b.constrainResolution(a),
            duration: this.U,
            easing: od
        })
    }
    ;
    k.Kl = function(a) {
        this.u || a.b.target !== this.element.firstElementChild || (cg(this.a.$(), 1, 1),
        this.B = a.clientX,
        this.C = a.clientY,
        this.u = !0)
    }
    ;
    k.Il = function(a) {
        if (this.u) {
            var b = this.element.firstElementChild;
            this.c = cl(this, Aa(1 === this.j ? (a.clientX - this.B + parseInt(b.style.left, 10)) / this.D : (a.clientY - this.C + parseInt(b.style.top, 10)) / this.o, 0, 1));
            this.a.$().Yc(this.c);
            bl(this, this.c);
            this.B = a.clientX;
            this.C = a.clientY
        }
    }
    ;
    k.Jl = function() {
        if (this.u) {
            var a = this.a.$();
            cg(a, 1, -1);
            a.animate({
                resolution: a.constrainResolution(this.c),
                duration: this.U,
                easing: od
            });
            this.u = !1;
            this.C = this.B = void 0
        }
    }
    ;
    function bl(a, b) {
        b = 1 - ig(a.a.$())(b);
        var c = a.element.firstElementChild;
        1 == a.j ? c.style.left = a.D * b + "px" : c.style.top = a.o * b + "px"
    }
    function cl(a, b) {
        return hg(a.a.$())(1 - b)
    }
    ;function dl(a) {
        a = a ? a : {};
        this.c = a.extent ? a.extent : null;
        var b = void 0 !== a.className ? a.className : "ol-zoom-extent"
          , c = void 0 !== a.label ? a.label : "E"
          , d = void 0 !== a.tipLabel ? a.tipLabel : "Fit to extent"
          , e = document.createElement("button");
        e.setAttribute("type", "button");
        e.title = d;
        e.appendChild("string" === typeof c ? document.createTextNode(c) : c);
        y(e, "click", this.j, this);
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control";
        c.appendChild(e);
        jd.call(this, {
            element: c,
            target: a.target
        })
    }
    v(dl, jd);
    dl.prototype.j = function(a) {
        a.preventDefault();
        a = this.a.$();
        var b = this.c ? this.c : a.v.G();
        a.Xf(b)
    }
    ;
    function el(a) {
        Qc.call(this);
        a = a ? a : {};
        this.a = null;
        y(this, Sc(fl), this.Jm, this);
        this.og(void 0 !== a.tracking ? a.tracking : !1)
    }
    v(el, Qc);
    k = el.prototype;
    k.ka = function() {
        this.og(!1);
        Qc.prototype.ka.call(this)
    }
    ;
    k.op = function(a) {
        if (null !== a.alpha) {
            var b = Fa(a.alpha);
            this.set(gl, b);
            "boolean" === typeof a.absolute && a.absolute ? this.set(hl, b) : "number" === typeof a.webkitCompassHeading && -1 != a.webkitCompassAccuracy && this.set(hl, Fa(a.webkitCompassHeading))
        }
        null !== a.beta && this.set(il, Fa(a.beta));
        null !== a.gamma && this.set(jl, Fa(a.gamma));
        this.s()
    }
    ;
    k.Qk = function() {
        return this.get(gl)
    }
    ;
    k.Tk = function() {
        return this.get(il)
    }
    ;
    k.$k = function() {
        return this.get(jl)
    }
    ;
    k.Im = function() {
        return this.get(hl)
    }
    ;
    k.bi = function() {
        return this.get(fl)
    }
    ;
    k.Jm = function() {
        if (Sd) {
            var a = this.bi();
            a && !this.a ? this.a = y(window, "deviceorientation", this.op, this) : a || null === this.a || (zc(this.a),
            this.a = null)
        }
    }
    ;
    k.og = function(a) {
        this.set(fl, a)
    }
    ;
    var gl = "alpha"
      , il = "beta"
      , jl = "gamma"
      , hl = "heading"
      , fl = "tracking";
    function kl(a) {
        this.i = a.opacity;
        this.o = a.rotateWithView;
        this.g = a.rotation;
        this.a = a.scale;
        this.v = a.snapToPixel
    }
    k = kl.prototype;
    k.jf = function() {
        return this.i
    }
    ;
    k.kf = function() {
        return this.o
    }
    ;
    k.lf = function() {
        return this.g
    }
    ;
    k.mf = function() {
        return this.a
    }
    ;
    k.Le = function() {
        return this.v
    }
    ;
    k.yd = function(a) {
        this.i = a
    }
    ;
    k.nf = function(a) {
        this.g = a
    }
    ;
    k.zd = function(a) {
        this.a = a
    }
    ;
    function ll(a) {
        this.D = this.u = this.c = null;
        this.Wa = void 0 !== a.fill ? a.fill : null;
        this.pa = [0, 0];
        this.l = a.points;
        this.b = void 0 !== a.radius ? a.radius : a.radius1;
        this.f = a.radius2;
        this.j = void 0 !== a.angle ? a.angle : 0;
        this.Ua = void 0 !== a.stroke ? a.stroke : null;
        this.C = this.qa = this.B = null;
        this.R = a.atlasManager;
        ml(this, this.R);
        kl.call(this, {
            opacity: 1,
            rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0
        })
    }
    v(ll, kl);
    k = ll.prototype;
    k.clone = function() {
        var a = new ll({
            fill: this.Da() ? this.Da().clone() : void 0,
            points: this.l,
            radius: this.b,
            radius2: this.f,
            angle: this.j,
            snapToPixel: this.v,
            stroke: this.Ea() ? this.Ea().clone() : void 0,
            rotation: this.g,
            rotateWithView: this.o,
            atlasManager: this.R
        });
        a.yd(this.i);
        a.zd(this.a);
        return a
    }
    ;
    k.Jc = function() {
        return this.B
    }
    ;
    k.Zi = function() {
        return this.j
    }
    ;
    k.Da = function() {
        return this.Wa
    }
    ;
    k.yg = function() {
        return this.D
    }
    ;
    k.Y = function() {
        return this.u
    }
    ;
    k.Ie = function() {
        return this.C
    }
    ;
    k.hf = function() {
        return 2
    }
    ;
    k.Rc = function() {
        return this.pa
    }
    ;
    k.$i = function() {
        return this.l
    }
    ;
    k.aj = function() {
        return this.b
    }
    ;
    k.Nh = function() {
        return this.f
    }
    ;
    k.ic = function() {
        return this.qa
    }
    ;
    k.Ea = function() {
        return this.Ua
    }
    ;
    k.Wh = function() {}
    ;
    k.load = function() {}
    ;
    k.Lj = function() {}
    ;
    function ml(a, b) {
        var c = ""
          , d = ""
          , e = 0
          , f = null
          , g = 0
          , h = 0;
        if (a.Ua) {
            var l = a.Ua.b;
            null === l && (l = Wh);
            l = fd(l);
            h = a.Ua.c;
            void 0 === h && (h = 1);
            f = a.Ua.f;
            g = a.Ua.i;
            Qd || (f = null,
            g = 0);
            d = a.Ua.j;
            void 0 === d && (d = "round");
            c = a.Ua.g;
            void 0 === c && (c = "round");
            e = a.Ua.l;
            void 0 === e && (e = 10)
        }
        var m = 2 * (a.b + h) + 1;
        c = {
            strokeStyle: l,
            Jj: h,
            size: m,
            lineCap: c,
            lineDash: f,
            lineDashOffset: g,
            lineJoin: d,
            miterLimit: e
        };
        if (void 0 === b) {
            var n = gd(m, m);
            a.u = n.canvas;
            b = m = a.u.width;
            a.yh(c, n, 0, 0);
            a.Wa ? a.D = a.u : (n = gd(c.size, c.size),
            a.D = n.canvas,
            a.xh(c, n, 0, 0))
        } else
            m = Math.round(m),
            (d = !a.Wa) && (n = a.xh.bind(a, c)),
            a.Ua ? (e = a.Ua,
            void 0 === e.a && (e.a = "s",
            e.a = e.b ? "string" === typeof e.b ? e.a + e.b : e.a + w(e.b).toString() : e.a + "-",
            e.a += "," + (void 0 !== e.g ? e.g.toString() : "-") + "," + (e.f ? e.f.toString() : "-") + "," + (void 0 !== e.i ? e.i : "-") + "," + (void 0 !== e.j ? e.j : "-") + "," + (void 0 !== e.l ? e.l.toString() : "-") + "," + (void 0 !== e.c ? e.c.toString() : "-")),
            e = e.a) : e = "-",
            a.Wa ? (f = a.Wa,
            void 0 === f.a && (f.a = f.b instanceof CanvasPattern || f.b instanceof CanvasGradient ? w(f.b).toString() : "f" + (f.b ? dd(f.b) : "-")),
            f = f.a) : f = "-",
            a.c && e == a.c[1] && f == a.c[2] && a.b == a.c[3] && a.f == a.c[4] && a.j == a.c[5] && a.l == a.c[6] || (a.c = ["r" + e + f + (void 0 !== a.b ? a.b.toString() : "-") + (void 0 !== a.f ? a.f.toString() : "-") + (void 0 !== a.j ? a.j.toString() : "-") + (void 0 !== a.l ? a.l.toString() : "-"), e, f, a.b, a.f, a.j, a.l]),
            n = b.add(a.c[0], m, m, a.yh.bind(a, c), n),
            a.u = n.image,
            a.pa = [n.offsetX, n.offsetY],
            b = n.image.width,
            a.D = d ? n.mm : a.u;
        a.B = [m / 2, m / 2];
        a.qa = [m, m];
        a.C = [b, b]
    }
    k.yh = function(a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        var e = this.l;
        if (Infinity === e)
            b.arc(a.size / 2, a.size / 2, this.b, 0, 2 * Math.PI, !0);
        else {
            var f = void 0 !== this.f ? this.f : this.b;
            f !== this.b && (e *= 2);
            for (c = 0; c <= e; c++) {
                d = 2 * c * Math.PI / e - Math.PI / 2 + this.j;
                var g = c % 2 ? f : this.b;
                b.lineTo(a.size / 2 + g * Math.cos(d), a.size / 2 + g * Math.sin(d))
            }
        }
        this.Wa && (c = this.Wa.b,
        null === c && (c = Uh),
        b.fillStyle = fd(c),
        b.fill());
        this.Ua && (b.strokeStyle = a.strokeStyle,
        b.lineWidth = a.Jj,
        a.lineDash && (b.setLineDash(a.lineDash),
        b.lineDashOffset = a.lineDashOffset),
        b.lineCap = a.lineCap,
        b.lineJoin = a.lineJoin,
        b.miterLimit = a.miterLimit,
        b.stroke());
        b.closePath()
    }
    ;
    k.xh = function(a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        c = this.l;
        if (Infinity === c)
            b.arc(a.size / 2, a.size / 2, this.b, 0, 2 * Math.PI, !0);
        else {
            d = void 0 !== this.f ? this.f : this.b;
            d !== this.b && (c *= 2);
            var e;
            for (e = 0; e <= c; e++) {
                var f = 2 * e * Math.PI / c - Math.PI / 2 + this.j;
                var g = e % 2 ? d : this.b;
                b.lineTo(a.size / 2 + g * Math.cos(f), a.size / 2 + g * Math.sin(f))
            }
        }
        b.fillStyle = Uh;
        b.fill();
        this.Ua && (b.strokeStyle = a.strokeStyle,
        b.lineWidth = a.Jj,
        a.lineDash && (b.setLineDash(a.lineDash),
        b.lineDashOffset = a.lineDashOffset),
        b.stroke());
        b.closePath()
    }
    ;
    function nl(a) {
        a = a || {};
        ll.call(this, {
            points: Infinity,
            fill: a.fill,
            radius: a.radius,
            snapToPixel: a.snapToPixel,
            stroke: a.stroke,
            atlasManager: a.atlasManager
        })
    }
    v(nl, ll);
    nl.prototype.clone = function() {
        var a = new nl({
            fill: this.Da() ? this.Da().clone() : void 0,
            stroke: this.Ea() ? this.Ea().clone() : void 0,
            radius: this.b,
            snapToPixel: this.v,
            atlasManager: this.R
        });
        a.yd(this.i);
        a.zd(this.a);
        return a
    }
    ;
    nl.prototype.Xc = function(a) {
        this.b = a;
        ml(this, this.R)
    }
    ;
    function pl(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.a = void 0
    }
    pl.prototype.clone = function() {
        var a = this.b;
        return new pl({
            color: a && a.slice ? a.slice() : a || void 0
        })
    }
    ;
    pl.prototype.f = function() {
        return this.b
    }
    ;
    pl.prototype.c = function(a) {
        this.b = a;
        this.a = void 0
    }
    ;
    function ql(a) {
        a = a || {};
        this.Ic = null;
        this.$a = rl;
        void 0 !== a.geometry && this.Ra(a.geometry);
        this.Wa = void 0 !== a.fill ? a.fill : null;
        this.M = void 0 !== a.image ? a.image : null;
        this.jc = a.renderer ? a.renderer : null;
        this.Ua = void 0 !== a.stroke ? a.stroke : null;
        this.ua = void 0 !== a.text ? a.text : null;
        this.Pj = a.zIndex
    }
    k = ql.prototype;
    k.clone = function() {
        var a = this.V();
        a && a.clone && (a = a.clone());
        return new ql({
            geometry: a,
            fill: this.Da() ? this.Da().clone() : void 0,
            image: this.Y() ? this.Y().clone() : void 0,
            stroke: this.Ea() ? this.Ea().clone() : void 0,
            text: this.Ja() ? this.Ja().clone() : void 0,
            zIndex: this.za()
        })
    }
    ;
    k.Je = function() {
        return this.jc
    }
    ;
    k.uq = function(a) {
        this.jc = a
    }
    ;
    k.V = function() {
        return this.Ic
    }
    ;
    k.al = function() {
        return this.$a
    }
    ;
    k.Da = function() {
        return this.Wa
    }
    ;
    k.zf = function(a) {
        this.Wa = a
    }
    ;
    k.Y = function() {
        return this.M
    }
    ;
    k.Wg = function(a) {
        this.M = a
    }
    ;
    k.Ea = function() {
        return this.Ua
    }
    ;
    k.Af = function(a) {
        this.Ua = a
    }
    ;
    k.Ja = function() {
        return this.ua
    }
    ;
    k.Cd = function(a) {
        this.ua = a
    }
    ;
    k.za = function() {
        return this.Pj
    }
    ;
    k.Ra = function(a) {
        "function" === typeof a ? this.$a = a : "string" === typeof a ? this.$a = function(b) {
            return b.get(a)
        }
        : a ? a && (this.$a = function() {
            return a
        }
        ) : this.$a = rl;
        this.Ic = a
    }
    ;
    k.Wb = function(a) {
        this.Pj = a
    }
    ;
    function sl(a) {
        if ("function" !== typeof a) {
            if (Array.isArray(a))
                var b = a;
            else
                va(a instanceof ql, 41),
                b = [a];
            a = function() {
                return b
            }
        }
        return a
    }
    var tl = null;
    function ul() {
        if (!tl) {
            var a = new pl({
                color: "rgba(255,255,255,0.4)"
            })
              , b = new zj({
                color: "#3399CC",
                width: 1.25
            });
            tl = [new ql({
                image: new nl({
                    fill: a,
                    stroke: b,
                    radius: 5
                }),
                fill: a,
                stroke: b
            })]
        }
        return tl
    }
    function vl() {
        var a = {}
          , b = [255, 255, 255, 1]
          , c = [0, 153, 255, 1];
        a.Polygon = [new ql({
            fill: new pl({
                color: [255, 255, 255, .5]
            })
        })];
        a.MultiPolygon = a.Polygon;
        a.LineString = [new ql({
            stroke: new zj({
                color: b,
                width: 5
            })
        }), new ql({
            stroke: new zj({
                color: c,
                width: 3
            })
        })];
        a.MultiLineString = a.LineString;
        a.Circle = a.Polygon.concat(a.LineString);
        a.Point = [new ql({
            image: new nl({
                radius: 6,
                fill: new pl({
                    color: c
                }),
                stroke: new zj({
                    color: b,
                    width: 1.5
                })
            }),
            zIndex: Infinity
        })];
        a.MultiPoint = a.Point;
        a.GeometryCollection = a.Polygon.concat(a.LineString, a.Point);
        return a
    }
    function rl(a) {
        return a.V()
    }
    ;function wl(a) {
        Qc.call(this);
        this.a = void 0;
        this.c = "geometry";
        this.g = null;
        this.j = void 0;
        this.i = null;
        y(this, Sc(this.c), this.Pe, this);
        void 0 !== a && (a instanceof lf || !a ? this.Ra(a) : this.H(a))
    }
    v(wl, Qc);
    k = wl.prototype;
    k.clone = function() {
        var a = new wl(this.N());
        a.Wc(this.c);
        var b = this.V();
        b && a.Ra(b.clone());
        (b = this.g) && a.pg(b);
        return a
    }
    ;
    k.V = function() {
        return this.get(this.c)
    }
    ;
    k.Km = function() {
        return this.a
    }
    ;
    k.bl = function() {
        return this.c
    }
    ;
    k.Lm = function() {
        return this.g
    }
    ;
    k.bb = function() {
        return this.j
    }
    ;
    k.Ml = function() {
        this.s()
    }
    ;
    k.Pe = function() {
        this.i && (zc(this.i),
        this.i = null);
        var a = this.V();
        a && (this.i = y(a, "change", this.Ml, this));
        this.s()
    }
    ;
    k.Ra = function(a) {
        this.set(this.c, a)
    }
    ;
    k.pg = function(a) {
        this.j = (this.g = a) ? xl(a) : void 0;
        this.s()
    }
    ;
    k.kc = function(a) {
        this.a = a;
        this.s()
    }
    ;
    k.Wc = function(a) {
        Hc(this, Sc(this.c), this.Pe, this);
        this.c = a;
        y(this, Sc(this.c), this.Pe, this);
        this.Pe()
    }
    ;
    function xl(a) {
        var b;
        if ("function" === typeof a)
            2 == a.length ? b = function(b) {
                return a(this, b)
            }
            : b = a;
        else {
            if (Array.isArray(a))
                var c = a;
            else
                va(a instanceof ql, 41),
                c = [a];
            b = function() {
                return c
            }
        }
        return b
    }
    ;var yl = document.implementation.createDocument("", "", null);
    function zl(a, b) {
        return yl.createElementNS(a, b)
    }
    function Al(a, b) {
        return Bl(a, b, []).join("")
    }
    function Bl(a, b, c) {
        if (a.nodeType == Node.CDATA_SECTION_NODE || a.nodeType == Node.TEXT_NODE)
            b ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue);
        else
            for (a = a.firstChild; a; a = a.nextSibling)
                Bl(a, b, c);
        return c
    }
    function Cl(a) {
        return a instanceof Document
    }
    function Dl(a) {
        return a instanceof Node
    }
    function El(a) {
        return (new DOMParser).parseFromString(a, "application/xml")
    }
    function Fl(a, b) {
        return function(c, d) {
            c = a.call(b, c, d);
            void 0 !== c && ka(d[d.length - 1], c)
        }
    }
    function Gl(a, b) {
        return function(c, d) {
            c = a.call(void 0 !== b ? b : this, c, d);
            void 0 !== c && d[d.length - 1].push(c)
        }
    }
    function Hl(a, b) {
        return function(c, d) {
            c = a.call(void 0 !== b ? b : this, c, d);
            void 0 !== c && (d[d.length - 1] = c)
        }
    }
    function Il(a) {
        return function(b, c) {
            var d = a.call(this, b, c);
            if (void 0 !== d) {
                c = c[c.length - 1];
                b = b.localName;
                var e;
                b in c ? e = c[b] : e = c[b] = [];
                e.push(d)
            }
        }
    }
    function I(a, b) {
        return function(c, d) {
            var e = a.call(this, c, d);
            void 0 !== e && (d[d.length - 1][void 0 !== b ? b : c.localName] = e)
        }
    }
    function J(a, b) {
        return function(c, d, e) {
            a.call(void 0 !== b ? b : this, c, d, e);
            e[e.length - 1].node.appendChild(c)
        }
    }
    function Jl(a) {
        var b, c;
        return function(d, e, f) {
            if (!b) {
                b = {};
                var g = {};
                g[d.localName] = a;
                b[d.namespaceURI] = g;
                c = Ll(d.localName)
            }
            Ml(b, c, e, f)
        }
    }
    function Ll(a, b) {
        return function(c, d, e) {
            c = d[d.length - 1].node;
            d = a;
            void 0 === d && (d = e);
            e = b;
            void 0 === b && (e = c.namespaceURI);
            return zl(e, d)
        }
    }
    var Nl = Ll();
    function Ol(a, b) {
        for (var c = b.length, d = Array(c), e = 0; e < c; ++e)
            d[e] = a[b[e]];
        return d
    }
    function K(a, b, c) {
        c = void 0 !== c ? c : {};
        var d;
        var e = 0;
        for (d = a.length; e < d; ++e)
            c[a[e]] = b;
        return c
    }
    function Pl(a, b, c, d) {
        for (b = b.firstElementChild; b; b = b.nextElementSibling) {
            var e = a[b.namespaceURI];
            void 0 !== e && (e = e[b.localName]) && e.call(d, b, c)
        }
    }
    function L(a, b, c, d, e) {
        d.push(a);
        Pl(b, c, d, e);
        return d.pop()
    }
    function Ml(a, b, c, d, e, f) {
        for (var g = (void 0 !== e ? e : c).length, h, l, m = 0; m < g; ++m)
            h = c[m],
            void 0 !== h && (l = b.call(f, h, d, void 0 !== e ? e[m] : void 0),
            void 0 !== l && a[l.namespaceURI][l.localName].call(f, l, h, d))
    }
    function Ql(a, b, c, d, e, f, g) {
        e.push(a);
        Ml(b, c, d, e, f, g);
        e.pop()
    }
    ;function Rl(a, b, c, d) {
        return function(e, f, g) {
            var h = new XMLHttpRequest;
            h.open("GET", "function" === typeof a ? a(e, f, g) : a, !0);
            "arraybuffer" == b.T() && (h.responseType = "arraybuffer");
            h.onload = function() {
                if (!h.status || 200 <= h.status && 300 > h.status) {
                    var a = b.T();
                    if ("json" == a || "text" == a)
                        var e = h.responseText;
                    else
                        "xml" == a ? (e = h.responseXML) || (e = El(h.responseText)) : "arraybuffer" == a && (e = h.response);
                    e ? c.call(this, b.Oa(e, {
                        featureProjection: g
                    }), b.nb(e), b.eg()) : d.call(this)
                } else
                    d.call(this)
            }
            .bind(this);
            h.onerror = function() {
                d.call(this)
            }
            .bind(this);
            h.send()
        }
    }
    function Sl(a, b) {
        return Rl(a, b, function(a) {
            this.Ec(a)
        }, ra)
    }
    ;function Tl() {
        this.i = this.defaultDataProjection = null
    }
    function Ul(a, b, c) {
        var d;
        c && (d = {
            dataProjection: c.dataProjection ? c.dataProjection : a.nb(b),
            featureProjection: c.featureProjection
        });
        return Vl(a, d)
    }
    function Vl(a, b) {
        return rb({
            dataProjection: a.defaultDataProjection,
            featureProjection: a.i
        }, b)
    }
    Tl.prototype.eg = function() {
        return null
    }
    ;
    function Wl(a, b, c) {
        var d = c ? Qb(c.featureProjection) : null, e = c ? Qb(c.dataProjection) : null, f;
        d && e && !$b(d, e) ? a instanceof lf ? f = (b ? a.clone() : a).wb(b ? d : e, b ? e : d) : f = dc(a, e, d) : f = a;
        if (b && c && void 0 !== c.decimals) {
            var g = Math.pow(10, c.decimals);
            f === a && (f = f.clone());
            f.Fc(function(a) {
                for (var b = 0, c = a.length; b < c; ++b)
                    a[b] = Math.round(a[b] * g) / g;
                return a
            })
        }
        return f
    }
    ;function Xl() {
        Tl.call(this)
    }
    v(Xl, Tl);
    function Yl(a) {
        return "string" === typeof a ? (a = JSON.parse(a)) ? a : null : null !== a ? a : null
    }
    k = Xl.prototype;
    k.T = function() {
        return "json"
    }
    ;
    k.Ub = function(a, b) {
        return this.Uc(Yl(a), Ul(this, a, b))
    }
    ;
    k.Oa = function(a, b) {
        return this.Gg(Yl(a), Ul(this, a, b))
    }
    ;
    k.Vc = function(a, b) {
        return this.Kg(Yl(a), Ul(this, a, b))
    }
    ;
    k.nb = function(a) {
        return this.Ng(Yl(a))
    }
    ;
    k.Fd = function(a, b) {
        return JSON.stringify(this.cd(a, b))
    }
    ;
    k.Xb = function(a, b) {
        return JSON.stringify(this.re(a, b))
    }
    ;
    k.dd = function(a, b) {
        return JSON.stringify(this.te(a, b))
    }
    ;
    function Zl(a, b, c, d, e, f) {
        var g = NaN
          , h = NaN
          , l = (c - b) / d;
        if (1 === l)
            g = a[b],
            h = a[b + 1];
        else if (2 == l)
            g = (1 - e) * a[b] + e * a[b + d],
            h = (1 - e) * a[b + 1] + e * a[b + d + 1];
        else if (l) {
            h = a[b];
            l = a[b + 1];
            var m = 0;
            g = [0];
            var n;
            for (n = b + d; n < c; n += d) {
                var p = a[n]
                  , q = a[n + 1];
                m += Math.sqrt((p - h) * (p - h) + (q - l) * (q - l));
                g.push(m);
                h = p;
                l = q
            }
            c = e * m;
            l = 0;
            m = g.length;
            for (n = !1; l < m; )
                e = l + (m - l >> 1),
                h = +fa(g[e], c),
                0 > h ? l = e + 1 : (m = e,
                n = !h);
            e = n ? l : ~l;
            0 > e ? (c = (c - g[-e - 2]) / (g[-e - 1] - g[-e - 2]),
            b += (-e - 2) * d,
            g = Ha(a[b], a[b + d], c),
            h = Ha(a[b + 1], a[b + d + 1], c)) : (g = a[b + e * d],
            h = a[b + e * d + 1])
        }
        return f ? (f[0] = g,
        f[1] = h,
        f) : [g, h]
    }
    function $l(a, b, c, d, e, f) {
        if (c == b)
            return null;
        if (e < a[b + d - 1])
            return f ? (c = a.slice(b, b + d),
            c[d - 1] = e,
            c) : null;
        if (a[c - 1] < e)
            return f ? (c = a.slice(c - d, c),
            c[d - 1] = e,
            c) : null;
        if (e == a[b + d - 1])
            return a.slice(b, b + d);
        b /= d;
        for (c /= d; b < c; )
            f = b + c >> 1,
            e < a[(f + 1) * d - 1] ? c = f : b = f + 1;
        c = a[b * d - 1];
        if (e == c)
            return a.slice((b - 1) * d, (b - 1) * d + d);
        f = (e - c) / (a[(b + 1) * d - 1] - c);
        c = [];
        var g;
        for (g = 0; g < d - 1; ++g)
            c.push(Ha(a[(b - 1) * d + g], a[b * d + g], f));
        c.push(e);
        return c
    }
    function am(a, b, c, d, e, f) {
        var g = 0;
        if (f)
            return $l(a, g, b[b.length - 1], c, d, e);
        if (d < a[c - 1])
            return e ? (a = a.slice(0, c),
            a[c - 1] = d,
            a) : null;
        if (a[a.length - 1] < d)
            return e ? (a = a.slice(a.length - c),
            a[c - 1] = d,
            a) : null;
        e = 0;
        for (f = b.length; e < f; ++e) {
            var h = b[e];
            if (g != h) {
                if (d < a[g + c - 1])
                    break;
                else if (d <= a[h - 1])
                    return $l(a, g, h, c, d, !1);
                g = h
            }
        }
        return null
    }
    ;function M(a, b) {
        pf.call(this);
        this.c = null;
        this.u = this.D = this.j = -1;
        this.na(a, b)
    }
    v(M, pf);
    k = M.prototype;
    k.xk = function(a) {
        this.A ? ka(this.A, a) : this.A = a.slice();
        this.s()
    }
    ;
    k.clone = function() {
        var a = new M(null);
        a.aa(this.ja, this.A.slice());
        return a
    }
    ;
    k.Jb = function(a, b, c, d) {
        if (d < Qa(this.G(), a, b))
            return d;
        this.u != this.f && (this.D = Math.sqrt(wf(this.A, 0, this.A.length, this.a, 0)),
        this.u = this.f);
        return yf(this.A, 0, this.A.length, this.a, this.D, !1, a, b, c, d)
    }
    ;
    k.Nk = function(a, b) {
        return Pf(this.A, 0, this.A.length, this.a, a, b)
    }
    ;
    k.Dn = function(a, b) {
        return "XYM" != this.ja && "XYZM" != this.ja ? null : $l(this.A, 0, this.A.length, this.a, a, void 0 !== b ? b : !1)
    }
    ;
    k.X = function() {
        return Df(this.A, 0, this.A.length, this.a)
    }
    ;
    k.Eh = function(a, b) {
        return Zl(this.A, 0, this.A.length, this.a, a, b)
    }
    ;
    k.En = function() {
        var a = this.A, b = this.a, c = a[0], d = a[1], e = 0, f;
        for (f = 0 + b; f < this.A.length; f += b) {
            var g = a[f]
              , h = a[f + 1];
            e += Math.sqrt((g - c) * (g - c) + (h - d) * (h - d));
            c = g;
            d = h
        }
        return e
    }
    ;
    function fi(a) {
        a.j != a.f && (a.c = a.Eh(.5, a.c),
        a.j = a.f);
        return a.c
    }
    k.md = function(a) {
        var b = [];
        b.length = Gf(this.A, 0, this.A.length, this.a, a, b, 0);
        a = new M(null);
        a.aa("XY", b);
        return a
    }
    ;
    k.T = function() {
        return "LineString"
    }
    ;
    k.Ya = function(a) {
        return Qf(this.A, 0, this.A.length, this.a, a)
    }
    ;
    k.na = function(a, b) {
        a ? (sf(this, b, a, 1),
        this.A || (this.A = []),
        this.A.length = Bf(this.A, 0, a, this.a),
        this.s()) : this.aa("XY", null)
    }
    ;
    k.aa = function(a, b) {
        rf(this, a, b);
        this.s()
    }
    ;
    function N(a, b) {
        pf.call(this);
        this.c = [];
        this.j = this.u = -1;
        this.na(a, b)
    }
    v(N, pf);
    k = N.prototype;
    k.yk = function(a) {
        this.A ? ka(this.A, a.ba().slice()) : this.A = a.ba().slice();
        this.c.push(this.A.length);
        this.s()
    }
    ;
    k.clone = function() {
        var a = new N(null);
        a.aa(this.ja, this.A.slice(), this.c.slice());
        return a
    }
    ;
    k.Jb = function(a, b, c, d) {
        if (d < Qa(this.G(), a, b))
            return d;
        this.j != this.f && (this.u = Math.sqrt(xf(this.A, 0, this.c, this.a, 0)),
        this.j = this.f);
        return zf(this.A, 0, this.c, this.a, this.u, !1, a, b, c, d)
    }
    ;
    k.Gn = function(a, b, c) {
        return "XYM" != this.ja && "XYZM" != this.ja || !this.A.length ? null : am(this.A, this.c, this.a, a, void 0 !== b ? b : !1, void 0 !== c ? c : !1)
    }
    ;
    k.X = function() {
        return Ef(this.A, 0, this.c, this.a)
    }
    ;
    k.rb = function() {
        return this.c
    }
    ;
    k.jl = function(a) {
        if (0 > a || this.c.length <= a)
            return null;
        var b = new M(null);
        b.aa(this.ja, this.A.slice(a ? this.c[a - 1] : 0, this.c[a]));
        return b
    }
    ;
    k.kd = function() {
        var a = this.A, b = this.c, c = this.ja, d = [], e = 0, f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g]
              , l = new M(null);
            l.aa(c, a.slice(e, h));
            d.push(l);
            e = h
        }
        return d
    }
    ;
    function gi(a) {
        var b = []
          , c = a.A
          , d = 0
          , e = a.c;
        a = a.a;
        var f;
        var g = 0;
        for (f = e.length; g < f; ++g) {
            var h = e[g];
            d = Zl(c, d, h, a, .5);
            ka(b, d);
            d = h
        }
        return b
    }
    k.md = function(a) {
        var b = [], c = [], d = this.A, e = this.c, f = this.a, g = 0, h = 0, l;
        var m = 0;
        for (l = e.length; m < l; ++m) {
            var n = e[m];
            h = Gf(d, g, n, f, a, b, h);
            c.push(h);
            g = n
        }
        b.length = h;
        a = new N(null);
        a.aa("XY", b, c);
        return a
    }
    ;
    k.T = function() {
        return "MultiLineString"
    }
    ;
    k.Ya = function(a) {
        a: {
            var b = this.A, c = this.c, d = this.a, e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g) {
                if (Qf(b, e, c[g], d, a)) {
                    a = !0;
                    break a
                }
                e = c[g]
            }
            a = !1
        }
        return a
    }
    ;
    k.na = function(a, b) {
        a ? (sf(this, b, a, 2),
        this.A || (this.A = []),
        a = Cf(this.A, 0, a, this.a, this.c),
        this.A.length = a.length ? a[a.length - 1] : 0,
        this.s()) : this.aa("XY", null, this.c)
    }
    ;
    k.aa = function(a, b, c) {
        rf(this, a, b);
        this.c = c;
        this.s()
    }
    ;
    function bm(a, b) {
        var c = a.ja, d = [], e = [], f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g];
            g || (c = h.ja);
            ka(d, h.ba());
            e.push(d.length)
        }
        a.aa(c, d, e)
    }
    ;function O(a, b) {
        pf.call(this);
        this.na(a, b)
    }
    v(O, pf);
    k = O.prototype;
    k.Ak = function(a) {
        this.A ? ka(this.A, a.ba()) : this.A = a.ba().slice();
        this.s()
    }
    ;
    k.clone = function() {
        var a = new O(null);
        a.aa(this.ja, this.A.slice());
        return a
    }
    ;
    k.Jb = function(a, b, c, d) {
        if (d < Qa(this.G(), a, b))
            return d;
        var e = this.A, f = this.a, g;
        var h = 0;
        for (g = e.length; h < g; h += f) {
            var l = Ea(a, b, e[h], e[h + 1]);
            if (l < d) {
                d = l;
                for (l = 0; l < f; ++l)
                    c[l] = e[h + l];
                c.length = f
            }
        }
        return d
    }
    ;
    k.X = function() {
        return Df(this.A, 0, this.A.length, this.a)
    }
    ;
    k.ul = function(a) {
        var b = this.A ? this.A.length / this.a : 0;
        if (0 > a || b <= a)
            return null;
        b = new C(null);
        b.aa(this.ja, this.A.slice(a * this.a, (a + 1) * this.a));
        return b
    }
    ;
    k.de = function() {
        var a = this.A, b = this.ja, c = this.a, d = [], e;
        var f = 0;
        for (e = a.length; f < e; f += c) {
            var g = new C(null);
            g.aa(b, a.slice(f, f + c));
            d.push(g)
        }
        return d
    }
    ;
    k.T = function() {
        return "MultiPoint"
    }
    ;
    k.Ya = function(a) {
        var b = this.A, c = this.a, d;
        var e = 0;
        for (d = b.length; e < d; e += c) {
            var f = b[e];
            var g = b[e + 1];
            if (Sa(a, f, g))
                return !0
        }
        return !1
    }
    ;
    k.na = function(a, b) {
        a ? (sf(this, b, a, 1),
        this.A || (this.A = []),
        this.A.length = Bf(this.A, 0, a, this.a),
        this.s()) : this.aa("XY", null)
    }
    ;
    k.aa = function(a, b) {
        rf(this, a, b);
        this.s()
    }
    ;
    function P(a, b) {
        pf.call(this);
        this.c = [];
        this.u = -1;
        this.D = null;
        this.I = this.B = this.C = -1;
        this.j = null;
        this.na(a, b)
    }
    v(P, pf);
    k = P.prototype;
    k.Bk = function(a) {
        if (this.A) {
            var b = this.A.length;
            ka(this.A, a.ba());
            a = a.rb().slice();
            var c;
            var d = 0;
            for (c = a.length; d < c; ++d)
                a[d] += b
        } else
            this.A = a.ba().slice(),
            a = a.rb().slice(),
            this.c.push();
        this.c.push(a);
        this.s()
    }
    ;
    k.clone = function() {
        for (var a = new P(null), b = this.c.length, c = Array(b), d = 0; d < b; ++d)
            c[d] = this.c[d].slice();
        cm(a, this.ja, this.A.slice(), c);
        return a
    }
    ;
    k.Jb = function(a, b, c, d) {
        if (d < Qa(this.G(), a, b))
            return d;
        if (this.B != this.f) {
            var e = this.c, f = 0, g = 0, h;
            var l = 0;
            for (h = e.length; l < h; ++l) {
                var m = e[l];
                g = xf(this.A, f, m, this.a, g);
                f = m[m.length - 1]
            }
            this.C = Math.sqrt(g);
            this.B = this.f
        }
        e = hi(this);
        f = this.c;
        g = this.a;
        l = this.C;
        h = 0;
        m = [NaN, NaN];
        var n;
        var p = 0;
        for (n = f.length; p < n; ++p) {
            var q = f[p];
            d = zf(e, h, q, g, l, !0, a, b, c, d, m);
            h = q[q.length - 1]
        }
        return d
    }
    ;
    k.Pc = function(a, b) {
        a: {
            var c = hi(this)
              , d = this.c
              , e = 0;
            if (d.length) {
                var f;
                var g = 0;
                for (f = d.length; g < f; ++g) {
                    var h = d[g];
                    if (Mf(c, e, h, this.a, a, b)) {
                        a = !0;
                        break a
                    }
                    e = h[h.length - 1]
                }
            }
            a = !1
        }
        return a
    }
    ;
    k.Hn = function() {
        var a = hi(this), b = this.c, c = 0, d = 0, e;
        var f = 0;
        for (e = b.length; f < e; ++f) {
            var g = b[f];
            d += uf(a, c, g, this.a);
            c = g[g.length - 1]
        }
        return d
    }
    ;
    k.X = function(a) {
        if (void 0 !== a) {
            var b = hi(this).slice();
            Vf(b, this.c, this.a, a)
        } else
            b = this.A;
        return Ff(b, 0, this.c, this.a)
    }
    ;
    function ii(a) {
        if (a.u != a.f) {
            var b = a.A, c = a.c, d = a.a, e = 0, f = [], g;
            var h = 0;
            for (g = c.length; h < g; ++h) {
                var l = c[h];
                e = Za(b, e, l[0], d);
                f.push((e[0] + e[2]) / 2, (e[1] + e[3]) / 2);
                e = l[l.length - 1]
            }
            b = hi(a);
            c = a.c;
            d = a.a;
            h = 0;
            g = [];
            l = 0;
            for (e = c.length; l < e; ++l) {
                var m = c[l];
                g = Of(b, h, m, d, f, 2 * l, g);
                h = m[m.length - 1]
            }
            a.D = g;
            a.u = a.f
        }
        return a.D
    }
    k.fl = function() {
        var a = new O(null);
        a.aa("XY", ii(this).slice());
        return a
    }
    ;
    function hi(a) {
        if (a.I != a.f) {
            var b = a.A;
            a: {
                var c = a.c;
                var d;
                var e = 0;
                for (d = c.length; e < d; ++e)
                    if (!Tf(b, c[e], a.a, void 0)) {
                        c = !1;
                        break a
                    }
                c = !0
            }
            c ? a.j = b : (a.j = b.slice(),
            a.j.length = Vf(a.j, a.c, a.a));
            a.I = a.f
        }
        return a.j
    }
    k.md = function(a) {
        var b = []
          , c = []
          , d = this.A
          , e = this.c
          , f = this.a;
        a = Math.sqrt(a);
        var g = 0, h = 0, l;
        var m = 0;
        for (l = e.length; m < l; ++m) {
            var n = e[m]
              , p = [];
            h = Hf(d, g, n, f, a, b, h, p);
            c.push(p);
            g = n[n.length - 1]
        }
        b.length = h;
        d = new P(null);
        cm(d, "XY", b, c);
        return d
    }
    ;
    k.vl = function(a) {
        if (0 > a || this.c.length <= a)
            return null;
        if (a) {
            var b = this.c[a - 1];
            b = b[b.length - 1]
        } else
            b = 0;
        a = this.c[a].slice();
        var c = a[a.length - 1];
        if (b) {
            var d;
            var e = 0;
            for (d = a.length; e < d; ++e)
                a[e] -= b
        }
        e = new D(null);
        e.aa(this.ja, this.A.slice(b, c), a);
        return e
    }
    ;
    k.Zd = function() {
        var a = this.ja, b = this.A, c = this.c, d = [], e = 0, f, g;
        var h = 0;
        for (f = c.length; h < f; ++h) {
            var l = c[h].slice()
              , m = l[l.length - 1];
            if (e) {
                var n = 0;
                for (g = l.length; n < g; ++n)
                    l[n] -= e
            }
            n = new D(null);
            n.aa(a, b.slice(e, m), l);
            d.push(n);
            e = m
        }
        return d
    }
    ;
    k.T = function() {
        return "MultiPolygon"
    }
    ;
    k.Ya = function(a) {
        a: {
            var b = hi(this), c = this.c, d = this.a, e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g) {
                var h = c[g];
                if (Rf(b, e, h, d, a)) {
                    a = !0;
                    break a
                }
                e = h[h.length - 1]
            }
            a = !1
        }
        return a
    }
    ;
    k.na = function(a, b) {
        if (a) {
            sf(this, b, a, 3);
            this.A || (this.A = []);
            b = this.A;
            var c = this.a
              , d = this.c
              , e = 0;
            d = d ? d : [];
            var f = 0, g;
            var h = 0;
            for (g = a.length; h < g; ++h)
                e = Cf(b, e, a[h], c, d[f]),
                d[f++] = e,
                e = e[e.length - 1];
            d.length = f;
            d.length ? (a = d[d.length - 1],
            this.A.length = a.length ? a[a.length - 1] : 0) : this.A.length = 0;
            this.s()
        } else
            cm(this, "XY", null, this.c)
    }
    ;
    function cm(a, b, c, d) {
        rf(a, b, c);
        a.c = d;
        a.s()
    }
    function dm(a, b) {
        var c = a.ja, d = [], e = [], f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g];
            g || (c = h.ja);
            var l = d.length;
            var m = h.rb();
            var n;
            var p = 0;
            for (n = m.length; p < n; ++p)
                m[p] += l;
            ka(d, h.ba());
            e.push(m)
        }
        cm(a, c, d, e)
    }
    ;function em(a) {
        a = a ? a : {};
        Tl.call(this);
        this.b = a.geometryName
    }
    v(em, Xl);
    function fm(a, b) {
        if (!a)
            return null;
        if ("number" === typeof a.x && "number" === typeof a.y)
            var c = "Point";
        else if (a.points)
            c = "MultiPoint";
        else if (a.paths)
            c = 1 === a.paths.length ? "LineString" : "MultiLineString";
        else if (a.rings) {
            var d = a.rings
              , e = gm(a)
              , f = []
              , g = [];
            c = [];
            var h;
            var l = 0;
            for (h = d.length; l < h; ++l)
                f.length = 0,
                Bf(f, 0, d[l], e.length),
                Sf(f, 0, f.length, e.length) ? g.push([d[l]]) : c.push(d[l]);
            for (; c.length; ) {
                d = c.shift();
                e = !1;
                for (l = g.length - 1; 0 <= l; l--)
                    if (Ta((new If(g[l][0])).G(), (new If(d)).G())) {
                        g[l].push(d);
                        e = !0;
                        break
                    }
                e || g.push([d.reverse()])
            }
            a = rb({}, a);
            1 === g.length ? (c = "Polygon",
            a.rings = g[0]) : (c = "MultiPolygon",
            a.rings = g)
        }
        return Wl((0,
        hm[c])(a), !1, b)
    }
    function gm(a) {
        var b = "XY";
        !0 === a.hasZ && !0 === a.hasM ? b = "XYZM" : !0 === a.hasZ ? b = "XYZ" : !0 === a.hasM && (b = "XYM");
        return b
    }
    function im(a) {
        a = a.ja;
        return {
            hasZ: "XYZ" === a || "XYZM" === a,
            hasM: "XYM" === a || "XYZM" === a
        }
    }
    var hm = {
        Point: function(a) {
            return void 0 !== a.m && void 0 !== a.z ? new C([a.x, a.y, a.z, a.m],"XYZM") : void 0 !== a.z ? new C([a.x, a.y, a.z],"XYZ") : void 0 !== a.m ? new C([a.x, a.y, a.m],"XYM") : new C([a.x, a.y])
        },
        LineString: function(a) {
            return new M(a.paths[0],gm(a))
        },
        Polygon: function(a) {
            return new D(a.rings,gm(a))
        },
        MultiPoint: function(a) {
            return new O(a.points,gm(a))
        },
        MultiLineString: function(a) {
            return new N(a.paths,gm(a))
        },
        MultiPolygon: function(a) {
            return new P(a.rings,gm(a))
        }
    }
      , jm = {
        Point: function(a) {
            var b = a.X(), c;
            a = a.ja;
            "XYZ" === a ? c = {
                x: b[0],
                y: b[1],
                z: b[2]
            } : "XYM" === a ? c = {
                x: b[0],
                y: b[1],
                m: b[2]
            } : "XYZM" === a ? c = {
                x: b[0],
                y: b[1],
                z: b[2],
                m: b[3]
            } : "XY" === a ? c = {
                x: b[0],
                y: b[1]
            } : va(!1, 34);
            return c
        },
        LineString: function(a) {
            var b = im(a);
            return {
                hasZ: b.hasZ,
                hasM: b.hasM,
                paths: [a.X()]
            }
        },
        Polygon: function(a) {
            var b = im(a);
            return {
                hasZ: b.hasZ,
                hasM: b.hasM,
                rings: a.X(!1)
            }
        },
        MultiPoint: function(a) {
            var b = im(a);
            return {
                hasZ: b.hasZ,
                hasM: b.hasM,
                points: a.X()
            }
        },
        MultiLineString: function(a) {
            var b = im(a);
            return {
                hasZ: b.hasZ,
                hasM: b.hasM,
                paths: a.X()
            }
        },
        MultiPolygon: function(a) {
            var b = im(a);
            a = a.X(!1);
            for (var c = [], d = 0; d < a.length; d++)
                for (var e = a[d].length - 1; 0 <= e; e--)
                    c.push(a[d][e]);
            return {
                hasZ: b.hasZ,
                hasM: b.hasM,
                rings: c
            }
        }
    };
    k = em.prototype;
    k.Uc = function(a, b) {
        var c = fm(a.geometry, b)
          , d = new wl;
        this.b && d.Wc(this.b);
        d.Ra(c);
        b && b.mg && a.attributes[b.mg] && d.kc(a.attributes[b.mg]);
        a.attributes && d.H(a.attributes);
        return d
    }
    ;
    k.Gg = function(a, b) {
        b = b ? b : {};
        if (a.features) {
            var c = [], d = a.features, e;
            b.mg = a.objectIdFieldName;
            a = 0;
            for (e = d.length; a < e; ++a)
                c.push(this.Uc(d[a], b));
            return c
        }
        return [this.Uc(a, b)]
    }
    ;
    k.Kg = function(a, b) {
        return fm(a, b)
    }
    ;
    k.Ng = function(a) {
        return a.spatialReference && a.spatialReference.wkid ? Qb("EPSG:" + a.spatialReference.wkid) : null
    }
    ;
    function km(a, b) {
        return (0,
        jm[a.T()])(Wl(a, !0, b), b)
    }
    k.te = function(a, b) {
        return km(a, Vl(this, b))
    }
    ;
    k.cd = function(a, b) {
        b = Vl(this, b);
        var c = {}
          , d = a.V();
        d && (c.geometry = km(d, b),
        b && b.featureProjection && (c.geometry.spatialReference = {
            wkid: Qb(b.featureProjection).pb.split(":").pop()
        }));
        b = a.N();
        delete b[a.c];
        c.attributes = ub(b) ? {} : b;
        return c
    }
    ;
    k.re = function(a, b) {
        b = Vl(this, b);
        var c = [], d;
        var e = 0;
        for (d = a.length; e < d; ++e)
            c.push(this.cd(a[e], b));
        return {
            features: c
        }
    }
    ;
    function lm(a) {
        this.lc = a
    }
    ;function mm(a, b) {
        this.lc = a;
        this.b = Array.prototype.slice.call(arguments, 1);
        va(2 <= this.b.length, 57)
    }
    v(mm, lm);
    function nm(a) {
        var b = ["And"].concat(Array.prototype.slice.call(arguments));
        mm.apply(this, b)
    }
    v(nm, mm);
    function om(a, b, c) {
        this.lc = "BBOX";
        this.geometryName = a;
        this.extent = b;
        this.srsName = c
    }
    v(om, lm);
    function pm(a, b) {
        this.lc = a;
        this.b = b
    }
    v(pm, lm);
    function qm(a, b, c) {
        pm.call(this, "During", a);
        this.a = b;
        this.f = c
    }
    v(qm, pm);
    function rm(a, b, c, d) {
        pm.call(this, a, b);
        this.f = c;
        this.a = d
    }
    v(rm, pm);
    function sm(a, b, c) {
        rm.call(this, "PropertyIsEqualTo", a, b, c)
    }
    v(sm, rm);
    function tm(a, b) {
        rm.call(this, "PropertyIsGreaterThan", a, b)
    }
    v(tm, rm);
    function um(a, b) {
        rm.call(this, "PropertyIsGreaterThanOrEqualTo", a, b)
    }
    v(um, rm);
    function vm(a, b, c, d) {
        this.lc = a;
        this.geometryName = b || "the_geom";
        this.geometry = c;
        this.srsName = d
    }
    v(vm, lm);
    function wm(a, b, c) {
        vm.call(this, "Intersects", a, b, c)
    }
    v(wm, vm);
    function xm(a, b, c) {
        pm.call(this, "PropertyIsBetween", a);
        this.a = b;
        this.f = c
    }
    v(xm, pm);
    function ym(a, b, c, d, e, f) {
        pm.call(this, "PropertyIsLike", a);
        this.c = b;
        this.g = void 0 !== c ? c : "*";
        this.i = void 0 !== d ? d : ".";
        this.f = void 0 !== e ? e : "!";
        this.a = f
    }
    v(ym, pm);
    function zm(a) {
        pm.call(this, "PropertyIsNull", a)
    }
    v(zm, pm);
    function Am(a, b) {
        rm.call(this, "PropertyIsLessThan", a, b)
    }
    v(Am, rm);
    function Bm(a, b) {
        rm.call(this, "PropertyIsLessThanOrEqualTo", a, b)
    }
    v(Bm, rm);
    function Cm(a) {
        this.lc = "Not";
        this.condition = a
    }
    v(Cm, lm);
    function Dm(a, b, c) {
        rm.call(this, "PropertyIsNotEqualTo", a, b, c)
    }
    v(Dm, rm);
    function Em(a) {
        var b = ["Or"].concat(Array.prototype.slice.call(arguments));
        mm.apply(this, b)
    }
    v(Em, mm);
    function Fm(a, b, c) {
        vm.call(this, "Within", a, b, c)
    }
    v(Fm, vm);
    function Gm(a) {
        var b = [null].concat(Array.prototype.slice.call(arguments));
        return new (Function.prototype.bind.apply(nm, b))
    }
    function Hm(a, b, c) {
        return new om(a,b,c)
    }
    ;function Im(a) {
        lf.call(this);
        this.a = a ? a : null;
        Jm(this)
    }
    v(Im, lf);
    function Km(a) {
        var b = [], c;
        var d = 0;
        for (c = a.length; d < c; ++d)
            b.push(a[d].clone());
        return b
    }
    function Lm(a) {
        var b;
        if (a.a) {
            var c = 0;
            for (b = a.a.length; c < b; ++c)
                Hc(a.a[c], "change", a.s, a)
        }
    }
    function Jm(a) {
        var b;
        if (a.a) {
            var c = 0;
            for (b = a.a.length; c < b; ++c)
                y(a.a[c], "change", a.s, a)
        }
    }
    k = Im.prototype;
    k.clone = function() {
        var a = new Im(null);
        a.yj(this.a);
        return a
    }
    ;
    k.Jb = function(a, b, c, d) {
        if (d < Qa(this.G(), a, b))
            return d;
        var e = this.a, f;
        var g = 0;
        for (f = e.length; g < f; ++g)
            d = e[g].Jb(a, b, c, d);
        return d
    }
    ;
    k.Pc = function(a, b) {
        var c = this.a, d;
        var e = 0;
        for (d = c.length; e < d; ++e)
            if (c[e].Pc(a, b))
                return !0;
        return !1
    }
    ;
    k.Ce = function(a) {
        Wa(a);
        for (var b = this.a, c = 0, d = b.length; c < d; ++c)
            bb(a, b[c].G());
        return a
    }
    ;
    k.He = function() {
        return Km(this.a)
    }
    ;
    k.$d = function(a) {
        this.l != this.f && (sb(this.i),
        this.g = 0,
        this.l = this.f);
        if (0 > a || this.g && a < this.g)
            return this;
        var b = a.toString();
        if (this.i.hasOwnProperty(b))
            return this.i[b];
        var c = [], d = this.a, e = !1, f;
        var g = 0;
        for (f = d.length; g < f; ++g) {
            var h = d[g]
              , l = h.$d(a);
            c.push(l);
            l !== h && (e = !0)
        }
        if (e)
            return a = new Im(null),
            Lm(a),
            a.a = c,
            Jm(a),
            a.s(),
            this.i[b] = a;
        this.g = a;
        return this
    }
    ;
    k.T = function() {
        return "GeometryCollection"
    }
    ;
    k.Ya = function(a) {
        var b = this.a, c;
        var d = 0;
        for (c = b.length; d < c; ++d)
            if (b[d].Ya(a))
                return !0;
        return !1
    }
    ;
    k.rotate = function(a, b) {
        for (var c = this.a, d = 0, e = c.length; d < e; ++d)
            c[d].rotate(a, b);
        this.s()
    }
    ;
    k.scale = function(a, b, c) {
        c || (c = lb(this.G()));
        for (var d = this.a, e = 0, f = d.length; e < f; ++e)
            d[e].scale(a, b, c);
        this.s()
    }
    ;
    k.yj = function(a) {
        a = Km(a);
        Lm(this);
        this.a = a;
        Jm(this);
        this.s()
    }
    ;
    k.Fc = function(a) {
        var b = this.a, c;
        var d = 0;
        for (c = b.length; d < c; ++d)
            b[d].Fc(a);
        this.s()
    }
    ;
    k.translate = function(a, b) {
        var c = this.a, d;
        var e = 0;
        for (d = c.length; e < d; ++e)
            c[e].translate(a, b);
        this.s()
    }
    ;
    k.ka = function() {
        Lm(this);
        lf.prototype.ka.call(this)
    }
    ;
    function Mm(a) {
        a = a ? a : {};
        Tl.call(this);
        this.defaultDataProjection = Qb(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326");
        a.featureProjection && (this.i = Qb(a.featureProjection));
        this.b = a.geometryName
    }
    v(Mm, Xl);
    function Nm(a, b) {
        return a ? Wl((0,
        Om[a.type])(a), !1, b) : null
    }
    function Pm(a, b) {
        return (0,
        Qm[a.T()])(Wl(a, !0, b), b)
    }
    var Om = {
        Point: function(a) {
            return new C(a.coordinates)
        },
        LineString: function(a) {
            return new M(a.coordinates)
        },
        Polygon: function(a) {
            return new D(a.coordinates)
        },
        MultiPoint: function(a) {
            return new O(a.coordinates)
        },
        MultiLineString: function(a) {
            return new N(a.coordinates)
        },
        MultiPolygon: function(a) {
            return new P(a.coordinates)
        },
        GeometryCollection: function(a, b) {
            a = a.geometries.map(function(a) {
                return Nm(a, b)
            });
            return new Im(a)
        }
    }
      , Qm = {
        Point: function(a) {
            return {
                type: "Point",
                coordinates: a.X()
            }
        },
        LineString: function(a) {
            return {
                type: "LineString",
                coordinates: a.X()
            }
        },
        Polygon: function(a, b) {
            if (b)
                var c = b.rightHanded;
            return {
                type: "Polygon",
                coordinates: a.X(c)
            }
        },
        MultiPoint: function(a) {
            return {
                type: "MultiPoint",
                coordinates: a.X()
            }
        },
        MultiLineString: function(a) {
            return {
                type: "MultiLineString",
                coordinates: a.X()
            }
        },
        MultiPolygon: function(a, b) {
            if (b)
                var c = b.rightHanded;
            return {
                type: "MultiPolygon",
                coordinates: a.X(c)
            }
        },
        GeometryCollection: function(a, b) {
            return {
                type: "GeometryCollection",
                geometries: a.a.map(function(a) {
                    var c = rb({}, b);
                    delete c.featureProjection;
                    return Pm(a, c)
                })
            }
        },
        Circle: function() {
            return {
                type: "GeometryCollection",
                geometries: []
            }
        }
    };
    k = Mm.prototype;
    k.Uc = function(a, b) {
        a = "Feature" === a.type ? a : {
            type: "Feature",
            geometry: a
        };
        b = Nm(a.geometry, b);
        var c = new wl;
        this.b && c.Wc(this.b);
        c.Ra(b);
        void 0 !== a.id && c.kc(a.id);
        a.properties && c.H(a.properties);
        return c
    }
    ;
    k.Gg = function(a, b) {
        if ("FeatureCollection" === a.type) {
            var c = [];
            a = a.features;
            var d;
            var e = 0;
            for (d = a.length; e < d; ++e)
                c.push(this.Uc(a[e], b))
        } else
            c = [this.Uc(a, b)];
        return c
    }
    ;
    k.Kg = function(a, b) {
        return Nm(a, b)
    }
    ;
    k.Ng = function(a) {
        a = a.crs;
        var b;
        a ? "name" == a.type ? b = Qb(a.properties.name) : "EPSG" == a.type ? b = Qb("EPSG:" + a.properties.code) : va(!1, 36) : b = this.defaultDataProjection;
        return b
    }
    ;
    k.cd = function(a, b) {
        b = Vl(this, b);
        var c = {
            type: "Feature"
        }
          , d = a.a;
        void 0 !== d && (c.id = d);
        (d = a.V()) ? c.geometry = Pm(d, b) : c.geometry = null;
        b = a.N();
        delete b[a.c];
        ub(b) ? c.properties = null : c.properties = b;
        return c
    }
    ;
    k.re = function(a, b) {
        b = Vl(this, b);
        var c = [], d;
        var e = 0;
        for (d = a.length; e < d; ++e)
            c.push(this.cd(a[e], b));
        return {
            type: "FeatureCollection",
            features: c
        }
    }
    ;
    k.te = function(a, b) {
        return Pm(a, Vl(this, b))
    }
    ;
    function Rm() {
        this.f = new XMLSerializer;
        Tl.call(this)
    }
    v(Rm, Tl);
    k = Rm.prototype;
    k.T = function() {
        return "xml"
    }
    ;
    k.Ub = function(a, b) {
        return Cl(a) ? Sm(this, a, b) : Dl(a) ? this.Fg(a, b) : "string" === typeof a ? (a = El(a),
        Sm(this, a, b)) : null
    }
    ;
    function Sm(a, b, c) {
        a = Tm(a, b, c);
        return 0 < a.length ? a[0] : null
    }
    k.Fg = function() {
        return null
    }
    ;
    k.Oa = function(a, b) {
        return Cl(a) ? Tm(this, a, b) : Dl(a) ? this.Ac(a, b) : "string" === typeof a ? (a = El(a),
        Tm(this, a, b)) : []
    }
    ;
    function Tm(a, b, c) {
        var d = [];
        for (b = b.firstChild; b; b = b.nextSibling)
            b.nodeType == Node.ELEMENT_NODE && ka(d, a.Ac(b, c));
        return d
    }
    k.Vc = function(a, b) {
        if (Cl(a))
            return null;
        if (Dl(a))
            return this.kj(a, b);
        "string" === typeof a && El(a);
        return null
    }
    ;
    k.kj = function() {
        return null
    }
    ;
    k.nb = function(a) {
        return Cl(a) ? this.Mg(a) : Dl(a) ? this.vf(a) : "string" === typeof a ? (a = El(a),
        this.Mg(a)) : null
    }
    ;
    k.Mg = function() {
        return this.defaultDataProjection
    }
    ;
    k.vf = function() {
        return this.defaultDataProjection
    }
    ;
    k.Fd = function(a, b) {
        return this.f.serializeToString(this.$g(a, b))
    }
    ;
    k.$g = function() {
        return null
    }
    ;
    k.Xb = function(a, b) {
        a = this.Yb(a, b);
        return this.f.serializeToString(a)
    }
    ;
    k.Yb = function() {
        return null
    }
    ;
    k.dd = function(a, b) {
        a = this.se(a, b);
        return this.f.serializeToString(a)
    }
    ;
    k.se = function() {
        return null
    }
    ;
    function Um(a) {
        a = a ? a : {};
        this.featureType = a.featureType;
        this.featureNS = a.featureNS;
        this.srsName = a.srsName;
        this.schemaLocation = "";
        this.b = {};
        this.b["http://www.opengis.net/gml"] = {
            featureMember: Hl(Um.prototype.he),
            featureMembers: Hl(Um.prototype.he)
        };
        Rm.call(this)
    }
    v(Um, Rm);
    var Vm = /^[\s\xa0]*$/;
    k = Um.prototype;
    k.he = function(a, b) {
        var c = a.localName
          , d = null;
        if ("FeatureCollection" == c)
            "http://www.opengis.net/wfs" === a.namespaceURI ? d = L([], this.b, a, b, this) : d = L(null, this.b, a, b, this);
        else if ("featureMembers" == c || "featureMember" == c) {
            var e = b[0], f = e.featureType, g = e.featureNS, h;
            if (!f && a.childNodes) {
                f = [];
                g = {};
                var l = 0;
                for (h = a.childNodes.length; l < h; ++l) {
                    var m = a.childNodes[l];
                    if (1 === m.nodeType) {
                        var n = m.nodeName.split(":").pop();
                        if (-1 === f.indexOf(n)) {
                            var p = ""
                              , q = 0;
                            m = m.namespaceURI;
                            for (var t in g) {
                                if (g[t] === m) {
                                    p = t;
                                    break
                                }
                                ++q
                            }
                            p || (p = "p" + q,
                            g[p] = m);
                            f.push(p + ":" + n)
                        }
                    }
                }
                "featureMember" != c && (e.featureType = f,
                e.featureNS = g)
            }
            "string" === typeof g && (l = g,
            g = {},
            g.p0 = l);
            e = {};
            f = Array.isArray(f) ? f : [f];
            for (var u in g) {
                n = {};
                l = 0;
                for (h = f.length; l < h; ++l)
                    (-1 === f[l].indexOf(":") ? "p0" : f[l].split(":")[0]) === u && (n[f[l].split(":").pop()] = "featureMembers" == c ? Gl(this.Eg, this) : Hl(this.Eg, this));
                e[g[u]] = n
            }
            "featureMember" == c ? d = L(void 0, e, a, b) : d = L([], e, a, b)
        }
        null === d && (d = []);
        return d
    }
    ;
    k.sf = function(a, b) {
        var c = b[0];
        c.srsName = a.firstElementChild.getAttribute("srsName");
        if (a = L(null, this.eh, a, b, this))
            return Wl(a, !1, c)
    }
    ;
    k.Eg = function(a, b) {
        var c;
        (c = a.getAttribute("fid")) || (c = a.getAttributeNS("http://www.opengis.net/gml", "id") || "");
        var d = {}, e;
        for (a = a.firstElementChild; a; a = a.nextElementSibling) {
            var f = a.localName;
            if (0 === a.childNodes.length || 1 === a.childNodes.length && (3 === a.firstChild.nodeType || 4 === a.firstChild.nodeType)) {
                var g = Al(a, !1);
                Vm.test(g) && (g = void 0);
                d[f] = g
            } else
                "boundedBy" !== f && (e = f),
                d[f] = this.sf(a, b)
        }
        b = new wl(d);
        e && b.Wc(e);
        c && b.kc(c);
        return b
    }
    ;
    k.pj = function(a, b) {
        if (a = this.rf(a, b))
            return b = new C(null),
            b.aa("XYZ", a),
            b
    }
    ;
    k.nj = function(a, b) {
        if (a = L([], this.Xj, a, b, this))
            return new O(a)
    }
    ;
    k.mj = function(a, b) {
        if (a = L([], this.Wj, a, b, this))
            return b = new N(null),
            bm(b, a),
            b
    }
    ;
    k.oj = function(a, b) {
        if (a = L([], this.Yj, a, b, this))
            return b = new P(null),
            dm(b, a),
            b
    }
    ;
    k.gj = function(a, b) {
        Pl(this.ak, a, b, this)
    }
    ;
    k.Vh = function(a, b) {
        Pl(this.Uj, a, b, this)
    }
    ;
    k.hj = function(a, b) {
        Pl(this.bk, a, b, this)
    }
    ;
    k.tf = function(a, b) {
        if (a = this.rf(a, b))
            return b = new M(null),
            b.aa("XYZ", a),
            b
    }
    ;
    k.Jp = function(a, b) {
        if (a = L(null, this.ue, a, b, this))
            return a
    }
    ;
    k.lj = function(a, b) {
        if (a = this.rf(a, b))
            return b = new If(null),
            Jf(b, "XYZ", a),
            b
    }
    ;
    k.uf = function(a, b) {
        if ((a = L([null], this.If, a, b, this)) && a[0]) {
            b = new D(null);
            var c = a[0], d = [c.length], e;
            var f = 1;
            for (e = a.length; f < e; ++f)
                ka(c, a[f]),
                d.push(c.length);
            b.aa("XYZ", c, d);
            return b
        }
    }
    ;
    k.rf = function(a, b) {
        return L(null, this.ue, a, b, this)
    }
    ;
    k.Xj = {
        "http://www.opengis.net/gml": {
            pointMember: Gl(Um.prototype.gj),
            pointMembers: Gl(Um.prototype.gj)
        }
    };
    k.Wj = {
        "http://www.opengis.net/gml": {
            lineStringMember: Gl(Um.prototype.Vh),
            lineStringMembers: Gl(Um.prototype.Vh)
        }
    };
    k.Yj = {
        "http://www.opengis.net/gml": {
            polygonMember: Gl(Um.prototype.hj),
            polygonMembers: Gl(Um.prototype.hj)
        }
    };
    k.ak = {
        "http://www.opengis.net/gml": {
            Point: Gl(Um.prototype.rf)
        }
    };
    k.Uj = {
        "http://www.opengis.net/gml": {
            LineString: Gl(Um.prototype.tf)
        }
    };
    k.bk = {
        "http://www.opengis.net/gml": {
            Polygon: Gl(Um.prototype.uf)
        }
    };
    k.ve = {
        "http://www.opengis.net/gml": {
            LinearRing: Hl(Um.prototype.Jp)
        }
    };
    k.kj = function(a, b) {
        return (a = this.sf(a, [Ul(this, a, b ? b : {})])) ? a : null
    }
    ;
    k.Ac = function(a, b) {
        var c = {
            featureType: this.featureType,
            featureNS: this.featureNS
        };
        b && rb(c, Ul(this, a, b));
        return this.he(a, [c]) || []
    }
    ;
    k.vf = function(a) {
        return Qb(this.srsName ? this.srsName : a.firstElementChild.getAttribute("srsName"))
    }
    ;
    function Wm(a) {
        a = Al(a, !1);
        return Xm(a)
    }
    function Xm(a) {
        if (a = /^\s*(true|1)|(false|0)\s*$/.exec(a))
            return void 0 !== a[1] || !1
    }
    function Ym(a) {
        a = Al(a, !1);
        a = Date.parse(a);
        return isNaN(a) ? void 0 : a / 1E3
    }
    function Zm(a) {
        a = Al(a, !1);
        return $m(a)
    }
    function $m(a) {
        if (a = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a))
            return parseFloat(a[1])
    }
    function an(a) {
        a = Al(a, !1);
        return bn(a)
    }
    function bn(a) {
        if (a = /^\s*(\d+)\s*$/.exec(a))
            return parseInt(a[1], 10)
    }
    function Q(a) {
        return Al(a, !1).trim()
    }
    function cn(a, b) {
        dn(a, b ? "1" : "0")
    }
    function en(a, b) {
        a.appendChild(yl.createTextNode(b.toPrecision()))
    }
    function fn(a, b) {
        a.appendChild(yl.createTextNode(b.toString()))
    }
    function dn(a, b) {
        a.appendChild(yl.createTextNode(b))
    }
    ;function gn(a) {
        a = a ? a : {};
        Um.call(this, a);
        this.o = void 0 !== a.surface ? a.surface : !1;
        this.c = void 0 !== a.curve ? a.curve : !1;
        this.g = void 0 !== a.multiCurve ? a.multiCurve : !0;
        this.j = void 0 !== a.multiSurface ? a.multiSurface : !0;
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd";
        this.hasZ = void 0 !== a.hasZ ? a.hasZ : !1
    }
    v(gn, Um);
    k = gn.prototype;
    k.Np = function(a, b) {
        if (a = L([], this.Vj, a, b, this))
            return b = new N(null),
            bm(b, a),
            b
    }
    ;
    k.Op = function(a, b) {
        if (a = L([], this.Zj, a, b, this))
            return b = new P(null),
            dm(b, a),
            b
    }
    ;
    k.vh = function(a, b) {
        Pl(this.Rj, a, b, this)
    }
    ;
    k.Kj = function(a, b) {
        Pl(this.dk, a, b, this)
    }
    ;
    k.Rp = function(a, b) {
        return L([null], this.$j, a, b, this)
    }
    ;
    k.Up = function(a, b) {
        return L([null], this.ck, a, b, this)
    }
    ;
    k.Sp = function(a, b) {
        return L([null], this.If, a, b, this)
    }
    ;
    k.Mp = function(a, b) {
        return L([null], this.ue, a, b, this)
    }
    ;
    k.qm = function(a, b) {
        (a = L(void 0, this.ve, a, b, this)) && b[b.length - 1].push(a)
    }
    ;
    k.Jk = function(a, b) {
        (a = L(void 0, this.ve, a, b, this)) && (b[b.length - 1][0] = a)
    }
    ;
    k.qj = function(a, b) {
        if ((a = L([null], this.ek, a, b, this)) && a[0]) {
            b = new D(null);
            var c = a[0], d = [c.length], e;
            var f = 1;
            for (e = a.length; f < e; ++f)
                ka(c, a[f]),
                d.push(c.length);
            b.aa("XYZ", c, d);
            return b
        }
    }
    ;
    k.ij = function(a, b) {
        if (a = L([null], this.Sj, a, b, this))
            return b = new M(null),
            b.aa("XYZ", a),
            b
    }
    ;
    k.Ip = function(a, b) {
        a = L([null], this.Tj, a, b, this);
        return Va(a[1][0], a[1][1], a[2][0], a[2][1])
    }
    ;
    k.Kp = function(a, b) {
        var c = Al(a, !1)
          , d = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/;
        a = [];
        for (var e; e = d.exec(c); )
            a.push(parseFloat(e[1])),
            c = c.substr(e[0].length);
        if ("" === c) {
            b = b[0].srsName;
            c = "enu";
            b && (c = Qb(b).a);
            if ("neu" === c)
                for (b = 0,
                c = a.length; b < c; b += 3)
                    d = a[b],
                    a[b] = a[b + 1],
                    a[b + 1] = d;
            b = a.length;
            2 == b && a.push(0);
            if (b)
                return a
        }
    }
    ;
    k.Jg = function(a, b) {
        var c = Al(a, !1).replace(/^\s*|\s*$/g, "")
          , d = b[0].srsName
          , e = a.parentNode.getAttribute("srsDimension");
        b = "enu";
        d && (b = Qb(d).a);
        c = c.split(/\s+/);
        d = 2;
        a.getAttribute("srsDimension") ? d = bn(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? d = bn(a.getAttribute("dimension")) : e && (d = bn(e));
        for (var f, g = [], h = 0, l = c.length; h < l; h += d)
            a = parseFloat(c[h]),
            e = parseFloat(c[h + 1]),
            f = 3 === d ? parseFloat(c[h + 2]) : 0,
            "en" === b.substr(0, 2) ? g.push(a, e, f) : g.push(e, a, f);
        return g
    }
    ;
    k.ue = {
        "http://www.opengis.net/gml": {
            pos: Hl(gn.prototype.Kp),
            posList: Hl(gn.prototype.Jg)
        }
    };
    k.If = {
        "http://www.opengis.net/gml": {
            interior: gn.prototype.qm,
            exterior: gn.prototype.Jk
        }
    };
    k.eh = {
        "http://www.opengis.net/gml": {
            Point: Hl(Um.prototype.pj),
            MultiPoint: Hl(Um.prototype.nj),
            LineString: Hl(Um.prototype.tf),
            MultiLineString: Hl(Um.prototype.mj),
            LinearRing: Hl(Um.prototype.lj),
            Polygon: Hl(Um.prototype.uf),
            MultiPolygon: Hl(Um.prototype.oj),
            Surface: Hl(gn.prototype.qj),
            MultiSurface: Hl(gn.prototype.Op),
            Curve: Hl(gn.prototype.ij),
            MultiCurve: Hl(gn.prototype.Np),
            Envelope: Hl(gn.prototype.Ip)
        }
    };
    k.Vj = {
        "http://www.opengis.net/gml": {
            curveMember: Gl(gn.prototype.vh),
            curveMembers: Gl(gn.prototype.vh)
        }
    };
    k.Zj = {
        "http://www.opengis.net/gml": {
            surfaceMember: Gl(gn.prototype.Kj),
            surfaceMembers: Gl(gn.prototype.Kj)
        }
    };
    k.Rj = {
        "http://www.opengis.net/gml": {
            LineString: Gl(Um.prototype.tf),
            Curve: Gl(gn.prototype.ij)
        }
    };
    k.dk = {
        "http://www.opengis.net/gml": {
            Polygon: Gl(Um.prototype.uf),
            Surface: Gl(gn.prototype.qj)
        }
    };
    k.ek = {
        "http://www.opengis.net/gml": {
            patches: Hl(gn.prototype.Rp)
        }
    };
    k.Sj = {
        "http://www.opengis.net/gml": {
            segments: Hl(gn.prototype.Up)
        }
    };
    k.Tj = {
        "http://www.opengis.net/gml": {
            lowerCorner: Gl(gn.prototype.Jg),
            upperCorner: Gl(gn.prototype.Jg)
        }
    };
    k.$j = {
        "http://www.opengis.net/gml": {
            PolygonPatch: Hl(gn.prototype.Sp)
        }
    };
    k.ck = {
        "http://www.opengis.net/gml": {
            LineStringSegment: Hl(gn.prototype.Mp)
        }
    };
    function hn(a, b, c) {
        var d = c[c.length - 1];
        c = d.hasZ;
        d = d.srsName;
        b = b.X();
        for (var e = b.length, f = Array(e), g, h = 0; h < e; ++h) {
            g = b[h];
            var l = h
              , m = c
              , n = "enu";
            d && (n = Qb(d).a);
            n = "en" === n.substr(0, 2) ? g[0] + " " + g[1] : g[1] + " " + g[0];
            m && (n += " " + (g[2] || 0));
            f[l] = n
        }
        dn(a, f.join(" "))
    }
    k.yi = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = zl(a.namespaceURI, "pos");
        a.appendChild(d);
        c = c[c.length - 1];
        a = c.hasZ;
        var e = c.srsName;
        c = "enu";
        e && (c = Qb(e).a);
        b = b.X();
        c = "en" === c.substr(0, 2) ? b[0] + " " + b[1] : b[1] + " " + b[0];
        a && (c += " " + (b[2] || 0));
        dn(d, c)
    }
    ;
    var jn = {
        "http://www.opengis.net/gml": {
            lowerCorner: J(dn),
            upperCorner: J(dn)
        }
    };
    k = gn.prototype;
    k.zn = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        Ql({
            node: a
        }, jn, Nl, [b[0] + " " + b[1], b[2] + " " + b[3]], c, ["lowerCorner", "upperCorner"], this)
    }
    ;
    k.vi = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = zl(a.namespaceURI, "posList");
        a.appendChild(d);
        hn(d, b, c)
    }
    ;
    k.yn = function(a, b) {
        a = b[b.length - 1];
        b = a.node;
        var c = a.exteriorWritten;
        void 0 === c && (a.exteriorWritten = !0);
        return zl(b.namespaceURI, void 0 !== c ? "interior" : "exterior")
    }
    ;
    k.cf = function(a, b, c) {
        var d = c[c.length - 1]
          , e = d.hasZ;
        d = d.srsName;
        "PolygonPatch" !== a.nodeName && d && a.setAttribute("srsName", d);
        "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = b.Yd(),
        Ql({
            node: a,
            hasZ: e,
            srsName: d
        }, kn, this.yn, b, c, void 0, this)) : "Surface" === a.nodeName && (e = zl(a.namespaceURI, "patches"),
        a.appendChild(e),
        a = zl(e.namespaceURI, "PolygonPatch"),
        e.appendChild(a),
        this.cf(a, b, c))
    }
    ;
    k.bf = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        "LineStringSegment" !== a.nodeName && d && a.setAttribute("srsName", d);
        "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = zl(a.namespaceURI, "posList"),
        a.appendChild(d),
        hn(d, b, c)) : "Curve" === a.nodeName && (d = zl(a.namespaceURI, "segments"),
        a.appendChild(d),
        a = zl(d.namespaceURI, "LineStringSegment"),
        d.appendChild(a),
        this.bf(a, b, c))
    }
    ;
    k.xi = function(a, b, c) {
        var d = c[c.length - 1]
          , e = d.hasZ
          , f = d.srsName;
        d = d.surface;
        f && a.setAttribute("srsName", f);
        b = b.Zd();
        Ql({
            node: a,
            hasZ: e,
            srsName: f,
            surface: d
        }, ln, this.l, b, c, void 0, this)
    }
    ;
    k.An = function(a, b, c) {
        var d = c[c.length - 1]
          , e = d.srsName;
        d = d.hasZ;
        e && a.setAttribute("srsName", e);
        b = b.de();
        Ql({
            node: a,
            hasZ: d,
            srsName: e
        }, mn, Ll("pointMember"), b, c, void 0, this)
    }
    ;
    k.wi = function(a, b, c) {
        var d = c[c.length - 1]
          , e = d.hasZ
          , f = d.srsName;
        d = d.curve;
        f && a.setAttribute("srsName", f);
        b = b.kd();
        Ql({
            node: a,
            hasZ: e,
            srsName: f,
            curve: d
        }, nn, this.l, b, c, void 0, this)
    }
    ;
    k.zi = function(a, b, c) {
        var d = zl(a.namespaceURI, "LinearRing");
        a.appendChild(d);
        this.vi(d, b, c)
    }
    ;
    k.Ai = function(a, b, c) {
        var d = this.a(b, c);
        d && (a.appendChild(d),
        this.cf(d, b, c))
    }
    ;
    k.Bn = function(a, b, c) {
        var d = zl(a.namespaceURI, "Point");
        a.appendChild(d);
        this.yi(d, b, c)
    }
    ;
    k.ui = function(a, b, c) {
        var d = this.a(b, c);
        d && (a.appendChild(d),
        this.bf(d, b, c))
    }
    ;
    k.td = function(a, b, c) {
        var d = c[c.length - 1]
          , e = rb({}, d);
        e.node = a;
        var f;
        Array.isArray(b) ? d.dataProjection ? f = dc(b, d.featureProjection, d.dataProjection) : f = b : f = Wl(b, !0, d);
        Ql(e, on, this.a, [f], c, void 0, this)
    }
    ;
    k.ti = function(a, b, c) {
        var d = b.a;
        d && a.setAttribute("fid", d);
        d = c[c.length - 1];
        var e = d.featureNS
          , f = b.c;
        d.ob || (d.ob = {},
        d.ob[e] = {});
        var g = b.N();
        b = [];
        var h = [];
        for (m in g) {
            var l = g[m];
            null !== l && (b.push(m),
            h.push(l),
            m == f || l instanceof lf ? m in d.ob[e] || (d.ob[e][m] = J(this.td, this)) : m in d.ob[e] || (d.ob[e][m] = J(dn)))
        }
        var m = rb({}, d);
        m.node = a;
        Ql(m, d.ob, Ll(void 0, e), h, c, b)
    }
    ;
    var ln = {
        "http://www.opengis.net/gml": {
            surfaceMember: J(gn.prototype.Ai),
            polygonMember: J(gn.prototype.Ai)
        }
    }
      , mn = {
        "http://www.opengis.net/gml": {
            pointMember: J(gn.prototype.Bn)
        }
    }
      , nn = {
        "http://www.opengis.net/gml": {
            lineStringMember: J(gn.prototype.ui),
            curveMember: J(gn.prototype.ui)
        }
    }
      , kn = {
        "http://www.opengis.net/gml": {
            exterior: J(gn.prototype.zi),
            interior: J(gn.prototype.zi)
        }
    }
      , on = {
        "http://www.opengis.net/gml": {
            Curve: J(gn.prototype.bf),
            MultiCurve: J(gn.prototype.wi),
            Point: J(gn.prototype.yi),
            MultiPoint: J(gn.prototype.An),
            LineString: J(gn.prototype.bf),
            MultiLineString: J(gn.prototype.wi),
            LinearRing: J(gn.prototype.vi),
            Polygon: J(gn.prototype.cf),
            MultiPolygon: J(gn.prototype.xi),
            Surface: J(gn.prototype.cf),
            MultiSurface: J(gn.prototype.xi),
            Envelope: J(gn.prototype.zn)
        }
    }
      , pn = {
        MultiLineString: "lineStringMember",
        MultiCurve: "curveMember",
        MultiPolygon: "polygonMember",
        MultiSurface: "surfaceMember"
    };
    gn.prototype.l = function(a, b) {
        return zl("http://www.opengis.net/gml", pn[b[b.length - 1].node.nodeName])
    }
    ;
    gn.prototype.a = function(a, b) {
        var c = b[b.length - 1];
        b = c.multiSurface;
        var d = c.surface
          , e = c.curve;
        c = c.multiCurve;
        Array.isArray(a) ? a = "Envelope" : (a = a.T(),
        "MultiPolygon" === a && !0 === b ? a = "MultiSurface" : "Polygon" === a && !0 === d ? a = "Surface" : "LineString" === a && !0 === e ? a = "Curve" : "MultiLineString" === a && !0 === c && (a = "MultiCurve"));
        return zl("http://www.opengis.net/gml", a)
    }
    ;
    gn.prototype.se = function(a, b) {
        b = Vl(this, b);
        var c = zl("http://www.opengis.net/gml", "geom")
          , d = {
            node: c,
            hasZ: this.hasZ,
            srsName: this.srsName,
            curve: this.c,
            surface: this.o,
            multiSurface: this.j,
            multiCurve: this.g
        };
        b && rb(d, b);
        this.td(c, a, [d]);
        return c
    }
    ;
    gn.prototype.Yb = function(a, b) {
        b = Vl(this, b);
        var c = zl("http://www.opengis.net/gml", "featureMembers");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
        var d = {
            srsName: this.srsName,
            hasZ: this.hasZ,
            curve: this.c,
            surface: this.o,
            multiSurface: this.j,
            multiCurve: this.g,
            featureNS: this.featureNS,
            featureType: this.featureType
        };
        b && rb(d, b);
        b = [d];
        var e = b[b.length - 1];
        d = e.featureType;
        var f = e.featureNS
          , g = {};
        g[f] = {};
        g[f][d] = J(this.ti, this);
        e = rb({}, e);
        e.node = c;
        Ql(e, g, Ll(d, f), a, b);
        return c
    }
    ;
    function qn(a) {
        a = a ? a : {};
        Um.call(this, a);
        this.b["http://www.opengis.net/gml"].featureMember = Gl(Um.prototype.he);
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"
    }
    v(qn, Um);
    k = qn.prototype;
    k.jj = function(a, b) {
        a = Al(a, !1).replace(/^\s*|\s*$/g, "");
        var c = b[0].srsName;
        b = "enu";
        c && (c = Qb(c)) && (b = c.a);
        a = a.trim().split(/\s+/);
        for (var d, e, f = [], g = 0, h = a.length; g < h; g++)
            e = a[g].split(/,+/),
            c = parseFloat(e[0]),
            d = parseFloat(e[1]),
            e = 3 === e.length ? parseFloat(e[2]) : 0,
            "en" === b.substr(0, 2) ? f.push(c, d, e) : f.push(d, c, e);
        return f
    }
    ;
    k.Gp = function(a, b) {
        a = L([null], this.Qj, a, b, this);
        return Va(a[1][0], a[1][1], a[1][3], a[1][4])
    }
    ;
    k.om = function(a, b) {
        (a = L(void 0, this.ve, a, b, this)) && b[b.length - 1].push(a)
    }
    ;
    k.pp = function(a, b) {
        (a = L(void 0, this.ve, a, b, this)) && (b[b.length - 1][0] = a)
    }
    ;
    k.ue = {
        "http://www.opengis.net/gml": {
            coordinates: Hl(qn.prototype.jj)
        }
    };
    k.If = {
        "http://www.opengis.net/gml": {
            innerBoundaryIs: qn.prototype.om,
            outerBoundaryIs: qn.prototype.pp
        }
    };
    k.Qj = {
        "http://www.opengis.net/gml": {
            coordinates: Gl(qn.prototype.jj)
        }
    };
    k.eh = {
        "http://www.opengis.net/gml": {
            Point: Hl(Um.prototype.pj),
            MultiPoint: Hl(Um.prototype.nj),
            LineString: Hl(Um.prototype.tf),
            MultiLineString: Hl(Um.prototype.mj),
            LinearRing: Hl(Um.prototype.lj),
            Polygon: Hl(Um.prototype.uf),
            MultiPolygon: Hl(Um.prototype.oj),
            Box: Hl(qn.prototype.Gp)
        }
    };
    k.rg = function(a, b) {
        var c = b[b.length - 1];
        b = c.multiSurface;
        var d = c.surface;
        c = c.multiCurve;
        Array.isArray(a) ? a = "Envelope" : (a = a.T(),
        "MultiPolygon" === a && !0 === b ? a = "MultiSurface" : "Polygon" === a && !0 === d ? a = "Surface" : "MultiLineString" === a && !0 === c && (a = "MultiCurve"));
        return zl("http://www.opengis.net/gml", a)
    }
    ;
    k.ki = function(a, b, c) {
        var d = c[c.length - 1]
          , e = rb({}, d);
        e.node = a;
        var f;
        Array.isArray(b) ? d.dataProjection ? f = dc(b, d.featureProjection, d.dataProjection) : f = b : f = Wl(b, !0, d);
        Ql(e, rn, this.rg, [f], c, void 0, this)
    }
    ;
    k.$e = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        "LineStringSegment" !== a.nodeName && d && a.setAttribute("srsName", d);
        "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = sn(a.namespaceURI),
        a.appendChild(d),
        tn(d, b, c)) : "Curve" === a.nodeName && (d = zl(a.namespaceURI, "segments"),
        a.appendChild(d),
        a = zl(d.namespaceURI, "LineStringSegment"),
        d.appendChild(a),
        this.$e(a, b, c))
    }
    ;
    function sn(a) {
        a = zl(a, "coordinates");
        a.setAttribute("decimal", ".");
        a.setAttribute("cs", ",");
        a.setAttribute("ts", " ");
        return a
    }
    function tn(a, b, c) {
        var d = c[c.length - 1];
        c = d.hasZ;
        d = d.srsName;
        b = b.X();
        for (var e = b.length, f = Array(e), g, h = 0; h < e; ++h)
            g = b[h],
            f[h] = un(g, d, c);
        dn(a, f.join(" "))
    }
    k.af = function(a, b, c) {
        var d = c[c.length - 1]
          , e = d.hasZ;
        d = d.srsName;
        "PolygonPatch" !== a.nodeName && d && a.setAttribute("srsName", d);
        "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = b.Yd(),
        Ql({
            node: a,
            hasZ: e,
            srsName: d
        }, vn, this.tn, b, c, void 0, this)) : "Surface" === a.nodeName && (e = zl(a.namespaceURI, "patches"),
        a.appendChild(e),
        a = zl(e.namespaceURI, "PolygonPatch"),
        e.appendChild(a),
        this.af(a, b, c))
    }
    ;
    k.tn = function(a, b) {
        a = b[b.length - 1];
        b = a.node;
        var c = a.exteriorWritten;
        void 0 === c && (a.exteriorWritten = !0);
        return zl(b.namespaceURI, void 0 !== c ? "innerBoundaryIs" : "outerBoundaryIs")
    }
    ;
    k.ri = function(a, b, c) {
        var d = zl(a.namespaceURI, "LinearRing");
        a.appendChild(d);
        this.mi(d, b, c)
    }
    ;
    function un(a, b, c) {
        var d = "enu";
        b && (d = Qb(b).a);
        b = "en" === d.substr(0, 2) ? a[0] + "," + a[1] : a[1] + "," + a[0];
        c && (b += "," + (a[2] || 0));
        return b
    }
    k.ni = function(a, b, c) {
        var d = c[c.length - 1]
          , e = d.hasZ
          , f = d.srsName;
        d = d.curve;
        f && a.setAttribute("srsName", f);
        b = b.kd();
        Ql({
            node: a,
            hasZ: e,
            srsName: f,
            curve: d
        }, wn, this.a, b, c, void 0, this)
    }
    ;
    k.pi = function(a, b, c) {
        var d = c[c.length - 1];
        c = d.hasZ;
        var e = d.srsName;
        e && a.setAttribute("srsName", e);
        d = sn(a.namespaceURI);
        a.appendChild(d);
        a = b.X();
        a = un(a, e, c);
        dn(d, a)
    }
    ;
    k.wn = function(a, b, c) {
        var d = c[c.length - 1]
          , e = d.hasZ;
        (d = d.srsName) && a.setAttribute("srsName", d);
        b = b.de();
        Ql({
            node: a,
            hasZ: e,
            srsName: d
        }, xn, Ll("pointMember"), b, c, void 0, this)
    }
    ;
    k.xn = function(a, b, c) {
        var d = zl(a.namespaceURI, "Point");
        a.appendChild(d);
        this.pi(d, b, c)
    }
    ;
    k.li = function(a, b, c) {
        var d = this.rg(b, c);
        d && (a.appendChild(d),
        this.$e(d, b, c))
    }
    ;
    k.mi = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = sn(a.namespaceURI);
        a.appendChild(d);
        tn(d, b, c)
    }
    ;
    k.oi = function(a, b, c) {
        var d = c[c.length - 1]
          , e = d.hasZ
          , f = d.srsName;
        d = d.surface;
        f && a.setAttribute("srsName", f);
        b = b.Zd();
        Ql({
            node: a,
            hasZ: e,
            srsName: f,
            surface: d
        }, yn, this.a, b, c, void 0, this)
    }
    ;
    k.si = function(a, b, c) {
        var d = this.rg(b, c);
        d && (a.appendChild(d),
        this.af(d, b, c))
    }
    ;
    k.vn = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        Ql({
            node: a
        }, zn, Nl, [b[0] + " " + b[1], b[2] + " " + b[3]], c, ["lowerCorner", "upperCorner"], this)
    }
    ;
    var rn = {
        "http://www.opengis.net/gml": {
            Curve: J(qn.prototype.$e),
            MultiCurve: J(qn.prototype.ni),
            Point: J(qn.prototype.pi),
            MultiPoint: J(qn.prototype.wn),
            LineString: J(qn.prototype.$e),
            MultiLineString: J(qn.prototype.ni),
            LinearRing: J(qn.prototype.mi),
            Polygon: J(qn.prototype.af),
            MultiPolygon: J(qn.prototype.oi),
            Surface: J(qn.prototype.af),
            MultiSurface: J(qn.prototype.oi),
            Envelope: J(qn.prototype.vn)
        }
    }
      , vn = {
        "http://www.opengis.net/gml": {
            outerBoundaryIs: J(qn.prototype.ri),
            innerBoundaryIs: J(qn.prototype.ri)
        }
    }
      , xn = {
        "http://www.opengis.net/gml": {
            pointMember: J(qn.prototype.xn)
        }
    }
      , wn = {
        "http://www.opengis.net/gml": {
            lineStringMember: J(qn.prototype.li),
            curveMember: J(qn.prototype.li)
        }
    };
    qn.prototype.a = function(a, b) {
        return zl("http://www.opengis.net/gml", An[b[b.length - 1].node.nodeName])
    }
    ;
    var An = {
        MultiLineString: "lineStringMember",
        MultiCurve: "curveMember",
        MultiPolygon: "polygonMember",
        MultiSurface: "surfaceMember"
    }
      , yn = {
        "http://www.opengis.net/gml": {
            surfaceMember: J(qn.prototype.si),
            polygonMember: J(qn.prototype.si)
        }
    }
      , zn = {
        "http://www.opengis.net/gml": {
            lowerCorner: J(dn),
            upperCorner: J(dn)
        }
    };
    function Bn(a) {
        a = a ? a : {};
        Rm.call(this);
        this.defaultDataProjection = Qb("EPSG:4326");
        this.b = a.readExtensions
    }
    v(Bn, Rm);
    var Cn = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];
    function Dn(a, b, c, d) {
        a.push(parseFloat(c.getAttribute("lon")), parseFloat(c.getAttribute("lat")));
        "ele"in d ? (a.push(d.ele),
        delete d.ele,
        b.hasZ = !0) : a.push(0);
        "time"in d ? (a.push(d.time),
        delete d.time,
        b.hasM = !0) : a.push(0);
        return a
    }
    function En(a, b, c) {
        var d = "XY"
          , e = 2;
        a.hasZ && a.hasM ? (d = "XYZM",
        e = 4) : a.hasZ ? (d = "XYZ",
        e = 3) : a.hasM && (d = "XYM",
        e = 3);
        if (4 !== e) {
            var f;
            var g = 0;
            for (f = b.length / 4; g < f; g++)
                b[g * e] = b[4 * g],
                b[g * e + 1] = b[4 * g + 1],
                a.hasZ && (b[g * e + 2] = b[4 * g + 2]),
                a.hasM && (b[g * e + 2] = b[4 * g + 3]);
            b.length = b.length / 4 * e;
            if (c)
                for (g = 0,
                f = c.length; g < f; g++)
                    c[g] = c[g] / 4 * e
        }
        return d
    }
    function Fn(a, b) {
        var c = b[b.length - 1]
          , d = a.getAttribute("href");
        null !== d && (c.link = d);
        Pl(Gn, a, b)
    }
    function Hn(a, b) {
        b[b.length - 1].extensionsNode_ = a
    }
    function In(a, b) {
        var c = b[0];
        if (a = L({
            flatCoordinates: [],
            layoutOptions: {}
        }, Jn, a, b)) {
            b = a.flatCoordinates;
            delete a.flatCoordinates;
            var d = a.layoutOptions;
            delete a.layoutOptions;
            d = En(d, b);
            var e = new M(null);
            e.aa(d, b);
            Wl(e, !1, c);
            c = new wl(e);
            c.H(a);
            return c
        }
    }
    function Kn(a, b) {
        var c = b[0];
        if (a = L({
            flatCoordinates: [],
            ends: [],
            layoutOptions: {}
        }, Ln, a, b)) {
            b = a.flatCoordinates;
            delete a.flatCoordinates;
            var d = a.ends;
            delete a.ends;
            var e = a.layoutOptions;
            delete a.layoutOptions;
            e = En(e, b, d);
            var f = new N(null);
            f.aa(e, b, d);
            Wl(f, !1, c);
            c = new wl(f);
            c.H(a);
            return c
        }
    }
    function Mn(a, b) {
        var c = b[0];
        if (b = L({}, Nn, a, b)) {
            var d = {};
            a = Dn([], d, a, b);
            d = En(d, a);
            a = new C(a,d);
            Wl(a, !1, c);
            c = new wl(a);
            c.H(b);
            return c
        }
    }
    var On = {
        rte: In,
        trk: Kn,
        wpt: Mn
    }
      , Pn = K(Cn, {
        rte: Gl(In),
        trk: Gl(Kn),
        wpt: Gl(Mn)
    })
      , Gn = K(Cn, {
        text: I(Q, "linkText"),
        type: I(Q, "linkType")
    })
      , Jn = K(Cn, {
        name: I(Q),
        cmt: I(Q),
        desc: I(Q),
        src: I(Q),
        link: Fn,
        number: I(an),
        extensions: Hn,
        type: I(Q),
        rtept: function(a, b) {
            var c = L({}, Qn, a, b);
            c && (b = b[b.length - 1],
            Dn(b.flatCoordinates, b.layoutOptions, a, c))
        }
    })
      , Qn = K(Cn, {
        ele: I(Zm),
        time: I(Ym)
    })
      , Ln = K(Cn, {
        name: I(Q),
        cmt: I(Q),
        desc: I(Q),
        src: I(Q),
        link: Fn,
        number: I(an),
        type: I(Q),
        extensions: Hn,
        trkseg: function(a, b) {
            var c = b[b.length - 1];
            Pl(Rn, a, b);
            c.ends.push(c.flatCoordinates.length)
        }
    })
      , Rn = K(Cn, {
        trkpt: function(a, b) {
            var c = L({}, Sn, a, b);
            c && (b = b[b.length - 1],
            Dn(b.flatCoordinates, b.layoutOptions, a, c))
        }
    })
      , Sn = K(Cn, {
        ele: I(Zm),
        time: I(Ym)
    })
      , Nn = K(Cn, {
        ele: I(Zm),
        time: I(Ym),
        magvar: I(Zm),
        geoidheight: I(Zm),
        name: I(Q),
        cmt: I(Q),
        desc: I(Q),
        src: I(Q),
        link: Fn,
        sym: I(Q),
        type: I(Q),
        fix: I(Q),
        sat: I(an),
        hdop: I(Zm),
        vdop: I(Zm),
        pdop: I(Zm),
        ageofdgpsdata: I(Zm),
        dgpsid: I(an),
        extensions: Hn
    });
    function Tn(a, b) {
        b || (b = []);
        for (var c = 0, d = b.length; c < d; ++c) {
            var e = b[c];
            if (a.b) {
                var f = e.get("extensionsNode_") || null;
                a.b(e, f)
            }
            e.set("extensionsNode_", void 0)
        }
    }
    Bn.prototype.Fg = function(a, b) {
        if (!ha(Cn, a.namespaceURI))
            return null;
        var c = On[a.localName];
        if (!c)
            return null;
        a = c(a, [Ul(this, a, b)]);
        if (!a)
            return null;
        Tn(this, [a]);
        return a
    }
    ;
    Bn.prototype.Ac = function(a, b) {
        return ha(Cn, a.namespaceURI) ? "gpx" == a.localName && (a = L([], Pn, a, [Ul(this, a, b)])) ? (Tn(this, a),
        a) : [] : []
    }
    ;
    function Un(a, b, c) {
        a.setAttribute("href", b);
        b = c[c.length - 1].properties;
        Ql({
            node: a
        }, Vn, Nl, [b.linkText, b.linkType], c, Wn)
    }
    function Xn(a, b, c) {
        var d = c[c.length - 1]
          , e = d.node.namespaceURI
          , f = d.properties;
        a.setAttributeNS(null, "lat", b[1]);
        a.setAttributeNS(null, "lon", b[0]);
        switch (d.geometryLayout) {
        case "XYZM":
            b[3] && (f.time = b[3]);
        case "XYZ":
            b[2] && (f.ele = b[2]);
            break;
        case "XYM":
            b[2] && (f.time = b[2])
        }
        b = "rtept" == a.nodeName ? Yn[e] : Zn[e];
        d = Ol(f, b);
        Ql({
            node: a,
            properties: f
        }, $n, Nl, d, c, b)
    }
    var Wn = ["text", "type"]
      , Vn = K(Cn, {
        text: J(dn),
        type: J(dn)
    })
      , ao = K(Cn, "name cmt desc src link number type rtept".split(" "))
      , bo = K(Cn, {
        name: J(dn),
        cmt: J(dn),
        desc: J(dn),
        src: J(dn),
        link: J(Un),
        number: J(fn),
        type: J(dn),
        rtept: Jl(J(Xn))
    })
      , Yn = K(Cn, ["ele", "time"])
      , co = K(Cn, "name cmt desc src link number type trkseg".split(" "))
      , go = K(Cn, {
        name: J(dn),
        cmt: J(dn),
        desc: J(dn),
        src: J(dn),
        link: J(Un),
        number: J(fn),
        type: J(dn),
        trkseg: Jl(J(function(a, b, c) {
            Ql({
                node: a,
                geometryLayout: b.ja,
                properties: {}
            }, eo, fo, b.X(), c)
        }))
    })
      , fo = Ll("trkpt")
      , eo = K(Cn, {
        trkpt: J(Xn)
    })
      , Zn = K(Cn, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" "))
      , $n = K(Cn, {
        ele: J(en),
        time: J(function(a, b) {
            b = new Date(1E3 * b);
            a.appendChild(yl.createTextNode(b.getUTCFullYear() + "-" + Ve(b.getUTCMonth() + 1) + "-" + Ve(b.getUTCDate()) + "T" + Ve(b.getUTCHours()) + ":" + Ve(b.getUTCMinutes()) + ":" + Ve(b.getUTCSeconds()) + "Z"))
        }),
        magvar: J(en),
        geoidheight: J(en),
        name: J(dn),
        cmt: J(dn),
        desc: J(dn),
        src: J(dn),
        link: J(Un),
        sym: J(dn),
        type: J(dn),
        fix: J(dn),
        sat: J(fn),
        hdop: J(en),
        vdop: J(en),
        pdop: J(en),
        ageofdgpsdata: J(en),
        dgpsid: J(fn)
    })
      , ho = {
        Point: "wpt",
        LineString: "rte",
        MultiLineString: "trk"
    };
    function io(a, b) {
        if (a = a.V())
            if (a = ho[a.T()])
                return zl(b[b.length - 1].node.namespaceURI, a)
    }
    var jo = K(Cn, {
        rte: J(function(a, b, c) {
            var d = c[0]
              , e = b.N();
            a = {
                node: a,
                properties: e
            };
            if (b = b.V())
                b = Wl(b, !0, d),
                a.geometryLayout = b.ja,
                e.rtept = b.X();
            d = ao[c[c.length - 1].node.namespaceURI];
            e = Ol(e, d);
            Ql(a, bo, Nl, e, c, d)
        }),
        trk: J(function(a, b, c) {
            var d = c[0]
              , e = b.N();
            a = {
                node: a,
                properties: e
            };
            if (b = b.V())
                b = Wl(b, !0, d),
                e.trkseg = b.kd();
            d = co[c[c.length - 1].node.namespaceURI];
            e = Ol(e, d);
            Ql(a, go, Nl, e, c, d)
        }),
        wpt: J(function(a, b, c) {
            var d = c[0]
              , e = c[c.length - 1];
            e.properties = b.N();
            if (b = b.V())
                b = Wl(b, !0, d),
                e.geometryLayout = b.ja,
                Xn(a, b.X(), c)
        })
    });
    Bn.prototype.Yb = function(a, b) {
        b = Vl(this, b);
        var c = zl("http://www.topografix.com/GPX/1/1", "gpx");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd");
        c.setAttribute("version", "1.1");
        c.setAttribute("creator", "OpenLayers");
        Ql({
            node: c
        }, jo, io, a, [b]);
        return c
    }
    ;
    function ko() {
        Tl.call(this)
    }
    v(ko, Tl);
    function lo(a) {
        return "string" === typeof a ? a : ""
    }
    k = ko.prototype;
    k.T = function() {
        return "text"
    }
    ;
    k.Ub = function(a, b) {
        return this.ge(lo(a), Vl(this, b))
    }
    ;
    k.Oa = function(a, b) {
        return this.Hg(lo(a), Vl(this, b))
    }
    ;
    k.Vc = function(a, b) {
        return this.Bd(lo(a), Vl(this, b))
    }
    ;
    k.nb = function() {
        return this.defaultDataProjection
    }
    ;
    k.Fd = function(a, b) {
        return this.qe(a, Vl(this, b))
    }
    ;
    k.Xb = function(a, b) {
        return this.ah(a, Vl(this, b))
    }
    ;
    k.dd = function(a, b) {
        return this.Gd(a, Vl(this, b))
    }
    ;
    function mo(a) {
        a = a ? a : {};
        Tl.call(this);
        this.defaultDataProjection = Qb("EPSG:4326");
        this.b = a.altitudeMode ? a.altitudeMode : "none"
    }
    v(mo, ko);
    var no = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/
      , oo = /^H.([A-Z]{3}).*?:(.*)/
      , po = /^HFDTE(\d{2})(\d{2})(\d{2})/
      , qo = /\r\n|\r|\n/;
    k = mo.prototype;
    k.ge = function(a, b) {
        var c = this.b
          , d = a.split(qo);
        a = {};
        var e = [], f = 2E3, g = 0, h = 1, l = -1, m;
        var n = 0;
        for (m = d.length; n < m; ++n) {
            var p = d[n], q;
            if ("B" == p.charAt(0)) {
                if (q = no.exec(p)) {
                    p = parseInt(q[1], 10);
                    var t = parseInt(q[2], 10)
                      , u = parseInt(q[3], 10)
                      , x = parseInt(q[4], 10) + parseInt(q[5], 10) / 6E4;
                    "S" == q[6] && (x = -x);
                    var B = parseInt(q[7], 10) + parseInt(q[8], 10) / 6E4;
                    "W" == q[9] && (B = -B);
                    e.push(B, x);
                    "none" != c && e.push("gps" == c ? parseInt(q[11], 10) : "barometric" == c ? parseInt(q[12], 10) : 0);
                    q = Date.UTC(f, g, h, p, t, u);
                    q < l && (q = Date.UTC(f, g, h + 1, p, t, u));
                    e.push(q / 1E3);
                    l = q
                }
            } else
                "H" == p.charAt(0) && ((q = po.exec(p)) ? (h = parseInt(q[1], 10),
                g = parseInt(q[2], 10) - 1,
                f = 2E3 + parseInt(q[3], 10)) : (q = oo.exec(p)) && (a[q[1]] = q[2].trim()))
        }
        if (!e.length)
            return null;
        d = new M(null);
        d.aa("none" == c ? "XYM" : "XYZM", e);
        b = new wl(Wl(d, !1, b));
        b.H(a);
        return b
    }
    ;
    k.Hg = function(a, b) {
        return (a = this.ge(a, b)) ? [a] : []
    }
    ;
    k.qe = function() {}
    ;
    k.ah = function() {}
    ;
    k.Gd = function() {}
    ;
    k.Bd = function() {}
    ;
    function ro(a, b, c, d, e, f) {
        Nc.call(this);
        this.j = null;
        this.M = a ? a : new Image;
        null !== d && (this.M.crossOrigin = d);
        this.c = f ? document.createElement("CANVAS") : null;
        this.g = f;
        this.i = null;
        this.f = e;
        this.a = c;
        this.l = b;
        this.o = !1;
        2 == this.f && so(this)
    }
    v(ro, Nc);
    function so(a) {
        var b = gd(1, 1);
        try {
            b.drawImage(a.M, 0, 0),
            b.getImageData(0, 0, 1, 1)
        } catch (c) {
            a.o = !0
        }
    }
    ro.prototype.v = function() {
        this.f = 3;
        this.i.forEach(zc);
        this.i = null;
        this.b("change")
    }
    ;
    ro.prototype.u = function() {
        this.f = 2;
        this.a && (this.M.width = this.a[0],
        this.M.height = this.a[1]);
        this.a = [this.M.width, this.M.height];
        this.i.forEach(zc);
        this.i = null;
        so(this);
        if (!this.o && null !== this.g) {
            this.c.width = this.M.width;
            this.c.height = this.M.height;
            var a = this.c.getContext("2d");
            a.drawImage(this.M, 0, 0);
            for (var b = a.getImageData(0, 0, this.M.width, this.M.height), c = b.data, d = this.g[0] / 255, e = this.g[1] / 255, f = this.g[2] / 255, g = 0, h = c.length; g < h; g += 4)
                c[g] *= d,
                c[g + 1] *= e,
                c[g + 2] *= f;
            a.putImageData(b, 0, 0)
        }
        this.b("change")
    }
    ;
    ro.prototype.Y = function() {
        return this.c ? this.c : this.M
    }
    ;
    ro.prototype.load = function() {
        if (0 == this.f) {
            this.f = 1;
            this.i = [Gc(this.M, "error", this.v, this), Gc(this.M, "load", this.u, this)];
            try {
                this.M.src = this.l
            } catch (a) {
                this.v()
            }
        }
    }
    ;
    function to(a) {
        a = a || {};
        this.l = void 0 !== a.anchor ? a.anchor : [.5, .5];
        this.u = null;
        this.f = void 0 !== a.anchorOrigin ? a.anchorOrigin : "top-left";
        this.B = void 0 !== a.anchorXUnits ? a.anchorXUnits : "fraction";
        this.C = void 0 !== a.anchorYUnits ? a.anchorYUnits : "fraction";
        this.qa = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        var b = void 0 !== a.img ? a.img : null
          , c = void 0 !== a.imgSize ? a.imgSize : null
          , d = a.src;
        va(!(void 0 !== d && b), 4);
        va(!b || b && c, 5);
        void 0 !== d && d.length || !b || (d = b.src || w(b).toString());
        va(void 0 !== d && 0 < d.length, 6);
        var e = void 0 !== a.src ? 0 : 2;
        this.j = void 0 !== a.color ? bd(a.color) : null;
        var f = this.qa
          , g = this.j
          , h = Bh.get(d, f, g);
        h || (h = new ro(b,d,c,f,e,g),
        Bh.set(d, f, g, h));
        this.b = h;
        this.pa = void 0 !== a.offset ? a.offset : [0, 0];
        this.c = void 0 !== a.offsetOrigin ? a.offsetOrigin : "top-left";
        this.R = null;
        this.D = void 0 !== a.size ? a.size : null;
        kl.call(this, {
            opacity: void 0 !== a.opacity ? a.opacity : 1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: void 0 !== a.scale ? a.scale : 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0,
            rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1
        })
    }
    v(to, kl);
    k = to.prototype;
    k.clone = function() {
        var a = this.Y(1);
        if (2 === this.b.f)
            if ("IMG" === a.tagName.toUpperCase())
                var b = a.cloneNode(!0);
            else {
                b = document.createElement("canvas");
                var c = b.getContext("2d");
                b.width = a.width;
                b.height = a.height;
                c.drawImage(a, 0, 0)
            }
        return new to({
            anchor: this.l.slice(),
            anchorOrigin: this.f,
            anchorXUnits: this.B,
            anchorYUnits: this.C,
            crossOrigin: this.qa,
            color: this.j && this.j.slice ? this.j.slice() : this.j || void 0,
            img: b ? b : void 0,
            imgSize: b ? this.b.a.slice() : void 0,
            src: b ? void 0 : this.b.l,
            offset: this.pa.slice(),
            offsetOrigin: this.c,
            size: null !== this.D ? this.D.slice() : void 0,
            opacity: this.i,
            scale: this.a,
            snapToPixel: this.v,
            rotation: this.g,
            rotateWithView: this.o
        })
    }
    ;
    k.Jc = function() {
        if (this.u)
            return this.u;
        var a = this.l
          , b = this.ic();
        if ("fraction" == this.B || "fraction" == this.C) {
            if (!b)
                return null;
            a = this.l.slice();
            "fraction" == this.B && (a[0] *= b[0]);
            "fraction" == this.C && (a[1] *= b[1])
        }
        if ("top-left" != this.f) {
            if (!b)
                return null;
            a === this.l && (a = this.l.slice());
            if ("top-right" == this.f || "bottom-right" == this.f)
                a[0] = -a[0] + b[0];
            if ("bottom-left" == this.f || "bottom-right" == this.f)
                a[1] = -a[1] + b[1]
        }
        return this.u = a
    }
    ;
    k.Yo = function() {
        return this.j
    }
    ;
    k.Y = function(a) {
        return this.b.Y(a)
    }
    ;
    k.Ie = function() {
        return this.b.a
    }
    ;
    k.hf = function() {
        return this.b.f
    }
    ;
    k.yg = function() {
        var a = this.b;
        if (!a.j)
            if (a.o) {
                var b = a.a[0]
                  , c = a.a[1]
                  , d = gd(b, c);
                d.fillRect(0, 0, b, c);
                a.j = d.canvas
            } else
                a.j = a.M;
        return a.j
    }
    ;
    k.Rc = function() {
        if (this.R)
            return this.R;
        var a = this.pa;
        if ("top-left" != this.c) {
            var b = this.ic()
              , c = this.b.a;
            if (!b || !c)
                return null;
            a = a.slice();
            if ("top-right" == this.c || "bottom-right" == this.c)
                a[0] = c[0] - b[0] - a[0];
            if ("bottom-left" == this.c || "bottom-right" == this.c)
                a[1] = c[1] - b[1] - a[1]
        }
        return this.R = a
    }
    ;
    k.Zo = function() {
        return this.b.l
    }
    ;
    k.ic = function() {
        return this.D ? this.D : this.b.a
    }
    ;
    k.Wh = function(a, b) {
        return y(this.b, "change", a, b)
    }
    ;
    k.load = function() {
        this.b.load()
    }
    ;
    k.Lj = function(a, b) {
        Hc(this.b, "change", a, b)
    }
    ;
    function uo(a) {
        a = a || {};
        this.a = a.font;
        this.i = a.rotation;
        this.l = a.rotateWithView;
        this.b = a.scale;
        this.ua = a.text;
        this.g = a.textAlign;
        this.j = a.textBaseline;
        this.Wa = void 0 !== a.fill ? a.fill : new pl({
            color: "#333"
        });
        this.Ua = void 0 !== a.stroke ? a.stroke : null;
        this.f = void 0 !== a.offsetX ? a.offsetX : 0;
        this.c = void 0 !== a.offsetY ? a.offsetY : 0
    }
    k = uo.prototype;
    k.clone = function() {
        return new uo({
            font: this.a,
            rotation: this.i,
            rotateWithView: this.l,
            scale: this.b,
            text: this.Ja(),
            textAlign: this.g,
            textBaseline: this.j,
            fill: this.Da() ? this.Da().clone() : void 0,
            stroke: this.Ea() ? this.Ea().clone() : void 0,
            offsetX: this.f,
            offsetY: this.c
        })
    }
    ;
    k.Zk = function() {
        return this.a
    }
    ;
    k.ol = function() {
        return this.f
    }
    ;
    k.pl = function() {
        return this.c
    }
    ;
    k.Da = function() {
        return this.Wa
    }
    ;
    k.ep = function() {
        return this.l
    }
    ;
    k.fp = function() {
        return this.i
    }
    ;
    k.gp = function() {
        return this.b
    }
    ;
    k.Ea = function() {
        return this.Ua
    }
    ;
    k.Ja = function() {
        return this.ua
    }
    ;
    k.zl = function() {
        return this.g
    }
    ;
    k.Al = function() {
        return this.j
    }
    ;
    k.xj = function(a) {
        this.a = a
    }
    ;
    k.Cj = function(a) {
        this.f = a
    }
    ;
    k.Dj = function(a) {
        this.c = a
    }
    ;
    k.zf = function(a) {
        this.Wa = a
    }
    ;
    k.hp = function(a) {
        this.i = a
    }
    ;
    k.bj = function(a) {
        this.b = a
    }
    ;
    k.Af = function(a) {
        this.Ua = a
    }
    ;
    k.Cd = function(a) {
        this.ua = a
    }
    ;
    k.Fj = function(a) {
        this.g = a
    }
    ;
    k.vq = function(a) {
        this.j = a
    }
    ;
    function vo(a) {
        a = a ? a : {};
        Rm.call(this);
        wo || (xo = [255, 255, 255, 1],
        yo = new pl({
            color: xo
        }),
        zo = [20, 2],
        Ao = Bo = "pixels",
        Co = [64, 64],
        Do = "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png",
        Eo = .5,
        Fo = new to({
            anchor: zo,
            anchorOrigin: "bottom-left",
            anchorXUnits: Bo,
            anchorYUnits: Ao,
            crossOrigin: "anonymous",
            rotation: 0,
            scale: Eo,
            size: Co,
            src: Do
        }),
        Go = "NO_IMAGE",
        Ho = new zj({
            color: xo,
            width: 1
        }),
        Io = new zj({
            color: [51, 51, 51, 1],
            width: 2
        }),
        Jo = new uo({
            font: "bold 16px Helvetica",
            fill: yo,
            stroke: Io,
            scale: .8
        }),
        Ko = new ql({
            fill: yo,
            image: Fo,
            text: Jo,
            stroke: Ho,
            zIndex: 0
        }),
        wo = [Ko]);
        this.defaultDataProjection = Qb("EPSG:4326");
        this.a = a.defaultStyle ? a.defaultStyle : wo;
        this.c = void 0 !== a.extractStyles ? a.extractStyles : !0;
        this.j = void 0 !== a.writeStyles ? a.writeStyles : !0;
        this.b = {};
        this.g = void 0 !== a.showPointNames ? a.showPointNames : !0
    }
    var wo, xo, yo, zo, Bo, Ao, Co, Do, Eo, Fo, Go, Ho, Io, Jo, Ko;
    v(vo, Rm);
    var Lo = ["http://www.google.com/kml/ext/2.2"]
      , Mo = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"]
      , No = {
        fraction: "fraction",
        pixels: "pixels",
        insetPixels: "pixels"
    };
    function Oo(a, b) {
        var c = [0, 0]
          , d = "start";
        if (a.Y()) {
            var e = a.Y().Ie();
            null === e && (e = Co);
            2 == e.length && (d = a.Y().a,
            c[0] = d * e[0] / 2,
            c[1] = -d * e[1] / 2,
            d = "left")
        }
        null !== a.Ja() ? (e = a.Ja(),
        a = e.clone(),
        a.xj(e.a || Jo.a),
        a.bj(e.b || Jo.b),
        a.zf(e.Da() || Jo.Da()),
        a.Af(e.Ea() || Io)) : a = Jo.clone();
        a.Cd(b);
        a.Cj(c[0]);
        a.Dj(c[1]);
        a.Fj(d);
        return new ql({
            text: a
        })
    }
    function Po(a, b, c, d, e) {
        return function() {
            var f = e
              , g = "";
            f && this.V() && (f = "Point" === this.V().T());
            f && (g = this.get("name"),
            f = f && g);
            if (a)
                return f ? (f = Oo(a[0], g),
                a.concat(f)) : a;
            if (b) {
                var h = Qo(b, c, d);
                return f ? (f = Oo(h[0], g),
                h.concat(f)) : h
            }
            return f ? (f = Oo(c[0], g),
            c.concat(f)) : c
        }
    }
    function Qo(a, b, c) {
        return Array.isArray(a) ? a : "string" === typeof a ? (!(a in c) && "#" + a in c && (a = "#" + a),
        Qo(c[a], b, c)) : b
    }
    function Ro(a) {
        a = Al(a, !1);
        if (a = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a))
            return a = a[1],
            [parseInt(a.substr(6, 2), 16), parseInt(a.substr(4, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(0, 2), 16) / 255]
    }
    function So(a) {
        a = Al(a, !1);
        for (var b = [], c = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i, d; d = c.exec(a); )
            b.push(parseFloat(d[1]), parseFloat(d[2]), d[3] ? parseFloat(d[3]) : 0),
            a = a.substr(d[0].length);
        if ("" === a)
            return b
    }
    function To(a) {
        var b = Al(a, !1).trim();
        return a.baseURI && "about:blank" !== a.baseURI ? (new URL(b,a.baseURI)).href : b
    }
    function Uo(a) {
        return Zm(a)
    }
    function Vo(a, b) {
        return L(null, Wo, a, b)
    }
    function Xo(a, b) {
        if (b = L({
            A: [],
            Oj: []
        }, Yo, a, b)) {
            a = b.A;
            b = b.Oj;
            var c;
            var d = 0;
            for (c = Math.min(a.length, b.length); d < c; ++d)
                a[4 * d + 3] = b[d];
            b = new M(null);
            b.aa("XYZM", a);
            return b
        }
    }
    function Zo(a, b) {
        var c = L({}, $o, a, b);
        if (a = L(null, ap, a, b))
            return b = new M(null),
            b.aa("XYZ", a),
            b.H(c),
            b
    }
    function bp(a, b) {
        var c = L({}, $o, a, b);
        if (a = L(null, ap, a, b))
            return b = new D(null),
            b.aa("XYZ", a, [a.length]),
            b.H(c),
            b
    }
    function cp(a, b) {
        a = L([], dp, a, b);
        if (!a)
            return null;
        if (!a.length)
            return new Im(a);
        var c = !0, d = a[0].T(), e;
        var f = 1;
        for (e = a.length; f < e; ++f)
            if (b = a[f],
            b.T() != d) {
                c = !1;
                break
            }
        if (c)
            if ("Point" == d) {
                var g = a[0];
                c = g.ja;
                d = g.ba();
                f = 1;
                for (e = a.length; f < e; ++f)
                    b = a[f],
                    ka(d, b.ba());
                g = new O(null);
                g.aa(c, d);
                ep(g, a)
            } else
                "LineString" == d ? (g = new N(null),
                bm(g, a),
                ep(g, a)) : "Polygon" == d ? (g = new P(null),
                dm(g, a),
                ep(g, a)) : "GeometryCollection" == d ? g = new Im(a) : va(!1, 37);
        else
            g = new Im(a);
        return g
    }
    function fp(a, b) {
        var c = L({}, $o, a, b);
        if (a = L(null, ap, a, b))
            return b = new C(null),
            b.aa("XYZ", a),
            b.H(c),
            b
    }
    function gp(a, b) {
        var c = L({}, $o, a, b);
        if ((a = L([null], hp, a, b)) && a[0]) {
            b = new D(null);
            var d = a[0], e = [d.length], f;
            var g = 1;
            for (f = a.length; g < f; ++g)
                ka(d, a[g]),
                e.push(d.length);
            b.aa("XYZ", d, e);
            b.H(c);
            return b
        }
    }
    function ip(a, b) {
        b = L({}, jp, a, b);
        if (!b)
            return null;
        a = "fillStyle"in b ? b.fillStyle : yo;
        var c = b.fill;
        void 0 === c || c || (a = null);
        c = "imageStyle"in b ? b.imageStyle : Fo;
        c == Go && (c = void 0);
        var d = "textStyle"in b ? b.textStyle : Jo
          , e = "strokeStyle"in b ? b.strokeStyle : Ho;
        b = b.outline;
        void 0 === b || b || (e = null);
        return [new ql({
            fill: a,
            image: c,
            stroke: e,
            text: d,
            zIndex: void 0
        })]
    }
    function ep(a, b) {
        var c = b.length, d = Array(b.length), e = Array(b.length), f = Array(b.length), g, h, l;
        var m = h = l = !1;
        for (g = 0; g < c; ++g) {
            var n = b[g];
            d[g] = n.get("extrude");
            e[g] = n.get("tessellate");
            f[g] = n.get("altitudeMode");
            m = m || void 0 !== d[g];
            h = h || void 0 !== e[g];
            l = l || f[g]
        }
        m && a.set("extrude", d);
        h && a.set("tessellate", e);
        l && a.set("altitudeMode", f)
    }
    function kp(a, b) {
        Pl(lp, a, b)
    }
    function mp(a, b) {
        Pl(np, a, b)
    }
    var op = K(Mo, {
        displayName: I(Q),
        value: I(Q)
    })
      , lp = K(Mo, {
        Data: function(a, b) {
            var c = a.getAttribute("name");
            Pl(op, a, b);
            a = b[b.length - 1];
            null !== c ? a[c] = a.value : null !== a.displayName && (a[a.displayName] = a.value);
            delete a.value
        },
        SchemaData: function(a, b) {
            Pl(pp, a, b)
        }
    })
      , np = K(Mo, {
        LatLonAltBox: function(a, b) {
            if (a = L({}, qp, a, b))
                b = b[b.length - 1],
                b.extent = [parseFloat(a.west), parseFloat(a.south), parseFloat(a.east), parseFloat(a.north)],
                b.altitudeMode = a.altitudeMode,
                b.minAltitude = parseFloat(a.minAltitude),
                b.maxAltitude = parseFloat(a.maxAltitude)
        },
        Lod: function(a, b) {
            if (a = L({}, rp, a, b))
                b = b[b.length - 1],
                b.minLodPixels = parseFloat(a.minLodPixels),
                b.maxLodPixels = parseFloat(a.maxLodPixels),
                b.minFadeExtent = parseFloat(a.minFadeExtent),
                b.maxFadeExtent = parseFloat(a.maxFadeExtent)
        }
    })
      , qp = K(Mo, {
        altitudeMode: I(Q),
        minAltitude: I(Zm),
        maxAltitude: I(Zm),
        north: I(Zm),
        south: I(Zm),
        east: I(Zm),
        west: I(Zm)
    })
      , rp = K(Mo, {
        minLodPixels: I(Zm),
        maxLodPixels: I(Zm),
        minFadeExtent: I(Zm),
        maxFadeExtent: I(Zm)
    })
      , $o = K(Mo, {
        extrude: I(Wm),
        tessellate: I(Wm),
        altitudeMode: I(Q)
    })
      , Wo = K(Mo, {
        coordinates: Hl(So)
    })
      , hp = K(Mo, {
        innerBoundaryIs: function(a, b) {
            (a = L(void 0, sp, a, b)) && b[b.length - 1].push(a)
        },
        outerBoundaryIs: function(a, b) {
            (a = L(void 0, tp, a, b)) && (b[b.length - 1][0] = a)
        }
    })
      , Yo = K(Mo, {
        when: function(a, b) {
            b = b[b.length - 1].Oj;
            a = Al(a, !1);
            a = Date.parse(a);
            b.push(isNaN(a) ? 0 : a)
        }
    }, K(Lo, {
        coord: function(a, b) {
            b = b[b.length - 1].A;
            a = Al(a, !1);
            (a = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(a)) ? b.push(parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]), 0) : b.push(0, 0, 0, 0)
        }
    }))
      , ap = K(Mo, {
        coordinates: Hl(So)
    })
      , up = K(Mo, {
        href: I(To)
    }, K(Lo, {
        x: I(Zm),
        y: I(Zm),
        w: I(Zm),
        h: I(Zm)
    }))
      , vp = K(Mo, {
        Icon: I(function(a, b) {
            return (a = L({}, up, a, b)) ? a : null
        }),
        heading: I(Zm),
        hotSpot: I(function(a) {
            var b = a.getAttribute("xunits")
              , c = a.getAttribute("yunits");
            var d = "insetPixels" !== b ? "insetPixels" !== c ? "bottom-left" : "top-left" : "insetPixels" !== c ? "bottom-right" : "top-right";
            return {
                x: parseFloat(a.getAttribute("x")),
                bh: No[b],
                y: parseFloat(a.getAttribute("y")),
                dh: No[c],
                origin: d
            }
        }),
        scale: I(Uo)
    })
      , sp = K(Mo, {
        LinearRing: Hl(Vo)
    })
      , wp = K(Mo, {
        color: I(Ro),
        scale: I(Uo)
    })
      , xp = K(Mo, {
        color: I(Ro),
        width: I(Zm)
    })
      , dp = K(Mo, {
        LineString: Gl(Zo),
        LinearRing: Gl(bp),
        MultiGeometry: Gl(cp),
        Point: Gl(fp),
        Polygon: Gl(gp)
    })
      , yp = K(Lo, {
        Track: Gl(Xo)
    })
      , Ap = K(Mo, {
        ExtendedData: kp,
        Region: mp,
        Link: function(a, b) {
            Pl(zp, a, b)
        },
        address: I(Q),
        description: I(Q),
        name: I(Q),
        open: I(Wm),
        phoneNumber: I(Q),
        visibility: I(Wm)
    })
      , zp = K(Mo, {
        href: I(To)
    })
      , tp = K(Mo, {
        LinearRing: Hl(Vo)
    })
      , Bp = K(Mo, {
        Style: I(ip),
        key: I(Q),
        styleUrl: I(To)
    })
      , Dp = K(Mo, {
        ExtendedData: kp,
        Region: mp,
        MultiGeometry: I(cp, "geometry"),
        LineString: I(Zo, "geometry"),
        LinearRing: I(bp, "geometry"),
        Point: I(fp, "geometry"),
        Polygon: I(gp, "geometry"),
        Style: I(ip),
        StyleMap: function(a, b) {
            if (a = L(void 0, Cp, a, b))
                b = b[b.length - 1],
                Array.isArray(a) ? b.Style = a : "string" === typeof a ? b.styleUrl = a : va(!1, 38)
        },
        address: I(Q),
        description: I(Q),
        name: I(Q),
        open: I(Wm),
        phoneNumber: I(Q),
        styleUrl: I(To),
        visibility: I(Wm)
    }, K(Lo, {
        MultiTrack: I(function(a, b) {
            if (a = L([], yp, a, b))
                return b = new N(null),
                bm(b, a),
                b
        }, "geometry"),
        Track: I(Xo, "geometry")
    }))
      , Ep = K(Mo, {
        color: I(Ro),
        fill: I(Wm),
        outline: I(Wm)
    })
      , pp = K(Mo, {
        SimpleData: function(a, b) {
            var c = a.getAttribute("name");
            null !== c && (a = Q(a),
            b[b.length - 1][c] = a)
        }
    })
      , jp = K(Mo, {
        IconStyle: function(a, b) {
            if (a = L({}, vp, a, b)) {
                b = b[b.length - 1];
                var c = "Icon"in a ? a.Icon : {}, d = !("Icon"in a) || 0 < Object.keys(c).length, e, f = c.href;
                f ? e = f : d && (e = Do);
                f = "bottom-left";
                var g = a.hotSpot;
                if (g) {
                    var h = [g.x, g.y];
                    var l = g.bh;
                    var m = g.dh;
                    f = g.origin
                } else
                    e === Do ? (h = zo,
                    l = Bo,
                    m = Ao) : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(e) && (h = [.5, 0],
                    m = l = "fraction");
                var n;
                g = c.x;
                var p = c.y;
                void 0 !== g && void 0 !== p && (n = [g, p]);
                var q;
                g = c.w;
                c = c.h;
                void 0 !== g && void 0 !== c && (q = [g, c]);
                var t;
                c = a.heading;
                void 0 !== c && (t = Fa(c));
                a = a.scale;
                d ? (e == Do && (q = Co,
                void 0 === a && (a = Eo)),
                e = new to({
                    anchor: h,
                    anchorOrigin: f,
                    anchorXUnits: l,
                    anchorYUnits: m,
                    crossOrigin: "anonymous",
                    offset: n,
                    offsetOrigin: "bottom-left",
                    rotation: t,
                    scale: a,
                    size: q,
                    src: e
                }),
                b.imageStyle = e) : b.imageStyle = Go
            }
        },
        LabelStyle: function(a, b) {
            (a = L({}, wp, a, b)) && (b[b.length - 1].textStyle = new uo({
                fill: new pl({
                    color: "color"in a ? a.color : xo
                }),
                scale: a.scale
            }))
        },
        LineStyle: function(a, b) {
            (a = L({}, xp, a, b)) && (b[b.length - 1].strokeStyle = new zj({
                color: "color"in a ? a.color : xo,
                width: "width"in a ? a.width : 1
            }))
        },
        PolyStyle: function(a, b) {
            if (a = L({}, Ep, a, b)) {
                b = b[b.length - 1];
                b.fillStyle = new pl({
                    color: "color"in a ? a.color : xo
                });
                var c = a.fill;
                void 0 !== c && (b.fill = c);
                a = a.outline;
                void 0 !== a && (b.outline = a)
            }
        }
    })
      , Cp = K(Mo, {
        Pair: function(a, b) {
            if (a = L({}, Bp, a, b)) {
                var c = a.key;
                c && "normal" == c && ((c = a.styleUrl) && (b[b.length - 1] = c),
                (a = a.Style) && (b[b.length - 1] = a))
            }
        }
    });
    k = vo.prototype;
    k.Dg = function(a, b) {
        var c = K(Mo, {
            Document: Fl(this.Dg, this),
            Folder: Fl(this.Dg, this),
            Placemark: Gl(this.Lg, this),
            Style: this.Wp.bind(this),
            StyleMap: this.Vp.bind(this)
        });
        if (a = L([], c, a, b, this))
            return a
    }
    ;
    k.Lg = function(a, b) {
        var c = L({
            geometry: null
        }, Dp, a, b);
        if (c) {
            var d = new wl;
            a = a.getAttribute("id");
            null !== a && d.kc(a);
            b = b[0];
            (a = c.geometry) && Wl(a, !1, b);
            d.Ra(a);
            delete c.geometry;
            this.c && d.pg(Po(c.Style, c.styleUrl, this.a, this.b, this.g));
            delete c.Style;
            d.H(c);
            return d
        }
    }
    ;
    k.Wp = function(a, b) {
        var c = a.getAttribute("id");
        null !== c && (b = ip(a, b)) && (a = a.baseURI && "about:blank" !== a.baseURI ? (new URL("#" + c,a.baseURI)).href : "#" + c,
        this.b[a] = b)
    }
    ;
    k.Vp = function(a, b) {
        var c = a.getAttribute("id");
        null !== c && (b = L(void 0, Cp, a, b)) && (a = a.baseURI && "about:blank" !== a.baseURI ? (new URL("#" + c,a.baseURI)).href : "#" + c,
        this.b[a] = b)
    }
    ;
    k.Fg = function(a, b) {
        return ha(Mo, a.namespaceURI) ? (a = this.Lg(a, [Ul(this, a, b)])) ? a : null : null
    }
    ;
    k.Ac = function(a, b) {
        if (!ha(Mo, a.namespaceURI))
            return [];
        var c = a.localName;
        if ("Document" == c || "Folder" == c)
            return (c = this.Dg(a, [Ul(this, a, b)])) ? c : [];
        if ("Placemark" == c)
            return (b = this.Lg(a, [Ul(this, a, b)])) ? [b] : [];
        if ("kml" == c) {
            c = [];
            for (a = a.firstElementChild; a; a = a.nextElementSibling) {
                var d = this.Ac(a, b);
                d && ka(c, d)
            }
            return c
        }
        return []
    }
    ;
    k.Pp = function(a) {
        if (Cl(a))
            return Fp(this, a);
        if (Dl(a))
            return Gp(this, a);
        if ("string" === typeof a)
            return a = El(a),
            Fp(this, a)
    }
    ;
    function Fp(a, b) {
        for (b = b.firstChild; b; b = b.nextSibling)
            if (b.nodeType == Node.ELEMENT_NODE) {
                var c = Gp(a, b);
                if (c)
                    return c
            }
    }
    function Gp(a, b) {
        var c;
        for (c = b.firstElementChild; c; c = c.nextElementSibling)
            if (ha(Mo, c.namespaceURI) && "name" == c.localName)
                return Q(c);
        for (c = b.firstElementChild; c; c = c.nextElementSibling)
            if (b = c.localName,
            ha(Mo, c.namespaceURI) && ("Document" == b || "Folder" == b || "Placemark" == b || "kml" == b) && (b = Gp(a, c)))
                return b
    }
    k.Qp = function(a) {
        var b = [];
        Cl(a) ? ka(b, Hp(this, a)) : Dl(a) ? ka(b, Ip(this, a)) : "string" === typeof a && (a = El(a),
        ka(b, Hp(this, a)));
        return b
    }
    ;
    function Hp(a, b) {
        var c = [];
        for (b = b.firstChild; b; b = b.nextSibling)
            b.nodeType == Node.ELEMENT_NODE && ka(c, Ip(a, b));
        return c
    }
    function Ip(a, b) {
        var c, d = [];
        for (c = b.firstElementChild; c; c = c.nextElementSibling)
            if (ha(Mo, c.namespaceURI) && "NetworkLink" == c.localName) {
                var e = L({}, Ap, c, []);
                d.push(e)
            }
        for (c = b.firstElementChild; c; c = c.nextElementSibling)
            b = c.localName,
            !ha(Mo, c.namespaceURI) || "Document" != b && "Folder" != b && "kml" != b || ka(d, Ip(a, c));
        return d
    }
    k.Tp = function(a) {
        var b = [];
        Cl(a) ? ka(b, Jp(this, a)) : Dl(a) ? ka(b, this.wf(a)) : "string" === typeof a && (a = El(a),
        ka(b, Jp(this, a)));
        return b
    }
    ;
    function Jp(a, b) {
        var c = [];
        for (b = b.firstChild; b; b = b.nextSibling)
            b.nodeType == Node.ELEMENT_NODE && ka(c, a.wf(b));
        return c
    }
    k.wf = function(a) {
        var b, c = [];
        for (b = a.firstElementChild; b; b = b.nextElementSibling)
            if (ha(Mo, b.namespaceURI) && "Region" == b.localName) {
                var d = L({}, np, b, []);
                c.push(d)
            }
        for (b = a.firstElementChild; b; b = b.nextElementSibling)
            a = b.localName,
            !ha(Mo, b.namespaceURI) || "Document" != a && "Folder" != a && "kml" != a || ka(c, this.wf(b));
        return c
    }
    ;
    function Kp(a, b) {
        b = bd(b);
        b = [255 * (4 == b.length ? b[3] : 1), b[2], b[1], b[0]];
        var c;
        for (c = 0; 4 > c; ++c) {
            var d = parseInt(b[c], 10).toString(16);
            b[c] = 1 == d.length ? "0" + d : d
        }
        dn(a, b.join(""))
    }
    function Lp(a, b, c) {
        a = {
            node: a
        };
        var d = b.T();
        if ("GeometryCollection" == d) {
            var e = b.He();
            var f = Mp
        } else
            "MultiPoint" == d ? (e = b.de(),
            f = Np) : "MultiLineString" == d ? (e = b.kd(),
            f = Op) : "MultiPolygon" == d ? (e = b.Zd(),
            f = Pp) : va(!1, 39);
        Ql(a, Qp, f, e, c)
    }
    function Rp(a, b, c) {
        Ql({
            node: a
        }, Sp, Tp, [b], c)
    }
    function Up(a, b, c) {
        var d = {
            node: a
        };
        b.a && a.setAttribute("id", b.a);
        a = b.N();
        var e = {
            address: 1,
            description: 1,
            name: 1,
            open: 1,
            phoneNumber: 1,
            styleUrl: 1,
            visibility: 1
        };
        e[b.c] = 1;
        var f = Object.keys(a || {}).sort().filter(function(a) {
            return !e[a]
        });
        if (0 < f.length) {
            var g = Ol(a, f);
            Ql(d, Vp, Wp, [{
                names: f,
                values: g
            }], c)
        }
        if (f = b.bb())
            if (f = f.call(b, 0))
                f = Array.isArray(f) ? f[0] : f,
                this.j && (a.Style = f),
                (f = f.Ja()) && (a.name = f.Ja());
        f = Xp[c[c.length - 1].node.namespaceURI];
        a = Ol(a, f);
        Ql(d, Vp, Nl, a, c, f);
        a = c[0];
        (b = b.V()) && (b = Wl(b, !0, a));
        Ql(d, Vp, Mp, [b], c)
    }
    function Yp(a, b, c) {
        var d = b.ba();
        a = {
            node: a
        };
        a.layout = b.ja;
        a.stride = b.ma();
        b = b.N();
        b.coordinates = d;
        d = Zp[c[c.length - 1].node.namespaceURI];
        b = Ol(b, d);
        Ql(a, $p, Nl, b, c, d)
    }
    function aq(a, b, c) {
        b = b.Yd();
        var d = b.shift();
        a = {
            node: a
        };
        Ql(a, bq, cq, b, c);
        Ql(a, bq, dq, [d], c)
    }
    function eq(a, b) {
        en(a, Math.round(1E6 * b) / 1E6)
    }
    var fq = K(Mo, ["Document", "Placemark"])
      , iq = K(Mo, {
        Document: J(function(a, b, c) {
            Ql({
                node: a
            }, gq, hq, b, c, void 0, this)
        }),
        Placemark: J(Up)
    })
      , gq = K(Mo, {
        Placemark: J(Up)
    })
      , jq = K(Mo, {
        Data: J(function(a, b, c) {
            a.setAttribute("name", b.name);
            a = {
                node: a
            };
            b = b.value;
            "object" == typeof b ? (null !== b && b.displayName && Ql(a, jq, Nl, [b.displayName], c, ["displayName"]),
            null !== b && b.value && Ql(a, jq, Nl, [b.value], c, ["value"])) : Ql(a, jq, Nl, [b], c, ["value"])
        }),
        value: J(function(a, b) {
            dn(a, b)
        }),
        displayName: J(function(a, b) {
            a.appendChild(yl.createCDATASection(b))
        })
    })
      , kq = {
        Point: "Point",
        LineString: "LineString",
        LinearRing: "LinearRing",
        Polygon: "Polygon",
        MultiPoint: "MultiGeometry",
        MultiLineString: "MultiGeometry",
        MultiPolygon: "MultiGeometry",
        GeometryCollection: "MultiGeometry"
    }
      , lq = K(Mo, ["href"], K(Lo, ["x", "y", "w", "h"]))
      , mq = K(Mo, {
        href: J(dn)
    }, K(Lo, {
        x: J(en),
        y: J(en),
        w: J(en),
        h: J(en)
    }))
      , nq = K(Mo, ["scale", "heading", "Icon", "hotSpot"])
      , pq = K(Mo, {
        Icon: J(function(a, b, c) {
            a = {
                node: a
            };
            var d = lq[c[c.length - 1].node.namespaceURI]
              , e = Ol(b, d);
            Ql(a, mq, Nl, e, c, d);
            d = lq[Lo[0]];
            e = Ol(b, d);
            Ql(a, mq, oq, e, c, d)
        }),
        heading: J(en),
        hotSpot: J(function(a, b) {
            a.setAttribute("x", b.x);
            a.setAttribute("y", b.y);
            a.setAttribute("xunits", b.bh);
            a.setAttribute("yunits", b.dh)
        }),
        scale: J(eq)
    })
      , qq = K(Mo, ["color", "scale"])
      , rq = K(Mo, {
        color: J(Kp),
        scale: J(eq)
    })
      , sq = K(Mo, ["color", "width"])
      , tq = K(Mo, {
        color: J(Kp),
        width: J(en)
    })
      , Sp = K(Mo, {
        LinearRing: J(Yp)
    })
      , Qp = K(Mo, {
        LineString: J(Yp),
        Point: J(Yp),
        Polygon: J(aq),
        GeometryCollection: J(Lp)
    })
      , Xp = K(Mo, "name open visibility address phoneNumber description styleUrl Style".split(" "))
      , Vp = K(Mo, {
        ExtendedData: J(function(a, b, c) {
            a = {
                node: a
            };
            var d = b.names;
            b = b.values;
            for (var e = d.length, f = 0; f < e; f++)
                Ql(a, jq, uq, [{
                    name: d[f],
                    value: b[f]
                }], c)
        }),
        MultiGeometry: J(Lp),
        LineString: J(Yp),
        LinearRing: J(Yp),
        Point: J(Yp),
        Polygon: J(aq),
        Style: J(function(a, b, c) {
            a = {
                node: a
            };
            var d = {}
              , e = b.Da()
              , f = b.Ea()
              , g = b.Y();
            b = b.Ja();
            g instanceof to && (d.IconStyle = g);
            b && (d.LabelStyle = b);
            f && (d.LineStyle = f);
            e && (d.PolyStyle = e);
            b = vq[c[c.length - 1].node.namespaceURI];
            d = Ol(d, b);
            Ql(a, wq, Nl, d, c, b)
        }),
        address: J(dn),
        description: J(dn),
        name: J(dn),
        open: J(cn),
        phoneNumber: J(dn),
        styleUrl: J(dn),
        visibility: J(cn)
    })
      , Zp = K(Mo, ["extrude", "tessellate", "altitudeMode", "coordinates"])
      , $p = K(Mo, {
        extrude: J(cn),
        tessellate: J(cn),
        altitudeMode: J(dn),
        coordinates: J(function(a, b, c) {
            c = c[c.length - 1];
            var d = c.layout;
            c = c.stride;
            var e;
            "XY" == d || "XYM" == d ? e = 2 : "XYZ" == d || "XYZM" == d ? e = 3 : va(!1, 34);
            var f, g = b.length, h = "";
            if (0 < g) {
                h += b[0];
                for (d = 1; d < e; ++d)
                    h += "," + b[d];
                for (f = c; f < g; f += c)
                    for (h += " " + b[f],
                    d = 1; d < e; ++d)
                        h += "," + b[f + d]
            }
            dn(a, h)
        })
    })
      , bq = K(Mo, {
        outerBoundaryIs: J(Rp),
        innerBoundaryIs: J(Rp)
    })
      , xq = K(Mo, {
        color: J(Kp)
    })
      , vq = K(Mo, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"])
      , wq = K(Mo, {
        IconStyle: J(function(a, b, c) {
            a = {
                node: a
            };
            var d = {}
              , e = b.ic()
              , f = b.Ie()
              , g = {
                href: b.b.l
            };
            if (e) {
                g.w = e[0];
                g.h = e[1];
                var h = b.Jc()
                  , l = b.Rc();
                l && f && l[0] && l[1] !== e[1] && (g.x = l[0],
                g.y = f[1] - (l[1] + e[1]));
                !h || h[0] === e[0] / 2 && h[1] === e[1] / 2 || (d.hotSpot = {
                    x: h[0],
                    bh: "pixels",
                    y: e[1] - h[1],
                    dh: "pixels"
                })
            }
            d.Icon = g;
            e = b.a;
            1 !== e && (d.scale = e);
            (b = b.g) && (d.heading = b);
            b = nq[c[c.length - 1].node.namespaceURI];
            d = Ol(d, b);
            Ql(a, pq, Nl, d, c, b)
        }),
        LabelStyle: J(function(a, b, c) {
            a = {
                node: a
            };
            var d = {}
              , e = b.Da();
            e && (d.color = e.b);
            (b = b.b) && 1 !== b && (d.scale = b);
            b = qq[c[c.length - 1].node.namespaceURI];
            d = Ol(d, b);
            Ql(a, rq, Nl, d, c, b)
        }),
        LineStyle: J(function(a, b, c) {
            a = {
                node: a
            };
            var d = sq[c[c.length - 1].node.namespaceURI];
            b = Ol({
                color: b.b,
                width: b.c
            }, d);
            Ql(a, tq, Nl, b, c, d)
        }),
        PolyStyle: J(function(a, b, c) {
            Ql({
                node: a
            }, xq, yq, [b.b], c)
        })
    });
    function oq(a, b, c) {
        return zl(Lo[0], "gx:" + c)
    }
    function hq(a, b) {
        return zl(b[b.length - 1].node.namespaceURI, "Placemark")
    }
    function Mp(a, b) {
        if (a)
            return zl(b[b.length - 1].node.namespaceURI, kq[a.T()])
    }
    var yq = Ll("color")
      , uq = Ll("Data")
      , Wp = Ll("ExtendedData")
      , cq = Ll("innerBoundaryIs")
      , Np = Ll("Point")
      , Op = Ll("LineString")
      , Tp = Ll("LinearRing")
      , Pp = Ll("Polygon")
      , dq = Ll("outerBoundaryIs");
    vo.prototype.Yb = function(a, b) {
        b = Vl(this, b);
        var c = zl(Mo[4], "kml");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:gx", Lo[0]);
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
        var d = {
            node: c
        }
          , e = {};
        1 < a.length ? e.Document = a : 1 == a.length && (e.Placemark = a[0]);
        a = fq[c.namespaceURI];
        e = Ol(e, a);
        Ql(d, iq, Nl, e, [b], a, this);
        return c
    }
    ;
    Ij.Hd = function() {}
    ;
    (function(a) {
        function b(a) {
            this.nc = ArrayBuffer.isView && ArrayBuffer.isView(a) ? a : new Uint8Array(a || 0);
            this.type = this.fa = 0;
            this.length = this.nc.length
        }
        function c(a, b, c) {
            var e = c.nc;
            var f = e[c.fa++];
            var g = (f & 112) >> 4;
            if (128 > f)
                return d(a, g, b);
            f = e[c.fa++];
            g |= (f & 127) << 3;
            if (128 > f)
                return d(a, g, b);
            f = e[c.fa++];
            g |= (f & 127) << 10;
            if (128 > f)
                return d(a, g, b);
            f = e[c.fa++];
            g |= (f & 127) << 17;
            if (128 > f)
                return d(a, g, b);
            f = e[c.fa++];
            g |= (f & 127) << 24;
            if (128 > f)
                return d(a, g, b);
            f = e[c.fa++];
            if (128 > f)
                return d(a, g | (f & 1) << 31, b);
            throw Error("Expected varint not more than 10 bytes");
        }
        function d(a, b, c) {
            return c ? 4294967296 * b + (a >>> 0) : 4294967296 * (b >>> 0) + (a >>> 0)
        }
        var e = {
            read: function(a, b, c, d, e) {
                var f = 8 * e - d - 1;
                var g = (1 << f) - 1
                  , h = g >> 1
                  , l = -7;
                e = c ? e - 1 : 0;
                var m = c ? -1 : 1
                  , x = a[b + e];
                e += m;
                c = x & (1 << -l) - 1;
                x >>= -l;
                for (l += f; 0 < l; c = 256 * c + a[b + e],
                e += m,
                l -= 8)
                    ;
                f = c & (1 << -l) - 1;
                c >>= -l;
                for (l += d; 0 < l; f = 256 * f + a[b + e],
                e += m,
                l -= 8)
                    ;
                if (0 === c)
                    c = 1 - h;
                else {
                    if (c === g)
                        return f ? NaN : Infinity * (x ? -1 : 1);
                    f += Math.pow(2, d);
                    c -= h
                }
                return (x ? -1 : 1) * f * Math.pow(2, c - d)
            },
            write: function(a, b, c, d, e, n) {
                var f, g = 8 * n - e - 1, h = (1 << g) - 1, l = h >> 1, m = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                n = d ? 0 : n - 1;
                var B = d ? 1 : -1
                  , z = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
                b = Math.abs(b);
                isNaN(b) || Infinity === b ? (b = isNaN(b) ? 1 : 0,
                d = h) : (d = Math.floor(Math.log(b) / Math.LN2),
                1 > b * (f = Math.pow(2, -d)) && (d--,
                f *= 2),
                b = 1 <= d + l ? b + m / f : b + m * Math.pow(2, 1 - l),
                2 <= b * f && (d++,
                f /= 2),
                d + l >= h ? (b = 0,
                d = h) : 1 <= d + l ? (b = (b * f - 1) * Math.pow(2, e),
                d += l) : (b = b * Math.pow(2, l - 1) * Math.pow(2, e),
                d = 0));
                for (; 8 <= e; a[c + n] = b & 255,
                n += B,
                b /= 256,
                e -= 8)
                    ;
                d = d << e | b;
                for (g += e; 0 < g; a[c + n] = d & 255,
                n += B,
                d /= 256,
                g -= 8)
                    ;
                a[c + n - B] |= 128 * z
            }
        };
        b.c = 0;
        b.f = 1;
        b.b = 2;
        b.a = 5;
        b.prototype = {
            Ig: function(a, b, c) {
                for (c = c || this.length; this.fa < c; ) {
                    var d = this.La()
                      , e = d >> 3
                      , f = this.fa;
                    this.type = d & 7;
                    a(e, b, this);
                    this.fa === f && this.Aq(d)
                }
                return b
            },
            Lp: function() {
                var a = e.read(this.nc, this.fa, !0, 23, 4);
                this.fa += 4;
                return a
            },
            Hp: function() {
                var a = e.read(this.nc, this.fa, !0, 52, 8);
                this.fa += 8;
                return a
            },
            La: function(a) {
                var b = this.nc;
                var d = b[this.fa++];
                var e = d & 127;
                if (128 > d)
                    return e;
                d = b[this.fa++];
                e |= (d & 127) << 7;
                if (128 > d)
                    return e;
                d = b[this.fa++];
                e |= (d & 127) << 14;
                if (128 > d)
                    return e;
                d = b[this.fa++];
                e |= (d & 127) << 21;
                if (128 > d)
                    return e;
                d = b[this.fa];
                return c(e | (d & 15) << 28, a, this)
            },
            Xp: function() {
                return this.La(!0)
            },
            ie: function() {
                var a = this.La();
                return 1 === a % 2 ? (a + 1) / -2 : a / 2
            },
            Fp: function() {
                return !!this.La()
            },
            Og: function() {
                for (var a = this.La() + this.fa, b = this.nc, c = "", d = this.fa; d < a; ) {
                    var e = b[d]
                      , n = null
                      , p = 239 < e ? 4 : 223 < e ? 3 : 191 < e ? 2 : 1;
                    if (d + p > a)
                        break;
                    if (1 === p)
                        128 > e && (n = e);
                    else if (2 === p) {
                        var q = b[d + 1];
                        128 === (q & 192) && (n = (e & 31) << 6 | q & 63,
                        127 >= n && (n = null))
                    } else if (3 === p) {
                        q = b[d + 1];
                        var t = b[d + 2];
                        128 === (q & 192) && 128 === (t & 192) && (n = (e & 15) << 12 | (q & 63) << 6 | t & 63,
                        2047 >= n || 55296 <= n && 57343 >= n) && (n = null)
                    } else if (4 === p) {
                        q = b[d + 1];
                        t = b[d + 2];
                        var u = b[d + 3];
                        128 === (q & 192) && 128 === (t & 192) && 128 === (u & 192) && (n = (e & 15) << 18 | (q & 63) << 12 | (t & 63) << 6 | u & 63,
                        65535 >= n || 1114112 <= n) && (n = null)
                    }
                    null === n ? (n = 65533,
                    p = 1) : 65535 < n && (n -= 65536,
                    c += String.fromCharCode(n >>> 10 & 1023 | 55296),
                    n = 56320 | n & 1023);
                    c += String.fromCharCode(n);
                    d += p
                }
                this.fa = a;
                return c
            },
            Aq: function(a) {
                a &= 7;
                if (a === b.c)
                    for (; 127 < this.nc[this.fa++]; )
                        ;
                else if (a === b.b)
                    this.fa = this.La() + this.fa;
                else if (a === b.a)
                    this.fa += 4;
                else if (a === b.f)
                    this.fa += 8;
                else
                    throw Error("Unimplemented type: " + a);
            }
        };
        a["default"] = b
    }
    )(Ij.Hd = Ij.Hd || {});
    Ij.Hd = Ij.Hd.default;
    Ij.Gf = {};
    Ij.Gf.Kf = function() {}
    ;
    (function(a) {
        function b(a, b) {
            this.layers = a.Ig(l, {}, b)
        }
        function c(a, b) {
            this.x = a;
            this.y = b
        }
        function d(a, b, c, d, f) {
            this.properties = {};
            this.extent = c;
            this.type = 0;
            this.Dc = a;
            this.Mf = -1;
            this.xe = d;
            this.ze = f;
            a.Ig(e, this, b)
        }
        function e(a, b, c) {
            if (1 == a)
                b.id = c.La();
            else if (2 == a)
                for (a = c.La() + c.fa; c.fa < a; ) {
                    var d = b.xe[c.La()]
                      , e = b.ze[c.La()];
                    b.properties[d] = e
                }
            else
                3 == a ? b.type = c.La() : 4 == a && (b.Mf = c.fa)
        }
        function f(a, b) {
            this.version = 1;
            this.name = null;
            this.extent = 4096;
            this.length = 0;
            this.Dc = a;
            this.xe = [];
            this.ze = [];
            this.we = [];
            a.Ig(g, this, b);
            this.length = this.we.length
        }
        function g(a, b, c) {
            15 === a ? b.version = c.La() : 1 === a ? b.name = c.Og() : 5 === a ? b.extent = c.La() : 2 === a ? b.we.push(c.fa) : 3 === a ? b.xe.push(c.Og()) : 4 === a && b.ze.push(h(c))
        }
        function h(a) {
            for (var b = null, c = a.La() + a.fa; a.fa < c; )
                b = a.La() >> 3,
                b = 1 === b ? a.Og() : 2 === b ? a.Lp() : 3 === b ? a.Hp() : 4 === b ? a.Xp() : 5 === b ? a.La() : 6 === b ? a.ie() : 7 === b ? a.Fp() : null;
            return b
        }
        function l(a, b, c) {
            3 === a && (a = new m(c,c.La() + c.fa),
            a.length && (b[a.name] = a))
        }
        c.prototype = {
            clone: function() {
                return new c(this.x,this.y)
            },
            add: function(a) {
                return this.clone().hk(a)
            },
            rotate: function(a) {
                return this.clone().sk(a)
            },
            round: function() {
                return this.clone().tk()
            },
            angle: function() {
                return Math.atan2(this.y, this.x)
            },
            hk: function(a) {
                this.x += a.x;
                this.y += a.y;
                return this
            },
            sk: function(a) {
                var b = Math.cos(a);
                a = Math.sin(a);
                var c = a * this.x + b * this.y;
                this.x = b * this.x - a * this.y;
                this.y = c;
                return this
            },
            tk: function() {
                this.x = Math.round(this.x);
                this.y = Math.round(this.y);
                return this
            }
        };
        c.Zq = function(a) {
            return a instanceof c ? a : Array.isArray(a) ? new c(a[0],a[1]) : a
        }
        ;
        d.b = ["Unknown", "Point", "LineString", "Polygon"];
        d.prototype.Xh = function() {
            var a = this.Dc;
            a.fa = this.Mf;
            for (var b = a.La() + a.fa, d = 1, e = 0, f = 0, g = 0, h = [], l; a.fa < b; )
                if (e || (e = a.La(),
                d = e & 7,
                e >>= 3),
                e--,
                1 === d || 2 === d)
                    f += a.ie(),
                    g += a.ie(),
                    1 === d && (l && h.push(l),
                    l = []),
                    l.push(new c(f,g));
                else if (7 === d)
                    l && l.push(l[0].clone());
                else
                    throw Error("unknown command " + d);
            l && h.push(l);
            return h
        }
        ;
        d.prototype.bbox = function() {
            var a = this.Dc;
            a.fa = this.Mf;
            for (var b = a.La() + a.fa, c = 1, d = 0, e = 0, f = 0, g = Infinity, h = -Infinity, l = Infinity, m = -Infinity; a.fa < b; )
                if (d || (d = a.La(),
                c = d & 7,
                d >>= 3),
                d--,
                1 === c || 2 === c)
                    e += a.ie(),
                    f += a.ie(),
                    e < g && (g = e),
                    e > h && (h = e),
                    f < l && (l = f),
                    f > m && (m = f);
                else if (7 !== c)
                    throw Error("unknown command " + c);
            return [g, l, h, m]
        }
        ;
        var m = f;
        f.prototype.feature = function(a) {
            if (0 > a || a >= this.we.length)
                throw Error("feature index out of bounds");
            this.Dc.fa = this.we[a];
            a = this.Dc.La() + this.Dc.fa;
            return new d(this.Dc,a,this.extent,this.xe,this.ze)
        }
        ;
        var n = m;
        a["default"] = {
            Kf: b,
            fk: d,
            gk: n
        };
        a.Kf = b;
        a.fk = d;
        a.gk = n
    }
    )(Ij.Gf = Ij.Gf || {});
    function zq(a, b, c, d, e) {
        this.g = e;
        this.f = a;
        this.b = b;
        this.i = c;
        this.c = d
    }
    k = zq.prototype;
    k.get = function(a) {
        return this.c[a]
    }
    ;
    k.rb = function() {
        return this.i
    }
    ;
    k.G = function() {
        this.a || (this.a = "Point" === this.f ? Xa(this.b) : Za(this.b, 0, this.b.length, 2));
        return this.a
    }
    ;
    k.lo = function() {
        return this.g
    }
    ;
    k.Tb = function() {
        return this.b
    }
    ;
    k.ba = zq.prototype.Tb;
    k.V = function() {
        return this
    }
    ;
    k.mo = function() {
        return this.c
    }
    ;
    k.$d = zq.prototype.V;
    k.ma = function() {
        return 2
    }
    ;
    k.bb = ra;
    k.T = function() {
        return this.f
    }
    ;
    function Aq(a) {
        Tl.call(this);
        a = a ? a : {};
        this.defaultDataProjection = new yb({
            code: "",
            units: "tile-pixels"
        });
        this.b = a.featureClass ? a.featureClass : zq;
        this.f = a.geometryName;
        this.c = a.layerName ? a.layerName : "layer";
        this.g = a.layers ? a.layers : null;
        this.a = null
    }
    v(Aq, Tl);
    k = Aq.prototype;
    k.eg = function() {
        return this.a
    }
    ;
    k.T = function() {
        return "arraybuffer"
    }
    ;
    k.Oa = function(a, b) {
        var c = this.g;
        a = new Ij.Hd(a);
        a = new Ij.Gf.Kf(a);
        var d = [], e = this.b, f;
        for (f in a.layers)
            if (!c || -1 != c.indexOf(f)) {
                var g = a.layers[f];
                for (var h, l = 0, m = g.length; l < m; ++l) {
                    h = g.feature(l);
                    if (e === zq) {
                        var n = void 0;
                        var p = f
                          , q = h.Xh()
                          , t = []
                          , u = [];
                        Bq(q, u, t);
                        var x = h.type;
                        1 === x ? n = 1 === q.length ? "Point" : "MultiPoint" : 2 === x ? n = 1 === q.length ? "LineString" : "MultiLineString" : 3 === x && (n = "Polygon");
                        q = h.properties;
                        q[this.c] = p;
                        n = new this.b(n,u,t,q,h.id)
                    } else {
                        x = h;
                        u = f;
                        t = b;
                        n = new this.b;
                        h = x.id;
                        p = x.properties;
                        p[this.c] = u;
                        this.f && n.Wc(this.f);
                        u = void 0;
                        q = x.type;
                        if (0 === q)
                            u = null;
                        else {
                            x = x.Xh();
                            var B = []
                              , z = [];
                            Bq(x, z, B);
                            1 === q ? u = 1 === x.length ? new C(null) : new O(null) : 2 === q ? 1 === x.length ? u = new M(null) : u = new N(null) : 3 === q && (u = new D(null));
                            u.aa("XY", z, B)
                        }
                        t = Wl(u, !1, Vl(this, t));
                        n.Ra(t);
                        n.kc(h);
                        n.H(p)
                    }
                    d.push(n)
                }
                this.a = g ? [0, 0, g.extent, g.extent] : null
            }
        return d
    }
    ;
    k.nb = function() {
        return this.defaultDataProjection
    }
    ;
    k.Cn = function(a) {
        this.g = a
    }
    ;
    function Bq(a, b, c) {
        for (var d = 0, e = 0, f = a.length; e < f; ++e) {
            var g = a[e], h;
            var l = 0;
            for (h = g.length; l < h; ++l) {
                var m = g[l];
                b.push(m.x, m.y)
            }
            d += 2 * l;
            c.push(d)
        }
    }
    k.Ub = function() {}
    ;
    k.Vc = function() {}
    ;
    k.Fd = function() {}
    ;
    k.dd = function() {}
    ;
    k.Xb = function() {}
    ;
    function Cq() {
        Rm.call(this);
        this.defaultDataProjection = Qb("EPSG:4326")
    }
    v(Cq, Rm);
    function Dq(a, b) {
        b[b.length - 1].ne[a.getAttribute("k")] = a.getAttribute("v")
    }
    var Eq = [null]
      , Fq = K(Eq, {
        nd: function(a, b) {
            b[b.length - 1].sd.push(a.getAttribute("ref"))
        },
        tag: Dq
    })
      , Hq = K(Eq, {
        node: function(a, b) {
            var c = b[0]
              , d = b[b.length - 1]
              , e = a.getAttribute("id")
              , f = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
            d.ai[e] = f;
            a = L({
                ne: {}
            }, Gq, a, b);
            ub(a.ne) || (f = new C(f),
            Wl(f, !1, c),
            c = new wl(f),
            c.kc(e),
            c.H(a.ne),
            d.features.push(c))
        },
        way: function(a, b) {
            var c = b[0]
              , d = a.getAttribute("id");
            a = L({
                sd: [],
                ne: {}
            }, Fq, a, b);
            b = b[b.length - 1];
            for (var e = [], f = 0, g = a.sd.length; f < g; f++)
                ka(e, b.ai[a.sd[f]]);
            a.sd[0] == a.sd[a.sd.length - 1] ? (f = new D(null),
            f.aa("XY", e, [e.length])) : (f = new M(null),
            f.aa("XY", e));
            Wl(f, !1, c);
            c = new wl(f);
            c.kc(d);
            c.H(a.ne);
            b.features.push(c)
        }
    })
      , Gq = K(Eq, {
        tag: Dq
    });
    Cq.prototype.Ac = function(a, b) {
        b = Ul(this, a, b);
        return "osm" == a.localName && (a = L({
            ai: {},
            features: []
        }, Hq, a, [b]),
        a.features) ? a.features : []
    }
    ;
    Cq.prototype.$g = function() {}
    ;
    Cq.prototype.Yb = function() {}
    ;
    Cq.prototype.se = function() {}
    ;
    function Iq(a) {
        return a.getAttributeNS("http://www.w3.org/1999/xlink", "href")
    }
    ;function Jq() {}
    Jq.prototype.read = function(a) {
        return Cl(a) ? this.a(a) : Dl(a) ? this.b(a) : "string" === typeof a ? (a = El(a),
        this.a(a)) : null
    }
    ;
    function Kq() {}
    v(Kq, Jq);
    Kq.prototype.a = function(a) {
        for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType == Node.ELEMENT_NODE)
                return this.b(a);
        return null
    }
    ;
    Kq.prototype.b = function(a) {
        return (a = L({}, Lq, a, [])) ? a : null
    }
    ;
    var Mq = [null, "http://www.opengis.net/ows/1.1"]
      , Lq = K(Mq, {
        ServiceIdentification: I(function(a, b) {
            return L({}, Nq, a, b)
        }),
        ServiceProvider: I(function(a, b) {
            return L({}, Oq, a, b)
        }),
        OperationsMetadata: I(function(a, b) {
            return L({}, Pq, a, b)
        })
    })
      , Qq = K(Mq, {
        DeliveryPoint: I(Q),
        City: I(Q),
        AdministrativeArea: I(Q),
        PostalCode: I(Q),
        Country: I(Q),
        ElectronicMailAddress: I(Q)
    })
      , Rq = K(Mq, {
        Value: Il(function(a) {
            return Q(a)
        })
    })
      , Sq = K(Mq, {
        AllowedValues: I(function(a, b) {
            return L({}, Rq, a, b)
        })
    })
      , Vq = K(Mq, {
        Phone: I(function(a, b) {
            return L({}, Tq, a, b)
        }),
        Address: I(function(a, b) {
            return L({}, Qq, a, b)
        })
    })
      , Xq = K(Mq, {
        HTTP: I(function(a, b) {
            return L({}, Wq, a, b)
        })
    })
      , Wq = K(Mq, {
        Get: Il(function(a, b) {
            var c = Iq(a);
            if (c)
                return L({
                    href: c
                }, Yq, a, b)
        }),
        Post: void 0
    })
      , Zq = K(Mq, {
        DCP: I(function(a, b) {
            return L({}, Xq, a, b)
        })
    })
      , Pq = K(Mq, {
        Operation: function(a, b) {
            var c = a.getAttribute("name");
            (a = L({}, Zq, a, b)) && (b[b.length - 1][c] = a)
        }
    })
      , Tq = K(Mq, {
        Voice: I(Q),
        Facsimile: I(Q)
    })
      , Yq = K(Mq, {
        Constraint: Il(function(a, b) {
            var c = a.getAttribute("name");
            if (c)
                return L({
                    name: c
                }, Sq, a, b)
        })
    })
      , $q = K(Mq, {
        IndividualName: I(Q),
        PositionName: I(Q),
        ContactInfo: I(function(a, b) {
            return L({}, Vq, a, b)
        })
    })
      , Nq = K(Mq, {
        Title: I(Q),
        ServiceTypeVersion: I(Q),
        ServiceType: I(Q)
    })
      , Oq = K(Mq, {
        ProviderName: I(Q),
        ProviderSite: I(Iq),
        ServiceContact: I(function(a, b) {
            return L({}, $q, a, b)
        })
    });
    function ar(a, b, c, d) {
        var e;
        void 0 !== d ? e = d : e = [];
        for (var f = d = 0; f < b; ) {
            var g = a[f++];
            e[d++] = a[f++];
            e[d++] = g;
            for (g = 2; g < c; ++g)
                e[d++] = a[f++]
        }
        e.length = d
    }
    ;function br(a) {
        a = a ? a : {};
        Tl.call(this);
        this.defaultDataProjection = Qb("EPSG:4326");
        this.b = a.factor ? a.factor : 1E5;
        this.a = a.geometryLayout ? a.geometryLayout : "XY"
    }
    v(br, ko);
    function cr(a, b, c) {
        var d, e = Array(b);
        for (d = 0; d < b; ++d)
            e[d] = 0;
        var f;
        var g = 0;
        for (f = a.length; g < f; )
            for (d = 0; d < b; ++d,
            ++g) {
                var h = a[g]
                  , l = h - e[d];
                e[d] = h;
                a[g] = l
            }
        return dr(a, c ? c : 1E5)
    }
    function er(a, b, c) {
        var d, e = Array(b);
        for (d = 0; d < b; ++d)
            e[d] = 0;
        a = fr(a, c ? c : 1E5);
        var f;
        c = 0;
        for (f = a.length; c < f; )
            for (d = 0; d < b; ++d,
            ++c)
                e[d] += a[c],
                a[c] = e[d];
        return a
    }
    function dr(a, b) {
        b = b ? b : 1E5;
        var c;
        var d = 0;
        for (c = a.length; d < c; ++d)
            a[d] = Math.round(a[d] * b);
        b = 0;
        for (d = a.length; b < d; ++b)
            c = a[b],
            a[b] = 0 > c ? ~(c << 1) : c << 1;
        b = "";
        d = 0;
        for (c = a.length; d < c; ++d) {
            for (var e, f = a[d], g = ""; 32 <= f; )
                e = (32 | f & 31) + 63,
                g += String.fromCharCode(e),
                f >>= 5;
            g += String.fromCharCode(f + 63);
            b += g
        }
        return b
    }
    function fr(a, b) {
        b = b ? b : 1E5;
        var c = [], d = 0, e = 0, f;
        var g = 0;
        for (f = a.length; g < f; ++g) {
            var h = a.charCodeAt(g) - 63;
            d |= (h & 31) << e;
            32 > h ? (c.push(d),
            e = d = 0) : e += 5
        }
        a = 0;
        for (d = c.length; a < d; ++a)
            e = c[a],
            c[a] = e & 1 ? ~(e >> 1) : e >> 1;
        a = 0;
        for (d = c.length; a < d; ++a)
            c[a] /= b;
        return c
    }
    k = br.prototype;
    k.ge = function(a, b) {
        a = this.Bd(a, b);
        return new wl(a)
    }
    ;
    k.Hg = function(a, b) {
        return [this.ge(a, b)]
    }
    ;
    k.Bd = function(a, b) {
        var c = qf(this.a);
        a = er(a, c, this.b);
        ar(a, a.length, c, a);
        c = Df(a, 0, a.length, c);
        return Wl(new M(c,this.a), !1, Vl(this, b))
    }
    ;
    k.qe = function(a, b) {
        if (a = a.V())
            return this.Gd(a, b);
        va(!1, 40);
        return ""
    }
    ;
    k.ah = function(a, b) {
        return this.qe(a[0], b)
    }
    ;
    k.Gd = function(a, b) {
        a = Wl(a, !0, Vl(this, b));
        b = a.ba();
        a = a.ma();
        ar(b, b.length, a, b);
        return cr(b, a, this.b)
    }
    ;
    function gr(a) {
        a = a ? a : {};
        Tl.call(this);
        this.a = a.layerName;
        this.b = a.layers ? a.layers : null;
        this.defaultDataProjection = Qb(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326")
    }
    v(gr, Xl);
    function hr(a, b) {
        var c = [], d, e;
        var f = 0;
        for (e = a.length; f < e; ++f) {
            var g = a[f];
            0 < f && c.pop();
            0 <= g ? d = b[g] : d = b[~g].slice().reverse();
            c.push.apply(c, d)
        }
        a = 0;
        for (b = c.length; a < b; ++a)
            c[a] = c[a].slice();
        return c
    }
    function ir(a, b, c, d, e, f, g) {
        a = a.geometries;
        var h = [], l;
        var m = 0;
        for (l = a.length; m < l; ++m)
            h[m] = jr(a[m], b, c, d, e, f, g);
        return h
    }
    function jr(a, b, c, d, e, f, g) {
        var h = a.type
          , l = kr[h];
        c = "Point" === h || "MultiPoint" === h ? l(a, c, d) : l(a, b);
        b = new wl;
        b.Ra(Wl(c, !1, g));
        void 0 !== a.id && b.kc(a.id);
        a = a.properties;
        e && (a || (a = {}),
        a[e] = f);
        a && b.H(a);
        return b
    }
    gr.prototype.Gg = function(a, b) {
        if ("Topology" == a.type) {
            var c = null
              , d = null;
            if (a.transform) {
                var e = a.transform;
                c = e.scale;
                d = e.translate
            }
            var f = a.arcs;
            if (e) {
                e = c;
                var g = d, h;
                var l = 0;
                for (h = f.length; l < h; ++l) {
                    var m, n = f[l], p = e, q = g, t = 0, u = 0;
                    var x = 0;
                    for (m = n.length; x < m; ++x) {
                        var B = n[x];
                        t += B[0];
                        u += B[1];
                        B[0] = t;
                        B[1] = u;
                        lr(B, p, q)
                    }
                }
            }
            e = [];
            a = a.objects;
            g = this.a;
            for (var z in a)
                this.b && -1 == this.b.indexOf(z) || ("GeometryCollection" === a[z].type ? (l = a[z],
                e.push.apply(e, ir(l, f, c, d, g, z, b))) : (l = a[z],
                e.push(jr(l, f, c, d, g, z, b))));
            return e
        }
        return []
    }
    ;
    function lr(a, b, c) {
        a[0] = a[0] * b[0] + c[0];
        a[1] = a[1] * b[1] + c[1]
    }
    gr.prototype.Ng = function() {
        return this.defaultDataProjection
    }
    ;
    var kr = {
        Point: function(a, b, c) {
            a = a.coordinates;
            b && c && lr(a, b, c);
            return new C(a)
        },
        LineString: function(a, b) {
            a = hr(a.arcs, b);
            return new M(a)
        },
        Polygon: function(a, b) {
            var c = [], d;
            var e = 0;
            for (d = a.arcs.length; e < d; ++e)
                c[e] = hr(a.arcs[e], b);
            return new D(c)
        },
        MultiPoint: function(a, b, c) {
            a = a.coordinates;
            var d;
            if (b && c) {
                var e = 0;
                for (d = a.length; e < d; ++e)
                    lr(a[e], b, c)
            }
            return new O(a)
        },
        MultiLineString: function(a, b) {
            var c = [], d;
            var e = 0;
            for (d = a.arcs.length; e < d; ++e)
                c[e] = hr(a.arcs[e], b);
            return new N(c)
        },
        MultiPolygon: function(a, b) {
            var c = [], d, e;
            var f = 0;
            for (e = a.arcs.length; f < e; ++f) {
                var g = a.arcs[f];
                var h = [];
                var l = 0;
                for (d = g.length; l < d; ++l)
                    h[l] = hr(g[l], b);
                c[f] = h
            }
            return new P(c)
        }
    };
    k = gr.prototype;
    k.cd = function() {}
    ;
    k.re = function() {}
    ;
    k.te = function() {}
    ;
    k.Kg = function() {}
    ;
    k.Uc = function() {}
    ;
    function mr(a) {
        a = a ? a : {};
        this.c = a.featureType;
        this.a = a.featureNS;
        this.b = a.gmlFormat ? a.gmlFormat : new gn;
        this.l = a.schemaLocation ? a.schemaLocation : nr["1.1.0"];
        Rm.call(this)
    }
    v(mr, Rm);
    var nr = {
        "1.1.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd",
        "1.0.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.0.0/wfs.xsd"
    };
    mr.prototype.Ac = function(a, b) {
        var c = {
            featureType: this.c,
            featureNS: this.a
        };
        rb(c, Ul(this, a, b ? b : {}));
        b = [c];
        this.b.b["http://www.opengis.net/gml"].featureMember = Gl(Um.prototype.he);
        (a = L([], this.b.b, a, b, this.b)) || (a = []);
        return a
    }
    ;
    mr.prototype.j = function(a) {
        if (Cl(a))
            return or(a);
        if (Dl(a))
            return L({}, pr, a, []);
        if ("string" === typeof a)
            return a = El(a),
            or(a)
    }
    ;
    mr.prototype.g = function(a) {
        if (Cl(a))
            return qr(this, a);
        if (Dl(a))
            return rr(this, a);
        if ("string" === typeof a)
            return a = El(a),
            qr(this, a)
    }
    ;
    function qr(a, b) {
        for (b = b.firstChild; b; b = b.nextSibling)
            if (b.nodeType == Node.ELEMENT_NODE)
                return rr(a, b)
    }
    var sr = {
        "http://www.opengis.net/gml": {
            boundedBy: I(Um.prototype.sf, "bounds")
        }
    };
    function rr(a, b) {
        var c = {}
          , d = bn(b.getAttribute("numberOfFeatures"));
        c.numberOfFeatures = d;
        return L(c, sr, b, [], a.b)
    }
    var tr = {
        "http://www.opengis.net/wfs": {
            totalInserted: I(an),
            totalUpdated: I(an),
            totalDeleted: I(an)
        }
    }
      , ur = {
        "http://www.opengis.net/ogc": {
            FeatureId: Gl(function(a) {
                return a.getAttribute("fid")
            })
        }
    }
      , vr = {
        "http://www.opengis.net/wfs": {
            Feature: function(a, b) {
                Pl(ur, a, b)
            }
        }
    }
      , pr = {
        "http://www.opengis.net/wfs": {
            TransactionSummary: I(function(a, b) {
                return L({}, tr, a, b)
            }, "transactionSummary"),
            InsertResults: I(function(a, b) {
                return L([], vr, a, b)
            }, "insertIds")
        }
    };
    function or(a) {
        for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType == Node.ELEMENT_NODE)
                return L({}, pr, a, [])
    }
    var wr = {
        "http://www.opengis.net/wfs": {
            PropertyName: J(dn)
        }
    };
    function xr(a, b) {
        var c = zl("http://www.opengis.net/ogc", "Filter")
          , d = zl("http://www.opengis.net/ogc", "FeatureId");
        c.appendChild(d);
        d.setAttribute("fid", b);
        a.appendChild(c)
    }
    function yr(a, b) {
        a = (a ? a : "feature") + ":";
        return b.indexOf(a) ? a + b : b
    }
    var zr = {
        "http://www.opengis.net/wfs": {
            Insert: J(function(a, b, c) {
                var d = c[c.length - 1]
                  , e = d.gmlVersion;
                d = zl(d.featureNS, d.featureType);
                a.appendChild(d);
                if (2 === e) {
                    a = qn.prototype;
                    (e = b.a) && d.setAttribute("fid", e);
                    e = c[c.length - 1];
                    var f = e.featureNS
                      , g = b.c;
                    e.ob || (e.ob = {},
                    e.ob[f] = {});
                    var h = b.N();
                    b = [];
                    var l = [];
                    for (n in h) {
                        var m = h[n];
                        null !== m && (b.push(n),
                        l.push(m),
                        n == g || m instanceof lf ? n in e.ob[f] || (e.ob[f][n] = J(a.ki, a)) : n in e.ob[f] || (e.ob[f][n] = J(dn)))
                    }
                    var n = rb({}, e);
                    n.node = d;
                    Ql(n, e.ob, Ll(void 0, f), l, c, b)
                } else
                    gn.prototype.ti(d, b, c)
            }),
            Update: J(function(a, b, c) {
                var d = c[c.length - 1];
                va(void 0 !== b.a, 27);
                var e = d.featurePrefix
                  , f = d.featureNS;
                a.setAttribute("typeName", yr(e, d.featureType));
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, f);
                e = b.a;
                if (void 0 !== e) {
                    f = b.O();
                    for (var g = [], h = 0, l = f.length; h < l; h++) {
                        var m = b.get(f[h]);
                        void 0 !== m && g.push({
                            name: f[h],
                            value: m
                        })
                    }
                    Ql({
                        gmlVersion: d.gmlVersion,
                        node: a,
                        hasZ: d.hasZ,
                        srsName: d.srsName
                    }, zr, Ll("Property"), g, c);
                    xr(a, e)
                }
            }),
            Delete: J(function(a, b, c) {
                c = c[c.length - 1];
                va(void 0 !== b.a, 26);
                var d = c.featurePrefix
                  , e = c.featureNS;
                a.setAttribute("typeName", yr(d, c.featureType));
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + d, e);
                b = b.a;
                void 0 !== b && xr(a, b)
            }),
            Property: J(function(a, b, c) {
                var d = zl("http://www.opengis.net/wfs", "Name")
                  , e = c[c.length - 1].gmlVersion;
                a.appendChild(d);
                dn(d, b.name);
                void 0 !== b.value && null !== b.value && (d = zl("http://www.opengis.net/wfs", "Value"),
                a.appendChild(d),
                b.value instanceof lf ? 2 === e ? qn.prototype.ki(d, b.value, c) : gn.prototype.td(d, b.value, c) : dn(d, b.value))
            }),
            Native: J(function(a, b) {
                b.Jq && a.setAttribute("vendorId", b.Jq);
                void 0 !== b.iq && a.setAttribute("safeToIgnore", b.iq);
                void 0 !== b.value && dn(a, b.value)
            })
        }
    };
    function Ar(a, b, c) {
        a = {
            node: a
        };
        b = b.b;
        for (var d = 0, e = b.length; d < e; ++d) {
            var f = b[d];
            Ql(a, Br, Ll(f.lc), [f], c)
        }
    }
    function Cr(a, b) {
        void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
        Dr(a, b.b);
        Er(a, "" + b.f)
    }
    function Fr(a, b, c) {
        a = zl("http://www.opengis.net/ogc", a);
        dn(a, c);
        b.appendChild(a)
    }
    function Dr(a, b) {
        Fr("PropertyName", a, b)
    }
    function Er(a, b) {
        Fr("Literal", a, b)
    }
    function Gr(a, b) {
        var c = zl("http://www.opengis.net/gml", "TimeInstant");
        a.appendChild(c);
        a = zl("http://www.opengis.net/gml", "timePosition");
        c.appendChild(a);
        dn(a, b)
    }
    var Br = {
        "http://www.opengis.net/wfs": {
            Query: J(function(a, b, c) {
                var d = c[c.length - 1]
                  , e = d.featurePrefix
                  , f = d.featureNS
                  , g = d.propertyNames
                  , h = d.srsName;
                a.setAttribute("typeName", e ? yr(e, b) : b);
                h && a.setAttribute("srsName", h);
                f && a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, f);
                b = rb({}, d);
                b.node = a;
                Ql(b, wr, Ll("PropertyName"), g, c);
                if (d = d.filter)
                    g = zl("http://www.opengis.net/ogc", "Filter"),
                    a.appendChild(g),
                    Ql({
                        node: g
                    }, Br, Ll(d.lc), [d], c)
            })
        },
        "http://www.opengis.net/ogc": {
            During: J(function(a, b) {
                var c = zl("http://www.opengis.net/fes", "ValueReference");
                dn(c, b.b);
                a.appendChild(c);
                c = zl("http://www.opengis.net/gml", "TimePeriod");
                a.appendChild(c);
                a = zl("http://www.opengis.net/gml", "begin");
                c.appendChild(a);
                Gr(a, b.a);
                a = zl("http://www.opengis.net/gml", "end");
                c.appendChild(a);
                Gr(a, b.f)
            }),
            And: J(Ar),
            Or: J(Ar),
            Not: J(function(a, b, c) {
                b = b.condition;
                Ql({
                    node: a
                }, Br, Ll(b.lc), [b], c)
            }),
            BBOX: J(function(a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                Dr(a, b.geometryName);
                gn.prototype.td(a, b.extent, c)
            }),
            Intersects: J(function(a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                Dr(a, b.geometryName);
                gn.prototype.td(a, b.geometry, c)
            }),
            Within: J(function(a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                Dr(a, b.geometryName);
                gn.prototype.td(a, b.geometry, c)
            }),
            PropertyIsEqualTo: J(Cr),
            PropertyIsNotEqualTo: J(Cr),
            PropertyIsLessThan: J(Cr),
            PropertyIsLessThanOrEqualTo: J(Cr),
            PropertyIsGreaterThan: J(Cr),
            PropertyIsGreaterThanOrEqualTo: J(Cr),
            PropertyIsNull: J(function(a, b) {
                Dr(a, b.b)
            }),
            PropertyIsBetween: J(function(a, b) {
                Dr(a, b.b);
                var c = zl("http://www.opengis.net/ogc", "LowerBoundary");
                a.appendChild(c);
                Er(c, "" + b.a);
                c = zl("http://www.opengis.net/ogc", "UpperBoundary");
                a.appendChild(c);
                Er(c, "" + b.f)
            }),
            PropertyIsLike: J(function(a, b) {
                a.setAttribute("wildCard", b.g);
                a.setAttribute("singleChar", b.i);
                a.setAttribute("escapeChar", b.f);
                void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
                Dr(a, b.b);
                Er(a, "" + b.c)
            })
        }
    };
    mr.prototype.o = function(a) {
        var b = zl("http://www.opengis.net/wfs", "GetFeature");
        b.setAttribute("service", "WFS");
        b.setAttribute("version", "1.1.0");
        if (a) {
            a.handle && b.setAttribute("handle", a.handle);
            a.outputFormat && b.setAttribute("outputFormat", a.outputFormat);
            void 0 !== a.maxFeatures && b.setAttribute("maxFeatures", a.maxFeatures);
            a.resultType && b.setAttribute("resultType", a.resultType);
            void 0 !== a.startIndex && b.setAttribute("startIndex", a.startIndex);
            void 0 !== a.count && b.setAttribute("count", a.count);
            var c = a.filter;
            if (a.bbox) {
                va(a.geometryName, 12);
                var d = Hm(a.geometryName, a.bbox, a.srsName);
                c ? c = Gm(c, d) : c = d
            }
        }
        b.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.l);
        c = {
            node: b,
            srsName: a.srsName,
            featureNS: a.featureNS ? a.featureNS : this.a,
            featurePrefix: a.featurePrefix,
            geometryName: a.geometryName,
            filter: c,
            propertyNames: a.propertyNames ? a.propertyNames : []
        };
        va(Array.isArray(a.featureTypes), 11);
        a = a.featureTypes;
        c = [c];
        d = rb({}, c[c.length - 1]);
        d.node = b;
        Ql(d, Br, Ll("Query"), a, c);
        return b
    }
    ;
    mr.prototype.v = function(a, b, c, d) {
        var e = []
          , f = zl("http://www.opengis.net/wfs", "Transaction")
          , g = d.version ? d.version : "1.1.0"
          , h = "1.0.0" === g ? 2 : 3;
        f.setAttribute("service", "WFS");
        f.setAttribute("version", g);
        if (d) {
            var l = d.gmlOptions ? d.gmlOptions : {};
            d.handle && f.setAttribute("handle", d.handle)
        }
        f.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", nr[g]);
        var m = d.featurePrefix ? d.featurePrefix : "feature";
        a && (g = {
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: m,
            gmlVersion: h,
            hasZ: d.hasZ,
            srsName: d.srsName
        },
        rb(g, l),
        Ql(g, zr, Ll("Insert"), a, e));
        b && (g = {
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: m,
            gmlVersion: h,
            hasZ: d.hasZ,
            srsName: d.srsName
        },
        rb(g, l),
        Ql(g, zr, Ll("Update"), b, e));
        c && Ql({
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: m,
            gmlVersion: h,
            srsName: d.srsName
        }, zr, Ll("Delete"), c, e);
        d.nativeElements && Ql({
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: m,
            gmlVersion: h,
            srsName: d.srsName
        }, zr, Ll("Native"), d.nativeElements, e);
        return f
    }
    ;
    mr.prototype.Mg = function(a) {
        for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType == Node.ELEMENT_NODE)
                return this.vf(a);
        return null
    }
    ;
    mr.prototype.vf = function(a) {
        if (a.firstElementChild && a.firstElementChild.firstElementChild)
            for (a = a.firstElementChild.firstElementChild,
            a = a.firstElementChild; a; a = a.nextElementSibling)
                if (0 !== a.childNodes.length && (1 !== a.childNodes.length || 3 !== a.firstChild.nodeType)) {
                    var b = [{}];
                    this.b.sf(a, b);
                    return Qb(b.pop().srsName)
                }
        return null
    }
    ;
    function Hr(a) {
        a = a ? a : {};
        Tl.call(this);
        this.b = void 0 !== a.splitCollection ? a.splitCollection : !1
    }
    v(Hr, ko);
    function Ir(a) {
        a = a.X();
        return a.length ? a.join(" ") : ""
    }
    function Jr(a) {
        a = a.X();
        for (var b = [], c = 0, d = a.length; c < d; ++c)
            b.push(a[c].join(" "));
        return b.join(",")
    }
    function Kr(a) {
        var b = [];
        a = a.Yd();
        for (var c = 0, d = a.length; c < d; ++c)
            b.push("(" + Jr(a[c]) + ")");
        return b.join(",")
    }
    function Lr(a) {
        var b = a.T()
          , c = (0,
        Mr[b])(a);
        b = b.toUpperCase();
        if (a instanceof pf) {
            a = a.ja;
            var d = "";
            if ("XYZ" === a || "XYZM" === a)
                d += "Z";
            if ("XYM" === a || "XYZM" === a)
                d += "M";
            a = d;
            0 < a.length && (b += " " + a)
        }
        return c.length ? b + "(" + c + ")" : b + " EMPTY"
    }
    var Mr = {
        Point: Ir,
        LineString: Jr,
        Polygon: Kr,
        MultiPoint: function(a) {
            var b = [];
            a = a.de();
            for (var c = 0, d = a.length; c < d; ++c)
                b.push("(" + Ir(a[c]) + ")");
            return b.join(",")
        },
        MultiLineString: function(a) {
            var b = [];
            a = a.kd();
            for (var c = 0, d = a.length; c < d; ++c)
                b.push("(" + Jr(a[c]) + ")");
            return b.join(",")
        },
        MultiPolygon: function(a) {
            var b = [];
            a = a.Zd();
            for (var c = 0, d = a.length; c < d; ++c)
                b.push("(" + Kr(a[c]) + ")");
            return b.join(",")
        },
        GeometryCollection: function(a) {
            var b = [];
            a = a.He();
            for (var c = 0, d = a.length; c < d; ++c)
                b.push(Lr(a[c]));
            return b.join(",")
        }
    };
    k = Hr.prototype;
    k.ge = function(a, b) {
        return (a = this.Bd(a, b)) ? (b = new wl,
        b.Ra(a),
        b) : null
    }
    ;
    k.Hg = function(a, b) {
        var c = [];
        a = this.Bd(a, b);
        this.b && "GeometryCollection" == a.T() ? c = a.a : c = [a];
        b = [];
        for (var d = 0, e = c.length; d < e; ++d)
            a = new wl,
            a.Ra(c[d]),
            b.push(a);
        return b
    }
    ;
    k.Bd = function(a, b) {
        a = new Nr(new Or(a));
        Pr(a);
        return (a = Qr(a)) ? Wl(a, !1, b) : null
    }
    ;
    k.qe = function(a, b) {
        return (a = a.V()) ? this.Gd(a, b) : ""
    }
    ;
    k.ah = function(a, b) {
        if (1 == a.length)
            return this.qe(a[0], b);
        for (var c = [], d = 0, e = a.length; d < e; ++d)
            c.push(a[d].V());
        a = new Im(c);
        return this.Gd(a, b)
    }
    ;
    k.Gd = function(a, b) {
        return Lr(Wl(a, !0, b))
    }
    ;
    function Or(a) {
        this.a = a;
        this.b = -1
    }
    function Rr(a) {
        var b = a.a.charAt(++a.b)
          , c = {
            position: a.b,
            value: b
        };
        if ("(" == b)
            c.type = 2;
        else if ("," == b)
            c.type = 5;
        else if (")" == b)
            c.type = 3;
        else if ("0" <= b && "9" >= b || "." == b || "-" == b) {
            c.type = 4;
            b = a.b;
            var d = !1
              , e = !1;
            do {
                if ("." == f)
                    d = !0;
                else if ("e" == f || "E" == f)
                    e = !0;
                var f = a.a.charAt(++a.b)
            } while ("0" <= f && "9" >= f || "." == f && (void 0 === d || !d) || !e && ("e" == f || "E" == f) || e && ("-" == f || "+" == f));
            a = parseFloat(a.a.substring(b, a.b--));
            c.value = a
        } else if ("a" <= b && "z" >= b || "A" <= b && "Z" >= b) {
            c.type = 1;
            b = a.b;
            do
                f = a.a.charAt(++a.b);
            while ("a" <= f && "z" >= f || "A" <= f && "Z" >= f);
            a = a.a.substring(b, a.b--).toUpperCase();
            c.value = a
        } else {
            if (" " == b || "\t" == b || "\r" == b || "\n" == b)
                return Rr(a);
            if ("" === b)
                c.type = 6;
            else
                throw Error("Unexpected character: " + b);
        }
        return c
    }
    function Nr(a) {
        this.f = a;
        this.a = "XY"
    }
    function Pr(a) {
        a.b = Rr(a.f)
    }
    function Sr(a, b) {
        (b = a.b.type == b) && Pr(a);
        return b
    }
    function Qr(a) {
        var b = a.b;
        if (Sr(a, 1)) {
            b = b.value;
            var c = "XY"
              , d = a.b;
            1 == a.b.type && (d = d.value,
            "Z" === d ? c = "XYZ" : "M" === d ? c = "XYM" : "ZM" === d && (c = "XYZM"),
            "XY" !== c && Pr(a));
            a.a = c;
            if ("GEOMETRYCOLLECTION" == b) {
                a: {
                    if (Sr(a, 2)) {
                        b = [];
                        do
                            b.push(Qr(a));
                        while (Sr(a, 5));
                        if (Sr(a, 3)) {
                            a = b;
                            break a
                        }
                    } else if (Tr(a)) {
                        a = [];
                        break a
                    }
                    throw Error(Ur(a));
                }
                return new Im(a)
            }
            d = Vr[b];
            c = Wr[b];
            if (!d || !c)
                throw Error("Invalid geometry type: " + b);
            b = d.call(a);
            return new c(b,a.a)
        }
        throw Error(Ur(a));
    }
    k = Nr.prototype;
    k.Bg = function() {
        if (Sr(this, 2)) {
            var a = Xr(this);
            if (Sr(this, 3))
                return a
        } else if (Tr(this))
            return null;
        throw Error(Ur(this));
    }
    ;
    k.Ag = function() {
        if (Sr(this, 2)) {
            var a = Yr(this);
            if (Sr(this, 3))
                return a
        } else if (Tr(this))
            return [];
        throw Error(Ur(this));
    }
    ;
    k.Cg = function() {
        if (Sr(this, 2)) {
            var a = Zr(this);
            if (Sr(this, 3))
                return a
        } else if (Tr(this))
            return [];
        throw Error(Ur(this));
    }
    ;
    k.sp = function() {
        if (Sr(this, 2)) {
            var a;
            if (2 == this.b.type)
                for (a = [this.Bg()]; Sr(this, 5); )
                    a.push(this.Bg());
            else
                a = Yr(this);
            if (Sr(this, 3))
                return a
        } else if (Tr(this))
            return [];
        throw Error(Ur(this));
    }
    ;
    k.rp = function() {
        if (Sr(this, 2)) {
            var a = Zr(this);
            if (Sr(this, 3))
                return a
        } else if (Tr(this))
            return [];
        throw Error(Ur(this));
    }
    ;
    k.tp = function() {
        if (Sr(this, 2)) {
            for (var a = [this.Cg()]; Sr(this, 5); )
                a.push(this.Cg());
            if (Sr(this, 3))
                return a
        } else if (Tr(this))
            return [];
        throw Error(Ur(this));
    }
    ;
    function Xr(a) {
        for (var b = [], c = a.a.length, d = 0; d < c; ++d) {
            var e = a.b;
            if (Sr(a, 4))
                b.push(e.value);
            else
                break
        }
        if (b.length == c)
            return b;
        throw Error(Ur(a));
    }
    function Yr(a) {
        for (var b = [Xr(a)]; Sr(a, 5); )
            b.push(Xr(a));
        return b
    }
    function Zr(a) {
        for (var b = [a.Ag()]; Sr(a, 5); )
            b.push(a.Ag());
        return b
    }
    function Tr(a) {
        var b = 1 == a.b.type && "EMPTY" == a.b.value;
        b && Pr(a);
        return b
    }
    function Ur(a) {
        return "Unexpected `" + a.b.value + "` at position " + a.b.position + " in `" + a.f.a + "`"
    }
    var Wr = {
        POINT: C,
        LINESTRING: M,
        POLYGON: D,
        MULTIPOINT: O,
        MULTILINESTRING: N,
        MULTIPOLYGON: P
    }
      , Vr = {
        POINT: Nr.prototype.Bg,
        LINESTRING: Nr.prototype.Ag,
        POLYGON: Nr.prototype.Cg,
        MULTIPOINT: Nr.prototype.sp,
        MULTILINESTRING: Nr.prototype.rp,
        MULTIPOLYGON: Nr.prototype.tp
    };
    function $r() {
        this.version = void 0
    }
    v($r, Jq);
    $r.prototype.a = function(a) {
        for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType == Node.ELEMENT_NODE)
                return this.b(a);
        return null
    }
    ;
    $r.prototype.b = function(a) {
        this.version = a.getAttribute("version").trim();
        return (a = L({
            version: this.version
        }, as, a, [])) ? a : null
    }
    ;
    function bs(a, b) {
        return L({}, cs, a, b)
    }
    function ds(a, b) {
        return L({}, es, a, b)
    }
    function fs(a, b) {
        if (b = bs(a, b))
            return a = [bn(a.getAttribute("width")), bn(a.getAttribute("height"))],
            b.size = a,
            b
    }
    function gs(a, b) {
        return L([], hs, a, b)
    }
    var is = [null, "http://www.opengis.net/wms"]
      , as = K(is, {
        Service: I(function(a, b) {
            return L({}, js, a, b)
        }),
        Capability: I(function(a, b) {
            return L({}, ks, a, b)
        })
    })
      , ks = K(is, {
        Request: I(function(a, b) {
            return L({}, ls, a, b)
        }),
        Exception: I(function(a, b) {
            return L([], ms, a, b)
        }),
        Layer: I(function(a, b) {
            return L({}, ns, a, b)
        })
    })
      , js = K(is, {
        Name: I(Q),
        Title: I(Q),
        Abstract: I(Q),
        KeywordList: I(gs),
        OnlineResource: I(Iq),
        ContactInformation: I(function(a, b) {
            return L({}, os, a, b)
        }),
        Fees: I(Q),
        AccessConstraints: I(Q),
        LayerLimit: I(an),
        MaxWidth: I(an),
        MaxHeight: I(an)
    })
      , os = K(is, {
        ContactPersonPrimary: I(function(a, b) {
            return L({}, ps, a, b)
        }),
        ContactPosition: I(Q),
        ContactAddress: I(function(a, b) {
            return L({}, qs, a, b)
        }),
        ContactVoiceTelephone: I(Q),
        ContactFacsimileTelephone: I(Q),
        ContactElectronicMailAddress: I(Q)
    })
      , ps = K(is, {
        ContactPerson: I(Q),
        ContactOrganization: I(Q)
    })
      , qs = K(is, {
        AddressType: I(Q),
        Address: I(Q),
        City: I(Q),
        StateOrProvince: I(Q),
        PostCode: I(Q),
        Country: I(Q)
    })
      , ms = K(is, {
        Format: Gl(Q)
    })
      , ns = K(is, {
        Name: I(Q),
        Title: I(Q),
        Abstract: I(Q),
        KeywordList: I(gs),
        CRS: Il(Q),
        EX_GeographicBoundingBox: I(function(a, b) {
            var c = L({}, rs, a, b);
            if (c) {
                a = c.westBoundLongitude;
                b = c.southBoundLatitude;
                var d = c.eastBoundLongitude;
                c = c.northBoundLatitude;
                if (void 0 !== a && void 0 !== b && void 0 !== d && void 0 !== c)
                    return [a, b, d, c]
            }
        }),
        BoundingBox: Il(function(a) {
            var b = [$m(a.getAttribute("minx")), $m(a.getAttribute("miny")), $m(a.getAttribute("maxx")), $m(a.getAttribute("maxy"))]
              , c = [$m(a.getAttribute("resx")), $m(a.getAttribute("resy"))];
            return {
                crs: a.getAttribute("CRS"),
                extent: b,
                res: c
            }
        }),
        Dimension: Il(function(a) {
            return {
                name: a.getAttribute("name"),
                units: a.getAttribute("units"),
                unitSymbol: a.getAttribute("unitSymbol"),
                "default": a.getAttribute("default"),
                multipleValues: Xm(a.getAttribute("multipleValues")),
                nearestValue: Xm(a.getAttribute("nearestValue")),
                current: Xm(a.getAttribute("current")),
                values: Q(a)
            }
        }),
        Attribution: I(function(a, b) {
            return L({}, ss, a, b)
        }),
        AuthorityURL: Il(function(a, b) {
            if (b = bs(a, b))
                return b.name = a.getAttribute("name"),
                b
        }),
        Identifier: Il(Q),
        MetadataURL: Il(function(a, b) {
            if (b = bs(a, b))
                return b.type = a.getAttribute("type"),
                b
        }),
        DataURL: Il(bs),
        FeatureListURL: Il(bs),
        Style: Il(function(a, b) {
            return L({}, ts, a, b)
        }),
        MinScaleDenominator: I(Zm),
        MaxScaleDenominator: I(Zm),
        Layer: Il(function(a, b) {
            var c = b[b.length - 1]
              , d = L({}, ns, a, b);
            if (d)
                return b = Xm(a.getAttribute("queryable")),
                void 0 === b && (b = c.queryable),
                d.queryable = void 0 !== b ? b : !1,
                b = bn(a.getAttribute("cascaded")),
                void 0 === b && (b = c.cascaded),
                d.cascaded = b,
                b = Xm(a.getAttribute("opaque")),
                void 0 === b && (b = c.opaque),
                d.opaque = void 0 !== b ? b : !1,
                b = Xm(a.getAttribute("noSubsets")),
                void 0 === b && (b = c.noSubsets),
                d.noSubsets = void 0 !== b ? b : !1,
                (b = $m(a.getAttribute("fixedWidth"))) || (b = c.fixedWidth),
                d.fixedWidth = b,
                (a = $m(a.getAttribute("fixedHeight"))) || (a = c.fixedHeight),
                d.fixedHeight = a,
                ["Style", "CRS", "AuthorityURL"].forEach(function(a) {
                    a in c && (d[a] = (d[a] || []).concat(c[a]))
                }),
                "EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function(a) {
                    a in d || (d[a] = c[a])
                }),
                d
        })
    })
      , ss = K(is, {
        Title: I(Q),
        OnlineResource: I(Iq),
        LogoURL: I(fs)
    })
      , rs = K(is, {
        westBoundLongitude: I(Zm),
        eastBoundLongitude: I(Zm),
        southBoundLatitude: I(Zm),
        northBoundLatitude: I(Zm)
    })
      , ls = K(is, {
        GetCapabilities: I(ds),
        GetMap: I(ds),
        GetFeatureInfo: I(ds)
    })
      , es = K(is, {
        Format: Il(Q),
        DCPType: Il(function(a, b) {
            return L({}, us, a, b)
        })
    })
      , us = K(is, {
        HTTP: I(function(a, b) {
            return L({}, vs, a, b)
        })
    })
      , vs = K(is, {
        Get: I(bs),
        Post: I(bs)
    })
      , ts = K(is, {
        Name: I(Q),
        Title: I(Q),
        Abstract: I(Q),
        LegendURL: Il(fs),
        StyleSheetURL: I(bs),
        StyleURL: I(bs)
    })
      , cs = K(is, {
        Format: I(Q),
        OnlineResource: I(Iq)
    })
      , hs = K(is, {
        Keyword: Gl(Q)
    });
    function ws(a) {
        a = a ? a : {};
        this.a = "http://mapserver.gis.umn.edu/mapserver";
        this.b = new qn;
        this.c = a.layers ? a.layers : null;
        Rm.call(this)
    }
    v(ws, Rm);
    ws.prototype.Ac = function(a, b) {
        var c = {};
        b && rb(c, Ul(this, a, b));
        c = [c];
        a.setAttribute("namespaceURI", this.a);
        var d = a.localName;
        b = [];
        if (a.childNodes.length) {
            if ("msGMLOutput" == d)
                for (var e = 0, f = a.childNodes.length; e < f; e++) {
                    var g = a.childNodes[e];
                    if (g.nodeType === Node.ELEMENT_NODE) {
                        var h = c[0]
                          , l = g.localName.replace("_layer", "");
                        if (!this.c || ha(this.c, l)) {
                            l += "_feature";
                            h.featureType = l;
                            h.featureNS = this.a;
                            var m = {};
                            m[l] = Gl(this.b.Eg, this.b);
                            h = K([h.featureNS, null], m);
                            g.setAttribute("namespaceURI", this.a);
                            (g = L([], h, g, c, this.b)) && ka(b, g)
                        }
                    }
                }
            "FeatureCollection" == d && (a = L([], this.b.b, a, [{}], this.b)) && (b = a)
        }
        return b
    }
    ;
    ws.prototype.$g = function() {}
    ;
    ws.prototype.Yb = function() {}
    ;
    ws.prototype.se = function() {}
    ;
    function xs() {
        this.f = new Kq
    }
    v(xs, Jq);
    xs.prototype.a = function(a) {
        for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType == Node.ELEMENT_NODE)
                return this.b(a);
        return null
    }
    ;
    xs.prototype.b = function(a) {
        var b = a.getAttribute("version").trim()
          , c = this.f.b(a);
        if (!c)
            return null;
        c.version = b;
        return (c = L(c, ys, a, [])) ? c : null
    }
    ;
    function zs(a) {
        var b = Q(a).split(" ");
        if (b && 2 == b.length && (a = +b[0],
        b = +b[1],
        !isNaN(a) && !isNaN(b)))
            return [a, b]
    }
    var As = [null, "http://www.opengis.net/wmts/1.0"]
      , Bs = [null, "http://www.opengis.net/ows/1.1"]
      , ys = K(As, {
        Contents: I(function(a, b) {
            return L({}, Cs, a, b)
        })
    })
      , Cs = K(As, {
        Layer: Il(function(a, b) {
            return L({}, Ds, a, b)
        }),
        TileMatrixSet: Il(function(a, b) {
            return L({}, Es, a, b)
        })
    })
      , Ds = K(As, {
        Style: Il(function(a, b) {
            if (b = L({}, Fs, a, b))
                return a = "true" === a.getAttribute("isDefault"),
                b.isDefault = a,
                b
        }),
        Format: Il(Q),
        TileMatrixSetLink: Il(function(a, b) {
            return L({}, Gs, a, b)
        }),
        Dimension: Il(function(a, b) {
            return L({}, Hs, a, b)
        }),
        ResourceURL: Il(function(a) {
            var b = a.getAttribute("format")
              , c = a.getAttribute("template");
            a = a.getAttribute("resourceType");
            var d = {};
            b && (d.format = b);
            c && (d.template = c);
            a && (d.resourceType = a);
            return d
        })
    }, K(Bs, {
        Title: I(Q),
        Abstract: I(Q),
        WGS84BoundingBox: I(function(a, b) {
            a = L([], Is, a, b);
            if (2 == a.length)
                return La(a)
        }),
        Identifier: I(Q)
    }))
      , Fs = K(As, {
        LegendURL: Il(function(a) {
            var b = {};
            b.format = a.getAttribute("format");
            b.href = Iq(a);
            return b
        })
    }, K(Bs, {
        Title: I(Q),
        Identifier: I(Q)
    }))
      , Gs = K(As, {
        TileMatrixSet: I(Q),
        TileMatrixSetLimits: I(function(a, b) {
            return L([], Js, a, b)
        })
    })
      , Js = K(As, {
        TileMatrixLimits: Gl(function(a, b) {
            return L({}, Ks, a, b)
        })
    })
      , Ks = K(As, {
        TileMatrix: I(Q),
        MinTileRow: I(an),
        MaxTileRow: I(an),
        MinTileCol: I(an),
        MaxTileCol: I(an)
    })
      , Hs = K(As, {
        Default: I(Q),
        Value: Il(Q)
    }, K(Bs, {
        Identifier: I(Q)
    }))
      , Is = K(Bs, {
        LowerCorner: Gl(zs),
        UpperCorner: Gl(zs)
    })
      , Es = K(As, {
        WellKnownScaleSet: I(Q),
        TileMatrix: Il(function(a, b) {
            return L({}, Ls, a, b)
        })
    }, K(Bs, {
        SupportedCRS: I(Q),
        Identifier: I(Q)
    }))
      , Ls = K(As, {
        TopLeftCorner: I(zs),
        ScaleDenominator: I(Zm),
        TileWidth: I(an),
        TileHeight: I(an),
        MatrixWidth: I(an),
        MatrixHeight: I(an)
    }, K(Bs, {
        Identifier: I(Q)
    }));
    function Ms(a) {
        Qc.call(this);
        a = a || {};
        this.a = null;
        this.i = bc;
        this.g = new vb(6378137);
        this.c = void 0;
        y(this, Sc("projection"), this.Om, this);
        y(this, Sc("tracking"), this.Pm, this);
        void 0 !== a.projection && this.ei(a.projection);
        void 0 !== a.trackingOptions && this.Gj(a.trackingOptions);
        this.Ve(void 0 !== a.tracking ? a.tracking : !1)
    }
    v(Ms, Qc);
    k = Ms.prototype;
    k.ka = function() {
        this.Ve(!1);
        Qc.prototype.ka.call(this)
    }
    ;
    k.Om = function() {
        var a = this.ci();
        a && (this.i = Rb(Qb("EPSG:4326"), a),
        this.a && this.set("position", this.i(this.a)))
    }
    ;
    k.Pm = function() {
        if (Td) {
            var a = this.di();
            a && void 0 === this.c ? this.c = navigator.geolocation.watchPosition(this.Ap.bind(this), this.Bp.bind(this), this.Ph()) : a || void 0 === this.c || (navigator.geolocation.clearWatch(this.c),
            this.c = void 0)
        }
    }
    ;
    k.Ap = function(a) {
        a = a.coords;
        this.set("accuracy", a.accuracy);
        this.set("altitude", null === a.altitude ? void 0 : a.altitude);
        this.set("altitudeAccuracy", null === a.altitudeAccuracy ? void 0 : a.altitudeAccuracy);
        this.set("heading", null === a.heading ? void 0 : Fa(a.heading));
        this.a ? (this.a[0] = a.longitude,
        this.a[1] = a.latitude) : this.a = [a.longitude, a.latitude];
        var b = this.i(this.a);
        this.set("position", b);
        this.set("speed", null === a.speed ? void 0 : a.speed);
        a = Xf(this.g, this.a, a.accuracy);
        a.Fc(this.i);
        this.set("accuracyGeometry", a);
        this.s()
    }
    ;
    k.Bp = function(a) {
        a.type = "error";
        this.Ve(!1);
        this.b(a)
    }
    ;
    k.Ok = function() {
        return this.get("accuracy")
    }
    ;
    k.Pk = function() {
        return this.get("accuracyGeometry") || null
    }
    ;
    k.Rk = function() {
        return this.get("altitude")
    }
    ;
    k.Sk = function() {
        return this.get("altitudeAccuracy")
    }
    ;
    k.Mm = function() {
        return this.get("heading")
    }
    ;
    k.Nm = function() {
        return this.get("position")
    }
    ;
    k.ci = function() {
        return this.get("projection")
    }
    ;
    k.xl = function() {
        return this.get("speed")
    }
    ;
    k.di = function() {
        return this.get("tracking")
    }
    ;
    k.Ph = function() {
        return this.get("trackingOptions")
    }
    ;
    k.ei = function(a) {
        this.set("projection", Qb(a))
    }
    ;
    k.Ve = function(a) {
        this.set("tracking", a)
    }
    ;
    k.Gj = function(a) {
        this.set("trackingOptions", a)
    }
    ;
    function Ns(a, b, c) {
        pf.call(this);
        this.Vg(a, b ? b : 0, c)
    }
    v(Ns, pf);
    k = Ns.prototype;
    k.clone = function() {
        var a = new Ns(null);
        rf(a, this.ja, this.A.slice());
        a.s();
        return a
    }
    ;
    k.Jb = function(a, b, c, d) {
        var e = this.A;
        a -= e[0];
        var f = b - e[1];
        b = a * a + f * f;
        if (b < d) {
            if (b)
                for (d = this.ud() / Math.sqrt(b),
                c[0] = e[0] + d * a,
                c[1] = e[1] + d * f,
                d = 2; d < this.a; ++d)
                    c[d] = e[d];
            else
                for (d = 0; d < this.a; ++d)
                    c[d] = e[d];
            c.length = this.a;
            return b
        }
        return d
    }
    ;
    k.Pc = function(a, b) {
        var c = this.A;
        a -= c[0];
        b -= c[1];
        return a * a + b * b <= Os(this)
    }
    ;
    k.xa = function() {
        return this.A.slice(0, this.a)
    }
    ;
    k.Ce = function(a) {
        var b = this.A
          , c = b[this.a] - b[0];
        return Va(b[0] - c, b[1] - c, b[0] + c, b[1] + c, a)
    }
    ;
    k.ud = function() {
        return Math.sqrt(Os(this))
    }
    ;
    function Os(a) {
        var b = a.A[a.a] - a.A[0];
        a = a.A[a.a + 1] - a.A[1];
        return b * b + a * a
    }
    k.T = function() {
        return "Circle"
    }
    ;
    k.Ya = function(a) {
        var b = this.G();
        return ob(a, b) ? (b = this.xa(),
        a[0] <= b[0] && a[2] >= b[0] || a[1] <= b[1] && a[3] >= b[1] ? !0 : cb(a, this.vb, this)) : !1
    }
    ;
    k.qb = function(a) {
        var b = this.a
          , c = a.slice();
        c[b] = c[0] + (this.A[b] - this.A[0]);
        var d;
        for (d = 1; d < b; ++d)
            c[b + d] = a[d];
        rf(this, this.ja, c);
        this.s()
    }
    ;
    k.Vg = function(a, b, c) {
        if (a) {
            sf(this, c, a, 0);
            this.A || (this.A = []);
            c = this.A;
            a = Af(c, a);
            c[a++] = c[0] + b;
            var d;
            b = 1;
            for (d = this.a; b < d; ++b)
                c[a++] = c[b];
            c.length = a
        } else
            rf(this, "XY", null);
        this.s()
    }
    ;
    k.X = function() {}
    ;
    k.na = function() {}
    ;
    k.Xc = function(a) {
        this.A[this.a] = this.A[0] + a;
        this.s()
    }
    ;
    function Ps(a, b, c) {
        for (var d = [], e = a(0), f = a(1), g = b(e), h = b(f), l = [f, e], m = [h, g], n = [1, 0], p = {}, q = 1E5, t, u, x, B, z; 0 < --q && 0 < n.length; )
            x = n.pop(),
            e = l.pop(),
            g = m.pop(),
            f = x.toString(),
            f in p || (d.push(g[0], g[1]),
            p[f] = !0),
            B = n.pop(),
            f = l.pop(),
            h = m.pop(),
            z = (x + B) / 2,
            t = a(z),
            u = b(t),
            Da(u[0], u[1], g[0], g[1], h[0], h[1]) < c ? (d.push(h[0], h[1]),
            f = B.toString(),
            p[f] = !0) : (n.push(B, z, z, x),
            m.push(h, u, u, g),
            l.push(f, t, t, e));
        return d
    }
    function Qs(a, b, c, d, e) {
        var f = Qb("EPSG:4326");
        return Ps(function(d) {
            return [a, b + (c - b) * d]
        }, ac(f, d), e)
    }
    function Rs(a, b, c, d, e) {
        var f = Qb("EPSG:4326");
        return Ps(function(d) {
            return [b + (c - b) * d, a]
        }, ac(f, d), e)
    }
    ;function Ss(a) {
        a = a || {};
        this.i = this.v = null;
        this.j = this.g = Infinity;
        this.o = this.l = -Infinity;
        this.qa = this.pa = Infinity;
        this.S = this.I = -Infinity;
        this.va = void 0 !== a.targetSize ? a.targetSize : 100;
        this.jb = void 0 !== a.maxLines ? a.maxLines : 100;
        this.f = [];
        this.c = [];
        this.oa = void 0 !== a.strokeStyle ? a.strokeStyle : Ts;
        this.D = this.u = void 0;
        this.a = this.b = this.R = null;
        1 == a.showLabels && (this.ta = a.lonLabelFormatter ? a.lonLabelFormatter : $e.bind(this, "EW"),
        this.Va = a.latLabelFormatter ? a.latLabelFormatter : $e.bind(this, "NS"),
        this.ga = void 0 == a.lonLabelPosition ? 0 : a.lonLabelPosition,
        this.U = void 0 == a.latLabelPosition ? 1 : a.latLabelPosition,
        this.C = void 0 !== a.lonLabelStyle ? a.lonLabelStyle : new uo({
            font: "12px Calibri,sans-serif",
            textBaseline: "bottom",
            fill: new pl({
                color: "rgba(0,0,0,1)"
            }),
            stroke: new zj({
                color: "rgba(255,255,255,1)",
                width: 3
            })
        }),
        this.B = void 0 !== a.latLabelStyle ? a.latLabelStyle : new uo({
            font: "12px Calibri,sans-serif",
            textAlign: "end",
            fill: new pl({
                color: "rgba(0,0,0,1)"
            }),
            stroke: new zj({
                color: "rgba(255,255,255,1)",
                width: 3
            })
        }),
        this.b = [],
        this.a = []);
        this.setMap(void 0 !== a.map ? a.map : null)
    }
    var Ts = new zj({
        color: "rgba(0,0,0,0.2)"
    })
      , Us = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001];
    function Vs(a, b, c, d, e, f, g) {
        var h = g;
        c = Qs(b, c, d, a.i, e);
        h = void 0 !== a.f[h] ? a.f[h] : new M(null);
        h.aa("XY", c);
        ob(h.G(), f) && (a.b && (c = g,
        d = h.ba(),
        f = [d[0], Aa(f[1] + Math.abs(f[1] - f[3]) * a.ga, Math.max(f[1], d[1]), Math.min(f[3], d[d.length - 1]))],
        c = a.b[c] ? a.b[c].Wd : new C(null),
        c.na(f),
        a.b[g] = {
            Wd: c,
            text: a.ta(b)
        }),
        a.f[g++] = h);
        return g
    }
    function Ws(a, b, c, d, e, f, g) {
        var h = g;
        c = Rs(b, c, d, a.i, e);
        h = void 0 !== a.c[h] ? a.c[h] : new M(null);
        h.aa("XY", c);
        ob(h.G(), f) && (a.a && (c = g,
        d = h.ba(),
        f = [Aa(f[0] + Math.abs(f[0] - f[2]) * a.U, Math.max(f[0], d[0]), Math.min(f[2], d[d.length - 2])), d[1]],
        c = a.a[c] ? a.a[c].Wd : new C(null),
        c.na(f),
        a.a[g] = {
            Wd: c,
            text: a.Va(b)
        }),
        a.c[g++] = h);
        return g
    }
    k = Ss.prototype;
    k.Qm = function() {
        return this.v
    }
    ;
    k.ml = function() {
        return this.f
    }
    ;
    k.tl = function() {
        return this.c
    }
    ;
    k.Th = function(a) {
        var b = a.vectorContext
          , c = a.frameState;
        a = c.extent;
        var d = c.viewState
          , e = d.center
          , f = d.projection;
        d = d.resolution;
        c = c.pixelRatio;
        c = d * d / (4 * c * c);
        if (!this.i || !$b(this.i, f)) {
            var g = Qb("EPSG:4326")
              , h = f.G()
              , l = f.g
              , m = dc(l, g, f)
              , n = l[2]
              , p = l[1]
              , q = l[0]
              , t = m[3]
              , u = m[2]
              , x = m[1];
            m = m[0];
            this.g = l[3];
            this.j = n;
            this.l = p;
            this.o = q;
            this.pa = t;
            this.qa = u;
            this.I = x;
            this.S = m;
            this.u = ac(g, f);
            this.D = ac(f, g);
            this.R = this.D(lb(h));
            this.i = f
        }
        f = this.R[0];
        g = this.R[1];
        h = -1;
        n = Math.pow(this.va * d, 2);
        p = [];
        q = [];
        d = 0;
        for (l = Us.length; d < l; ++d) {
            t = Us[d] / 2;
            p[0] = f - t;
            p[1] = g - t;
            q[0] = f + t;
            q[1] = g + t;
            this.u(p, p);
            this.u(q, q);
            t = Math.pow(q[0] - p[0], 2) + Math.pow(q[1] - p[1], 2);
            if (t <= n)
                break;
            h = Us[d]
        }
        d = h;
        if (-1 == d)
            this.f.length = this.c.length = 0,
            this.b && (this.b.length = 0),
            this.a && (this.a.length = 0);
        else {
            f = this.D(e);
            e = f[0];
            f = f[1];
            g = this.jb;
            l = [Math.max(a[0], this.S), Math.max(a[1], this.I), Math.min(a[2], this.qa), Math.min(a[3], this.pa)];
            l = dc(l, this.i, "EPSG:4326");
            p = l[3];
            h = l[2];
            q = l[1];
            t = l[0];
            e = Math.floor(e / d) * d;
            u = Aa(e, this.o, this.j);
            n = Vs(this, u, q, p, c, a, 0);
            for (l = 0; u != this.o && l++ < g; )
                u = Math.max(u - d, this.o),
                n = Vs(this, u, q, p, c, a, n);
            u = Aa(e, this.o, this.j);
            for (l = 0; u != this.j && l++ < g; )
                u = Math.min(u + d, this.j),
                n = Vs(this, u, q, p, c, a, n);
            this.f.length = n;
            this.b && (this.b.length = n);
            f = Math.floor(f / d) * d;
            e = Aa(f, this.l, this.g);
            n = Ws(this, e, t, h, c, a, 0);
            for (l = 0; e != this.l && l++ < g; )
                e = Math.max(e - d, this.l),
                n = Ws(this, e, t, h, c, a, n);
            e = Aa(f, this.l, this.g);
            for (l = 0; e != this.g && l++ < g; )
                e = Math.min(e + d, this.g),
                n = Ws(this, e, t, h, c, a, n);
            this.c.length = n;
            this.a && (this.a.length = n)
        }
        b.Na(null, this.oa);
        a = 0;
        for (c = this.f.length; a < c; ++a)
            e = this.f[a],
            b.Cb(e);
        a = 0;
        for (c = this.c.length; a < c; ++a)
            e = this.c[a],
            b.Cb(e);
        if (this.b)
            for (a = 0,
            c = this.b.length; a < c; ++a)
                e = this.b[a],
                this.C.Cd(e.text),
                b.gb(this.C),
                b.Cb(e.Wd);
        if (this.a)
            for (a = 0,
            c = this.a.length; a < c; ++a)
                e = this.a[a],
                this.B.Cd(e.text),
                b.gb(this.B),
                b.Cb(e.Wd)
    }
    ;
    k.setMap = function(a) {
        this.v && (this.v.K("postcompose", this.Th, this),
        this.v.render());
        a && (a.J("postcompose", this.Th, this),
        a.render());
        this.v = a
    }
    ;
    function Xs(a, b, c, d, e) {
        Nc.call(this);
        this.i = e;
        this.extent = a;
        this.a = c;
        this.resolution = b;
        this.state = d
    }
    v(Xs, Nc);
    Xs.prototype.s = function() {
        this.b("change")
    }
    ;
    Xs.prototype.G = function() {
        return this.extent
    }
    ;
    Xs.prototype.getState = function() {
        return this.state
    }
    ;
    function Ys(a, b, c, d, e, f, g) {
        Xs.call(this, a, b, c, 0, d);
        this.j = e;
        this.M = new Image;
        null !== f && (this.M.crossOrigin = f);
        this.c = {};
        this.f = null;
        this.state = 0;
        this.g = g
    }
    v(Ys, Xs);
    k = Ys.prototype;
    k.Y = function(a) {
        if (void 0 !== a) {
            var b;
            a = w(a);
            if (a in this.c)
                return this.c[a];
            ub(this.c) ? b = this.M : b = this.M.cloneNode(!1);
            return this.c[a] = b
        }
        return this.M
    }
    ;
    k.Tm = function() {
        this.state = 3;
        this.f.forEach(zc);
        this.f = null;
        this.s()
    }
    ;
    k.Um = function() {
        void 0 === this.resolution && (this.resolution = kb(this.extent) / this.M.height);
        this.state = 2;
        this.f.forEach(zc);
        this.f = null;
        this.s()
    }
    ;
    k.load = function() {
        if (0 == this.state || 3 == this.state)
            this.state = 1,
            this.s(),
            this.f = [Gc(this.M, "error", this.Tm, this), Gc(this.M, "load", this.Um, this)],
            this.g(this, this.j)
    }
    ;
    k.Wg = function(a) {
        this.M = a
    }
    ;
    function Zs(a, b, c, d, e, f) {
        this.c = f ? f : null;
        Xs.call(this, a, b, c, f ? 0 : 2, d);
        this.f = e
    }
    v(Zs, Xs);
    Zs.prototype.g = function(a) {
        this.state = a ? 3 : 2;
        this.s()
    }
    ;
    Zs.prototype.load = function() {
        0 == this.state && (this.state = 1,
        this.s(),
        this.c(this.g.bind(this)))
    }
    ;
    Zs.prototype.Y = function() {
        return this.f
    }
    ;
    function $s(a, b) {
        Nc.call(this);
        this.sa = a;
        this.state = b;
        this.a = null;
        this.key = ""
    }
    v($s, Nc);
    $s.prototype.s = function() {
        this.b("change")
    }
    ;
    $s.prototype.fb = function() {
        return this.key + "/" + this.sa
    }
    ;
    function at(a) {
        if (!a.a)
            return a;
        var b = a.a;
        do {
            if (2 == b.getState())
                return b;
            b = b.a
        } while (b);
        return a
    }
    function bt(a) {
        if (a.a) {
            var b = a.a;
            do {
                if (2 == b.getState()) {
                    b.a = null;
                    break
                } else
                    1 == b.getState() ? a = b : 0 == b.getState() ? a.a = b.a : a = b;
                b = a.a
            } while (b)
        }
    }
    $s.prototype.i = function() {
        return this.sa
    }
    ;
    $s.prototype.getState = function() {
        return this.state
    }
    ;
    function ct(a, b) {
        a.state = b;
        a.s()
    }
    ;function dt(a, b, c, d, e) {
        $s.call(this, a, b);
        this.g = c;
        this.M = new Image;
        null !== d && (this.M.crossOrigin = d);
        this.c = null;
        this.j = e
    }
    v(dt, $s);
    k = dt.prototype;
    k.ka = function() {
        1 == this.state && (et(this),
        this.M.src = ft.toDataURL("image/png"));
        this.a && Kc(this.a);
        this.state = 5;
        this.s();
        $s.prototype.ka.call(this)
    }
    ;
    k.Y = function() {
        return this.M
    }
    ;
    k.fb = function() {
        return this.g
    }
    ;
    k.Rm = function() {
        this.state = 3;
        et(this);
        this.M = ft;
        this.s()
    }
    ;
    k.Sm = function() {
        this.state = this.M.naturalWidth && this.M.naturalHeight ? 2 : 4;
        et(this);
        this.s()
    }
    ;
    k.load = function() {
        if (0 == this.state || 3 == this.state)
            this.state = 1,
            this.s(),
            this.c = [Gc(this.M, "error", this.Rm, this), Gc(this.M, "load", this.Sm, this)],
            this.j(this, this.g)
    }
    ;
    function et(a) {
        a.c.forEach(zc);
        a.c = null
    }
    var ft, gt = gd(1, 1);
    gt.fillStyle = "rgba(0,0,0,0)";
    gt.fillRect(0, 0, 1, 1);
    ft = gt.canvas;
    function ht(a) {
        a = a ? a : {};
        ng.call(this, {
            handleEvent: jf
        });
        this.j = a.formatConstructors ? a.formatConstructors : [];
        this.o = a.projection ? Qb(a.projection) : null;
        this.a = null;
        this.g = a.source || null;
        this.target = a.target ? a.target : null
    }
    v(ht, ng);
    function it(a) {
        a = a.dataTransfer.files;
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c) {
            var d = a.item(c);
            var e = new FileReader;
            e.addEventListener("load", this.l.bind(this, d));
            e.readAsText(d)
        }
    }
    function jt(a) {
        a.stopPropagation();
        a.preventDefault();
        a.dataTransfer.dropEffect = "copy"
    }
    ht.prototype.l = function(a, b) {
        b = b.target.result;
        var c = this.v
          , d = this.o;
        d || (d = c.$().v);
        c = this.j;
        var e = [], f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = new c[g];
            var l = {
                featureProjection: d
            };
            try {
                e = h.Oa(b, l)
            } catch (m) {
                e = null
            }
            if (e && 0 < e.length)
                break
        }
        this.g && (this.g.clear(),
        this.g.Ec(e));
        this.b(new kt(lt,a,e,d))
    }
    ;
    function mt(a) {
        var b = a.v;
        b && (b = a.target ? a.target : b.a,
        a.a = [y(b, "drop", it, a), y(b, "dragenter", jt, a), y(b, "dragover", jt, a), y(b, "drop", jt, a)])
    }
    ht.prototype.Ia = function(a) {
        ng.prototype.Ia.call(this, a);
        a ? mt(this) : nt(this)
    }
    ;
    ht.prototype.setMap = function(a) {
        nt(this);
        ng.prototype.setMap.call(this, a);
        this.c() && mt(this)
    }
    ;
    function nt(a) {
        a.a && (a.a.forEach(zc),
        a.a = null)
    }
    var lt = "addfeatures";
    function kt(a, b, c, d) {
        Lc.call(this, a);
        this.features = c;
        this.file = b;
        this.projection = d
    }
    v(kt, Lc);
    function ot(a) {
        a = a ? a : {};
        Dg.call(this, {
            handleDownEvent: pt,
            handleDragEvent: qt,
            handleUpEvent: rt
        });
        this.o = a.condition ? a.condition : zg;
        this.a = this.g = void 0;
        this.j = 0;
        this.u = void 0 !== a.duration ? a.duration : 400
    }
    v(ot, Dg);
    function qt(a) {
        if (Bg(a)) {
            var b = a.map
              , c = b.Mb()
              , d = a.pixel;
            a = d[0] - c[0] / 2;
            d = c[1] / 2 - d[1];
            c = Math.atan2(d, a);
            a = Math.sqrt(a * a + d * d);
            b = b.$();
            b.g.rotation !== Re && void 0 !== this.g && (d = c - this.g,
            og(b, b.Qa() - d));
            this.g = c;
            void 0 !== this.a && (c = this.a * (b.Pa() / a),
            qg(b, c));
            void 0 !== this.a && (this.j = this.a / a);
            this.a = a
        }
    }
    function rt(a) {
        if (!Bg(a))
            return !0;
        a = a.map.$();
        cg(a, 1, -1);
        var b = this.j - 1
          , c = a.Qa();
        c = a.constrainRotation(c, 0);
        og(a, c, void 0, void 0);
        c = a.Pa();
        var d = this.u;
        c = a.constrainResolution(c, 0, b);
        qg(a, c, void 0, d);
        this.j = 0;
        return !1
    }
    function pt(a) {
        return Bg(a) && this.o(a) ? (cg(a.map.$(), 1, 1),
        this.a = this.g = void 0,
        !0) : !1
    }
    ;function st(a, b, c, d) {
        this.oa = a;
        this.Va = b;
        this.overlaps = d;
        this.c = 0;
        this.resolution = c;
        this.qa = this.pa = null;
        this.a = [];
        this.coordinates = [];
        this.ga = {};
        this.U = Dh();
        this.b = [];
        this.C = null;
        this.jb = Dh();
        this.ta = Dh()
    }
    v(st, Yh);
    function tt(a, b, c, d, e, f, g) {
        var h = a.coordinates.length
          , l = a.Zf();
        g && (c += e);
        g = [b[c], b[c + 1]];
        var m = [NaN, NaN], n = !0, p;
        for (p = c + e; p < d; p += e) {
            m[0] = b[p];
            m[1] = b[p + 1];
            var q = Ua(l, m);
            q !== t ? (n && (a.coordinates[h++] = g[0],
            a.coordinates[h++] = g[1]),
            a.coordinates[h++] = m[0],
            a.coordinates[h++] = m[1],
            n = !1) : 1 === q ? (a.coordinates[h++] = m[0],
            a.coordinates[h++] = m[1],
            n = !1) : n = !0;
            g[0] = m[0];
            g[1] = m[1];
            var t = q
        }
        if (f && n || p === c + e)
            a.coordinates[h++] = g[0],
            a.coordinates[h++] = g[1];
        return h
    }
    function ut(a, b, c, d, e, f) {
        for (var g = 0, h = d.length; g < h; ++g) {
            var l = d[g];
            c = tt(a, b, c, l, e, !1, !1);
            f.push(c);
            c = l
        }
        return c
    }
    k = st.prototype;
    k.wh = function(a, b, c) {
        vt(this, b);
        var d = a.T(), e = a.ma(), f = this.coordinates.length, g;
        if ("MultiPolygon" == d) {
            d = hi(a);
            var h = [];
            for (var l = a.c, m = g = 0, n = l.length; m < n; ++m) {
                var p = [];
                g = ut(this, d, g, l[m], e, p);
                h.push(p)
            }
            this.a.push([4, f, h, a, c, Ff])
        } else
            "Polygon" == d || "MultiLineString" == d ? (h = [],
            d = "Polygon" == d ? a.Tb() : a.ba(),
            ut(this, d, 0, a.rb(), e, h),
            this.a.push([4, f, h, a, c, Ef])) : "LineString" == d || "MultiPoint" == d ? (d = a.ba(),
            e = tt(this, d, 0, d.length, e, !1, !1),
            this.a.push([4, f, e, a, c, Df])) : "Point" == d && (d = a.ba(),
            this.coordinates.push(d[0], d[1]),
            e = this.coordinates.length,
            this.a.push([4, f, e, a, c]));
        wt(this, b)
    }
    ;
    function vt(a, b) {
        a.pa = [0, b, 0];
        a.a.push(a.pa);
        a.qa = [0, b, 0];
        a.b.push(a.qa)
    }
    k.Wa = function(a, b) {
        if (this.S) {
            var c = Ih(this.U, this.S.slice());
            a.translate(c[0], c[1]);
            a.rotate(b)
        }
        a.fill();
        this.S && a.setTransform.apply(a, this.ta)
    }
    ;
    function xt(a, b, c, d, e, f, g, h, l) {
        if (a.C && ma(d, a.U))
            var m = a.C;
        else
            a.C || (a.C = []),
            m = mf(a.coordinates, 0, a.coordinates.length, 2, d, a.C),
            Hh(a.U, d);
        d = !ub(f);
        for (var n = 0, p = g.length, q = 0, t, u = a.jb, x = a.ta, B, z, G, E, ia = 0, T = 0, R = a.ga, U = {
            context: b,
            pixelRatio: c,
            resolution: a.resolution,
            rotation: e
        }, ta = a.a != g || a.overlaps ? 0 : 200; n < p; ) {
            var A = g[n];
            switch (A[0]) {
            case 0:
                var ea = A[1];
                d && f[w(ea).toString()] || !ea.V() ? n = A[2] : void 0 === l || ob(l, ea.V().G()) ? ++n : n = A[2] + 1;
                break;
            case 1:
                ia > ta && (a.Wa(b, e),
                ia = 0);
                T > ta && (b.stroke(),
                T = 0);
                ia || T || (b.beginPath(),
                B = z = NaN);
                ++n;
                break;
            case 2:
                q = A[1];
                t = m[q];
                A = m[q + 1];
                G = m[q + 2] - t;
                q = m[q + 3] - A;
                q = Math.sqrt(G * G + q * q);
                b.moveTo(t + q, A);
                b.arc(t, A, q, 0, 2 * Math.PI, !0);
                ++n;
                break;
            case 3:
                b.closePath();
                ++n;
                break;
            case 4:
                q = A[1];
                t = A[2];
                G = A[4];
                E = 6 == A.length ? A[5] : void 0;
                U.geometry = A[3];
                U.feature = ea;
                n in R || (R[n] = []);
                A = R[n];
                E ? E(m, q, t, 2, A) : (A[0] = m[q],
                A[1] = m[q + 1],
                A.length = 2);
                G(A, U);
                ++n;
                break;
            case 5:
                q = A[1];
                t = A[2];
                var Ya = A[3];
                var da = A[4] * c;
                var Vb = A[5] * c;
                var Ac = A[6]
                  , ge = A[7]
                  , he = A[8]
                  , Nf = A[9];
                var Bc = A[10];
                G = A[11];
                E = A[12];
                var zh = A[13]
                  , Ig = A[14];
                for (Bc && (G += e); q < t; q += 2) {
                    A = m[q] - da;
                    Bc = m[q + 1] - Vb;
                    zh && (A = Math.round(A),
                    Bc = Math.round(Bc));
                    if (1 != E || G) {
                        var of = A + da
                          , Ah = Bc + Vb;
                        Mh(u, of, Ah, E, E, G, -of, -Ah);
                        b.setTransform.apply(b, u)
                    }
                    of = b.globalAlpha;
                    1 != ge && (b.globalAlpha = of * ge);
                    Ah = Ig + he > Ya.width ? Ya.width - he : Ig;
                    var Uq = Ac + Nf > Ya.height ? Ya.height - Nf : Ac;
                    b.drawImage(Ya, he, Nf, Ah, Uq, A, Bc, Ah * c, Uq * c);
                    1 != ge && (b.globalAlpha = of);
                    (1 != E || G) && b.setTransform.apply(b, x)
                }
                ++n;
                break;
            case 6:
                q = A[1];
                t = A[2];
                Vb = A[3];
                Ac = A[4] * c;
                ge = A[5] * c;
                G = A[6];
                E = A[7] * c;
                Ya = A[8];
                da = A[9];
                for ((Bc = A[10]) && (G += e); q < t; q += 2) {
                    A = m[q] + Ac;
                    Bc = m[q + 1] + ge;
                    if (1 != E || G)
                        Mh(u, A, Bc, E, E, G, -A, -Bc),
                        b.setTransform.apply(b, u);
                    he = Vb.split("\n");
                    Nf = he.length;
                    1 < Nf ? (zh = Math.round(1.5 * b.measureText("M").width),
                    Bc -= (Nf - 1) / 2 * zh) : zh = 0;
                    for (Ig = 0; Ig < Nf; Ig++)
                        of = he[Ig],
                        da && b.strokeText(of, A, Bc),
                        Ya && b.fillText(of, A, Bc),
                        Bc += zh;
                    (1 != E || G) && b.setTransform.apply(b, x)
                }
                ++n;
                break;
            case 7:
                if (h && (ea = A[1],
                q = h(ea)))
                    return q;
                ++n;
                break;
            case 8:
                ta ? ia++ : a.Wa(b, e);
                ++n;
                break;
            case 9:
                q = A[1];
                t = A[2];
                A = m[q];
                Bc = m[q + 1];
                G = A + .5 | 0;
                E = Bc + .5 | 0;
                if (G !== B || E !== z)
                    b.moveTo(A, Bc),
                    B = G,
                    z = E;
                for (q += 2; q < t; q += 2)
                    if (A = m[q],
                    Bc = m[q + 1],
                    G = A + .5 | 0,
                    E = Bc + .5 | 0,
                    q == t - 2 || G !== B || E !== z)
                        b.lineTo(A, Bc),
                        B = G,
                        z = E;
                ++n;
                break;
            case 10:
                a.S = A[2];
                ia && (a.Wa(b, e),
                ia = 0,
                T && (b.stroke(),
                T = 0));
                b.fillStyle = A[1];
                ++n;
                break;
            case 11:
                q = void 0 !== A[8] ? A[8] : !0;
                var Kl = A[9];
                t = A[2];
                T && (b.stroke(),
                T = 0);
                b.strokeStyle = A[1];
                b.lineWidth = q ? t * c : t;
                b.lineCap = A[3];
                b.lineJoin = A[4];
                b.miterLimit = A[5];
                Qd && (t = A[6],
                G = A[7],
                q && c !== Kl && (t = t.map(function(a) {
                    return a * c / Kl
                }),
                G *= c / Kl,
                A[6] = t,
                A[7] = G,
                A[9] = c),
                b.lineDashOffset = G,
                b.setLineDash(t));
                ++n;
                break;
            case 12:
                b.font = A[1];
                b.textAlign = A[2];
                b.textBaseline = A[3];
                ++n;
                break;
            case 13:
                ta ? T++ : b.stroke();
                ++n;
                break;
            default:
                ++n
            }
        }
        ia && a.Wa(b, e);
        T && b.stroke()
    }
    k.Ma = function(a, b, c, d, e) {
        xt(this, a, b, c, d, e, this.a, void 0, void 0)
    }
    ;
    function yt(a) {
        var b = a.b;
        b.reverse();
        var c, d = b.length, e = -1;
        for (c = 0; c < d; ++c) {
            var f = b[c];
            var g = f[0];
            if (7 == g)
                e = c;
            else if (0 == g) {
                f[2] = c;
                f = a.b;
                for (g = c; e < g; ) {
                    var h = f[e];
                    f[e] = f[g];
                    f[g] = h;
                    ++e;
                    --g
                }
                e = -1
            }
        }
    }
    function wt(a, b) {
        a.pa[2] = a.a.length;
        a.pa = null;
        a.qa[2] = a.b.length;
        a.qa = null;
        b = [7, b];
        a.a.push(b);
        a.b.push(b)
    }
    k.df = ra;
    k.Zf = function() {
        return this.Va
    }
    ;
    function zt(a, b, c, d) {
        st.call(this, a, b, c, d);
        this.M = this.I = null;
        this.R = this.u = this.v = this.o = this.l = this.B = this.D = this.j = this.g = this.i = this.f = void 0
    }
    v(zt, st);
    zt.prototype.sc = function(a, b) {
        if (this.M) {
            vt(this, b);
            var c = a.ba()
              , d = this.coordinates.length;
            a = tt(this, c, 0, c.length, a.ma(), !1, !1);
            this.a.push([5, d, a, this.M, this.f, this.i, this.g, this.j, this.D, this.B, this.l, this.o, this.v, this.u, this.R]);
            this.b.push([5, d, a, this.I, this.f, this.i, this.g, this.j, this.D, this.B, this.l, this.o, this.v, this.u, this.R]);
            wt(this, b)
        }
    }
    ;
    zt.prototype.qc = function(a, b) {
        if (this.M) {
            vt(this, b);
            var c = a.ba()
              , d = this.coordinates.length;
            a = tt(this, c, 0, c.length, a.ma(), !1, !1);
            this.a.push([5, d, a, this.M, this.f, this.i, this.g, this.j, this.D, this.B, this.l, this.o, this.v, this.u, this.R]);
            this.b.push([5, d, a, this.I, this.f, this.i, this.g, this.j, this.D, this.B, this.l, this.o, this.v, this.u, this.R]);
            wt(this, b)
        }
    }
    ;
    zt.prototype.df = function() {
        yt(this);
        this.i = this.f = void 0;
        this.M = this.I = null;
        this.R = this.u = this.o = this.l = this.B = this.D = this.j = this.v = this.g = void 0
    }
    ;
    zt.prototype.Vb = function(a) {
        var b = a.Jc()
          , c = a.ic()
          , d = a.yg(1)
          , e = a.Y(1)
          , f = a.Rc();
        this.f = b[0];
        this.i = b[1];
        this.I = d;
        this.M = e;
        this.g = c[1];
        this.j = a.i;
        this.D = f[0];
        this.B = f[1];
        this.l = a.o;
        this.o = a.g;
        this.v = a.a;
        this.u = a.v;
        this.R = c[0]
    }
    ;
    function At(a, b, c, d) {
        st.call(this, a, b, c, d);
        this.i = null;
        this.f = {
            Rd: void 0,
            Ld: void 0,
            Md: null,
            Nd: void 0,
            Od: void 0,
            Pd: void 0,
            Qd: void 0,
            rd: void 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }
    v(At, st);
    function Bt(a, b, c, d, e) {
        var f = a.coordinates.length;
        b = tt(a, b, c, d, e, !1, !1);
        f = [9, f, b];
        a.a.push(f);
        a.b.push(f);
        return d
    }
    k = At.prototype;
    k.Zf = function() {
        this.i || (this.i = Pa(this.Va),
        0 < this.c && Oa(this.i, this.resolution * (this.c + 1) / 2, this.i));
        return this.i
    }
    ;
    function Ct(a) {
        var b = a.f
          , c = b.strokeStyle
          , d = b.lineCap
          , e = b.lineDash
          , f = b.lineDashOffset
          , g = b.lineJoin
          , h = b.lineWidth
          , l = b.miterLimit;
        b.Rd == c && b.Ld == d && ma(b.Md, e) && b.Nd == f && b.Od == g && b.Pd == h && b.Qd == l || (void 0 != b.rd && b.rd != a.coordinates.length && (a.a.push([13]),
        b.rd = a.coordinates.length),
        b.rd = 0,
        a.a.push([11, c, h, d, g, l, e, f, !0, 1], [1]),
        b.Rd = c,
        b.Ld = d,
        b.Md = e,
        b.Nd = f,
        b.Od = g,
        b.Pd = h,
        b.Qd = l)
    }
    k.oc = function(a, b) {
        var c = this.f
          , d = c.lineWidth;
        void 0 !== c.strokeStyle && void 0 !== d && (Ct(this),
        vt(this, b),
        this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset, !0, 1], [1]),
        c = a.ba(),
        Bt(this, c, 0, c.length, a.ma()),
        this.b.push([13]),
        wt(this, b))
    }
    ;
    k.pc = function(a, b) {
        var c = this.f
          , d = c.lineWidth;
        if (void 0 !== c.strokeStyle && void 0 !== d) {
            Ct(this);
            vt(this, b);
            this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset, !0, 1], [1]);
            c = a.rb();
            d = a.ba();
            a = a.ma();
            var e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g)
                e = Bt(this, d, e, c[g], a);
            this.b.push([13]);
            wt(this, b)
        }
    }
    ;
    k.df = function() {
        var a = this.f;
        void 0 != a.rd && a.rd != this.coordinates.length && this.a.push([13]);
        yt(this);
        this.f = null
    }
    ;
    k.Na = function(a, b) {
        a = b.b;
        this.f.strokeStyle = fd(a ? a : Wh);
        a = b.g;
        this.f.lineCap = void 0 !== a ? a : "round";
        a = b.f;
        this.f.lineDash = a ? a : Vh;
        a = b.i;
        this.f.lineDashOffset = a ? a : 0;
        a = b.j;
        this.f.lineJoin = void 0 !== a ? a : "round";
        a = b.c;
        this.f.lineWidth = void 0 !== a ? a : 1;
        b = b.l;
        this.f.miterLimit = void 0 !== b ? b : 10;
        this.f.lineWidth > this.c && (this.c = this.f.lineWidth,
        this.i = null)
    }
    ;
    function Dt(a, b, c, d) {
        st.call(this, a, b, c, d);
        this.i = null;
        this.f = {
            uh: void 0,
            Rd: void 0,
            Ld: void 0,
            Md: null,
            Nd: void 0,
            Od: void 0,
            Pd: void 0,
            Qd: void 0,
            fillStyle: void 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }
    v(Dt, st);
    function Et(a, b, c, d, e) {
        var f = a.f
          , g = void 0 !== f.fillStyle;
        f = void 0 != f.strokeStyle;
        var h = d.length
          , l = [1];
        a.a.push(l);
        a.b.push(l);
        for (l = 0; l < h; ++l) {
            var m = d[l]
              , n = a.coordinates.length;
            c = tt(a, b, c, m, e, !0, !f);
            c = [9, n, c];
            a.a.push(c);
            a.b.push(c);
            f && (c = [3],
            a.a.push(c),
            a.b.push(c));
            c = m
        }
        b = [8];
        a.b.push(b);
        g && a.a.push(b);
        f && (g = [13],
        a.a.push(g),
        a.b.push(g));
        return c
    }
    k = Dt.prototype;
    k.$b = function(a, b) {
        var c = this.f
          , d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d) {
            Ft(this, a);
            vt(this, b);
            this.b.push([10, dd(Uh)]);
            void 0 !== c.strokeStyle && this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset, !0, 1]);
            var e = a.ba();
            d = this.coordinates.length;
            tt(this, e, 0, e.length, a.ma(), !1, !1);
            a = [1];
            d = [2, d];
            this.a.push(a, d);
            this.b.push(a, d);
            a = [8];
            this.b.push(a);
            void 0 !== c.fillStyle && this.a.push(a);
            void 0 !== c.strokeStyle && (c = [13],
            this.a.push(c),
            this.b.push(c));
            wt(this, b)
        }
    }
    ;
    k.tc = function(a, b) {
        var c = this.f;
        Ft(this, a);
        vt(this, b);
        this.b.push([10, dd(Uh)]);
        void 0 !== c.strokeStyle && this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset, !0, 1]);
        c = a.rb();
        var d = a.Tb();
        Et(this, d, 0, c, a.ma());
        wt(this, b)
    }
    ;
    k.rc = function(a, b) {
        var c = this.f
          , d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d) {
            Ft(this, a);
            vt(this, b);
            this.b.push([10, dd(Uh)]);
            void 0 !== c.strokeStyle && this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset, !0, 1]);
            c = a.c;
            d = hi(a);
            a = a.ma();
            var e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g)
                e = Et(this, d, e, c[g], a);
            wt(this, b)
        }
    }
    ;
    k.df = function() {
        yt(this);
        this.f = null;
        var a = this.oa;
        if (a) {
            var b = this.coordinates, c;
            var d = 0;
            for (c = b.length; d < c; ++d)
                b[d] = a * Math.round(b[d] / a)
        }
    }
    ;
    k.Zf = function() {
        this.i || (this.i = Pa(this.Va),
        0 < this.c && Oa(this.i, this.resolution * (this.c + 1) / 2, this.i));
        return this.i
    }
    ;
    k.Na = function(a, b) {
        var c = this.f;
        a ? (a = a.b,
        c.fillStyle = fd(a ? a : Uh)) : c.fillStyle = void 0;
        b ? (a = b.b,
        c.strokeStyle = fd(a ? a : Wh),
        a = b.g,
        c.lineCap = void 0 !== a ? a : "round",
        a = b.f,
        c.lineDash = a ? a.slice() : Vh,
        a = b.i,
        c.lineDashOffset = a ? a : 0,
        a = b.j,
        c.lineJoin = void 0 !== a ? a : "round",
        a = b.c,
        c.lineWidth = void 0 !== a ? a : 1,
        b = b.l,
        c.miterLimit = void 0 !== b ? b : 10,
        c.lineWidth > this.c && (this.c = c.lineWidth,
        this.i = null)) : (c.strokeStyle = void 0,
        c.lineCap = void 0,
        c.lineDash = null,
        c.lineDashOffset = void 0,
        c.lineJoin = void 0,
        c.lineWidth = void 0,
        c.miterLimit = void 0)
    }
    ;
    function Ft(a, b) {
        var c = a.f
          , d = c.fillStyle
          , e = c.strokeStyle
          , f = c.lineCap
          , g = c.lineDash
          , h = c.lineDashOffset
          , l = c.lineJoin
          , m = c.lineWidth
          , n = c.miterLimit;
        if (void 0 !== d && ("string" !== typeof d || c.uh != d)) {
            var p = [10, d];
            "string" !== typeof d && (b = b.G(),
            p.push([b[0], b[3]]));
            a.a.push(p);
            c.uh = c.fillStyle
        }
        void 0 === e || c.Rd == e && c.Ld == f && ma(c.Md, g) && c.Nd == h && c.Od == l && c.Pd == m && c.Qd == n || (a.a.push([11, e, m, f, l, n, g, h, !0, 1]),
        c.Rd = e,
        c.Ld = f,
        c.Md = g,
        c.Nd = h,
        c.Od = l,
        c.Pd = m,
        c.Qd = n)
    }
    ;function Gt(a, b, c, d) {
        st.call(this, a, b, c, d);
        this.B = this.D = this.R = null;
        this.ua = "";
        this.l = this.j = 0;
        this.o = void 0;
        this.u = this.v = 0;
        this.g = this.i = this.f = null
    }
    v(Gt, st);
    Gt.prototype.Qb = function(a, b, c, d, e, f) {
        if ("" !== this.ua && this.g && (this.f || this.i)) {
            if (this.f) {
                e = this.f;
                var g = this.R;
                if (!g || g.fillStyle != e.fillStyle) {
                    var h = [10, e.fillStyle];
                    this.a.push(h);
                    this.b.push(h);
                    g ? g.fillStyle = e.fillStyle : this.R = {
                        fillStyle: e.fillStyle
                    }
                }
            }
            this.i && (e = this.i,
            g = this.D,
            g && g.lineCap == e.lineCap && g.lineDash == e.lineDash && g.lineDashOffset == e.lineDashOffset && g.lineJoin == e.lineJoin && g.lineWidth == e.lineWidth && g.miterLimit == e.miterLimit && g.strokeStyle == e.strokeStyle || (h = [11, e.strokeStyle, e.lineWidth, e.lineCap, e.lineJoin, e.miterLimit, e.lineDash, e.lineDashOffset, !1, 1],
            this.a.push(h),
            this.b.push(h),
            g ? (g.lineCap = e.lineCap,
            g.lineDash = e.lineDash,
            g.lineDashOffset = e.lineDashOffset,
            g.lineJoin = e.lineJoin,
            g.lineWidth = e.lineWidth,
            g.miterLimit = e.miterLimit,
            g.strokeStyle = e.strokeStyle) : this.D = {
                lineCap: e.lineCap,
                lineDash: e.lineDash,
                lineDashOffset: e.lineDashOffset,
                lineJoin: e.lineJoin,
                lineWidth: e.lineWidth,
                miterLimit: e.miterLimit,
                strokeStyle: e.strokeStyle
            }));
            e = this.g;
            g = this.B;
            g && g.font == e.font && g.textAlign == e.textAlign && g.textBaseline == e.textBaseline || (h = [12, e.font, e.textAlign, e.textBaseline],
            this.a.push(h),
            this.b.push(h),
            g ? (g.font = e.font,
            g.textAlign = e.textAlign,
            g.textBaseline = e.textBaseline) : this.B = {
                font: e.font,
                textAlign: e.textAlign,
                textBaseline: e.textBaseline
            });
            vt(this, f);
            e = this.coordinates.length;
            a = tt(this, a, b, c, d, !1, !1);
            a = [6, e, a, this.ua, this.j, this.l, this.v, this.u, !!this.f, !!this.i, this.o];
            this.a.push(a);
            this.b.push(a);
            wt(this, f)
        }
    }
    ;
    Gt.prototype.gb = function(a) {
        if (a) {
            var b = a.Da();
            b ? (b = b.b,
            b = fd(b ? b : Uh),
            this.f ? this.f.fillStyle = b : this.f = {
                fillStyle: b
            }) : this.f = null;
            var c = a.Ea();
            if (c) {
                b = c.b;
                var d = c.g
                  , e = c.f
                  , f = c.i
                  , g = c.j
                  , h = c.c;
                c = c.l;
                d = void 0 !== d ? d : "round";
                e = e ? e.slice() : Vh;
                f = void 0 !== f ? f : 0;
                g = void 0 !== g ? g : "round";
                h = void 0 !== h ? h : 1;
                c = void 0 !== c ? c : 10;
                b = fd(b ? b : Wh);
                if (this.i) {
                    var l = this.i;
                    l.lineCap = d;
                    l.lineDash = e;
                    l.lineDashOffset = f;
                    l.lineJoin = g;
                    l.lineWidth = h;
                    l.miterLimit = c;
                    l.strokeStyle = b
                } else
                    this.i = {
                        lineCap: d,
                        lineDash: e,
                        lineDashOffset: f,
                        lineJoin: g,
                        lineWidth: h,
                        miterLimit: c,
                        strokeStyle: b
                    }
            } else
                this.i = null;
            var m = a.a;
            b = a.f;
            d = a.c;
            e = a.l;
            h = a.i;
            c = a.b;
            f = a.Ja();
            g = a.g;
            l = a.j;
            a = void 0 !== m ? m : "10px sans-serif";
            g = void 0 !== g ? g : "center";
            l = void 0 !== l ? l : "middle";
            this.g ? (m = this.g,
            m.font = a,
            m.textAlign = g,
            m.textBaseline = l) : this.g = {
                font: a,
                textAlign: g,
                textBaseline: l
            };
            this.ua = void 0 !== f ? f : "";
            this.j = void 0 !== b ? b : 0;
            this.l = void 0 !== d ? d : 0;
            this.o = void 0 !== e ? e : !1;
            this.v = void 0 !== h ? h : 0;
            this.u = void 0 !== c ? c : 1
        } else
            this.ua = ""
    }
    ;
    function Ht(a, b, c, d, e) {
        this.v = a;
        this.f = b;
        this.l = d;
        this.o = c;
        this.i = e;
        this.a = {};
        this.g = gd(1, 1);
        this.j = Dh()
    }
    v(Ht, mi);
    var It = {
        0: [[!0]]
    };
    function Jt(a, b, c) {
        var d, e = Math.floor(a.length / 2);
        if (b >= e)
            for (d = e; d < b; d++)
                a[d][c] = !0;
        else if (b < e)
            for (d = b + 1; d < e; d++)
                a[d][c] = !0
    }
    function Kt(a) {
        if (void 0 !== It[a])
            return It[a];
        for (var b = 2 * a + 1, c = Array(b), d = 0; d < b; d++)
            c[d] = Array(b);
        b = a;
        for (var e = d = 0; b >= d; )
            Jt(c, a + b, a + d),
            Jt(c, a + d, a + b),
            Jt(c, a - d, a + b),
            Jt(c, a - b, a + d),
            Jt(c, a - b, a - d),
            Jt(c, a - d, a - b),
            Jt(c, a + d, a - b),
            Jt(c, a + b, a - d),
            d++,
            e += 1 + 2 * d,
            0 < 2 * (e - b) + 1 && (--b,
            e += 1 - 2 * b);
        return It[a] = c
    }
    function Lt(a) {
        for (var b in a.a) {
            var c = a.a[b], d;
            for (d in c)
                c[d].df()
        }
    }
    Ht.prototype.Ha = function(a, b, c, d, e, f) {
        d = Math.round(d);
        var g = 2 * d + 1
          , h = Mh(this.j, d + .5, d + .5, 1 / b, -1 / b, -c, -a[0], -a[1])
          , l = this.g;
        l.canvas.width !== g || l.canvas.height !== g ? (l.canvas.width = g,
        l.canvas.height = g) : l.clearRect(0, 0, g, g);
        if (void 0 !== this.i) {
            var m = Ma();
            Na(m, a);
            Oa(m, b * (this.i + d), m)
        }
        var n = Kt(d);
        return Mt(this, l, h, c, e, function(a) {
            for (var b = l.getImageData(0, 0, g, g).data, c = 0; c < g; c++)
                for (var d = 0; d < g; d++)
                    if (n[c][d] && 0 < b[4 * (d * g + c) + 3]) {
                        if (a = f(a))
                            return a;
                        l.clearRect(0, 0, g, g);
                        return
                    }
        }, m)
    }
    ;
    function Nt(a, b) {
        var c = a.f;
        a = c[0];
        var d = c[1]
          , e = c[2];
        c = c[3];
        a = [a, d, a, c, e, c, e, d];
        mf(a, 0, 8, 2, b, a);
        return a
    }
    Ht.prototype.b = function(a, b) {
        var c = void 0 !== a ? a.toString() : "0";
        a = this.a[c];
        void 0 === a && (a = {},
        this.a[c] = a);
        c = a[b];
        void 0 === c && (c = new Ot[b](this.v,this.f,this.o,this.l),
        a[b] = c);
        return c
    }
    ;
    Ht.prototype.c = function() {
        return ub(this.a)
    }
    ;
    Ht.prototype.Ma = function(a, b, c, d, e, f) {
        var g = Object.keys(this.a).map(Number);
        g.sort(fa);
        var h = Nt(this, c);
        a.save();
        a.beginPath();
        a.moveTo(h[0], h[1]);
        a.lineTo(h[2], h[3]);
        a.lineTo(h[4], h[5]);
        a.lineTo(h[6], h[7]);
        a.clip();
        f = f ? f : li;
        var l, m;
        h = 0;
        for (l = g.length; h < l; ++h) {
            var n = this.a[g[h].toString()];
            var p = 0;
            for (m = f.length; p < m; ++p) {
                var q = n[f[p]];
                void 0 !== q && q.Ma(a, b, c, d, e)
            }
        }
        a.restore()
    }
    ;
    function Mt(a, b, c, d, e, f, g) {
        var h = Object.keys(a.a).map(Number);
        h.sort(function(a, b) {
            return b - a
        });
        var l, m;
        var n = 0;
        for (l = h.length; n < l; ++n) {
            var p = a.a[h[n].toString()];
            for (m = li.length - 1; 0 <= m; --m) {
                var q = p[li[m]];
                if (void 0 !== q && (q = xt(q, b, 1, c, d, e, q.b, f, g)))
                    return q
            }
        }
    }
    var Ot = {
        Circle: Dt,
        Default: st,
        Image: zt,
        LineString: At,
        Polygon: Dt,
        Text: Gt
    };
    function Pt(a) {
        Pc.call(this);
        this.a = a
    }
    v(Pt, Pc);
    Pt.prototype.Ha = ra;
    Pt.prototype.ef = kf;
    Pt.prototype.Uf = function(a, b, c) {
        return function(d, e) {
            return Qt(a, b, d, e, function(a) {
                c[d] || (c[d] = {});
                c[d][a.sa.toString()] = a
            })
        }
    }
    ;
    Pt.prototype.ta = function(a) {
        2 === a.target.getState() && Rt(this)
    }
    ;
    function St(a, b) {
        var c = b.getState();
        2 != c && 3 != c && y(b, "change", a.ta, a);
        0 == c && (b.load(),
        c = b.getState());
        return 2 == c
    }
    function Rt(a) {
        var b = a.a;
        b.Sb() && "ready" == b.hg() && a.s()
    }
    function Tt(a, b) {
        b.Ui() && a.postRenderFunctions.push(function(a, b, e) {
            b = w(a).toString();
            b in e.usedTiles && a.jd(e.viewState.projection, e.usedTiles[b])
        }
        .bind(null, b))
    }
    function Ut(a, b) {
        if (b) {
            var c;
            var d = 0;
            for (c = b.length; d < c; ++d) {
                var e = b[d];
                a[w(e).toString()] = e
            }
        }
    }
    function Vt(a, b) {
        b = b.D;
        void 0 !== b && ("string" === typeof b ? a.logos[b] = "" : b && (va("string" == typeof b.href, 44),
        va("string" == typeof b.src, 45),
        a.logos[b.src] = b.href))
    }
    function Wt(a, b, c, d) {
        b = w(b).toString();
        c = c.toString();
        b in a ? c in a[b] ? (a = a[b][c],
        d.ca < a.ca && (a.ca = d.ca),
        d.da > a.da && (a.da = d.da),
        d.ea < a.ea && (a.ea = d.ea),
        d.ha > a.ha && (a.ha = d.ha)) : a[b][c] = d : (a[b] = {},
        a[b][c] = d)
    }
    function Xt(a, b, c, d, e, f, g, h, l, m) {
        var n = w(b).toString();
        n in a.wantedTiles || (a.wantedTiles[n] = {});
        var p = a.wantedTiles[n];
        a = a.tileQueue;
        var q = c.minZoom, t, u, x;
        for (x = g; x >= q; --x) {
            var B = kc(c, f, x, B);
            var z = c.Ca(x);
            for (t = B.ca; t <= B.da; ++t)
                for (u = B.ea; u <= B.ha; ++u)
                    if (g - x <= h) {
                        var G = b.Qc(x, t, u, d, e);
                        0 == G.getState() && (p[G.fb()] = !0,
                        G.fb()in a.a || a.i([G, n, pc(c, G.sa), z]));
                        l && l.call(m, G)
                    } else
                        b.Zg(x, t, u, e)
        }
    }
    ;function Yt(a) {
        Pt.call(this, a);
        this.U = Dh()
    }
    v(Yt, Pt);
    function Zt(a, b, c) {
        var d = b.pixelRatio
          , e = b.size[0] * d
          , f = b.size[1] * d
          , g = b.viewState.rotation
          , h = gb(c)
          , l = fb(c)
          , m = eb(c);
        c = db(c);
        Ih(b.coordinateToPixelTransform, h);
        Ih(b.coordinateToPixelTransform, l);
        Ih(b.coordinateToPixelTransform, m);
        Ih(b.coordinateToPixelTransform, c);
        a.save();
        Xh(a, -g, e / 2, f / 2);
        a.beginPath();
        a.moveTo(h[0] * d, h[1] * d);
        a.lineTo(l[0] * d, l[1] * d);
        a.lineTo(m[0] * d, m[1] * d);
        a.lineTo(c[0] * d, c[1] * d);
        a.clip();
        Xh(a, g, e / 2, f / 2)
    }
    function $t(a, b, c, d, e) {
        var f = a.a;
        if (Oc(f, b)) {
            var g = d.size[0] * d.pixelRatio
              , h = d.size[1] * d.pixelRatio
              , l = d.viewState.rotation;
            Xh(c, -l, g / 2, h / 2);
            a = e ? e : au(a, d, 0);
            f.b(new Th(b,new Zh(c,d.pixelRatio,d.extent,a,d.viewState.rotation),d,c,null));
            Xh(c, l, g / 2, h / 2)
        }
    }
    Yt.prototype.v = function(a, b, c, d) {
        if (this.Ha(a, b, 0, jf, this))
            return c.call(d, this.a, null)
    }
    ;
    Yt.prototype.qf = function(a, b, c, d) {
        $t(this, "postcompose", a, b, d)
    }
    ;
    function au(a, b, c) {
        var d = b.viewState
          , e = b.pixelRatio
          , f = e / d.resolution;
        return Mh(a.U, e * b.size[0] / 2, e * b.size[1] / 2, f, -f, -d.rotation, -d.center[0] + c, -d.center[1])
    }
    ;function bu(a, b) {
        return w(a) - w(b)
    }
    function cu(a, b) {
        a = .5 * a / b;
        return a * a
    }
    function du(a, b, c, d, e, f) {
        var g = !1, h;
        if (h = c.Y()) {
            var l = h.hf();
            2 == l || 3 == l ? h.Lj(e, f) : (0 == l && h.load(),
            h.Wh(e, f),
            g = !0)
        }
        if (e = (0,
        c.$a)(b))
            if (d = e.$d(d),
            c.Je())
                eu(a, d, c, b);
            else
                (0,
                fu[d.T()])(a, d, c, b);
        return g
    }
    function eu(a, b, c, d) {
        if ("GeometryCollection" == b.T()) {
            b = b.He();
            for (var e = 0, f = b.length; e < f; ++e)
                eu(a, b[e], c, d)
        } else
            a.b(c.za(), "Default").wh(b, d, c.Je())
    }
    var fu = {
        Point: function(a, b, c, d) {
            var e = c.Y();
            if (e) {
                if (2 != e.hf())
                    return;
                var f = a.b(c.za(), "Image");
                f.Vb(e);
                f.sc(b, d)
            }
            if (e = c.Ja())
                a = a.b(c.za(), "Text"),
                a.gb(e),
                a.Qb(b.ba(), 0, 2, 2, b, d)
        },
        LineString: function(a, b, c, d) {
            var e = c.Ea();
            if (e) {
                var f = a.b(c.za(), "LineString");
                f.Na(null, e);
                f.oc(b, d)
            }
            if (e = c.Ja())
                a = a.b(c.za(), "Text"),
                a.gb(e),
                a.Qb(fi(b), 0, 2, 2, b, d)
        },
        Polygon: function(a, b, c, d) {
            var e = c.Da()
              , f = c.Ea();
            if (e || f) {
                var g = a.b(c.za(), "Polygon");
                g.Na(e, f);
                g.tc(b, d)
            }
            if (e = c.Ja())
                a = a.b(c.za(), "Text"),
                a.gb(e),
                a.Qb(Wf(b), 0, 2, 2, b, d)
        },
        MultiPoint: function(a, b, c, d) {
            var e = c.Y();
            if (e) {
                if (2 != e.hf())
                    return;
                var f = a.b(c.za(), "Image");
                f.Vb(e);
                f.qc(b, d)
            }
            if (e = c.Ja())
                a = a.b(c.za(), "Text"),
                a.gb(e),
                c = b.ba(),
                a.Qb(c, 0, c.length, b.ma(), b, d)
        },
        MultiLineString: function(a, b, c, d) {
            var e = c.Ea();
            if (e) {
                var f = a.b(c.za(), "LineString");
                f.Na(null, e);
                f.pc(b, d)
            }
            if (e = c.Ja())
                a = a.b(c.za(), "Text"),
                a.gb(e),
                c = gi(b),
                a.Qb(c, 0, c.length, 2, b, d)
        },
        MultiPolygon: function(a, b, c, d) {
            var e = c.Da()
              , f = c.Ea();
            if (f || e) {
                var g = a.b(c.za(), "Polygon");
                g.Na(e, f);
                g.rc(b, d)
            }
            if (e = c.Ja())
                a = a.b(c.za(), "Text"),
                a.gb(e),
                c = ii(b),
                a.Qb(c, 0, c.length, 2, b, d)
        },
        GeometryCollection: function(a, b, c, d) {
            b = b.a;
            var e;
            var f = 0;
            for (e = b.length; f < e; ++f)
                (0,
                fu[b[f].T()])(a, b[f], c, d)
        },
        Circle: function(a, b, c, d) {
            var e = c.Da()
              , f = c.Ea();
            if (e || f) {
                var g = a.b(c.za(), "Circle");
                g.Na(e, f);
                g.$b(b, d)
            }
            if (e = c.Ja())
                a = a.b(c.za(), "Text"),
                a.gb(e),
                a.Qb(b.xa(), 0, 2, 2, b, d)
        }
    };
    function gu(a) {
        Yt.call(this, a);
        this.c = !1;
        this.R = -1;
        this.o = NaN;
        this.j = Ma();
        this.i = this.l = null;
        this.g = gd()
    }
    v(gu, Yt);
    gu.prototype.u = function(a, b, c) {
        var d = a.extent
          , e = a.pixelRatio
          , f = b.Ue ? a.skippedFeatureUids : {}
          , g = a.viewState
          , h = g.projection
          , l = g.rotation
          , m = h.G()
          , n = this.a.ia()
          , p = au(this, a, 0);
        $t(this, "precompose", c, a, p);
        var q = b.extent;
        (g = void 0 !== q) && Zt(c, a, q);
        var t = this.i;
        if (t && !t.c()) {
            var u = q = 0
              , x = 1 !== b.opacity
              , B = Oc(this.a, "render");
            if (x || B) {
                var z = c.canvas.width;
                var G = c.canvas.height;
                if (l) {
                    var E = Math.round(Math.sqrt(z * z + G * G));
                    q = (E - z) / 2;
                    u = (E - G) / 2;
                    z = G = E
                }
                this.g.canvas.width = z;
                this.g.canvas.height = G;
                z = this.g
            } else
                z = c;
            G = z.globalAlpha;
            x || (z.globalAlpha = b.opacity);
            z != c && z.translate(q, u);
            E = a.size[0] * e;
            var ia = a.size[1] * e;
            Xh(z, -l, E / 2, ia / 2);
            t.Ma(z, e, p, l, f);
            if (n.u && h.f && !Ta(m, d)) {
                h = d[0];
                n = jb(m);
                for (var T = 0; h < m[0]; )
                    --T,
                    p = n * T,
                    p = au(this, a, p),
                    t.Ma(z, e, p, l, f),
                    h += n;
                T = 0;
                for (h = d[2]; h > m[2]; )
                    ++T,
                    p = n * T,
                    p = au(this, a, p),
                    t.Ma(z, e, p, l, f),
                    h -= n;
                p = au(this, a, 0)
            }
            Xh(z, l, E / 2, ia / 2);
            z != c && (B && $t(this, "render", z, a, p),
            x ? (d = c.globalAlpha,
            c.globalAlpha = b.opacity,
            c.drawImage(z.canvas, -q, -u),
            c.globalAlpha = d) : c.drawImage(z.canvas, -q, -u),
            z.translate(-q, -u));
            x || (z.globalAlpha = G)
        }
        g && c.restore();
        this.qf(c, a, b, p)
    }
    ;
    gu.prototype.Ha = function(a, b, c, d, e) {
        if (this.i) {
            var f = this.a
              , g = {};
            return this.i.Ha(a, b.viewState.resolution, b.viewState.rotation, c, {}, function(a) {
                var b = w(a).toString();
                if (!(b in g))
                    return g[b] = !0,
                    d.call(e, a, f)
            })
        }
    }
    ;
    gu.prototype.D = function() {
        Rt(this)
    }
    ;
    gu.prototype.xd = function(a) {
        var b = this.a
          , c = b.ia();
        Ut(a.attributions, c.j);
        Vt(a, c);
        var d = a.viewHints[0]
          , e = a.viewHints[1]
          , f = b.S
          , g = b.U;
        if (!this.c && !f && d || !g && e)
            return !0;
        f = a.extent;
        var h = a.viewState;
        g = h.projection;
        var l = h.resolution
          , m = a.pixelRatio;
        d = b.f;
        var n = b.c;
        e = b.get(hu);
        void 0 === e && (e = bu);
        f = Oa(f, n * l);
        n = h.projection.G();
        c.u && h.projection.f && !Ta(n, a.extent) && (a = Math.max(jb(f) / 2, jb(n)),
        f[0] = n[0] - a,
        f[2] = n[2] + a);
        if (!this.c && this.o == l && this.R == d && this.l == e && Ta(this.j, f))
            return !0;
        this.i = null;
        this.c = !1;
        var p = new Ht(.5 * l / m,f,l,c.U,b.c);
        c.ce(f, l, g);
        a = function(a) {
            var c = a.bb();
            if (c)
                var d = c.call(a, l);
            else
                (c = b.bb()) && (d = c(a, l));
            if (d) {
                if (d) {
                    c = !1;
                    if (Array.isArray(d))
                        for (var e = 0, f = d.length; e < f; ++e)
                            c = du(p, a, d[e], cu(l, m), this.D, this) || c;
                    else
                        c = du(p, a, d, cu(l, m), this.D, this) || c;
                    a = c
                } else
                    a = !1;
                this.c = this.c || a
            }
        }
        .bind(this);
        if (e) {
            var q = [];
            c.ac(f, function(a) {
                q.push(a)
            }, this);
            q.sort(e);
            c = 0;
            for (g = q.length; c < g; ++c)
                a(q[c])
        } else
            c.ac(f, a, this);
        Lt(p);
        this.o = l;
        this.R = d;
        this.l = e;
        this.j = f;
        this.i = p;
        return !0
    }
    ;
    function iu() {
        this.b = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"
    }
    v(iu, oi);
    var ju = new iu;
    function ku() {
        this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"
    }
    v(ku, pi);
    var lu = new ku;
    function mu(a, b) {
        this.f = a.getUniformLocation(b, "f");
        this.c = a.getUniformLocation(b, "e");
        this.g = a.getUniformLocation(b, "d");
        this.i = a.getUniformLocation(b, "g");
        this.b = a.getAttribLocation(b, "b");
        this.a = a.getAttribLocation(b, "c")
    }
    ;function nu(a, b) {
        Pt.call(this, b);
        this.c = a;
        this.U = new Fi([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
        this.g = this.Hb = null;
        this.j = void 0;
        this.v = Dh();
        this.R = Dh();
        this.B = vi();
        this.u = null
    }
    v(nu, Pt);
    function ou(a, b, c) {
        var d = a.c.f;
        if (void 0 === a.j || a.j != c) {
            b.postRenderFunctions.push(function(a, b, c) {
                a.isContextLost() || (a.deleteFramebuffer(b),
                a.deleteTexture(c))
            }
            .bind(null, d, a.g, a.Hb));
            b = Si(d, c, c);
            var e = d.createFramebuffer();
            d.bindFramebuffer(36160, e);
            d.framebufferTexture2D(36160, 36064, 3553, b, 0);
            a.Hb = b;
            a.g = e;
            a.j = c
        } else
            d.bindFramebuffer(36160, a.g)
    }
    nu.prototype.Qi = function(a, b, c) {
        pu(this, "precompose", c, a);
        yi(c, 34962, this.U);
        var d = c.b
          , e = Ji(c, ju, lu);
        if (this.u)
            var f = this.u;
        else
            this.u = f = new mu(d,e);
        c.Tc(e) && (d.enableVertexAttribArray(f.b),
        d.vertexAttribPointer(f.b, 2, 5126, !1, 16, 0),
        d.enableVertexAttribArray(f.a),
        d.vertexAttribPointer(f.a, 2, 5126, !1, 16, 8),
        d.uniform1i(f.i, 0));
        d.uniformMatrix4fv(f.g, !1, wi(this.B, this.v));
        d.uniformMatrix4fv(f.c, !1, wi(this.B, this.R));
        d.uniform1f(f.f, b.opacity);
        d.bindTexture(3553, this.Hb);
        d.drawArrays(5, 0, 4);
        pu(this, "postcompose", c, a)
    }
    ;
    function pu(a, b, c, d) {
        a = a.a;
        if (Oc(a, b)) {
            var e = d.viewState;
            a.b(new Th(b,new xk(c,e.center,e.resolution,e.rotation,d.size,d.extent,d.pixelRatio),d,null,c))
        }
    }
    nu.prototype.ug = function() {
        this.g = this.Hb = null;
        this.j = void 0
    }
    ;
    function qu(a, b) {
        nu.call(this, a, b);
        this.o = !1;
        this.S = -1;
        this.I = NaN;
        this.D = Ma();
        this.l = this.i = this.C = null
    }
    v(qu, nu);
    k = qu.prototype;
    k.Qi = function(a, b, c) {
        this.l = b;
        var d = a.viewState
          , e = this.i
          , f = a.size
          , g = a.pixelRatio
          , h = this.c.f;
        e && !e.c() && (h.enable(h.SCISSOR_TEST),
        h.scissor(0, 0, f[0] * g, f[1] * g),
        e.Ma(c, d.center, d.resolution, d.rotation, f, g, b.opacity, b.Ue ? a.skippedFeatureUids : {}),
        h.disable(h.SCISSOR_TEST))
    }
    ;
    k.ka = function() {
        var a = this.i;
        a && (rk(a, this.c.i)(),
        this.i = null);
        nu.prototype.ka.call(this)
    }
    ;
    k.Ha = function(a, b, c, d, e) {
        if (this.i && this.l) {
            c = b.viewState;
            var f = this.a
              , g = {};
            return this.i.Ha(a, this.c.i, c.center, c.resolution, c.rotation, b.size, b.pixelRatio, this.l.opacity, {}, function(a) {
                var b = w(a).toString();
                if (!(b in g))
                    return g[b] = !0,
                    d.call(e, a, f)
            })
        }
    }
    ;
    k.ef = function(a, b) {
        if (this.i && this.l) {
            var c = b.viewState;
            return wk(this.i, a, this.c.i, c.resolution, c.rotation, b.pixelRatio, this.l.opacity, b.skippedFeatureUids)
        }
        return !1
    }
    ;
    k.tg = function(a, b, c, d) {
        a = Ih(b.pixelToCoordinateTransform, a.slice());
        if (this.ef(a, b))
            return c.call(d, this.a, null)
    }
    ;
    k.Ri = function() {
        Rt(this)
    }
    ;
    k.vg = function(a, b, c) {
        function d(a) {
            var b = a.bb();
            if (b)
                var c = b.call(a, m);
            else
                (b = e.bb()) && (c = b(a, m));
            if (c) {
                if (c) {
                    b = !1;
                    if (Array.isArray(c))
                        for (var d = c.length - 1; 0 <= d; --d)
                            b = du(q, a, c[d], cu(m, n), this.Ri, this) || b;
                    else
                        b = du(q, a, c, cu(m, n), this.Ri, this) || b;
                    a = b
                } else
                    a = !1;
                this.o = this.o || a
            }
        }
        var e = this.a;
        b = e.ia();
        Ut(a.attributions, b.j);
        Vt(a, b);
        var f = a.viewHints[0]
          , g = a.viewHints[1]
          , h = e.S
          , l = e.U;
        if (!this.o && !h && f || !l && g)
            return !0;
        g = a.extent;
        h = a.viewState;
        f = h.projection;
        var m = h.resolution
          , n = a.pixelRatio;
        h = e.f;
        var p = e.c;
        l = e.get(hu);
        void 0 === l && (l = bu);
        g = Oa(g, p * m);
        if (!this.o && this.I == m && this.S == h && this.C == l && Ta(this.D, g))
            return !0;
        this.i && a.postRenderFunctions.push(rk(this.i, c));
        this.o = !1;
        var q = new qk(.5 * m / n,g,e.c);
        b.ce(g, m, f);
        if (l) {
            var t = [];
            b.ac(g, function(a) {
                t.push(a)
            }, this);
            t.sort(l);
            t.forEach(d, this)
        } else
            b.ac(g, d, this);
        sk(q, c);
        this.I = m;
        this.S = h;
        this.C = l;
        this.D = g;
        this.i = q;
        return !0
    }
    ;
    function S(a) {
        a = a ? a : {};
        var b = rb({}, a);
        delete b.style;
        delete b.renderBuffer;
        delete b.updateWhileAnimating;
        delete b.updateWhileInteracting;
        wh.call(this, b);
        this.c = void 0 !== a.renderBuffer ? a.renderBuffer : 100;
        this.v = null;
        this.C = void 0;
        this.i(a.style);
        this.S = void 0 !== a.updateWhileAnimating ? a.updateWhileAnimating : !1;
        this.U = void 0 !== a.updateWhileInteracting ? a.updateWhileInteracting : !1
    }
    v(S, wh);
    S.prototype.Kd = function(a) {
        var b = null
          , c = a.T();
        "canvas" === c ? b = new gu(this) : "webgl" === c && (b = new qu(a,this));
        return b
    }
    ;
    S.prototype.u = function() {
        return this.v
    }
    ;
    S.prototype.bb = function() {
        return this.C
    }
    ;
    S.prototype.i = function(a) {
        this.v = void 0 !== a ? a : ul;
        this.C = null === a ? void 0 : sl(this.v);
        this.s()
    }
    ;
    var hu = "renderOrder";
    function ru() {
        return [[-Infinity, -Infinity, Infinity, Infinity]]
    }
    ;function su(a) {
        Qc.call(this);
        this.c = Qb(a.projection);
        this.j = tu(a.attributions);
        this.D = a.logo;
        this.ta = void 0 !== a.state ? a.state : "ready";
        this.u = void 0 !== a.wrapX ? a.wrapX : !1
    }
    v(su, Qc);
    function tu(a) {
        if ("string" === typeof a)
            return [new vc({
                html: a
            })];
        if (a instanceof vc)
            return [a];
        if (Array.isArray(a)) {
            for (var b = a.length, c = Array(b), d = 0; d < b; d++) {
                var e = a[d];
                c[d] = "string" === typeof e ? new vc({
                    html: e
                }) : e
            }
            return c
        }
        return null
    }
    k = su.prototype;
    k.Ha = ra;
    k.Aa = function() {
        return this.j
    }
    ;
    k.ya = function() {
        return this.D
    }
    ;
    k.Ba = function() {
        return this.c
    }
    ;
    k.getState = function() {
        return this.ta
    }
    ;
    k.ra = function() {
        this.s()
    }
    ;
    k.wa = function(a) {
        this.j = tu(a);
        this.s()
    }
    ;
    function uu(a, b) {
        a.ta = b;
        a.s()
    }
    ;function V(a) {
        a = a || {};
        su.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: void 0,
            state: "ready",
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.C = ra;
        this.B = a.format;
        this.U = void 0 == a.overlaps ? !0 : a.overlaps;
        this.I = a.url;
        a.loader ? this.C = a.loader : void 0 !== this.I && (va(this.B, 7),
        this.C = Sl(this.I, this.B));
        this.ga = a.strategy ? a.strategy : ru;
        var b = void 0 !== a.useSpatialIndex ? a.useSpatialIndex : !0;
        this.a = b ? new Jj : null;
        this.S = new Jj;
        this.g = {};
        this.l = {};
        this.o = {};
        this.v = {};
        this.i = null;
        if (a.features instanceof Vc) {
            var c = a.features;
            var d = c.a
        } else
            Array.isArray(a.features) && (d = a.features);
        b || c || (c = new Vc(d));
        d && vu(this, d);
        c && wu(this, c)
    }
    v(V, su);
    k = V.prototype;
    k.Bb = function(a) {
        var b = w(a).toString();
        if (xu(this, b, a)) {
            yu(this, b, a);
            var c = a.V();
            c ? (b = c.G(),
            this.a && this.a.Ga(b, a)) : this.g[b] = a;
            this.b(new zu("addfeature",a))
        }
        this.s()
    }
    ;
    function yu(a, b, c) {
        a.v[b] = [y(c, "change", a.Yi, a), y(c, "propertychange", a.Yi, a)]
    }
    function xu(a, b, c) {
        var d = !0
          , e = c.a;
        void 0 !== e ? e.toString()in a.l ? d = !1 : a.l[e.toString()] = c : (va(!(b in a.o), 30),
        a.o[b] = c);
        return d
    }
    k.Ec = function(a) {
        vu(this, a);
        this.s()
    }
    ;
    function vu(a, b) {
        var c, d = [], e = [], f = [];
        var g = 0;
        for (c = b.length; g < c; g++) {
            var h = b[g];
            var l = w(h).toString();
            xu(a, l, h) && e.push(h)
        }
        g = 0;
        for (c = e.length; g < c; g++)
            h = e[g],
            l = w(h).toString(),
            yu(a, l, h),
            (b = h.V()) ? (l = b.G(),
            d.push(l),
            f.push(h)) : a.g[l] = h;
        a.a && a.a.load(d, f);
        g = 0;
        for (c = e.length; g < c; g++)
            a.b(new zu("addfeature",e[g]))
    }
    function wu(a, b) {
        var c = !1;
        y(a, "addfeature", function(a) {
            c || (c = !0,
            b.push(a.feature),
            c = !1)
        });
        y(a, "removefeature", function(a) {
            c || (c = !0,
            b.remove(a.feature),
            c = !1)
        });
        y(b, "add", function(a) {
            c || (c = !0,
            this.Bb(a.element),
            c = !1)
        }, a);
        y(b, "remove", function(a) {
            c || (c = !0,
            this.Fb(a.element),
            c = !1)
        }, a);
        a.i = b
    }
    k.clear = function(a) {
        if (a) {
            for (var b in this.v)
                this.v[b].forEach(zc);
            this.i || (this.v = {},
            this.l = {},
            this.o = {})
        } else if (this.a) {
            this.a.forEach(this.Qg, this);
            for (var c in this.g)
                this.Qg(this.g[c])
        }
        this.i && this.i.clear();
        this.a && this.a.clear();
        this.S.clear();
        this.g = {};
        this.b(new zu("clear"));
        this.s()
    }
    ;
    k.Ah = function(a, b) {
        if (this.a)
            return this.a.forEach(a, b);
        if (this.i)
            return this.i.forEach(a, b)
    }
    ;
    function Au(a, b, c) {
        a.ac([b[0], b[1], b[0], b[1]], function(a) {
            if (a.V().vb(b))
                return c.call(void 0, a)
        })
    }
    k.ac = function(a, b, c) {
        if (this.a)
            return Oj(this.a, a, b, c);
        if (this.i)
            return this.i.forEach(b, c)
    }
    ;
    k.Bh = function(a, b, c) {
        return this.ac(a, function(d) {
            if (d.V().Ya(a) && (d = b.call(c, d)))
                return d
        })
    }
    ;
    k.Ih = function() {
        return this.i
    }
    ;
    k.ee = function() {
        if (this.i)
            var a = this.i.a;
        else
            this.a && (a = Lj(this.a),
            ub(this.g) || ka(a, tb(this.g)));
        return a
    }
    ;
    k.Hh = function(a) {
        var b = [];
        Au(this, a, function(a) {
            b.push(a)
        });
        return b
    }
    ;
    k.ag = function(a) {
        return Mj(this.a, a)
    }
    ;
    k.Dh = function(a, b) {
        var c = a[0]
          , d = a[1]
          , e = null
          , f = [NaN, NaN]
          , g = Infinity
          , h = [-Infinity, -Infinity, Infinity, Infinity]
          , l = b ? b : jf;
        Oj(this.a, h, function(a) {
            if (l(a)) {
                var b = a.V()
                  , m = g;
                g = b.Jb(c, d, f, g);
                g < m && (e = a,
                a = Math.sqrt(g),
                h[0] = c - a,
                h[1] = d - a,
                h[2] = c + a,
                h[3] = d + a)
            }
        });
        return e
    }
    ;
    k.G = function(a) {
        return this.a.G(a)
    }
    ;
    k.Gh = function(a) {
        a = this.l[a.toString()];
        return void 0 !== a ? a : null
    }
    ;
    k.Wi = function() {
        return this.B
    }
    ;
    k.Xi = function() {
        return this.I
    }
    ;
    k.Yi = function(a) {
        a = a.target;
        var b = w(a).toString()
          , c = a.V();
        c ? (c = c.G(),
        b in this.g ? (delete this.g[b],
        this.a && this.a.Ga(c, a)) : this.a && Kj(this.a, c, a)) : b in this.g || (this.a && this.a.remove(a),
        this.g[b] = a);
        c = a.a;
        void 0 !== c ? (c = c.toString(),
        b in this.o ? (delete this.o[b],
        this.l[c] = a) : this.l[c] !== a && (Bu(this, a),
        this.l[c] = a)) : b in this.o || (Bu(this, a),
        this.o[b] = a);
        this.s();
        this.b(new zu("changefeature",a))
    }
    ;
    k.ce = function(a, b, c) {
        var d = this.S;
        a = this.ga(a, b);
        var e;
        var f = 0;
        for (e = a.length; f < e; ++f) {
            var g = a[f];
            Oj(d, g, function(a) {
                return Ta(a.extent, g)
            }) || (this.C.call(this, g, b, c),
            d.Ga(g, {
                extent: g.slice()
            }))
        }
    }
    ;
    k.Fb = function(a) {
        var b = w(a).toString();
        b in this.g ? delete this.g[b] : this.a && this.a.remove(a);
        this.Qg(a);
        this.s()
    }
    ;
    k.Qg = function(a) {
        var b = w(a).toString();
        this.v[b].forEach(zc);
        delete this.v[b];
        var c = a.a;
        void 0 !== c ? delete this.l[c.toString()] : delete this.o[b];
        this.b(new zu("removefeature",a))
    }
    ;
    function Bu(a, b) {
        for (var c in a.l)
            if (a.l[c] === b) {
                delete a.l[c];
                break
            }
    }
    function zu(a, b) {
        Lc.call(this, a);
        this.feature = b
    }
    v(zu, Lc);
    function Cu(a) {
        Dg.call(this, {
            handleDownEvent: Du,
            handleEvent: Eu,
            handleUpEvent: Fu
        });
        this.U = !1;
        this.ga = null;
        this.u = !1;
        this.Zb = a.source ? a.source : null;
        this.Za = a.features ? a.features : null;
        this.Hk = a.snapTolerance ? a.snapTolerance : 12;
        this.S = a.type;
        this.g = Gu(this.S);
        this.Sa = a.minPoints ? a.minPoints : this.g === Hu ? 3 : 2;
        this.va = a.maxPoints ? a.maxPoints : Infinity;
        this.Id = a.finishCondition ? a.finishCondition : jf;
        var b = a.geometryFunction;
        if (!b)
            if ("Circle" === this.S)
                b = function(a, b) {
                    b = b ? b : new Ns([NaN, NaN]);
                    b.Vg(a[0], Math.sqrt(ef(a[0], a[1])));
                    return b
                }
                ;
            else {
                var c, d = this.g;
                d === Iu ? c = C : d === Ju ? c = M : d === Hu && (c = D);
                b = function(a, b) {
                    b ? d === Hu ? b.na([a[0].concat([a[0][0]])]) : b.na(a) : b = new c(a);
                    return b
                }
            }
        this.$a = b;
        this.I = this.B = this.a = this.C = this.j = this.o = null;
        this.ed = a.clickTolerance ? a.clickTolerance * a.clickTolerance : 36;
        this.oa = new S({
            source: new V({
                useSpatialIndex: !1,
                wrapX: a.wrapX ? a.wrapX : !1
            }),
            style: a.style ? a.style : Ku()
        });
        this.Ib = a.geometryName;
        this.Gk = a.condition ? a.condition : yg;
        this.Lf = a.freehand ? jf : a.freehandCondition ? a.freehandCondition : zg;
        y(this, Sc("active"), this.Bi, this)
    }
    v(Cu, Dg);
    function Ku() {
        var a = vl();
        return function(b) {
            return a[b.V().T()]
        }
    }
    k = Cu.prototype;
    k.setMap = function(a) {
        Dg.prototype.setMap.call(this, a);
        this.Bi()
    }
    ;
    function Eu(a) {
        this.u = this.g !== Iu && this.Lf(a);
        var b = !this.u;
        this.u && "pointerdrag" === a.type && null !== this.j ? (Lu(this, a),
        b = !1) : "pointermove" === a.type ? b = Mu(this, a) : "dblclick" === a.type && (b = !1);
        return Eg.call(this, a) && b
    }
    function Du(a) {
        this.U = !this.u;
        return this.u ? (this.ga = a.pixel,
        this.o || Nu(this, a),
        !0) : this.Gk(a) ? (this.ga = a.pixel,
        !0) : !1
    }
    function Fu(a) {
        var b = !0;
        Mu(this, a);
        var c = this.g === Ou;
        this.U ? (this.o ? this.u || c ? this.Ud() : Pu(this, a) ? this.Id(a) && this.Ud() : Lu(this, a) : (Nu(this, a),
        this.g === Iu && this.Ud()),
        b = !1) : this.u && (this.o = null,
        Qu(this));
        return b
    }
    function Mu(a, b) {
        if (a.ga && (!a.u && a.U || a.u && !a.U)) {
            var c = a.ga
              , d = b.pixel
              , e = c[0] - d[0];
            c = c[1] - d[1];
            e = e * e + c * c;
            a.U = a.u ? e > a.ed : e <= a.ed
        }
        a.o ? (e = b.coordinate,
        c = a.j.V(),
        a.g === Iu ? d = a.a : a.g === Hu ? (d = a.a[0],
        d = d[d.length - 1],
        Pu(a, b) && (e = a.o.slice())) : (d = a.a,
        d = d[d.length - 1]),
        d[0] = e[0],
        d[1] = e[1],
        a.$a(a.a, c),
        a.C && a.C.V().na(e),
        c instanceof D && a.g !== Hu ? (a.B || (a.B = new wl(new M(null))),
        e = c.Kh(0),
        b = a.B.V(),
        b.aa(e.ja, e.ba())) : a.I && (b = a.B.V(),
        b.na(a.I)),
        Ru(a)) : (b = b.coordinate.slice(),
        a.C ? a.C.V().na(b) : (a.C = new wl(new C(b)),
        Ru(a)));
        return !0
    }
    function Pu(a, b) {
        var c = !1;
        if (a.j) {
            var d = !1
              , e = [a.o];
            a.g === Ju ? d = a.a.length > a.Sa : a.g === Hu && (d = a.a[0].length > a.Sa,
            e = [a.a[0][0], a.a[0][a.a[0].length - 2]]);
            if (d) {
                d = b.map;
                for (var f = 0, g = e.length; f < g; f++) {
                    var h = e[f]
                      , l = d.Ka(h)
                      , m = b.pixel;
                    c = m[0] - l[0];
                    l = m[1] - l[1];
                    if (c = Math.sqrt(c * c + l * l) <= (a.u ? 1 : a.Hk)) {
                        a.o = h;
                        break
                    }
                }
            }
        }
        return c
    }
    function Nu(a, b) {
        b = b.coordinate;
        a.o = b;
        a.g === Iu ? a.a = b.slice() : a.g === Hu ? (a.a = [[b.slice(), b.slice()]],
        a.I = a.a[0]) : (a.a = [b.slice(), b.slice()],
        a.g === Ou && (a.I = a.a));
        a.I && (a.B = new wl(new M(a.I)));
        b = a.$a(a.a);
        a.j = new wl;
        a.Ib && a.j.Wc(a.Ib);
        a.j.Ra(b);
        Ru(a);
        a.b(new Su("drawstart",a.j))
    }
    function Lu(a, b) {
        b = b.coordinate;
        var c = a.j.V(), d;
        if (a.g === Ju) {
            a.o = b.slice();
            var e = a.a;
            e.length >= a.va && (a.u ? e.pop() : d = !0);
            e.push(b.slice());
            a.$a(e, c)
        } else
            a.g === Hu && (e = a.a[0],
            e.length >= a.va && (a.u ? e.pop() : d = !0),
            e.push(b.slice()),
            d && (a.o = e[0]),
            a.$a(a.a, c));
        Ru(a);
        d && a.Ud()
    }
    k.aq = function() {
        if (this.j) {
            var a = this.j.V();
            if (this.g === Ju) {
                var b = this.a;
                b.splice(-2, 1);
                this.$a(b, a);
                2 <= b.length && (this.o = b[b.length - 2].slice())
            } else if (this.g === Hu) {
                b = this.a[0];
                b.splice(-2, 1);
                var c = this.B.V();
                c.na(b);
                this.$a(this.a, a)
            }
            0 === b.length && (this.o = null);
            Ru(this)
        }
    }
    ;
    k.Ud = function() {
        var a = Qu(this)
          , b = this.a
          , c = a.V();
        this.g === Ju ? (b.pop(),
        this.$a(b, c)) : this.g === Hu && (b[0].pop(),
        this.$a(b, c),
        b = c.X());
        "MultiPoint" === this.S ? a.Ra(new O([b])) : "MultiLineString" === this.S ? a.Ra(new N([b])) : "MultiPolygon" === this.S && a.Ra(new P([b]));
        this.b(new Su("drawend",a));
        this.Za && this.Za.push(a);
        this.Zb && this.Zb.Bb(a)
    }
    ;
    function Qu(a) {
        a.o = null;
        var b = a.j;
        b && (a.j = null,
        a.C = null,
        a.B = null,
        a.oa.ia().clear(!0));
        return b
    }
    k.Jn = function(a) {
        var b = a.V();
        this.j = a;
        this.a = b.X();
        a = this.a[this.a.length - 1];
        this.o = a.slice();
        this.a.push(a.slice());
        Ru(this);
        this.b(new Su("drawstart",this.j))
    }
    ;
    k.$c = kf;
    function Ru(a) {
        var b = [];
        a.j && b.push(a.j);
        a.B && b.push(a.B);
        a.C && b.push(a.C);
        a = a.oa.ia();
        a.clear(!0);
        a.Ec(b)
    }
    k.Bi = function() {
        var a = this.v
          , b = this.c();
        a && b || Qu(this);
        this.oa.setMap(b ? a : null)
    }
    ;
    function Gu(a) {
        var b;
        "Point" === a || "MultiPoint" === a ? b = Iu : "LineString" === a || "MultiLineString" === a ? b = Ju : "Polygon" === a || "MultiPolygon" === a ? b = Hu : "Circle" === a && (b = Ou);
        return b
    }
    var Iu = "Point"
      , Ju = "LineString"
      , Hu = "Polygon"
      , Ou = "Circle";
    function Su(a, b) {
        Lc.call(this, a);
        this.feature = b
    }
    v(Su, Lc);
    function Tu(a) {
        this.a = this.j = null;
        this.B = !1;
        this.C = this.o = null;
        a || (a = {});
        Dg.call(this, {
            handleDownEvent: Uu,
            handleDragEvent: Vu,
            handleEvent: Wu,
            handleUpEvent: Xu
        });
        this.u = new S({
            source: new V({
                useSpatialIndex: !1,
                wrapX: !!a.wrapX
            }),
            style: a.boxStyle ? a.boxStyle : Yu(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        this.I = new S({
            source: new V({
                useSpatialIndex: !1,
                wrapX: !!a.wrapX
            }),
            style: a.pointerStyle ? a.pointerStyle : Zu(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        a.extent && this.g(a.extent)
    }
    v(Tu, Dg);
    function Wu(a) {
        if (!(a instanceof be))
            return !0;
        if ("pointermove" == a.type && !this.D) {
            var b = a.pixel
              , c = a.map
              , d = $u(this, b, c);
            d || (d = c.Xa(b));
            av(this, d)
        }
        Eg.call(this, a);
        return !1
    }
    function Uu(a) {
        function b(a) {
            var b = null
              , c = null;
            a[0] == e[0] ? b = e[2] : a[0] == e[2] && (b = e[0]);
            a[1] == e[1] ? c = e[3] : a[1] == e[3] && (c = e[1]);
            return null !== b && null !== c ? [b, c] : null
        }
        var c = a.pixel
          , d = a.map
          , e = this.G();
        (a = $u(this, c, d)) && e ? (c = a[0] == e[0] || a[0] == e[2] ? a[0] : null,
        d = a[1] == e[1] || a[1] == e[3] ? a[1] : null,
        null !== c && null !== d ? this.a = bv(b(a)) : null !== c ? this.a = cv(b([c, e[1]]), b([c, e[3]])) : null !== d && (this.a = cv(b([e[0], d]), b([e[2], d])))) : (a = d.Xa(c),
        this.g([a[0], a[1], a[0], a[1]]),
        this.a = bv(a));
        return !0
    }
    function Vu(a) {
        this.a && (a = a.coordinate,
        this.g(this.a(a)),
        av(this, a));
        return !0
    }
    function Xu() {
        this.a = null;
        var a = this.G();
        a && hb(a) || this.g(null);
        return !1
    }
    function Yu() {
        var a = vl();
        return function() {
            return a.Polygon
        }
    }
    function Zu() {
        var a = vl();
        return function() {
            return a.Point
        }
    }
    function bv(a) {
        return function(b) {
            return La([a, b])
        }
    }
    function cv(a, b) {
        return a[0] == b[0] ? function(c) {
            return La([a, [c[0], b[1]]])
        }
        : a[1] == b[1] ? function(c) {
            return La([a, [b[0], c[1]]])
        }
        : null
    }
    function $u(a, b, c) {
        function d(a, b) {
            return gf(e, a) - gf(e, b)
        }
        var e = c.Xa(b)
          , f = a.G();
        if (f) {
            f = [[[f[0], f[1]], [f[0], f[3]]], [[f[0], f[3]], [f[2], f[3]]], [[f[2], f[3]], [f[2], f[1]]], [[f[2], f[1]], [f[0], f[1]]]];
            f.sort(d);
            f = f[0];
            var g = Ze(e, f)
              , h = c.Ka(g);
            if (10 >= ff(b, h))
                return b = c.Ka(f[0]),
                c = c.Ka(f[1]),
                b = ef(h, b),
                c = ef(h, c),
                a.B = 10 >= Math.sqrt(Math.min(b, c)),
                a.B && (g = b > c ? f[1] : f[0]),
                g
        }
        return null
    }
    function av(a, b) {
        var c = a.C;
        c ? c.V().na(b) : (c = new wl(new C(b)),
        a.C = c,
        a.I.ia().Bb(c))
    }
    Tu.prototype.setMap = function(a) {
        this.u.setMap(a);
        this.I.setMap(a);
        Dg.prototype.setMap.call(this, a)
    }
    ;
    Tu.prototype.G = function() {
        return this.j
    }
    ;
    Tu.prototype.g = function(a) {
        this.j = a ? a : null;
        var b = this.o;
        b ? a ? b.Ra(Yf(a)) : b.Ra(void 0) : (this.o = b = a ? new wl(Yf(a)) : new wl({}),
        this.u.ia().Bb(b));
        this.b(new dv(this.j))
    }
    ;
    function dv(a) {
        Lc.call(this, "extentchanged");
        this.extent = a
    }
    v(dv, Lc);
    function ev(a) {
        Dg.call(this, {
            handleDownEvent: fv,
            handleDragEvent: gv,
            handleEvent: hv,
            handleUpEvent: iv
        });
        this.Id = a.condition ? a.condition : Cg;
        this.Ib = function(a) {
            return tg(a) && xg(a)
        }
        ;
        this.Zb = a.deleteCondition ? a.deleteCondition : this.Ib;
        this.ed = a.insertVertexCondition ? a.insertVertexCondition : jf;
        this.Za = this.g = null;
        this.Sa = [0, 0];
        this.B = this.I = !1;
        this.a = new Jj;
        this.oa = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.o = this.va = !1;
        this.j = [];
        this.C = new S({
            source: new V({
                useSpatialIndex: !1,
                wrapX: !!a.wrapX
            }),
            style: a.style ? a.style : jv(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        this.ga = {
            Point: this.Rn,
            LineString: this.Di,
            LinearRing: this.Di,
            Polygon: this.Sn,
            MultiPoint: this.Pn,
            MultiLineString: this.On,
            MultiPolygon: this.Qn,
            Circle: this.Mn,
            GeometryCollection: this.Nn
        };
        this.U = null;
        a.source ? (this.U = a.source,
        a = new Vc(this.U.ee()),
        y(this.U, "addfeature", this.fm, this),
        y(this.U, "removefeature", this.hm, this)) : a = a.features;
        if (!a)
            throw Error("The modify interaction requires features or a source");
        this.u = a;
        this.u.forEach(this.sg, this);
        y(this.u, "add", this.Kn, this);
        y(this.u, "remove", this.Ln, this);
        this.S = null
    }
    v(ev, Dg);
    k = ev.prototype;
    k.sg = function(a) {
        var b = a.V();
        b && b.T()in this.ga && this.ga[b.T()].call(this, a, b);
        (b = this.v) && b.c && this.c() && kv(this, this.Sa, b);
        y(a, "change", this.Ci, this)
    }
    ;
    function lv(a, b) {
        a.B || (a.B = !0,
        a.b(new mv("modifystart",a.u,b)))
    }
    function nv(a, b) {
        ov(a, b);
        a.g && !a.u.ec() && (a.C.ia().Fb(a.g),
        a.g = null);
        Hc(b, "change", a.Ci, a)
    }
    function ov(a, b) {
        a = a.a;
        var c = [];
        a.forEach(function(a) {
            b === a.feature && c.push(a)
        });
        for (var d = c.length - 1; 0 <= d; --d)
            a.remove(c[d])
    }
    k.Ia = function(a) {
        this.g && !a && (this.C.ia().Fb(this.g),
        this.g = null);
        Dg.prototype.Ia.call(this, a)
    }
    ;
    k.setMap = function(a) {
        this.C.setMap(a);
        Dg.prototype.setMap.call(this, a)
    }
    ;
    k.fm = function(a) {
        a.feature && this.u.push(a.feature)
    }
    ;
    k.hm = function(a) {
        a.feature && this.u.remove(a.feature)
    }
    ;
    k.Kn = function(a) {
        this.sg(a.element)
    }
    ;
    k.Ci = function(a) {
        this.o || (a = a.target,
        nv(this, a),
        this.sg(a))
    }
    ;
    k.Ln = function(a) {
        nv(this, a.element)
    }
    ;
    k.Rn = function(a, b) {
        var c = b.X();
        a = {
            feature: a,
            geometry: b,
            la: [c, c]
        };
        this.a.Ga(b.G(), a)
    }
    ;
    k.Pn = function(a, b) {
        var c = b.X(), d;
        var e = 0;
        for (d = c.length; e < d; ++e) {
            var f = c[e];
            f = {
                feature: a,
                geometry: b,
                depth: [e],
                index: e,
                la: [f, f]
            };
            this.a.Ga(b.G(), f)
        }
    }
    ;
    k.Di = function(a, b) {
        var c = b.X(), d;
        var e = 0;
        for (d = c.length - 1; e < d; ++e) {
            var f = c.slice(e, e + 2);
            var g = {
                feature: a,
                geometry: b,
                index: e,
                la: f
            };
            this.a.Ga(La(f), g)
        }
    }
    ;
    k.On = function(a, b) {
        var c = b.X(), d, e;
        var f = 0;
        for (e = c.length; f < e; ++f) {
            var g = c[f];
            var h = 0;
            for (d = g.length - 1; h < d; ++h) {
                var l = g.slice(h, h + 2);
                var m = {
                    feature: a,
                    geometry: b,
                    depth: [f],
                    index: h,
                    la: l
                };
                this.a.Ga(La(l), m)
            }
        }
    }
    ;
    k.Sn = function(a, b) {
        var c = b.X(), d, e;
        var f = 0;
        for (e = c.length; f < e; ++f) {
            var g = c[f];
            var h = 0;
            for (d = g.length - 1; h < d; ++h) {
                var l = g.slice(h, h + 2);
                var m = {
                    feature: a,
                    geometry: b,
                    depth: [f],
                    index: h,
                    la: l
                };
                this.a.Ga(La(l), m)
            }
        }
    }
    ;
    k.Qn = function(a, b) {
        var c = b.X(), d, e, f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g];
            var l = 0;
            for (e = h.length; l < e; ++l) {
                var m = h[l];
                var n = 0;
                for (d = m.length - 1; n < d; ++n) {
                    var p = m.slice(n, n + 2);
                    var q = {
                        feature: a,
                        geometry: b,
                        depth: [l, g],
                        index: n,
                        la: p
                    };
                    this.a.Ga(La(p), q)
                }
            }
        }
    }
    ;
    k.Mn = function(a, b) {
        var c = b.xa()
          , d = {
            feature: a,
            geometry: b,
            index: 0,
            la: [c, c]
        };
        a = {
            feature: a,
            geometry: b,
            index: 1,
            la: [c, c]
        };
        d.Wf = a.Wf = [d, a];
        this.a.Ga(Xa(c), d);
        this.a.Ga(b.G(), a)
    }
    ;
    k.Nn = function(a, b) {
        var c = b.a;
        for (b = 0; b < c.length; ++b)
            this.ga[c[b].T()].call(this, a, c[b])
    }
    ;
    function pv(a, b) {
        var c = a.g;
        c ? c.V().na(b) : (c = new wl(new C(b)),
        a.g = c,
        a.C.ia().Bb(c))
    }
    function qv(a, b) {
        return a.index - b.index
    }
    function fv(a) {
        if (!this.Id(a))
            return !1;
        kv(this, a.pixel, a.map);
        var b = a.map.Xa(a.pixel);
        this.j.length = 0;
        this.B = !1;
        var c = this.g;
        if (c) {
            var d = [];
            c = c.V().X();
            var e = La([c]);
            e = Mj(this.a, e);
            var f = {};
            e.sort(qv);
            for (var g = 0, h = e.length; g < h; ++g) {
                var l = e[g]
                  , m = l.la
                  , n = w(l.feature)
                  , p = l.depth;
                p && (n += "-" + p.join("-"));
                f[n] || (f[n] = Array(2));
                if ("Circle" === l.geometry.T() && 1 === l.index)
                    m = rv(b, l),
                    bf(m, c) && !f[n][0] && (this.j.push([l, 0]),
                    f[n][0] = l);
                else if (bf(m[0], c) && !f[n][0])
                    this.j.push([l, 0]),
                    f[n][0] = l;
                else if (bf(m[1], c) && !f[n][1]) {
                    if ("LineString" !== l.geometry.T() && "MultiLineString" !== l.geometry.T() || !f[n][0] || 0 !== f[n][0].index)
                        this.j.push([l, 1]),
                        f[n][1] = l
                } else
                    this.ed(a) && w(m)in this.Za && !f[n][0] && !f[n][1] && d.push([l, c])
            }
            d.length && lv(this, a);
            for (a = d.length - 1; 0 <= a; --a)
                this.pm.apply(this, d[a])
        }
        return !!this.g
    }
    function gv(a) {
        this.I = !1;
        lv(this, a);
        a = a.coordinate;
        for (var b = 0, c = this.j.length; b < c; ++b) {
            var d = this.j[b]
              , e = d[0]
              , f = e.depth
              , g = e.geometry
              , h = e.la;
            for (d = d[1]; a.length < g.ma(); )
                a.push(h[d][a.length]);
            switch (g.T()) {
            case "Point":
                var l = a;
                h[0] = h[1] = a;
                break;
            case "MultiPoint":
                l = g.X();
                l[e.index] = a;
                h[0] = h[1] = a;
                break;
            case "LineString":
                l = g.X();
                l[e.index + d] = a;
                h[d] = a;
                break;
            case "MultiLineString":
                l = g.X();
                l[f[0]][e.index + d] = a;
                h[d] = a;
                break;
            case "Polygon":
                l = g.X();
                l[f[0]][e.index + d] = a;
                h[d] = a;
                break;
            case "MultiPolygon":
                l = g.X();
                l[f[1]][f[0]][e.index + d] = a;
                h[d] = a;
                break;
            case "Circle":
                h[0] = h[1] = a,
                0 === e.index ? (this.o = !0,
                g.qb(a)) : (this.o = !0,
                g.Xc(ff(g.xa(), a))),
                this.o = !1
            }
            l && (e = g,
            f = l,
            this.o = !0,
            e.na(f),
            this.o = !1)
        }
        pv(this, a)
    }
    function iv(a) {
        for (var b, c, d = this.j.length - 1; 0 <= d; --d)
            if (b = this.j[d][0],
            c = b.geometry,
            "Circle" === c.T()) {
                var e = c.xa()
                  , f = b.Wf[0];
                b = b.Wf[1];
                f.la[0] = f.la[1] = e;
                b.la[0] = b.la[1] = e;
                Kj(this.a, Xa(e), f);
                Kj(this.a, c.G(), b)
            } else
                Kj(this.a, La(b.la), b);
        this.B && (this.b(new mv("modifyend",this.u,a)),
        this.B = !1);
        return !1
    }
    function hv(a) {
        if (!(a instanceof be))
            return !0;
        this.S = a;
        var b;
        dg(a.map.$())[1] || "pointermove" != a.type || this.D || (this.Sa = a.pixel,
        kv(this, a.pixel, a.map));
        this.g && this.Zb(a) && (b = "singleclick" == a.type && this.I ? !0 : this.rj());
        "singleclick" == a.type && (this.I = !1);
        return Eg.call(this, a) && !b
    }
    function kv(a, b, c) {
        function d(a, b) {
            return sv(e, a) - sv(e, b)
        }
        var e = c.Xa(b)
          , f = Oa(Xa(e), c.$().Pa() * a.oa);
        f = Mj(a.a, f);
        if (0 < f.length) {
            f.sort(d);
            var g = f[0]
              , h = g.la
              , l = rv(e, g)
              , m = c.Ka(l)
              , n = ff(b, m);
            if (n <= a.oa) {
                b = {};
                if ("Circle" === g.geometry.T() && 1 === g.index)
                    a.va = !0,
                    pv(a, l);
                else
                    for (n = c.Ka(h[0]),
                    g = c.Ka(h[1]),
                    c = ef(m, n),
                    m = ef(m, g),
                    n = Math.sqrt(Math.min(c, m)),
                    a.va = n <= a.oa,
                    a.va && (l = c > m ? h[1] : h[0]),
                    pv(a, l),
                    m = 1,
                    c = f.length; m < c; ++m)
                        if (l = f[m].la,
                        bf(h[0], l[0]) && bf(h[1], l[1]) || bf(h[0], l[1]) && bf(h[1], l[0]))
                            b[w(l)] = !0;
                        else
                            break;
                b[w(h)] = !0;
                a.Za = b;
                return
            }
        }
        a.g && (a.C.ia().Fb(a.g),
        a.g = null)
    }
    function sv(a, b) {
        var c = b.geometry;
        return "Circle" === c.T() && 1 === b.index ? (a = ef(c.xa(), a),
        c = Math.sqrt(a) - c.ud(),
        c * c) : gf(a, b.la)
    }
    function rv(a, b) {
        var c = b.geometry;
        return "Circle" === c.T() && 1 === b.index ? c.Db(a) : Ze(a, b.la)
    }
    k.pm = function(a, b) {
        for (var c = a.la, d = a.feature, e = a.geometry, f = a.depth, g = a.index, h; b.length < e.ma(); )
            b.push(0);
        switch (e.T()) {
        case "MultiLineString":
            h = e.X();
            h[f[0]].splice(g + 1, 0, b);
            break;
        case "Polygon":
            h = e.X();
            h[f[0]].splice(g + 1, 0, b);
            break;
        case "MultiPolygon":
            h = e.X();
            h[f[1]][f[0]].splice(g + 1, 0, b);
            break;
        case "LineString":
            h = e.X();
            h.splice(g + 1, 0, b);
            break;
        default:
            return
        }
        this.o = !0;
        e.na(h);
        this.o = !1;
        h = this.a;
        h.remove(a);
        tv(this, e, g, f, 1);
        a = {
            la: [c[0], b],
            feature: d,
            geometry: e,
            depth: f,
            index: g
        };
        h.Ga(La(a.la), a);
        this.j.push([a, 1]);
        b = {
            la: [b, c[1]],
            feature: d,
            geometry: e,
            depth: f,
            index: g + 1
        };
        h.Ga(La(b.la), b);
        this.j.push([b, 0]);
        this.I = !0
    }
    ;
    k.rj = function() {
        if (this.S && "pointerdrag" != this.S.type) {
            var a = this.S;
            lv(this, a);
            var b = this.j, c = {}, d, e;
            for (e = b.length - 1; 0 <= e; --e) {
                var f = b[e];
                var g = f[0];
                var h = w(g.feature);
                g.depth && (h += "-" + g.depth.join("-"));
                h in c || (c[h] = {});
                0 === f[1] ? (c[h].right = g,
                c[h].index = g.index) : 1 == f[1] && (c[h].left = g,
                c[h].index = g.index + 1)
            }
            for (h in c) {
                var l = c[h].right;
                var m = c[h].left;
                e = c[h].index;
                var n = e - 1;
                g = void 0 !== m ? m : l;
                0 > n && (n = 0);
                f = g.geometry;
                var p = d = f.X();
                var q = !1;
                switch (f.T()) {
                case "MultiLineString":
                    2 < d[g.depth[0]].length && (d[g.depth[0]].splice(e, 1),
                    q = !0);
                    break;
                case "LineString":
                    2 < d.length && (d.splice(e, 1),
                    q = !0);
                    break;
                case "MultiPolygon":
                    p = p[g.depth[1]];
                case "Polygon":
                    p = p[g.depth[0]],
                    4 < p.length && (e == p.length - 1 && (e = 0),
                    p.splice(e, 1),
                    q = !0,
                    0 === e && (p.pop(),
                    p.push(p[0]),
                    n = p.length - 1))
                }
                q && (q = f,
                this.o = !0,
                q.na(d),
                this.o = !1,
                d = [],
                void 0 !== m && (this.a.remove(m),
                d.push(m.la[0])),
                void 0 !== l && (this.a.remove(l),
                d.push(l.la[1])),
                void 0 !== m && void 0 !== l && (m = {
                    depth: g.depth,
                    feature: g.feature,
                    geometry: g.geometry,
                    index: n,
                    la: d
                },
                this.a.Ga(La(m.la), m)),
                tv(this, f, e, g.depth, -1),
                this.g && (this.C.ia().Fb(this.g),
                this.g = null),
                b.length = 0)
            }
            this.b(new mv("modifyend",this.u,a));
            this.B = !1;
            return !0
        }
        return !1
    }
    ;
    function tv(a, b, c, d, e) {
        Oj(a.a, b.G(), function(a) {
            a.geometry === b && (void 0 === d || void 0 === a.depth || ma(a.depth, d)) && a.index > c && (a.index += e)
        })
    }
    function jv() {
        var a = vl();
        return function() {
            return a.Point
        }
    }
    function mv(a, b, c) {
        Lc.call(this, a);
        this.features = b;
        this.mapBrowserEvent = c
    }
    v(mv, Lc);
    function uv(a) {
        ng.call(this, {
            handleEvent: vv
        });
        a = a ? a : {};
        this.B = a.condition ? a.condition : xg;
        this.D = a.addCondition ? a.addCondition : kf;
        this.C = a.removeCondition ? a.removeCondition : kf;
        this.I = a.toggleCondition ? a.toggleCondition : zg;
        this.o = a.multi ? a.multi : !1;
        this.l = a.filter ? a.filter : jf;
        this.j = a.hitTolerance ? a.hitTolerance : 0;
        this.g = new S({
            source: new V({
                useSpatialIndex: !1,
                features: a.features,
                wrapX: a.wrapX
            }),
            style: a.style ? a.style : wv(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        if (a.layers)
            if ("function" === typeof a.layers)
                a = a.layers;
            else {
                var b = a.layers;
                a = function(a) {
                    return ha(b, a)
                }
            }
        else
            a = jf;
        this.u = a;
        this.a = {};
        a = this.g.ia().i;
        y(a, "add", this.Tn, this);
        y(a, "remove", this.Xn, this)
    }
    v(uv, ng);
    k = uv.prototype;
    k.Un = function() {
        return this.g.ia().i
    }
    ;
    k.Vn = function() {
        return this.j
    }
    ;
    k.Wn = function(a) {
        a = w(a);
        return this.a[a]
    }
    ;
    function vv(a) {
        if (!this.B(a))
            return !0;
        var b = this.D(a)
          , c = this.C(a)
          , d = this.I(a)
          , e = !b && !c && !d
          , f = a.map
          , g = this.g.ia().i
          , h = []
          , l = [];
        if (e) {
            sb(this.a);
            f.Vd(a.pixel, function(a, b) {
                if (this.l(a, b))
                    return l.push(a),
                    a = w(a),
                    this.a[a] = b,
                    !this.o
            }
            .bind(this), {
                layerFilter: this.u,
                hitTolerance: this.j
            });
            for (e = g.ec() - 1; 0 <= e; --e) {
                f = g.item(e);
                var m = l.indexOf(f);
                -1 < m ? l.splice(m, 1) : (g.remove(f),
                h.push(f))
            }
            l.length && g.ng(l)
        } else {
            f.Vd(a.pixel, function(a, e) {
                if (this.l(a, e))
                    return !b && !d || ha(g.a, a) ? (c || d) && ha(g.a, a) && (h.push(a),
                    e = w(a),
                    delete this.a[e]) : (l.push(a),
                    a = w(a),
                    this.a[a] = e),
                    !this.o
            }
            .bind(this), {
                layerFilter: this.u,
                hitTolerance: this.j
            });
            for (e = h.length - 1; 0 <= e; --e)
                g.remove(h[e]);
            g.ng(l)
        }
        (0 < l.length || 0 < h.length) && this.b(new xv(yv,l,h,a));
        return wg(a)
    }
    k.Yn = function(a) {
        this.j = a
    }
    ;
    k.setMap = function(a) {
        var b = this.v
          , c = this.g.ia().i;
        b && c.forEach(b.Mj, b);
        ng.prototype.setMap.call(this, a);
        this.g.setMap(a);
        a && c.forEach(a.Hj, a)
    }
    ;
    function wv() {
        var a = vl();
        ka(a.Polygon, a.LineString);
        ka(a.GeometryCollection, a.LineString);
        return function(b) {
            return b.V() ? a[b.V().T()] : null
        }
    }
    k.Tn = function(a) {
        var b = this.v;
        b && b.Hj(a.element)
    }
    ;
    k.Xn = function(a) {
        var b = this.v;
        b && b.Mj(a.element)
    }
    ;
    function xv(a, b, c, d) {
        Lc.call(this, a);
        this.selected = b;
        this.deselected = c;
        this.mapBrowserEvent = d
    }
    v(xv, Lc);
    var yv = "select";
    function zv(a) {
        Dg.call(this, {
            handleEvent: Av,
            handleDownEvent: jf,
            handleUpEvent: Bv
        });
        a = a ? a : {};
        this.o = a.source ? a.source : null;
        this.S = void 0 !== a.vertex ? a.vertex : !0;
        this.B = void 0 !== a.edge ? a.edge : !0;
        this.j = a.features ? a.features : null;
        this.oa = [];
        this.C = {};
        this.U = {};
        this.u = {};
        this.I = null;
        this.g = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.va = Cv.bind(this);
        this.a = new Jj;
        this.ga = {
            Point: this.fo,
            LineString: this.Gi,
            LinearRing: this.Gi,
            Polygon: this.ho,
            MultiPoint: this.co,
            MultiLineString: this.bo,
            MultiPolygon: this.eo,
            GeometryCollection: this.ao,
            Circle: this.$n
        }
    }
    v(zv, Dg);
    k = zv.prototype;
    k.Bb = function(a, b) {
        b = void 0 !== b ? b : !0;
        var c = w(a)
          , d = a.V();
        if (d) {
            var e = this.ga[d.T()];
            e && (this.U[c] = d.G(Ma()),
            e.call(this, a, d))
        }
        b && (this.C[c] = y(a, "change", this.Zn, this))
    }
    ;
    k.Lk = function(a) {
        this.Bb(a)
    }
    ;
    k.Mk = function(a) {
        this.Fb(a)
    }
    ;
    k.Ei = function(a) {
        if (a instanceof zu)
            var b = a.feature;
        else
            a instanceof Zc && (b = a.element);
        this.Bb(b)
    }
    ;
    k.Fi = function(a) {
        if (a instanceof zu)
            var b = a.feature;
        else
            a instanceof Zc && (b = a.element);
        this.Fb(b)
    }
    ;
    k.Zn = function(a) {
        a = a.target;
        if (this.D) {
            var b = w(a);
            b in this.u || (this.u[b] = a)
        } else
            this.Nj(a)
    }
    ;
    k.Fb = function(a, b) {
        b = void 0 !== b ? b : !0;
        var c = w(a)
          , d = this.U[c];
        if (d) {
            var e = this.a
              , f = [];
            Oj(e, d, function(b) {
                a === b.feature && f.push(b)
            });
            for (d = f.length - 1; 0 <= d; --d)
                e.remove(f[d])
        }
        b && (zc(this.C[c]),
        delete this.C[c])
    }
    ;
    k.setMap = function(a) {
        var b = this.v, c = this.oa, d;
        this.j ? d = this.j : this.o && (d = this.o.ee());
        b && (c.forEach(zc),
        c.length = 0,
        d.forEach(this.Mk, this));
        Dg.prototype.setMap.call(this, a);
        a && (this.j ? c.push(y(this.j, "add", this.Ei, this), y(this.j, "remove", this.Fi, this)) : this.o && c.push(y(this.o, "addfeature", this.Ei, this), y(this.o, "removefeature", this.Fi, this)),
        d.forEach(this.Lk, this))
    }
    ;
    k.$c = kf;
    function Dv(a, b, c, d) {
        var e = d.Xa([b[0] - a.g, b[1] + a.g])
          , f = d.Xa([b[0] + a.g, b[1] - a.g]);
        e = La([e, f]);
        var g = Mj(a.a, e);
        a.S && !a.B && (g = g.filter(function(a) {
            return "Circle" !== a.feature.V().T()
        }));
        var h = !1;
        e = !1;
        var l = f = null;
        if (0 < g.length) {
            a.I = c;
            g.sort(a.va);
            var m = g[0].la;
            h = "Circle" === g[0].feature.V().T();
            if (a.S && !a.B) {
                if (c = d.Ka(m[0]),
                h = d.Ka(m[1]),
                c = ef(b, c),
                b = ef(b, h),
                h = Math.sqrt(Math.min(c, b)),
                h = h <= a.g)
                    e = !0,
                    f = c > b ? m[1] : m[0],
                    l = d.Ka(f)
            } else
                a.B && (f = h ? Ye(c, g[0].feature.V()) : Ze(c, m),
                l = d.Ka(f),
                ff(b, l) <= a.g && (e = !0,
                a.S && !h && (c = d.Ka(m[0]),
                h = d.Ka(m[1]),
                c = ef(l, c),
                b = ef(l, h),
                h = Math.sqrt(Math.min(c, b)),
                h = h <= a.g))) && (f = c > b ? m[1] : m[0],
                l = d.Ka(f));
            e && (l = [Math.round(l[0]), Math.round(l[1])])
        }
        return {
            Bq: e,
            vertex: f,
            Kq: l
        }
    }
    k.Nj = function(a) {
        this.Fb(a, !1);
        this.Bb(a, !1)
    }
    ;
    k.$n = function(a, b) {
        b = Zf(b).X()[0];
        var c;
        var d = 0;
        for (c = b.length - 1; d < c; ++d) {
            var e = b.slice(d, d + 2);
            var f = {
                feature: a,
                la: e
            };
            this.a.Ga(La(e), f)
        }
    }
    ;
    k.ao = function(a, b) {
        var c = b.a;
        for (b = 0; b < c.length; ++b) {
            var d = this.ga[c[b].T()];
            d && d.call(this, a, c[b])
        }
    }
    ;
    k.Gi = function(a, b) {
        b = b.X();
        var c;
        var d = 0;
        for (c = b.length - 1; d < c; ++d) {
            var e = b.slice(d, d + 2);
            var f = {
                feature: a,
                la: e
            };
            this.a.Ga(La(e), f)
        }
    }
    ;
    k.bo = function(a, b) {
        b = b.X();
        var c, d;
        var e = 0;
        for (d = b.length; e < d; ++e) {
            var f = b[e];
            var g = 0;
            for (c = f.length - 1; g < c; ++g) {
                var h = f.slice(g, g + 2);
                var l = {
                    feature: a,
                    la: h
                };
                this.a.Ga(La(h), l)
            }
        }
    }
    ;
    k.co = function(a, b) {
        var c = b.X(), d;
        var e = 0;
        for (d = c.length; e < d; ++e) {
            var f = c[e];
            f = {
                feature: a,
                la: [f, f]
            };
            this.a.Ga(b.G(), f)
        }
    }
    ;
    k.eo = function(a, b) {
        b = b.X();
        var c, d, e;
        var f = 0;
        for (e = b.length; f < e; ++f) {
            var g = b[f];
            var h = 0;
            for (d = g.length; h < d; ++h) {
                var l = g[h];
                var m = 0;
                for (c = l.length - 1; m < c; ++m) {
                    var n = l.slice(m, m + 2);
                    var p = {
                        feature: a,
                        la: n
                    };
                    this.a.Ga(La(n), p)
                }
            }
        }
    }
    ;
    k.fo = function(a, b) {
        var c = b.X();
        a = {
            feature: a,
            la: [c, c]
        };
        this.a.Ga(b.G(), a)
    }
    ;
    k.ho = function(a, b) {
        b = b.X();
        var c, d;
        var e = 0;
        for (d = b.length; e < d; ++e) {
            var f = b[e];
            var g = 0;
            for (c = f.length - 1; g < c; ++g) {
                var h = f.slice(g, g + 2);
                var l = {
                    feature: a,
                    la: h
                };
                this.a.Ga(La(h), l)
            }
        }
    }
    ;
    function Av(a) {
        var b = Dv(this, a.pixel, a.coordinate, a.map);
        b.Bq && (a.coordinate = b.vertex.slice(0, 2),
        a.pixel = b.Kq);
        return Eg.call(this, a)
    }
    function Bv() {
        var a = tb(this.u);
        a.length && (a.forEach(this.Nj, this),
        this.u = {});
        return !1
    }
    function Cv(a, b) {
        return gf(this.I, a.la) - gf(this.I, b.la)
    }
    ;function Ev(a) {
        Dg.call(this, {
            handleDownEvent: Fv,
            handleDragEvent: Gv,
            handleMoveEvent: Hv,
            handleUpEvent: Iv
        });
        a = a ? a : {};
        this.a = null;
        this.j = void 0 !== a.features ? a.features : null;
        if (a.layers)
            if ("function" === typeof a.layers)
                var b = a.layers;
            else {
                var c = a.layers;
                b = function(a) {
                    return ha(c, a)
                }
            }
        else
            b = jf;
        this.B = b;
        this.o = a.hitTolerance ? a.hitTolerance : 0;
        this.g = null;
        y(this, Sc("active"), this.u, this)
    }
    v(Ev, Dg);
    function Fv(a) {
        this.g = Jv(this, a.pixel, a.map);
        if (!this.a && this.g) {
            this.a = a.coordinate;
            Hv.call(this, a);
            var b = this.j || new Vc([this.g]);
            this.b(new Kv("translatestart",b,a.coordinate));
            return !0
        }
        return !1
    }
    function Iv(a) {
        if (this.a) {
            this.a = null;
            Hv.call(this, a);
            var b = this.j || new Vc([this.g]);
            this.b(new Kv("translateend",b,a.coordinate));
            return !0
        }
        return !1
    }
    function Gv(a) {
        if (this.a) {
            a = a.coordinate;
            var b = a[0] - this.a[0]
              , c = a[1] - this.a[1]
              , d = this.j || new Vc([this.g]);
            d.forEach(function(a) {
                var d = a.V();
                d.translate(b, c);
                a.Ra(d)
            });
            this.a = a;
            this.b(new Kv("translating",d,a))
        }
    }
    function Hv(a) {
        var b = a.map.a;
        Jv(this, a.pixel, a.map) ? (b.classList.remove(this.a ? "ol-grab" : "ol-grabbing"),
        b.classList.add(this.a ? "ol-grabbing" : "ol-grab")) : b.classList.remove("ol-grab", "ol-grabbing")
    }
    function Jv(a, b, c) {
        return c.Vd(b, function(a) {
            if (!this.j || ha(this.j.a, a))
                return a
        }
        .bind(a), {
            layerFilter: a.B,
            hitTolerance: a.o
        })
    }
    Ev.prototype.C = function() {
        return this.o
    }
    ;
    Ev.prototype.I = function(a) {
        this.o = a
    }
    ;
    Ev.prototype.setMap = function(a) {
        var b = this.v;
        Dg.prototype.setMap.call(this, a);
        Lv(this, b)
    }
    ;
    Ev.prototype.u = function() {
        Lv(this, null)
    }
    ;
    function Lv(a, b) {
        var c = a.v;
        a = a.c();
        c && a || (c = c || b) && c.a.classList.remove("ol-grab", "ol-grabbing")
    }
    function Kv(a, b, c) {
        Lc.call(this, a);
        this.features = b;
        this.coordinate = c
    }
    v(Kv, Lc);
    function W(a) {
        a = a ? a : {};
        var b = rb({}, a);
        delete b.gradient;
        delete b.radius;
        delete b.blur;
        delete b.shadow;
        delete b.weight;
        S.call(this, b);
        this.g = null;
        this.I = void 0 !== a.shadow ? a.shadow : 250;
        this.B = void 0;
        this.D = null;
        y(this, Sc(Mv), this.Nl, this);
        this.zj(a.gradient ? a.gradient : Nv);
        this.tj(void 0 !== a.blur ? a.blur : 15);
        this.Xc(void 0 !== a.radius ? a.radius : 8);
        y(this, Sc(Ov), this.lg, this);
        y(this, Sc(Pv), this.lg, this);
        this.lg();
        var c = a.weight ? a.weight : "weight", d;
        "string" === typeof c ? d = function(a) {
            return a.get(c)
        }
        : d = c;
        this.i(function(a) {
            a = d(a);
            a = void 0 !== a ? Aa(a, 0, 1) : 1;
            var b = 255 * a | 0
              , c = this.D[b];
            c || (c = [new ql({
                image: new to({
                    opacity: a,
                    src: this.B
                })
            })],
            this.D[b] = c);
            return c
        }
        .bind(this));
        this.set(hu, null);
        y(this, "render", this.dm, this)
    }
    v(W, S);
    var Nv = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];
    k = W.prototype;
    k.Ch = function() {
        return this.get(Ov)
    }
    ;
    k.Jh = function() {
        return this.get(Mv)
    }
    ;
    k.Ii = function() {
        return this.get(Pv)
    }
    ;
    k.Nl = function() {
        for (var a = this.Jh(), b = gd(1, 256), c = b.createLinearGradient(0, 0, 1, 256), d = 1 / (a.length - 1), e = 0, f = a.length; e < f; ++e)
            c.addColorStop(e * d, a[e]);
        b.fillStyle = c;
        b.fillRect(0, 0, 1, 256);
        this.g = b.getImageData(0, 0, 1, 256).data
    }
    ;
    k.lg = function() {
        var a = this.Ii()
          , b = this.Ch()
          , c = a + b + 1
          , d = 2 * c;
        d = gd(d, d);
        d.shadowOffsetX = d.shadowOffsetY = this.I;
        d.shadowBlur = b;
        d.shadowColor = "#000";
        d.beginPath();
        b = c - this.I;
        d.arc(b, b, a, 0, 2 * Math.PI, !0);
        d.fill();
        this.B = d.canvas.toDataURL();
        this.D = Array(256);
        this.s()
    }
    ;
    k.dm = function(a) {
        a = a.context;
        var b = a.canvas;
        b = a.getImageData(0, 0, b.width, b.height);
        var c = b.data, d, e;
        var f = 0;
        for (d = c.length; f < d; f += 4)
            if (e = 4 * c[f + 3])
                c[f] = this.g[e],
                c[f + 1] = this.g[e + 1],
                c[f + 2] = this.g[e + 2];
        a.putImageData(b, 0, 0)
    }
    ;
    k.tj = function(a) {
        this.set(Ov, a)
    }
    ;
    k.zj = function(a) {
        this.set(Mv, a)
    }
    ;
    k.Xc = function(a) {
        this.set(Pv, a)
    }
    ;
    var Ov = "blur"
      , Mv = "gradient"
      , Pv = "radius";
    function Qv(a) {
        Yt.call(this, a);
        this.o = Dh();
        this.g = null
    }
    v(Qv, Yt);
    Qv.prototype.u = function(a, b, c) {
        $t(this, "precompose", c, a, void 0);
        var d = this.Y();
        if (d) {
            var e = b.extent
              , f = void 0 !== e && !Ta(e, a.extent) && ob(e, a.extent);
            f && Zt(c, a, e);
            e = this.D();
            var g = c.globalAlpha;
            c.globalAlpha = b.opacity;
            c.drawImage(d, 0, 0, +d.width, +d.height, Math.round(e[4]), Math.round(e[5]), Math.round(d.width * e[0]), Math.round(d.height * e[3]));
            c.globalAlpha = g;
            f && c.restore()
        }
        this.qf(c, a, b)
    }
    ;
    Qv.prototype.Ha = function(a, b, c, d, e) {
        var f = this.a;
        return f.ia().Ha(a, b.viewState.resolution, b.viewState.rotation, c, b.skippedFeatureUids, function(a) {
            return d.call(e, a, f)
        })
    }
    ;
    Qv.prototype.v = function(a, b, c, d) {
        if (this.Y()) {
            if (this.a.ia().Ha !== ra)
                return Yt.prototype.v.apply(this, arguments);
            var e = Ih(this.o, a.slice());
            df(e, b.viewState.resolution / this.c);
            this.g || (this.g = gd(1, 1));
            this.g.clearRect(0, 0, 1, 1);
            this.g.drawImage(this.Y(), e[0], e[1], 1, 1, 0, 0, 1, 1);
            e = this.g.getImageData(0, 0, 1, 1).data;
            if (0 < e[3])
                return c.call(d, this.a, e)
        }
    }
    ;
    function Rv(a) {
        Qv.call(this, a);
        this.M = null;
        this.i = Dh()
    }
    v(Rv, Qv);
    Rv.prototype.Y = function() {
        return this.M ? this.M.Y() : null
    }
    ;
    Rv.prototype.D = function() {
        return this.i
    }
    ;
    Rv.prototype.xd = function(a, b) {
        var c = a.pixelRatio
          , d = a.size
          , e = a.viewState
          , f = e.center
          , g = e.resolution
          , h = this.a.ia()
          , l = a.viewHints
          , m = a.extent;
        void 0 !== b.extent && (m = nb(m, b.extent));
        l[0] || l[1] || ib(m) || (b = h.Y(m, g, c, e.projection)) && St(this, b) && (this.M = b);
        if (this.M) {
            b = this.M;
            l = b.G();
            m = b.resolution;
            e = b.a;
            var n = c * m / (g * e);
            l = Mh(this.i, c * d[0] / 2, c * d[1] / 2, n, n, 0, e * (l[0] - f[0]) / m, e * (f[1] - l[3]) / m);
            Mh(this.o, c * d[0] / 2 - l[4], c * d[1] / 2 - l[5], c / g, -c / g, 0, -f[0], -f[1]);
            Ut(a.attributions, b.i);
            Vt(a, h);
            this.c = g * c / e
        }
        return !!this.M
    }
    ;
    function Sv(a, b, c, d) {
        var e = cc(c, b, a);
        c = Pb(b, d, c);
        b = b.Nc();
        void 0 !== b && (c *= b);
        b = a.Nc();
        void 0 !== b && (c /= b);
        b = a.G();
        if (!b || Ra(b, e))
            a = Pb(a, c, e) / c,
            isFinite(a) && 0 < a && (c /= a);
        return c
    }
    function Tv(a, b, c, d) {
        a = c - a;
        b = d - b;
        var e = Math.sqrt(a * a + b * b);
        return [Math.round(c + a / e), Math.round(d + b / e)]
    }
    function Uv(a, b, c, d, e, f, g, h, l, m, n) {
        var p = gd(Math.round(c * a), Math.round(c * b));
        if (!l.length)
            return p.canvas;
        p.scale(c, c);
        var q = Ma();
        l.forEach(function(a) {
            bb(q, a.extent)
        });
        var t = gd(Math.round(c * jb(q) / d), Math.round(c * kb(q) / d))
          , u = c / d;
        l.forEach(function(a) {
            t.drawImage(a.image, m, m, a.image.width - 2 * m, a.image.height - 2 * m, (a.extent[0] - q[0]) * u, -(a.extent[3] - q[3]) * u, jb(a.extent) * u, kb(a.extent) * u)
        });
        var x = gb(g);
        h.c.forEach(function(a) {
            var b = a.source
              , e = a.target
              , g = b[1][0]
              , h = b[1][1]
              , l = b[2][0]
              , m = b[2][1];
            a = (e[0][0] - x[0]) / f;
            var n = -(e[0][1] - x[1]) / f
              , u = (e[1][0] - x[0]) / f
              , B = -(e[1][1] - x[1]) / f
              , ea = (e[2][0] - x[0]) / f
              , Ya = -(e[2][1] - x[1]) / f;
            e = b[0][0];
            b = b[0][1];
            g -= e;
            h -= b;
            l -= e;
            m -= b;
            a: {
                g = [[g, h, 0, 0, u - a], [l, m, 0, 0, ea - a], [0, 0, g, h, B - n], [0, 0, l, m, Ya - n]];
                h = g.length;
                for (l = 0; l < h; l++) {
                    m = l;
                    for (var da = Math.abs(g[l][l]), Vb = l + 1; Vb < h; Vb++) {
                        var Ac = Math.abs(g[Vb][l]);
                        Ac > da && (da = Ac,
                        m = Vb)
                    }
                    if (!da) {
                        g = null;
                        break a
                    }
                    da = g[m];
                    g[m] = g[l];
                    g[l] = da;
                    for (m = l + 1; m < h; m++)
                        for (da = -g[m][l] / g[l][l],
                        Vb = l; Vb < h + 1; Vb++)
                            g[m][Vb] = l == Vb ? 0 : g[m][Vb] + da * g[l][Vb]
                }
                l = Array(h);
                for (m = h - 1; 0 <= m; m--)
                    for (l[m] = g[m][h] / g[m][m],
                    da = m - 1; 0 <= da; da--)
                        g[da][h] -= g[da][m] * l[m];
                g = l
            }
            g && (p.save(),
            p.beginPath(),
            l = (a + u + ea) / 3,
            m = (n + B + Ya) / 3,
            h = Tv(l, m, a, n),
            u = Tv(l, m, u, B),
            ea = Tv(l, m, ea, Ya),
            p.moveTo(u[0], u[1]),
            p.lineTo(h[0], h[1]),
            p.lineTo(ea[0], ea[1]),
            p.clip(),
            p.transform(g[0], g[2], g[1], g[3], a, n),
            p.translate(q[0] - e, q[3] - b),
            p.scale(d / c, -d / c),
            p.drawImage(t.canvas, 0, 0),
            p.restore())
        });
        n && (p.save(),
        p.strokeStyle = "black",
        p.lineWidth = 1,
        h.c.forEach(function(a) {
            var b = a.target;
            a = (b[0][0] - x[0]) / f;
            var c = -(b[0][1] - x[1]) / f
              , d = (b[1][0] - x[0]) / f
              , e = -(b[1][1] - x[1]) / f
              , g = (b[2][0] - x[0]) / f;
            b = -(b[2][1] - x[1]) / f;
            p.beginPath();
            p.moveTo(d, e);
            p.lineTo(a, c);
            p.lineTo(g, b);
            p.closePath();
            p.stroke()
        }),
        p.restore());
        return p.canvas
    }
    ;function Vv(a, b, c, d, e) {
        this.f = a;
        this.i = b;
        var f = {}
          , g = ac(this.i, this.f);
        this.a = function(a) {
            var b = a[0] + "/" + a[1];
            f[b] || (f[b] = g(a));
            return f[b]
        }
        ;
        this.g = d;
        this.v = e * e;
        this.c = [];
        this.l = !1;
        this.o = this.f.f && !!d && !!this.f.G() && jb(d) == jb(this.f.G());
        this.b = this.f.G() ? jb(this.f.G()) : null;
        this.j = this.i.G() ? jb(this.i.G()) : null;
        a = gb(c);
        b = fb(c);
        d = eb(c);
        c = db(c);
        e = this.a(a);
        var h = this.a(b)
          , l = this.a(d)
          , m = this.a(c);
        Wv(this, a, b, d, c, e, h, l, m, 10);
        if (this.l) {
            var n = Infinity;
            this.c.forEach(function(a) {
                n = Math.min(n, a.source[0][0], a.source[1][0], a.source[2][0])
            });
            this.c.forEach(function(a) {
                if (Math.max(a.source[0][0], a.source[1][0], a.source[2][0]) - n > this.b / 2) {
                    var b = [[a.source[0][0], a.source[0][1]], [a.source[1][0], a.source[1][1]], [a.source[2][0], a.source[2][1]]];
                    b[0][0] - n > this.b / 2 && (b[0][0] -= this.b);
                    b[1][0] - n > this.b / 2 && (b[1][0] -= this.b);
                    b[2][0] - n > this.b / 2 && (b[2][0] -= this.b);
                    Math.max(b[0][0], b[1][0], b[2][0]) - Math.min(b[0][0], b[1][0], b[2][0]) < this.b / 2 && (a.source = b)
                }
            }, this)
        }
        f = {}
    }
    function Wv(a, b, c, d, e, f, g, h, l, m) {
        var n = La([f, g, h, l])
          , p = a.b ? jb(n) / a.b : null
          , q = a.b
          , t = a.f.f && .5 < p && 1 > p
          , u = !1;
        if (0 < m) {
            if (a.i.c && a.j) {
                var x = La([b, c, d, e]);
                u |= .25 < jb(x) / a.j
            }
            !t && a.f.c && p && (u |= .25 < p)
        }
        if (u || !a.g || ob(n, a.g)) {
            if (!(u || isFinite(f[0]) && isFinite(f[1]) && isFinite(g[0]) && isFinite(g[1]) && isFinite(h[0]) && isFinite(h[1]) && isFinite(l[0]) && isFinite(l[1])))
                if (0 < m)
                    u = !0;
                else
                    return;
            if (0 < m && (u || (n = a.a([(b[0] + d[0]) / 2, (b[1] + d[1]) / 2]),
            q = t ? (Ga(f[0], q) + Ga(h[0], q)) / 2 - Ga(n[0], q) : (f[0] + h[0]) / 2 - n[0],
            n = (f[1] + h[1]) / 2 - n[1],
            u = q * q + n * n > a.v),
            u)) {
                Math.abs(b[0] - d[0]) <= Math.abs(b[1] - d[1]) ? (t = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2],
                q = a.a(t),
                n = [(e[0] + b[0]) / 2, (e[1] + b[1]) / 2],
                p = a.a(n),
                Wv(a, b, c, t, n, f, g, q, p, m - 1),
                Wv(a, n, t, d, e, p, q, h, l, m - 1)) : (t = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2],
                q = a.a(t),
                n = [(d[0] + e[0]) / 2, (d[1] + e[1]) / 2],
                p = a.a(n),
                Wv(a, b, t, n, e, f, q, p, l, m - 1),
                Wv(a, t, c, d, n, q, g, h, p, m - 1));
                return
            }
            if (t) {
                if (!a.o)
                    return;
                a.l = !0
            }
            a.c.push({
                source: [f, h, l],
                target: [b, d, e]
            });
            a.c.push({
                source: [f, g, h],
                target: [b, c, d]
            })
        }
    }
    function Xv(a) {
        var b = Ma();
        a.c.forEach(function(a) {
            a = a.source;
            Na(b, a[0]);
            Na(b, a[1]);
            Na(b, a[2])
        });
        return b
    }
    ;function Yv(a, b, c, d, e, f) {
        this.v = b;
        this.o = a.G();
        var g = b.G()
          , h = g ? nb(c, g) : c;
        g = Sv(a, b, lb(h), d);
        this.j = new Vv(a,b,h,this.o,.5 * g);
        this.c = d;
        this.f = c;
        a = Xv(this.j);
        this.l = (this.Gb = f(a, g, e)) ? this.Gb.a : 1;
        this.le = this.g = null;
        e = 2;
        f = [];
        this.Gb && (e = 0,
        f = this.Gb.i);
        Xs.call(this, c, d, this.l, e, f)
    }
    v(Yv, Xs);
    Yv.prototype.ka = function() {
        1 == this.state && (zc(this.le),
        this.le = null);
        Xs.prototype.ka.call(this)
    }
    ;
    Yv.prototype.Y = function() {
        return this.g
    }
    ;
    Yv.prototype.je = function() {
        var a = this.Gb.getState();
        2 == a && (this.g = Uv(jb(this.f) / this.c, kb(this.f) / this.c, this.l, this.Gb.resolution, 0, this.c, this.f, this.j, [{
            extent: this.Gb.G(),
            image: this.Gb.Y()
        }], 0));
        this.state = a;
        this.s()
    }
    ;
    Yv.prototype.load = function() {
        if (0 == this.state) {
            this.state = 1;
            this.s();
            var a = this.Gb.getState();
            2 == a || 3 == a ? this.je() : (this.le = y(this.Gb, "change", function() {
                var a = this.Gb.getState();
                if (2 == a || 3 == a)
                    zc(this.le),
                    this.le = null,
                    this.je()
            }, this),
            this.Gb.load())
        }
    }
    ;
    function Zv(a) {
        su.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state
        });
        this.B = void 0 !== a.resolutions ? a.resolutions : null;
        this.i = null;
        this.ga = 0
    }
    v(Zv, su);
    function $v(a, b) {
        a.B && (b = a.B[ja(a.B, b, 0)]);
        return b
    }
    Zv.prototype.Y = function(a, b, c, d) {
        var e = this.c;
        if (e && d && !$b(e, d)) {
            if (this.i) {
                if (this.ga == this.f && $b(this.i.v, d) && this.i.resolution == b && ab(this.i.G(), a))
                    return this.i;
                Kc(this.i);
                this.i = null
            }
            this.i = new Yv(e,d,a,b,c,function(a, b, c) {
                return this.Lc(a, b, c, e)
            }
            .bind(this));
            this.ga = this.f;
            return this.i
        }
        e && (d = e);
        return this.Lc(a, b, c, d)
    }
    ;
    Zv.prototype.l = function(a) {
        a = a.target;
        switch (a.getState()) {
        case 1:
            this.b(new aw(bw,a));
            break;
        case 2:
            this.b(new aw(cw,a));
            break;
        case 3:
            this.b(new aw(dw,a))
        }
    }
    ;
    function ew(a, b) {
        a.Y().src = b
    }
    function aw(a, b) {
        Lc.call(this, a);
        this.image = b
    }
    v(aw, Lc);
    var bw = "imageloadstart"
      , cw = "imageloadend"
      , dw = "imageloaderror";
    function fw(a) {
        Zv.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions,
            state: a.state
        });
        this.oa = a.canvasFunction;
        this.S = null;
        this.U = 0;
        this.va = void 0 !== a.ratio ? a.ratio : 1.5
    }
    v(fw, Zv);
    fw.prototype.Lc = function(a, b, c, d) {
        b = $v(this, b);
        var e = this.S;
        if (e && this.U == this.f && e.resolution == b && e.a == c && Ta(e.G(), a))
            return e;
        a = a.slice();
        pb(a, this.va);
        (d = this.oa(a, b, c, [jb(a) / b * c, kb(a) / b * c], d)) && (e = new Zs(a,b,c,this.j,d));
        this.S = e;
        this.U = this.f;
        return e
    }
    ;
    function gw(a) {
        this.a = a.source;
        this.Za = Dh();
        this.g = gd();
        this.o = [0, 0];
        this.Sa = void 0 == a.renderBuffer ? 100 : a.renderBuffer;
        this.C = null;
        fw.call(this, {
            attributions: a.attributions,
            canvasFunction: this.Ek.bind(this),
            logo: a.logo,
            projection: a.projection,
            ratio: a.ratio,
            resolutions: a.resolutions,
            state: this.a.getState()
        });
        this.I = null;
        this.v = void 0;
        this.Si(a.style);
        y(this.a, "change", this.Eo, this)
    }
    v(gw, fw);
    k = gw.prototype;
    k.Ek = function(a, b, c, d, e) {
        var f = new Ht(.5 * b / c,a,b,this.a.U,this.Sa);
        this.a.ce(a, b, e);
        var g = !1;
        this.a.ac(a, function(a) {
            var d;
            if (!(d = g)) {
                var e;
                (d = a.bb()) ? e = d.call(a, b) : this.v && (e = this.v(a, b));
                if (e) {
                    var h, p = !1;
                    Array.isArray(e) || (e = [e]);
                    d = 0;
                    for (h = e.length; d < h; ++d)
                        p = du(f, a, e[d], cu(b, c), this.Do, this) || p;
                    d = p
                } else
                    d = !1
            }
            g = d
        }, this);
        Lt(f);
        if (g)
            return null;
        this.o[0] != d[0] || this.o[1] != d[1] ? (this.g.canvas.width = d[0],
        this.g.canvas.height = d[1],
        this.o[0] = d[0],
        this.o[1] = d[1]) : this.g.clearRect(0, 0, d[0], d[1]);
        a = hw(this, lb(a), b, c, d);
        f.Ma(this.g, c, a, 0, {});
        this.C = f;
        return this.g.canvas
    }
    ;
    k.Ha = function(a, b, c, d, e, f) {
        if (this.C) {
            var g = {};
            return this.C.Ha(a, b, 0, d, e, function(a) {
                var b = w(a).toString();
                if (!(b in g))
                    return g[b] = !0,
                    f(a)
            })
        }
    }
    ;
    k.Bo = function() {
        return this.a
    }
    ;
    k.Co = function() {
        return this.I
    }
    ;
    k.bb = function() {
        return this.v
    }
    ;
    function hw(a, b, c, d, e) {
        c = d / c;
        return Mh(a.Za, e[0] / 2, e[1] / 2, c, -c, 0, -b[0], -b[1])
    }
    k.Do = function() {
        this.s()
    }
    ;
    k.Eo = function() {
        uu(this, this.a.getState())
    }
    ;
    k.Si = function(a) {
        this.I = void 0 !== a ? a : ul;
        this.v = a ? sl(this.I) : void 0;
        this.s()
    }
    ;
    function iw(a, b) {
        nu.call(this, a, b);
        this.l = this.i = this.M = null
    }
    v(iw, nu);
    function jw(a, b) {
        b = b.Y();
        return Vi(a.c.f, b)
    }
    iw.prototype.Ha = function(a, b, c, d, e) {
        var f = this.a;
        return f.ia().Ha(a, b.viewState.resolution, b.viewState.rotation, c, b.skippedFeatureUids, function(a) {
            return d.call(e, a, f)
        })
    }
    ;
    iw.prototype.vg = function(a, b) {
        var c = this.c.f
          , d = a.pixelRatio
          , e = a.viewState
          , f = e.center
          , g = e.resolution
          , h = e.rotation
          , l = this.M
          , m = this.Hb
          , n = this.a.ia()
          , p = a.viewHints
          , q = a.extent;
        void 0 !== b.extent && (q = nb(q, b.extent));
        p[0] || p[1] || ib(q) || (b = n.Y(q, g, d, e.projection)) && St(this, b) && (l = b,
        m = jw(this, b),
        this.Hb && a.postRenderFunctions.push(function(a, b) {
            a.isContextLost() || a.deleteTexture(b)
        }
        .bind(null, c, this.Hb)));
        l && (c = this.c.i.j,
        kw(this, c.width, c.height, d, f, g, h, l.G()),
        this.l = null,
        d = this.v,
        Eh(d),
        Kh(d, 1, -1),
        Lh(d, 0, -1),
        this.M = l,
        this.Hb = m,
        Ut(a.attributions, l.i),
        Vt(a, n));
        return !!l
    }
    ;
    function kw(a, b, c, d, e, f, g, h) {
        b *= f;
        c *= f;
        a = a.R;
        Eh(a);
        Kh(a, 2 * d / b, 2 * d / c);
        Jh(a, -g);
        Lh(a, h[0] - e[0], h[1] - e[1]);
        Kh(a, (h[2] - h[0]) / 2, (h[3] - h[1]) / 2);
        Lh(a, 1, 1)
    }
    iw.prototype.ef = function(a, b) {
        return void 0 !== this.Ha(a, b, 0, jf, this)
    }
    ;
    iw.prototype.tg = function(a, b, c, d) {
        if (this.M && this.M.Y())
            if (this.a.ia()instanceof gw) {
                var e = Ih(b.pixelToCoordinateTransform, a.slice());
                if (this.Ha(e, b, 0, jf, this))
                    return c.call(d, this.a, null)
            } else {
                e = [this.M.Y().width, this.M.Y().height];
                if (!this.l) {
                    var f = b.size;
                    b = Dh();
                    Lh(b, -1, -1);
                    Kh(b, 2 / f[0], 2 / f[1]);
                    Lh(b, 0, f[1]);
                    Kh(b, 1, -1);
                    f = Nh(this.R.slice());
                    var g = Dh();
                    Lh(g, 0, e[1]);
                    Kh(g, 1, -1);
                    Kh(g, e[0] / 2, e[1] / 2);
                    Lh(g, 1, 1);
                    Gh(g, f);
                    Gh(g, b);
                    this.l = g
                }
                a = Ih(this.l, a.slice());
                if (!(0 > a[0] || a[0] > e[0] || 0 > a[1] || a[1] > e[1]) && (this.i || (this.i = gd(1, 1)),
                this.i.clearRect(0, 0, 1, 1),
                this.i.drawImage(this.M.Y(), a[0], a[1], 1, 1, 0, 0, 1, 1),
                e = this.i.getImageData(0, 0, 1, 1).data,
                0 < e[3]))
                    return c.call(d, this.a, e)
            }
    }
    ;
    function lw(a) {
        wh.call(this, a ? a : {})
    }
    v(lw, wh);
    lw.prototype.Kd = function(a) {
        var b = null
          , c = a.T();
        "canvas" === c ? b = new Rv(this) : "webgl" === c && (b = new iw(a,this));
        return b
    }
    ;
    function mw(a) {
        Qv.call(this, a);
        this.context = null === this.context ? null : gd();
        this.j = null;
        this.i = [];
        this.l = Ma();
        this.oa = new wa(0,0,0,0);
        this.B = Dh();
        this.S = 0
    }
    v(mw, Qv);
    function nw(a, b) {
        b = b.getState();
        a = a.a.pd();
        return 2 == b || 4 == b || 3 == b && !a
    }
    mw.prototype.xd = function(a, b) {
        var c = a.pixelRatio
          , d = a.size
          , e = a.viewState
          , f = e.projection
          , g = e.resolution;
        e = e.center;
        var h = this.a
          , l = h.ia()
          , m = l.f
          , n = l.Ta(f)
          , p = n.uc(g, this.S)
          , q = n.Ca(p)
          , t = Math.round(g / q) || 1
          , u = a.extent;
        void 0 !== b.extent && (u = nb(u, b.extent));
        if (ib(u))
            return !1;
        var x = nc(n, u, q);
        var B = n.Sc(p);
        var z = n.Ca(p)
          , G = Ka(n.eb(p), n.j);
        B = Va(B[0] + x.ca * G[0] * z, B[1] + x.ea * G[1] * z, B[0] + (x.da + 1) * G[0] * z, B[1] + (x.ha + 1) * G[1] * z, void 0);
        z = l.Oc(c);
        G = {};
        G[p] = {};
        var E = this.Uf(l, f, G), ia = this.l, T = this.oa, R = !1, U, ta;
        for (U = x.ca; U <= x.da; ++U)
            for (ta = x.ea; ta <= x.ha; ++ta) {
                var A = l.Qc(p, U, ta, c, f);
                3 == A.getState() && (h.pd() ? 0 < h.ld() && (R = !0) : ct(A, 2));
                nw(this, A) || (A = at(A));
                nw(this, A) ? 2 == A.getState() && (G[p][A.sa.toString()] = A,
                R || -1 != this.i.indexOf(A) || (R = !0)) : lc(n, A.sa, E, T, ia) || (A = mc(n, A.sa, T, ia)) && E(p + 1, A)
            }
        U = a.viewHints;
        U = U[0] || U[1];
        if (!(this.c && 16 < Date.now() - a.time && U || !R && this.j && Ta(this.j, u) && this.xf == m && t == this.I && (U || q * c / z * t == this.c))) {
            if (U = this.context)
                ta = l.be(p, c, f),
                A = Math.round((x.da - x.ca + 1) * ta[0] / t),
                ta = Math.round((x.ha - x.ea + 1) * ta[1] / t),
                R = U.canvas,
                R.width != A || R.height != ta ? (this.I = t,
                R.width = A,
                R.height = ta) : (U.clearRect(0, 0, A, ta),
                t = this.I);
            this.i.length = 0;
            R = Object.keys(G).map(Number);
            R.sort(fa);
            var ea;
            T = 0;
            for (ea = R.length; T < ea; ++T) {
                U = R[T];
                E = l.be(U, c, f);
                A = n.Ca(U);
                var Ya = A / q;
                var da = z * l.bg(f);
                var Vb = G[U];
                for (var Ac in Vb) {
                    A = Vb[Ac];
                    ta = n.Fa(A.sa, ia);
                    U = (ta[0] - B[0]) / q * z / t;
                    ta = (B[3] - ta[3]) / q * z / t;
                    var ge = E[0] * Ya / t;
                    var he = E[1] * Ya / t;
                    this.Vf(A, a, b, U, ta, ge, he, da);
                    this.i.push(A)
                }
            }
            this.xf = m;
            this.c = q * c / z * t;
            this.j = B
        }
        b = this.c / g;
        b = Mh(this.B, c * d[0] / 2, c * d[1] / 2, b, b, 0, (this.j[0] - e[0]) / this.c * c, (e[1] - this.j[3]) / this.c * c);
        Mh(this.o, c * d[0] / 2 - b[4], c * d[1] / 2 - b[5], c / g, -c / g, 0, -e[0], -e[1]);
        Wt(a.usedTiles, l, p, x);
        Xt(a, l, n, c, f, u, p, h.ld());
        Tt(a, l);
        Vt(a, l);
        return 0 < this.i.length
    }
    ;
    mw.prototype.Vf = function(a, b, c, d, e, f, g, h) {
        this.a.ia().gg(b.viewState.projection) || this.context.clearRect(d, e, f, g);
        (a = a.Y(this.a)) && this.context.drawImage(a, h, h, a.width - 2 * h, a.height - 2 * h, d, e, f, g)
    }
    ;
    mw.prototype.Y = function() {
        var a = this.context;
        return a ? a.canvas : null
    }
    ;
    mw.prototype.D = function() {
        return this.B
    }
    ;
    function ow() {
        this.b = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"
    }
    v(ow, oi);
    var pw = new ow;
    function qw() {
        this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"
    }
    v(qw, pi);
    var rw = new qw;
    function sw(a, b) {
        this.f = a.getUniformLocation(b, "e");
        this.c = a.getUniformLocation(b, "d");
        this.b = a.getAttribLocation(b, "b");
        this.a = a.getAttribLocation(b, "c")
    }
    ;function tw(a, b) {
        nu.call(this, a, b);
        this.I = pw;
        this.ga = rw;
        this.i = null;
        this.C = new Fi([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
        this.D = this.l = null;
        this.o = -1;
        this.S = [0, 0]
    }
    v(tw, nu);
    k = tw.prototype;
    k.ka = function() {
        Ii(this.c.i, this.C);
        nu.prototype.ka.call(this)
    }
    ;
    k.Uf = function(a, b, c) {
        var d = this.c;
        return function(e, f) {
            return Qt(a, b, e, f, function(a) {
                var b = d.a.b.hasOwnProperty(a.fb());
                b && (c[e] || (c[e] = {}),
                c[e][a.sa.toString()] = a);
                return b
            })
        }
    }
    ;
    k.ug = function() {
        nu.prototype.ug.call(this);
        this.i = null
    }
    ;
    k.vg = function(a, b, c) {
        var d = this.c
          , e = c.b
          , f = a.viewState
          , g = f.projection
          , h = this.a
          , l = h.ia()
          , m = l.Ta(g)
          , n = m.uc(f.resolution)
          , p = m.Ca(n)
          , q = l.be(n, a.pixelRatio, g)
          , t = q[0] / Ka(m.eb(n), this.S)[0]
          , u = p / t
          , x = l.Oc(t) * l.bg(g)
          , B = f.center
          , z = a.extent
          , G = nc(m, z, p);
        if (this.l && ya(this.l, G) && this.o == l.f)
            u = this.D;
        else {
            var E = [G.da - G.ca + 1, G.ha - G.ea + 1]
              , ia = Ca(Math.max(E[0] * q[0], E[1] * q[1]));
            E = u * ia;
            var T = m.Sc(n)
              , R = T[0] + G.ca * q[0] * u;
            u = T[1] + G.ea * q[1] * u;
            u = [R, u, R + E, u + E];
            ou(this, a, ia);
            e.viewport(0, 0, ia, ia);
            e.clearColor(0, 0, 0, 0);
            e.clear(16384);
            e.disable(3042);
            ia = Ji(c, this.I, this.ga);
            c.Tc(ia);
            this.i || (this.i = new sw(e,ia));
            yi(c, 34962, this.C);
            e.enableVertexAttribArray(this.i.b);
            e.vertexAttribPointer(this.i.b, 2, 5126, !1, 16, 0);
            e.enableVertexAttribArray(this.i.a);
            e.vertexAttribPointer(this.i.a, 2, 5126, !1, 16, 8);
            e.uniform1i(this.i.f, 0);
            c = {};
            c[n] = {};
            var U = this.Uf(l, g, c)
              , ta = h.pd();
            ia = !0;
            R = Ma();
            var A = new wa(0,0,0,0), ea, Ya;
            for (ea = G.ca; ea <= G.da; ++ea)
                for (Ya = G.ea; Ya <= G.ha; ++Ya) {
                    T = l.Qc(n, ea, Ya, t, g);
                    if (void 0 !== b.extent) {
                        var da = m.Fa(T.sa, R);
                        if (!ob(da, b.extent))
                            continue
                    }
                    da = T.getState();
                    (da = 2 == da || 4 == da || 3 == da && !ta) || (T = at(T));
                    da = T.getState();
                    if (2 == da) {
                        if (d.a.b.hasOwnProperty(T.fb())) {
                            c[n][T.sa.toString()] = T;
                            continue
                        }
                    } else if (4 == da || 3 == da && !ta)
                        continue;
                    ia = !1;
                    da = lc(m, T.sa, U, A, R);
                    da || (T = mc(m, T.sa, A, R)) && U(n + 1, T)
                }
            b = Object.keys(c).map(Number);
            b.sort(fa);
            U = new Float32Array(4);
            var Vb;
            ta = 0;
            for (A = b.length; ta < A; ++ta)
                for (Vb in ea = c[b[ta]],
                ea)
                    T = ea[Vb],
                    da = m.Fa(T.sa, R),
                    U[0] = 2 * (da[2] - da[0]) / E,
                    U[1] = 2 * (da[3] - da[1]) / E,
                    U[2] = 2 * (da[0] - u[0]) / E - 1,
                    U[3] = 2 * (da[1] - u[1]) / E - 1,
                    e.uniform4fv(this.i.c, U),
                    Bk(d, T, q, x * t),
                    e.drawArrays(5, 0, 4);
            ia ? (this.l = G,
            this.D = u,
            this.o = l.f) : (this.D = this.l = null,
            this.o = -1,
            a.animate = !0)
        }
        Wt(a.usedTiles, l, n, G);
        var Ac = d.j;
        Xt(a, l, m, t, g, z, n, h.ld(), function(a) {
            2 != a.getState() || d.a.b.hasOwnProperty(a.fb()) || a.fb()in Ac.a || Ac.i([a, pc(m, a.sa), m.Ca(a.sa[0]), q, x * t])
        }, this);
        Tt(a, l);
        Vt(a, l);
        e = this.v;
        Eh(e);
        Lh(e, (Math.round(B[0] / p) * p - u[0]) / (u[2] - u[0]), (Math.round(B[1] / p) * p - u[1]) / (u[3] - u[1]));
        f.rotation && Jh(e, f.rotation);
        Kh(e, a.size[0] * f.resolution / (u[2] - u[0]), a.size[1] * f.resolution / (u[3] - u[1]));
        Lh(e, -.5, -.5);
        return !0
    }
    ;
    k.tg = function(a, b, c, d) {
        if (this.g) {
            a = Ih(this.v, [a[0] / b.size[0], (b.size[1] - a[1]) / b.size[1]].slice());
            a = [a[0] * this.j, a[1] * this.j];
            b = this.c.i.b;
            b.bindFramebuffer(b.FRAMEBUFFER, this.g);
            var e = new Uint8Array(4);
            b.readPixels(a[0], a[1], 1, 1, b.RGBA, b.UNSIGNED_BYTE, e);
            if (0 < e[3])
                return c.call(d, this.a, e)
        }
    }
    ;
    function uw(a) {
        a = a ? a : {};
        var b = rb({}, a);
        delete b.preload;
        delete b.useInterimTilesOnError;
        wh.call(this, b);
        this.Ji(void 0 !== a.preload ? a.preload : 0);
        this.Ki(void 0 !== a.useInterimTilesOnError ? a.useInterimTilesOnError : !0)
    }
    v(uw, wh);
    k = uw.prototype;
    k.Kd = function(a) {
        var b = null
          , c = a.T();
        "canvas" === c ? b = new mw(this) : "webgl" === c && (b = new tw(a,this));
        return b
    }
    ;
    k.ld = function() {
        return this.get("preload")
    }
    ;
    k.Ji = function(a) {
        this.set("preload", a)
    }
    ;
    k.pd = function() {
        return this.get("useInterimTilesOnError")
    }
    ;
    k.Ki = function(a) {
        this.set("useInterimTilesOnError", a)
    }
    ;
    function vw(a) {
        this.context = null;
        mw.call(this, a);
        this.C = !1;
        this.R = Dh();
        this.S = "vector" == a.g ? 1 : 0
    }
    v(vw, mw);
    var ww = {
        image: ["Polygon", "Circle", "LineString", "Image", "Text"],
        hybrid: ["Polygon", "LineString"]
    }
      , xw = {
        image: ["Default"],
        hybrid: ["Image", "Text", "Default"],
        vector: li
    };
    k = vw.prototype;
    k.xd = function(a, b) {
        var c = this.a
          , d = c.f;
        this.ga != d && (this.i.length = 0,
        c = c.g,
        this.context || "vector" == c || (this.context = gd()),
        this.context && "vector" == c && (this.context = null));
        this.ga = d;
        return mw.prototype.xd.apply(this, arguments)
    }
    ;
    k.Vf = function(a, b) {
        var c = a
          , d = this.a
          , e = b.pixelRatio
          , f = b.viewState.projection
          , g = d.f
          , h = d.get(hu) || null
          , l = yw(c, d);
        if (l.Sd || l.xf != g || l.Sg != h) {
            var m = d.ia()
              , n = m.tileGrid
              , p = m.Ta(f)
              , q = p.Ca(c.sa[0]);
            p = p.Fa(c.v);
            for (var t = 0, u = c.f.length; t < u; ++t) {
                var x = c.c[c.f[t]];
                l.Sd = !1;
                var B = x.f, z = n.Ca(x.sa[0]), G = n.Fa(x.sa), E = nb(p, G), ia;
                if ("tile-pixels" == B.b) {
                    var T = ia = zw(m, x);
                    z = Mh(this.R, 0, 0, 1 / z * T, -1 / z * T, 0, -G[0], -G[3]);
                    E = Ih(z, [E[0], E[3]]).concat(Ih(z, [E[2], E[1]]))
                } else if (ia = q,
                !$b(f, B)) {
                    var R = !0;
                    x.qg(f)
                }
                l.Sd = !1;
                E = new Ht(0,E,ia,m.o,d.c);
                ia = cu(ia, e);
                z = x.c;
                h && h !== l.Sg && z.sort(h);
                G = 0;
                for (T = z.length; G < T; ++G) {
                    var U = z[G];
                    R && U.V().wb(B, f);
                    var ta = void 0
                      , A = U.bb();
                    A ? ta = A.call(U, q) : (A = d.bb()) && (ta = A(U, q));
                    if (ta) {
                        Array.isArray(ta) || (ta = [ta]);
                        A = ia;
                        var ea = E;
                        if (ta) {
                            var Ya = !1;
                            if (Array.isArray(ta))
                                for (var da = 0, Vb = ta.length; da < Vb; ++da)
                                    Ya = du(ea, U, ta[da], A, this.Pi, this) || Ya;
                            else
                                Ya = du(ea, U, ta, A, this.Pi, this) || Ya;
                            U = Ya
                        } else
                            U = !1;
                        this.C = this.C || U;
                        l.Sd = l.Sd || U
                    }
                }
                Lt(E);
                B = c.sa.toString();
                x.j[w(d) + "," + B] = E
            }
            l.xf = g;
            l.Sg = h
        }
        if (this.context) {
            n = b;
            d = this.a;
            f = yw(c, d);
            g = d.f;
            if ((e = ww[d.g]) && f.Tg !== g)
                for (f.Tg = g,
                q = c.v,
                p = q[0],
                f = n.pixelRatio,
                g = d.ia(),
                h = g.tileGrid,
                R = g.Ta(n.viewState.projection),
                l = R.Ca(p),
                m = Aw(c, d),
                n = g.be(p, f, n.viewState.projection),
                m.canvas.width = n[0],
                m.canvas.height = n[1],
                n = R.Fa(q),
                q = 0,
                R = c.f.length; q < R; ++q)
                    p = c.c[c.f[q]],
                    t = zw(g, p),
                    B = p.sa,
                    x = f / l,
                    u = Eh(this.R),
                    "tile-pixels" == p.f.b ? (x = h.Fa(B, this.l),
                    B = h.Ca(B[0]),
                    E = f / t * B / l,
                    Kh(u, E, E),
                    Lh(u, Math.round((x[0] - n[0]) / B * t), Math.round((n[3] - x[3]) / B * t))) : (Kh(u, x, -x),
                    Lh(u, -n[0], -n[3])),
                    Bw(p, d, c.sa.toString()).Ma(m, f, u, 0, {}, e, !0);
            mw.prototype.Vf.apply(this, arguments)
        }
    }
    ;
    k.Ha = function(a, b, c, d, e) {
        var f = b.viewState.resolution
          , g = b.viewState.rotation;
        c = void 0 == c ? 0 : c;
        var h = this.a
          , l = {}
          , m = this.i
          , n = h.ia();
        b = n.Ta(b.viewState.projection);
        var p = n.tileGrid, q;
        var t = 0;
        for (q = m.length; t < q; ++t) {
            var u = m[t];
            var x = u.sa;
            var B = b.Fa(x, this.l);
            var z = Oa(B, c * f, z);
            if (Ra(z, a)) {
                B = 0;
                for (var G = u.f.length; B < G; ++B) {
                    var E = u.c[u.f[B]];
                    if ("tile-pixels" === E.f.b) {
                        var ia = E.sa;
                        f = p.Fa(ia, this.l);
                        var T = gb(f);
                        f = zw(n, E);
                        ia = p.Ca(ia[0]);
                        var R = ia / f;
                        T = [(a[0] - T[0]) / R, (T[1] - a[1]) / R];
                        f *= b.Ca(x[0]) / ia
                    } else
                        T = a;
                    E = Bw(E, h, u.sa.toString());
                    var U = U || E.Ha(T, f, g, c, {}, function(a) {
                        var b = w(a).toString();
                        if (!(b in l))
                            return l[b] = !0,
                            d.call(e, a, h)
                    })
                }
            }
        }
        return U
    }
    ;
    function zw(a, b) {
        return jb(b.G()) / Ka(a.tileGrid.eb(b.sa[0]))[0]
    }
    k.Pi = function() {
        Rt(this)
    }
    ;
    k.qf = function(a, b, c) {
        var d = this.a
          , e = d.ia()
          , f = d.g
          , g = xw[f]
          , h = b.pixelRatio
          , l = b.viewState.rotation
          , m = b.size
          , n = Math.round(h * m[0] / 2);
        m = Math.round(h * m[1] / 2);
        for (var p = this.i, q = e.tileGrid, t = e.Ta(b.viewState.projection), u = [], x = [], B = p.length - 1; 0 <= B; --B) {
            var z = p[B];
            if (5 != z.getState())
                for (var G = z.sa, E = t.Fa(G)[0] - t.Fa(z.v)[0], ia = 0, T = z.f.length; ia < T; ++ia) {
                    var R = z.c[z.f[ia]], U = zw(e, R), ta = Bw(R, d, G.toString()), A;
                    if (!(A = "vector" == f))
                        a: {
                            A = void 0;
                            for (A in ta.a)
                                for (var ea = ta.a[A], Ya = 0, da = g.length; Ya < da; ++Ya)
                                    if (g[Ya]in ea) {
                                        A = !0;
                                        break a
                                    }
                            A = !1
                        }
                    if (A) {
                        A = R.sa[0];
                        ea = q.Ca(A);
                        Ya = R;
                        R = b;
                        if ("tile-pixels" == Ya.f.b) {
                            da = this.a.ia();
                            var Vb = da.tileGrid
                              , Ac = Ya.sa;
                            Ya = Vb.Ca(Ac[0]) / zw(da, Ya);
                            da = R.viewState;
                            var ge = R.pixelRatio
                              , he = da.resolution / ge;
                            Ac = Vb.Fa(Ac, this.l);
                            Vb = da.center;
                            Ac = gb(Ac);
                            R = R.size;
                            R = Mh(this.R, Math.round(ge * R[0] / 2), Math.round(ge * R[1] / 2), Ya / he, Ya / he, da.rotation, (Ac[0] - Vb[0]) / Ya, (Vb[1] - Ac[1]) / Ya)
                        } else
                            R = au(this, R, 0);
                        Lh(R, E * U / ea, 0);
                        U = Nt(ta, R);
                        a.save();
                        a.globalAlpha = c.opacity;
                        Xh(a, -l, n, m);
                        ea = 0;
                        for (Ya = u.length; ea < Ya; ++ea)
                            da = u[ea],
                            A < x[ea] && (a.beginPath(),
                            a.moveTo(U[0], U[1]),
                            a.lineTo(U[2], U[3]),
                            a.lineTo(U[4], U[5]),
                            a.lineTo(U[6], U[7]),
                            a.moveTo(da[6], da[7]),
                            a.lineTo(da[4], da[5]),
                            a.lineTo(da[2], da[3]),
                            a.lineTo(da[0], da[1]),
                            a.clip());
                        ta.Ma(a, h, R, l, {}, g);
                        a.restore();
                        u.push(U);
                        x.push(A)
                    }
                }
        }
        mw.prototype.qf.apply(this, arguments)
    }
    ;
    function Cw(a) {
        a = a ? a : {};
        var b = rb({}, a);
        delete b.preload;
        delete b.useInterimTilesOnError;
        S.call(this, b);
        this.Li(a.preload ? a.preload : 0);
        this.Mi(a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
        va(void 0 == a.renderMode || "image" == a.renderMode || "hybrid" == a.renderMode || "vector" == a.renderMode, 28);
        this.g = a.renderMode || "hybrid"
    }
    v(Cw, S);
    k = Cw.prototype;
    k.Kd = function(a) {
        var b = null;
        "canvas" === a.T() && (b = new vw(this));
        return b
    }
    ;
    k.ld = function() {
        return this.get("preload")
    }
    ;
    k.pd = function() {
        return this.get("useInterimTilesOnError")
    }
    ;
    k.Li = function(a) {
        this.set("preload", a)
    }
    ;
    k.Mi = function(a) {
        this.set("useInterimTilesOnError", a)
    }
    ;
    function Dw(a, b, c, d) {
        function e() {
            delete window[g];
            f.parentNode.removeChild(f)
        }
        var f = document.createElement("script")
          , g = "olc_" + w(b);
        f.async = !0;
        f.src = a + (-1 == a.indexOf("?") ? "?" : "&") + (d || "callback") + "=" + g;
        var h = setTimeout(function() {
            e();
            c && c()
        }, 1E4);
        window[g] = function(a) {
            clearTimeout(h);
            e();
            b(a)
        }
        ;
        document.getElementsByTagName("head")[0].appendChild(f)
    }
    ;function Ew(a, b, c, d, e, f, g, h, l, m, n) {
        $s.call(this, e, 0);
        this.D = void 0 !== n ? n : !1;
        this.R = g;
        this.u = h;
        this.v = null;
        this.c = b;
        this.j = d;
        this.l = f ? f : e;
        this.f = [];
        this.Dd = null;
        this.g = 0;
        f = d.Fa(this.l);
        h = this.j.G();
        e = this.c.G();
        f = h ? nb(f, h) : f;
        if (hb(f))
            if ((h = a.G()) && (e ? e = nb(e, h) : e = h),
            d = Sv(a, c, lb(f), d.Ca(this.l[0])),
            !isFinite(d) || 0 >= d)
                this.state = 4;
            else if (this.o = new Vv(a,c,f,e,d * (void 0 !== m ? m : .5)),
            this.o.c.length)
                if (this.g = b.uc(d),
                c = Xv(this.o),
                e && (a.f ? (c[1] = Aa(c[1], e[1], e[3]),
                c[3] = Aa(c[3], e[1], e[3])) : c = nb(c, e)),
                hb(c)) {
                    a = kc(b, c, this.g);
                    for (b = a.ca; b <= a.da; b++)
                        for (c = a.ea; c <= a.ha; c++)
                            (m = l(this.g, b, c, g)) && this.f.push(m);
                    this.f.length || (this.state = 4)
                } else
                    this.state = 4;
            else
                this.state = 4;
        else
            this.state = 4
    }
    v(Ew, $s);
    Ew.prototype.ka = function() {
        1 == this.state && (this.Dd.forEach(zc),
        this.Dd = null);
        $s.prototype.ka.call(this)
    }
    ;
    Ew.prototype.Y = function() {
        return this.v
    }
    ;
    Ew.prototype.je = function() {
        var a = [];
        this.f.forEach(function(b) {
            b && 2 == b.getState() && a.push({
                extent: this.c.Fa(b.sa),
                image: b.Y()
            })
        }, this);
        this.f.length = 0;
        if (a.length) {
            var b = this.l[0]
              , c = this.j.eb(b)
              , d = "number" === typeof c ? c : c[0];
            c = "number" === typeof c ? c : c[1];
            b = this.j.Ca(b);
            var e = this.c.Ca(this.g)
              , f = this.j.Fa(this.l);
            this.v = Uv(d, c, this.R, e, this.c.G(), b, f, this.o, a, this.u, this.D);
            this.state = 2
        } else
            this.state = 3;
        this.s()
    }
    ;
    Ew.prototype.load = function() {
        if (0 == this.state) {
            this.state = 1;
            this.s();
            var a = 0;
            this.Dd = [];
            this.f.forEach(function(b) {
                var c = b.getState();
                if (0 == c || 1 == c) {
                    a++;
                    var d = y(b, "change", function() {
                        var c = b.getState();
                        if (2 == c || 3 == c || 4 == c)
                            zc(d),
                            a--,
                            a || (this.Dd.forEach(zc),
                            this.Dd = null,
                            this.je())
                    }, this);
                    this.Dd.push(d)
                }
            }, this);
            this.f.forEach(function(a) {
                0 == a.getState() && a.load()
            });
            a || setTimeout(this.je.bind(this), 0)
        }
    }
    ;
    function Fw(a, b) {
        var c = /\{z\}/g
          , d = /\{x\}/g
          , e = /\{y\}/g
          , f = /\{-y\}/g;
        return function(g) {
            if (g)
                return a.replace(c, g[0].toString()).replace(d, g[1].toString()).replace(e, function() {
                    return (-g[2] - 1).toString()
                }).replace(f, function() {
                    var a = b.a ? b.a[g[0]] : null;
                    va(a, 55);
                    return (a.ha - a.ea + 1 + g[2]).toString()
                })
        }
    }
    function Gw(a, b) {
        for (var c = a.length, d = Array(c), e = 0; e < c; ++e)
            d[e] = Fw(a[e], b);
        return Hw(d)
    }
    function Hw(a) {
        return 1 === a.length ? a[0] : function(b, c, d) {
            if (b)
                return a[Ga((b[1] << b[0]) + b[2], a.length)](b, c, d)
        }
    }
    function Iw() {}
    function Jw(a) {
        var b = []
          , c = /\{([a-z])-([a-z])\}/.exec(a);
        if (c) {
            var d = c[2].charCodeAt(0), e;
            for (e = c[1].charCodeAt(0); e <= d; ++e)
                b.push(a.replace(c[0], String.fromCharCode(e)));
            return b
        }
        if (c = c = /\{(\d+)-(\d+)\}/.exec(a)) {
            d = parseInt(c[2], 10);
            for (e = parseInt(c[1], 10); e <= d; e++)
                b.push(a.replace(c[0], e.toString()));
            return b
        }
        b.push(a);
        return b
    }
    ;function Kw(a) {
        zk.call(this);
        this.highWaterMark = void 0 !== a ? a : 2048
    }
    v(Kw, zk);
    function Lw(a) {
        return a.c > a.highWaterMark
    }
    Kw.prototype.jd = function(a) {
        for (var b, c; Lw(this); ) {
            b = this.a.bd;
            c = b.sa[0].toString();
            var d;
            if (d = c in a)
                b = b.sa,
                d = xa(a[c], b[1], b[2]);
            if (d)
                break;
            else
                Kc(this.pop())
        }
    }
    ;
    function Mw(a) {
        su.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state,
            wrapX: a.wrapX
        });
        this.va = void 0 !== a.opaque ? a.opaque : !1;
        this.Za = void 0 !== a.tilePixelRatio ? a.tilePixelRatio : 1;
        this.tileGrid = void 0 !== a.tileGrid ? a.tileGrid : null;
        this.a = new Kw(a.cacheSize);
        this.l = [0, 0];
        this.vc = ""
    }
    v(Mw, su);
    k = Mw.prototype;
    k.Ui = function() {
        return Lw(this.a)
    }
    ;
    k.jd = function(a, b) {
        (a = this.ae(a)) && a.jd(b)
    }
    ;
    function Qt(a, b, c, d, e) {
        b = a.ae(b);
        if (!b)
            return !1;
        for (var f = !0, g, h, l = d.ca; l <= d.da; ++l)
            for (var m = d.ea; m <= d.ha; ++m)
                g = a.Rb(c, l, m),
                h = !1,
                b.b.hasOwnProperty(g) && (g = b.get(g),
                (h = 2 === g.getState()) && (h = !1 !== e(g))),
                h || (f = !1);
        return f
    }
    k.bg = function() {
        return 0
    }
    ;
    function Nw(a, b) {
        a.vc !== b && (a.vc = b,
        a.s())
    }
    k.Rb = function(a, b, c) {
        return a + "/" + b + "/" + c
    }
    ;
    k.gg = function() {
        return this.va
    }
    ;
    k.cb = function() {
        return this.tileGrid
    }
    ;
    k.Ta = function(a) {
        return this.tileGrid ? this.tileGrid : qc(a)
    }
    ;
    k.ae = function(a) {
        var b = this.c;
        return b && !$b(b, a) ? null : this.a
    }
    ;
    k.Oc = function() {
        return this.Za
    }
    ;
    k.be = function(a, b, c) {
        c = this.Ta(c);
        b = this.Oc(b);
        a = Ka(c.eb(a), this.l);
        return 1 == b ? a : Ja(a, b, this.l)
    }
    ;
    function Ow(a, b, c) {
        var d = void 0 !== c ? c : a.c;
        c = a.Ta(d);
        if (a.u && d.c) {
            var e = b;
            b = e[0];
            a = pc(c, e);
            d = uc(d);
            Ra(d, a) ? b = e : (e = jb(d),
            a[0] += e * Math.ceil((d[0] - a[0]) / e),
            b = c.kg(a, b))
        }
        e = b[0];
        d = b[1];
        a = b[2];
        if (c.minZoom > e || e > c.maxZoom)
            c = !1;
        else {
            var f = c.G();
            c = (c = f ? kc(c, f, e) : c.a ? c.a[e] : null) ? xa(c, d, a) : !0
        }
        return c ? b : null
    }
    k.ra = function() {
        this.a.clear();
        this.s()
    }
    ;
    k.Zg = ra;
    function Pw(a, b) {
        Lc.call(this, a);
        this.tile = b
    }
    v(Pw, Lc);
    function Qw(a) {
        Mw.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tilePixelRatio: a.tilePixelRatio,
            wrapX: a.wrapX
        });
        this.tileLoadFunction = a.tileLoadFunction;
        this.tileUrlFunction = this.Hc ? this.Hc.bind(this) : Iw;
        this.urls = null;
        a.urls ? this.ib(a.urls) : a.url && this.mb(a.url);
        a.tileUrlFunction && this.hb(a.tileUrlFunction)
    }
    v(Qw, Mw);
    k = Qw.prototype;
    k.sb = function() {
        return this.tileLoadFunction
    }
    ;
    k.tb = function() {
        return this.tileUrlFunction
    }
    ;
    k.ub = function() {
        return this.urls
    }
    ;
    k.Vi = function(a) {
        a = a.target;
        switch (a.getState()) {
        case 1:
            this.b(new Pw("tileloadstart",a));
            break;
        case 2:
            this.b(new Pw("tileloadend",a));
            break;
        case 3:
            this.b(new Pw("tileloaderror",a))
        }
    }
    ;
    k.zb = function(a) {
        this.a.clear();
        this.tileLoadFunction = a;
        this.s()
    }
    ;
    k.hb = function(a, b) {
        this.tileUrlFunction = a;
        "undefined" !== typeof b ? Nw(this, b) : this.s()
    }
    ;
    k.mb = function(a) {
        var b = this.urls = Jw(a);
        this.hb(this.Hc ? this.Hc.bind(this) : Gw(b, this.tileGrid), a)
    }
    ;
    k.ib = function(a) {
        this.urls = a;
        var b = a.join("\n");
        this.hb(this.Hc ? this.Hc.bind(this) : Gw(a, this.tileGrid), b)
    }
    ;
    k.Zg = function(a, b, c) {
        a = this.Rb(a, b, c);
        this.a.b.hasOwnProperty(a) && this.a.get(a)
    }
    ;
    function X(a) {
        Qw.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : Rw,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: a.wrapX
        });
        this.crossOrigin = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.tileClass = a.tileClass ? a.tileClass : dt;
        this.g = {};
        this.v = {};
        this.Sa = a.reprojectionErrorThreshold;
        this.I = !1
    }
    v(X, Qw);
    k = X.prototype;
    k.Ui = function() {
        if (Lw(this.a))
            return !0;
        for (var a in this.g)
            if (Lw(this.g[a]))
                return !0;
        return !1
    }
    ;
    k.jd = function(a, b) {
        a = this.ae(a);
        this.a.jd(this.a == a ? b : {});
        for (var c in this.g) {
            var d = this.g[c];
            d.jd(d == a ? b : {})
        }
    }
    ;
    k.bg = function(a) {
        return this.c && a && !$b(this.c, a) ? 0 : this.cg()
    }
    ;
    k.cg = function() {
        return 0
    }
    ;
    k.gg = function(a) {
        return this.c && a && !$b(this.c, a) ? !1 : Qw.prototype.gg.call(this, a)
    }
    ;
    k.Ta = function(a) {
        var b = this.c;
        return !this.tileGrid || b && !$b(b, a) ? (b = w(a).toString(),
        b in this.v || (this.v[b] = qc(a)),
        this.v[b]) : this.tileGrid
    }
    ;
    k.ae = function(a) {
        var b = this.c;
        if (!b || $b(b, a))
            return this.a;
        a = w(a).toString();
        a in this.g || (this.g[a] = new Kw(this.a.highWaterMark));
        return this.g[a]
    }
    ;
    function Sw(a, b, c, d, e, f, g) {
        b = [b, c, d];
        e = (c = Ow(a, b, f)) ? a.tileUrlFunction(c, e, f) : void 0;
        e = new a.tileClass(b,void 0 !== e ? 0 : 4,void 0 !== e ? e : "",a.crossOrigin,a.tileLoadFunction);
        e.key = g;
        y(e, "change", a.Vi, a);
        return e
    }
    k.Qc = function(a, b, c, d, e) {
        if (this.c && e && !$b(this.c, e)) {
            var f = this.ae(e);
            c = [a, b, c];
            var g;
            a = this.Rb.apply(this, c);
            f.b.hasOwnProperty(a) && (g = f.get(a));
            b = this.vc;
            if (g && g.key == b)
                return g;
            var h = this.c
              , l = this.Ta(h)
              , m = this.Ta(e)
              , n = Ow(this, c, e);
            d = new Ew(h,l,e,m,c,n,this.Oc(d),this.cg(),function(a, b, c, d) {
                return Tw(this, a, b, c, d, h)
            }
            .bind(this),this.Sa,this.I);
            d.key = b;
            g ? (d.a = g,
            bt(d),
            f.replace(a, d)) : f.set(a, d);
            return d
        }
        return Tw(this, a, b, c, d, e)
    }
    ;
    function Tw(a, b, c, d, e, f) {
        var g = a.Rb(b, c, d)
          , h = a.vc;
        if (a.a.b.hasOwnProperty(g)) {
            var l = a.a.get(g);
            if (l.key != h) {
                var m = l;
                l = Sw(a, b, c, d, e, f, h);
                0 == m.getState() ? l.a = m.a : l.a = m;
                bt(l);
                a.a.replace(g, l)
            }
        } else
            l = Sw(a, b, c, d, e, f, h),
            a.a.set(g, l);
        return l
    }
    k.Nb = function(a) {
        if (this.I != a) {
            this.I = a;
            for (var b in this.g)
                this.g[b].clear();
            this.s()
        }
    }
    ;
    k.Ob = function(a, b) {
        if (a = Qb(a))
            a = w(a).toString(),
            a in this.v || (this.v[a] = b)
    }
    ;
    function Rw(a, b) {
        a.Y().src = b
    }
    ;function Uw(a) {
        this.i = void 0 !== a.hidpi ? a.hidpi : !1;
        X.call(this, {
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            opaque: !0,
            projection: Qb("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: this.i ? 2 : 1,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.S = void 0 !== a.culture ? a.culture : "en-us";
        this.C = void 0 !== a.maxZoom ? a.maxZoom : -1;
        this.o = a.key;
        this.B = a.imagerySet;
        Dw("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + this.B + "?uriScheme=https&include=ImageryProviders&key=" + this.o, this.oa.bind(this), void 0, "jsonp")
    }
    v(Uw, X);
    var Vw = new vc({
        html: '<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'
    });
    Uw.prototype.U = function() {
        return this.o
    }
    ;
    Uw.prototype.ga = function() {
        return this.B
    }
    ;
    Uw.prototype.oa = function(a) {
        if (200 != a.statusCode || "OK" != a.statusDescription || "ValidCredentials" != a.authenticationResultCode || 1 != a.resourceSets.length || 1 != a.resourceSets[0].resources.length)
            uu(this, "error");
        else {
            var b = a.brandLogoUri;
            -1 == b.indexOf("https") && (b = b.replace("http", "https"));
            var c = a.resourceSets[0].resources[0]
              , d = -1 == this.C ? c.zoomMax : this.C;
            a = uc(this.c);
            var e = sc({
                extent: a,
                minZoom: c.zoomMin,
                maxZoom: d,
                tileSize: (c.imageWidth == c.imageHeight ? c.imageWidth : [c.imageWidth, c.imageHeight]) / (this.i ? 2 : 1)
            });
            this.tileGrid = e;
            var f = this.S
              , g = this.i;
            this.tileUrlFunction = Hw(c.imageUrlSubdomains.map(function(a) {
                var b = [0, 0, 0]
                  , d = c.imageUrl.replace("{subdomain}", a).replace("{culture}", f);
                return function(a) {
                    if (a)
                        return fc(a[0], a[1], -a[2] - 1, b),
                        a = d,
                        g && (a += "&dpi=d1&device=mobile"),
                        a.replace("{quadkey}", gc(b))
                }
            }));
            if (c.imageryProviders) {
                var h = Rb(Qb("EPSG:4326"), this.c);
                a = c.imageryProviders.map(function(a) {
                    var b = a.attribution
                      , c = {};
                    a.coverageAreas.forEach(function(a) {
                        var b = a.zoomMin
                          , f = Math.min(a.zoomMax, d);
                        a = a.bbox;
                        a = qb([a[1], a[0], a[3], a[2]], h);
                        var g;
                        for (g = b; g <= f; ++g) {
                            var l = g.toString();
                            b = kc(e, a, g);
                            l in c ? c[l].push(b) : c[l] = [b]
                        }
                    });
                    return new vc({
                        html: b,
                        tileRanges: c
                    })
                });
                a.push(Vw);
                this.wa(a)
            }
            this.D = b;
            uu(this, "ready")
        }
    }
    ;
    function Ww(a) {
        a = a || {};
        var b = void 0 !== a.projection ? a.projection : "EPSG:3857"
          , c = void 0 !== a.tileGrid ? a.tileGrid : sc({
            extent: uc(b),
            maxZoom: a.maxZoom,
            minZoom: a.minZoom,
            tileSize: a.tileSize
        });
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: a.opaque,
            projection: b,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: c,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        })
    }
    v(Ww, X);
    function Xw(a) {
        this.B = a.account;
        this.C = a.map || "";
        this.i = a.config || {};
        this.o = {};
        Ww.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 18,
            minZoom: a.minZoom,
            projection: a.projection,
            state: "loading",
            wrapX: a.wrapX
        });
        Yw(this)
    }
    v(Xw, Ww);
    k = Xw.prototype;
    k.Vk = function() {
        return this.i
    }
    ;
    k.Hq = function(a) {
        rb(this.i, a);
        Yw(this)
    }
    ;
    k.kq = function(a) {
        this.i = a || {};
        Yw(this)
    }
    ;
    function Yw(a) {
        var b = JSON.stringify(a.i);
        if (a.o[b])
            Zw(a, a.o[b]);
        else {
            var c = "https://" + a.B + ".cartodb.com/api/v1/map";
            a.C && (c += "/named/" + a.C);
            var d = new XMLHttpRequest;
            d.addEventListener("load", a.Pl.bind(a, b));
            d.addEventListener("error", a.Ol.bind(a));
            d.open("POST", c);
            d.setRequestHeader("Content-type", "application/json");
            d.send(JSON.stringify(a.i))
        }
    }
    k.Pl = function(a, b) {
        b = b.target;
        if (!b.status || 200 <= b.status && 300 > b.status) {
            try {
                var c = JSON.parse(b.responseText)
            } catch (d) {
                uu(this, "error");
                return
            }
            Zw(this, c);
            this.o[a] = c;
            uu(this, "ready")
        } else
            uu(this, "error")
    }
    ;
    k.Ol = function() {
        uu(this, "error")
    }
    ;
    function Zw(a, b) {
        a.mb("https://" + b.cdn_url.https + "/" + a.B + "/api/v1/map/" + b.layergroupid + "/{z}/{x}/{y}.png")
    }
    ;function Y(a) {
        V.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            wrapX: a.wrapX
        });
        this.resolution = void 0;
        this.distance = void 0 !== a.distance ? a.distance : 20;
        this.features = [];
        this.geometryFunction = a.geometryFunction || function(a) {
            a = a.V();
            va(a instanceof C, 10);
            return a
        }
        ;
        this.source = a.source;
        this.source.J("change", Y.prototype.ra, this)
    }
    v(Y, V);
    k = Y.prototype;
    k.po = function() {
        return this.distance
    }
    ;
    k.qo = function() {
        return this.source
    }
    ;
    k.ce = function(a, b, c) {
        this.source.ce(a, b, c);
        b !== this.resolution && (this.clear(),
        this.resolution = b,
        $w(this),
        this.Ec(this.features))
    }
    ;
    k.lq = function(a) {
        this.distance = a;
        this.ra()
    }
    ;
    k.ra = function() {
        this.clear();
        $w(this);
        this.Ec(this.features);
        V.prototype.ra.call(this)
    }
    ;
    function $w(a) {
        if (void 0 !== a.resolution) {
            a.features.length = 0;
            for (var b = Ma(), c = a.distance * a.resolution, d = a.source.ee(), e = {}, f = 0, g = d.length; f < g; f++) {
                var h = d[f];
                w(h).toString()in e || !(h = a.geometryFunction(h)) || (h = h.X(),
                Xa(h, b),
                Oa(b, c, b),
                h = a.source.ag(b),
                h = h.filter(function(a) {
                    a = w(a).toString();
                    return a in e ? !1 : e[a] = !0
                }),
                a.features.push(ax(a, h)))
            }
        }
    }
    function ax(a, b) {
        for (var c = [0, 0], d = b.length - 1; 0 <= d; --d) {
            var e = a.geometryFunction(b[d]);
            e ? Xe(c, e.X()) : b.splice(d, 1)
        }
        df(c, 1 / b.length);
        a = new wl(new C(c));
        a.set("features", b);
        return a
    }
    ;function bx(a, b) {
        var c = [];
        Object.keys(b).forEach(function(a) {
            null !== b[a] && void 0 !== b[a] && c.push(a + "=" + encodeURIComponent(b[a]))
        });
        var d = c.join("&");
        a = a.replace(/[?&]$/, "");
        a = -1 === a.indexOf("?") ? a + "?" : a + "&";
        return a + d
    }
    ;function cx(a) {
        a = a || {};
        Zv.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.S = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.U = void 0 !== a.hidpi ? a.hidpi : !0;
        this.a = a.url;
        this.g = a.imageLoadFunction ? a.imageLoadFunction : ew;
        this.v = a.params || {};
        this.M = null;
        this.o = [0, 0];
        this.I = 0;
        this.C = void 0 !== a.ratio ? a.ratio : 1.5
    }
    v(cx, Zv);
    k = cx.prototype;
    k.so = function() {
        return this.v
    }
    ;
    k.Lc = function(a, b, c, d) {
        if (void 0 === this.a)
            return null;
        b = $v(this, b);
        c = this.U ? c : 1;
        var e = this.M;
        if (e && this.I == this.f && e.resolution == b && e.a == c && Ta(e.G(), a))
            return e;
        e = {
            F: "image",
            FORMAT: "PNG32",
            TRANSPARENT: !0
        };
        rb(e, this.v);
        a = a.slice();
        var f = (a[0] + a[2]) / 2
          , g = (a[1] + a[3]) / 2;
        if (1 != this.C) {
            var h = this.C * jb(a) / 2
              , l = this.C * kb(a) / 2;
            a[0] = f - h;
            a[1] = g - l;
            a[2] = f + h;
            a[3] = g + l
        }
        h = b / c;
        l = Math.ceil(jb(a) / h);
        var m = Math.ceil(kb(a) / h);
        a[0] = f - h * l / 2;
        a[2] = f + h * l / 2;
        a[1] = g - h * m / 2;
        a[3] = g + h * m / 2;
        this.o[0] = l;
        this.o[1] = m;
        f = a;
        g = this.o;
        h = c;
        d = d.pb.split(":").pop();
        e.SIZE = g[0] + "," + g[1];
        e.BBOX = f.join(",");
        e.BBOXSR = d;
        e.IMAGESR = d;
        e.DPI = Math.round(90 * h);
        d = this.a;
        f = d.replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage");
        f == d && va(!1, 50);
        e = bx(f, e);
        this.M = new Ys(a,b,c,this.j,e,this.S,this.g);
        this.I = this.f;
        y(this.M, "change", this.l, this);
        return this.M
    }
    ;
    k.ro = function() {
        return this.g
    }
    ;
    k.to = function() {
        return this.a
    }
    ;
    k.uo = function(a) {
        this.M = null;
        this.g = a;
        this.s()
    }
    ;
    k.vo = function(a) {
        a != this.a && (this.a = a,
        this.M = null,
        this.s())
    }
    ;
    k.wo = function(a) {
        rb(this.v, a);
        this.M = null;
        this.s()
    }
    ;
    function dx(a) {
        Zv.call(this, {
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.S = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.o = void 0 !== a.displayDpi ? a.displayDpi : 96;
        this.g = a.params || {};
        this.I = a.url;
        this.a = a.imageLoadFunction ? a.imageLoadFunction : ew;
        this.U = void 0 !== a.hidpi ? a.hidpi : !0;
        this.oa = void 0 !== a.metersPerUnit ? a.metersPerUnit : 1;
        this.v = void 0 !== a.ratio ? a.ratio : 1;
        this.va = void 0 !== a.useOverlay ? a.useOverlay : !1;
        this.M = null;
        this.C = 0
    }
    v(dx, Zv);
    k = dx.prototype;
    k.yo = function() {
        return this.g
    }
    ;
    k.Lc = function(a, b, c) {
        b = $v(this, b);
        c = this.U ? c : 1;
        var d = this.M;
        if (d && this.C == this.f && d.resolution == b && d.a == c && Ta(d.G(), a))
            return d;
        1 != this.v && (a = a.slice(),
        pb(a, this.v));
        var e = [jb(a) / b * c, kb(a) / b * c];
        if (void 0 !== this.I) {
            d = this.I;
            var f = lb(a)
              , g = this.oa
              , h = jb(a)
              , l = kb(a)
              , m = e[0]
              , n = e[1]
              , p = .0254 / this.o;
            e = {
                OPERATION: this.va ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE",
                VERSION: "2.0.0",
                LOCALE: "en",
                CLIENTAGENT: "ol.source.ImageMapGuide source",
                CLIP: "1",
                SETDISPLAYDPI: this.o,
                SETDISPLAYWIDTH: Math.round(e[0]),
                SETDISPLAYHEIGHT: Math.round(e[1]),
                SETVIEWSCALE: n * h > m * l ? h * g / (m * p) : l * g / (n * p),
                SETVIEWCENTERX: f[0],
                SETVIEWCENTERY: f[1]
            };
            rb(e, this.g);
            d = bx(d, e);
            d = new Ys(a,b,c,this.j,d,this.S,this.a);
            y(d, "change", this.l, this)
        } else
            d = null;
        this.M = d;
        this.C = this.f;
        return d
    }
    ;
    k.xo = function() {
        return this.a
    }
    ;
    k.Ao = function(a) {
        rb(this.g, a);
        this.s()
    }
    ;
    k.zo = function(a) {
        this.M = null;
        this.a = a;
        this.s()
    }
    ;
    function ex(a) {
        var b = a.imageExtent
          , c = void 0 !== a.crossOrigin ? a.crossOrigin : null
          , d = a.imageLoadFunction ? a.imageLoadFunction : ew;
        Zv.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: Qb(a.projection)
        });
        this.M = new Ys(b,void 0,1,this.j,a.url,c,d);
        this.a = a.imageSize ? a.imageSize : null;
        y(this.M, "change", this.l, this)
    }
    v(ex, Zv);
    ex.prototype.Lc = function(a) {
        return ob(a, this.M.G()) ? this.M : null
    }
    ;
    ex.prototype.l = function(a) {
        if (2 == this.M.getState()) {
            var b = this.M.G()
              , c = this.M.Y();
            if (this.a) {
                var d = this.a[0];
                var e = this.a[1]
            } else
                d = c.width,
                e = c.height;
            b = Math.ceil(jb(b) / (kb(b) / e));
            if (b != d) {
                b = gd(b, e);
                var f = b.canvas;
                b.drawImage(c, 0, 0, d, e, 0, 0, f.width, f.height);
                this.M.Wg(f)
            }
        }
        Zv.prototype.l.call(this, a)
    }
    ;
    function fx(a) {
        a = a || {};
        Zv.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.oa = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.g = a.url;
        this.v = a.imageLoadFunction ? a.imageLoadFunction : ew;
        this.a = a.params || {};
        this.o = !0;
        gx(this);
        this.U = a.serverType;
        this.va = void 0 !== a.hidpi ? a.hidpi : !0;
        this.M = null;
        this.C = [0, 0];
        this.S = 0;
        this.I = void 0 !== a.ratio ? a.ratio : 1.5
    }
    v(fx, Zv);
    var hx = [101, 101];
    k = fx.prototype;
    k.Fo = function(a, b, c, d) {
        if (void 0 !== this.g) {
            var e = mb(a, b, 0, hx)
              , f = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.a.LAYERS
            };
            rb(f, this.a, d);
            d = Math.floor((e[3] - a[1]) / b);
            f[this.o ? "I" : "X"] = Math.floor((a[0] - e[0]) / b);
            f[this.o ? "J" : "Y"] = d;
            return ix(this, e, hx, 1, Qb(c), f)
        }
    }
    ;
    k.Ho = function() {
        return this.a
    }
    ;
    k.Lc = function(a, b, c, d) {
        if (void 0 === this.g)
            return null;
        b = $v(this, b);
        1 == c || this.va && void 0 !== this.U || (c = 1);
        var e = b / c
          , f = lb(a)
          , g = mb(f, e, 0, [Math.ceil(jb(a) / e), Math.ceil(kb(a) / e)]);
        a = mb(f, e, 0, [Math.ceil(this.I * jb(a) / e), Math.ceil(this.I * kb(a) / e)]);
        if ((f = this.M) && this.S == this.f && f.resolution == b && f.a == c && Ta(f.G(), g))
            return f;
        g = {
            SERVICE: "WMS",
            VERSION: "1.3.0",
            REQUEST: "GetMap",
            FORMAT: "image/png",
            TRANSPARENT: !0
        };
        rb(g, this.a);
        this.C[0] = Math.round(jb(a) / e);
        this.C[1] = Math.round(kb(a) / e);
        d = ix(this, a, this.C, c, d, g);
        this.M = new Ys(a,b,c,this.j,d,this.oa,this.v);
        this.S = this.f;
        y(this.M, "change", this.l, this);
        return this.M
    }
    ;
    k.Go = function() {
        return this.v
    }
    ;
    function ix(a, b, c, d, e, f) {
        va(void 0 !== a.g, 9);
        f[a.o ? "CRS" : "SRS"] = e.pb;
        "STYLES"in a.a || (f.STYLES = "");
        if (1 != d)
            switch (a.U) {
            case "geoserver":
                d = 90 * d + .5 | 0;
                f.FORMAT_OPTIONS = "FORMAT_OPTIONS"in f ? f.FORMAT_OPTIONS + (";dpi:" + d) : "dpi:" + d;
                break;
            case "mapserver":
                f.MAP_RESOLUTION = 90 * d;
                break;
            case "carmentaserver":
            case "qgis":
                f.DPI = 90 * d;
                break;
            default:
                va(!1, 8)
            }
        f.WIDTH = c[0];
        f.HEIGHT = c[1];
        c = e.a;
        var g;
        a.o && "ne" == c.substr(0, 2) ? g = [b[1], b[0], b[3], b[2]] : g = b;
        f.BBOX = g.join(",");
        return bx(a.g, f)
    }
    k.Io = function() {
        return this.g
    }
    ;
    k.Jo = function(a) {
        this.M = null;
        this.v = a;
        this.s()
    }
    ;
    k.Ko = function(a) {
        a != this.g && (this.g = a,
        this.M = null,
        this.s())
    }
    ;
    k.Lo = function(a) {
        rb(this.a, a);
        gx(this);
        this.M = null;
        this.s()
    }
    ;
    function gx(a) {
        a.o = 0 <= We(a.a.VERSION || "1.3.0")
    }
    ;function jx(a) {
        a = a || {};
        var b;
        void 0 !== a.attributions ? b = a.attributions : b = [kx];
        Ww.call(this, {
            attributions: b,
            cacheSize: a.cacheSize,
            crossOrigin: void 0 !== a.crossOrigin ? a.crossOrigin : "anonymous",
            opaque: void 0 !== a.opaque ? a.opaque : !0,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 19,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            wrapX: a.wrapX
        })
    }
    v(jx, Ww);
    var kx = new vc({
        html: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'
    });
    Ij.pf = {};
    Ij.pf.Jf = function() {}
    ;
    (function(a) {
        function b(a, b, c) {
            if (g)
                return new ImageData(a,b,c);
            b = h.createImageData(b, c);
            b.data.set(a);
            return b
        }
        function c(a) {
            var b = !0;
            try {
                new ImageData(10,10)
            } catch (n) {
                b = !1
            }
            return function(c) {
                var d = c.buffers
                  , e = c.meta
                  , f = c.width
                  , g = c.height
                  , h = d.length
                  , l = d[0].byteLength;
                if (c.imageOps) {
                    l = Array(h);
                    for (c = 0; c < h; ++c) {
                        var m = c;
                        var n = new Uint8ClampedArray(d[c]);
                        var E = f
                          , ia = g;
                        n = b ? new ImageData(n,E,ia) : {
                            data: n,
                            width: E,
                            height: ia
                        };
                        l[m] = n
                    }
                    f = a(l, e).data
                } else {
                    f = new Uint8ClampedArray(l);
                    g = Array(h);
                    m = Array(h);
                    for (c = 0; c < h; ++c)
                        g[c] = new Uint8ClampedArray(d[c]),
                        m[c] = [0, 0, 0, 0];
                    for (d = 0; d < l; d += 4) {
                        for (c = 0; c < h; ++c)
                            n = g[c],
                            m[c][0] = n[d],
                            m[c][1] = n[d + 1],
                            m[c][2] = n[d + 2],
                            m[c][3] = n[d + 3];
                        c = a(m, e);
                        f[d] = c[0];
                        f[d + 1] = c[1];
                        f[d + 2] = c[2];
                        f[d + 3] = c[3]
                    }
                }
                return f.buffer
            }
        }
        function d(a, b) {
            var d = Object.keys(a.lib || {}).map(function(b) {
                return "var " + b + " = " + a.lib[b].toString() + ";"
            }).concat(["var __minion__ = (" + c.toString() + ")(", a.operation.toString(), ");", 'self.addEventListener("message", function(event) {', "  var buffer = __minion__(event.data);", "  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);", "});"]);
            d = URL.createObjectURL(new Blob(d,{
                type: "text/javascript"
            }));
            d = new Worker(d);
            d.addEventListener("message", b);
            return d
        }
        function e(a, b) {
            var d = c(a.operation);
            return {
                postMessage: function(a) {
                    setTimeout(function() {
                        b({
                            data: {
                                buffer: d(a),
                                meta: a.meta
                            }
                        })
                    }, 0)
                }
            }
        }
        function f(a) {
            this.Nf = !!a.nm;
            var b;
            0 === a.threads ? b = 0 : this.Nf ? b = 1 : b = a.threads || 1;
            var c = [];
            if (b)
                for (var f = 0; f < b; ++f)
                    c[f] = d(a, this.lh.bind(this, f));
            else
                c[0] = e(a, this.lh.bind(this, 0));
            this.Ae = c;
            this.Jd = [];
            this.qk = a.Ep || Infinity;
            this.ye = 0;
            this.fd = {};
            this.Of = null
        }
        var g = !0;
        try {
            new ImageData(10,10)
        } catch (l) {
            g = !1
        }
        var h = document.createElement("canvas").getContext("2d");
        f.prototype.Cp = function(a, b, c) {
            this.nk({
                inputs: a,
                Zh: b,
                callback: c
            });
            this.ih()
        }
        ;
        f.prototype.nk = function(a) {
            for (this.Jd.push(a); this.Jd.length > this.qk; )
                this.Jd.shift().callback(null, null)
        }
        ;
        f.prototype.ih = function() {
            if (0 === this.ye && 0 < this.Jd.length) {
                var a = this.Of = this.Jd.shift()
                  , b = a.inputs[0].width
                  , c = a.inputs[0].height
                  , d = a.inputs.map(function(a) {
                    return a.data.buffer
                })
                  , e = this.Ae.length;
                this.ye = e;
                if (1 === e)
                    this.Ae[0].postMessage({
                        buffers: d,
                        meta: a.Zh,
                        imageOps: this.Nf,
                        width: b,
                        height: c
                    }, d);
                else
                    for (var f = 4 * Math.ceil(a.inputs[0].data.length / 4 / e), g = 0; g < e; ++g) {
                        for (var h = g * f, B = [], z = 0, G = d.length; z < G; ++z)
                            B.push(d[g].slice(h, h + f));
                        this.Ae[g].postMessage({
                            buffers: B,
                            meta: a.Zh,
                            imageOps: this.Nf,
                            width: b,
                            height: c
                        }, B)
                    }
            }
        }
        ;
        f.prototype.lh = function(a, b) {
            this.Xq || (this.fd[a] = b.data,
            --this.ye,
            0 === this.ye && this.rk())
        }
        ;
        f.prototype.rk = function() {
            var a = this.Of
              , c = this.Ae.length;
            if (1 === c) {
                var d = new Uint8ClampedArray(this.fd[0].buffer);
                var e = this.fd[0].meta
            } else {
                var f = a.inputs[0].data.length;
                d = new Uint8ClampedArray(f);
                e = Array(f);
                f = 4 * Math.ceil(f / 4 / c);
                for (var g = 0; g < c; ++g) {
                    var h = g * f;
                    d.set(new Uint8ClampedArray(this.fd[g].buffer), h);
                    e[g] = this.fd[g].meta
                }
            }
            this.Of = null;
            this.fd = {};
            a.callback(null, b(d, a.inputs[0].width, a.inputs[0].height), e);
            this.ih()
        }
        ;
        a["default"] = {
            Jf: f
        };
        a.Jf = f
    }
    )(Ij.pf = Ij.pf || {});
    function lx(a) {
        this.C = null;
        this.va = void 0 !== a.operationType ? a.operationType : "pixel";
        this.Sa = void 0 !== a.threads ? a.threads : 1;
        this.g = mx(a.sources);
        for (var b = 0, c = this.g.length; b < c; ++b)
            y(this.g[b], "change", this.s, this);
        this.U = new Ne(function() {
            return 1
        }
        ,this.s.bind(this));
        b = nx(this.g);
        c = {};
        for (var d = 0, e = b.length; d < e; ++d)
            c[w(b[d].layer)] = b[d];
        this.a = null;
        this.I = {
            animate: !1,
            attributions: {},
            coordinateToPixelTransform: Dh(),
            extent: null,
            focus: null,
            index: 0,
            layerStates: c,
            layerStatesArray: b,
            logos: {},
            pixelRatio: 1,
            pixelToCoordinateTransform: Dh(),
            postRenderFunctions: [],
            size: [0, 0],
            skippedFeatureUids: {},
            tileQueue: this.U,
            time: Date.now(),
            usedTiles: {},
            viewState: {
                rotation: 0
            },
            viewHints: [],
            wantedTiles: {}
        };
        Zv.call(this, {});
        a.operation && this.v(a.operation, a.lib)
    }
    v(lx, Zv);
    lx.prototype.v = function(a, b) {
        this.C = new Ij.pf.Jf({
            operation: a,
            nm: "image" === this.va,
            Ep: 1,
            lib: b,
            threads: this.Sa
        });
        this.s()
    }
    ;
    lx.prototype.Y = function(a, b, c, d) {
        c = !0;
        for (var e, f = 0, g = this.g.length; f < g; ++f)
            if (e = this.g[f].a.ia(),
            "ready" !== e.getState()) {
                c = !1;
                break
            }
        if (!c)
            return null;
        c = rb({}, this.I);
        c.viewState = rb({}, c.viewState);
        e = lb(a);
        c.extent = a.slice();
        c.focus = e;
        c.size[0] = Math.round(jb(a) / b);
        c.size[1] = Math.round(kb(a) / b);
        f = c.viewState;
        f.center = e;
        f.projection = d;
        f.resolution = b;
        this.o = c;
        this.a && (d = this.a.resolution,
        e = this.a.G(),
        b === d && ab(a, e) || (this.a = null));
        if (!this.a || this.f !== this.S)
            a: {
                a = this.o;
                d = this.g.length;
                b = Array(d);
                for (e = 0; e < d; ++e) {
                    f = this.g[e];
                    g = a;
                    var h = a.layerStatesArray[e];
                    if (f.xd(g, h)) {
                        var l = g.size[0]
                          , m = g.size[1];
                        if (ox) {
                            var n = ox.canvas;
                            n.width !== l || n.height !== m ? ox = gd(l, m) : ox.clearRect(0, 0, l, m)
                        } else
                            ox = gd(l, m);
                        f.u(g, h, ox);
                        f = ox.getImageData(0, 0, l, m)
                    } else
                        f = null;
                    if (f)
                        b[e] = f;
                    else
                        break a
                }
                d = {};
                this.b(new px(qx,a,d));
                this.C.Cp(b, d, this.oa.bind(this, a))
            }
        Oe(c.tileQueue, 16, 16);
        return this.a
    }
    ;
    lx.prototype.oa = function(a, b, c, d) {
        if (!b && c) {
            b = a.extent;
            var e = a.viewState.resolution;
            if (e === this.o.viewState.resolution && ab(b, this.o.extent)) {
                if (this.a)
                    var f = this.a.Y().getContext("2d");
                else
                    f = gd(Math.round(jb(b) / e), Math.round(kb(b) / e)),
                    this.a = new Zs(b,e,1,this.j,f.canvas);
                f.putImageData(c, 0, 0);
                this.s();
                this.S = this.f;
                this.b(new px(rx,a,d))
            }
        }
    }
    ;
    var ox = null;
    function nx(a) {
        return a.map(function(a) {
            return th(a.a)
        })
    }
    function mx(a) {
        for (var b = a.length, c = Array(b), d = 0; d < b; ++d) {
            var e = d
              , f = a[d]
              , g = null;
            f instanceof Mw ? (f = new uw({
                source: f
            }),
            g = new mw(f)) : f instanceof Zv && (f = new lw({
                source: f
            }),
            g = new Rv(f));
            c[e] = g
        }
        return c
    }
    function px(a, b, c) {
        Lc.call(this, a);
        this.extent = b.extent;
        this.resolution = b.viewState.resolution / b.pixelRatio;
        this.data = c
    }
    v(px, Lc);
    lx.prototype.Lc = function() {
        return null
    }
    ;
    var qx = "beforeoperations"
      , rx = "afteroperations";
    function sx(a) {
        var b = a.layer.indexOf("-");
        b = tx[-1 == b ? a.layer : a.layer.slice(0, b)];
        var c = ux[a.layer];
        Ww.call(this, {
            attributions: vx,
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            maxZoom: void 0 != a.maxZoom ? a.maxZoom : b.maxZoom,
            minZoom: void 0 != a.minZoom ? a.minZoom : b.minZoom,
            opaque: c.opaque,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" + a.layer + "/{z}/{x}/{y}." + c.Kb,
            wrapX: a.wrapX
        })
    }
    v(sx, Ww);
    var vx = [new vc({
        html: 'Map tiles by <a href="https://stamen.com/">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'
    }), kx]
      , ux = {
        terrain: {
            Kb: "jpg",
            opaque: !0
        },
        "terrain-background": {
            Kb: "jpg",
            opaque: !0
        },
        "terrain-labels": {
            Kb: "png",
            opaque: !1
        },
        "terrain-lines": {
            Kb: "png",
            opaque: !1
        },
        "toner-background": {
            Kb: "png",
            opaque: !0
        },
        toner: {
            Kb: "png",
            opaque: !0
        },
        "toner-hybrid": {
            Kb: "png",
            opaque: !1
        },
        "toner-labels": {
            Kb: "png",
            opaque: !1
        },
        "toner-lines": {
            Kb: "png",
            opaque: !1
        },
        "toner-lite": {
            Kb: "png",
            opaque: !0
        },
        watercolor: {
            Kb: "jpg",
            opaque: !0
        }
    }
      , tx = {
        terrain: {
            minZoom: 4,
            maxZoom: 18
        },
        toner: {
            minZoom: 0,
            maxZoom: 20
        },
        watercolor: {
            minZoom: 1,
            maxZoom: 16
        }
    };
    function wx(a) {
        a = a || {};
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.i = a.params || {};
        this.o = Ma();
        Nw(this, xx(this))
    }
    v(wx, X);
    function xx(a) {
        var b = 0, c = [], d;
        for (d in a.i)
            c[b++] = d + "-" + a.i[d];
        return c.join("/")
    }
    wx.prototype.B = function() {
        return this.i
    }
    ;
    wx.prototype.Oc = function(a) {
        return a
    }
    ;
    wx.prototype.Hc = function(a, b, c) {
        var d = this.tileGrid;
        d || (d = this.Ta(c));
        if (!(d.b.length <= a[0])) {
            var e = d.Fa(a, this.o)
              , f = Ka(d.eb(a[0]), this.l);
            1 != b && (f = Ja(f, b, this.l));
            d = {
                F: "image",
                FORMAT: "PNG32",
                TRANSPARENT: !0
            };
            rb(d, this.i);
            var g = this.urls;
            g ? (c = c.pb.split(":").pop(),
            d.SIZE = f[0] + "," + f[1],
            d.BBOX = e.join(","),
            d.BBOXSR = c,
            d.IMAGESR = c,
            d.DPI = Math.round(d.DPI ? d.DPI * b : 90 * b),
            a = (1 == g.length ? g[0] : g[Ga((a[1] << a[0]) + a[2], g.length)]).replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage"),
            a = bx(a, d)) : a = void 0;
            return a
        }
    }
    ;
    wx.prototype.C = function(a) {
        rb(this.i, a);
        Nw(this, xx(this))
    }
    ;
    function yx(a) {
        Mw.call(this, {
            opaque: !1,
            projection: a.projection,
            tileGrid: a.tileGrid,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        })
    }
    v(yx, Mw);
    yx.prototype.Qc = function(a, b, c) {
        var d = this.Rb(a, b, c);
        if (this.a.b.hasOwnProperty(d))
            return this.a.get(d);
        var e = Ka(this.tileGrid.eb(a));
        a = [a, b, c];
        b = (b = Ow(this, a)) ? Ow(this, b).toString() : "";
        e = new zx(a,e,b);
        this.a.set(d, e);
        return e
    }
    ;
    function zx(a, b, c) {
        $s.call(this, a, 2);
        this.c = b;
        this.ua = c;
        this.f = null
    }
    v(zx, $s);
    zx.prototype.Y = function() {
        if (this.f)
            return this.f;
        var a = this.c
          , b = gd(a[0], a[1]);
        b.strokeStyle = "black";
        b.strokeRect(.5, .5, a[0] + .5, a[1] + .5);
        b.fillStyle = "black";
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.font = "24px sans-serif";
        b.fillText(this.ua, a[0] / 2, a[1] / 2);
        return this.f = b.canvas
    }
    ;
    zx.prototype.load = function() {}
    ;
    function Ax(a) {
        this.i = null;
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            projection: Qb("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        if (a.url)
            if (a.jsonp)
                Dw(a.url, this.wg.bind(this), this.ff.bind(this));
            else {
                var b = new XMLHttpRequest;
                b.addEventListener("load", this.No.bind(this));
                b.addEventListener("error", this.Mo.bind(this));
                b.open("GET", a.url);
                b.send()
            }
        else
            a.tileJSON ? this.wg(a.tileJSON) : va(!1, 51)
    }
    v(Ax, X);
    k = Ax.prototype;
    k.No = function(a) {
        a = a.target;
        if (!a.status || 200 <= a.status && 300 > a.status) {
            try {
                var b = JSON.parse(a.responseText)
            } catch (c) {
                this.ff();
                return
            }
            this.wg(b)
        } else
            this.ff()
    }
    ;
    k.Mo = function() {
        this.ff()
    }
    ;
    k.Bl = function() {
        return this.i
    }
    ;
    k.wg = function(a) {
        var b = Qb("EPSG:4326")
          , c = this.c;
        if (a.bounds) {
            var d = Rb(b, c);
            var e = qb(a.bounds, d)
        }
        var f = a.minzoom || 0;
        d = a.maxzoom || 22;
        this.tileGrid = c = sc({
            extent: uc(c),
            maxZoom: d,
            minZoom: f
        });
        this.tileUrlFunction = Gw(a.tiles, c);
        if (void 0 !== a.attribution && !this.j) {
            b = void 0 !== e ? e : b.G();
            e = {};
            for (var g; f <= d; ++f)
                g = f.toString(),
                e[g] = [kc(c, b, f)];
            this.wa([new vc({
                html: a.attribution,
                tileRanges: e
            })])
        }
        this.i = a;
        uu(this, "ready")
    }
    ;
    k.ff = function() {
        uu(this, "error")
    }
    ;
    function Bx(a) {
        Mw.call(this, {
            projection: Qb("EPSG:3857"),
            state: "loading"
        });
        this.v = void 0 !== a.preemptive ? a.preemptive : !0;
        this.o = Iw;
        this.g = void 0;
        this.i = a.jsonp || !1;
        if (a.url)
            if (this.i)
                Dw(a.url, this.xg.bind(this), this.gf.bind(this));
            else {
                var b = new XMLHttpRequest;
                b.addEventListener("load", this.Ro.bind(this));
                b.addEventListener("error", this.Qo.bind(this));
                b.open("GET", a.url);
                b.send()
            }
        else
            a.tileJSON ? this.xg(a.tileJSON) : va(!1, 51)
    }
    v(Bx, Mw);
    k = Bx.prototype;
    k.Ro = function(a) {
        a = a.target;
        if (!a.status || 200 <= a.status && 300 > a.status) {
            try {
                var b = JSON.parse(a.responseText)
            } catch (c) {
                this.gf();
                return
            }
            this.xg(b)
        } else
            this.gf()
    }
    ;
    k.Qo = function() {
        this.gf()
    }
    ;
    k.yl = function() {
        return this.g
    }
    ;
    k.Kk = function(a, b, c, d, e) {
        this.tileGrid ? (b = this.tileGrid.Me(a, b),
        Cx(this.Qc(b[0], b[1], b[2], 1, this.c), a, c, d, e)) : !0 === e ? setTimeout(function() {
            c.call(d, null)
        }, 0) : c.call(d, null)
    }
    ;
    k.gf = function() {
        uu(this, "error")
    }
    ;
    k.xg = function(a) {
        var b = Qb("EPSG:4326")
          , c = this.c;
        if (a.bounds) {
            var d = Rb(b, c);
            var e = qb(a.bounds, d)
        }
        var f = a.minzoom || 0;
        d = a.maxzoom || 22;
        this.tileGrid = c = sc({
            extent: uc(c),
            maxZoom: d,
            minZoom: f
        });
        this.g = a.template;
        var g = a.grids;
        if (g) {
            this.o = Gw(g, c);
            if (void 0 !== a.attribution) {
                b = void 0 !== e ? e : b.G();
                for (e = {}; f <= d; ++f)
                    g = f.toString(),
                    e[g] = [kc(c, b, f)];
                this.wa([new vc({
                    html: a.attribution,
                    tileRanges: e
                })])
            }
            uu(this, "ready")
        } else
            uu(this, "error")
    }
    ;
    k.Qc = function(a, b, c, d, e) {
        var f = this.Rb(a, b, c);
        if (this.a.b.hasOwnProperty(f))
            return this.a.get(f);
        a = [a, b, c];
        b = Ow(this, a, e);
        d = this.o(b, d, e);
        d = new Dx(a,void 0 !== d ? 0 : 4,void 0 !== d ? d : "",this.tileGrid.Fa(a),this.v,this.i);
        this.a.set(f, d);
        return d
    }
    ;
    k.Zg = function(a, b, c) {
        a = this.Rb(a, b, c);
        this.a.b.hasOwnProperty(a) && this.a.get(a)
    }
    ;
    function Dx(a, b, c, d, e, f) {
        $s.call(this, a, b);
        this.l = c;
        this.f = d;
        this.v = e;
        this.c = this.j = this.g = null;
        this.o = f
    }
    v(Dx, $s);
    k = Dx.prototype;
    k.Y = function() {
        return null
    }
    ;
    k.getData = function(a) {
        if (!this.g || !this.j)
            return null;
        var b = this.g[Math.floor((1 - (a[1] - this.f[1]) / (this.f[3] - this.f[1])) * this.g.length)];
        if ("string" !== typeof b)
            return null;
        b = b.charCodeAt(Math.floor((a[0] - this.f[0]) / (this.f[2] - this.f[0]) * b.length));
        93 <= b && b--;
        35 <= b && b--;
        b -= 32;
        a = null;
        b in this.j && (b = this.j[b],
        this.c && b in this.c ? a = this.c[b] : a = b);
        return a
    }
    ;
    function Cx(a, b, c, d, e) {
        0 == a.state && !0 === e ? (Gc(a, "change", function() {
            c.call(d, this.getData(b))
        }, a),
        Ex(a)) : !0 === e ? setTimeout(function() {
            c.call(d, this.getData(b))
        }
        .bind(a), 0) : c.call(d, a.getData(b))
    }
    k.fb = function() {
        return this.l
    }
    ;
    k.Oe = function() {
        this.state = 3;
        this.s()
    }
    ;
    k.Ti = function(a) {
        this.g = a.grid;
        this.j = a.keys;
        this.c = a.data;
        this.state = 4;
        this.s()
    }
    ;
    function Ex(a) {
        if (0 == a.state)
            if (a.state = 1,
            a.o)
                Dw(a.l, a.Ti.bind(a), a.Oe.bind(a));
            else {
                var b = new XMLHttpRequest;
                b.addEventListener("load", a.Po.bind(a));
                b.addEventListener("error", a.Oo.bind(a));
                b.open("GET", a.l);
                b.send()
            }
    }
    k.Po = function(a) {
        a = a.target;
        if (!a.status || 200 <= a.status && 300 > a.status) {
            try {
                var b = JSON.parse(a.responseText)
            } catch (c) {
                this.Oe();
                return
            }
            this.Ti(b)
        } else
            this.Oe()
    }
    ;
    k.Oo = function() {
        this.Oe()
    }
    ;
    k.load = function() {
        this.v && Ex(this)
    }
    ;
    function Fx(a) {
        a = a || {};
        var b = a.params || {};
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: !("TRANSPARENT"in b ? b.TRANSPARENT : 1),
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: a.tileClass,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.B = void 0 !== a.gutter ? a.gutter : 0;
        this.i = b;
        this.o = !0;
        this.C = a.serverType;
        this.U = void 0 !== a.hidpi ? a.hidpi : !0;
        this.S = "";
        Gx(this);
        this.ga = Ma();
        Hx(this);
        Nw(this, Ix(this))
    }
    v(Fx, X);
    k = Fx.prototype;
    k.So = function(a, b, c, d) {
        c = Qb(c);
        var e = this.tileGrid;
        e || (e = this.Ta(c));
        b = e.Me(a, b);
        if (!(e.b.length <= b[0])) {
            var f = e.Ca(b[0])
              , g = e.Fa(b, this.ga);
            e = Ka(e.eb(b[0]), this.l);
            var h = this.B;
            h && (e = Ia(e, h, this.l),
            g = Oa(g, f * h, g));
            h = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.i.LAYERS
            };
            rb(h, this.i, d);
            d = Math.floor((g[3] - a[1]) / f);
            h[this.o ? "I" : "X"] = Math.floor((a[0] - g[0]) / f);
            h[this.o ? "J" : "Y"] = d;
            return Jx(this, b, e, g, 1, c, h)
        }
    }
    ;
    k.cg = function() {
        return this.B
    }
    ;
    k.Rb = function(a, b, c) {
        return this.S + X.prototype.Rb.call(this, a, b, c)
    }
    ;
    k.To = function() {
        return this.i
    }
    ;
    function Jx(a, b, c, d, e, f, g) {
        var h = a.urls;
        if (h) {
            g.WIDTH = c[0];
            g.HEIGHT = c[1];
            g[a.o ? "CRS" : "SRS"] = f.pb;
            "STYLES"in a.i || (g.STYLES = "");
            if (1 != e)
                switch (a.C) {
                case "geoserver":
                    c = 90 * e + .5 | 0;
                    g.FORMAT_OPTIONS = "FORMAT_OPTIONS"in g ? g.FORMAT_OPTIONS + (";dpi:" + c) : "dpi:" + c;
                    break;
                case "mapserver":
                    g.MAP_RESOLUTION = 90 * e;
                    break;
                case "carmentaserver":
                case "qgis":
                    g.DPI = 90 * e;
                    break;
                default:
                    va(!1, 52)
                }
            f = f.a;
            a.o && "ne" == f.substr(0, 2) && (a = d[0],
            d[0] = d[1],
            d[1] = a,
            a = d[2],
            d[2] = d[3],
            d[3] = a);
            g.BBOX = d.join(",");
            return bx(1 == h.length ? h[0] : h[Ga((b[1] << b[0]) + b[2], h.length)], g)
        }
    }
    k.Oc = function(a) {
        return this.U && void 0 !== this.C ? a : 1
    }
    ;
    function Gx(a) {
        var b = 0
          , c = [];
        if (a.urls) {
            var d;
            var e = 0;
            for (d = a.urls.length; e < d; ++e)
                c[b++] = a.urls[e]
        }
        a.S = c.join("#")
    }
    function Ix(a) {
        var b = 0, c = [], d;
        for (d in a.i)
            c[b++] = d + "-" + a.i[d];
        return c.join("/")
    }
    k.Hc = function(a, b, c) {
        var d = this.tileGrid;
        d || (d = this.Ta(c));
        if (!(d.b.length <= a[0])) {
            1 == b || this.U && void 0 !== this.C || (b = 1);
            var e = d.Ca(a[0])
              , f = d.Fa(a, this.ga);
            d = Ka(d.eb(a[0]), this.l);
            var g = this.B;
            g && (d = Ia(d, g, this.l),
            f = Oa(f, e * g, f));
            1 != b && (d = Ja(d, b, this.l));
            e = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetMap",
                FORMAT: "image/png",
                TRANSPARENT: !0
            };
            rb(e, this.i);
            return Jx(this, a, d, f, b, c, e)
        }
    }
    ;
    k.ib = function(a) {
        X.prototype.ib.call(this, a);
        Gx(this)
    }
    ;
    k.Uo = function(a) {
        rb(this.i, a);
        Gx(this);
        Hx(this);
        Nw(this, Ix(this))
    }
    ;
    function Hx(a) {
        a.o = 0 <= We(a.i.VERSION || "1.3.0")
    }
    ;function Kx(a, b, c, d, e, f, g, h, l, m, n, p, q, t) {
        $s.call(this, a, b);
        this.j = {};
        this.l = {};
        this.c = m;
        this.f = [];
        this.u = c;
        this.v = f;
        this.g = [];
        this.o = [];
        if (f) {
            var u = l.Fa(f)
              , x = l.Ca(a[0]);
            h.Yf(u, h.uc(x), function(a) {
                var b = nb(u, h.Fa(a));
                if (.5 <= jb(b) / x && .5 <= kb(b) / x) {
                    b = a.toString();
                    var c = m[b];
                    c || (c = g(a, n, p),
                    c = m[b] = new q(a,void 0 == c ? 4 : 0,void 0 == c ? "" : c,d,e),
                    this.o.push(y(c, "change", t)));
                    c.g++;
                    this.f.push(b)
                }
            }
            .bind(this))
        }
    }
    v(Kx, $s);
    k = Kx.prototype;
    k.ka = function() {
        for (var a = 0, b = this.f.length; a < b; ++a) {
            var c = this.f[a]
              , d = this.c[c];
            d.g--;
            d.g || (delete this.c[c],
            Kc(d))
        }
        this.f.length = 0;
        this.c = null;
        1 == this.state && (this.g.forEach(zc),
        this.g.length = 0);
        this.a && Kc(this.a);
        this.state = 5;
        this.s();
        this.o.forEach(zc);
        this.o.length = 0;
        $s.prototype.ka.call(this)
    }
    ;
    function Aw(a, b) {
        b = w(b).toString();
        b in a.j || (a.j[b] = gd());
        return a.j[b]
    }
    k.Y = function(a) {
        return -1 == yw(this, a).Tg ? null : Aw(this, a).canvas
    }
    ;
    function yw(a, b) {
        b = w(b).toString();
        b in a.l || (a.l[b] = {
            Sd: !1,
            Sg: null,
            xf: -1,
            Tg: -1
        });
        return a.l[b]
    }
    k.fb = function() {
        return this.f.join("/") + "/" + this.u
    }
    ;
    k.load = function() {
        var a = 0;
        0 == this.state && ct(this, 1);
        1 == this.state && this.f.forEach(function(b) {
            var c = this.c[b];
            0 == c.state && (c.Xg(this.R),
            c.load());
            if (1 == c.state) {
                var d = y(c, "change", function() {
                    var b = c.getState();
                    if (2 == b || 3 == b) {
                        --a;
                        zc(d);
                        b = this.g;
                        var f = b.indexOf(d);
                        -1 < f && b.splice(f, 1);
                        a || this.zh()
                    }
                }
                .bind(this));
                this.g.push(d);
                ++a
            }
        }
        .bind(this));
        a || setTimeout(this.zh.bind(this), 0)
    }
    ;
    k.zh = function() {
        for (var a = !1, b = this.f.length, c, d = b - 1; 0 <= d; --d)
            c = this.c[this.f[d]].getState(),
            2 != c && (3 == c && (a = !0),
            --b);
        ct(this, 0 < b ? 2 : a ? 3 : 4)
    }
    ;
    function Lx(a, b) {
        a.Xg(Rl(b, a.o, a.np.bind(a), a.mp.bind(a)))
    }
    ;function Mx(a, b, c, d, e) {
        $s.call(this, a, b);
        this.g = 0;
        this.l = null;
        this.o = d;
        this.c = null;
        this.j = {};
        this.R = e;
        this.v = c
    }
    v(Mx, $s);
    k = Mx.prototype;
    k.ka = function() {
        this.c = null;
        this.j = {};
        this.state = 5;
        this.s();
        $s.prototype.ka.call(this)
    }
    ;
    k.G = function() {
        return this.l || Nx
    }
    ;
    k.Zm = function() {
        return this.o
    }
    ;
    k.Ym = function() {
        return this.c
    }
    ;
    k.fb = function() {
        return this.v
    }
    ;
    k.$m = function() {
        return this.f
    }
    ;
    function Bw(a, b, c) {
        return a.j[w(b) + "," + c]
    }
    k.load = function() {
        0 == this.state && (ct(this, 1),
        this.R(this, this.v),
        this.u(null, NaN, null))
    }
    ;
    k.np = function(a, b, c) {
        this.qg(b);
        this.wj(a);
        this.hi(c)
    }
    ;
    k.mp = function() {
        ct(this, 3)
    }
    ;
    k.hi = function(a) {
        this.l = a
    }
    ;
    k.wj = function(a) {
        this.c = a;
        ct(this, 2)
    }
    ;
    k.qg = function(a) {
        this.f = a
    }
    ;
    k.Xg = function(a) {
        this.u = a
    }
    ;
    var Nx = [0, 0, 4096, 4096];
    function Ox(a) {
        var b = a.projection || "EPSG:3857"
          , c = a.extent || uc(b)
          , d = a.tileGrid || sc({
            extent: c,
            maxZoom: a.maxZoom || 22,
            minZoom: a.minZoom,
            tileSize: a.tileSize || 512
        });
        Qw.call(this, {
            attributions: a.attributions,
            cacheSize: void 0 !== a.cacheSize ? a.cacheSize : 128,
            extent: c,
            logo: a.logo,
            opaque: !1,
            projection: b,
            state: a.state,
            tileGrid: d,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : Lx,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 === a.wrapX ? !0 : a.wrapX
        });
        this.g = a.format ? a.format : null;
        this.v = {};
        this.o = void 0 == a.overlaps ? !0 : a.overlaps;
        this.tileClass = a.tileClass ? a.tileClass : Mx;
        this.i = {};
        this.tileGrid || (this.tileGrid = this.Ta(Qb(a.projection || "EPSG:3857")))
    }
    v(Ox, Qw);
    Ox.prototype.Qc = function(a, b, c, d, e) {
        var f = this.Rb(a, b, c);
        if (this.a.b.hasOwnProperty(f))
            return this.a.get(f);
        a = [a, b, c];
        c = (b = Ow(this, a, e)) ? this.tileUrlFunction(b, d, e) : void 0;
        d = new Kx(a,void 0 !== c ? 0 : 4,void 0 !== c ? c : "",this.g,this.tileLoadFunction,b,this.tileUrlFunction,this.tileGrid,this.Ta(e),this.v,d,e,this.tileClass,this.Vi.bind(this));
        this.a.set(f, d);
        return d
    }
    ;
    Ox.prototype.Ta = function(a) {
        var b = a.pb
          , c = this.i[b];
        c || (c = this.tileGrid,
        c = this.i[b] = rc(a, void 0, c ? c.eb(c.minZoom) : void 0));
        return c
    }
    ;
    Ox.prototype.Oc = function(a) {
        return a
    }
    ;
    Ox.prototype.be = function(a, b, c) {
        a = Ka(this.Ta(c).eb(a));
        return [Math.round(a[0] * b), Math.round(a[1] * b)]
    }
    ;
    function Px(a) {
        this.l = a.matrixIds;
        hc.call(this, {
            extent: a.extent,
            origin: a.origin,
            origins: a.origins,
            resolutions: a.resolutions,
            tileSize: a.tileSize,
            tileSizes: a.tileSizes,
            sizes: a.sizes
        })
    }
    v(Px, hc);
    Px.prototype.o = function() {
        return this.l
    }
    ;
    function Qx(a, b, c) {
        var d = []
          , e = []
          , f = []
          , g = []
          , h = []
          , l = void 0 !== c ? c : [];
        c = Qb(a.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var m = c.Nc()
          , n = "ne" == c.a.substr(0, 2);
        a.TileMatrix.sort(function(a, b) {
            return b.ScaleDenominator - a.ScaleDenominator
        });
        a.TileMatrix.forEach(function(a) {
            var b;
            0 < l.length ? b = la(l, function(b) {
                return a.Identifier == b.TileMatrix
            }) : b = !0;
            if (b) {
                e.push(a.Identifier);
                b = 2.8E-4 * a.ScaleDenominator / m;
                var c = a.TileWidth
                  , p = a.TileHeight;
                n ? f.push([a.TopLeftCorner[1], a.TopLeftCorner[0]]) : f.push(a.TopLeftCorner);
                d.push(b);
                g.push(c == p ? c : [c, p]);
                h.push([a.MatrixWidth, -a.MatrixHeight])
            }
        });
        return new Px({
            extent: b,
            origins: f,
            resolutions: d,
            matrixIds: e,
            tileSizes: g,
            sizes: h
        })
    }
    ;function Z(a) {
        function b(a) {
            a = "KVP" == d ? bx(a, f) : a.replace(/\{(\w+?)\}/g, function(a, b) {
                return b.toLowerCase()in f ? f[b.toLowerCase()] : a
            });
            return function(b) {
                if (b) {
                    var c = {
                        TileMatrix: e.l[b[0]],
                        TileCol: b[1],
                        TileRow: -b[2] - 1
                    };
                    rb(c, g);
                    b = a;
                    return b = "KVP" == d ? bx(b, c) : b.replace(/\{(\w+?)\}/g, function(a, b) {
                        return c[b]
                    })
                }
            }
        }
        this.ga = void 0 !== a.version ? a.version : "1.0.0";
        this.B = void 0 !== a.format ? a.format : "image/jpeg";
        this.i = a.dimensions ? a.dimensions : {};
        this.C = a.layer;
        this.o = a.matrixSet;
        this.S = a.style;
        var c = a.urls;
        void 0 === c && void 0 !== a.url && (c = Jw(a.url));
        var d = this.U = void 0 !== a.requestEncoding ? a.requestEncoding : "KVP"
          , e = a.tileGrid
          , f = {
            layer: this.C,
            style: this.S,
            tilematrixset: this.o
        };
        "KVP" == d && rb(f, {
            Service: "WMTS",
            Request: "GetTile",
            Version: this.ga,
            Format: this.B
        });
        var g = this.i
          , h = c && 0 < c.length ? Hw(c.map(b)) : Iw;
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: a.tileClass,
            tileGrid: e,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: h,
            urls: c,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !1
        });
        Nw(this, Rx(this))
    }
    v(Z, X);
    k = Z.prototype;
    k.Xk = function() {
        return this.i
    }
    ;
    k.Vo = function() {
        return this.B
    }
    ;
    k.Wo = function() {
        return this.C
    }
    ;
    k.ll = function() {
        return this.o
    }
    ;
    k.wl = function() {
        return this.U
    }
    ;
    k.Xo = function() {
        return this.S
    }
    ;
    k.Dl = function() {
        return this.ga
    }
    ;
    function Rx(a) {
        var b = 0, c = [], d;
        for (d in a.i)
            c[b++] = d + "-" + a.i[d];
        return c.join("/")
    }
    k.Iq = function(a) {
        rb(this.i, a);
        Nw(this, Rx(this))
    }
    ;
    function Sx(a) {
        a = a || {};
        var b = a.size
          , c = b[0]
          , d = b[1]
          , e = []
          , f = 256;
        switch (void 0 !== a.tierSizeCalculation ? a.tierSizeCalculation : Tx) {
        case Tx:
            for (; c > f || d > f; )
                e.push([Math.ceil(c / f), Math.ceil(d / f)]),
                f += f;
            break;
        case Ux:
            for (; c > f || d > f; )
                e.push([Math.ceil(c / f), Math.ceil(d / f)]),
                c >>= 1,
                d >>= 1;
            break;
        default:
            va(!1, 53)
        }
        e.push([1, 1]);
        e.reverse();
        f = [1];
        var g = [0];
        d = 1;
        for (c = e.length; d < c; d++)
            f.push(1 << d),
            g.push(e[d - 1][0] * e[d - 1][1] + g[d - 1]);
        f.reverse();
        b = [0, -b[1], b[0], 0];
        b = new hc({
            extent: b,
            origin: gb(b),
            resolutions: f
        });
        (f = a.url) && -1 == f.indexOf("{TileGroup}") && (f += "{TileGroup}/{z}-{x}-{y}.jpg");
        f = Jw(f);
        f = Hw(f.map(function(a) {
            return function(b) {
                if (b) {
                    var c = b[0]
                      , d = b[1];
                    b = -b[2] - 1;
                    var f = {
                        z: c,
                        x: d,
                        y: b,
                        TileGroup: "TileGroup" + ((d + b * e[c][0] + g[c]) / 256 | 0)
                    };
                    return a.replace(/\{(\w+?)\}/g, function(a, b) {
                        return f[b]
                    })
                }
            }
        }));
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: Vx,
            tileGrid: b,
            tileUrlFunction: f
        })
    }
    v(Sx, X);
    function Vx(a, b, c, d, e) {
        dt.call(this, a, b, c, d, e);
        this.f = null
    }
    v(Vx, dt);
    Vx.prototype.Y = function() {
        if (this.f)
            return this.f;
        var a = dt.prototype.Y.call(this);
        if (2 == this.state) {
            if (256 == a.width && 256 == a.height)
                return this.f = a;
            var b = gd(256, 256);
            b.drawImage(a, 0, 0);
            return this.f = b.canvas
        }
        return a
    }
    ;
    var Tx = "default"
      , Ux = "truncated";
    ua.prototype.code = ua.prototype.code;
    r("ol.Attribution", vc);
    vc.prototype.getHTML = vc.prototype.f;
    r("ol.Collection", Vc);
    Vc.prototype.clear = Vc.prototype.clear;
    Vc.prototype.extend = Vc.prototype.ng;
    Vc.prototype.forEach = Vc.prototype.forEach;
    Vc.prototype.getArray = Vc.prototype.Hm;
    Vc.prototype.item = Vc.prototype.item;
    Vc.prototype.getLength = Vc.prototype.ec;
    Vc.prototype.insertAt = Vc.prototype.Se;
    Vc.prototype.pop = Vc.prototype.pop;
    Vc.prototype.push = Vc.prototype.push;
    Vc.prototype.remove = Vc.prototype.remove;
    Vc.prototype.removeAt = Vc.prototype.Pg;
    Vc.prototype.setAt = Vc.prototype.jq;
    Zc.prototype.element = Zc.prototype.element;
    r("ol.color.asArray", bd);
    r("ol.color.asString", dd);
    r("ol.colorlike.asColorLike", fd);
    r("ol.control.defaults", ud);
    r("ol.coordinate.add", Xe);
    r("ol.coordinate.createStringXY", function(a) {
        return function(b) {
            return hf(b, a)
        }
    });
    r("ol.coordinate.format", af);
    r("ol.coordinate.rotate", cf);
    r("ol.coordinate.toStringHDMS", function(a, b) {
        return a ? $e("NS", a[1], b) + " " + $e("EW", a[0], b) : ""
    });
    r("ol.coordinate.toStringXY", hf);
    r("ol.DeviceOrientation", el);
    el.prototype.getAlpha = el.prototype.Qk;
    el.prototype.getBeta = el.prototype.Tk;
    el.prototype.getGamma = el.prototype.$k;
    el.prototype.getHeading = el.prototype.Im;
    el.prototype.getTracking = el.prototype.bi;
    el.prototype.setTracking = el.prototype.og;
    r("ol.easing.easeIn", nd);
    r("ol.easing.easeOut", od);
    r("ol.easing.inAndOut", pd);
    r("ol.easing.linear", qd);
    r("ol.easing.upAndDown", function(a) {
        return .5 > a ? pd(2 * a) : 1 - pd(2 * (a - .5))
    });
    r("ol.extent.boundingExtent", La);
    r("ol.extent.buffer", Oa);
    r("ol.extent.containsCoordinate", Ra);
    r("ol.extent.containsExtent", Ta);
    r("ol.extent.containsXY", Sa);
    r("ol.extent.createEmpty", Ma);
    r("ol.extent.equals", ab);
    r("ol.extent.extend", bb);
    r("ol.extent.getArea", hb);
    r("ol.extent.getBottomLeft", db);
    r("ol.extent.getBottomRight", eb);
    r("ol.extent.getCenter", lb);
    r("ol.extent.getHeight", kb);
    r("ol.extent.getIntersection", nb);
    r("ol.extent.getSize", function(a) {
        return [a[2] - a[0], a[3] - a[1]]
    });
    r("ol.extent.getTopLeft", gb);
    r("ol.extent.getTopRight", fb);
    r("ol.extent.getWidth", jb);
    r("ol.extent.intersects", ob);
    r("ol.extent.isEmpty", ib);
    r("ol.extent.applyTransform", qb);
    r("ol.Feature", wl);
    wl.prototype.clone = wl.prototype.clone;
    wl.prototype.getGeometry = wl.prototype.V;
    wl.prototype.getId = wl.prototype.Km;
    wl.prototype.getGeometryName = wl.prototype.bl;
    wl.prototype.getStyle = wl.prototype.Lm;
    wl.prototype.getStyleFunction = wl.prototype.bb;
    wl.prototype.setGeometry = wl.prototype.Ra;
    wl.prototype.setStyle = wl.prototype.pg;
    wl.prototype.setId = wl.prototype.kc;
    wl.prototype.setGeometryName = wl.prototype.Wc;
    r("ol.featureloader.xhr", Sl);
    r("ol.Geolocation", Ms);
    Ms.prototype.getAccuracy = Ms.prototype.Ok;
    Ms.prototype.getAccuracyGeometry = Ms.prototype.Pk;
    Ms.prototype.getAltitude = Ms.prototype.Rk;
    Ms.prototype.getAltitudeAccuracy = Ms.prototype.Sk;
    Ms.prototype.getHeading = Ms.prototype.Mm;
    Ms.prototype.getPosition = Ms.prototype.Nm;
    Ms.prototype.getProjection = Ms.prototype.ci;
    Ms.prototype.getSpeed = Ms.prototype.xl;
    Ms.prototype.getTracking = Ms.prototype.di;
    Ms.prototype.getTrackingOptions = Ms.prototype.Ph;
    Ms.prototype.setProjection = Ms.prototype.ei;
    Ms.prototype.setTracking = Ms.prototype.Ve;
    Ms.prototype.setTrackingOptions = Ms.prototype.Gj;
    r("ol.Graticule", Ss);
    Ss.prototype.getMap = Ss.prototype.Qm;
    Ss.prototype.getMeridians = Ss.prototype.ml;
    Ss.prototype.getParallels = Ss.prototype.tl;
    Ss.prototype.setMap = Ss.prototype.setMap;
    r("ol.has.DEVICE_PIXEL_RATIO", Pd);
    r("ol.has.CANVAS", Rd);
    r("ol.has.DEVICE_ORIENTATION", Sd);
    r("ol.has.GEOLOCATION", Td);
    r("ol.has.TOUCH", Ud);
    r("ol.has.WEBGL", Jd);
    Ys.prototype.getImage = Ys.prototype.Y;
    Ys.prototype.load = Ys.prototype.load;
    dt.prototype.getImage = dt.prototype.Y;
    r("ol.inherits", v);
    r("ol.interaction.defaults", rh);
    r("ol.Kinetic", kg);
    r("ol.loadingstrategy.all", ru);
    r("ol.loadingstrategy.bbox", function(a) {
        return [a]
    });
    r("ol.loadingstrategy.tile", function(a) {
        return function(b, c) {
            c = a.uc(c);
            b = kc(a, b, c);
            var d = [];
            c = [c, 0, 0];
            for (c[1] = b.ca; c[1] <= b.da; ++c[1])
                for (c[2] = b.ea; c[2] <= b.ha; ++c[2])
                    d.push(a.Fa(c));
            return d
        }
    });
    r("ol.Map", H);
    H.prototype.addControl = H.prototype.vk;
    H.prototype.addInteraction = H.prototype.wk;
    H.prototype.addLayer = H.prototype.nh;
    H.prototype.addOverlay = H.prototype.oh;
    H.prototype.forEachFeatureAtPixel = H.prototype.Vd;
    H.prototype.getFeaturesAtPixel = H.prototype.Yk;
    H.prototype.forEachLayerAtPixel = H.prototype.Wm;
    H.prototype.hasFeatureAtPixel = H.prototype.lm;
    H.prototype.getEventCoordinate = H.prototype.$f;
    H.prototype.getEventPixel = H.prototype.Ge;
    H.prototype.getTarget = H.prototype.ig;
    H.prototype.getTargetElement = H.prototype.od;
    H.prototype.getCoordinateFromPixel = H.prototype.Xa;
    H.prototype.getControls = H.prototype.Wk;
    H.prototype.getOverlays = H.prototype.rl;
    H.prototype.getOverlayById = H.prototype.ql;
    H.prototype.getInteractions = H.prototype.dl;
    H.prototype.getLayerGroup = H.prototype.Mc;
    H.prototype.getLayers = H.prototype.fi;
    H.prototype.getPixelFromCoordinate = H.prototype.Ka;
    H.prototype.getSize = H.prototype.Mb;
    H.prototype.getView = H.prototype.$;
    H.prototype.getViewport = H.prototype.El;
    H.prototype.renderSync = H.prototype.gq;
    H.prototype.render = H.prototype.render;
    H.prototype.removeControl = H.prototype.Zp;
    H.prototype.removeInteraction = H.prototype.$p;
    H.prototype.removeLayer = H.prototype.bq;
    H.prototype.removeOverlay = H.prototype.cq;
    H.prototype.setLayerGroup = H.prototype.Aj;
    H.prototype.setSize = H.prototype.Yg;
    H.prototype.setTarget = H.prototype.We;
    H.prototype.setView = H.prototype.wq;
    H.prototype.updateSize = H.prototype.Ed;
    Gd.prototype.originalEvent = Gd.prototype.originalEvent;
    Gd.prototype.pixel = Gd.prototype.pixel;
    Gd.prototype.coordinate = Gd.prototype.coordinate;
    Gd.prototype.dragging = Gd.prototype.dragging;
    Fd.prototype.map = Fd.prototype.map;
    Fd.prototype.frameState = Fd.prototype.frameState;
    r("ol.Object", Qc);
    Qc.prototype.get = Qc.prototype.get;
    Qc.prototype.getKeys = Qc.prototype.O;
    Qc.prototype.getProperties = Qc.prototype.N;
    Qc.prototype.set = Qc.prototype.set;
    Qc.prototype.setProperties = Qc.prototype.H;
    Qc.prototype.unset = Qc.prototype.P;
    Uc.prototype.key = Uc.prototype.key;
    Uc.prototype.oldValue = Uc.prototype.oldValue;
    r("ol.Observable", Pc);
    r("ol.Observable.unByKey", function(a) {
        if (Array.isArray(a))
            for (var b = 0, c = a.length; b < c; ++b)
                zc(a[b]);
        else
            zc(a)
    });
    Pc.prototype.changed = Pc.prototype.s;
    Pc.prototype.dispatchEvent = Pc.prototype.b;
    Pc.prototype.getRevision = Pc.prototype.L;
    Pc.prototype.on = Pc.prototype.J;
    Pc.prototype.once = Pc.prototype.once;
    Pc.prototype.un = Pc.prototype.K;
    r("ol.Overlay", Gk);
    Gk.prototype.getElement = Gk.prototype.Xd;
    Gk.prototype.getId = Gk.prototype.Xm;
    Gk.prototype.getMap = Gk.prototype.Xe;
    Gk.prototype.getOffset = Gk.prototype.Lh;
    Gk.prototype.getPosition = Gk.prototype.gi;
    Gk.prototype.getPositioning = Gk.prototype.Mh;
    Gk.prototype.setElement = Gk.prototype.vj;
    Gk.prototype.setMap = Gk.prototype.setMap;
    Gk.prototype.setOffset = Gk.prototype.Bj;
    Gk.prototype.setPosition = Gk.prototype.Ye;
    Gk.prototype.setPositioning = Gk.prototype.Ej;
    r("ol.proj.METERS_PER_UNIT", wb);
    r("ol.proj.setProj4", function(a) {
        xb = a
    });
    r("ol.proj.getPointResolution", Pb);
    r("ol.proj.addEquivalentProjections", Sb);
    r("ol.proj.addProjection", Tb);
    r("ol.proj.addCoordinateTransforms", Yb);
    r("ol.proj.fromLonLat", function(a, b) {
        return cc(a, "EPSG:4326", void 0 !== b ? b : "EPSG:3857")
    });
    r("ol.proj.toLonLat", function(a, b) {
        return cc(a, void 0 !== b ? b : "EPSG:3857", "EPSG:4326")
    });
    r("ol.proj.get", Qb);
    r("ol.proj.equivalent", $b);
    r("ol.proj.getTransform", ac);
    r("ol.proj.transform", cc);
    r("ol.proj.transformExtent", dc);
    r("ol.render.toContext", function(a, b) {
        var c = a.canvas
          , d = b ? b : {};
        b = d.pixelRatio || Pd;
        if (d = d.size)
            c.width = d[0] * b,
            c.height = d[1] * b,
            c.style.width = d[0] + "px",
            c.style.height = d[1] + "px";
        c = [0, 0, c.width, c.height];
        d = Kh(Dh(), b, b);
        return new Zh(a,b,c,d,0)
    });
    r("ol.size.toSize", Ka);
    r("ol.Sphere", vb);
    vb.prototype.geodesicArea = vb.prototype.a;
    vb.prototype.haversineDistance = vb.prototype.b;
    $s.prototype.getTileCoord = $s.prototype.i;
    $s.prototype.load = $s.prototype.load;
    r("ol.tilegrid.createXYZ", sc);
    Mx.prototype.getFormat = Mx.prototype.Zm;
    Mx.prototype.getFeatures = Mx.prototype.Ym;
    Mx.prototype.getProjection = Mx.prototype.$m;
    Mx.prototype.setExtent = Mx.prototype.hi;
    Mx.prototype.setFeatures = Mx.prototype.wj;
    Mx.prototype.setProjection = Mx.prototype.qg;
    Mx.prototype.setLoader = Mx.prototype.Xg;
    r("ol.View", F);
    F.prototype.animate = F.prototype.animate;
    F.prototype.getAnimating = F.prototype.Kc;
    F.prototype.getInteracting = F.prototype.cl;
    F.prototype.cancelAnimations = F.prototype.hd;
    F.prototype.constrainCenter = F.prototype.Gc;
    F.prototype.constrainResolution = F.prototype.constrainResolution;
    F.prototype.constrainRotation = F.prototype.constrainRotation;
    F.prototype.getCenter = F.prototype.xa;
    F.prototype.calculateExtent = F.prototype.gd;
    F.prototype.getMaxResolution = F.prototype.an;
    F.prototype.getMinResolution = F.prototype.cn;
    F.prototype.getMaxZoom = F.prototype.bn;
    F.prototype.setMaxZoom = F.prototype.rq;
    F.prototype.getMinZoom = F.prototype.dn;
    F.prototype.setMinZoom = F.prototype.sq;
    F.prototype.getProjection = F.prototype.en;
    F.prototype.getResolution = F.prototype.Pa;
    F.prototype.getResolutions = F.prototype.fn;
    F.prototype.getResolutionForExtent = F.prototype.Ke;
    F.prototype.getRotation = F.prototype.Qa;
    F.prototype.getZoom = F.prototype.Qh;
    F.prototype.getZoomForResolution = F.prototype.Ne;
    F.prototype.getResolutionForZoom = F.prototype.Oh;
    F.prototype.fit = F.prototype.Xf;
    F.prototype.centerOn = F.prototype.Fk;
    F.prototype.rotate = F.prototype.rotate;
    F.prototype.setCenter = F.prototype.qb;
    F.prototype.setResolution = F.prototype.Yc;
    F.prototype.setRotation = F.prototype.Ze;
    F.prototype.setZoom = F.prototype.zq;
    r("ol.xml.getAllTextContent", Al);
    r("ol.xml.parse", El);
    Qi.prototype.getGL = Qi.prototype.jp;
    Qi.prototype.useProgram = Qi.prototype.Tc;
    r("ol.tilegrid.TileGrid", hc);
    hc.prototype.forEachTileCoord = hc.prototype.Yf;
    hc.prototype.getMaxZoom = hc.prototype.cj;
    hc.prototype.getMinZoom = hc.prototype.dj;
    hc.prototype.getOrigin = hc.prototype.Sc;
    hc.prototype.getResolution = hc.prototype.Ca;
    hc.prototype.getResolutions = hc.prototype.ej;
    hc.prototype.getTileCoordExtent = hc.prototype.Fa;
    hc.prototype.getTileCoordForCoordAndResolution = hc.prototype.Me;
    hc.prototype.getTileCoordForCoordAndZ = hc.prototype.kg;
    hc.prototype.getTileSize = hc.prototype.eb;
    hc.prototype.getZForResolution = hc.prototype.uc;
    r("ol.tilegrid.WMTS", Px);
    Px.prototype.getMatrixIds = Px.prototype.o;
    r("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet", Qx);
    r("ol.style.AtlasManager", ik);
    r("ol.style.Circle", nl);
    nl.prototype.setRadius = nl.prototype.Xc;
    r("ol.style.Fill", pl);
    pl.prototype.clone = pl.prototype.clone;
    pl.prototype.getColor = pl.prototype.f;
    pl.prototype.setColor = pl.prototype.c;
    r("ol.style.Icon", to);
    to.prototype.clone = to.prototype.clone;
    to.prototype.getAnchor = to.prototype.Jc;
    to.prototype.getColor = to.prototype.Yo;
    to.prototype.getImage = to.prototype.Y;
    to.prototype.getOrigin = to.prototype.Rc;
    to.prototype.getSrc = to.prototype.Zo;
    to.prototype.getSize = to.prototype.ic;
    to.prototype.load = to.prototype.load;
    r("ol.style.Image", kl);
    kl.prototype.getOpacity = kl.prototype.jf;
    kl.prototype.getRotateWithView = kl.prototype.kf;
    kl.prototype.getRotation = kl.prototype.lf;
    kl.prototype.getScale = kl.prototype.mf;
    kl.prototype.getSnapToPixel = kl.prototype.Le;
    kl.prototype.setOpacity = kl.prototype.yd;
    kl.prototype.setRotation = kl.prototype.nf;
    kl.prototype.setScale = kl.prototype.zd;
    r("ol.style.RegularShape", ll);
    ll.prototype.clone = ll.prototype.clone;
    ll.prototype.getAnchor = ll.prototype.Jc;
    ll.prototype.getAngle = ll.prototype.Zi;
    ll.prototype.getFill = ll.prototype.Da;
    ll.prototype.getImage = ll.prototype.Y;
    ll.prototype.getOrigin = ll.prototype.Rc;
    ll.prototype.getPoints = ll.prototype.$i;
    ll.prototype.getRadius = ll.prototype.aj;
    ll.prototype.getRadius2 = ll.prototype.Nh;
    ll.prototype.getSize = ll.prototype.ic;
    ll.prototype.getStroke = ll.prototype.Ea;
    r("ol.style.Stroke", zj);
    zj.prototype.clone = zj.prototype.clone;
    zj.prototype.getColor = zj.prototype.$o;
    zj.prototype.getLineCap = zj.prototype.gl;
    zj.prototype.getLineDash = zj.prototype.ap;
    zj.prototype.getLineDashOffset = zj.prototype.hl;
    zj.prototype.getLineJoin = zj.prototype.il;
    zj.prototype.getMiterLimit = zj.prototype.nl;
    zj.prototype.getWidth = zj.prototype.bp;
    zj.prototype.setColor = zj.prototype.cp;
    zj.prototype.setLineCap = zj.prototype.oq;
    zj.prototype.setLineDash = zj.prototype.setLineDash;
    zj.prototype.setLineDashOffset = zj.prototype.pq;
    zj.prototype.setLineJoin = zj.prototype.qq;
    zj.prototype.setMiterLimit = zj.prototype.tq;
    zj.prototype.setWidth = zj.prototype.xq;
    r("ol.style.Style", ql);
    ql.prototype.clone = ql.prototype.clone;
    ql.prototype.getRenderer = ql.prototype.Je;
    ql.prototype.setRenderer = ql.prototype.uq;
    ql.prototype.getGeometry = ql.prototype.V;
    ql.prototype.getGeometryFunction = ql.prototype.al;
    ql.prototype.getFill = ql.prototype.Da;
    ql.prototype.setFill = ql.prototype.zf;
    ql.prototype.getImage = ql.prototype.Y;
    ql.prototype.setImage = ql.prototype.Wg;
    ql.prototype.getStroke = ql.prototype.Ea;
    ql.prototype.setStroke = ql.prototype.Af;
    ql.prototype.getText = ql.prototype.Ja;
    ql.prototype.setText = ql.prototype.Cd;
    ql.prototype.getZIndex = ql.prototype.za;
    ql.prototype.setGeometry = ql.prototype.Ra;
    ql.prototype.setZIndex = ql.prototype.Wb;
    r("ol.style.Text", uo);
    uo.prototype.clone = uo.prototype.clone;
    uo.prototype.getFont = uo.prototype.Zk;
    uo.prototype.getOffsetX = uo.prototype.ol;
    uo.prototype.getOffsetY = uo.prototype.pl;
    uo.prototype.getFill = uo.prototype.Da;
    uo.prototype.getRotateWithView = uo.prototype.ep;
    uo.prototype.getRotation = uo.prototype.fp;
    uo.prototype.getScale = uo.prototype.gp;
    uo.prototype.getStroke = uo.prototype.Ea;
    uo.prototype.getText = uo.prototype.Ja;
    uo.prototype.getTextAlign = uo.prototype.zl;
    uo.prototype.getTextBaseline = uo.prototype.Al;
    uo.prototype.setFont = uo.prototype.xj;
    uo.prototype.setOffsetX = uo.prototype.Cj;
    uo.prototype.setOffsetY = uo.prototype.Dj;
    uo.prototype.setFill = uo.prototype.zf;
    uo.prototype.setRotation = uo.prototype.hp;
    uo.prototype.setScale = uo.prototype.bj;
    uo.prototype.setStroke = uo.prototype.Af;
    uo.prototype.setText = uo.prototype.Cd;
    uo.prototype.setTextAlign = uo.prototype.Fj;
    uo.prototype.setTextBaseline = uo.prototype.vq;
    r("ol.source.BingMaps", Uw);
    r("ol.source.BingMaps.TOS_ATTRIBUTION", Vw);
    Uw.prototype.getApiKey = Uw.prototype.U;
    Uw.prototype.getImagerySet = Uw.prototype.ga;
    r("ol.source.CartoDB", Xw);
    Xw.prototype.getConfig = Xw.prototype.Vk;
    Xw.prototype.updateConfig = Xw.prototype.Hq;
    Xw.prototype.setConfig = Xw.prototype.kq;
    r("ol.source.Cluster", Y);
    Y.prototype.getDistance = Y.prototype.po;
    Y.prototype.getSource = Y.prototype.qo;
    Y.prototype.setDistance = Y.prototype.lq;
    r("ol.source.Image", Zv);
    aw.prototype.image = aw.prototype.image;
    r("ol.source.ImageArcGISRest", cx);
    cx.prototype.getParams = cx.prototype.so;
    cx.prototype.getImageLoadFunction = cx.prototype.ro;
    cx.prototype.getUrl = cx.prototype.to;
    cx.prototype.setImageLoadFunction = cx.prototype.uo;
    cx.prototype.setUrl = cx.prototype.vo;
    cx.prototype.updateParams = cx.prototype.wo;
    r("ol.source.ImageCanvas", fw);
    r("ol.source.ImageMapGuide", dx);
    dx.prototype.getParams = dx.prototype.yo;
    dx.prototype.getImageLoadFunction = dx.prototype.xo;
    dx.prototype.updateParams = dx.prototype.Ao;
    dx.prototype.setImageLoadFunction = dx.prototype.zo;
    r("ol.source.ImageStatic", ex);
    r("ol.source.ImageVector", gw);
    gw.prototype.getSource = gw.prototype.Bo;
    gw.prototype.getStyle = gw.prototype.Co;
    gw.prototype.getStyleFunction = gw.prototype.bb;
    gw.prototype.setStyle = gw.prototype.Si;
    r("ol.source.ImageWMS", fx);
    fx.prototype.getGetFeatureInfoUrl = fx.prototype.Fo;
    fx.prototype.getParams = fx.prototype.Ho;
    fx.prototype.getImageLoadFunction = fx.prototype.Go;
    fx.prototype.getUrl = fx.prototype.Io;
    fx.prototype.setImageLoadFunction = fx.prototype.Jo;
    fx.prototype.setUrl = fx.prototype.Ko;
    fx.prototype.updateParams = fx.prototype.Lo;
    r("ol.source.OSM", jx);
    r("ol.source.OSM.ATTRIBUTION", kx);
    r("ol.source.Raster", lx);
    lx.prototype.setOperation = lx.prototype.v;
    px.prototype.extent = px.prototype.extent;
    px.prototype.resolution = px.prototype.resolution;
    px.prototype.data = px.prototype.data;
    r("ol.source.Source", su);
    su.prototype.getAttributions = su.prototype.Aa;
    su.prototype.getLogo = su.prototype.ya;
    su.prototype.getProjection = su.prototype.Ba;
    su.prototype.getState = su.prototype.getState;
    su.prototype.refresh = su.prototype.ra;
    su.prototype.setAttributions = su.prototype.wa;
    r("ol.source.Stamen", sx);
    r("ol.source.Tile", Mw);
    Mw.prototype.getTileGrid = Mw.prototype.cb;
    Pw.prototype.tile = Pw.prototype.tile;
    r("ol.source.TileArcGISRest", wx);
    wx.prototype.getParams = wx.prototype.B;
    wx.prototype.updateParams = wx.prototype.C;
    r("ol.source.TileDebug", yx);
    r("ol.source.TileImage", X);
    X.prototype.setRenderReprojectionEdges = X.prototype.Nb;
    X.prototype.setTileGridForProjection = X.prototype.Ob;
    r("ol.source.TileJSON", Ax);
    Ax.prototype.getTileJSON = Ax.prototype.Bl;
    r("ol.source.TileUTFGrid", Bx);
    Bx.prototype.getTemplate = Bx.prototype.yl;
    Bx.prototype.forDataAtCoordinateAndResolution = Bx.prototype.Kk;
    r("ol.source.TileWMS", Fx);
    Fx.prototype.getGetFeatureInfoUrl = Fx.prototype.So;
    Fx.prototype.getParams = Fx.prototype.To;
    Fx.prototype.updateParams = Fx.prototype.Uo;
    Qw.prototype.getTileLoadFunction = Qw.prototype.sb;
    Qw.prototype.getTileUrlFunction = Qw.prototype.tb;
    Qw.prototype.getUrls = Qw.prototype.ub;
    Qw.prototype.setTileLoadFunction = Qw.prototype.zb;
    Qw.prototype.setTileUrlFunction = Qw.prototype.hb;
    Qw.prototype.setUrl = Qw.prototype.mb;
    Qw.prototype.setUrls = Qw.prototype.ib;
    r("ol.source.Vector", V);
    V.prototype.addFeature = V.prototype.Bb;
    V.prototype.addFeatures = V.prototype.Ec;
    V.prototype.clear = V.prototype.clear;
    V.prototype.forEachFeature = V.prototype.Ah;
    V.prototype.forEachFeatureInExtent = V.prototype.ac;
    V.prototype.forEachFeatureIntersectingExtent = V.prototype.Bh;
    V.prototype.getFeaturesCollection = V.prototype.Ih;
    V.prototype.getFeatures = V.prototype.ee;
    V.prototype.getFeaturesAtCoordinate = V.prototype.Hh;
    V.prototype.getFeaturesInExtent = V.prototype.ag;
    V.prototype.getClosestFeatureToCoordinate = V.prototype.Dh;
    V.prototype.getExtent = V.prototype.G;
    V.prototype.getFeatureById = V.prototype.Gh;
    V.prototype.getFormat = V.prototype.Wi;
    V.prototype.getUrl = V.prototype.Xi;
    V.prototype.removeFeature = V.prototype.Fb;
    zu.prototype.feature = zu.prototype.feature;
    r("ol.source.VectorTile", Ox);
    r("ol.source.WMTS", Z);
    Z.prototype.getDimensions = Z.prototype.Xk;
    Z.prototype.getFormat = Z.prototype.Vo;
    Z.prototype.getLayer = Z.prototype.Wo;
    Z.prototype.getMatrixSet = Z.prototype.ll;
    Z.prototype.getRequestEncoding = Z.prototype.wl;
    Z.prototype.getStyle = Z.prototype.Xo;
    Z.prototype.getVersion = Z.prototype.Dl;
    Z.prototype.updateDimensions = Z.prototype.Iq;
    r("ol.source.WMTS.optionsFromCapabilities", function(a, b) {
        var c = la(a.Contents.Layer, function(a) {
            return a.Identifier == b.layer
        });
        if (null === c)
            return null;
        var d = a.Contents.TileMatrixSet;
        var e = 1 < c.TileMatrixSetLink.length ? "projection"in b ? pa(c.TileMatrixSetLink, function(a) {
            var c = la(d, function(b) {
                return b.Identifier == a.TileMatrixSet
            }).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3")
              , e = Qb(c)
              , f = Qb(b.projection);
            return e && f ? $b(e, f) : c == b.projection
        }) : pa(c.TileMatrixSetLink, function(a) {
            return a.TileMatrixSet == b.matrixSet
        }) : 0;
        0 > e && (e = 0);
        var f = c.TileMatrixSetLink[e].TileMatrixSet;
        var g = c.TileMatrixSetLink[e].TileMatrixSetLimits;
        var h = c.Format[0];
        "format"in b && (h = b.format);
        e = pa(c.Style, function(a) {
            return "style"in b ? a.Title == b.style : a.isDefault
        });
        0 > e && (e = 0);
        e = c.Style[e].Identifier;
        var l = {};
        "Dimension"in c && c.Dimension.forEach(function(a) {
            var b = a.Identifier
              , c = a.Default;
            void 0 === c && (c = a.Value[0]);
            l[b] = c
        });
        var m = la(a.Contents.TileMatrixSet, function(a) {
            return a.Identifier == f
        });
        var n = "projection"in b ? Qb(b.projection) : Qb(m.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var p = c.WGS84BoundingBox;
        if (void 0 !== p) {
            var q = Qb("EPSG:4326").G();
            q = p[0] == q[0] && p[2] == q[2];
            var t = dc(p, "EPSG:4326", n);
            (p = n.G()) && (Ta(p, t) || (t = void 0))
        }
        g = Qx(m, t, g);
        var u = [];
        m = b.requestEncoding;
        m = void 0 !== m ? m : "";
        if ("OperationsMetadata"in a && "GetTile"in a.OperationsMetadata)
            for (a = a.OperationsMetadata.GetTile.DCP.HTTP.Get,
            t = 0,
            p = a.length; t < p; ++t) {
                var x = la(a[t].Constraint, function(a) {
                    return "GetEncoding" == a.name
                }).AllowedValues.Value;
                "" === m && (m = x[0]);
                if ("KVP" === m)
                    ha(x, "KVP") && u.push(a[t].href);
                else
                    break
            }
        u.length || (m = "REST",
        c.ResourceURL.forEach(function(a) {
            "tile" === a.resourceType && (h = a.format,
            u.push(a.template))
        }));
        return {
            urls: u,
            layer: b.layer,
            matrixSet: f,
            format: h,
            projection: n,
            requestEncoding: m,
            tileGrid: g,
            style: e,
            dimensions: l,
            wrapX: q,
            crossOrigin: b.crossOrigin
        }
    });
    r("ol.source.XYZ", Ww);
    r("ol.source.Zoomify", Sx);
    Th.prototype.vectorContext = Th.prototype.vectorContext;
    Th.prototype.frameState = Th.prototype.frameState;
    Th.prototype.context = Th.prototype.context;
    Th.prototype.glContext = Th.prototype.glContext;
    zq.prototype.get = zq.prototype.get;
    zq.prototype.getExtent = zq.prototype.G;
    zq.prototype.getId = zq.prototype.lo;
    zq.prototype.getGeometry = zq.prototype.V;
    zq.prototype.getProperties = zq.prototype.mo;
    zq.prototype.getType = zq.prototype.T;
    r("ol.render.VectorContext", Yh);
    xk.prototype.setStyle = xk.prototype.wd;
    xk.prototype.drawGeometry = xk.prototype.Cb;
    xk.prototype.drawFeature = xk.prototype.De;
    Zh.prototype.drawCircle = Zh.prototype.$b;
    Zh.prototype.setStyle = Zh.prototype.wd;
    Zh.prototype.drawGeometry = Zh.prototype.Cb;
    Zh.prototype.drawFeature = Zh.prototype.De;
    r("ol.proj.common.add", ec);
    r("ol.proj.Projection", yb);
    yb.prototype.getCode = yb.prototype.Uk;
    yb.prototype.getExtent = yb.prototype.G;
    yb.prototype.getUnits = yb.prototype.jo;
    yb.prototype.getMetersPerUnit = yb.prototype.Nc;
    yb.prototype.getWorldExtent = yb.prototype.Fl;
    yb.prototype.isGlobal = yb.prototype.rm;
    yb.prototype.setGlobal = yb.prototype.nq;
    yb.prototype.setExtent = yb.prototype.ko;
    yb.prototype.setWorldExtent = yb.prototype.yq;
    yb.prototype.setGetPointResolution = yb.prototype.mq;
    r("ol.proj.Units.METERS_PER_UNIT", wb);
    r("ol.layer.Base", sh);
    sh.prototype.getExtent = sh.prototype.G;
    sh.prototype.getMaxResolution = sh.prototype.fc;
    sh.prototype.getMinResolution = sh.prototype.gc;
    sh.prototype.getOpacity = sh.prototype.hc;
    sh.prototype.getVisible = sh.prototype.Sb;
    sh.prototype.getZIndex = sh.prototype.za;
    sh.prototype.setExtent = sh.prototype.xc;
    sh.prototype.setMaxResolution = sh.prototype.Bc;
    sh.prototype.setMinResolution = sh.prototype.Cc;
    sh.prototype.setOpacity = sh.prototype.yc;
    sh.prototype.setVisible = sh.prototype.zc;
    sh.prototype.setZIndex = sh.prototype.Wb;
    r("ol.layer.Group", uh);
    uh.prototype.getLayers = uh.prototype.vd;
    uh.prototype.setLayers = uh.prototype.Hi;
    r("ol.layer.Heatmap", W);
    W.prototype.getBlur = W.prototype.Ch;
    W.prototype.getGradient = W.prototype.Jh;
    W.prototype.getRadius = W.prototype.Ii;
    W.prototype.setBlur = W.prototype.tj;
    W.prototype.setGradient = W.prototype.zj;
    W.prototype.setRadius = W.prototype.Xc;
    r("ol.layer.Image", lw);
    lw.prototype.getSource = lw.prototype.ia;
    r("ol.layer.Layer", wh);
    wh.prototype.getSource = wh.prototype.ia;
    wh.prototype.setMap = wh.prototype.setMap;
    wh.prototype.setSource = wh.prototype.Zc;
    r("ol.layer.Tile", uw);
    uw.prototype.getPreload = uw.prototype.ld;
    uw.prototype.getSource = uw.prototype.ia;
    uw.prototype.setPreload = uw.prototype.Ji;
    uw.prototype.getUseInterimTilesOnError = uw.prototype.pd;
    uw.prototype.setUseInterimTilesOnError = uw.prototype.Ki;
    r("ol.layer.Vector", S);
    S.prototype.getSource = S.prototype.ia;
    S.prototype.getStyle = S.prototype.u;
    S.prototype.getStyleFunction = S.prototype.bb;
    S.prototype.setStyle = S.prototype.i;
    r("ol.layer.VectorTile", Cw);
    Cw.prototype.getPreload = Cw.prototype.ld;
    Cw.prototype.getUseInterimTilesOnError = Cw.prototype.pd;
    Cw.prototype.setPreload = Cw.prototype.Li;
    Cw.prototype.setUseInterimTilesOnError = Cw.prototype.Mi;
    Cw.prototype.getSource = Cw.prototype.ia;
    r("ol.interaction.DoubleClickZoom", rg);
    r("ol.interaction.DoubleClickZoom.handleEvent", sg);
    r("ol.interaction.DragAndDrop", ht);
    r("ol.interaction.DragAndDrop.handleEvent", jf);
    kt.prototype.features = kt.prototype.features;
    kt.prototype.file = kt.prototype.file;
    kt.prototype.projection = kt.prototype.projection;
    r("ol.interaction.DragBox", Sg);
    Sg.prototype.getGeometry = Sg.prototype.V;
    Xg.prototype.coordinate = Xg.prototype.coordinate;
    Xg.prototype.mapBrowserEvent = Xg.prototype.mapBrowserEvent;
    r("ol.interaction.DragPan", Gg);
    r("ol.interaction.DragRotate", Lg);
    r("ol.interaction.DragRotateAndZoom", ot);
    r("ol.interaction.DragZoom", ah);
    r("ol.interaction.Draw", Cu);
    r("ol.interaction.Draw.handleEvent", Eu);
    Cu.prototype.removeLastPoint = Cu.prototype.aq;
    Cu.prototype.finishDrawing = Cu.prototype.Ud;
    Cu.prototype.extend = Cu.prototype.Jn;
    r("ol.interaction.Draw.createRegularPolygon", function(a, b) {
        return function(c, d) {
            var e = c[0];
            c = c[1];
            var f = Math.sqrt(ef(e, c));
            d = d ? d : Zf(new Ns(e), a);
            $f(d, e, f, b ? b : Math.atan((c[1] - e[1]) / (c[0] - e[0])));
            return d
        }
    });
    r("ol.interaction.Draw.createBox", function() {
        return function(a, b) {
            a = La(a);
            b = b || new D(null);
            b.na([[db(a), eb(a), fb(a), gb(a), db(a)]]);
            return b
        }
    });
    Su.prototype.feature = Su.prototype.feature;
    r("ol.interaction.Extent", Tu);
    Tu.prototype.getExtent = Tu.prototype.G;
    Tu.prototype.setExtent = Tu.prototype.g;
    dv.prototype.extent = dv.prototype.extent;
    r("ol.interaction.Interaction", ng);
    ng.prototype.getActive = ng.prototype.c;
    ng.prototype.getMap = ng.prototype.i;
    ng.prototype.setActive = ng.prototype.Ia;
    r("ol.interaction.KeyboardPan", bh);
    r("ol.interaction.KeyboardPan.handleEvent", ch);
    r("ol.interaction.KeyboardZoom", dh);
    r("ol.interaction.KeyboardZoom.handleEvent", eh);
    r("ol.interaction.Modify", ev);
    r("ol.interaction.Modify.handleEvent", hv);
    ev.prototype.removePoint = ev.prototype.rj;
    mv.prototype.features = mv.prototype.features;
    mv.prototype.mapBrowserEvent = mv.prototype.mapBrowserEvent;
    r("ol.interaction.MouseWheelZoom", fh);
    r("ol.interaction.MouseWheelZoom.handleEvent", gh);
    fh.prototype.setMouseAnchor = fh.prototype.U;
    r("ol.interaction.PinchRotate", jh);
    r("ol.interaction.PinchZoom", nh);
    r("ol.interaction.Pointer", Dg);
    r("ol.interaction.Pointer.handleEvent", Eg);
    r("ol.interaction.Select", uv);
    uv.prototype.getFeatures = uv.prototype.Un;
    uv.prototype.getHitTolerance = uv.prototype.Vn;
    uv.prototype.getLayer = uv.prototype.Wn;
    r("ol.interaction.Select.handleEvent", vv);
    uv.prototype.setHitTolerance = uv.prototype.Yn;
    uv.prototype.setMap = uv.prototype.setMap;
    xv.prototype.selected = xv.prototype.selected;
    xv.prototype.deselected = xv.prototype.deselected;
    xv.prototype.mapBrowserEvent = xv.prototype.mapBrowserEvent;
    r("ol.interaction.Snap", zv);
    zv.prototype.addFeature = zv.prototype.Bb;
    zv.prototype.removeFeature = zv.prototype.Fb;
    r("ol.interaction.Translate", Ev);
    Ev.prototype.getHitTolerance = Ev.prototype.C;
    Ev.prototype.setHitTolerance = Ev.prototype.I;
    Kv.prototype.features = Kv.prototype.features;
    Kv.prototype.coordinate = Kv.prototype.coordinate;
    r("ol.geom.Circle", Ns);
    Ns.prototype.clone = Ns.prototype.clone;
    Ns.prototype.getCenter = Ns.prototype.xa;
    Ns.prototype.getRadius = Ns.prototype.ud;
    Ns.prototype.getType = Ns.prototype.T;
    Ns.prototype.intersectsExtent = Ns.prototype.Ya;
    Ns.prototype.setCenter = Ns.prototype.qb;
    Ns.prototype.setCenterAndRadius = Ns.prototype.Vg;
    Ns.prototype.setRadius = Ns.prototype.Xc;
    Ns.prototype.transform = Ns.prototype.wb;
    r("ol.geom.Geometry", lf);
    lf.prototype.getClosestPoint = lf.prototype.Db;
    lf.prototype.intersectsCoordinate = lf.prototype.vb;
    lf.prototype.getExtent = lf.prototype.G;
    lf.prototype.rotate = lf.prototype.rotate;
    lf.prototype.scale = lf.prototype.scale;
    lf.prototype.simplify = lf.prototype.Pb;
    lf.prototype.transform = lf.prototype.wb;
    r("ol.geom.GeometryCollection", Im);
    Im.prototype.clone = Im.prototype.clone;
    Im.prototype.getGeometries = Im.prototype.He;
    Im.prototype.getType = Im.prototype.T;
    Im.prototype.intersectsExtent = Im.prototype.Ya;
    Im.prototype.setGeometries = Im.prototype.yj;
    Im.prototype.applyTransform = Im.prototype.Fc;
    Im.prototype.translate = Im.prototype.translate;
    r("ol.geom.LinearRing", If);
    If.prototype.clone = If.prototype.clone;
    If.prototype.getArea = If.prototype.Fn;
    If.prototype.getCoordinates = If.prototype.X;
    If.prototype.getType = If.prototype.T;
    If.prototype.setCoordinates = If.prototype.na;
    r("ol.geom.LineString", M);
    M.prototype.appendCoordinate = M.prototype.xk;
    M.prototype.clone = M.prototype.clone;
    M.prototype.forEachSegment = M.prototype.Nk;
    M.prototype.getCoordinateAtM = M.prototype.Dn;
    M.prototype.getCoordinates = M.prototype.X;
    M.prototype.getCoordinateAt = M.prototype.Eh;
    M.prototype.getLength = M.prototype.En;
    M.prototype.getType = M.prototype.T;
    M.prototype.intersectsExtent = M.prototype.Ya;
    M.prototype.setCoordinates = M.prototype.na;
    r("ol.geom.MultiLineString", N);
    N.prototype.appendLineString = N.prototype.yk;
    N.prototype.clone = N.prototype.clone;
    N.prototype.getCoordinateAtM = N.prototype.Gn;
    N.prototype.getCoordinates = N.prototype.X;
    N.prototype.getLineString = N.prototype.jl;
    N.prototype.getLineStrings = N.prototype.kd;
    N.prototype.getType = N.prototype.T;
    N.prototype.intersectsExtent = N.prototype.Ya;
    N.prototype.setCoordinates = N.prototype.na;
    r("ol.geom.MultiPoint", O);
    O.prototype.appendPoint = O.prototype.Ak;
    O.prototype.clone = O.prototype.clone;
    O.prototype.getCoordinates = O.prototype.X;
    O.prototype.getPoint = O.prototype.ul;
    O.prototype.getPoints = O.prototype.de;
    O.prototype.getType = O.prototype.T;
    O.prototype.intersectsExtent = O.prototype.Ya;
    O.prototype.setCoordinates = O.prototype.na;
    r("ol.geom.MultiPolygon", P);
    P.prototype.appendPolygon = P.prototype.Bk;
    P.prototype.clone = P.prototype.clone;
    P.prototype.getArea = P.prototype.Hn;
    P.prototype.getCoordinates = P.prototype.X;
    P.prototype.getInteriorPoints = P.prototype.fl;
    P.prototype.getPolygon = P.prototype.vl;
    P.prototype.getPolygons = P.prototype.Zd;
    P.prototype.getType = P.prototype.T;
    P.prototype.intersectsExtent = P.prototype.Ya;
    P.prototype.setCoordinates = P.prototype.na;
    r("ol.geom.Point", C);
    C.prototype.clone = C.prototype.clone;
    C.prototype.getCoordinates = C.prototype.X;
    C.prototype.getType = C.prototype.T;
    C.prototype.intersectsExtent = C.prototype.Ya;
    C.prototype.setCoordinates = C.prototype.na;
    r("ol.geom.Polygon", D);
    D.prototype.appendLinearRing = D.prototype.zk;
    D.prototype.clone = D.prototype.clone;
    D.prototype.getArea = D.prototype.In;
    D.prototype.getCoordinates = D.prototype.X;
    D.prototype.getInteriorPoint = D.prototype.el;
    D.prototype.getLinearRingCount = D.prototype.kl;
    D.prototype.getLinearRing = D.prototype.Kh;
    D.prototype.getLinearRings = D.prototype.Yd;
    D.prototype.getType = D.prototype.T;
    D.prototype.intersectsExtent = D.prototype.Ya;
    D.prototype.setCoordinates = D.prototype.na;
    r("ol.geom.Polygon.circular", Xf);
    r("ol.geom.Polygon.fromExtent", Yf);
    r("ol.geom.Polygon.fromCircle", Zf);
    r("ol.geom.SimpleGeometry", pf);
    pf.prototype.getFirstCoordinate = pf.prototype.bc;
    pf.prototype.getLastCoordinate = pf.prototype.cc;
    pf.prototype.getLayout = pf.prototype.dc;
    pf.prototype.applyTransform = pf.prototype.Fc;
    pf.prototype.translate = pf.prototype.translate;
    r("ol.format.EsriJSON", em);
    em.prototype.readFeature = em.prototype.Ub;
    em.prototype.readFeatures = em.prototype.Oa;
    em.prototype.readGeometry = em.prototype.Vc;
    em.prototype.readProjection = em.prototype.nb;
    em.prototype.writeGeometry = em.prototype.dd;
    em.prototype.writeGeometryObject = em.prototype.te;
    em.prototype.writeFeature = em.prototype.Fd;
    em.prototype.writeFeatureObject = em.prototype.cd;
    em.prototype.writeFeatures = em.prototype.Xb;
    em.prototype.writeFeaturesObject = em.prototype.re;
    r("ol.format.Feature", Tl);
    r("ol.format.filter.and", Gm);
    r("ol.format.filter.or", function(a) {
        var b = [null].concat(Array.prototype.slice.call(arguments));
        return new (Function.prototype.bind.apply(Em, b))
    });
    r("ol.format.filter.not", function(a) {
        return new Cm(a)
    });
    r("ol.format.filter.bbox", Hm);
    r("ol.format.filter.intersects", function(a, b, c) {
        return new wm(a,b,c)
    });
    r("ol.format.filter.within", function(a, b, c) {
        return new Fm(a,b,c)
    });
    r("ol.format.filter.equalTo", function(a, b, c) {
        return new sm(a,b,c)
    });
    r("ol.format.filter.notEqualTo", function(a, b, c) {
        return new Dm(a,b,c)
    });
    r("ol.format.filter.lessThan", function(a, b) {
        return new Am(a,b)
    });
    r("ol.format.filter.lessThanOrEqualTo", function(a, b) {
        return new Bm(a,b)
    });
    r("ol.format.filter.greaterThan", function(a, b) {
        return new tm(a,b)
    });
    r("ol.format.filter.greaterThanOrEqualTo", function(a, b) {
        return new um(a,b)
    });
    r("ol.format.filter.isNull", function(a) {
        return new zm(a)
    });
    r("ol.format.filter.between", function(a, b, c) {
        return new xm(a,b,c)
    });
    r("ol.format.filter.like", function(a, b, c, d, e, f) {
        return new ym(a,b,c,d,e,f)
    });
    r("ol.format.filter.during", function(a, b, c) {
        return new qm(a,b,c)
    });
    r("ol.format.GeoJSON", Mm);
    Mm.prototype.readFeature = Mm.prototype.Ub;
    Mm.prototype.readFeatures = Mm.prototype.Oa;
    Mm.prototype.readGeometry = Mm.prototype.Vc;
    Mm.prototype.readProjection = Mm.prototype.nb;
    Mm.prototype.writeFeature = Mm.prototype.Fd;
    Mm.prototype.writeFeatureObject = Mm.prototype.cd;
    Mm.prototype.writeFeatures = Mm.prototype.Xb;
    Mm.prototype.writeFeaturesObject = Mm.prototype.re;
    Mm.prototype.writeGeometry = Mm.prototype.dd;
    Mm.prototype.writeGeometryObject = Mm.prototype.te;
    r("ol.format.GML", gn);
    gn.prototype.writeFeatures = gn.prototype.Xb;
    gn.prototype.writeFeaturesNode = gn.prototype.Yb;
    r("ol.format.GML2", qn);
    r("ol.format.GML3", gn);
    gn.prototype.writeGeometryNode = gn.prototype.se;
    gn.prototype.writeFeatures = gn.prototype.Xb;
    gn.prototype.writeFeaturesNode = gn.prototype.Yb;
    Um.prototype.readFeatures = Um.prototype.Oa;
    r("ol.format.GPX", Bn);
    Bn.prototype.readFeature = Bn.prototype.Ub;
    Bn.prototype.readFeatures = Bn.prototype.Oa;
    Bn.prototype.readProjection = Bn.prototype.nb;
    Bn.prototype.writeFeatures = Bn.prototype.Xb;
    Bn.prototype.writeFeaturesNode = Bn.prototype.Yb;
    r("ol.format.IGC", mo);
    mo.prototype.readFeature = mo.prototype.Ub;
    mo.prototype.readFeatures = mo.prototype.Oa;
    mo.prototype.readProjection = mo.prototype.nb;
    r("ol.format.KML", vo);
    vo.prototype.readFeature = vo.prototype.Ub;
    vo.prototype.readFeatures = vo.prototype.Oa;
    vo.prototype.readName = vo.prototype.Pp;
    vo.prototype.readNetworkLinks = vo.prototype.Qp;
    vo.prototype.readRegion = vo.prototype.Tp;
    vo.prototype.readRegionFromNode = vo.prototype.wf;
    vo.prototype.readProjection = vo.prototype.nb;
    vo.prototype.writeFeatures = vo.prototype.Xb;
    vo.prototype.writeFeaturesNode = vo.prototype.Yb;
    r("ol.format.MVT", Aq);
    Aq.prototype.getLastExtent = Aq.prototype.eg;
    Aq.prototype.readFeatures = Aq.prototype.Oa;
    Aq.prototype.readProjection = Aq.prototype.nb;
    Aq.prototype.setLayers = Aq.prototype.Cn;
    r("ol.format.OSMXML", Cq);
    Cq.prototype.readFeatures = Cq.prototype.Oa;
    Cq.prototype.readProjection = Cq.prototype.nb;
    r("ol.format.Polyline", br);
    r("ol.format.Polyline.encodeDeltas", cr);
    r("ol.format.Polyline.decodeDeltas", er);
    r("ol.format.Polyline.encodeFloats", dr);
    r("ol.format.Polyline.decodeFloats", fr);
    br.prototype.readFeature = br.prototype.Ub;
    br.prototype.readFeatures = br.prototype.Oa;
    br.prototype.readGeometry = br.prototype.Vc;
    br.prototype.readProjection = br.prototype.nb;
    br.prototype.writeGeometry = br.prototype.dd;
    r("ol.format.TopoJSON", gr);
    gr.prototype.readFeatures = gr.prototype.Oa;
    gr.prototype.readProjection = gr.prototype.nb;
    r("ol.format.WFS", mr);
    mr.prototype.readFeatures = mr.prototype.Oa;
    mr.prototype.readTransactionResponse = mr.prototype.j;
    mr.prototype.readFeatureCollectionMetadata = mr.prototype.g;
    r("ol.format.WFS.writeFilter", function(a) {
        var b = zl("http://www.opengis.net/ogc", "Filter");
        Ql({
            node: b
        }, Br, Ll(a.lc), [a], []);
        return b
    });
    mr.prototype.writeGetFeature = mr.prototype.o;
    mr.prototype.writeTransaction = mr.prototype.v;
    mr.prototype.readProjection = mr.prototype.nb;
    r("ol.format.WKT", Hr);
    Hr.prototype.readFeature = Hr.prototype.Ub;
    Hr.prototype.readFeatures = Hr.prototype.Oa;
    Hr.prototype.readGeometry = Hr.prototype.Vc;
    Hr.prototype.writeFeature = Hr.prototype.Fd;
    Hr.prototype.writeFeatures = Hr.prototype.Xb;
    Hr.prototype.writeGeometry = Hr.prototype.dd;
    r("ol.format.WMSCapabilities", $r);
    $r.prototype.read = $r.prototype.read;
    r("ol.format.WMSGetFeatureInfo", ws);
    ws.prototype.readFeatures = ws.prototype.Oa;
    r("ol.format.WMTSCapabilities", xs);
    xs.prototype.read = xs.prototype.read;
    r("ol.format.filter.And", nm);
    r("ol.format.filter.Bbox", om);
    r("ol.format.filter.Comparison", pm);
    r("ol.format.filter.ComparisonBinary", rm);
    r("ol.format.filter.During", qm);
    r("ol.format.filter.EqualTo", sm);
    r("ol.format.filter.Filter", lm);
    r("ol.format.filter.GreaterThan", tm);
    r("ol.format.filter.GreaterThanOrEqualTo", um);
    r("ol.format.filter.Intersects", wm);
    r("ol.format.filter.IsBetween", xm);
    r("ol.format.filter.IsLike", ym);
    r("ol.format.filter.IsNull", zm);
    r("ol.format.filter.LessThan", Am);
    r("ol.format.filter.LessThanOrEqualTo", Bm);
    r("ol.format.filter.Not", Cm);
    r("ol.format.filter.NotEqualTo", Dm);
    r("ol.format.filter.Or", Em);
    r("ol.format.filter.Spatial", vm);
    r("ol.format.filter.Within", Fm);
    r("ol.events.condition.altKeyOnly", tg);
    r("ol.events.condition.altShiftKeysOnly", ug);
    r("ol.events.condition.always", jf);
    r("ol.events.condition.click", function(a) {
        return "click" == a.type
    });
    r("ol.events.condition.never", kf);
    r("ol.events.condition.pointerMove", wg);
    r("ol.events.condition.singleClick", xg);
    r("ol.events.condition.doubleClick", function(a) {
        return "dblclick" == a.type
    });
    r("ol.events.condition.noModifierKeys", yg);
    r("ol.events.condition.platformModifierKeyOnly", function(a) {
        a = a.originalEvent;
        return !a.altKey && (Od ? a.metaKey : a.ctrlKey) && !a.shiftKey
    });
    r("ol.events.condition.shiftKeyOnly", zg);
    r("ol.events.condition.targetNotEditable", Ag);
    r("ol.events.condition.mouseOnly", Bg);
    r("ol.events.condition.primaryAction", Cg);
    Lc.prototype.type = Lc.prototype.type;
    Lc.prototype.target = Lc.prototype.target;
    Lc.prototype.preventDefault = Lc.prototype.preventDefault;
    Lc.prototype.stopPropagation = Lc.prototype.stopPropagation;
    r("ol.control.Attribution", kd);
    r("ol.control.Attribution.render", ld);
    kd.prototype.getCollapsible = kd.prototype.hn;
    kd.prototype.setCollapsible = kd.prototype.ln;
    kd.prototype.setCollapsed = kd.prototype.kn;
    kd.prototype.getCollapsed = kd.prototype.gn;
    r("ol.control.Control", jd);
    jd.prototype.getMap = jd.prototype.g;
    jd.prototype.setMap = jd.prototype.setMap;
    jd.prototype.setTarget = jd.prototype.i;
    r("ol.control.FullScreen", vd);
    r("ol.control.MousePosition", Ad);
    r("ol.control.MousePosition.render", Bd);
    Ad.prototype.getCoordinateFormat = Ad.prototype.Fh;
    Ad.prototype.getProjection = Ad.prototype.ii;
    Ad.prototype.setCoordinateFormat = Ad.prototype.uj;
    Ad.prototype.setProjection = Ad.prototype.ji;
    r("ol.control.OverviewMap", Pk);
    r("ol.control.OverviewMap.render", Qk);
    Pk.prototype.getCollapsible = Pk.prototype.pn;
    Pk.prototype.setCollapsible = Pk.prototype.sn;
    Pk.prototype.setCollapsed = Pk.prototype.rn;
    Pk.prototype.getCollapsed = Pk.prototype.nn;
    Pk.prototype.getOverviewMap = Pk.prototype.sl;
    r("ol.control.Rotate", rd);
    r("ol.control.Rotate.render", sd);
    r("ol.control.ScaleLine", Uk);
    Uk.prototype.getUnits = Uk.prototype.B;
    r("ol.control.ScaleLine.render", Vk);
    Uk.prototype.setUnits = Uk.prototype.I;
    r("ol.control.Zoom", td);
    r("ol.control.ZoomSlider", Zk);
    r("ol.control.ZoomSlider.render", al);
    r("ol.control.ZoomToExtent", dl);
    Qc.prototype.changed = Qc.prototype.s;
    Qc.prototype.dispatchEvent = Qc.prototype.b;
    Qc.prototype.getRevision = Qc.prototype.L;
    Qc.prototype.on = Qc.prototype.J;
    Qc.prototype.once = Qc.prototype.once;
    Qc.prototype.un = Qc.prototype.K;
    Vc.prototype.get = Vc.prototype.get;
    Vc.prototype.getKeys = Vc.prototype.O;
    Vc.prototype.getProperties = Vc.prototype.N;
    Vc.prototype.set = Vc.prototype.set;
    Vc.prototype.setProperties = Vc.prototype.H;
    Vc.prototype.unset = Vc.prototype.P;
    Vc.prototype.changed = Vc.prototype.s;
    Vc.prototype.dispatchEvent = Vc.prototype.b;
    Vc.prototype.getRevision = Vc.prototype.L;
    Vc.prototype.on = Vc.prototype.J;
    Vc.prototype.once = Vc.prototype.once;
    Vc.prototype.un = Vc.prototype.K;
    Zc.prototype.type = Zc.prototype.type;
    Zc.prototype.target = Zc.prototype.target;
    Zc.prototype.preventDefault = Zc.prototype.preventDefault;
    Zc.prototype.stopPropagation = Zc.prototype.stopPropagation;
    el.prototype.get = el.prototype.get;
    el.prototype.getKeys = el.prototype.O;
    el.prototype.getProperties = el.prototype.N;
    el.prototype.set = el.prototype.set;
    el.prototype.setProperties = el.prototype.H;
    el.prototype.unset = el.prototype.P;
    el.prototype.changed = el.prototype.s;
    el.prototype.dispatchEvent = el.prototype.b;
    el.prototype.getRevision = el.prototype.L;
    el.prototype.on = el.prototype.J;
    el.prototype.once = el.prototype.once;
    el.prototype.un = el.prototype.K;
    wl.prototype.get = wl.prototype.get;
    wl.prototype.getKeys = wl.prototype.O;
    wl.prototype.getProperties = wl.prototype.N;
    wl.prototype.set = wl.prototype.set;
    wl.prototype.setProperties = wl.prototype.H;
    wl.prototype.unset = wl.prototype.P;
    wl.prototype.changed = wl.prototype.s;
    wl.prototype.dispatchEvent = wl.prototype.b;
    wl.prototype.getRevision = wl.prototype.L;
    wl.prototype.on = wl.prototype.J;
    wl.prototype.once = wl.prototype.once;
    wl.prototype.un = wl.prototype.K;
    Ms.prototype.get = Ms.prototype.get;
    Ms.prototype.getKeys = Ms.prototype.O;
    Ms.prototype.getProperties = Ms.prototype.N;
    Ms.prototype.set = Ms.prototype.set;
    Ms.prototype.setProperties = Ms.prototype.H;
    Ms.prototype.unset = Ms.prototype.P;
    Ms.prototype.changed = Ms.prototype.s;
    Ms.prototype.dispatchEvent = Ms.prototype.b;
    Ms.prototype.getRevision = Ms.prototype.L;
    Ms.prototype.on = Ms.prototype.J;
    Ms.prototype.once = Ms.prototype.once;
    Ms.prototype.un = Ms.prototype.K;
    dt.prototype.getTileCoord = dt.prototype.i;
    dt.prototype.load = dt.prototype.load;
    H.prototype.get = H.prototype.get;
    H.prototype.getKeys = H.prototype.O;
    H.prototype.getProperties = H.prototype.N;
    H.prototype.set = H.prototype.set;
    H.prototype.setProperties = H.prototype.H;
    H.prototype.unset = H.prototype.P;
    H.prototype.changed = H.prototype.s;
    H.prototype.dispatchEvent = H.prototype.b;
    H.prototype.getRevision = H.prototype.L;
    H.prototype.on = H.prototype.J;
    H.prototype.once = H.prototype.once;
    H.prototype.un = H.prototype.K;
    Fd.prototype.type = Fd.prototype.type;
    Fd.prototype.target = Fd.prototype.target;
    Fd.prototype.preventDefault = Fd.prototype.preventDefault;
    Fd.prototype.stopPropagation = Fd.prototype.stopPropagation;
    Gd.prototype.map = Gd.prototype.map;
    Gd.prototype.frameState = Gd.prototype.frameState;
    Gd.prototype.type = Gd.prototype.type;
    Gd.prototype.target = Gd.prototype.target;
    Gd.prototype.preventDefault = Gd.prototype.preventDefault;
    Gd.prototype.stopPropagation = Gd.prototype.stopPropagation;
    be.prototype.originalEvent = be.prototype.originalEvent;
    be.prototype.pixel = be.prototype.pixel;
    be.prototype.coordinate = be.prototype.coordinate;
    be.prototype.dragging = be.prototype.dragging;
    be.prototype.preventDefault = be.prototype.preventDefault;
    be.prototype.stopPropagation = be.prototype.stopPropagation;
    be.prototype.map = be.prototype.map;
    be.prototype.frameState = be.prototype.frameState;
    be.prototype.type = be.prototype.type;
    be.prototype.target = be.prototype.target;
    Uc.prototype.type = Uc.prototype.type;
    Uc.prototype.target = Uc.prototype.target;
    Uc.prototype.preventDefault = Uc.prototype.preventDefault;
    Uc.prototype.stopPropagation = Uc.prototype.stopPropagation;
    Gk.prototype.get = Gk.prototype.get;
    Gk.prototype.getKeys = Gk.prototype.O;
    Gk.prototype.getProperties = Gk.prototype.N;
    Gk.prototype.set = Gk.prototype.set;
    Gk.prototype.setProperties = Gk.prototype.H;
    Gk.prototype.unset = Gk.prototype.P;
    Gk.prototype.changed = Gk.prototype.s;
    Gk.prototype.dispatchEvent = Gk.prototype.b;
    Gk.prototype.getRevision = Gk.prototype.L;
    Gk.prototype.on = Gk.prototype.J;
    Gk.prototype.once = Gk.prototype.once;
    Gk.prototype.un = Gk.prototype.K;
    Kx.prototype.getTileCoord = Kx.prototype.i;
    Kx.prototype.load = Kx.prototype.load;
    Mx.prototype.getTileCoord = Mx.prototype.i;
    Mx.prototype.load = Mx.prototype.load;
    F.prototype.get = F.prototype.get;
    F.prototype.getKeys = F.prototype.O;
    F.prototype.getProperties = F.prototype.N;
    F.prototype.set = F.prototype.set;
    F.prototype.setProperties = F.prototype.H;
    F.prototype.unset = F.prototype.P;
    F.prototype.changed = F.prototype.s;
    F.prototype.dispatchEvent = F.prototype.b;
    F.prototype.getRevision = F.prototype.L;
    F.prototype.on = F.prototype.J;
    F.prototype.once = F.prototype.once;
    F.prototype.un = F.prototype.K;
    Px.prototype.forEachTileCoord = Px.prototype.Yf;
    Px.prototype.getMaxZoom = Px.prototype.cj;
    Px.prototype.getMinZoom = Px.prototype.dj;
    Px.prototype.getOrigin = Px.prototype.Sc;
    Px.prototype.getResolution = Px.prototype.Ca;
    Px.prototype.getResolutions = Px.prototype.ej;
    Px.prototype.getTileCoordExtent = Px.prototype.Fa;
    Px.prototype.getTileCoordForCoordAndResolution = Px.prototype.Me;
    Px.prototype.getTileCoordForCoordAndZ = Px.prototype.kg;
    Px.prototype.getTileSize = Px.prototype.eb;
    Px.prototype.getZForResolution = Px.prototype.uc;
    ll.prototype.getOpacity = ll.prototype.jf;
    ll.prototype.getRotateWithView = ll.prototype.kf;
    ll.prototype.getRotation = ll.prototype.lf;
    ll.prototype.getScale = ll.prototype.mf;
    ll.prototype.getSnapToPixel = ll.prototype.Le;
    ll.prototype.setOpacity = ll.prototype.yd;
    ll.prototype.setRotation = ll.prototype.nf;
    ll.prototype.setScale = ll.prototype.zd;
    nl.prototype.clone = nl.prototype.clone;
    nl.prototype.getAngle = nl.prototype.Zi;
    nl.prototype.getFill = nl.prototype.Da;
    nl.prototype.getPoints = nl.prototype.$i;
    nl.prototype.getRadius = nl.prototype.aj;
    nl.prototype.getRadius2 = nl.prototype.Nh;
    nl.prototype.getStroke = nl.prototype.Ea;
    nl.prototype.getOpacity = nl.prototype.jf;
    nl.prototype.getRotateWithView = nl.prototype.kf;
    nl.prototype.getRotation = nl.prototype.lf;
    nl.prototype.getScale = nl.prototype.mf;
    nl.prototype.getSnapToPixel = nl.prototype.Le;
    nl.prototype.setOpacity = nl.prototype.yd;
    nl.prototype.setRotation = nl.prototype.nf;
    nl.prototype.setScale = nl.prototype.zd;
    to.prototype.getOpacity = to.prototype.jf;
    to.prototype.getRotateWithView = to.prototype.kf;
    to.prototype.getRotation = to.prototype.lf;
    to.prototype.getScale = to.prototype.mf;
    to.prototype.getSnapToPixel = to.prototype.Le;
    to.prototype.setOpacity = to.prototype.yd;
    to.prototype.setRotation = to.prototype.nf;
    to.prototype.setScale = to.prototype.zd;
    su.prototype.get = su.prototype.get;
    su.prototype.getKeys = su.prototype.O;
    su.prototype.getProperties = su.prototype.N;
    su.prototype.set = su.prototype.set;
    su.prototype.setProperties = su.prototype.H;
    su.prototype.unset = su.prototype.P;
    su.prototype.changed = su.prototype.s;
    su.prototype.dispatchEvent = su.prototype.b;
    su.prototype.getRevision = su.prototype.L;
    su.prototype.on = su.prototype.J;
    su.prototype.once = su.prototype.once;
    su.prototype.un = su.prototype.K;
    Mw.prototype.getAttributions = Mw.prototype.Aa;
    Mw.prototype.getLogo = Mw.prototype.ya;
    Mw.prototype.getProjection = Mw.prototype.Ba;
    Mw.prototype.getState = Mw.prototype.getState;
    Mw.prototype.refresh = Mw.prototype.ra;
    Mw.prototype.setAttributions = Mw.prototype.wa;
    Mw.prototype.get = Mw.prototype.get;
    Mw.prototype.getKeys = Mw.prototype.O;
    Mw.prototype.getProperties = Mw.prototype.N;
    Mw.prototype.set = Mw.prototype.set;
    Mw.prototype.setProperties = Mw.prototype.H;
    Mw.prototype.unset = Mw.prototype.P;
    Mw.prototype.changed = Mw.prototype.s;
    Mw.prototype.dispatchEvent = Mw.prototype.b;
    Mw.prototype.getRevision = Mw.prototype.L;
    Mw.prototype.on = Mw.prototype.J;
    Mw.prototype.once = Mw.prototype.once;
    Mw.prototype.un = Mw.prototype.K;
    Qw.prototype.getTileGrid = Qw.prototype.cb;
    Qw.prototype.refresh = Qw.prototype.ra;
    Qw.prototype.getAttributions = Qw.prototype.Aa;
    Qw.prototype.getLogo = Qw.prototype.ya;
    Qw.prototype.getProjection = Qw.prototype.Ba;
    Qw.prototype.getState = Qw.prototype.getState;
    Qw.prototype.setAttributions = Qw.prototype.wa;
    Qw.prototype.get = Qw.prototype.get;
    Qw.prototype.getKeys = Qw.prototype.O;
    Qw.prototype.getProperties = Qw.prototype.N;
    Qw.prototype.set = Qw.prototype.set;
    Qw.prototype.setProperties = Qw.prototype.H;
    Qw.prototype.unset = Qw.prototype.P;
    Qw.prototype.changed = Qw.prototype.s;
    Qw.prototype.dispatchEvent = Qw.prototype.b;
    Qw.prototype.getRevision = Qw.prototype.L;
    Qw.prototype.on = Qw.prototype.J;
    Qw.prototype.once = Qw.prototype.once;
    Qw.prototype.un = Qw.prototype.K;
    X.prototype.getTileLoadFunction = X.prototype.sb;
    X.prototype.getTileUrlFunction = X.prototype.tb;
    X.prototype.getUrls = X.prototype.ub;
    X.prototype.setTileLoadFunction = X.prototype.zb;
    X.prototype.setTileUrlFunction = X.prototype.hb;
    X.prototype.setUrl = X.prototype.mb;
    X.prototype.setUrls = X.prototype.ib;
    X.prototype.getTileGrid = X.prototype.cb;
    X.prototype.refresh = X.prototype.ra;
    X.prototype.getAttributions = X.prototype.Aa;
    X.prototype.getLogo = X.prototype.ya;
    X.prototype.getProjection = X.prototype.Ba;
    X.prototype.getState = X.prototype.getState;
    X.prototype.setAttributions = X.prototype.wa;
    X.prototype.get = X.prototype.get;
    X.prototype.getKeys = X.prototype.O;
    X.prototype.getProperties = X.prototype.N;
    X.prototype.set = X.prototype.set;
    X.prototype.setProperties = X.prototype.H;
    X.prototype.unset = X.prototype.P;
    X.prototype.changed = X.prototype.s;
    X.prototype.dispatchEvent = X.prototype.b;
    X.prototype.getRevision = X.prototype.L;
    X.prototype.on = X.prototype.J;
    X.prototype.once = X.prototype.once;
    X.prototype.un = X.prototype.K;
    Uw.prototype.setRenderReprojectionEdges = Uw.prototype.Nb;
    Uw.prototype.setTileGridForProjection = Uw.prototype.Ob;
    Uw.prototype.getTileLoadFunction = Uw.prototype.sb;
    Uw.prototype.getTileUrlFunction = Uw.prototype.tb;
    Uw.prototype.getUrls = Uw.prototype.ub;
    Uw.prototype.setTileLoadFunction = Uw.prototype.zb;
    Uw.prototype.setTileUrlFunction = Uw.prototype.hb;
    Uw.prototype.setUrl = Uw.prototype.mb;
    Uw.prototype.setUrls = Uw.prototype.ib;
    Uw.prototype.getTileGrid = Uw.prototype.cb;
    Uw.prototype.refresh = Uw.prototype.ra;
    Uw.prototype.getAttributions = Uw.prototype.Aa;
    Uw.prototype.getLogo = Uw.prototype.ya;
    Uw.prototype.getProjection = Uw.prototype.Ba;
    Uw.prototype.getState = Uw.prototype.getState;
    Uw.prototype.setAttributions = Uw.prototype.wa;
    Uw.prototype.get = Uw.prototype.get;
    Uw.prototype.getKeys = Uw.prototype.O;
    Uw.prototype.getProperties = Uw.prototype.N;
    Uw.prototype.set = Uw.prototype.set;
    Uw.prototype.setProperties = Uw.prototype.H;
    Uw.prototype.unset = Uw.prototype.P;
    Uw.prototype.changed = Uw.prototype.s;
    Uw.prototype.dispatchEvent = Uw.prototype.b;
    Uw.prototype.getRevision = Uw.prototype.L;
    Uw.prototype.on = Uw.prototype.J;
    Uw.prototype.once = Uw.prototype.once;
    Uw.prototype.un = Uw.prototype.K;
    Ww.prototype.setRenderReprojectionEdges = Ww.prototype.Nb;
    Ww.prototype.setTileGridForProjection = Ww.prototype.Ob;
    Ww.prototype.getTileLoadFunction = Ww.prototype.sb;
    Ww.prototype.getTileUrlFunction = Ww.prototype.tb;
    Ww.prototype.getUrls = Ww.prototype.ub;
    Ww.prototype.setTileLoadFunction = Ww.prototype.zb;
    Ww.prototype.setTileUrlFunction = Ww.prototype.hb;
    Ww.prototype.setUrl = Ww.prototype.mb;
    Ww.prototype.setUrls = Ww.prototype.ib;
    Ww.prototype.getTileGrid = Ww.prototype.cb;
    Ww.prototype.refresh = Ww.prototype.ra;
    Ww.prototype.getAttributions = Ww.prototype.Aa;
    Ww.prototype.getLogo = Ww.prototype.ya;
    Ww.prototype.getProjection = Ww.prototype.Ba;
    Ww.prototype.getState = Ww.prototype.getState;
    Ww.prototype.setAttributions = Ww.prototype.wa;
    Ww.prototype.get = Ww.prototype.get;
    Ww.prototype.getKeys = Ww.prototype.O;
    Ww.prototype.getProperties = Ww.prototype.N;
    Ww.prototype.set = Ww.prototype.set;
    Ww.prototype.setProperties = Ww.prototype.H;
    Ww.prototype.unset = Ww.prototype.P;
    Ww.prototype.changed = Ww.prototype.s;
    Ww.prototype.dispatchEvent = Ww.prototype.b;
    Ww.prototype.getRevision = Ww.prototype.L;
    Ww.prototype.on = Ww.prototype.J;
    Ww.prototype.once = Ww.prototype.once;
    Ww.prototype.un = Ww.prototype.K;
    Xw.prototype.setRenderReprojectionEdges = Xw.prototype.Nb;
    Xw.prototype.setTileGridForProjection = Xw.prototype.Ob;
    Xw.prototype.getTileLoadFunction = Xw.prototype.sb;
    Xw.prototype.getTileUrlFunction = Xw.prototype.tb;
    Xw.prototype.getUrls = Xw.prototype.ub;
    Xw.prototype.setTileLoadFunction = Xw.prototype.zb;
    Xw.prototype.setTileUrlFunction = Xw.prototype.hb;
    Xw.prototype.setUrl = Xw.prototype.mb;
    Xw.prototype.setUrls = Xw.prototype.ib;
    Xw.prototype.getTileGrid = Xw.prototype.cb;
    Xw.prototype.refresh = Xw.prototype.ra;
    Xw.prototype.getAttributions = Xw.prototype.Aa;
    Xw.prototype.getLogo = Xw.prototype.ya;
    Xw.prototype.getProjection = Xw.prototype.Ba;
    Xw.prototype.getState = Xw.prototype.getState;
    Xw.prototype.setAttributions = Xw.prototype.wa;
    Xw.prototype.get = Xw.prototype.get;
    Xw.prototype.getKeys = Xw.prototype.O;
    Xw.prototype.getProperties = Xw.prototype.N;
    Xw.prototype.set = Xw.prototype.set;
    Xw.prototype.setProperties = Xw.prototype.H;
    Xw.prototype.unset = Xw.prototype.P;
    Xw.prototype.changed = Xw.prototype.s;
    Xw.prototype.dispatchEvent = Xw.prototype.b;
    Xw.prototype.getRevision = Xw.prototype.L;
    Xw.prototype.on = Xw.prototype.J;
    Xw.prototype.once = Xw.prototype.once;
    Xw.prototype.un = Xw.prototype.K;
    V.prototype.getAttributions = V.prototype.Aa;
    V.prototype.getLogo = V.prototype.ya;
    V.prototype.getProjection = V.prototype.Ba;
    V.prototype.getState = V.prototype.getState;
    V.prototype.refresh = V.prototype.ra;
    V.prototype.setAttributions = V.prototype.wa;
    V.prototype.get = V.prototype.get;
    V.prototype.getKeys = V.prototype.O;
    V.prototype.getProperties = V.prototype.N;
    V.prototype.set = V.prototype.set;
    V.prototype.setProperties = V.prototype.H;
    V.prototype.unset = V.prototype.P;
    V.prototype.changed = V.prototype.s;
    V.prototype.dispatchEvent = V.prototype.b;
    V.prototype.getRevision = V.prototype.L;
    V.prototype.on = V.prototype.J;
    V.prototype.once = V.prototype.once;
    V.prototype.un = V.prototype.K;
    Y.prototype.addFeature = Y.prototype.Bb;
    Y.prototype.addFeatures = Y.prototype.Ec;
    Y.prototype.clear = Y.prototype.clear;
    Y.prototype.forEachFeature = Y.prototype.Ah;
    Y.prototype.forEachFeatureInExtent = Y.prototype.ac;
    Y.prototype.forEachFeatureIntersectingExtent = Y.prototype.Bh;
    Y.prototype.getFeaturesCollection = Y.prototype.Ih;
    Y.prototype.getFeatures = Y.prototype.ee;
    Y.prototype.getFeaturesAtCoordinate = Y.prototype.Hh;
    Y.prototype.getFeaturesInExtent = Y.prototype.ag;
    Y.prototype.getClosestFeatureToCoordinate = Y.prototype.Dh;
    Y.prototype.getExtent = Y.prototype.G;
    Y.prototype.getFeatureById = Y.prototype.Gh;
    Y.prototype.getFormat = Y.prototype.Wi;
    Y.prototype.getUrl = Y.prototype.Xi;
    Y.prototype.removeFeature = Y.prototype.Fb;
    Y.prototype.getAttributions = Y.prototype.Aa;
    Y.prototype.getLogo = Y.prototype.ya;
    Y.prototype.getProjection = Y.prototype.Ba;
    Y.prototype.getState = Y.prototype.getState;
    Y.prototype.refresh = Y.prototype.ra;
    Y.prototype.setAttributions = Y.prototype.wa;
    Y.prototype.get = Y.prototype.get;
    Y.prototype.getKeys = Y.prototype.O;
    Y.prototype.getProperties = Y.prototype.N;
    Y.prototype.set = Y.prototype.set;
    Y.prototype.setProperties = Y.prototype.H;
    Y.prototype.unset = Y.prototype.P;
    Y.prototype.changed = Y.prototype.s;
    Y.prototype.dispatchEvent = Y.prototype.b;
    Y.prototype.getRevision = Y.prototype.L;
    Y.prototype.on = Y.prototype.J;
    Y.prototype.once = Y.prototype.once;
    Y.prototype.un = Y.prototype.K;
    Zv.prototype.getAttributions = Zv.prototype.Aa;
    Zv.prototype.getLogo = Zv.prototype.ya;
    Zv.prototype.getProjection = Zv.prototype.Ba;
    Zv.prototype.getState = Zv.prototype.getState;
    Zv.prototype.refresh = Zv.prototype.ra;
    Zv.prototype.setAttributions = Zv.prototype.wa;
    Zv.prototype.get = Zv.prototype.get;
    Zv.prototype.getKeys = Zv.prototype.O;
    Zv.prototype.getProperties = Zv.prototype.N;
    Zv.prototype.set = Zv.prototype.set;
    Zv.prototype.setProperties = Zv.prototype.H;
    Zv.prototype.unset = Zv.prototype.P;
    Zv.prototype.changed = Zv.prototype.s;
    Zv.prototype.dispatchEvent = Zv.prototype.b;
    Zv.prototype.getRevision = Zv.prototype.L;
    Zv.prototype.on = Zv.prototype.J;
    Zv.prototype.once = Zv.prototype.once;
    Zv.prototype.un = Zv.prototype.K;
    aw.prototype.type = aw.prototype.type;
    aw.prototype.target = aw.prototype.target;
    aw.prototype.preventDefault = aw.prototype.preventDefault;
    aw.prototype.stopPropagation = aw.prototype.stopPropagation;
    cx.prototype.getAttributions = cx.prototype.Aa;
    cx.prototype.getLogo = cx.prototype.ya;
    cx.prototype.getProjection = cx.prototype.Ba;
    cx.prototype.getState = cx.prototype.getState;
    cx.prototype.refresh = cx.prototype.ra;
    cx.prototype.setAttributions = cx.prototype.wa;
    cx.prototype.get = cx.prototype.get;
    cx.prototype.getKeys = cx.prototype.O;
    cx.prototype.getProperties = cx.prototype.N;
    cx.prototype.set = cx.prototype.set;
    cx.prototype.setProperties = cx.prototype.H;
    cx.prototype.unset = cx.prototype.P;
    cx.prototype.changed = cx.prototype.s;
    cx.prototype.dispatchEvent = cx.prototype.b;
    cx.prototype.getRevision = cx.prototype.L;
    cx.prototype.on = cx.prototype.J;
    cx.prototype.once = cx.prototype.once;
    cx.prototype.un = cx.prototype.K;
    fw.prototype.getAttributions = fw.prototype.Aa;
    fw.prototype.getLogo = fw.prototype.ya;
    fw.prototype.getProjection = fw.prototype.Ba;
    fw.prototype.getState = fw.prototype.getState;
    fw.prototype.refresh = fw.prototype.ra;
    fw.prototype.setAttributions = fw.prototype.wa;
    fw.prototype.get = fw.prototype.get;
    fw.prototype.getKeys = fw.prototype.O;
    fw.prototype.getProperties = fw.prototype.N;
    fw.prototype.set = fw.prototype.set;
    fw.prototype.setProperties = fw.prototype.H;
    fw.prototype.unset = fw.prototype.P;
    fw.prototype.changed = fw.prototype.s;
    fw.prototype.dispatchEvent = fw.prototype.b;
    fw.prototype.getRevision = fw.prototype.L;
    fw.prototype.on = fw.prototype.J;
    fw.prototype.once = fw.prototype.once;
    fw.prototype.un = fw.prototype.K;
    dx.prototype.getAttributions = dx.prototype.Aa;
    dx.prototype.getLogo = dx.prototype.ya;
    dx.prototype.getProjection = dx.prototype.Ba;
    dx.prototype.getState = dx.prototype.getState;
    dx.prototype.refresh = dx.prototype.ra;
    dx.prototype.setAttributions = dx.prototype.wa;
    dx.prototype.get = dx.prototype.get;
    dx.prototype.getKeys = dx.prototype.O;
    dx.prototype.getProperties = dx.prototype.N;
    dx.prototype.set = dx.prototype.set;
    dx.prototype.setProperties = dx.prototype.H;
    dx.prototype.unset = dx.prototype.P;
    dx.prototype.changed = dx.prototype.s;
    dx.prototype.dispatchEvent = dx.prototype.b;
    dx.prototype.getRevision = dx.prototype.L;
    dx.prototype.on = dx.prototype.J;
    dx.prototype.once = dx.prototype.once;
    dx.prototype.un = dx.prototype.K;
    ex.prototype.getAttributions = ex.prototype.Aa;
    ex.prototype.getLogo = ex.prototype.ya;
    ex.prototype.getProjection = ex.prototype.Ba;
    ex.prototype.getState = ex.prototype.getState;
    ex.prototype.refresh = ex.prototype.ra;
    ex.prototype.setAttributions = ex.prototype.wa;
    ex.prototype.get = ex.prototype.get;
    ex.prototype.getKeys = ex.prototype.O;
    ex.prototype.getProperties = ex.prototype.N;
    ex.prototype.set = ex.prototype.set;
    ex.prototype.setProperties = ex.prototype.H;
    ex.prototype.unset = ex.prototype.P;
    ex.prototype.changed = ex.prototype.s;
    ex.prototype.dispatchEvent = ex.prototype.b;
    ex.prototype.getRevision = ex.prototype.L;
    ex.prototype.on = ex.prototype.J;
    ex.prototype.once = ex.prototype.once;
    ex.prototype.un = ex.prototype.K;
    gw.prototype.getAttributions = gw.prototype.Aa;
    gw.prototype.getLogo = gw.prototype.ya;
    gw.prototype.getProjection = gw.prototype.Ba;
    gw.prototype.getState = gw.prototype.getState;
    gw.prototype.refresh = gw.prototype.ra;
    gw.prototype.setAttributions = gw.prototype.wa;
    gw.prototype.get = gw.prototype.get;
    gw.prototype.getKeys = gw.prototype.O;
    gw.prototype.getProperties = gw.prototype.N;
    gw.prototype.set = gw.prototype.set;
    gw.prototype.setProperties = gw.prototype.H;
    gw.prototype.unset = gw.prototype.P;
    gw.prototype.changed = gw.prototype.s;
    gw.prototype.dispatchEvent = gw.prototype.b;
    gw.prototype.getRevision = gw.prototype.L;
    gw.prototype.on = gw.prototype.J;
    gw.prototype.once = gw.prototype.once;
    gw.prototype.un = gw.prototype.K;
    fx.prototype.getAttributions = fx.prototype.Aa;
    fx.prototype.getLogo = fx.prototype.ya;
    fx.prototype.getProjection = fx.prototype.Ba;
    fx.prototype.getState = fx.prototype.getState;
    fx.prototype.refresh = fx.prototype.ra;
    fx.prototype.setAttributions = fx.prototype.wa;
    fx.prototype.get = fx.prototype.get;
    fx.prototype.getKeys = fx.prototype.O;
    fx.prototype.getProperties = fx.prototype.N;
    fx.prototype.set = fx.prototype.set;
    fx.prototype.setProperties = fx.prototype.H;
    fx.prototype.unset = fx.prototype.P;
    fx.prototype.changed = fx.prototype.s;
    fx.prototype.dispatchEvent = fx.prototype.b;
    fx.prototype.getRevision = fx.prototype.L;
    fx.prototype.on = fx.prototype.J;
    fx.prototype.once = fx.prototype.once;
    fx.prototype.un = fx.prototype.K;
    jx.prototype.setRenderReprojectionEdges = jx.prototype.Nb;
    jx.prototype.setTileGridForProjection = jx.prototype.Ob;
    jx.prototype.getTileLoadFunction = jx.prototype.sb;
    jx.prototype.getTileUrlFunction = jx.prototype.tb;
    jx.prototype.getUrls = jx.prototype.ub;
    jx.prototype.setTileLoadFunction = jx.prototype.zb;
    jx.prototype.setTileUrlFunction = jx.prototype.hb;
    jx.prototype.setUrl = jx.prototype.mb;
    jx.prototype.setUrls = jx.prototype.ib;
    jx.prototype.getTileGrid = jx.prototype.cb;
    jx.prototype.refresh = jx.prototype.ra;
    jx.prototype.getAttributions = jx.prototype.Aa;
    jx.prototype.getLogo = jx.prototype.ya;
    jx.prototype.getProjection = jx.prototype.Ba;
    jx.prototype.getState = jx.prototype.getState;
    jx.prototype.setAttributions = jx.prototype.wa;
    jx.prototype.get = jx.prototype.get;
    jx.prototype.getKeys = jx.prototype.O;
    jx.prototype.getProperties = jx.prototype.N;
    jx.prototype.set = jx.prototype.set;
    jx.prototype.setProperties = jx.prototype.H;
    jx.prototype.unset = jx.prototype.P;
    jx.prototype.changed = jx.prototype.s;
    jx.prototype.dispatchEvent = jx.prototype.b;
    jx.prototype.getRevision = jx.prototype.L;
    jx.prototype.on = jx.prototype.J;
    jx.prototype.once = jx.prototype.once;
    jx.prototype.un = jx.prototype.K;
    lx.prototype.getAttributions = lx.prototype.Aa;
    lx.prototype.getLogo = lx.prototype.ya;
    lx.prototype.getProjection = lx.prototype.Ba;
    lx.prototype.getState = lx.prototype.getState;
    lx.prototype.refresh = lx.prototype.ra;
    lx.prototype.setAttributions = lx.prototype.wa;
    lx.prototype.get = lx.prototype.get;
    lx.prototype.getKeys = lx.prototype.O;
    lx.prototype.getProperties = lx.prototype.N;
    lx.prototype.set = lx.prototype.set;
    lx.prototype.setProperties = lx.prototype.H;
    lx.prototype.unset = lx.prototype.P;
    lx.prototype.changed = lx.prototype.s;
    lx.prototype.dispatchEvent = lx.prototype.b;
    lx.prototype.getRevision = lx.prototype.L;
    lx.prototype.on = lx.prototype.J;
    lx.prototype.once = lx.prototype.once;
    lx.prototype.un = lx.prototype.K;
    px.prototype.type = px.prototype.type;
    px.prototype.target = px.prototype.target;
    px.prototype.preventDefault = px.prototype.preventDefault;
    px.prototype.stopPropagation = px.prototype.stopPropagation;
    sx.prototype.setRenderReprojectionEdges = sx.prototype.Nb;
    sx.prototype.setTileGridForProjection = sx.prototype.Ob;
    sx.prototype.getTileLoadFunction = sx.prototype.sb;
    sx.prototype.getTileUrlFunction = sx.prototype.tb;
    sx.prototype.getUrls = sx.prototype.ub;
    sx.prototype.setTileLoadFunction = sx.prototype.zb;
    sx.prototype.setTileUrlFunction = sx.prototype.hb;
    sx.prototype.setUrl = sx.prototype.mb;
    sx.prototype.setUrls = sx.prototype.ib;
    sx.prototype.getTileGrid = sx.prototype.cb;
    sx.prototype.refresh = sx.prototype.ra;
    sx.prototype.getAttributions = sx.prototype.Aa;
    sx.prototype.getLogo = sx.prototype.ya;
    sx.prototype.getProjection = sx.prototype.Ba;
    sx.prototype.getState = sx.prototype.getState;
    sx.prototype.setAttributions = sx.prototype.wa;
    sx.prototype.get = sx.prototype.get;
    sx.prototype.getKeys = sx.prototype.O;
    sx.prototype.getProperties = sx.prototype.N;
    sx.prototype.set = sx.prototype.set;
    sx.prototype.setProperties = sx.prototype.H;
    sx.prototype.unset = sx.prototype.P;
    sx.prototype.changed = sx.prototype.s;
    sx.prototype.dispatchEvent = sx.prototype.b;
    sx.prototype.getRevision = sx.prototype.L;
    sx.prototype.on = sx.prototype.J;
    sx.prototype.once = sx.prototype.once;
    sx.prototype.un = sx.prototype.K;
    Pw.prototype.type = Pw.prototype.type;
    Pw.prototype.target = Pw.prototype.target;
    Pw.prototype.preventDefault = Pw.prototype.preventDefault;
    Pw.prototype.stopPropagation = Pw.prototype.stopPropagation;
    wx.prototype.setRenderReprojectionEdges = wx.prototype.Nb;
    wx.prototype.setTileGridForProjection = wx.prototype.Ob;
    wx.prototype.getTileLoadFunction = wx.prototype.sb;
    wx.prototype.getTileUrlFunction = wx.prototype.tb;
    wx.prototype.getUrls = wx.prototype.ub;
    wx.prototype.setTileLoadFunction = wx.prototype.zb;
    wx.prototype.setTileUrlFunction = wx.prototype.hb;
    wx.prototype.setUrl = wx.prototype.mb;
    wx.prototype.setUrls = wx.prototype.ib;
    wx.prototype.getTileGrid = wx.prototype.cb;
    wx.prototype.refresh = wx.prototype.ra;
    wx.prototype.getAttributions = wx.prototype.Aa;
    wx.prototype.getLogo = wx.prototype.ya;
    wx.prototype.getProjection = wx.prototype.Ba;
    wx.prototype.getState = wx.prototype.getState;
    wx.prototype.setAttributions = wx.prototype.wa;
    wx.prototype.get = wx.prototype.get;
    wx.prototype.getKeys = wx.prototype.O;
    wx.prototype.getProperties = wx.prototype.N;
    wx.prototype.set = wx.prototype.set;
    wx.prototype.setProperties = wx.prototype.H;
    wx.prototype.unset = wx.prototype.P;
    wx.prototype.changed = wx.prototype.s;
    wx.prototype.dispatchEvent = wx.prototype.b;
    wx.prototype.getRevision = wx.prototype.L;
    wx.prototype.on = wx.prototype.J;
    wx.prototype.once = wx.prototype.once;
    wx.prototype.un = wx.prototype.K;
    yx.prototype.getTileGrid = yx.prototype.cb;
    yx.prototype.refresh = yx.prototype.ra;
    yx.prototype.getAttributions = yx.prototype.Aa;
    yx.prototype.getLogo = yx.prototype.ya;
    yx.prototype.getProjection = yx.prototype.Ba;
    yx.prototype.getState = yx.prototype.getState;
    yx.prototype.setAttributions = yx.prototype.wa;
    yx.prototype.get = yx.prototype.get;
    yx.prototype.getKeys = yx.prototype.O;
    yx.prototype.getProperties = yx.prototype.N;
    yx.prototype.set = yx.prototype.set;
    yx.prototype.setProperties = yx.prototype.H;
    yx.prototype.unset = yx.prototype.P;
    yx.prototype.changed = yx.prototype.s;
    yx.prototype.dispatchEvent = yx.prototype.b;
    yx.prototype.getRevision = yx.prototype.L;
    yx.prototype.on = yx.prototype.J;
    yx.prototype.once = yx.prototype.once;
    yx.prototype.un = yx.prototype.K;
    Ax.prototype.setRenderReprojectionEdges = Ax.prototype.Nb;
    Ax.prototype.setTileGridForProjection = Ax.prototype.Ob;
    Ax.prototype.getTileLoadFunction = Ax.prototype.sb;
    Ax.prototype.getTileUrlFunction = Ax.prototype.tb;
    Ax.prototype.getUrls = Ax.prototype.ub;
    Ax.prototype.setTileLoadFunction = Ax.prototype.zb;
    Ax.prototype.setTileUrlFunction = Ax.prototype.hb;
    Ax.prototype.setUrl = Ax.prototype.mb;
    Ax.prototype.setUrls = Ax.prototype.ib;
    Ax.prototype.getTileGrid = Ax.prototype.cb;
    Ax.prototype.refresh = Ax.prototype.ra;
    Ax.prototype.getAttributions = Ax.prototype.Aa;
    Ax.prototype.getLogo = Ax.prototype.ya;
    Ax.prototype.getProjection = Ax.prototype.Ba;
    Ax.prototype.getState = Ax.prototype.getState;
    Ax.prototype.setAttributions = Ax.prototype.wa;
    Ax.prototype.get = Ax.prototype.get;
    Ax.prototype.getKeys = Ax.prototype.O;
    Ax.prototype.getProperties = Ax.prototype.N;
    Ax.prototype.set = Ax.prototype.set;
    Ax.prototype.setProperties = Ax.prototype.H;
    Ax.prototype.unset = Ax.prototype.P;
    Ax.prototype.changed = Ax.prototype.s;
    Ax.prototype.dispatchEvent = Ax.prototype.b;
    Ax.prototype.getRevision = Ax.prototype.L;
    Ax.prototype.on = Ax.prototype.J;
    Ax.prototype.once = Ax.prototype.once;
    Ax.prototype.un = Ax.prototype.K;
    Bx.prototype.getTileGrid = Bx.prototype.cb;
    Bx.prototype.refresh = Bx.prototype.ra;
    Bx.prototype.getAttributions = Bx.prototype.Aa;
    Bx.prototype.getLogo = Bx.prototype.ya;
    Bx.prototype.getProjection = Bx.prototype.Ba;
    Bx.prototype.getState = Bx.prototype.getState;
    Bx.prototype.setAttributions = Bx.prototype.wa;
    Bx.prototype.get = Bx.prototype.get;
    Bx.prototype.getKeys = Bx.prototype.O;
    Bx.prototype.getProperties = Bx.prototype.N;
    Bx.prototype.set = Bx.prototype.set;
    Bx.prototype.setProperties = Bx.prototype.H;
    Bx.prototype.unset = Bx.prototype.P;
    Bx.prototype.changed = Bx.prototype.s;
    Bx.prototype.dispatchEvent = Bx.prototype.b;
    Bx.prototype.getRevision = Bx.prototype.L;
    Bx.prototype.on = Bx.prototype.J;
    Bx.prototype.once = Bx.prototype.once;
    Bx.prototype.un = Bx.prototype.K;
    Fx.prototype.setRenderReprojectionEdges = Fx.prototype.Nb;
    Fx.prototype.setTileGridForProjection = Fx.prototype.Ob;
    Fx.prototype.getTileLoadFunction = Fx.prototype.sb;
    Fx.prototype.getTileUrlFunction = Fx.prototype.tb;
    Fx.prototype.getUrls = Fx.prototype.ub;
    Fx.prototype.setTileLoadFunction = Fx.prototype.zb;
    Fx.prototype.setTileUrlFunction = Fx.prototype.hb;
    Fx.prototype.setUrl = Fx.prototype.mb;
    Fx.prototype.setUrls = Fx.prototype.ib;
    Fx.prototype.getTileGrid = Fx.prototype.cb;
    Fx.prototype.refresh = Fx.prototype.ra;
    Fx.prototype.getAttributions = Fx.prototype.Aa;
    Fx.prototype.getLogo = Fx.prototype.ya;
    Fx.prototype.getProjection = Fx.prototype.Ba;
    Fx.prototype.getState = Fx.prototype.getState;
    Fx.prototype.setAttributions = Fx.prototype.wa;
    Fx.prototype.get = Fx.prototype.get;
    Fx.prototype.getKeys = Fx.prototype.O;
    Fx.prototype.getProperties = Fx.prototype.N;
    Fx.prototype.set = Fx.prototype.set;
    Fx.prototype.setProperties = Fx.prototype.H;
    Fx.prototype.unset = Fx.prototype.P;
    Fx.prototype.changed = Fx.prototype.s;
    Fx.prototype.dispatchEvent = Fx.prototype.b;
    Fx.prototype.getRevision = Fx.prototype.L;
    Fx.prototype.on = Fx.prototype.J;
    Fx.prototype.once = Fx.prototype.once;
    Fx.prototype.un = Fx.prototype.K;
    zu.prototype.type = zu.prototype.type;
    zu.prototype.target = zu.prototype.target;
    zu.prototype.preventDefault = zu.prototype.preventDefault;
    zu.prototype.stopPropagation = zu.prototype.stopPropagation;
    Ox.prototype.getTileLoadFunction = Ox.prototype.sb;
    Ox.prototype.getTileUrlFunction = Ox.prototype.tb;
    Ox.prototype.getUrls = Ox.prototype.ub;
    Ox.prototype.setTileLoadFunction = Ox.prototype.zb;
    Ox.prototype.setTileUrlFunction = Ox.prototype.hb;
    Ox.prototype.setUrl = Ox.prototype.mb;
    Ox.prototype.setUrls = Ox.prototype.ib;
    Ox.prototype.getTileGrid = Ox.prototype.cb;
    Ox.prototype.refresh = Ox.prototype.ra;
    Ox.prototype.getAttributions = Ox.prototype.Aa;
    Ox.prototype.getLogo = Ox.prototype.ya;
    Ox.prototype.getProjection = Ox.prototype.Ba;
    Ox.prototype.getState = Ox.prototype.getState;
    Ox.prototype.setAttributions = Ox.prototype.wa;
    Ox.prototype.get = Ox.prototype.get;
    Ox.prototype.getKeys = Ox.prototype.O;
    Ox.prototype.getProperties = Ox.prototype.N;
    Ox.prototype.set = Ox.prototype.set;
    Ox.prototype.setProperties = Ox.prototype.H;
    Ox.prototype.unset = Ox.prototype.P;
    Ox.prototype.changed = Ox.prototype.s;
    Ox.prototype.dispatchEvent = Ox.prototype.b;
    Ox.prototype.getRevision = Ox.prototype.L;
    Ox.prototype.on = Ox.prototype.J;
    Ox.prototype.once = Ox.prototype.once;
    Ox.prototype.un = Ox.prototype.K;
    Z.prototype.setRenderReprojectionEdges = Z.prototype.Nb;
    Z.prototype.setTileGridForProjection = Z.prototype.Ob;
    Z.prototype.getTileLoadFunction = Z.prototype.sb;
    Z.prototype.getTileUrlFunction = Z.prototype.tb;
    Z.prototype.getUrls = Z.prototype.ub;
    Z.prototype.setTileLoadFunction = Z.prototype.zb;
    Z.prototype.setTileUrlFunction = Z.prototype.hb;
    Z.prototype.setUrl = Z.prototype.mb;
    Z.prototype.setUrls = Z.prototype.ib;
    Z.prototype.getTileGrid = Z.prototype.cb;
    Z.prototype.refresh = Z.prototype.ra;
    Z.prototype.getAttributions = Z.prototype.Aa;
    Z.prototype.getLogo = Z.prototype.ya;
    Z.prototype.getProjection = Z.prototype.Ba;
    Z.prototype.getState = Z.prototype.getState;
    Z.prototype.setAttributions = Z.prototype.wa;
    Z.prototype.get = Z.prototype.get;
    Z.prototype.getKeys = Z.prototype.O;
    Z.prototype.getProperties = Z.prototype.N;
    Z.prototype.set = Z.prototype.set;
    Z.prototype.setProperties = Z.prototype.H;
    Z.prototype.unset = Z.prototype.P;
    Z.prototype.changed = Z.prototype.s;
    Z.prototype.dispatchEvent = Z.prototype.b;
    Z.prototype.getRevision = Z.prototype.L;
    Z.prototype.on = Z.prototype.J;
    Z.prototype.once = Z.prototype.once;
    Z.prototype.un = Z.prototype.K;
    Sx.prototype.setRenderReprojectionEdges = Sx.prototype.Nb;
    Sx.prototype.setTileGridForProjection = Sx.prototype.Ob;
    Sx.prototype.getTileLoadFunction = Sx.prototype.sb;
    Sx.prototype.getTileUrlFunction = Sx.prototype.tb;
    Sx.prototype.getUrls = Sx.prototype.ub;
    Sx.prototype.setTileLoadFunction = Sx.prototype.zb;
    Sx.prototype.setTileUrlFunction = Sx.prototype.hb;
    Sx.prototype.setUrl = Sx.prototype.mb;
    Sx.prototype.setUrls = Sx.prototype.ib;
    Sx.prototype.getTileGrid = Sx.prototype.cb;
    Sx.prototype.refresh = Sx.prototype.ra;
    Sx.prototype.getAttributions = Sx.prototype.Aa;
    Sx.prototype.getLogo = Sx.prototype.ya;
    Sx.prototype.getProjection = Sx.prototype.Ba;
    Sx.prototype.getState = Sx.prototype.getState;
    Sx.prototype.setAttributions = Sx.prototype.wa;
    Sx.prototype.get = Sx.prototype.get;
    Sx.prototype.getKeys = Sx.prototype.O;
    Sx.prototype.getProperties = Sx.prototype.N;
    Sx.prototype.set = Sx.prototype.set;
    Sx.prototype.setProperties = Sx.prototype.H;
    Sx.prototype.unset = Sx.prototype.P;
    Sx.prototype.changed = Sx.prototype.s;
    Sx.prototype.dispatchEvent = Sx.prototype.b;
    Sx.prototype.getRevision = Sx.prototype.L;
    Sx.prototype.on = Sx.prototype.J;
    Sx.prototype.once = Sx.prototype.once;
    Sx.prototype.un = Sx.prototype.K;
    Ew.prototype.getTileCoord = Ew.prototype.i;
    Ew.prototype.load = Ew.prototype.load;
    Pt.prototype.changed = Pt.prototype.s;
    Pt.prototype.dispatchEvent = Pt.prototype.b;
    Pt.prototype.getRevision = Pt.prototype.L;
    Pt.prototype.on = Pt.prototype.J;
    Pt.prototype.once = Pt.prototype.once;
    Pt.prototype.un = Pt.prototype.K;
    nu.prototype.changed = nu.prototype.s;
    nu.prototype.dispatchEvent = nu.prototype.b;
    nu.prototype.getRevision = nu.prototype.L;
    nu.prototype.on = nu.prototype.J;
    nu.prototype.once = nu.prototype.once;
    nu.prototype.un = nu.prototype.K;
    iw.prototype.changed = iw.prototype.s;
    iw.prototype.dispatchEvent = iw.prototype.b;
    iw.prototype.getRevision = iw.prototype.L;
    iw.prototype.on = iw.prototype.J;
    iw.prototype.once = iw.prototype.once;
    iw.prototype.un = iw.prototype.K;
    tw.prototype.changed = tw.prototype.s;
    tw.prototype.dispatchEvent = tw.prototype.b;
    tw.prototype.getRevision = tw.prototype.L;
    tw.prototype.on = tw.prototype.J;
    tw.prototype.once = tw.prototype.once;
    tw.prototype.un = tw.prototype.K;
    qu.prototype.changed = qu.prototype.s;
    qu.prototype.dispatchEvent = qu.prototype.b;
    qu.prototype.getRevision = qu.prototype.L;
    qu.prototype.on = qu.prototype.J;
    qu.prototype.once = qu.prototype.once;
    qu.prototype.un = qu.prototype.K;
    Yt.prototype.changed = Yt.prototype.s;
    Yt.prototype.dispatchEvent = Yt.prototype.b;
    Yt.prototype.getRevision = Yt.prototype.L;
    Yt.prototype.on = Yt.prototype.J;
    Yt.prototype.once = Yt.prototype.once;
    Yt.prototype.un = Yt.prototype.K;
    Qv.prototype.changed = Qv.prototype.s;
    Qv.prototype.dispatchEvent = Qv.prototype.b;
    Qv.prototype.getRevision = Qv.prototype.L;
    Qv.prototype.on = Qv.prototype.J;
    Qv.prototype.once = Qv.prototype.once;
    Qv.prototype.un = Qv.prototype.K;
    Rv.prototype.changed = Rv.prototype.s;
    Rv.prototype.dispatchEvent = Rv.prototype.b;
    Rv.prototype.getRevision = Rv.prototype.L;
    Rv.prototype.on = Rv.prototype.J;
    Rv.prototype.once = Rv.prototype.once;
    Rv.prototype.un = Rv.prototype.K;
    mw.prototype.changed = mw.prototype.s;
    mw.prototype.dispatchEvent = mw.prototype.b;
    mw.prototype.getRevision = mw.prototype.L;
    mw.prototype.on = mw.prototype.J;
    mw.prototype.once = mw.prototype.once;
    mw.prototype.un = mw.prototype.K;
    gu.prototype.changed = gu.prototype.s;
    gu.prototype.dispatchEvent = gu.prototype.b;
    gu.prototype.getRevision = gu.prototype.L;
    gu.prototype.on = gu.prototype.J;
    gu.prototype.once = gu.prototype.once;
    gu.prototype.un = gu.prototype.K;
    vw.prototype.changed = vw.prototype.s;
    vw.prototype.dispatchEvent = vw.prototype.b;
    vw.prototype.getRevision = vw.prototype.L;
    vw.prototype.on = vw.prototype.J;
    vw.prototype.once = vw.prototype.once;
    vw.prototype.un = vw.prototype.K;
    Th.prototype.type = Th.prototype.type;
    Th.prototype.target = Th.prototype.target;
    Th.prototype.preventDefault = Th.prototype.preventDefault;
    Th.prototype.stopPropagation = Th.prototype.stopPropagation;
    oe.prototype.type = oe.prototype.type;
    oe.prototype.target = oe.prototype.target;
    oe.prototype.preventDefault = oe.prototype.preventDefault;
    oe.prototype.stopPropagation = oe.prototype.stopPropagation;
    sh.prototype.get = sh.prototype.get;
    sh.prototype.getKeys = sh.prototype.O;
    sh.prototype.getProperties = sh.prototype.N;
    sh.prototype.set = sh.prototype.set;
    sh.prototype.setProperties = sh.prototype.H;
    sh.prototype.unset = sh.prototype.P;
    sh.prototype.changed = sh.prototype.s;
    sh.prototype.dispatchEvent = sh.prototype.b;
    sh.prototype.getRevision = sh.prototype.L;
    sh.prototype.on = sh.prototype.J;
    sh.prototype.once = sh.prototype.once;
    sh.prototype.un = sh.prototype.K;
    uh.prototype.getExtent = uh.prototype.G;
    uh.prototype.getMaxResolution = uh.prototype.fc;
    uh.prototype.getMinResolution = uh.prototype.gc;
    uh.prototype.getOpacity = uh.prototype.hc;
    uh.prototype.getVisible = uh.prototype.Sb;
    uh.prototype.getZIndex = uh.prototype.za;
    uh.prototype.setExtent = uh.prototype.xc;
    uh.prototype.setMaxResolution = uh.prototype.Bc;
    uh.prototype.setMinResolution = uh.prototype.Cc;
    uh.prototype.setOpacity = uh.prototype.yc;
    uh.prototype.setVisible = uh.prototype.zc;
    uh.prototype.setZIndex = uh.prototype.Wb;
    uh.prototype.get = uh.prototype.get;
    uh.prototype.getKeys = uh.prototype.O;
    uh.prototype.getProperties = uh.prototype.N;
    uh.prototype.set = uh.prototype.set;
    uh.prototype.setProperties = uh.prototype.H;
    uh.prototype.unset = uh.prototype.P;
    uh.prototype.changed = uh.prototype.s;
    uh.prototype.dispatchEvent = uh.prototype.b;
    uh.prototype.getRevision = uh.prototype.L;
    uh.prototype.on = uh.prototype.J;
    uh.prototype.once = uh.prototype.once;
    uh.prototype.un = uh.prototype.K;
    wh.prototype.getExtent = wh.prototype.G;
    wh.prototype.getMaxResolution = wh.prototype.fc;
    wh.prototype.getMinResolution = wh.prototype.gc;
    wh.prototype.getOpacity = wh.prototype.hc;
    wh.prototype.getVisible = wh.prototype.Sb;
    wh.prototype.getZIndex = wh.prototype.za;
    wh.prototype.setExtent = wh.prototype.xc;
    wh.prototype.setMaxResolution = wh.prototype.Bc;
    wh.prototype.setMinResolution = wh.prototype.Cc;
    wh.prototype.setOpacity = wh.prototype.yc;
    wh.prototype.setVisible = wh.prototype.zc;
    wh.prototype.setZIndex = wh.prototype.Wb;
    wh.prototype.get = wh.prototype.get;
    wh.prototype.getKeys = wh.prototype.O;
    wh.prototype.getProperties = wh.prototype.N;
    wh.prototype.set = wh.prototype.set;
    wh.prototype.setProperties = wh.prototype.H;
    wh.prototype.unset = wh.prototype.P;
    wh.prototype.changed = wh.prototype.s;
    wh.prototype.dispatchEvent = wh.prototype.b;
    wh.prototype.getRevision = wh.prototype.L;
    wh.prototype.on = wh.prototype.J;
    wh.prototype.once = wh.prototype.once;
    wh.prototype.un = wh.prototype.K;
    S.prototype.setMap = S.prototype.setMap;
    S.prototype.setSource = S.prototype.Zc;
    S.prototype.getExtent = S.prototype.G;
    S.prototype.getMaxResolution = S.prototype.fc;
    S.prototype.getMinResolution = S.prototype.gc;
    S.prototype.getOpacity = S.prototype.hc;
    S.prototype.getVisible = S.prototype.Sb;
    S.prototype.getZIndex = S.prototype.za;
    S.prototype.setExtent = S.prototype.xc;
    S.prototype.setMaxResolution = S.prototype.Bc;
    S.prototype.setMinResolution = S.prototype.Cc;
    S.prototype.setOpacity = S.prototype.yc;
    S.prototype.setVisible = S.prototype.zc;
    S.prototype.setZIndex = S.prototype.Wb;
    S.prototype.get = S.prototype.get;
    S.prototype.getKeys = S.prototype.O;
    S.prototype.getProperties = S.prototype.N;
    S.prototype.set = S.prototype.set;
    S.prototype.setProperties = S.prototype.H;
    S.prototype.unset = S.prototype.P;
    S.prototype.changed = S.prototype.s;
    S.prototype.dispatchEvent = S.prototype.b;
    S.prototype.getRevision = S.prototype.L;
    S.prototype.on = S.prototype.J;
    S.prototype.once = S.prototype.once;
    S.prototype.un = S.prototype.K;
    W.prototype.getSource = W.prototype.ia;
    W.prototype.getStyle = W.prototype.u;
    W.prototype.getStyleFunction = W.prototype.bb;
    W.prototype.setStyle = W.prototype.i;
    W.prototype.setMap = W.prototype.setMap;
    W.prototype.setSource = W.prototype.Zc;
    W.prototype.getExtent = W.prototype.G;
    W.prototype.getMaxResolution = W.prototype.fc;
    W.prototype.getMinResolution = W.prototype.gc;
    W.prototype.getOpacity = W.prototype.hc;
    W.prototype.getVisible = W.prototype.Sb;
    W.prototype.getZIndex = W.prototype.za;
    W.prototype.setExtent = W.prototype.xc;
    W.prototype.setMaxResolution = W.prototype.Bc;
    W.prototype.setMinResolution = W.prototype.Cc;
    W.prototype.setOpacity = W.prototype.yc;
    W.prototype.setVisible = W.prototype.zc;
    W.prototype.setZIndex = W.prototype.Wb;
    W.prototype.get = W.prototype.get;
    W.prototype.getKeys = W.prototype.O;
    W.prototype.getProperties = W.prototype.N;
    W.prototype.set = W.prototype.set;
    W.prototype.setProperties = W.prototype.H;
    W.prototype.unset = W.prototype.P;
    W.prototype.changed = W.prototype.s;
    W.prototype.dispatchEvent = W.prototype.b;
    W.prototype.getRevision = W.prototype.L;
    W.prototype.on = W.prototype.J;
    W.prototype.once = W.prototype.once;
    W.prototype.un = W.prototype.K;
    lw.prototype.setMap = lw.prototype.setMap;
    lw.prototype.setSource = lw.prototype.Zc;
    lw.prototype.getExtent = lw.prototype.G;
    lw.prototype.getMaxResolution = lw.prototype.fc;
    lw.prototype.getMinResolution = lw.prototype.gc;
    lw.prototype.getOpacity = lw.prototype.hc;
    lw.prototype.getVisible = lw.prototype.Sb;
    lw.prototype.getZIndex = lw.prototype.za;
    lw.prototype.setExtent = lw.prototype.xc;
    lw.prototype.setMaxResolution = lw.prototype.Bc;
    lw.prototype.setMinResolution = lw.prototype.Cc;
    lw.prototype.setOpacity = lw.prototype.yc;
    lw.prototype.setVisible = lw.prototype.zc;
    lw.prototype.setZIndex = lw.prototype.Wb;
    lw.prototype.get = lw.prototype.get;
    lw.prototype.getKeys = lw.prototype.O;
    lw.prototype.getProperties = lw.prototype.N;
    lw.prototype.set = lw.prototype.set;
    lw.prototype.setProperties = lw.prototype.H;
    lw.prototype.unset = lw.prototype.P;
    lw.prototype.changed = lw.prototype.s;
    lw.prototype.dispatchEvent = lw.prototype.b;
    lw.prototype.getRevision = lw.prototype.L;
    lw.prototype.on = lw.prototype.J;
    lw.prototype.once = lw.prototype.once;
    lw.prototype.un = lw.prototype.K;
    uw.prototype.setMap = uw.prototype.setMap;
    uw.prototype.setSource = uw.prototype.Zc;
    uw.prototype.getExtent = uw.prototype.G;
    uw.prototype.getMaxResolution = uw.prototype.fc;
    uw.prototype.getMinResolution = uw.prototype.gc;
    uw.prototype.getOpacity = uw.prototype.hc;
    uw.prototype.getVisible = uw.prototype.Sb;
    uw.prototype.getZIndex = uw.prototype.za;
    uw.prototype.setExtent = uw.prototype.xc;
    uw.prototype.setMaxResolution = uw.prototype.Bc;
    uw.prototype.setMinResolution = uw.prototype.Cc;
    uw.prototype.setOpacity = uw.prototype.yc;
    uw.prototype.setVisible = uw.prototype.zc;
    uw.prototype.setZIndex = uw.prototype.Wb;
    uw.prototype.get = uw.prototype.get;
    uw.prototype.getKeys = uw.prototype.O;
    uw.prototype.getProperties = uw.prototype.N;
    uw.prototype.set = uw.prototype.set;
    uw.prototype.setProperties = uw.prototype.H;
    uw.prototype.unset = uw.prototype.P;
    uw.prototype.changed = uw.prototype.s;
    uw.prototype.dispatchEvent = uw.prototype.b;
    uw.prototype.getRevision = uw.prototype.L;
    uw.prototype.on = uw.prototype.J;
    uw.prototype.once = uw.prototype.once;
    uw.prototype.un = uw.prototype.K;
    Cw.prototype.getStyle = Cw.prototype.u;
    Cw.prototype.getStyleFunction = Cw.prototype.bb;
    Cw.prototype.setStyle = Cw.prototype.i;
    Cw.prototype.setMap = Cw.prototype.setMap;
    Cw.prototype.setSource = Cw.prototype.Zc;
    Cw.prototype.getExtent = Cw.prototype.G;
    Cw.prototype.getMaxResolution = Cw.prototype.fc;
    Cw.prototype.getMinResolution = Cw.prototype.gc;
    Cw.prototype.getOpacity = Cw.prototype.hc;
    Cw.prototype.getVisible = Cw.prototype.Sb;
    Cw.prototype.getZIndex = Cw.prototype.za;
    Cw.prototype.setExtent = Cw.prototype.xc;
    Cw.prototype.setMaxResolution = Cw.prototype.Bc;
    Cw.prototype.setMinResolution = Cw.prototype.Cc;
    Cw.prototype.setOpacity = Cw.prototype.yc;
    Cw.prototype.setVisible = Cw.prototype.zc;
    Cw.prototype.setZIndex = Cw.prototype.Wb;
    Cw.prototype.get = Cw.prototype.get;
    Cw.prototype.getKeys = Cw.prototype.O;
    Cw.prototype.getProperties = Cw.prototype.N;
    Cw.prototype.set = Cw.prototype.set;
    Cw.prototype.setProperties = Cw.prototype.H;
    Cw.prototype.unset = Cw.prototype.P;
    Cw.prototype.changed = Cw.prototype.s;
    Cw.prototype.dispatchEvent = Cw.prototype.b;
    Cw.prototype.getRevision = Cw.prototype.L;
    Cw.prototype.on = Cw.prototype.J;
    Cw.prototype.once = Cw.prototype.once;
    Cw.prototype.un = Cw.prototype.K;
    ng.prototype.get = ng.prototype.get;
    ng.prototype.getKeys = ng.prototype.O;
    ng.prototype.getProperties = ng.prototype.N;
    ng.prototype.set = ng.prototype.set;
    ng.prototype.setProperties = ng.prototype.H;
    ng.prototype.unset = ng.prototype.P;
    ng.prototype.changed = ng.prototype.s;
    ng.prototype.dispatchEvent = ng.prototype.b;
    ng.prototype.getRevision = ng.prototype.L;
    ng.prototype.on = ng.prototype.J;
    ng.prototype.once = ng.prototype.once;
    ng.prototype.un = ng.prototype.K;
    rg.prototype.getActive = rg.prototype.c;
    rg.prototype.getMap = rg.prototype.i;
    rg.prototype.setActive = rg.prototype.Ia;
    rg.prototype.get = rg.prototype.get;
    rg.prototype.getKeys = rg.prototype.O;
    rg.prototype.getProperties = rg.prototype.N;
    rg.prototype.set = rg.prototype.set;
    rg.prototype.setProperties = rg.prototype.H;
    rg.prototype.unset = rg.prototype.P;
    rg.prototype.changed = rg.prototype.s;
    rg.prototype.dispatchEvent = rg.prototype.b;
    rg.prototype.getRevision = rg.prototype.L;
    rg.prototype.on = rg.prototype.J;
    rg.prototype.once = rg.prototype.once;
    rg.prototype.un = rg.prototype.K;
    ht.prototype.getActive = ht.prototype.c;
    ht.prototype.getMap = ht.prototype.i;
    ht.prototype.setActive = ht.prototype.Ia;
    ht.prototype.get = ht.prototype.get;
    ht.prototype.getKeys = ht.prototype.O;
    ht.prototype.getProperties = ht.prototype.N;
    ht.prototype.set = ht.prototype.set;
    ht.prototype.setProperties = ht.prototype.H;
    ht.prototype.unset = ht.prototype.P;
    ht.prototype.changed = ht.prototype.s;
    ht.prototype.dispatchEvent = ht.prototype.b;
    ht.prototype.getRevision = ht.prototype.L;
    ht.prototype.on = ht.prototype.J;
    ht.prototype.once = ht.prototype.once;
    ht.prototype.un = ht.prototype.K;
    kt.prototype.type = kt.prototype.type;
    kt.prototype.target = kt.prototype.target;
    kt.prototype.preventDefault = kt.prototype.preventDefault;
    kt.prototype.stopPropagation = kt.prototype.stopPropagation;
    Dg.prototype.getActive = Dg.prototype.c;
    Dg.prototype.getMap = Dg.prototype.i;
    Dg.prototype.setActive = Dg.prototype.Ia;
    Dg.prototype.get = Dg.prototype.get;
    Dg.prototype.getKeys = Dg.prototype.O;
    Dg.prototype.getProperties = Dg.prototype.N;
    Dg.prototype.set = Dg.prototype.set;
    Dg.prototype.setProperties = Dg.prototype.H;
    Dg.prototype.unset = Dg.prototype.P;
    Dg.prototype.changed = Dg.prototype.s;
    Dg.prototype.dispatchEvent = Dg.prototype.b;
    Dg.prototype.getRevision = Dg.prototype.L;
    Dg.prototype.on = Dg.prototype.J;
    Dg.prototype.once = Dg.prototype.once;
    Dg.prototype.un = Dg.prototype.K;
    Sg.prototype.getActive = Sg.prototype.c;
    Sg.prototype.getMap = Sg.prototype.i;
    Sg.prototype.setActive = Sg.prototype.Ia;
    Sg.prototype.get = Sg.prototype.get;
    Sg.prototype.getKeys = Sg.prototype.O;
    Sg.prototype.getProperties = Sg.prototype.N;
    Sg.prototype.set = Sg.prototype.set;
    Sg.prototype.setProperties = Sg.prototype.H;
    Sg.prototype.unset = Sg.prototype.P;
    Sg.prototype.changed = Sg.prototype.s;
    Sg.prototype.dispatchEvent = Sg.prototype.b;
    Sg.prototype.getRevision = Sg.prototype.L;
    Sg.prototype.on = Sg.prototype.J;
    Sg.prototype.once = Sg.prototype.once;
    Sg.prototype.un = Sg.prototype.K;
    Xg.prototype.type = Xg.prototype.type;
    Xg.prototype.target = Xg.prototype.target;
    Xg.prototype.preventDefault = Xg.prototype.preventDefault;
    Xg.prototype.stopPropagation = Xg.prototype.stopPropagation;
    Gg.prototype.getActive = Gg.prototype.c;
    Gg.prototype.getMap = Gg.prototype.i;
    Gg.prototype.setActive = Gg.prototype.Ia;
    Gg.prototype.get = Gg.prototype.get;
    Gg.prototype.getKeys = Gg.prototype.O;
    Gg.prototype.getProperties = Gg.prototype.N;
    Gg.prototype.set = Gg.prototype.set;
    Gg.prototype.setProperties = Gg.prototype.H;
    Gg.prototype.unset = Gg.prototype.P;
    Gg.prototype.changed = Gg.prototype.s;
    Gg.prototype.dispatchEvent = Gg.prototype.b;
    Gg.prototype.getRevision = Gg.prototype.L;
    Gg.prototype.on = Gg.prototype.J;
    Gg.prototype.once = Gg.prototype.once;
    Gg.prototype.un = Gg.prototype.K;
    Lg.prototype.getActive = Lg.prototype.c;
    Lg.prototype.getMap = Lg.prototype.i;
    Lg.prototype.setActive = Lg.prototype.Ia;
    Lg.prototype.get = Lg.prototype.get;
    Lg.prototype.getKeys = Lg.prototype.O;
    Lg.prototype.getProperties = Lg.prototype.N;
    Lg.prototype.set = Lg.prototype.set;
    Lg.prototype.setProperties = Lg.prototype.H;
    Lg.prototype.unset = Lg.prototype.P;
    Lg.prototype.changed = Lg.prototype.s;
    Lg.prototype.dispatchEvent = Lg.prototype.b;
    Lg.prototype.getRevision = Lg.prototype.L;
    Lg.prototype.on = Lg.prototype.J;
    Lg.prototype.once = Lg.prototype.once;
    Lg.prototype.un = Lg.prototype.K;
    ot.prototype.getActive = ot.prototype.c;
    ot.prototype.getMap = ot.prototype.i;
    ot.prototype.setActive = ot.prototype.Ia;
    ot.prototype.get = ot.prototype.get;
    ot.prototype.getKeys = ot.prototype.O;
    ot.prototype.getProperties = ot.prototype.N;
    ot.prototype.set = ot.prototype.set;
    ot.prototype.setProperties = ot.prototype.H;
    ot.prototype.unset = ot.prototype.P;
    ot.prototype.changed = ot.prototype.s;
    ot.prototype.dispatchEvent = ot.prototype.b;
    ot.prototype.getRevision = ot.prototype.L;
    ot.prototype.on = ot.prototype.J;
    ot.prototype.once = ot.prototype.once;
    ot.prototype.un = ot.prototype.K;
    ah.prototype.getGeometry = ah.prototype.V;
    ah.prototype.getActive = ah.prototype.c;
    ah.prototype.getMap = ah.prototype.i;
    ah.prototype.setActive = ah.prototype.Ia;
    ah.prototype.get = ah.prototype.get;
    ah.prototype.getKeys = ah.prototype.O;
    ah.prototype.getProperties = ah.prototype.N;
    ah.prototype.set = ah.prototype.set;
    ah.prototype.setProperties = ah.prototype.H;
    ah.prototype.unset = ah.prototype.P;
    ah.prototype.changed = ah.prototype.s;
    ah.prototype.dispatchEvent = ah.prototype.b;
    ah.prototype.getRevision = ah.prototype.L;
    ah.prototype.on = ah.prototype.J;
    ah.prototype.once = ah.prototype.once;
    ah.prototype.un = ah.prototype.K;
    Cu.prototype.getActive = Cu.prototype.c;
    Cu.prototype.getMap = Cu.prototype.i;
    Cu.prototype.setActive = Cu.prototype.Ia;
    Cu.prototype.get = Cu.prototype.get;
    Cu.prototype.getKeys = Cu.prototype.O;
    Cu.prototype.getProperties = Cu.prototype.N;
    Cu.prototype.set = Cu.prototype.set;
    Cu.prototype.setProperties = Cu.prototype.H;
    Cu.prototype.unset = Cu.prototype.P;
    Cu.prototype.changed = Cu.prototype.s;
    Cu.prototype.dispatchEvent = Cu.prototype.b;
    Cu.prototype.getRevision = Cu.prototype.L;
    Cu.prototype.on = Cu.prototype.J;
    Cu.prototype.once = Cu.prototype.once;
    Cu.prototype.un = Cu.prototype.K;
    Su.prototype.type = Su.prototype.type;
    Su.prototype.target = Su.prototype.target;
    Su.prototype.preventDefault = Su.prototype.preventDefault;
    Su.prototype.stopPropagation = Su.prototype.stopPropagation;
    Tu.prototype.getActive = Tu.prototype.c;
    Tu.prototype.getMap = Tu.prototype.i;
    Tu.prototype.setActive = Tu.prototype.Ia;
    Tu.prototype.get = Tu.prototype.get;
    Tu.prototype.getKeys = Tu.prototype.O;
    Tu.prototype.getProperties = Tu.prototype.N;
    Tu.prototype.set = Tu.prototype.set;
    Tu.prototype.setProperties = Tu.prototype.H;
    Tu.prototype.unset = Tu.prototype.P;
    Tu.prototype.changed = Tu.prototype.s;
    Tu.prototype.dispatchEvent = Tu.prototype.b;
    Tu.prototype.getRevision = Tu.prototype.L;
    Tu.prototype.on = Tu.prototype.J;
    Tu.prototype.once = Tu.prototype.once;
    Tu.prototype.un = Tu.prototype.K;
    dv.prototype.type = dv.prototype.type;
    dv.prototype.target = dv.prototype.target;
    dv.prototype.preventDefault = dv.prototype.preventDefault;
    dv.prototype.stopPropagation = dv.prototype.stopPropagation;
    bh.prototype.getActive = bh.prototype.c;
    bh.prototype.getMap = bh.prototype.i;
    bh.prototype.setActive = bh.prototype.Ia;
    bh.prototype.get = bh.prototype.get;
    bh.prototype.getKeys = bh.prototype.O;
    bh.prototype.getProperties = bh.prototype.N;
    bh.prototype.set = bh.prototype.set;
    bh.prototype.setProperties = bh.prototype.H;
    bh.prototype.unset = bh.prototype.P;
    bh.prototype.changed = bh.prototype.s;
    bh.prototype.dispatchEvent = bh.prototype.b;
    bh.prototype.getRevision = bh.prototype.L;
    bh.prototype.on = bh.prototype.J;
    bh.prototype.once = bh.prototype.once;
    bh.prototype.un = bh.prototype.K;
    dh.prototype.getActive = dh.prototype.c;
    dh.prototype.getMap = dh.prototype.i;
    dh.prototype.setActive = dh.prototype.Ia;
    dh.prototype.get = dh.prototype.get;
    dh.prototype.getKeys = dh.prototype.O;
    dh.prototype.getProperties = dh.prototype.N;
    dh.prototype.set = dh.prototype.set;
    dh.prototype.setProperties = dh.prototype.H;
    dh.prototype.unset = dh.prototype.P;
    dh.prototype.changed = dh.prototype.s;
    dh.prototype.dispatchEvent = dh.prototype.b;
    dh.prototype.getRevision = dh.prototype.L;
    dh.prototype.on = dh.prototype.J;
    dh.prototype.once = dh.prototype.once;
    dh.prototype.un = dh.prototype.K;
    ev.prototype.getActive = ev.prototype.c;
    ev.prototype.getMap = ev.prototype.i;
    ev.prototype.setActive = ev.prototype.Ia;
    ev.prototype.get = ev.prototype.get;
    ev.prototype.getKeys = ev.prototype.O;
    ev.prototype.getProperties = ev.prototype.N;
    ev.prototype.set = ev.prototype.set;
    ev.prototype.setProperties = ev.prototype.H;
    ev.prototype.unset = ev.prototype.P;
    ev.prototype.changed = ev.prototype.s;
    ev.prototype.dispatchEvent = ev.prototype.b;
    ev.prototype.getRevision = ev.prototype.L;
    ev.prototype.on = ev.prototype.J;
    ev.prototype.once = ev.prototype.once;
    ev.prototype.un = ev.prototype.K;
    mv.prototype.type = mv.prototype.type;
    mv.prototype.target = mv.prototype.target;
    mv.prototype.preventDefault = mv.prototype.preventDefault;
    mv.prototype.stopPropagation = mv.prototype.stopPropagation;
    fh.prototype.getActive = fh.prototype.c;
    fh.prototype.getMap = fh.prototype.i;
    fh.prototype.setActive = fh.prototype.Ia;
    fh.prototype.get = fh.prototype.get;
    fh.prototype.getKeys = fh.prototype.O;
    fh.prototype.getProperties = fh.prototype.N;
    fh.prototype.set = fh.prototype.set;
    fh.prototype.setProperties = fh.prototype.H;
    fh.prototype.unset = fh.prototype.P;
    fh.prototype.changed = fh.prototype.s;
    fh.prototype.dispatchEvent = fh.prototype.b;
    fh.prototype.getRevision = fh.prototype.L;
    fh.prototype.on = fh.prototype.J;
    fh.prototype.once = fh.prototype.once;
    fh.prototype.un = fh.prototype.K;
    jh.prototype.getActive = jh.prototype.c;
    jh.prototype.getMap = jh.prototype.i;
    jh.prototype.setActive = jh.prototype.Ia;
    jh.prototype.get = jh.prototype.get;
    jh.prototype.getKeys = jh.prototype.O;
    jh.prototype.getProperties = jh.prototype.N;
    jh.prototype.set = jh.prototype.set;
    jh.prototype.setProperties = jh.prototype.H;
    jh.prototype.unset = jh.prototype.P;
    jh.prototype.changed = jh.prototype.s;
    jh.prototype.dispatchEvent = jh.prototype.b;
    jh.prototype.getRevision = jh.prototype.L;
    jh.prototype.on = jh.prototype.J;
    jh.prototype.once = jh.prototype.once;
    jh.prototype.un = jh.prototype.K;
    nh.prototype.getActive = nh.prototype.c;
    nh.prototype.getMap = nh.prototype.i;
    nh.prototype.setActive = nh.prototype.Ia;
    nh.prototype.get = nh.prototype.get;
    nh.prototype.getKeys = nh.prototype.O;
    nh.prototype.getProperties = nh.prototype.N;
    nh.prototype.set = nh.prototype.set;
    nh.prototype.setProperties = nh.prototype.H;
    nh.prototype.unset = nh.prototype.P;
    nh.prototype.changed = nh.prototype.s;
    nh.prototype.dispatchEvent = nh.prototype.b;
    nh.prototype.getRevision = nh.prototype.L;
    nh.prototype.on = nh.prototype.J;
    nh.prototype.once = nh.prototype.once;
    nh.prototype.un = nh.prototype.K;
    uv.prototype.getActive = uv.prototype.c;
    uv.prototype.getMap = uv.prototype.i;
    uv.prototype.setActive = uv.prototype.Ia;
    uv.prototype.get = uv.prototype.get;
    uv.prototype.getKeys = uv.prototype.O;
    uv.prototype.getProperties = uv.prototype.N;
    uv.prototype.set = uv.prototype.set;
    uv.prototype.setProperties = uv.prototype.H;
    uv.prototype.unset = uv.prototype.P;
    uv.prototype.changed = uv.prototype.s;
    uv.prototype.dispatchEvent = uv.prototype.b;
    uv.prototype.getRevision = uv.prototype.L;
    uv.prototype.on = uv.prototype.J;
    uv.prototype.once = uv.prototype.once;
    uv.prototype.un = uv.prototype.K;
    xv.prototype.type = xv.prototype.type;
    xv.prototype.target = xv.prototype.target;
    xv.prototype.preventDefault = xv.prototype.preventDefault;
    xv.prototype.stopPropagation = xv.prototype.stopPropagation;
    zv.prototype.getActive = zv.prototype.c;
    zv.prototype.getMap = zv.prototype.i;
    zv.prototype.setActive = zv.prototype.Ia;
    zv.prototype.get = zv.prototype.get;
    zv.prototype.getKeys = zv.prototype.O;
    zv.prototype.getProperties = zv.prototype.N;
    zv.prototype.set = zv.prototype.set;
    zv.prototype.setProperties = zv.prototype.H;
    zv.prototype.unset = zv.prototype.P;
    zv.prototype.changed = zv.prototype.s;
    zv.prototype.dispatchEvent = zv.prototype.b;
    zv.prototype.getRevision = zv.prototype.L;
    zv.prototype.on = zv.prototype.J;
    zv.prototype.once = zv.prototype.once;
    zv.prototype.un = zv.prototype.K;
    Ev.prototype.getActive = Ev.prototype.c;
    Ev.prototype.getMap = Ev.prototype.i;
    Ev.prototype.setActive = Ev.prototype.Ia;
    Ev.prototype.get = Ev.prototype.get;
    Ev.prototype.getKeys = Ev.prototype.O;
    Ev.prototype.getProperties = Ev.prototype.N;
    Ev.prototype.set = Ev.prototype.set;
    Ev.prototype.setProperties = Ev.prototype.H;
    Ev.prototype.unset = Ev.prototype.P;
    Ev.prototype.changed = Ev.prototype.s;
    Ev.prototype.dispatchEvent = Ev.prototype.b;
    Ev.prototype.getRevision = Ev.prototype.L;
    Ev.prototype.on = Ev.prototype.J;
    Ev.prototype.once = Ev.prototype.once;
    Ev.prototype.un = Ev.prototype.K;
    Kv.prototype.type = Kv.prototype.type;
    Kv.prototype.target = Kv.prototype.target;
    Kv.prototype.preventDefault = Kv.prototype.preventDefault;
    Kv.prototype.stopPropagation = Kv.prototype.stopPropagation;
    lf.prototype.get = lf.prototype.get;
    lf.prototype.getKeys = lf.prototype.O;
    lf.prototype.getProperties = lf.prototype.N;
    lf.prototype.set = lf.prototype.set;
    lf.prototype.setProperties = lf.prototype.H;
    lf.prototype.unset = lf.prototype.P;
    lf.prototype.changed = lf.prototype.s;
    lf.prototype.dispatchEvent = lf.prototype.b;
    lf.prototype.getRevision = lf.prototype.L;
    lf.prototype.on = lf.prototype.J;
    lf.prototype.once = lf.prototype.once;
    lf.prototype.un = lf.prototype.K;
    pf.prototype.getClosestPoint = pf.prototype.Db;
    pf.prototype.intersectsCoordinate = pf.prototype.vb;
    pf.prototype.getExtent = pf.prototype.G;
    pf.prototype.rotate = pf.prototype.rotate;
    pf.prototype.scale = pf.prototype.scale;
    pf.prototype.simplify = pf.prototype.Pb;
    pf.prototype.transform = pf.prototype.wb;
    pf.prototype.get = pf.prototype.get;
    pf.prototype.getKeys = pf.prototype.O;
    pf.prototype.getProperties = pf.prototype.N;
    pf.prototype.set = pf.prototype.set;
    pf.prototype.setProperties = pf.prototype.H;
    pf.prototype.unset = pf.prototype.P;
    pf.prototype.changed = pf.prototype.s;
    pf.prototype.dispatchEvent = pf.prototype.b;
    pf.prototype.getRevision = pf.prototype.L;
    pf.prototype.on = pf.prototype.J;
    pf.prototype.once = pf.prototype.once;
    pf.prototype.un = pf.prototype.K;
    Ns.prototype.getFirstCoordinate = Ns.prototype.bc;
    Ns.prototype.getLastCoordinate = Ns.prototype.cc;
    Ns.prototype.getLayout = Ns.prototype.dc;
    Ns.prototype.rotate = Ns.prototype.rotate;
    Ns.prototype.scale = Ns.prototype.scale;
    Ns.prototype.getClosestPoint = Ns.prototype.Db;
    Ns.prototype.intersectsCoordinate = Ns.prototype.vb;
    Ns.prototype.getExtent = Ns.prototype.G;
    Ns.prototype.simplify = Ns.prototype.Pb;
    Ns.prototype.get = Ns.prototype.get;
    Ns.prototype.getKeys = Ns.prototype.O;
    Ns.prototype.getProperties = Ns.prototype.N;
    Ns.prototype.set = Ns.prototype.set;
    Ns.prototype.setProperties = Ns.prototype.H;
    Ns.prototype.unset = Ns.prototype.P;
    Ns.prototype.changed = Ns.prototype.s;
    Ns.prototype.dispatchEvent = Ns.prototype.b;
    Ns.prototype.getRevision = Ns.prototype.L;
    Ns.prototype.on = Ns.prototype.J;
    Ns.prototype.once = Ns.prototype.once;
    Ns.prototype.un = Ns.prototype.K;
    Im.prototype.getClosestPoint = Im.prototype.Db;
    Im.prototype.intersectsCoordinate = Im.prototype.vb;
    Im.prototype.getExtent = Im.prototype.G;
    Im.prototype.rotate = Im.prototype.rotate;
    Im.prototype.scale = Im.prototype.scale;
    Im.prototype.simplify = Im.prototype.Pb;
    Im.prototype.transform = Im.prototype.wb;
    Im.prototype.get = Im.prototype.get;
    Im.prototype.getKeys = Im.prototype.O;
    Im.prototype.getProperties = Im.prototype.N;
    Im.prototype.set = Im.prototype.set;
    Im.prototype.setProperties = Im.prototype.H;
    Im.prototype.unset = Im.prototype.P;
    Im.prototype.changed = Im.prototype.s;
    Im.prototype.dispatchEvent = Im.prototype.b;
    Im.prototype.getRevision = Im.prototype.L;
    Im.prototype.on = Im.prototype.J;
    Im.prototype.once = Im.prototype.once;
    Im.prototype.un = Im.prototype.K;
    If.prototype.getFirstCoordinate = If.prototype.bc;
    If.prototype.getLastCoordinate = If.prototype.cc;
    If.prototype.getLayout = If.prototype.dc;
    If.prototype.rotate = If.prototype.rotate;
    If.prototype.scale = If.prototype.scale;
    If.prototype.getClosestPoint = If.prototype.Db;
    If.prototype.intersectsCoordinate = If.prototype.vb;
    If.prototype.getExtent = If.prototype.G;
    If.prototype.simplify = If.prototype.Pb;
    If.prototype.transform = If.prototype.wb;
    If.prototype.get = If.prototype.get;
    If.prototype.getKeys = If.prototype.O;
    If.prototype.getProperties = If.prototype.N;
    If.prototype.set = If.prototype.set;
    If.prototype.setProperties = If.prototype.H;
    If.prototype.unset = If.prototype.P;
    If.prototype.changed = If.prototype.s;
    If.prototype.dispatchEvent = If.prototype.b;
    If.prototype.getRevision = If.prototype.L;
    If.prototype.on = If.prototype.J;
    If.prototype.once = If.prototype.once;
    If.prototype.un = If.prototype.K;
    M.prototype.getFirstCoordinate = M.prototype.bc;
    M.prototype.getLastCoordinate = M.prototype.cc;
    M.prototype.getLayout = M.prototype.dc;
    M.prototype.rotate = M.prototype.rotate;
    M.prototype.scale = M.prototype.scale;
    M.prototype.getClosestPoint = M.prototype.Db;
    M.prototype.intersectsCoordinate = M.prototype.vb;
    M.prototype.getExtent = M.prototype.G;
    M.prototype.simplify = M.prototype.Pb;
    M.prototype.transform = M.prototype.wb;
    M.prototype.get = M.prototype.get;
    M.prototype.getKeys = M.prototype.O;
    M.prototype.getProperties = M.prototype.N;
    M.prototype.set = M.prototype.set;
    M.prototype.setProperties = M.prototype.H;
    M.prototype.unset = M.prototype.P;
    M.prototype.changed = M.prototype.s;
    M.prototype.dispatchEvent = M.prototype.b;
    M.prototype.getRevision = M.prototype.L;
    M.prototype.on = M.prototype.J;
    M.prototype.once = M.prototype.once;
    M.prototype.un = M.prototype.K;
    N.prototype.getFirstCoordinate = N.prototype.bc;
    N.prototype.getLastCoordinate = N.prototype.cc;
    N.prototype.getLayout = N.prototype.dc;
    N.prototype.rotate = N.prototype.rotate;
    N.prototype.scale = N.prototype.scale;
    N.prototype.getClosestPoint = N.prototype.Db;
    N.prototype.intersectsCoordinate = N.prototype.vb;
    N.prototype.getExtent = N.prototype.G;
    N.prototype.simplify = N.prototype.Pb;
    N.prototype.transform = N.prototype.wb;
    N.prototype.get = N.prototype.get;
    N.prototype.getKeys = N.prototype.O;
    N.prototype.getProperties = N.prototype.N;
    N.prototype.set = N.prototype.set;
    N.prototype.setProperties = N.prototype.H;
    N.prototype.unset = N.prototype.P;
    N.prototype.changed = N.prototype.s;
    N.prototype.dispatchEvent = N.prototype.b;
    N.prototype.getRevision = N.prototype.L;
    N.prototype.on = N.prototype.J;
    N.prototype.once = N.prototype.once;
    N.prototype.un = N.prototype.K;
    O.prototype.getFirstCoordinate = O.prototype.bc;
    O.prototype.getLastCoordinate = O.prototype.cc;
    O.prototype.getLayout = O.prototype.dc;
    O.prototype.rotate = O.prototype.rotate;
    O.prototype.scale = O.prototype.scale;
    O.prototype.getClosestPoint = O.prototype.Db;
    O.prototype.intersectsCoordinate = O.prototype.vb;
    O.prototype.getExtent = O.prototype.G;
    O.prototype.simplify = O.prototype.Pb;
    O.prototype.transform = O.prototype.wb;
    O.prototype.get = O.prototype.get;
    O.prototype.getKeys = O.prototype.O;
    O.prototype.getProperties = O.prototype.N;
    O.prototype.set = O.prototype.set;
    O.prototype.setProperties = O.prototype.H;
    O.prototype.unset = O.prototype.P;
    O.prototype.changed = O.prototype.s;
    O.prototype.dispatchEvent = O.prototype.b;
    O.prototype.getRevision = O.prototype.L;
    O.prototype.on = O.prototype.J;
    O.prototype.once = O.prototype.once;
    O.prototype.un = O.prototype.K;
    P.prototype.getFirstCoordinate = P.prototype.bc;
    P.prototype.getLastCoordinate = P.prototype.cc;
    P.prototype.getLayout = P.prototype.dc;
    P.prototype.rotate = P.prototype.rotate;
    P.prototype.scale = P.prototype.scale;
    P.prototype.getClosestPoint = P.prototype.Db;
    P.prototype.intersectsCoordinate = P.prototype.vb;
    P.prototype.getExtent = P.prototype.G;
    P.prototype.simplify = P.prototype.Pb;
    P.prototype.transform = P.prototype.wb;
    P.prototype.get = P.prototype.get;
    P.prototype.getKeys = P.prototype.O;
    P.prototype.getProperties = P.prototype.N;
    P.prototype.set = P.prototype.set;
    P.prototype.setProperties = P.prototype.H;
    P.prototype.unset = P.prototype.P;
    P.prototype.changed = P.prototype.s;
    P.prototype.dispatchEvent = P.prototype.b;
    P.prototype.getRevision = P.prototype.L;
    P.prototype.on = P.prototype.J;
    P.prototype.once = P.prototype.once;
    P.prototype.un = P.prototype.K;
    C.prototype.getFirstCoordinate = C.prototype.bc;
    C.prototype.getLastCoordinate = C.prototype.cc;
    C.prototype.getLayout = C.prototype.dc;
    C.prototype.rotate = C.prototype.rotate;
    C.prototype.scale = C.prototype.scale;
    C.prototype.getClosestPoint = C.prototype.Db;
    C.prototype.intersectsCoordinate = C.prototype.vb;
    C.prototype.getExtent = C.prototype.G;
    C.prototype.simplify = C.prototype.Pb;
    C.prototype.transform = C.prototype.wb;
    C.prototype.get = C.prototype.get;
    C.prototype.getKeys = C.prototype.O;
    C.prototype.getProperties = C.prototype.N;
    C.prototype.set = C.prototype.set;
    C.prototype.setProperties = C.prototype.H;
    C.prototype.unset = C.prototype.P;
    C.prototype.changed = C.prototype.s;
    C.prototype.dispatchEvent = C.prototype.b;
    C.prototype.getRevision = C.prototype.L;
    C.prototype.on = C.prototype.J;
    C.prototype.once = C.prototype.once;
    C.prototype.un = C.prototype.K;
    D.prototype.getFirstCoordinate = D.prototype.bc;
    D.prototype.getLastCoordinate = D.prototype.cc;
    D.prototype.getLayout = D.prototype.dc;
    D.prototype.rotate = D.prototype.rotate;
    D.prototype.scale = D.prototype.scale;
    D.prototype.getClosestPoint = D.prototype.Db;
    D.prototype.intersectsCoordinate = D.prototype.vb;
    D.prototype.getExtent = D.prototype.G;
    D.prototype.simplify = D.prototype.Pb;
    D.prototype.transform = D.prototype.wb;
    D.prototype.get = D.prototype.get;
    D.prototype.getKeys = D.prototype.O;
    D.prototype.getProperties = D.prototype.N;
    D.prototype.set = D.prototype.set;
    D.prototype.setProperties = D.prototype.H;
    D.prototype.unset = D.prototype.P;
    D.prototype.changed = D.prototype.s;
    D.prototype.dispatchEvent = D.prototype.b;
    D.prototype.getRevision = D.prototype.L;
    D.prototype.on = D.prototype.J;
    D.prototype.once = D.prototype.once;
    D.prototype.un = D.prototype.K;
    gn.prototype.readFeatures = gn.prototype.Oa;
    qn.prototype.readFeatures = qn.prototype.Oa;
    gn.prototype.readFeatures = gn.prototype.Oa;
    jd.prototype.get = jd.prototype.get;
    jd.prototype.getKeys = jd.prototype.O;
    jd.prototype.getProperties = jd.prototype.N;
    jd.prototype.set = jd.prototype.set;
    jd.prototype.setProperties = jd.prototype.H;
    jd.prototype.unset = jd.prototype.P;
    jd.prototype.changed = jd.prototype.s;
    jd.prototype.dispatchEvent = jd.prototype.b;
    jd.prototype.getRevision = jd.prototype.L;
    jd.prototype.on = jd.prototype.J;
    jd.prototype.once = jd.prototype.once;
    jd.prototype.un = jd.prototype.K;
    kd.prototype.getMap = kd.prototype.g;
    kd.prototype.setMap = kd.prototype.setMap;
    kd.prototype.setTarget = kd.prototype.i;
    kd.prototype.get = kd.prototype.get;
    kd.prototype.getKeys = kd.prototype.O;
    kd.prototype.getProperties = kd.prototype.N;
    kd.prototype.set = kd.prototype.set;
    kd.prototype.setProperties = kd.prototype.H;
    kd.prototype.unset = kd.prototype.P;
    kd.prototype.changed = kd.prototype.s;
    kd.prototype.dispatchEvent = kd.prototype.b;
    kd.prototype.getRevision = kd.prototype.L;
    kd.prototype.on = kd.prototype.J;
    kd.prototype.once = kd.prototype.once;
    kd.prototype.un = kd.prototype.K;
    vd.prototype.getMap = vd.prototype.g;
    vd.prototype.setMap = vd.prototype.setMap;
    vd.prototype.setTarget = vd.prototype.i;
    vd.prototype.get = vd.prototype.get;
    vd.prototype.getKeys = vd.prototype.O;
    vd.prototype.getProperties = vd.prototype.N;
    vd.prototype.set = vd.prototype.set;
    vd.prototype.setProperties = vd.prototype.H;
    vd.prototype.unset = vd.prototype.P;
    vd.prototype.changed = vd.prototype.s;
    vd.prototype.dispatchEvent = vd.prototype.b;
    vd.prototype.getRevision = vd.prototype.L;
    vd.prototype.on = vd.prototype.J;
    vd.prototype.once = vd.prototype.once;
    vd.prototype.un = vd.prototype.K;
    Ad.prototype.getMap = Ad.prototype.g;
    Ad.prototype.setMap = Ad.prototype.setMap;
    Ad.prototype.setTarget = Ad.prototype.i;
    Ad.prototype.get = Ad.prototype.get;
    Ad.prototype.getKeys = Ad.prototype.O;
    Ad.prototype.getProperties = Ad.prototype.N;
    Ad.prototype.set = Ad.prototype.set;
    Ad.prototype.setProperties = Ad.prototype.H;
    Ad.prototype.unset = Ad.prototype.P;
    Ad.prototype.changed = Ad.prototype.s;
    Ad.prototype.dispatchEvent = Ad.prototype.b;
    Ad.prototype.getRevision = Ad.prototype.L;
    Ad.prototype.on = Ad.prototype.J;
    Ad.prototype.once = Ad.prototype.once;
    Ad.prototype.un = Ad.prototype.K;
    Pk.prototype.getMap = Pk.prototype.g;
    Pk.prototype.setMap = Pk.prototype.setMap;
    Pk.prototype.setTarget = Pk.prototype.i;
    Pk.prototype.get = Pk.prototype.get;
    Pk.prototype.getKeys = Pk.prototype.O;
    Pk.prototype.getProperties = Pk.prototype.N;
    Pk.prototype.set = Pk.prototype.set;
    Pk.prototype.setProperties = Pk.prototype.H;
    Pk.prototype.unset = Pk.prototype.P;
    Pk.prototype.changed = Pk.prototype.s;
    Pk.prototype.dispatchEvent = Pk.prototype.b;
    Pk.prototype.getRevision = Pk.prototype.L;
    Pk.prototype.on = Pk.prototype.J;
    Pk.prototype.once = Pk.prototype.once;
    Pk.prototype.un = Pk.prototype.K;
    rd.prototype.getMap = rd.prototype.g;
    rd.prototype.setMap = rd.prototype.setMap;
    rd.prototype.setTarget = rd.prototype.i;
    rd.prototype.get = rd.prototype.get;
    rd.prototype.getKeys = rd.prototype.O;
    rd.prototype.getProperties = rd.prototype.N;
    rd.prototype.set = rd.prototype.set;
    rd.prototype.setProperties = rd.prototype.H;
    rd.prototype.unset = rd.prototype.P;
    rd.prototype.changed = rd.prototype.s;
    rd.prototype.dispatchEvent = rd.prototype.b;
    rd.prototype.getRevision = rd.prototype.L;
    rd.prototype.on = rd.prototype.J;
    rd.prototype.once = rd.prototype.once;
    rd.prototype.un = rd.prototype.K;
    Uk.prototype.getMap = Uk.prototype.g;
    Uk.prototype.setMap = Uk.prototype.setMap;
    Uk.prototype.setTarget = Uk.prototype.i;
    Uk.prototype.get = Uk.prototype.get;
    Uk.prototype.getKeys = Uk.prototype.O;
    Uk.prototype.getProperties = Uk.prototype.N;
    Uk.prototype.set = Uk.prototype.set;
    Uk.prototype.setProperties = Uk.prototype.H;
    Uk.prototype.unset = Uk.prototype.P;
    Uk.prototype.changed = Uk.prototype.s;
    Uk.prototype.dispatchEvent = Uk.prototype.b;
    Uk.prototype.getRevision = Uk.prototype.L;
    Uk.prototype.on = Uk.prototype.J;
    Uk.prototype.once = Uk.prototype.once;
    Uk.prototype.un = Uk.prototype.K;
    td.prototype.getMap = td.prototype.g;
    td.prototype.setMap = td.prototype.setMap;
    td.prototype.setTarget = td.prototype.i;
    td.prototype.get = td.prototype.get;
    td.prototype.getKeys = td.prototype.O;
    td.prototype.getProperties = td.prototype.N;
    td.prototype.set = td.prototype.set;
    td.prototype.setProperties = td.prototype.H;
    td.prototype.unset = td.prototype.P;
    td.prototype.changed = td.prototype.s;
    td.prototype.dispatchEvent = td.prototype.b;
    td.prototype.getRevision = td.prototype.L;
    td.prototype.on = td.prototype.J;
    td.prototype.once = td.prototype.once;
    td.prototype.un = td.prototype.K;
    Zk.prototype.getMap = Zk.prototype.g;
    Zk.prototype.setMap = Zk.prototype.setMap;
    Zk.prototype.setTarget = Zk.prototype.i;
    Zk.prototype.get = Zk.prototype.get;
    Zk.prototype.getKeys = Zk.prototype.O;
    Zk.prototype.getProperties = Zk.prototype.N;
    Zk.prototype.set = Zk.prototype.set;
    Zk.prototype.setProperties = Zk.prototype.H;
    Zk.prototype.unset = Zk.prototype.P;
    Zk.prototype.changed = Zk.prototype.s;
    Zk.prototype.dispatchEvent = Zk.prototype.b;
    Zk.prototype.getRevision = Zk.prototype.L;
    Zk.prototype.on = Zk.prototype.J;
    Zk.prototype.once = Zk.prototype.once;
    Zk.prototype.un = Zk.prototype.K;
    dl.prototype.getMap = dl.prototype.g;
    dl.prototype.setMap = dl.prototype.setMap;
    dl.prototype.setTarget = dl.prototype.i;
    dl.prototype.get = dl.prototype.get;
    dl.prototype.getKeys = dl.prototype.O;
    dl.prototype.getProperties = dl.prototype.N;
    dl.prototype.set = dl.prototype.set;
    dl.prototype.setProperties = dl.prototype.H;
    dl.prototype.unset = dl.prototype.P;
    dl.prototype.changed = dl.prototype.s;
    dl.prototype.dispatchEvent = dl.prototype.b;
    dl.prototype.getRevision = dl.prototype.L;
    dl.prototype.on = dl.prototype.J;
    dl.prototype.once = dl.prototype.once;
    dl.prototype.un = dl.prototype.K;
    return OPENLAYERS.ol;
}));
