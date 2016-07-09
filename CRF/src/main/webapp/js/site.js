/*! formstone v1.1.3 [site.js] 2016-05-24 | GPL-3.0 License | formstone.it */

/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */
! function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    function c(a) {
        var b = !! a && "length" in a && a.length,
            c = fa.type(a);
        return "function" === c || fa.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (fa.isFunction(b)) return fa.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return fa.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (pa.test(b)) return fa.filter(b, a, c);
            b = fa.filter(b, a)
        }
        return fa.grep(a, function (a) {
            return _.call(b, a) > -1 !== c
        })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = {};
        return fa.each(a.match(va) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        X.removeEventListener("DOMContentLoaded", g), a.removeEventListener("load", g), fa.ready()
    }

    function h() {
        this.expando = fa.expando + h.uid++
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Ca, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Ba.test(c) ? fa.parseJSON(c) : c
                } catch (e) {}
                Aa.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function () {
                return d.cur()
            } : function () {
                return fa.css(a, b, "")
            }, i = h(),
            j = c && c[3] || (fa.cssNumber[b] ? "" : "px"),
            k = (fa.cssNumber[b] || "px" !== j && +i) && Ea.exec(fa.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, fa.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function k(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && fa.nodeName(a, b) ? fa.merge([a], c) : c
    }

    function l(a, b) {
        for (var c = 0, d = a.length; d > c; c++) za.set(a[c], "globalEval", !b || za.get(b[c], "globalEval"))
    }

    function m(a, b, c, d, e) {
        for (var f, g, h, i, j, m, n = b.createDocumentFragment(), o = [], p = 0, q = a.length; q > p; p++)
            if (f = a[p], f || 0 === f)
                if ("object" === fa.type(f)) fa.merge(o, f.nodeType ? [f] : f);
                else if (La.test(f)) {
            for (g = g || n.appendChild(b.createElement("div")), h = (Ia.exec(f) || ["", ""])[1].toLowerCase(), i = Ka[h] || Ka._default, g.innerHTML = i[1] + fa.htmlPrefilter(f) + i[2], m = i[0]; m--;) g = g.lastChild;
            fa.merge(o, g.childNodes), g = n.firstChild, g.textContent = ""
        } else o.push(b.createTextNode(f));
        for (n.textContent = "", p = 0; f = o[p++];)
            if (d && fa.inArray(f, d) > -1) e && e.push(f);
            else if (j = fa.contains(f.ownerDocument, f), g = k(n.appendChild(f), "script"), j && l(g), c)
            for (m = 0; f = g[m++];) Ja.test(f.type || "") && c.push(f);
        return n
    }

    function n() {
        return !0
    }

    function o() {
        return !1
    }

    function p() {
        try {
            return X.activeElement
        } catch (a) {}
    }

    function q(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) q(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = o;
        else if (!e) return this;
        return 1 === f && (g = e, e = function (a) {
            return fa().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = fa.guid++)), a.each(function () {
            fa.event.add(this, b, e, d, c)
        })
    }

    function r(a, b) {
        return fa.nodeName(a, "table") && fa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }

    function s(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function t(a) {
        var b = Sa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function u(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (za.hasData(a) && (f = za.access(a), g = za.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) fa.event.add(b, e, j[e][c])
            }
            Aa.hasData(a) && (h = Aa.access(a), i = fa.extend({}, h), Aa.set(b, i))
        }
    }

    function v(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Ha.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function w(a, b, c, d) {
        b = Z.apply([], b);
        var e, f, g, h, i, j, l = 0,
            n = a.length,
            o = n - 1,
            p = b[0],
            q = fa.isFunction(p);
        if (q || n > 1 && "string" == typeof p && !da.checkClone && Ra.test(p)) return a.each(function (e) {
            var f = a.eq(e);
            q && (b[0] = p.call(this, e, f.html())), w(f, b, c, d)
        });
        if (n && (e = m(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (g = fa.map(k(e, "script"), s), h = g.length; n > l; l++) i = e, l !== o && (i = fa.clone(i, !0, !0), h && fa.merge(g, k(i, "script"))), c.call(a[l], i, l);
            if (h)
                for (j = g[g.length - 1].ownerDocument, fa.map(g, t), l = 0; h > l; l++) i = g[l], Ja.test(i.type || "") && !za.access(i, "globalEval") && fa.contains(j, i) && (i.src ? fa._evalUrl && fa._evalUrl(i.src) : fa.globalEval(i.textContent.replace(Ta, "")))
        }
        return a
    }

    function x(a, b, c) {
        for (var d, e = b ? fa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || fa.cleanData(k(d)), d.parentNode && (c && fa.contains(d.ownerDocument, d) && l(k(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function y(a, b) {
        var c = fa(b.createElement(a)).appendTo(b.body),
            d = fa.css(c[0], "display");
        return c.detach(), d
    }

    function z(a) {
        var b = X,
            c = Va[a];
        return c || (c = y(a, b), "none" !== c && c || (Ua = (Ua || fa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Ua[0].contentDocument, b.write(), b.close(), c = y(a, b), Ua.detach()), Va[a] = c), c
    }

    function A(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ya(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || fa.contains(a.ownerDocument, a) || (g = fa.style(a, b)), !da.pixelMarginRight() && Xa.test(g) && Wa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function B(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function C(a) {
        if (a in db) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = cb.length; c--;)
            if (a = cb[c] + b, a in db) return a
    }

    function D(a, b, c) {
        var d = Ea.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += fa.css(a, c + Fa[f], !0, e)), d ? ("content" === c && (g -= fa.css(a, "padding" + Fa[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + Fa[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + Fa[f], !0, e), "padding" !== c && (g += fa.css(a, "border" + Fa[f] + "Width", !0, e)));
        return g
    }

    function F(b, c, d) {
        var e = !0,
            f = "width" === c ? b.offsetWidth : b.offsetHeight,
            g = Ya(b),
            h = "border-box" === fa.css(b, "boxSizing", !1, g);
        if (X.msFullscreenElement && a.top !== a && b.getClientRects().length && (f = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= f || null == f) {
            if (f = A(b, c, g), (0 > f || null == f) && (f = b.style[c]), Xa.test(f)) return f;
            e = h && (da.boxSizingReliable() || f === b.style[c]), f = parseFloat(f) || 0
        }
        return f + E(b, c, d || (h ? "border" : "content"), e, g) + "px"
    }

    function G(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = za.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ga(d) && (f[g] = za.access(d, "olddisplay", z(d.nodeName)))) : (e = Ga(d), "none" === c && e || za.set(d, "olddisplay", e ? c : fa.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function H(a, b, c, d, e) {
        return new H.prototype.init(a, b, c, d, e)
    }

    function I() {
        return a.setTimeout(function () {
            eb = void 0
        }), eb = fa.now()
    }

    function J(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = Fa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function K(a, b, c) {
        for (var d, e = (N.tweeners[b] || []).concat(N.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function L(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {}, n = a.style,
            o = a.nodeType && Ga(a),
            p = za.get(a, "fxshow");
        c.queue || (h = fa._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, fa.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = fa.css(a, "display"), k = "none" === j ? za.get(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === fa.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function () {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], gb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || fa.style(a, d)
            } else j = void 0;
        if (fa.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = za.access(a, "fxshow", {}), f && (p.hidden = !o), o ? fa(a).show() : l.done(function () {
                fa(a).hide()
            }), l.done(function () {
                var b;
                za.remove(a, "fxshow");
                for (b in m) fa.style(a, b, m[b])
            });
            for (d in m) g = K(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function M(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = fa.camelCase(c), e = b[d], f = a[c], fa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fa.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function N(a, b, c) {
        var d, e, f = 0,
            g = N.prefilters.length,
            h = fa.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = eb || I(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            }, j = h.promise({
                elem: a,
                props: fa.extend({}, b),
                opts: fa.extend(!0, {
                    specialEasing: {},
                    easing: fa.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: eb || I(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (M(k, j.opts.specialEasing); g > f; f++)
            if (d = N.prefilters[f].call(j, a, k, j.opts)) return fa.isFunction(d.stop) && (fa._queueHooks(j.elem, j.opts.queue).stop = fa.proxy(d.stop, d)), d;
        return fa.map(k, K, j), fa.isFunction(j.opts.start) && j.opts.start.call(a, j), fa.fx.timer(fa.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function O(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function P(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(va) || [];
            if (fa.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Q(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, fa.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {}, g = a === zb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function R(a, b) {
        var c, d, e = fa.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && fa.extend(!0, a, d), a
    }

    function S(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function T(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function U(a, b, c, d) {
        var e;
        if (fa.isArray(b)) fa.each(b, function (b, e) {
            c || Db.test(a) ? d(a, e) : U(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== fa.type(b)) d(a, b);
        else
            for (e in b) U(a + "[" + e + "]", b[e], c, d)
    }

    function V(a) {
        return fa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var W = [],
        X = a.document,
        Y = W.slice,
        Z = W.concat,
        $ = W.push,
        _ = W.indexOf,
        aa = {}, ba = aa.toString,
        ca = aa.hasOwnProperty,
        da = {}, ea = "2.2.0",
        fa = function (a, b) {
            return new fa.fn.init(a, b)
        }, ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ha = /^-ms-/,
        ia = /-([\da-z])/gi,
        ja = function (a, b) {
            return b.toUpperCase()
        };
    fa.fn = fa.prototype = {
        jquery: ea,
        constructor: fa,
        selector: "",
        length: 0,
        toArray: function () {
            return Y.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : Y.call(this)
        },
        pushStack: function (a) {
            var b = fa.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a) {
            return fa.each(this, a)
        },
        map: function (a) {
            return this.pushStack(fa.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: $,
        sort: W.sort,
        splice: W.splice
    }, fa.extend = fa.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || fa.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (fa.isPlainObject(d) || (e = fa.isArray(d))) ? (e ? (e = !1, f = c && fa.isArray(c) ? c : []) : f = c && fa.isPlainObject(c) ? c : {}, g[b] = fa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, fa.extend({
        expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === fa.type(a)
        },
        isArray: Array.isArray,
        isWindow: function (a) {
            return null != a && a === a.window
        },
        isNumeric: function (a) {
            var b = a && a.toString();
            return !fa.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function (a) {
            return "object" !== fa.type(a) || a.nodeType || fa.isWindow(a) ? !1 : !a.constructor || ca.call(a.constructor.prototype, "isPrototypeOf")
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? aa[ba.call(a)] || "object" : typeof a
        },
        globalEval: function (a) {
            var b, c = eval;
            a = fa.trim(a), a && (1 === a.indexOf("use strict") ? (b = X.createElement("script"), b.text = a, X.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function (a) {
            return a.replace(ha, "ms-").replace(ia, ja)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b) {
            var d, e = 0;
            if (c(a))
                for (d = a.length; d > e && b.call(a[e], e, a[e]) !== !1; e++);
            else
                for (e in a)
                    if (b.call(a[e], e, a[e]) === !1) break; return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(ga, "")
        },
        makeArray: function (a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : $.call(d, a)), d
        },
        inArray: function (a, b, c) {
            return null == b ? -1 : _.call(b, a, c)
        },
        merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, d) {
            var e, f, g = 0,
                h = [];
            if (c(a))
                for (e = a.length; e > g; g++) f = b(a[g], g, d), null != f && h.push(f);
            else
                for (g in a) f = b(a[g], g, d), null != f && h.push(f);
            return Z.apply([], h)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), fa.isFunction(a) ? (d = Y.call(arguments, 2), e = function () {
                return a.apply(b || this, d.concat(Y.call(arguments)))
            }, e.guid = a.guid = a.guid || fa.guid++, e) : void 0
        },
        now: Date.now,
        support: da
    }), "function" == typeof Symbol && (fa.fn[Symbol.iterator] = W[Symbol.iterator]), fa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        aa["[object " + b + "]"] = b.toLowerCase()
    });
    var ka = function (a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o = b && b.ownerDocument,
                p = b ? b.nodeType : 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== p && 9 !== p && 11 !== p) return c;
            if (!d && ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, I)) {
                if (11 !== p && (j = ra.exec(a)))
                    if (e = j[1]) {
                        if (9 === p) {
                            if (!(g = b.getElementById(e))) return c;
                            if (g.id === e) return c.push(g), c
                        } else if (o && (g = o.getElementById(e)) && M(b, g) && g.id === e) return c.push(g), c
                    } else {
                        if (j[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((e = j[3]) && v.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
                    }
                if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
                    if (1 !== p) o = b, n = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((h = b.getAttribute("id")) ? h = h.replace(ta, "\\$&") : b.setAttribute("id", h = N), l = z(a), f = l.length, i = ma.test(h) ? "#" + h : "[id='" + h + "']"; f--;) l[f] = i + " " + m(l[f]);
                        n = l.join(","), o = sa.test(a) && k(b.parentNode) || b
                    }
                    if (n) try {
                        return $.apply(c, o.querySelectorAll(n)), c
                    } catch (q) {} finally {
                        h === N && b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ha, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = c.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function (b) {
                return b = +b, d(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j, k = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (j = b[N] || (b[N] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === P && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
                    return a === b
                }, g, !0), j = n(function (a) {
                    return aa(b, a) > -1
                }, g, !0), k = [
                    function (a, c, d) {
                        var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                        return b = null, e
                    }
                ]; e > h; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ha, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function (d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g === G || g || j); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0, g || k.ownerDocument === G || (F(k), h = !I); m = a[l++];)
                                if (m(k, g || G, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function (a, b) {
                return a === b && (E = !0), 0
            }, V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
            fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
            ga = new RegExp(ca + "+", "g"),
            ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ia = new RegExp("^" + ca + "*," + ca + "*"),
            ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            la = new RegExp(fa),
            ma = new RegExp("^" + da + "$"),
            na = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da + "|[*])"),
                ATTR: new RegExp("^" + ea),
                PSEUDO: new RegExp("^" + fa),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            }, oa = /^(?:input|select|textarea|button)$/i,
            pa = /^h\d$/i,
            qa = /^[^{]+\{\s*\[native \w/,
            ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            sa = /[+~]/,
            ta = /'|\\/g,
            ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            va = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, wa = function () {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (xa) {
            $ = {
                apply: X.length ? function (a, b) {
                    Z.apply(a, _.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function (a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = G.documentElement, I = !y(G), (c = G.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", wa, !1) : c.attachEvent && c.attachEvent("onunload", wa)), v.attributes = e(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function (a) {
                return a.appendChild(G.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = qa.test(G.getElementsByClassName), v.getById = e(function (a) {
                return H.appendChild(a).id = N, !G.getElementsByName || !G.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, w.filter.ID = function (a) {
                var b = a.replace(ua, va);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function (a) {
                var b = a.replace(ua, va);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function (a, b) {
                return "undefined" != typeof b.getElementsByClassName && I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = qa.test(G.querySelectorAll)) && (e(function (a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function (a) {
                var b = G.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = qa.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", fa)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = qa.test(H.compareDocumentPosition), M = b || qa.test(H.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function (a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === G || a.ownerDocument === O && M(O, a) ? -1 : b === G || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function (a, b) {
                if (a === b) return E = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === G ? -1 : b === G ? 1 : e ? -1 : f ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (e === f) return g(a, b);
                for (c = a; c = c.parentNode;) h.unshift(c);
                for (c = b; c = c.parentNode;) i.unshift(c);
                for (; h[d] === i[d];) d++;
                return d ? g(h[d], i[d]) : h[d] === O ? -1 : i[d] === O ? 1 : 0
            }, G) : G
        }, b.matches = function (a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function (a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(ka, "='$1']"), v.matchesSelector && I && !T[c + " "] && (!K || !K.test(c)) && (!J || !J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function (a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function (a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function (a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function (a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: na,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ua, va), a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ua, va).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, c, d) {
                    return function (e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (m = b; m = m[p];)
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (m = q, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [P, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n), t === !1)
                                for (;
                                    (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [P, t]), m !== b)););
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function (a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function (a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ha, "$1"));
                    return e[N] ? d(function (a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function (a) {
                    return function (c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function (a) {
                    return a = a.replace(ua, va),
                    function (b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }),
                lang: d(function (a) {
                    return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ua, va).toLowerCase(),
                    function (b) {
                        var c;
                        do
                            if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === H
                },
                focus: function (a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !! a.checked || "option" === b && !! a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !w.pseudos.empty(a)
                },
                header: function (a) {
                    return pa.test(a.nodeName)
                },
                input: function (a) {
                    return oa.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function () {
                    return [0]
                }),
                last: j(function (a, b) {
                    return [b - 1]
                }),
                eq: j(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: j(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                (!d || (e = ia.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ha, " ")
                }), h = h.slice(d.length));
                for (g in w.filter)!(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function (a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(ua, va), sa.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, !b || sa.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !! E, F(), v.sortDetached = e(function (a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function (a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    fa.find = ka, fa.expr = ka.selectors, fa.expr[":"] = fa.expr.pseudos, fa.uniqueSort = fa.unique = ka.uniqueSort, fa.text = ka.getText, fa.isXMLDoc = ka.isXML, fa.contains = ka.contains;
    var la = function (a, b, c) {
        for (var d = [], e = void 0 !== c;
            (a = a[b]) && 9 !== a.nodeType;)
            if (1 === a.nodeType) {
                if (e && fa(a).is(c)) break;
                d.push(a)
            }
        return d
    }, ma = function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }, na = fa.expr.match.needsContext,
        oa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        pa = /^.[^:#\[\.,]*$/;
    fa.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [d] : [] : fa.find.matches(a, fa.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, fa.fn.extend({
        find: function (a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(fa(a).filter(function () {
                for (b = 0; c > b; b++)
                    if (fa.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) fa.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? fa.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function (a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function (a) {
            return !!d(this, "string" == typeof a && na.test(a) ? fa(a) : a || [], !1).length
        }
    });
    var qa, ra = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        sa = fa.fn.init = function (a, b, c) {
            var d, e;
            if (!a) return this;
            if (c = c || qa, "string" == typeof a) {
                if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ra.exec(a), !d || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (d[1]) {
                    if (b = b instanceof fa ? b[0] : b, fa.merge(this, fa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : X, !0)), oa.test(d[1]) && fa.isPlainObject(b))
                        for (d in b) fa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                    return this
                }
                return e = X.getElementById(d[2]), e && e.parentNode && (this.length = 1, this[0] = e), this.context = X, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fa.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(fa) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), fa.makeArray(a, this))
        };
    sa.prototype = fa.fn, qa = fa(X);
    var ta = /^(?:parents|prev(?:Until|All))/,
        ua = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fa.fn.extend({
        has: function (a) {
            var b = fa(a, this),
                c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)
                    if (fa.contains(this, b[a])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = na.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? fa.uniqueSort(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? _.call(fa(a), this[0]) : _.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(fa.uniqueSort(fa.merge(this.get(), fa(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), fa.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return la(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return la(a, "parentNode", c)
        },
        next: function (a) {
            return e(a, "nextSibling")
        },
        prev: function (a) {
            return e(a, "previousSibling")
        },
        nextAll: function (a) {
            return la(a, "nextSibling")
        },
        prevAll: function (a) {
            return la(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return la(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return la(a, "previousSibling", c)
        },
        siblings: function (a) {
            return ma((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return ma(a.firstChild)
        },
        contents: function (a) {
            return a.contentDocument || fa.merge([], a.childNodes)
        }
    }, function (a, b) {
        fa.fn[a] = function (c, d) {
            var e = fa.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fa.filter(d, e)), this.length > 1 && (ua[a] || fa.uniqueSort(e), ta.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var va = /\S+/g;
    fa.Callbacks = function (a) {
        a = "string" == typeof a ? f(a) : fa.extend({}, a);
        var b, c, d, e, g = [],
            h = [],
            i = -1,
            j = function () {
                for (e = a.once, d = b = !0; h.length; i = -1)
                    for (c = h.shift(); ++i < g.length;) g[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = g.length, c = !1);
                a.memory || (c = !1), b = !1, e && (g = c ? [] : "")
            }, k = {
                add: function () {
                    return g && (c && !b && (i = g.length - 1, h.push(c)), function d(b) {
                        fa.each(b, function (b, c) {
                            fa.isFunction(c) ? a.unique && k.has(c) || g.push(c) : c && c.length && "string" !== fa.type(c) && d(c)
                        })
                    }(arguments), c && !b && j()), this
                },
                remove: function () {
                    return fa.each(arguments, function (a, b) {
                        for (var c;
                            (c = fa.inArray(b, g, c)) > -1;) g.splice(c, 1), i >= c && i--
                    }), this
                },
                has: function (a) {
                    return a ? fa.inArray(a, g) > -1 : g.length > 0
                },
                empty: function () {
                    return g && (g = []), this
                },
                disable: function () {
                    return e = h = [], g = c = "", this
                },
                disabled: function () {
                    return !g
                },
                lock: function () {
                    return e = h = [], c || (g = c = ""), this
                },
                locked: function () {
                    return !!e
                },
                fireWith: function (a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this
                },
                fire: function () {
                    return k.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return k
    }, fa.extend({
        Deferred: function (a) {
            var b = [
                ["resolve", "done", fa.Callbacks("once memory"), "resolved"],
                ["reject", "fail", fa.Callbacks("once memory"), "rejected"],
                ["notify", "progress", fa.Callbacks("memory")]
            ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return fa.Deferred(function (c) {
                            fa.each(b, function (b, f) {
                                var g = fa.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && fa.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? fa.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, fa.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b, c, d, e = 0,
                f = Y.call(arguments),
                g = f.length,
                h = 1 !== g || a && fa.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : fa.Deferred(),
                j = function (a, c, d) {
                    return function (e) {
                        c[a] = this, d[a] = arguments.length > 1 ? Y.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fa.isFunction(f[e].promise) ? f[e].promise().progress(j(e, c, b)).done(j(e, d, f)).fail(i.reject) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var wa;
    fa.fn.ready = function (a) {
        return fa.ready.promise().done(a), this
    }, fa.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? fa.readyWait++ : fa.ready(!0)
        },
        ready: function (a) {
            (a === !0 ? --fa.readyWait : fa.isReady) || (fa.isReady = !0, a !== !0 && --fa.readyWait > 0 || (wa.resolveWith(X, [fa]), fa.fn.triggerHandler && (fa(X).triggerHandler("ready"), fa(X).off("ready"))))
        }
    }), fa.ready.promise = function (b) {
        return wa || (wa = fa.Deferred(), "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? a.setTimeout(fa.ready) : (X.addEventListener("DOMContentLoaded", g), a.addEventListener("load", g))), wa.promise(b)
    }, fa.ready.promise();
    var xa = function (a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === fa.type(c)) {
            e = !0;
            for (h in c) xa(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, fa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(fa(a), c)
        })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, ya = function (a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    h.uid = 1, h.prototype = {
        register: function (a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        },
        cache: function (a) {
            if (!ya(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, ya(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function (a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d];
            return e
        },
        get: function (a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, fa.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function (a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else {
                    fa.isArray(b) ? d = b.concat(b.map(fa.camelCase)) : (e = fa.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(va) || [])), c = d.length;
                    for (; c--;) delete f[d[c]]
                }(void 0 === b || fa.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function (a) {
            var b = a[this.expando];
            return void 0 !== b && !fa.isEmptyObject(b)
        }
    };
    var za = new h,
        Aa = new h,
        Ba = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ca = /[A-Z]/g;
    fa.extend({
        hasData: function (a) {
            return Aa.hasData(a) || za.hasData(a)
        },
        data: function (a, b, c) {
            return Aa.access(a, b, c)
        },
        removeData: function (a, b) {
            Aa.remove(a, b)
        },
        _data: function (a, b, c) {
            return za.access(a, b, c)
        },
        _removeData: function (a, b) {
            za.remove(a, b)
        }
    }), fa.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = Aa.get(f), 1 === f.nodeType && !za.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = fa.camelCase(d.slice(5)), i(f, d, e[d])));
                    za.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                Aa.set(this, a)
            }) : xa(this, function (b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = Aa.get(f, a) || Aa.get(f, a.replace(Ca, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = fa.camelCase(a), c = Aa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else d = fa.camelCase(a), this.each(function () {
                    var c = Aa.get(this, d);
                    Aa.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && Aa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function (a) {
            return this.each(function () {
                Aa.remove(this, a)
            })
        }
    }), fa.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = za.get(a, b), c && (!d || fa.isArray(c) ? d = za.access(a, b, fa.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = fa.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = fa._queueHooks(a, b),
                g = function () {
                    fa.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return za.get(a, c) || za.access(a, c, {
                empty: fa.Callbacks("once memory").add(function () {
                    za.remove(a, [b + "queue", c])
                })
            })
        }
    }), fa.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? fa.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = fa.queue(this, a, b);
                fa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                fa.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = fa.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = za.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Da = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ea = new RegExp("^(?:([+-])=|)(" + Da + ")([a-z%]*)$", "i"),
        Fa = ["Top", "Right", "Bottom", "Left"],
        Ga = function (a, b) {
            return a = b || a, "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
        }, Ha = /^(?:checkbox|radio)$/i,
        Ia = /<([\w:-]+)/,
        Ja = /^$|\/(?:java|ecma)script/i,
        Ka = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ka.optgroup = Ka.option, Ka.tbody = Ka.tfoot = Ka.colgroup = Ka.caption = Ka.thead, Ka.th = Ka.td;
    var La = /<|&#?\w+;/;
    ! function () {
        var a = X.createDocumentFragment(),
            b = a.appendChild(X.createElement("div")),
            c = X.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", da.noCloneChecked = !! b.cloneNode(!0).lastChild.defaultValue
    }();
    var Ma = /^key/,
        Na = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Oa = /^([^.]*)(?:\.(.+)|)/;
    fa.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = za.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = fa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                    return "undefined" != typeof fa && fa.event.triggered !== b.type ? fa.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(va) || [""], j = b.length; j--;) h = Oa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = fa.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = fa.event.special[n] || {}, k = fa.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && fa.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), fa.event.global[n] = !0)
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = za.hasData(a) && za.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(va) || [""], j = b.length; j--;)
                    if (h = Oa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fa.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) fa.event.remove(a, n + b[j], c, d, !0);
                fa.isEmptyObject(i) && za.remove(a, "handle events")
            }
        },
        dispatch: function (a) {
            a = fa.event.fix(a);
            var b, c, d, e, f, g = [],
                h = Y.call(arguments),
                i = (za.get(this, "events") || {})[a.type] || [],
                j = fa.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = fa.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.rnamespace || a.rnamespace.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((fa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? fa(e, this).index(i) > -1 : fa.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || X, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[fa.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = X), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== p() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && fa.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return fa.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, fa.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, fa.Event = function (a, b) {
        return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? n : o) : this.type = a, b && fa.extend(this, b), this.timeStamp = a && a.timeStamp || fa.now(), void(this[fa.expando] = !0)) : new fa.Event(a, b)
    }, fa.Event.prototype = {
        constructor: fa.Event,
        isDefaultPrevented: o,
        isPropagationStopped: o,
        isImmediatePropagationStopped: o,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = n, a && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = n, a && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = n, a && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, fa.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        fa.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !fa.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), fa.fn.extend({
        on: function (a, b, c, d) {
            return q(this, a, b, c, d)
        },
        one: function (a, b, c, d) {
            return q(this, a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, fa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = o), this.each(function () {
                fa.event.remove(this, a, c, b)
            })
        }
    });
    var Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Qa = /<script|<style|<link/i,
        Ra = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Sa = /^true\/(.*)/,
        Ta = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    fa.extend({
        htmlPrefilter: function (a) {
            return a.replace(Pa, "<$1></$2>")
        },
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = fa.contains(a.ownerDocument, a);
            if (!(da.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fa.isXMLDoc(a)))
                for (g = k(h), f = k(a), d = 0, e = f.length; e > d; d++) v(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || k(a), g = g || k(h), d = 0, e = f.length; e > d; d++) u(f[d], g[d]);
                else u(a, h);
            return g = k(h, "script"), g.length > 0 && l(g, !i && k(a, "script")), h
        },
        cleanData: function (a) {
            for (var b, c, d, e = fa.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (ya(c)) {
                    if (b = c[za.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, b.handle);
                        c[za.expando] = void 0
                    }
                    c[Aa.expando] && (c[Aa.expando] = void 0)
                }
        }
    }), fa.fn.extend({
        domManip: w,
        detach: function (a) {
            return x(this, a, !0)
        },
        remove: function (a) {
            return x(this, a)
        },
        text: function (a) {
            return xa(this, function (a) {
                return void 0 === a ? fa.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function () {
            return w(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = r(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return w(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = r(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return w(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return w(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fa.cleanData(k(a, !1)), a.textContent = "");
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return fa.clone(this, a, b)
            })
        },
        html: function (a) {
            return xa(this, function (a) {
                var b = this[0] || {}, c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Qa.test(a) && !Ka[(Ia.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = fa.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (fa.cleanData(k(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = [];
            return w(this, arguments, function (b) {
                var c = this.parentNode;
                fa.inArray(this, a) < 0 && (fa.cleanData(k(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), fa.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        fa.fn[a] = function (a) {
            for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), fa(e[g])[b](c), $.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ua, Va = {
            HTML: "block",
            BODY: "block"
        }, Wa = /^margin/,
        Xa = new RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"),
        Ya = function (b) {
            var c = b.ownerDocument.defaultView;
            return c.opener || (c = a), c.getComputedStyle(b)
        }, Za = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        }, $a = X.documentElement;
    ! function () {
        function b() {
            h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", $a.appendChild(g);
            var b = a.getComputedStyle(h);
            c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", e = "4px" === b.marginRight, $a.removeChild(g)
        }
        var c, d, e, f, g = X.createElement("div"),
            h = X.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), fa.extend(da, {
            pixelPosition: function () {
                return b(), c
            },
            boxSizingReliable: function () {
                return null == d && b(), d
            },
            pixelMarginRight: function () {
                return null == d && b(), e
            },
            reliableMarginLeft: function () {
                return null == d && b(), f
            },
            reliableMarginRight: function () {
                var b, c = h.appendChild(X.createElement("div"));
                return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", $a.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), $a.removeChild(g), h.removeChild(c), b
            }
        }))
    }();
    var _a = /^(none|table(?!-c[ea]).+)/,
        ab = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, bb = {
            letterSpacing: "0",
            fontWeight: "400"
        }, cb = ["Webkit", "O", "Moz", "ms"],
        db = X.createElement("div").style;
    fa.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = A(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = fa.camelCase(b),
                    i = a.style;
                return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h), g = fa.cssHooks[b] || fa.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ea.exec(c)) && e[1] && (c = j(a, b, e), f = "number"), void(null != c && c === c && ("number" === f && (c += e && e[3] || (fa.cssNumber[h] ? "" : "px")), da.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = fa.camelCase(b);
            return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h), g = fa.cssHooks[b] || fa.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = A(a, b, d)), "normal" === e && b in bb && (e = bb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), fa.each(["height", "width"], function (a, b) {
        fa.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? _a.test(fa.css(a, "display")) && 0 === a.offsetWidth ? Za(a, ab, function () {
                    return F(a, b, d)
                }) : F(a, b, d) : void 0
            },
            set: function (a, c, d) {
                var e, f = d && Ya(a),
                    g = d && E(a, b, d, "border-box" === fa.css(a, "boxSizing", !1, f), f);
                return g && (e = Ea.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = fa.css(a, b)), D(a, c, g)
            }
        }
    }), fa.cssHooks.marginLeft = B(da.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(A(a, "marginLeft")) || a.getBoundingClientRect().left - Za(a, {
            marginLeft: 0
        }, function () {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), fa.cssHooks.marginRight = B(da.reliableMarginRight, function (a, b) {
        return b ? Za(a, {
            display: "inline-block"
        }, A, [a, "marginRight"]) : void 0
    }), fa.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        fa.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Fa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Wa.test(a) || (fa.cssHooks[a + b].set = D)
    }), fa.fn.extend({
        css: function (a, b) {
            return xa(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (fa.isArray(b)) {
                    for (d = Ya(a), e = b.length; e > g; g++) f[b[g]] = fa.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function () {
            return G(this, !0)
        },
        hide: function () {
            return G(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                Ga(this) ? fa(this).show() : fa(this).hide()
            })
        }
    }), fa.Tween = H, H.prototype = {
        constructor: H,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || fa.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fa.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = H.propHooks[this.prop];
            return a && a.get ? a.get(this) : H.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = H.propHooks[this.prop];
            return this.options.duration ? this.pos = b = fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = fa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function (a) {
                fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[fa.cssProps[a.prop]] && !fa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : fa.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, fa.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, fa.fx = H.prototype.init, fa.fx.step = {};
    var eb, fb, gb = /^(?:toggle|show|hide)$/,
        hb = /queueHooks$/;
    fa.Animation = fa.extend(N, {
        tweeners: {
            "*": [
                function (a, b) {
                    var c = this.createTween(a, b);
                    return j(c.elem, a, Ea.exec(b), c), c
                }
            ]
        },
        tweener: function (a, b) {
            fa.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(va);
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], N.tweeners[c] = N.tweeners[c] || [], N.tweeners[c].unshift(b)
        },
        prefilters: [L],
        prefilter: function (a, b) {
            b ? N.prefilters.unshift(a) : N.prefilters.push(a)
        }
    }), fa.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? fa.extend({}, a) : {
            complete: c || !c && b || fa.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !fa.isFunction(b) && b
        };
        return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            fa.isFunction(d.old) && d.old.call(this), d.queue && fa.dequeue(this, d.queue)
        }, d
    }, fa.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(Ga).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = fa.isEmptyObject(a),
                f = fa.speed(b, c, d),
                g = function () {
                    var b = N(this, fa.extend({}, a), f);
                    (e || za.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = fa.timers,
                    g = za.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && hb.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && fa.dequeue(this, a)
            })
        },
        finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = za.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = fa.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), fa.each(["toggle", "show", "hide"], function (a, b) {
        var c = fa.fn[b];
        fa.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(J(b, !0), a, d, e)
        }
    }), fa.each({
        slideDown: J("show"),
        slideUp: J("hide"),
        slideToggle: J("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        fa.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), fa.timers = [], fa.fx.tick = function () {
        var a, b = 0,
            c = fa.timers;
        for (eb = fa.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || fa.fx.stop(), eb = void 0
    }, fa.fx.timer = function (a) {
        fa.timers.push(a), a() ? fa.fx.start() : fa.timers.pop();
    }, fa.fx.interval = 13, fa.fx.start = function () {
        fb || (fb = a.setInterval(fa.fx.tick, fa.fx.interval))
    }, fa.fx.stop = function () {
        a.clearInterval(fb), fb = null
    }, fa.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, fa.fn.delay = function (b, c) {
        return b = fa.fx ? fa.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function () {
                a.clearTimeout(e)
            }
        })
    },
    function () {
        var a = X.createElement("input"),
            b = X.createElement("select"),
            c = b.appendChild(X.createElement("option"));
        a.type = "checkbox", da.checkOn = "" !== a.value, da.optSelected = c.selected, b.disabled = !0, da.optDisabled = !c.disabled, a = X.createElement("input"), a.value = "t", a.type = "radio", da.radioValue = "t" === a.value
    }();
    var ib, jb = fa.expr.attrHandle;
    fa.fn.extend({
        attr: function (a, b) {
            return xa(this, fa.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                fa.removeAttr(this, a)
            })
        }
    }), fa.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            return 3 !== f && 8 !== f && 2 !== f ? "undefined" == typeof a.getAttribute ? fa.prop(a, b, c) : (1 === f && fa.isXMLDoc(a) || (b = b.toLowerCase(), e = fa.attrHooks[b] || (fa.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void fa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = fa.find.attr(a, b), null == d ? void 0 : d)) : void 0
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(va);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = fa.propFix[c] || c, fa.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), ib = {
        set: function (a, b, c) {
            return b === !1 ? fa.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, fa.each(fa.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = jb[b] || fa.find.attr;
        jb[b] = function (a, b, d) {
            var e, f;
            return d || (f = jb[b], jb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, jb[b] = f), e
        }
    });
    var kb = /^(?:input|select|textarea|button)$/i,
        lb = /^(?:a|area)$/i;
    fa.fn.extend({
        prop: function (a, b) {
            return xa(this, fa.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[fa.propFix[a] || a]
            })
        }
    }), fa.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            return 3 !== f && 8 !== f && 2 !== f ? (1 === f && fa.isXMLDoc(a) || (b = fa.propFix[b] || b, e = fa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = fa.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), da.optSelected || (fa.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        fa.propFix[this.toLowerCase()] = this
    });
    var mb = /[\t\r\n\f]/g;
    fa.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (fa.isFunction(a)) return this.each(function (b) {
                fa(this).addClass(a.call(this, b, O(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(va) || []; c = this[i++];)
                    if (e = O(c), d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")) {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = fa.trim(d), e !== h && c.setAttribute("class", h)
                    }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (fa.isFunction(a)) return this.each(function (b) {
                fa(this).removeClass(a.call(this, b, O(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(va) || []; c = this[i++];)
                    if (e = O(c), d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")) {
                        for (g = 0; f = b[g++];)
                            for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                        h = fa.trim(d), e !== h && c.setAttribute("class", h)
                    }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fa.isFunction(a) ? this.each(function (c) {
                fa(this).toggleClass(a.call(this, c, O(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c)
                    for (d = 0, e = fa(this), f = a.match(va) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(void 0 === a || "boolean" === c) && (b = O(this), b && za.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : za.get(this, "__className__") || ""))
            })
        },
        hasClass: function (a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];)
                if (1 === c.nodeType && (" " + O(c) + " ").replace(mb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var nb = /\r/g;
    fa.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = fa.isFunction(a), this.each(function (c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, fa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : fa.isArray(e) && (e = fa.map(e, function (a) {
                    return null == a ? "" : a + ""
                })), b = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c)) : void 0
        }
    }), fa.extend({
        valHooks: {
            option: {
                get: function (a) {
                    return fa.trim(a.value)
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (da.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !fa.nodeName(c.parentNode, "optgroup"))) {
                            if (b = fa(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function (a, b) {
                    for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = fa.inArray(fa.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), fa.each(["radio", "checkbox"], function () {
        fa.valHooks[this] = {
            set: function (a, b) {
                return fa.isArray(b) ? a.checked = fa.inArray(fa(a).val(), b) > -1 : void 0
            }
        }, da.checkOn || (fa.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var ob = /^(?:focusinfocus|focusoutblur)$/;
    fa.extend(fa.event, {
        trigger: function (b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || X],
                n = ca.call(b, "type") ? b.type : b,
                o = ca.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || X, 3 !== d.nodeType && 8 !== d.nodeType && !ob.test(n + fa.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[fa.expando] ? b : new fa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : fa.makeArray(c, [b]), l = fa.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !fa.isWindow(d)) {
                    for (i = l.delegateType || n, ob.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || X) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (za.get(g, "events") || {})[b.type] && za.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && ya(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !ya(d) || j && fa.isFunction(d[n]) && !fa.isWindow(d) && (h = d[j], h && (d[j] = null), fa.event.triggered = n, d[n](), fa.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        simulate: function (a, b, c) {
            var d = fa.extend(new fa.Event, c, {
                type: a,
                isSimulated: !0
            });
            fa.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }), fa.fn.extend({
        trigger: function (a, b) {
            return this.each(function () {
                fa.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? fa.event.trigger(a, b, c, !0) : void 0
        }
    }), fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        fa.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), fa.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), da.focusin = "onfocusin" in a, da.focusin || fa.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            fa.event.simulate(b, a.target, fa.event.fix(a))
        };
        fa.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = za.access(d, b);
                e || d.addEventListener(a, c, !0), za.access(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = za.access(d, b) - 1;
                e ? za.access(d, b, e) : (d.removeEventListener(a, c, !0), za.remove(d, b))
            }
        }
    });
    var pb = a.location,
        qb = fa.now(),
        rb = /\?/;
    fa.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, fa.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return (!c || c.getElementsByTagName("parsererror").length) && fa.error("Invalid XML: " + b), c
    };
    var sb = /#.*$/,
        tb = /([?&])_=[^&]*/,
        ub = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        vb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        wb = /^(?:GET|HEAD)$/,
        xb = /^\/\//,
        yb = {}, zb = {}, Ab = "*/".concat("*"),
        Bb = X.createElement("a");
    Bb.href = pb.href, fa.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pb.href,
            type: "GET",
            isLocal: vb.test(pb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ab,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fa.parseJSON,
                "text xml": fa.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? R(R(a, fa.ajaxSettings), b) : R(fa.ajaxSettings, a)
        },
        ajaxPrefilter: P(yb),
        ajaxTransport: P(zb),
        ajax: function (b, c) {
            function d(b, c, d, h) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && a.clearTimeout(i), e = void 0, g = h || "", w.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (t = S(m, w, d)), t = T(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fa.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (fa.etag[f] = v)), 204 === b || "HEAD" === m.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, (b || !x) && (x = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = void 0, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fa.active || fa.event.trigger("ajaxStop")))
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = fa.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event,
                p = fa.Deferred(),
                q = fa.Callbacks("once memory"),
                r = m.statusCode || {}, s = {}, t = {}, u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === u) {
                            if (!h)
                                for (h = {}; b = ub.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return u || (m.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || v;
                        return e && e.abort(b), d(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((b || m.url || pb.href) + "").replace(sb, "").replace(xb, pb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fa.trim(m.dataType || "*").toLowerCase().match(va) || [""], null == m.crossDomain) {
                j = X.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = Bb.protocol + "//" + Bb.host != j.protocol + "//" + j.host
                } catch (x) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = fa.param(m.data, m.traditional)), Q(yb, m, c, w), 2 === u) return w;
            k = fa.event && m.global, k && 0 === fa.active++ && fa.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !wb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (rb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = tb.test(f) ? f.replace(tb, "$1_=" + qb++) : f + (rb.test(f) ? "&" : "?") + "_=" + qb++)), m.ifModified && (fa.lastModified[f] && w.setRequestHeader("If-Modified-Since", fa.lastModified[f]), fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ab + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) w[l](m[l]);
            if (e = Q(zb, m, c, w)) {
                if (w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), 2 === u) return w;
                m.async && m.timeout > 0 && (i = a.setTimeout(function () {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, e.send(s, d)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x)
                }
            } else d(-1, "No Transport");
            return w
        },
        getJSON: function (a, b, c) {
            return fa.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return fa.get(a, void 0, b, "script")
        }
    }), fa.each(["get", "post"], function (a, b) {
        fa[b] = function (a, c, d, e) {
            return fa.isFunction(c) && (e = e || d, d = c, c = void 0), fa.ajax(fa.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, fa.isPlainObject(a) && a))
        }
    }), fa._evalUrl = function (a) {
        return fa.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, fa.fn.extend({
        wrapAll: function (a) {
            var b;
            return fa.isFunction(a) ? this.each(function (b) {
                fa(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = fa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function (a) {
            return fa.isFunction(a) ? this.each(function (b) {
                fa(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = fa(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = fa.isFunction(a);
            return this.each(function (c) {
                fa(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes)
            }).end()
        }
    }), fa.expr.filters.hidden = function (a) {
        return !fa.expr.filters.visible(a)
    }, fa.expr.filters.visible = function (a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Cb = /%20/g,
        Db = /\[\]$/,
        Eb = /\r?\n/g,
        Fb = /^(?:submit|button|image|reset|file)$/i,
        Gb = /^(?:input|select|textarea|keygen)/i;
    fa.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = fa.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || a.jquery && !fa.isPlainObject(a)) fa.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) U(c, a[c], b, e);
        return d.join("&").replace(Cb, "+")
    }, fa.fn.extend({
        serialize: function () {
            return fa.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = fa.prop(this, "elements");
                return a ? fa.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !fa(this).is(":disabled") && Gb.test(this.nodeName) && !Fb.test(a) && (this.checked || !Ha.test(a))
            }).map(function (a, b) {
                var c = fa(this).val();
                return null == c ? null : fa.isArray(c) ? fa.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Eb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Eb, "\r\n")
                }
            }).get()
        }
    }), fa.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Hb = {
        0: 200,
        1223: 204
    }, Ib = fa.ajaxSettings.xhr();
    da.cors = !! Ib && "withCredentials" in Ib, da.ajax = Ib = !! Ib, fa.ajaxTransport(function (b) {
        var c, d;
        return da.cors || Ib && !b.crossDomain ? {
            send: function (e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function (a) {
                    return function () {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function () {
                c && c()
            }
        } : void 0
    }), fa.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (a) {
                return fa.globalEval(a), a
            }
        }
    }), fa.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), fa.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = fa("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), X.head.appendChild(b[0])
                },
                abort: function () {
                    c && c()
                }
            }
        }
    });
    var Jb = [],
        Kb = /(=)\?(?=&|$)|\?\?/;
    fa.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Jb.pop() || fa.expando + "_" + qb++;
            return this[a] = !0, a
        }
    }), fa.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = fa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (rb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || fa.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? fa(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && fa.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), da.createHTMLDocument = function () {
        var a = X.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), fa.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || (da.createHTMLDocument ? X.implementation.createHTMLDocument("") : X);
        var d = oa.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m([a], b, e), e && e.length && fa(e).remove(), fa.merge([], d.childNodes))
    };
    var Lb = fa.fn.load;
    fa.fn.load = function (a, b, c) {
        if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = fa.trim(a.slice(h)), a = a.slice(0, h)), fa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && fa.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(g, f || [a.responseText, b, a])
            })
        }), this
    }, fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        fa.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), fa.expr.filters.animated = function (a) {
        return fa.grep(fa.timers, function (b) {
            return a === b.elem
        }).length
    }, fa.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = fa.css(a, "position"),
                l = fa(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = fa.css(a, "top"), i = fa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fa.isFunction(b) && (b = b.call(a, c, fa.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, fa.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                fa.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                }, f = d && d.ownerDocument;
            return f ? (b = f.documentElement, fa.contains(b, d) ? (e = d.getBoundingClientRect(), c = V(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0
        },
        position: function () {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === fa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fa.nodeName(a[0], "html") || (d = a.offset()), d.top += fa.css(a[0], "borderTopWidth", !0) - a.scrollTop(), d.left += fa.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
                    top: b.top - d.top - fa.css(c, "marginTop", !0),
                    left: b.left - d.left - fa.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent; a && "static" === fa.css(a, "position");) a = a.offsetParent;
                return a || $a
            })
        }
    }), fa.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = "pageYOffset" === b;
        fa.fn[a] = function (d) {
            return xa(this, function (a, d, e) {
                var f = V(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), fa.each(["top", "left"], function (a, b) {
        fa.cssHooks[b] = B(da.pixelPosition, function (a, c) {
            return c ? (c = A(a, b), Xa.test(c) ? fa(a).position()[b] + "px" : c) : void 0
        })
    }), fa.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        fa.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            fa.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return xa(this, function (b, c, d) {
                    var e;
                    return fa.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? fa.css(b, c, g) : fa.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), fa.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function () {
            return this.length
        }
    }), fa.fn.andSelf = fa.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return fa
    });
    var Mb = a.jQuery,
        Nb = a.$;
    return fa.noConflict = function (b) {
        return a.$ === fa && (a.$ = Nb), b && a.jQuery === fa && (a.jQuery = Mb), fa
    }, b || (a.jQuery = a.$ = fa), fa
}), /*! formstone v1.1.3 [core.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
    "use strict";

    function b(a) {
        m.Plugins[a].initialized || (m.Plugins[a].methods._setup.call(document), m.Plugins[a].initialized = !0)
    }

    function c(a, b, c, d) {
        var e, f = {
                raw: {}
            };
        d = d || {};
        for (e in d) d.hasOwnProperty(e) && ("classes" === a ? (f.raw[d[e]] = b + "-" + d[e], f[d[e]] = "." + b + "-" + d[e]) : (f.raw[e] = d[e], f[e] = d[e] + "." + b));
        for (e in c) c.hasOwnProperty(e) && ("classes" === a ? (f.raw[e] = c[e].replace(/{ns}/g, b), f[e] = c[e].replace(/{ns}/g, "." + b)) : (f.raw[e] = c[e].replace(/.{ns}/g, ""), f[e] = c[e].replace(/{ns}/g, b)));
        return f
    }

    function d() {
        var a, b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }, c = ["transition", "-webkit-transition"],
            d = {
                transform: "transform",
                MozTransform: "-moz-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                webkitTransform: "-webkit-transform"
            }, e = "transitionend",
            f = "",
            g = "",
            h = document.createElement("div");
        for (a in b)
            if (b.hasOwnProperty(a) && a in h.style) {
                e = b[a], m.support.transition = !0;
                break
            }
        p.transitionEnd = e + ".{ns}";
        for (a in c)
            if (c.hasOwnProperty(a) && c[a] in h.style) {
                f = c[a];
                break
            }
        m.transition = f;
        for (a in d)
            if (d.hasOwnProperty(a) && d[a] in h.style) {
                m.support.transform = !0, g = d[a];
                break
            }
        m.transform = g
    }

    function e() {
        m.windowWidth = m.$window.width(), m.windowHeight = m.$window.height(), q = l.startTimer(q, r, f)
    }

    function f() {
        for (var a in m.ResizeHandlers) m.ResizeHandlers.hasOwnProperty(a) && m.ResizeHandlers[a].callback.call(window, m.windowWidth, m.windowHeight)
    }

    function g() {
        if (m.support.raf) {
            m.window.requestAnimationFrame(g);
            for (var a in m.RAFHandlers) m.RAFHandlers.hasOwnProperty(a) && m.RAFHandlers[a].callback.call(window)
        }
    }

    function h(a, b) {
        return parseInt(a.priority) - parseInt(b.priority)
    }
    var i = "undefined" != typeof window ? window : this,
        j = i.document,
        k = function () {
            this.Version = "1.1.3", this.Plugins = {}, this.DontConflict = !1, this.Conflicts = {
                fn: {}
            }, this.ResizeHandlers = [], this.RAFHandlers = [], this.window = i, this.$window = a(i), this.document = j, this.$document = a(j), this.$body = null, this.windowWidth = 0, this.windowHeight = 0, this.fallbackWidth = 1024, this.fallbackHeight = 768, this.userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera, this.isFirefox = /Firefox/i.test(this.userAgent), this.isChrome = /Chrome/i.test(this.userAgent), this.isSafari = /Safari/i.test(this.userAgent) && !this.isChrome, this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent), this.isIEMobile = /IEMobile/i.test(this.userAgent), this.isFirefoxMobile = this.isFirefox && this.isMobile, this.transform = null, this.transition = null, this.support = {
                file: !! (window.File && window.FileList && window.FileReader),
                history: !! (window.history && window.history.pushState && window.history.replaceState),
                matchMedia: !(!window.matchMedia && !window.msMatchMedia),
                pointer: !! window.PointerEvent,
                raf: !(!window.requestAnimationFrame || !window.cancelAnimationFrame),
                touch: !! ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                transition: !1,
                transform: !1
            }
        }, l = {
            killEvent: function (a, b) {
                try {
                    a.preventDefault(), a.stopPropagation(), b && a.stopImmediatePropagation()
                } catch (c) {}
            },
            startTimer: function (a, b, c, d) {
                return l.clearTimer(a), d ? setInterval(c, b) : setTimeout(c, b)
            },
            clearTimer: function (a, b) {
                a && (b ? clearInterval(a) : clearTimeout(a), a = null)
            },
            sortAsc: function (a, b) {
                return parseInt(a, 10) - parseInt(b, 10)
            },
            sortDesc: function (a, b) {
                return parseInt(b, 10) - parseInt(a, 10)
            },
            decodeEntities: function (a) {
                var b = m.document.createElement("textarea");
                return b.innerHTML = a, b.value
            },
            parseQueryString: function (a) {
                for (var b = {}, c = a.slice(a.indexOf("?") + 1).split("&"), d = 0; d < c.length; d++) {
                    var e = c[d].split("=");
                    b[e[0]] = e[1]
                }
                return b
            }
        }, m = new k,
        n = a.Deferred(),
        o = {
            base: "{ns}",
            element: "{ns}-element"
        }, p = {
            namespace: ".{ns}",
            beforeUnload: "beforeunload.{ns}",
            blur: "blur.{ns}",
            change: "change.{ns}",
            click: "click.{ns}",
            dblClick: "dblclick.{ns}",
            drag: "drag.{ns}",
            dragEnd: "dragend.{ns}",
            dragEnter: "dragenter.{ns}",
            dragLeave: "dragleave.{ns}",
            dragOver: "dragover.{ns}",
            dragStart: "dragstart.{ns}",
            drop: "drop.{ns}",
            error: "error.{ns}",
            focus: "focus.{ns}",
            focusIn: "focusin.{ns}",
            focusOut: "focusout.{ns}",
            input: "input.{ns}",
            keyDown: "keydown.{ns}",
            keyPress: "keypress.{ns}",
            keyUp: "keyup.{ns}",
            load: "load.{ns}",
            mouseDown: "mousedown.{ns}",
            mouseEnter: "mouseenter.{ns}",
            mouseLeave: "mouseleave.{ns}",
            mouseMove: "mousemove.{ns}",
            mouseOut: "mouseout.{ns}",
            mouseOver: "mouseover.{ns}",
            mouseUp: "mouseup.{ns}",
            panStart: "panstart.{ns}",
            pan: "pan.{ns}",
            panEnd: "panend.{ns}",
            resize: "resize.{ns}",
            scaleStart: "scalestart.{ns}",
            scaleEnd: "scaleend.{ns}",
            scale: "scale.{ns}",
            scroll: "scroll.{ns}",
            select: "select.{ns}",
            swipe: "swipe.{ns}",
            touchCancel: "touchcancel.{ns}",
            touchEnd: "touchend.{ns}",
            touchLeave: "touchleave.{ns}",
            touchMove: "touchmove.{ns}",
            touchStart: "touchstart.{ns}"
        };
    k.prototype.NoConflict = function () {
        m.DontConflict = !0;
        for (var b in m.Plugins) m.Plugins.hasOwnProperty(b) && (a[b] = m.Conflicts[b], a.fn[b] = m.Conflicts.fn[b])
    }, k.prototype.Plugin = function (d, e) {
        return m.Plugins[d] = function (b, d) {
            function e(c) {
                var e, f, h, i = "object" === a.type(c),
                    j = this,
                    k = a();
                for (c = a.extend(!0, {}, d.defaults || {}, i ? c : {}), f = 0, h = j.length; h > f; f++)
                    if (e = j.eq(f), !g(e)) {
                        var l = "__" + d.guid++,
                            m = d.classes.raw.base + l,
                            n = e.data(b + "-options"),
                            o = a.extend(!0, {
                                $el: e,
                                guid: l,
                                rawGuid: m,
                                dotGuid: "." + m
                            }, c, "object" === a.type(n) ? n : {});
                        e.addClass(d.classes.raw.element).data(r, o), d.methods._construct.apply(e, [o].concat(Array.prototype.slice.call(arguments, i ? 1 : 0))), k = k.add(e)
                    }
                for (f = 0, h = k.length; h > f; f++) e = k.eq(f), d.methods._postConstruct.apply(e, [g(e)]);
                return j
            }

            function f(a) {
                d.functions.iterate.apply(this, [d.methods._destruct].concat(Array.prototype.slice.call(arguments, 1))), this.removeClass(d.classes.raw.element).removeData(r)
            }

            function g(a) {
                return a.data(r)
            }

            function i(b) {
                if (this instanceof a) {
                    var c = d.methods[b];
                    return "object" !== a.type(b) && b ? c && 0 !== b.indexOf("_") ? d.functions.iterate.apply(this, [c].concat(Array.prototype.slice.call(arguments, 1))) : this : e.apply(this, arguments)
                }
            }

            function j(b) {
                var c = d.utilities[b] || d.utilities._initialize || !1;
                return c ? c.apply(window, Array.prototype.slice.call(arguments, "object" === a.type(b) ? 0 : 1)) : void 0
            }

            function k(b) {
                d.defaults = a.extend(!0, d.defaults, b || {})
            }

            function n(b) {
                for (var c = this, d = 0, e = c.length; e > d; d++) {
                    var f = c.eq(d),
                        h = g(f) || {};
                    "undefined" !== a.type(h.$el) && b.apply(f, [h].concat(Array.prototype.slice.call(arguments, 1)))
                }
                return c
            }
            var q = "fs-" + b,
                r = "fs" + b.replace(/(^|\s)([a-z])/g, function (a, b, c) {
                    return b + c.toUpperCase()
                });
            return d.initialized = !1, d.priority = d.priority || 10, d.classes = c("classes", q, o, d.classes), d.events = c("events", b, p, d.events), d.functions = a.extend({
                getData: g,
                iterate: n
            }, l, d.functions), d.methods = a.extend(!0, {
                _setup: a.noop,
                _construct: a.noop,
                _postConstruct: a.noop,
                _destruct: a.noop,
                _resize: !1,
                destroy: f
            }, d.methods), d.utilities = a.extend(!0, {
                _initialize: !1,
                _delegate: !1,
                defaults: k
            }, d.utilities), d.widget && (m.Conflicts.fn[b] = a.fn[b], a.fn[r] = i, m.DontConflict || (a.fn[b] = a.fn[r])), m.Conflicts[b] = a[b], a[r] = d.utilities._delegate || j, m.DontConflict || (a[b] = a[r]), d.namespace = b, d.namespaceClean = r, d.guid = 0, d.methods._resize && (m.ResizeHandlers.push({
                namespace: b,
                priority: d.priority,
                callback: d.methods._resize
            }), m.ResizeHandlers.sort(h)), d.methods._raf && (m.RAFHandlers.push({
                namespace: b,
                priority: d.priority,
                callback: d.methods._raf
            }), m.RAFHandlers.sort(h)), d
        }(d, e), n.then(function () {
            b(d)
        }), m.Plugins[d]
    };
    var q = null,
        r = 20;
    return m.$window.on("resize.fs", e), e(), g(), a(function () {
        m.$body = a("body"), n.resolve(), m.support.nativeMatchMedia = m.support.matchMedia && !a("html").hasClass("no-matchmedia")
    }), p.clickTouchStart = p.click + " " + p.touchStart, d(), window.Formstone = m, m
}), /*! formstone v1.1.3 [analytics.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mediaquery"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c() {
        u = b.$body
    }

    function d() {
        r.scrollDepth && k()
    }

    function e() {
        if (arguments.length && "object" !== a.type(arguments[0]))
            if ("destroy" === arguments[0]) g.apply(this);
            else {
                var b = Array.prototype.slice.call(arguments, 1);
                switch (arguments[0]) {
                case "pageview":
                    n.apply(this, b);
                    break;
                case "event":
                    m.apply(this, b)
                }
            } else f.apply(this, arguments);
        return null
    }

    function f(b) {
        !x && u.length && (x = !0, r = a.extend(r, b || {}), r.autoEvents && u.find("a").not("[" + z + "]").each(h), r.scrollDepth && (k(), t.on(w.scroll, i).one(w.load, d)), u.on(w.click, "*[" + z + "]", l))
    }

    function g() {
        x && u.length && (t.off(w.namespace), u.off(w.namespace), x = !1)
    }

    function h() {
        var b, c = a(this),
            d = "undefined" !== a.type(c[0].href) ? c[0].href : "",
            e = document.domain.split(".").reverse(),
            f = null !== d.match(e[1] + "." + e[0]);
        if (d.match(/^mailto\:/i)) b = "Email, Click, " + d.replace(/^mailto\:/i, "");
        else if (d.match(/^tel\:/i)) b = "Telephone, Click, " + d.replace(/^tel\:/i, "");
        else if (d.match(r.fileTypes)) {
            var g = /[.]/.exec(d) ? /[^.]+$/.exec(d) : void 0;
            b = "File, Download:" + g[0] + ", " + d.replace(/ /g, "-")
        } else f || (b = "ExternalLink, Click, " + d);
        b && c.attr(z, b)
    }

    function i(a) {
        v.startTimer(B, 250, j)
    }

    function j() {
        for (var a, c = t.scrollTop() + b.windowHeight, d = 1 / r.scrollStops, e = d, f = 1; f <= r.scrollStops; f++) a = Math.round(100 * e).toString(), !A[C][a].passed && c > A[C][a].edge && (A[C][a].passed = !0, m({
            eventCategory: "ScrollDepth",
            eventAction: C,
            eventLabel: a,
            nonInteraction: !0
        })), e += d
    }

    function k() {
        var b, c = a.mediaquery("state"),
            d = u.outerHeight(),
            e = {}, f = 1 / r.scrollStops,
            g = f,
            h = 0;
        c.minWidth && (C = "MinWidth:" + c.minWidth + "px");
        for (var i = 1; i <= r.scrollStops; i++) h = parseInt(d * g), b = Math.round(100 * g).toString(), e[b] = {
            edge: "100" === b ? h - 10 : h,
            passsed: A[C] && A[C][b] ? A[C][b].passed : !1
        }, g += f;
        A[C] = e
    }

    function l(b) {
        var c = a(this),
            d = c.attr("href"),
            e = c.data(y).split(",");
        r.eventCallback && b.preventDefault();
        for (var f in e) e.hasOwnProperty(f) && (e[f] = a.trim(e[f]));
        m({
            eventCategory: e[0],
            eventAction: e[1],
            eventLabel: e[2] || d,
            eventValue: e[3],
            nonInteraction: e[4]
        }, c)
    }

    function m(b, c) {
        var d = (s.location, a.extend({
            hitType: "event"
        }, b));
        if ("undefined" !== a.type(c) && !c.attr("data-analytics-stop")) {
            var e = "undefined" !== a.type(c[0].href) ? c[0].href : "",
                f = !e.match(/^mailto\:/i) && !e.match(/^tel\:/i) && e.indexOf(":") < 0 ? s.location.protocol + "//" + s.location.hostname + "/" + e : e;
            if ("" !== f) {
                var g = c.attr("target");
                if (g) s.open(f, g);
                else if (r.eventCallback) {
                    var h = "hitCallback";
                    d[h] = function () {
                        D && (v.clearTimer(D), p(f))
                    }, D = v.startTimer(D, r.eventTimeout, d[h])
                }
            }
        }
        o(d)
    }

    function n(b) {
        var c = a.extend({
            hitType: "pageview"
        }, b);
        o(c)
    }

    function o(b) {
        if ("function" === a.type(s.ga) && "function" === a.type(s.ga.getAll))
            for (var c = s.ga.getAll(), d = 0, e = c.length; e > d; d++) s.ga(c[d].get("name") + ".send", b)
    }

    function p(a) {
        document.location = a
    }
    var q = b.Plugin("analytics", {
        methods: {
            _setup: c,
            _resize: d
        },
        utilities: {
            _delegate: e
        }
    }),
        r = {
            autoEvents: !1,
            fileTypes: /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,
            eventCallback: !1,
            eventTimeout: 1e3,
            scrollDepth: !1,
            scrollStops: 5
        }, s = b.window,
        t = b.$window,
        u = null,
        v = q.functions,
        w = q.events,
        x = !1,
        y = "analytics-event",
        z = "data-" + y,
        A = {}, B = null,
        C = "Site",
        D = null
}), /*! formstone v1.1.3 [asap.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./analytics"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c(c) {
        !q && b.support.history && (o = b.$body, q = a.extend(s, c), q.render === a.noop && (q.render = i), q.transitionOut === a.noop && (q.transitionOut = function () {
            return a.Deferred().resolve()
        }), history.state ? (A = history.state.id, z = history.state.url) : (z = window.location.href, m(A, z)), t.on(w.popState, f), d())
    }

    function d() {
        o && !o.hasClass(x.base) && o.on(w.click, q.selector, e).addClass(x.base)
    }

    function e(a) {
        var b = a.currentTarget;
        a.which > 1 || a.metaKey || a.ctrlKey || a.shiftKey || a.altKey || window.location.protocol !== b.protocol || window.location.host !== b.host || "_blank" === b.target || (!b.hash || b.href.replace(b.hash, "") !== window.location.href.replace(location.hash, "") && b.href !== window.location.href + "#") && (b.href.match(q.ignoreTypes) || (v.killEvent(a), a.stopImmediatePropagation(), b.href !== z && g(b.href, !0)))
    }

    function f(a) {
        p && p.abort();
        var b = a.originalEvent.state;
        b && (A = b.id, b.url !== z && g(b.url, !1))
    }

    function g(b, c) {
        p && p.abort(), t.trigger(w.requested, [c]), q.transitionOutDeferred = q.transitionOut.apply(u, [!1]);
        var d = n(b),
            e = d.params,
            f = d.hash,
            g = d.clean,
            i = "User error",
            j = null,
            k = a.Deferred();
        e[q.requestKey] = !0, p = a.ajax({
            url: g,
            data: e,
            dataType: "json",
            cache: q.cache,
            xhr: function () {
                var a = new u.XMLHttpRequest;
                return a.addEventListener("progress", function (a) {
                    if (a.lengthComputable) {
                        var b = a.loaded / a.total;
                        t.trigger(w.progress, [b])
                    }
                }, !1), a
            },
            success: function (c, e, g) {
                j = "string" === a.type(c) ? a.parseJSON(c) : c, c.location && (b = c.location, d = n(b), f = d.hash), k.resolve()
            },
            error: function (a, b, c) {
                i = c, k.reject()
            }
        }), a.when(k, q.transitionOutDeferred).done(function () {
            h(d, j, c)
        }).fail(function () {
            t.trigger(w.failed, [i])
        })
    }

    function h(b, c, d) {
        t.trigger(w.loaded, [c]), void 0 !== a.fsAnalytics && a.fsAnalytics("pageview"), q.render.call(this, c, b.hash), z = b.url, d && (A++, l(A, z)), t.trigger(w.rendered, [c]);
        var e = !1;
        if ("" !== b.hash) {
            var f = a(b.hash);
            f.length && (e = f.offset().top)
        }
        e !== !1 && t.scrollTop(e)
    }

    function i(b, c) {
        if ("undefined" !== a.type(b)) {
            var d;
            for (var e in b) b.hasOwnProperty(e) && (d = a(e), d.length && d.html(b[e]))
        }
    }

    function j(a) {
        q && b.support.history ? a && g(a, !0) : window.location.href = a
    }

    function k(a) {
        var b = history.state;
        z = a, m(b.id, a)
    }

    function l(a, b) {
        history.pushState({
            id: a,
            url: b
        }, y + a, b)
    }

    function m(a, b) {
        history.replaceState({
            id: a,
            url: b
        }, y + a, b)
    }

    function n(a) {
        var b = a.indexOf("?"),
            c = a.indexOf("#"),
            d = {}, e = "",
            f = a;
        return c > -1 && (e = a.slice(c), f = a.slice(0, c)), b > -1 && (d = v.parseQueryString(a.slice(b + 1, c > -1 ? c : a.length)), f = a.slice(0, b)), {
            hash: e,
            params: d,
            url: a,
            clean: f
        }
    }
    var o, p, q, r = b.Plugin("asap", {
            utilities: {
                _initialize: c,
                load: j,
                replace: k
            },
            events: {
                failed: "failed",
                loaded: "loaded",
                popState: "popstate",
                progress: "progress",
                requested: "requested",
                rendered: "rendered"
            }
        }),
        s = {
            cache: !0,
            ignoreTypes: /\.(jpg|sjpg|jpeg|png|gif|zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,
            render: a.noop,
            requestKey: "fs-asap",
            selector: "a",
            transitionOut: a.noop
        }, t = b.$window,
        u = t[0],
        v = r.functions,
        w = r.events,
        x = r.classes.raw,
        y = "asap-",
        z = "",
        A = 1
}), /*! formstone v1.1.3 [background.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./transition"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c(a) {
        y.iterate.call(A, r)
    }

    function d() {
        A = a(v.base)
    }

    function e(b) {
        b.youTubeGuid = 0, b.$container = a('<div class="' + w.container + '"></div>').appendTo(this), b.thisClasses = [w.base, b.customClass], this.addClass(b.thisClasses.join(" "));
        var c = b.source;
        b.source = null, g(b, c, !0), d()
    }

    function f(a) {
        a.$container.remove(), this.removeClass(a.thisClasses.join(" ")).off(x.namespace), d()
    }

    function g(b, c, d) {
        if (c !== b.source) {
            if (b.source = c, b.responsive = !1, b.isYouTube = !1, "object" === a.type(c) && "string" === a.type(c.video)) {
                var e = c.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);
                e && e.length >= 1 && (b.isYouTube = !0, b.videoId = e[1])
            }
            var f = !b.isYouTube && "object" === a.type(c) && (c.hasOwnProperty("mp4") || c.hasOwnProperty("ogg") || c.hasOwnProperty("webm"));
            if (b.video = b.isYouTube || f, b.playing = !1, b.isYouTube) b.playerReady = !1, b.posterLoaded = !1, k(b, c, d);
            else if ("object" === a.type(c) && c.hasOwnProperty("poster")) j(b, c, d);
            else {
                var g = c;
                if ("object" === a.type(c)) {
                    var l, m = [],
                        n = [];
                    for (l in c) c.hasOwnProperty(l) && n.push(l);
                    n.sort(y.sortAsc);
                    for (l in n) n.hasOwnProperty(l) && m.push({
                        width: parseInt(n[l]),
                        url: c[n[l]],
                        mq: window.matchMedia("(min-width: " + parseInt(n[l]) + "px)")
                    });
                    b.responsive = !0, b.sources = m, g = h(b)
                }
                i(b, g, !1, d)
            }
        } else b.$el.trigger(x.loaded)
    }

    function h(a) {
        var c = a.source;
        if (a.responsive) {
            c = a.sources[0].url;
            for (var d in a.sources) a.sources.hasOwnProperty(d) && (b.support.nativeMatchMedia ? a.sources[d].mq.matches && (c = a.sources[d].url) : a.sources[d].width < b.fallbackWidth && (c = a.sources[d].url))
        }
        return c
    }

    function i(b, c, d, e) {
        var f = [w.media, w.image, e !== !0 ? w.animated : ""].join(" "),
            g = a('<div class="' + f + '" aria-hidden="true"><img alt=""></div>'),
            h = g.find("img"),
            i = c;
        h.one(x.load, function () {
            B && g.addClass(w["native"]).css({
                backgroundImage: "url('" + i + "')"
            }), g.fsTransition({
                property: "opacity"
            }, function () {
                d || l(b)
            }).css({
                opacity: 1
            }), s(b), d && !e || b.$el.trigger(x.loaded)
        }).attr("src", i), b.responsive && g.addClass(w.responsive), b.$container.append(g), (h[0].complete || 4 === h[0].readyState) && h.trigger(x.load), b.currentSource = i
    }

    function j(c, d, e) {
        if (c.source && c.source.poster && (i(c, c.source.poster, !0, !0), e = !1), !b.isMobile) {
            var f = [w.media, w.video, e !== !0 ? w.animated : ""].join(" "),
                g = '<div class="' + f + '" aria-hidden="true">';
            g += "<video", c.loop && (g += " loop"), c.mute && (g += " muted"), g += ">", c.source.webm && (g += '<source src="' + c.source.webm + '" type="video/webm" />'), c.source.mp4 && (g += '<source src="' + c.source.mp4 + '" type="video/mp4" />'), c.source.ogg && (g += '<source src="' + c.source.ogg + '" type="video/ogg" />'), g += "</video>", g += "</div>";
            var h = a(g),
                j = h.find("video");
            j.one(x.loadedMetaData, function (a) {
                h.fsTransition({
                    property: "opacity"
                }, function () {
                    l(c)
                }).css({
                    opacity: 1
                }), s(c), c.$el.trigger(x.loaded), c.autoPlay && o(c)
            }), c.$container.append(h)
        }
    }

    function k(c, d, e) {
        if (!c.videoId) {
            var f = d.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);
            c.videoId = f[1]
        }
        if (c.posterLoaded || (c.source.poster || (c.source.poster = "http://img.youtube.com/vi/" + c.videoId + "/0.jpg"), c.posterLoaded = !0, i(c, c.source.poster, !0, e), e = !1), !b.isMobile)
            if (a("script[src*='youtube.com/iframe_api']").length || a("head").append('<script src="//www.youtube.com/iframe_api"></script>'), C) {
                var g = c.guid + "_" + c.youTubeGuid++,
                    h = [w.media, w.embed, e !== !0 ? w.animated : ""].join(" "),
                    j = '<div class="' + h + '" aria-hidden="true">';
                j += '<div id="' + g + '"></div>', j += "</div>";
                var k = a(j),
                    m = a.extend(!0, {}, {
                        controls: 0,
                        rel: 0,
                        showinfo: 0,
                        wmode: "transparent",
                        enablejsapi: 1,
                        version: 3,
                        playerapiid: g,
                        loop: c.loop ? 1 : 0,
                        autoplay: 1,
                        origin: z.location.protocol + "//" + z.location.host
                    }, c.youtubeOptions);
                m.autoplay = 1, c.$container.append(k), c.player && (c.oldPlayer = c.player, c.player = null), c.player = new z.YT.Player(g, {
                    videoId: c.videoId,
                    playerVars: m,
                    events: {
                        onReady: function (a) {
                            c.playerReady = !0, c.mute && c.player.mute(), c.autoPlay || c.player.pauseVideo()
                        },
                        onStateChange: function (a) {
                            c.playing || a.data !== z.YT.PlayerState.PLAYING ? c.loop && c.playing && a.data === z.YT.PlayerState.ENDED && c.player.playVideo() : (c.playing = !0, k.fsTransition({
                                property: "opacity"
                            }, function () {
                                l(c)
                            }).css({
                                opacity: 1
                            }), s(c), c.$el.trigger(x.loaded)), c.$el.find(v.embed).addClass(w.ready)
                        },
                        onPlaybackQualityChange: function (a) {},
                        onPlaybackRateChange: function (a) {},
                        onError: function (a) {},
                        onApiChange: function (a) {}
                    }
                }), s(c)
            } else D.push({
                data: c,
                source: d
            })
    }

    function l(a) {
        var b = a.$container.find(v.media);
        b.length >= 1 && (b.not(":last").remove(), a.oldPlayer = null)
    }

    function m(a) {
        var b = a.$container.find(v.media);
        b.length >= 1 && b.fsTransition({
            property: "opacity"
        }, function () {
            b.remove(), delete a.source
        }).css({
            opacity: 0
        })
    }

    function n(a) {
        if (a.video && a.playing) {
            if (a.isYouTube) a.playerReady ? a.player.pauseVideo() : a.autoPlay = !1;
            else {
                var b = a.$container.find("video");
                b.length && b[0].pause()
            }
            a.playing = !1
        }
    }

    function o(a) {
        if (a.video && !a.playing)
            if (a.isYouTube) a.playerReady ? a.player.playVideo() : a.autoPlay = !0;
            else {
                var b = a.$container.find("video");
                b.length && b[0].play(), a.playing = !0
            }
    }

    function p(a) {
        if (a.video)
            if (a.isYouTube && a.playerReady) a.player.mute();
            else {
                var b = a.$container.find("video");
                b.length && (b[0].muted = !0)
            }
        a.mute = !0
    }

    function q(a) {
        if (a.video) {
            if (a.isYouTube && a.playerReady) a.player.unMute();
            else {
                var b = a.$container.find("video");
                b.length && (b[0].muted = !1)
            }
            a.playing = !0
        }
        a.mute = !1
    }

    function r(a) {
        if (a.responsive) {
            var b = h(a);
            b !== a.currentSource ? i(a, b, !1, !0) : s(a)
        } else s(a)
    }

    function s(a) {
        for (var b = a.$container.find(v.media), c = 0, d = b.length; d > c; c++) {
            var e = b.eq(c),
                f = a.isYouTube ? "iframe" : e.find("video").length ? "video" : "img",
                g = e.find(f);
            if (g.length && ("img" !== f || !B)) {
                var h = a.$el.outerWidth(),
                    i = a.$el.outerHeight(),
                    j = t(a, g);
                a.width = j.width, a.height = j.height, a.left = 0, a.top = 0;
                var k = a.isYouTube ? a.embedRatio : a.width / a.height;
                a.height = i, a.width = a.height * k, a.width < h && (a.width = h, a.height = a.width / k), a.left = -(a.width - h) / 2, a.top = -(a.height - i) / 2, e.css({
                    height: a.height,
                    width: a.width,
                    left: a.left,
                    top: a.top
                })
            }
        }
    }

    function t(b, c) {
        if (b.isYouTube) return {
            height: 500,
            width: 500 / b.embedRatio
        };
        if (c.is("img")) {
            var d = c[0];
            if ("undefined" !== a.type(d.naturalHeight)) return {
                height: d.naturalHeight,
                width: d.naturalWidth
            };
            var e = new Image;
            return e.src = d.src, {
                height: e.height,
                width: e.width
            }
        }
        return {
            height: c[0].videoHeight,
            width: c[0].videoWidth
        }
    }
    var u = b.Plugin("background", {
        widget: !0,
        defaults: {
            autoPlay: !0,
            customClass: "",
            embedRatio: 1.777777,
            loop: !0,
            mute: !0,
            source: null,
            youtubeOptions: {}
        },
        classes: ["container", "media", "animated", "responsive", "native", "fixed", "ready"],
        events: {
            loaded: "loaded",
            ready: "ready",
            loadedMetaData: "loadedmetadata"
        },
        methods: {
            _construct: e,
            _destruct: f,
            _resize: c,
            play: o,
            pause: n,
            mute: p,
            unmute: q,
            resize: s,
            load: g,
            unload: m
        }
    }),
        v = u.classes,
        w = v.raw,
        x = u.events,
        y = u.functions,
        z = b.window,
        A = [],
        B = "backgroundSize" in b.document.documentElement.style,
        C = !1,
        D = [];
    z.onYouTubeIframeAPIReady = function () {
        C = !0;
        for (var a in D) D.hasOwnProperty(a) && k(D[a].data, D[a].source);
        D = []
    }
}), /*! formstone v1.1.3 [carousel.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mediaquery", "./touch"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c(a) {
        R.iterate.call(S, i)
    }

    function d() {
        S = a(O.base)
    }

    function e(c) {
        var e;
        c.carouselClasses = [P.base, c.theme, c.customClass, c.rtl ? P.rtl : P.ltr], c.maxWidth = c.maxWidth === 1 / 0 ? "100000px" : c.maxWidth, c.mq = "(min-width:" + c.minWidth + ") and (max-width:" + c.maxWidth + ")", c.customControls = "object" === a.type(c.controls) && c.controls.previous && c.controls.next, c.id = this.attr("id"), c.id ? c.ariaID = c.id : (c.ariaID = c.rawGuid, this.attr("id", c.ariaID)), b.support.transform || (c.useMargin = !0);
        var f = "",
            i = "",
            k = [P.control, P.control_previous].join(" "),
            l = [P.control, P.control_next].join(" ");
        c.controls && !c.customControls && (f += '<div class="' + P.controls + '" aria-label="carousel controls" aria-controls="' + c.ariaID + '">', f += '<button type="button" class="' + k + '" aria-label="' + c.labels.previous + '">' + c.labels.previous + "</button>", f += '<button type="button" class="' + l + '" aria-label="' + c.labels.next + '">' + c.labels.next + "</button>", f += "</div>"), c.pagination && (i += '<div class="' + P.pagination + '" aria-label="carousel pagination" aria-controls="' + c.ariaID + '" role="navigation">', i += "</div>"), c.autoHeight && c.carouselClasses.push(P.auto_height), c.contained && c.carouselClasses.push(P.contained), c.single && c.carouselClasses.push(P.single), this.addClass(c.carouselClasses.join(" ")).wrapInner('<div class="' + P.wrapper + '" aria-live="polite"><div class="' + P.container + '"><div class="' + P.canister + '"></div></div></div>').append(f).wrapInner('<div class="' + P.viewport + '"></div>').append(i), c.$viewport = this.find(O.viewport).eq(0), c.$container = this.find(O.container).eq(0), c.$canister = this.find(O.canister).eq(0), c.$pagination = this.find(O.pagination).eq(0), c.$paginationItems = c.$pagination.find(O.page), c.$controlPrevious = c.$controlNext = a(""), c.customControls ? (c.$controls = a(c.controls.container).addClass([P.controls, P.controls_custom].join(" ")), c.$controlPrevious = a(c.controls.previous).addClass(k), c.$controlNext = a(c.controls.next).addClass(l)) : (c.$controls = this.find(O.controls).eq(0), c.$controlPrevious = c.$controls.find(O.control_previous), c.$controlNext = c.$controls.find(O.control_next)), c.$controlItems = c.$controlPrevious.add(c.$controlNext), c.index = 0, c.enabled = !1, c.leftPosition = 0, c.autoTimer = null, c.resizeTimer = null;
        var m = this.data(M + "-linked");
        c.linked = m ? "[data-" + M + '-linked="' + m + '"]' : !1, c.linked && (c.paged = !0);
        var n = this.data(M + "-controller-for") || "";
        if (c.$subordinate = a(n), c.$subordinate.length && (c.controller = !0), "object" === a.type(c.show)) {
            var o = c.show,
                p = [],
                q = [];
            for (e in o) o.hasOwnProperty(e) && q.push(e);
            q.sort(R.sortAsc);
            for (e in q) q.hasOwnProperty(e) && p.push({
                width: parseInt(q[e]),
                count: o[q[e]],
                mq: window.matchMedia("(min-width: " + parseInt(q[e]) + "px)")
            });
            c.show = p
        }
        j(c), a.fsMediaquery("bind", c.rawGuid, c.mq, {
            enter: function () {
                h.call(c.$el, c)
            },
            leave: function () {
                g.call(c.$el, c)
            }
        }), d(), c.carouselClasses.push(P.enabled), c.carouselClasses.push(P.animated)
    }

    function f(b) {
        R.clearTimer(b.autoTimer), R.clearTimer(b.resizeTimer), g.call(this, b), a.fsMediaquery("unbind", b.rawGuid), b.id !== b.ariaID && this.attr("id", ""), b.$controlItems.removeClass([O.control, P.control_previous, O.control_next, O.visible].join(" ")).off(Q.namespace), b.$images.off(Q.namespace), b.$canister.fsTouch("destroy"), b.$items.removeClass([P.item, P.visible, O.item_previous, O.item_next].join(" ")).unwrap().unwrap().unwrap().unwrap(), b.pagination && b.$pagination.remove(), b.controls && !b.customControls && b.$controls.remove(), b.customControls && b.$controls.removeClass([P.controls, P.controls_custom, P.visible].join(" ")), this.removeClass(b.carouselClasses.join(" ")), d()
    }

    function g(a) {
        a.enabled && (R.clearTimer(a.autoTimer), a.enabled = !1, a.$subordinate.off(Q.update), this.removeClass([P.enabled, P.animated].join(" ")).off(Q.namespace), a.$canister.fsTouch("destroy").off(Q.namespace).attr("style", "").css(U, "none"), a.$items.css({
            width: "",
            height: ""
        }).removeClass([P.visible, O.item_previous, O.item_next].join(" ")), a.$images.off(Q.namespace), a.$controlItems.off(Q.namespace), a.$pagination.html(""), u(a), a.useMargin ? a.$canister.css({
            marginLeft: ""
        }) : a.$canister.css(T, ""), a.index = 0)
    }

    function h(a) {
        a.enabled || (a.enabled = !0, this.addClass(P.enabled).on(Q.click, O.page, a, s), a.$controlItems.on(Q.click, a, r), a.$items.on(Q.click, a, H), a.$subordinate.on(Q.update, a, I), I({
            data: a
        }, 0), a.$canister.fsTouch({
            axis: "x",
            pan: !0,
            swipe: !0
        }).on(Q.panStart, a, y).on(Q.pan, a, z).on(Q.panEnd, a, A).on(Q.swipe, a, E).css(U, ""), j(a), a.$images.on(Q.load, a, p), a.autoAdvance && (a.autoTimer = R.startTimer(a.autoTimer, a.autoTime, function () {
            q(a)
        }, !0)), i.call(this, a))
    }

    function i(a) {
        if (a.enabled) {
            var b, c, d, e, f, g, h, i, j, k;
            if (a.count = a.$items.length, a.count < 1) return u(a), void a.$canister.css({
                height: ""
            });
            for (this.removeClass(P.animated), a.containerWidth = a.$container.outerWidth(!1), a.visible = x(a), a.perPage = a.paged ? 1 : a.visible, a.itemMarginLeft = parseInt(a.$items.eq(0).css("marginLeft")), a.itemMarginRight = parseInt(a.$items.eq(0).css("marginRight")), a.itemMargin = a.itemMarginLeft + a.itemMarginRight, isNaN(a.itemMargin) && (a.itemMargin = 0), a.itemWidth = (a.containerWidth - a.itemMargin * (a.visible - 1)) / a.visible, a.itemHeight = 0, a.pageWidth = a.paged ? a.itemWidth : a.containerWidth, a.pageCount = Math.ceil(a.count / a.perPage), a.canisterWidth = a.single ? a.containerWidth : (a.pageWidth + a.itemMargin) * a.pageCount, a.$canister.css({
                width: a.matchWidth ? a.canisterWidth : 1e6,
                height: ""
            }), a.$items.css({
                width: a.matchWidth ? a.itemWidth : "",
                height: ""
            }).removeClass([P.visible, P.item_previous, P.item_next].join(" ")), a.pages = [], c = 0, d = 0; c < a.count; c += a.perPage) {
                for (g = a.$items.slice(c, c + a.perPage), i = 0, j = 0, g.length < a.perPage && (g = 0 === c ? a.$items : a.$items.slice(a.$items.length - a.perPage)), h = a.rtl ? g.eq(g.length - 1) : g.eq(0), k = h.position().left, e = 0; e < g.length; e++) f = g.eq(e).outerWidth(!0), b = g.eq(e).outerHeight(), i += f, b > j && (j = b);
                a.pages.push({
                    left: a.rtl ? k - (a.canisterWidth - i) : k,
                    height: j,
                    width: i,
                    $items: g
                }), j > a.itemHeight && (a.itemHeight = j), d++
            }
            a.paged && (a.pageCount -= a.count % a.visible), a.pageCount <= 0 && (a.pageCount = 1), a.maxMove = -a.pages[a.pageCount - 1].left, a.autoHeight ? a.$canister.css({
                height: a.pages[0].height
            }) : a.matchHeight && a.$items.css({
                height: a.itemHeight
            });
            var l = "";
            for (c = 0; c < a.pageCount; c++) l += '<button type="button" class="' + P.page + '">' + (c + 1) + "</button>";
            a.$pagination.html(l), a.pageCount <= 1 ? u(a) : v(a), a.$paginationItems = a.$el.find(O.page), t(a, a.index, !1), setTimeout(function () {
                a.$el.addClass(P.animated)
            }, 5)
        }
    }

    function j(a) {
        a.$items = a.$canister.children().not(":hidden").addClass(P.item), a.$images = a.$canister.find("img"), a.totalImages = a.$images.length
    }

    function k(a) {
        a.enabled && l.call(this, a, !1)
    }

    function l(a, b) {
        a.$images.off(Q.namespace), b !== !1 && a.$canister.html(b), a.index = 0, j(a), i.call(this, a)
    }

    function m(a, b, c, d, e) {
        a.enabled && (R.clearTimer(a.autoTimer), "undefined" == typeof e && (e = !0), t(a, b - 1, e, c, d))
    }

    function n(a) {
        var b = a.index - 1;
        a.infinite && 0 > b && (b = a.pageCount - 1), t(a, b)
    }

    function o(a) {
        var b = a.index + 1;
        a.infinite && b >= a.pageCount && (b = 0), t(a, b)
    }

    function p(a) {
        var b = a.data;
        b.resizeTimer = R.startTimer(b.resizeTimer, 20, function () {
            i.call(b.$el, b)
        })
    }

    function q(a) {
        var b = a.index + 1;
        b >= a.pageCount && (b = 0), t(a, b)
    }

    function r(b) {
        R.killEvent(b);
        var c = b.data,
            d = c.index + (a(b.currentTarget).hasClass(P.control_next) ? 1 : -1);
        R.clearTimer(c.autoTimer), t(c, d)
    }

    function s(b) {
        R.killEvent(b);
        var c = b.data,
            d = c.$paginationItems.index(a(b.currentTarget));
        R.clearTimer(c.autoTimer), t(c, d)
    }

    function t(b, c, d, e, f) {
        if (0 > c && (c = b.infinite ? b.pageCount - 1 : 0), c >= b.pageCount && (c = b.infinite ? 0 : b.pageCount - 1), !(b.count < 1)) {
            b.pages[c] && (b.leftPosition = -b.pages[c].left), b.leftPosition = J(b, b.leftPosition), b.useMargin ? b.$canister.css({
                marginLeft: b.leftPosition
            }) : d === !1 ? (b.$canister.css(U, "none").css(T, "translateX(" + b.leftPosition + "px)"), setTimeout(function () {
                b.$canister.css(U, "")
            }, 5)) : b.$canister.css(T, "translateX(" + b.leftPosition + "px)"), b.$items.removeClass([P.visible, P.item_previous, P.item_next].join(" "));
            for (var g = 0, h = b.pages.length; h > g; g++) g === c ? b.pages[g].$items.addClass(P.visible).attr("aria-hidden", "false") : b.pages[g].$items.not(b.pages[c].$items).addClass(c > g ? P.item_previous : P.item_next).attr("aria-hidden", "true");
            b.autoHeight && b.$canister.css({
                height: b.pages[c].height
            }), d !== !1 && e !== !0 && c !== b.index && (b.infinite || c > -1 && c < b.pageCount) && b.$el.trigger(Q.update, [c]), b.index = c, b.linked && f !== !0 && a(b.linked).not(b.$el)[N]("jump", b.index + 1, !0, !0), w(b)
        }
    }

    function u(a) {
        a.$controls.removeClass(P.visible), a.$controlItems.removeClass(P.visible), a.$pagination.removeClass(P.visible)
    }

    function v(a) {
        a.$controls.addClass(P.visible), a.$controlItems.addClass(P.visible), a.$pagination.addClass(P.visible)
    }

    function w(a) {
        a.$paginationItems.removeClass(P.active).eq(a.index).addClass(P.active), a.infinite ? a.$controlItems.addClass(P.visible) : a.pageCount < 1 ? a.$controlItems.removeClass(P.visible) : (a.$controlItems.addClass(P.visible), a.index <= 0 ? a.$controlPrevious.removeClass(P.visible) : (a.index >= a.pageCount - 1 || !a.single && a.leftPosition === a.maxMove) && a.$controlNext.removeClass(P.visible))
    }

    function x(c) {
        var d = 1;
        if (c.single) return d;
        if ("array" === a.type(c.show))
            for (var e in c.show) c.show.hasOwnProperty(e) && (b.support.nativeMatchMedia ? c.show[e].mq.matches && (d = c.show[e].count) : c.show[e].width < b.fallbackWidth && (d = c.show[e].count));
        else d = c.show;
        return c.fill && c.count < d ? c.count : d
    }

    function y(b, c) {
        var d = b.data;
        if (R.clearTimer(d.autoTimer), !d.single) {
            if (d.useMargin) d.leftPosition = parseInt(d.$canister.css("marginLeft"));
            else {
                var e = d.$canister.css(T).split(",");
                d.leftPosition = parseInt(e[4])
            } if (d.$canister.css(U, "none"), z(b), d.linked && c !== !0) {
                var f = b.deltaX / d.pageWidth;
                d.rtl && (f *= -1), a(d.linked).not(d.$el)[N]("panStart", f)
            }
        }
        d.isTouching = !0
    }

    function z(b, c) {
        var d = b.data;
        if (!d.single && (d.touchLeft = J(d, d.leftPosition + b.deltaX), d.useMargin ? d.$canister.css({
            marginLeft: d.touchLeft
        }) : d.$canister.css(T, "translateX(" + d.touchLeft + "px)"), d.linked && c !== !0)) {
            var e = b.deltaX / d.pageWidth;
            d.rtl && (e *= -1), a(d.linked).not(d.$el)[N]("pan", e)
        }
    }

    function A(b, c) {
        var d = b.data,
            e = Math.abs(b.deltaX),
            f = K(d, b),
            g = !1;
        if (d.didPan = !1, !d.single) {
            var h, i, j = Math.abs(d.touchLeft),
                k = !1,
                l = d.rtl ? "right" : "left";
            if (b.directionX === l)
                for (h = 0, i = d.pages.length; i > h; h++) k = d.pages[h], j > Math.abs(k.left) + 20 && (g = h + 1);
            else
                for (h = d.pages.length - 1, i = 0; h >= i; h--) k = d.pages[h], j < Math.abs(k.left) && (g = h - 1)
        }
        g === !1 && (g = 50 > e ? d.index : d.index + f), g !== d.index && (d.didPan = !0), d.linked && c !== !0 && a(d.linked).not(d.$el)[N]("panEnd", g), G(d, g)
    }

    function B(a, b) {
        if (R.clearTimer(a.autoTimer), !a.single) {
            if (a.rtl && (b *= -1), a.useMargin) a.leftPosition = parseInt(a.$canister.css("marginLeft"));
            else {
                var c = a.$canister.css(T).split(",");
                a.leftPosition = parseInt(c[4])
            }
            a.$canister.css(U, "none");
            var d = {
                data: a,
                deltaX: a.pageWidth * b
            };
            z(d, !0)
        }
        a.isTouching = !0
    }

    function C(a, b) {
        if (!a.single) {
            a.rtl && (b *= -1);
            var c = a.pageWidth * b;
            a.touchLeft = J(a, a.leftPosition + c), a.useMargin ? a.$canister.css({
                marginLeft: a.touchLeft
            }) : a.$canister.css(T, "translateX(" + a.touchLeft + "px)")
        }
    }

    function D(a, b) {
        G(a, b, !0)
    }

    function E(b, c) {
        var d = b.data,
            e = K(d, b),
            f = d.index + e;
        d.linked && c !== !0 && a(d.linked).not(d.$el)[N]("swipe", b.directionX), G(d, f)
    }

    function F(a, b) {
        var c = {
            data: a,
            directionX: b
        };
        E(c, !0)
    }

    function G(a, b) {
        a.$canister.css(U, ""), t(a, b), a.isTouching = !1
    }

    function H(b) {
        var c = b.data,
            d = a(b.currentTarget);
        if (!c.didPan && (d.trigger(Q.itemClick), c.controller)) {
            var e = c.$items.index(d);
            I(b, e), c.$subordinate[N]("jump", e + 1, !0)
        }
    }

    function I(a, b) {
        var c = a.data;
        if (c.controller) {
            var d = c.$items.eq(b);
            c.$items.removeClass(P.active), d.addClass(P.active);
            for (var e = 0; e < c.pageCount; e++)
                if (c.pages[e].$items.is(d)) {
                    t(c, e, !0, !0);
                    break
                }
        }
    }

    function J(a, b) {
        return isNaN(b) ? b = 0 : a.rtl ? (b > a.maxMove && (b = a.maxMove), 0 > b && (b = 0)) : (b < a.maxMove && (b = a.maxMove), b > 0 && (b = 0)), b
    }

    function K(a, b) {
        return a.rtl ? "right" === b.directionX ? 1 : -1 : "left" === b.directionX ? 1 : -1
    }
    var L = b.Plugin("carousel", {
        widget: !0,
        defaults: {
            autoAdvance: !1,
            autoHeight: !1,
            autoTime: 8e3,
            contained: !0,
            controls: !0,
            customClass: "",
            fill: !1,
            infinite: !1,
            labels: {
                next: "Next",
                previous: "Previous"
            },
            matchHeight: !1,
            matchWidth: !0,
            maxWidth: 1 / 0,
            minWidth: "0px",
            paged: !1,
            pagination: !0,
            rtl: !1,
            show: 1,
            single: !1,
            theme: "fs-light",
            useMargin: !1
        },
        classes: ["ltr", "rtl", "viewport", "wrapper", "container", "canister", "item", "item_previous", "item_next", "controls", "controls_custom", "control", "control_previous", "control_next", "pagination", "page", "animated", "enabled", "visible", "active", "auto_height", "contained", "single"],
        events: {
            itemClick: "itemClick",
            update: "update"
        },
        methods: {
            _construct: e,
            _destruct: f,
            _resize: c,
            disable: g,
            enable: h,
            jump: m,
            previous: n,
            next: o,
            reset: k,
            resize: i,
            update: l,
            panStart: B,
            pan: C,
            panEnd: D,
            swipe: F
        }
    }),
        M = L.namespace,
        N = L.namespaceClean,
        O = L.classes,
        P = O.raw,
        Q = L.events,
        R = L.functions,
        S = [],
        T = b.transform,
        U = b.transition
}), /*! formstone v1.1.3 [checkbox.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c(b) {
        var c = this.closest("label"),
            d = c.length ? c.eq(0) : a("label[for=" + this.attr("id") + "]"),
            e = [p.base, b.theme, b.customClass].join(" "),
            f = "";
        b.radio = "radio" === this.attr("type"), b.group = this.attr("name"), f += '<div class="' + p.marker + '" aria-hidden="true">', f += '<div class="' + p.flag + '"></div>', b.toggle && (e += " " + p.toggle, f += '<span class="' + [p.state, p.state_on].join(" ") + '">' + b.labels.on + "</span>", f += '<span class="' + [p.state, p.state_off].join(" ") + '">' + b.labels.off + "</span>"), b.radio && (e += " " + p.radio), f += "</div>", d.length ? d.addClass(p.label).wrap('<div class="' + e + '"></div>').before(f) : this.before('<div class=" ' + e + '">' + f + "</div>"), b.$checkbox = d.length ? d.parents(o.base) : this.prev(o.base), b.$marker = b.$checkbox.find(o.marker), b.$states = b.$checkbox.find(o.state), b.$label = d, this.is(":checked") && b.$checkbox.addClass(p.checked), (this.is(":disabled") || this.is("[readonly]")) && b.$checkbox.addClass(p.disabled), this.wrap('<div class="' + p.element_wrapper + '"></div>'), this.on(q.focus, b, l).on(q.blur, b, m).on(q.change, b, i).on(q.click, b, h).on(q.deselect, b, k), b.$checkbox.on(q.click, b, h)
    }

    function d(a) {
        a.$checkbox.off(q.namespace), a.$marker.remove(), a.$states.remove(), a.$label.unwrap().removeClass(p.label), this.unwrap().off(q.namespace)
    }

    function e(a) {
        this.prop("disabled", !1), a.$checkbox.removeClass(p.disabled)
    }

    function f(a) {
        this.prop("disabled", !0), a.$checkbox.addClass(p.disabled)
    }

    function g(a) {
        var b = a.$el.is(":disabled") || a.$el.is("[readonly]"),
            c = a.$el.is(":checked");
        b || (c ? j({
            data: a
        }) : k({
            data: a
        }))
    }

    function h(b) {
        b.stopPropagation();
        var c = b.data;
        a(b.target).is(c.$el) || (b.preventDefault(), c.$el.trigger("click"))
    }

    function i(a) {
        var b = a.data,
            c = b.$el.is(":disabled") || b.$el.is("[readonly]"),
            d = b.$el.is(":checked");
        c || (b.radio ? d && j(a) : d ? j(a) : k(a))
    }

    function j(b) {
        b.data.radio && a('input[name="' + b.data.group + '"]').not(b.data.$el).trigger("deselect"), b.data.$el.trigger(q.focus), b.data.$checkbox.addClass(p.checked)
    }

    function k(a) {
        a.data.$el.trigger(q.focus), a.data.$checkbox.removeClass(p.checked)
    }

    function l(a) {
        a.data.$checkbox.addClass(p.focus)
    }

    function m(a) {
        a.data.$checkbox.removeClass(p.focus)
    }
    var n = b.Plugin("checkbox", {
        widget: !0,
        defaults: {
            customClass: "",
            toggle: !1,
            labels: {
                on: "ON",
                off: "OFF"
            },
            theme: "fs-light"
        },
        classes: ["element_wrapper", "label", "marker", "flag", "radio", "focus", "checked", "disabled", "toggle", "state", "state_on", "state_off"],
        methods: {
            _construct: c,
            _destruct: d,
            enable: e,
            disable: f,
            update: g
        },
        events: {
            deselect: "deselect"
        }
    }),
        o = n.classes,
        p = o.raw,
        q = n.events;
    n.functions
}), /*! formstone v1.1.3 [cookie.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c(b, c, h) {
        if ("object" === a.type(b)) g = a.extend(g, b);
        else if (h = a.extend({}, g, h || {}), "undefined" !== a.type(b)) {
            if ("undefined" === a.type(c)) return e(b);
            null === c ? f(b, h) : d(b, c, h)
        }
        return null
    }

    function d(b, c, d) {
        var e = !1,
            f = new Date;
        d.expires && "number" === a.type(d.expires) && (f.setTime(f.getTime() + d.expires), e = f.toGMTString());
        var g = d.domain ? "; domain=" + d.domain : "",
            i = e ? "; expires=" + e : "",
            j = e ? "; max-age=" + d.expires / 1e3 : "",
            k = d.path ? "; path=" + d.path : "",
            l = d.secure ? "; secure" : "";
        h.cookie = b + "=" + c + i + j + g + k + l
    }

    function e(a) {
        for (var b = a + "=", c = h.cookie.split(";"), d = 0; d < c.length; d++) {
            for (var e = c[d];
                " " === e.charAt(0);) e = e.substring(1, e.length);
            if (0 === e.indexOf(b)) return e.substring(b.length, e.length)
        }
        return null
    }

    function f(b, c) {
        d(b, "", a.extend({}, c, {
            expires: -6048e5
        })), console.log(h.cookie)
    }
    var g = (b.Plugin("cookie", {
        utilities: {
            _delegate: c
        }
    }), {
        domain: null,
        expires: 6048e5,
        path: null,
        secure: null
    }),
        h = b.document
}), /*! formstone v1.1.3 [dropdown.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./scrollbar", "./touch"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c() {
        H = b.$body
    }

    function d(c) {
        c.multiple = this.prop("multiple"), c.disabled = this.is(":disabled") || this.is("[readonly]"), c.lastIndex = !1, c.multiple ? c.links = !1 : c.external && (c.links = !0);
        var d = this.find("[selected]").not(":disabled"),
            e = this.find(":selected").not(":disabled"),
            f = e.text(),
            g = this.find("option").index(e);
        c.multiple || "" === c.label || d.length ? c.label = "" : (e = this.prepend('<option value="" class="' + B.item_placeholder + '" selected>' + c.label + "</option>"), f = c.label, g = 0);
        var h = this.find("option, optgroup"),
            k = h.filter("option"),
            l = a("[for=" + this.attr("id") + "]");
        c.tabIndex = this[0].tabIndex, this[0].tabIndex = -1, l.length && (l[0].tabIndex = -1);
        var m = [B.base, c.theme, c.customClass];
        c.mobile || b.isMobile ? m.push(B.mobile) : c.cover && m.push(B.cover), c.multiple && m.push(B.multiple), c.disabled && m.push(B.disabled);
        var n = '<div class="' + m.join(" ") + '" tabindex="' + c.tabIndex + '"></div>',
            t = "";
        c.multiple || (t += '<button type="button" class="' + B.selected + '" tabindex="-1">', t += a("<span></span>").text(y(f, c.trim)).html(), t += "</button>"), t += '<div class="' + B.options + '">', t += "</div>", this.wrap(n).after(t), c.$dropdown = this.parent(A.base), c.$label = l, c.$allOptions = h, c.$options = k, c.$selected = c.$dropdown.find(A.selected), c.$wrapper = c.$dropdown.find(A.options), c.$placeholder = c.$dropdown.find(A.placeholder), c.index = -1, c.closed = !0, c.focused = !1, i(c), c.links ? this.attr("aria-hidden", "true") : c.$selected.add(c.$wrapper).attr("aria-hidden", "true"), c.multiple || u(g, c), void 0 !== a.fn.fsScrollbar && c.$wrapper.fsScrollbar({
            theme: c.theme
        }), c.$selected.on(C.click, c, j), c.$dropdown.on(C.click, A.item, c, p).on(C.close, c, o), this.on(C.change, c, q), b.isMobile || (this.on(C.focusIn, c, function (a) {
            a.data.$dropdown.trigger(C.raw.focus)
        }), c.$dropdown.on(C.focusIn, c, r).on(C.focusOut, c, s))
    }

    function e(b) {
        b.$dropdown.hasClass(B.open) && b.$selected.trigger(C.click), void 0 !== a.fn.fsScrollbar && b.$wrapper.fsScrollbar("destroy"), b.links && this.removeAttr("aria-hidden"), b.$el[0].tabIndex = b.tabIndex, b.$label.length && (b.$label[0].tabIndex = b.tabIndex), b.$dropdown.off(C.namespace), b.$options.off(C.namespace), b.$placeholder.remove(), b.$selected.remove(), b.$wrapper.remove(), b.$el.off(C.namespace).show().unwrap()
    }

    function f(a, b) {
        if ("undefined" != typeof b) {
            var c = a.$items.index(a.$items.filter("[data-value=" + b + "]"));
            a.$items.eq(c).addClass(B.item_disabled), a.$options.eq(c).prop("disabled", !0)
        } else a.$dropdown.hasClass(B.open) && a.$selected.trigger(C.click), a.$dropdown.addClass(B.disabled), a.$el.prop("disabled", !0), a.disabled = !0
    }

    function g(a, b) {
        if ("undefined" != typeof b) {
            var c = a.$items.index(a.$items.filter("[data-value=" + b + "]"));
            a.$items.eq(c).removeClass(B.item_disabled), a.$options.eq(c).prop("disabled", !1)
        } else a.$dropdown.removeClass(B.disabled), a.$el.prop("disabled", !1), a.disabled = !1
    }

    function h(b) {
        void 0 !== a.fn.fsScrollbar && b.$wrapper.fsScrollbar("destroy");
        var c = b.index;
        b.$allOptions = b.$el.find("option, optgroup"), b.$options = b.$allOptions.filter("option"), b.index = -1, c = b.$options.index(b.$options.filter(":selected")), i(b), b.multiple || u(c, b), void 0 !== a.fn.fsScrollbar && b.$wrapper.fsScrollbar()
    }

    function i(b) {
        for (var c = "", d = 0, e = 0, f = b.$allOptions.length; f > e; e++) {
            var g = b.$allOptions.eq(e),
                h = [];
            if ("OPTGROUP" === g[0].tagName) h.push(B.group), g.is(":disabled") && h.push(B.disabled), c += '<span class="' + h.join(" ") + '">' + g.attr("label") + "</span>";
            else {
                var i = g.val(),
                    j = g.data("label"),
                    k = b.links ? "a" : 'button type="button"';
                g.attr("value") || g.attr("value", i), h.push(B.item), g.hasClass(B.item_placeholder) && (h.push(B.item_placeholder), k = "span"), g.is(":selected") && h.push(B.item_selected), g.is(":disabled") && h.push(B.item_disabled), c += "<" + k + ' class="' + h.join(" ") + '"', b.links ? "span" === k ? c += ' aria-hidden="true"' : (c += ' href="' + i + '"', b.external && (c += ' target="_blank"')) : c += ' data-value="' + i + '"', c += ' tabindex="-1">', c += j ? j : D.decodeEntities(y(g.text(), b.trim)), c += "</" + k + ">", d++
            }
        }
        b.$items = b.$wrapper.html(a.parseHTML(c)).find(A.item)
    }

    function j(a) {
        D.killEvent(a);
        var c = a.data;
        if (!c.disabled)
            if (c.mobile || !b.isMobile || b.isFirefoxMobile || b.isIEMobile) c.closed ? l(c) : m(c);
            else {
                var d = c.$el[0];
                if (G.createEvent) {
                    var e = G.createEvent("MouseEvents");
                    e.initMouseEvent("mousedown", !1, !0, E, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), d.dispatchEvent(e)
                } else d.fireEvent && d.fireEvent("onmousedown")
            }
        k(c)
    }

    function k(b) {
        a(A.base).not(b.$dropdown).trigger(C.close, [b])
    }

    function l(a) {
        if (a.closed) {
            var b = F.height(),
                c = a.$wrapper.outerHeight(!0),
                d = a.$dropdown[0].getBoundingClientRect();
            d.bottom + c > b - a.bottomEdge && a.$dropdown.addClass(B.bottom), H.on(C.click + a.dotGuid, ":not(" + A.options + ")", a, n), a.$dropdown.trigger(C.focusIn), a.$dropdown.addClass(B.open), v(a), a.closed = !1
        }
    }

    function m(a) {
        a && !a.closed && (H.off(C.click + a.dotGuid), a.$dropdown.removeClass([B.open, B.bottom].join(" ")), a.closed = !0)
    }

    function n(b) {
        D.killEvent(b);
        var c = b.data;
        c && 0 === a(b.currentTarget).parents(A.base).length && (m(c), c.$dropdown.trigger(C.focusOut))
    }

    function o(a) {
        var b = a.data;
        b && (m(b), b.$dropdown.trigger(C.focusOut))
    }

    function p(b) {
        var c = a(this),
            d = b.data;
        if (D.killEvent(b), !d.disabled) {
            var e = d.$items.index(c);
            d.focusIndex = e, d.$wrapper.is(":visible") && (u(e, d, b.shiftKey, b.metaKey || b.ctrlKey), w(d)), d.multiple || m(d), d.$dropdown.trigger(C.focus)
        }
    }

    function q(b, c) {
        var d = (a(this), b.data);
        if (!c && !d.multiple) {
            var e = d.$options.index(d.$options.filter(":selected"));
            d.focusIndex = e, u(e, d), w(d, !0)
        }
    }

    function r(b) {
        D.killEvent(b);
        var c = (a(b.currentTarget), b.data);
        c.disabled || c.multiple || c.focused || (k(c), c.focused = !0, c.focusIndex = c.index, c.input = "", c.$dropdown.addClass(B.focus).on(C.keyDown + c.dotGuid, c, t))
    }

    function s(b) {
        D.killEvent(b);
        var c = (a(b.currentTarget), b.data);
        c.focused && c.closed && (c.focused = !1, c.$dropdown.removeClass(B.focus).off(C.keyDown + c.dotGuid), c.multiple || (m(c), c.index !== c.focusIndex && (w(c), c.focusIndex = c.index)))
    }

    function t(c) {
        var d = c.data;
        if (d.keyTimer = D.startTimer(d.keyTimer, 1e3, function () {
            d.input = ""
        }), 13 === c.keyCode) d.closed || (m(d), u(d.index, d)), w(d);
        else if (!(9 === c.keyCode || c.metaKey || c.altKey || c.ctrlKey || c.shiftKey)) {
            D.killEvent(c);
            var e = d.$items.length - 1,
                f = d.index < 0 ? 0 : d.index;
            if (a.inArray(c.keyCode, b.isFirefox ? [38, 40, 37, 39] : [38, 40]) > -1) f += 38 === c.keyCode || b.isFirefox && 37 === c.keyCode ? -1 : 1, 0 > f && (f = 0), f > e && (f = e);
            else {
                var g, h, i = String.fromCharCode(c.keyCode).toUpperCase();
                for (d.input += i, h = d.index + 1; e >= h; h++)
                    if (g = d.$options.eq(h).text().substr(0, d.input.length).toUpperCase(), g === d.input) {
                        f = h;
                        break
                    }
                if (0 > f || f === d.index)
                    for (h = 0; e >= h; h++)
                        if (g = d.$options.eq(h).text().substr(0, d.input.length).toUpperCase(), g === d.input) {
                            f = h;
                            break
                        }
            }
            f >= 0 && (u(f, d), v(d))
        }
    }

    function u(a, c, d, e) {
        var f = c.$items.eq(a),
            g = c.$options.eq(a),
            h = f.hasClass(B.item_selected),
            i = f.hasClass(B.item_disabled);
        if (!i)
            if (c.multiple)
                if (b.isMobile) i || (h ? (g.prop("selected", null), f.removeClass(B.item_selected)) : (g.prop("selected", !0), f.addClass(B.item_selected)));
                else if (d && c.lastIndex !== !1) {
            var j = c.lastIndex > a ? a : c.lastIndex,
                k = (c.lastIndex > a ? c.lastIndex : a) + 1;
            c.$options.prop("selected", null), c.$items.filter(A.item_selected).removeClass(B.item_selected), c.$options.slice(j, k).not("[disabled]").prop("selected", !0), c.$items.slice(j, k).not(A.item_disabled).addClass(B.item_selected)
        } else e ? (h ? (g.prop("selected", null), f.removeClass(B.item_selected)) : (g.prop("selected", !0), f.addClass(B.item_selected)), c.lastIndex = a) : (c.$options.prop("selected", null), c.$items.filter(A.item_selected).removeClass(B.item_selected), g.prop("selected", !0), f.addClass(B.item_selected), c.lastIndex = a);
        else if (a > -1 && a < c.$items.length) {
            if (a !== c.index) {
                var l = g.data("label") || f.html();
                c.$selected.html(l).removeClass(A.item_placeholder), c.$items.filter(A.item_selected).removeClass(B.item_selected), c.$el[0].selectedIndex = a, f.addClass(B.item_selected), c.index = a
            }
        } else "" !== c.label && c.$selected.html(c.label)
    }

    function v(b) {
        var c = b.$items.eq(b.index),
            d = b.index >= 0 && !c.hasClass(B.item_placeholder) ? c.position() : {
                left: 0,
                top: 0
            }, e = (b.$wrapper.outerHeight() - c.outerHeight()) / 2;
        void 0 !== a.fn.fsScrollbar ? b.$wrapper.fsScrollbar("resize").fsScrollbar("scroll", b.$wrapper.find(".fs-scrollbar-content").scrollTop() + d.top) : b.$wrapper.scrollTop(b.$wrapper.scrollTop() + d.top - e)
    }

    function w(a, b) {
        a.links ? x(a) : b || a.$el.trigger(C.raw.change, [!0])
    }

    function x(a) {
        var b = a.$el.val();
        a.external ? E.open(b) : E.location.href = b
    }

    function y(a, b) {
        return 0 === b ? a : a.length > b ? a.substring(0, b) + "..." : a
    }
    var z = b.Plugin("dropdown", {
        widget: !0,
        defaults: {
            bottomEdge: 0,
            cover: !1,
            customClass: "",
            label: "",
            external: !1,
            links: !1,
            mobile: !1,
            theme: "fs-light",
            trim: 0
        },
        methods: {
            _setup: c,
            _construct: d,
            _destruct: e,
            disable: f,
            enable: g,
            update: h,
            open: l,
            close: m
        },
        classes: ["cover", "bottom", "multiple", "mobile", "open", "disabled", "focus", "selected", "options", "group", "item", "item_disabled", "item_selected", "item_placeholder"],
        events: {
            close: "close"
        }
    }),
        A = z.classes,
        B = A.raw,
        C = z.events,
        D = z.functions,
        E = b.window,
        F = b.$window,
        G = b.document,
        H = null
}), /*! formstone v1.1.3 [equalize.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mediaquery"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c(a) {
        n.iterate.call(o, g)
    }

    function d() {
        o = a(l.element)
    }

    function e(b) {
        b.maxWidth = b.maxWidth === 1 / 0 ? "100000px" : b.maxWidth, b.mq = "(min-width:" + b.minWidth + ") and (max-width:" + b.maxWidth + ")", b.type = "height" === b.property ? "outerHeight" : "outerWidth", b.target ? a.isArray(b.target) || (b.target = [b.target]) : b.target = ["> *"], d(), a.fsMediaquery("bind", b.rawGuid, b.mq, {
            enter: function () {
                i.call(b.$el, b)
            },
            leave: function () {
                h.call(b.$el, b)
            }
        })
    }

    function f(b) {
        j(b), a.fsMediaquery("unbind", b.rawGuid), d()
    }

    function g(a) {
        if (a.data && (a = a.data), a.enabled)
            for (var b, c, d, e = 0; e < a.target.length; e++) {
                b = 0, c = 0, d = a.$el.find(a.target[e]), d.css(a.property, "");
                for (var f = 0; f < d.length; f++) c = d.eq(f)[a.type](), c > b && (b = c);
                d.css(a.property, b)
            }
    }

    function h(a) {
        a.enabled && (a.enabled = !1, j(a))
    }

    function i(a) {
        if (!a.enabled) {
            a.enabled = !0;
            var b = a.$el.find("img");
            b.length && b.on(m.load, a, g), g(a)
        }
    }

    function j(a) {
        for (var b = 0; b < a.target.length; b++) a.$el.find(a.target[b]).css(a.property, "");
        a.$el.find("img").off(m.namespace)
    }
    var k = b.Plugin("equalize", {
        widget: !0,
        priority: 5,
        defaults: {
            maxWidth: 1 / 0,
            minWidth: "0px",
            property: "height",
            target: null
        },
        methods: {
            _construct: e,
            _destruct: f,
            _resize: c,
            resize: g
        }
    }),
        l = k.classes,
        m = (l.raw, k.events),
        n = k.functions,
        o = []
}), /*! formstone v1.1.3 [lightbox.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./touch", "./transition"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c() {
        ca = b.$body, da = a("html, body"), ea = b.window.location.hash.replace("#", "")
    }

    function d() {
        ga && i()
    }

    function e(a) {
        this.on($.click, a, h);
        var b = this.data(W + "-gallery");
        !fa && ea && b === ea && (fa = !0, this.trigger($.click))
    }

    function f(a) {
        j(), this.off($.namespace)
    }

    function g(b, c) {
        b instanceof a && h.apply(aa, [{
            data: a.extend(!0, {}, {
                $object: b
            }, X, c || {})
        }])
    }

    function h(c) {
        if (!ga) {
            var d = c.data;
            ga = a.extend({}, {
                visible: !1,
                gallery: {
                    active: !1
                },
                isMobile: b.isMobile || d.mobile,
                isTouch: b.support.touch,
                isAnimating: !0,
                oldContentHeight: 0,
                oldContentWidth: 0,
                metaHeight: 0,
                thumbnailHeight: 0,
                captionOpen: !1,
                thumbnailsOpen: !1
            }, d);
            var e = d.$el,
                f = d.$object,
                g = e && e[0].href ? e[0].href || "" : "",
                h = e && e[0].hash ? e[0].hash || "" : "",
                i = (g.toLowerCase().split(".").pop().split(/\#|\?/), e ? e.data(W + "-type") : ""),
                k = "image" === i || g.match(d.fileTypes) || "data:image" === g.substr(0, 10),
                l = U(g),
                n = "url" === i || !k && !l && "http" === g.substr(0, 4) && !h,
                p = "element" === i || !k && !l && !n && "#" === h.substr(0, 1),
                q = "undefined" != typeof f;
            if (p && (g = h), !(k || l || n || p || q)) return void(ga = null);
            if (_.killEvent(c), ga.touch = d.touch && ga.isMobile && ga.isTouch, ga.margin *= 2, k ? ga.type = "image" : l ? ga.type = "video" : ga.type = "element", k || l) {
                var s = e.data(W + "-gallery");
                s && (ga.gallery.active = !0, ga.gallery.id = s, ga.gallery.$items = a("a[data-lightbox-gallery= " + ga.gallery.id + "], a[rel= " + ga.gallery.id + "]"), ga.gallery.index = ga.gallery.$items.index(ga.$el), ga.gallery.total = ga.gallery.$items.length - 1)
            }
            ga.thumbnails && (k || l) && ga.gallery.active || (ga.thumbnails = !1);
            var u = "";
            ga.isMobile || (u += '<div class="' + [Z.overlay, ga.theme, ga.customClass].join(" ") + '"></div>');
            var v = [Z.base, Z.loading, Z.animating, ga.theme, ga.customClass];
            if (ga.fixed && v.push(Z.fixed), ga.isMobile && v.push(Z.mobile), ga.isTouch && v.push(Z.touch), n && v.push(Z.iframed), (p || q) && v.push(Z.inline), ga.thumbnails && v.push(Z.thumbnailed), u += '<div class="' + v.join(" ") + '">', u += '<button type="button" class="' + Z.close + '">' + ga.labels.close + "</button>", u += '<span class="' + Z.loading_icon + '"></span>', u += '<div class="' + Z.container + '">', ga.gallery.active && ga.thumbnails) {
                u += '<div class="' + [Z.thumbnails] + '">', u += '<div class="' + [Z.thumbnail_container] + '">';
                for (var w, x, y = 0, z = ga.gallery.$items.length; z > y; y++) w = ga.gallery.$items.eq(y), x = w.data("lightbox-thumbnail"), x || (x = w.find("img").attr("src")), u += '<button class="' + [Z.thumbnail_item] + '">', u += '<img src="' + x + '" alt="">', u += "</button>";
                u += "</div></div>"
            }
            u += '<div class="' + Z.content + '"></div>', (k || l) && (u += '<div class="' + Z.tools + '">', u += '<div class="' + Z.controls + '">', ga.gallery.active && (u += '<button type="button" class="' + [Z.control, Z.control_previous].join(" ") + '">' + ga.labels.previous + "</button>", u += '<button type="button" class="' + [Z.control, Z.control_next].join(" ") + '">' + ga.labels.next + "</button>"), ga.isMobile && ga.isTouch && (u += '<button type="button" class="' + [Z.toggle, Z.caption_toggle].join(" ") + '">' + ga.labels.captionClosed + "</button>", ga.gallery.active && ga.thumbnails && (u += '<button type="button" class="' + [Z.toggle, Z.thumbnail_toggle].join(" ") + '">' + ga.labels.thumbnailsClosed + "</button>")), u += "</div>", u += '<div class="' + Z.meta + '">', u += '<div class="' + Z.meta_content + '">', ga.gallery.active && (u += '<p class="' + Z.position + '"', ga.gallery.total < 1 && (u += ' style="display: none;"'), u += ">" /*,u+='<span class="'+Z.position_current+'">'+(ga.gallery.index+1)+"</span> ",u+=ga.labels.count,u+=' <span class="'+Z.position_total+'">'+(ga.gallery.total+1)+"</span>",u+="</p>"*/ ), u += '<div class="' + Z.caption + '">', u += ga.formatter.call(e, d), u += "</div></div></div>", u += "</div>"), u += "</div></div>", ca.append(u), ga.$overlay = a(Y.overlay), ga.$lightbox = a(Y.base), ga.$close = a(Y.close), ga.$container = a(Y.container), ga.$content = a(Y.content), ga.$tools = a(Y.tools), ga.$meta = a(Y.meta), ga.$metaContent = a(Y.meta_content), ga.$position = a(Y.position), ga.$caption = a(Y.caption), ga.$controlBox = a(Y.controls), ga.$controls = a(Y.control), ga.$thumbnails = a(Y.thumbnails), ga.$thumbnailContainer = a(Y.thumbnail_container), ga.$thumbnailItems = a(Y.thumbnail_item), ga.isMobile ? (ga.paddingVertical = ga.$close.outerHeight(), ga.paddingHorizontal = 0, ga.mobilePaddingVertical = parseInt(ga.$content.css("paddingTop"), 10) + parseInt(ga.$content.css("paddingBottom"), 10), ga.mobilePaddingHorizontal = parseInt(ga.$content.css("paddingLeft"), 10) + parseInt(ga.$content.css("paddingRight"), 10)) : (ga.paddingVertical = parseInt(ga.$lightbox.css("paddingTop"), 10) + parseInt(ga.$lightbox.css("paddingBottom"), 10), ga.paddingHorizontal = parseInt(ga.$lightbox.css("paddingLeft"), 10) + parseInt(ga.$lightbox.css("paddingRight"), 10), ga.mobilePaddingVertical = 0, ga.mobilePaddingHorizontal = 0), ga.contentHeight = ga.$lightbox.outerHeight() - ga.paddingVertical, ga.contentWidth = ga.$lightbox.outerWidth() - ga.paddingHorizontal, ga.controlHeight = ga.$controls.outerHeight(), m(), ga.gallery.active && (ga.$lightbox.addClass(Z.has_controls), L()), ba.on($.keyDown, M), ca.on($.click, [Y.overlay, Y.close].join(", "), j), ga.gallery.active && ga.$lightbox.on($.click, Y.control, G), ga.thumbnails && ga.$lightbox.on($.click, Y.thumbnail_item, H), ga.isMobile && ga.isTouch && ga.$lightbox.on($.click, Y.caption_toggle, o).on($.click, Y.thumbnail_toggle, r), ga.$lightbox.fsTransition({
                property: "opacity"
            }, function () {
                k ? t(g) : l ? D(g) : n ? P(g) : p ? N(g) : q && Q(ga.$object)
            }).addClass(Z.open), ga.$overlay.addClass(Z.open)
        }
    }

    function i(a) {
        "object" != typeof a && (ga.targetHeight = arguments[0], ga.targetWidth = arguments[1]), "element" === ga.type ? R(ga.$content.find("> :first-child")) : "image" === ga.type ? z() : "video" === ga.type && E(), l()
    }

    function j(a) {
        _.killEvent(a), ga && (ga.$lightbox.fsTransition("destroy"), ga.$content.fsTransition("destroy"), u(), ga.$lightbox.addClass(Z.animating).fsTransition({
            property: "opacity"
        }, function (a) {
            "undefined" != typeof ga.$inlineTarget && ga.$inlineTarget.length && O(), ga.$lightbox.off($.namespace), ga.$container.off($.namespace), ba.off($.keyDown), ca.off($.namespace), ga.$overlay.remove(), ga.$lightbox.remove(), ga = null, ba.trigger($.close)
        }), ga.$lightbox.removeClass(Z.open), ga.$overlay.removeClass(Z.open), ga.isMobile && da.removeClass(Z.lock))
    }

    function k() {
        var a = n();
        ga.isMobile ? 0 : ga.duration, ga.isMobile || ga.$controls.css({
            marginTop: (ga.contentHeight - ga.controlHeight - ga.metaHeight + ga.thumbnailHeight) / 2
        }), ga.$lightbox.fsTransition({
            property: ga.contentHeight !== ga.oldContentHeight ? "height" : "width"
        }, function () {
            ga.$content.fsTransition({
                property: "opacity"
            }, function () {
                ga.$lightbox.removeClass(Z.animating), ga.isAnimating = !1
            }), ga.$lightbox.removeClass(Z.loading).addClass(Z.ready), ga.visible = !0, ba.trigger($.open), ga.gallery.active && (F(), I(), J())
        }), ga.isMobile || ga.$lightbox.css({
            height: ga.contentHeight + ga.paddingVertical,
            width: ga.contentWidth + ga.paddingHorizontal,
            top: ga.fixed ? 0 : a.top
        });
        var b = ga.oldContentHeight !== ga.contentHeight || ga.oldContentWidth !== ga.contentWidth;
        !ga.isMobile && b || ga.$lightbox.fsTransition("resolve"), ga.oldContentHeight = ga.contentHeight, ga.oldContentWidth = ga.contentWidth, ga.isMobile && da.addClass(Z.lock)
    }

    function l() {
        if (ga.visible && !ga.isMobile) {
            var a = n();
            ga.$controls.css({
                marginTop: (ga.contentHeight - ga.controlHeight - ga.metaHeight + ga.thumbnailHeight) / 2
            }), ga.$lightbox.css({
                height: ga.contentHeight + ga.paddingVertical,
                width: ga.contentWidth + ga.paddingHorizontal,
                top: ga.fixed ? 0 : a.top
            }), ga.oldContentHeight = ga.contentHeight, ga.oldContentWidth = ga.contentWidth
        }
    }

    function m() {
        var a = n();
        ga.$lightbox.css({
            top: ga.fixed ? 0 : a.top
        })
    }

    function n() {
        if (ga.isMobile) return {
            left: 0,
            top: 0
        };
        var a = {
            left: (b.windowWidth - ga.contentWidth - ga.paddingHorizontal) / 2,
            top: ga.top <= 0 ? (b.windowHeight - ga.contentHeight - ga.paddingVertical) / 2 : ga.top
        };
        return ga.fixed !== !0 && (a.top += ba.scrollTop()), a
    }

    function o(a) {
        if (_.killEvent(a), ga.captionOpen) p();
        else {
            s();
            var b = parseInt(ga.$metaContent.outerHeight(!0));
            b += parseInt(ga.$meta.css("padding-top")), b += parseInt(ga.$meta.css("padding-bottom")), ga.$meta.css({
                height: b
            }), ga.$lightbox.addClass(Z.caption_open).find(Y.caption_toggle).text(ga.labels.captionOpen), ga.captionOpen = !0
        }
    }

    function p() {
        ga.$lightbox.removeClass(Z.caption_open).find(Y.caption_toggle).text(ga.labels.captionClosed), ga.captionOpen = !1
    }

    function q() {
        var a = this.attr("title"),
            b = void 0 !== a && a ? a.replace(/^\s+|\s+$/g, "") : !1;
        return b ? '<p class="caption">' + b + "</p>" : ""
    }

    function r(a) {
        _.killEvent(a), ga.thumbnailsOpen ? s() : (p(), ga.$lightbox.addClass(Z.thumbnails_open).find(Y.thumbnail_toggle).text(ga.labels.thumbnailsOpen), ga.thumbnailsOpen = !0)
    }

    function s() {
        ga.$lightbox.removeClass(Z.thumbnails_open).find(Y.thumbnail_toggle).text(ga.labels.thumbnailsClosed), ga.thumbnailsOpen = !1
    }

    function t(b) {
        ga.hasScaled = !1, ga.$imageContainer = a('<div class="' + Z.image_container + '"><img></div>'), ga.$image = ga.$imageContainer.find("img"), ga.$image.one($.load, function () {
            var a = T(ga.$image);
            ga.naturalHeight = a.naturalHeight, ga.naturalWidth = a.naturalWidth, ga.retina && (ga.naturalHeight /= 2, ga.naturalWidth /= 2), ga.$content.prepend(ga.$imageContainer), "" === ga.$caption.html() ? (ga.$caption.hide(), ga.$lightbox.removeClass(Z.has_caption)) : (ga.$caption.show(), ga.$lightbox.addClass(Z.has_caption)), z(), k(), ga.touch && (v(), x({
                scale: 1,
                deltaX: 0,
                deltaY: 0
            }), y(), ga.$content.fsTouch({
                pan: !0,
                scale: !0
            }).on($.scaleStart, w).on($.scaleEnd, y).on($.scale, x))
        }).error(S).attr("src", b).addClass(Z.image), (ga.$image[0].complete || 4 === ga.$image[0].readyState) && ga.$image.trigger($.load)
    }

    function u() {
        ga.$image && ga.$image.length && ga.$content.fsTouch("destroy")
    }

    function v() {
        ga.scalePosition = ga.$imageContainer.position(), ga.scaleY = ga.scalePosition.top, ga.scaleX = ga.scalePosition.left, ga.scaleHeight = ga.$image.outerHeight(), ga.scaleWidth = ga.$image.outerWidth()
    }

    function w(a) {
        v(), ga.$lightbox.addClass(Z.scaling)
    }

    function x(a) {
        ga.targetContainerY = ga.scaleY + a.deltaY, ga.targetContainerX = ga.scaleX + a.deltaX, ga.targetImageHeight = ga.scaleHeight * a.scale, ga.targetImageWidth = ga.scaleWidth * a.scale, ga.targetImageHeight < ga.scaleMinHeight && (ga.targetImageHeight = ga.scaleMinHeight), ga.targetImageHeight > ga.scaleMaxHeight && (ga.targetImageHeight = ga.scaleMaxHeight), ga.targetImageWidth < ga.scaleMinWidth && (ga.targetImageWidth = ga.scaleMinWidth), ga.targetImageWidth > ga.scaleMaxWidth && (ga.targetImageWidth = ga.scaleMaxWidth), ga.hasScaled = !0, ga.isScaling = !0, ga.$imageContainer.css({
            top: ga.targetContainerY,
            left: ga.targetContainerX
        }), ga.$image.css({
            height: ga.targetImageHeight,
            width: ga.targetImageWidth,
            top: -(ga.targetImageHeight / 2),
            left: -(ga.targetImageWidth / 2)
        })
    }

    function y(a) {
        v(), ga.isScaling = !1;
        var b = ga.$container.outerHeight() - ga.metaHeight,
            c = ga.$container.outerWidth();
        ga.scaleMinY = b - ga.scaleHeight / 2, ga.scaleMinX = c - ga.scaleWidth / 2, ga.scaleMaxY = ga.scaleHeight / 2, ga.scaleMaxX = ga.scaleWidth / 2, ga.scaleHeight < b ? ga.scalePosition.top = b / 2 : (ga.scalePosition.top < ga.scaleMinY && (ga.scalePosition.top = ga.scaleMinY), ga.scalePosition.top > ga.scaleMaxY && (ga.scalePosition.top = ga.scaleMaxY)), ga.scaleWidth < c ? ga.scalePosition.left = c / 2 : (ga.scalePosition.left < ga.scaleMinX && (ga.scalePosition.left = ga.scaleMinX), ga.scalePosition.left > ga.scaleMaxX && (ga.scalePosition.left = ga.scaleMaxX)), ga.$lightbox.removeClass(Z.scaling), ga.$imageContainer.css({
            left: ga.scalePosition.left,
            top: ga.scalePosition.top
        })
    }

    function z() {
        if (ga.$image) {
            var a = 0;
            for (ga.windowHeight = ga.viewportHeight = b.windowHeight - ga.mobilePaddingVertical - ga.paddingVertical, ga.windowWidth = ga.viewportWidth = b.windowWidth - ga.mobilePaddingHorizontal - ga.paddingHorizontal, ga.contentHeight = 1 / 0, ga.contentWidth = 1 / 0, ga.imageMarginTop = 0, ga.imageMarginLeft = 0; ga.contentHeight > ga.viewportHeight && 2 > a;) ga.imageHeight = 0 === a ? ga.naturalHeight : ga.$image.outerHeight(), ga.imageWidth = 0 === a ? ga.naturalWidth : ga.$image.outerWidth(), ga.metaHeight = 0 === a ? 0 : ga.metaHeight, ga.spacerHeight = 0 === a ? 0 : ga.spacerHeight, ga.thumbnailHeight = 0 === a ? 0 : ga.thumbnailHeight, 0 === a && (ga.ratioHorizontal = ga.imageHeight / ga.imageWidth, ga.ratioVertical = ga.imageWidth / ga.imageHeight, ga.isWide = ga.imageWidth > ga.imageHeight), ga.imageHeight < ga.minHeight && (ga.minHeight = ga.imageHeight), ga.imageWidth < ga.minWidth && (ga.minWidth = ga.imageWidth), ga.isMobile ? (ga.isTouch ? (ga.$controlBox.css({
                width: b.windowWidth
            }), ga.spacerHeight = ga.$controls.outerHeight(!0)) : (ga.$tools.css({
                width: b.windowWidth
            }), ga.spacerHeight = ga.$tools.outerHeight(!0)), ga.spacerHeight += ga.$thumbnails.outerHeight(!0) + 10, ga.contentHeight = ga.viewportHeight, ga.contentWidth = ga.viewportWidth, A(), ga.imageMarginTop = (ga.contentHeight - ga.targetImageHeight - ga.spacerHeight) / 2, ga.imageMarginLeft = (ga.contentWidth - ga.targetImageWidth) / 2) : (0 === a && (ga.viewportHeight -= ga.margin + ga.paddingVertical, ga.viewportWidth -= ga.margin + ga.paddingHorizontal), ga.viewportHeight -= ga.metaHeight, ga.thumbnails && (ga.viewportHeight -= ga.thumbnailHeight), A(), ga.contentHeight = ga.targetImageHeight, ga.contentWidth = ga.targetImageWidth), ga.isMobile || ga.isTouch || ga.$meta.css({
                width: ga.contentWidth
            }), ga.hasScaled || (ga.$image.css({
                height: ga.targetImageHeight,
                width: ga.targetImageWidth
            }), ga.touch ? ga.$image.css({
                top: -(ga.targetImageHeight / 2),
                left: -(ga.targetImageWidth / 2)
            }) : ga.$image.css({
                marginTop: ga.imageMarginTop,
                marginLeft: ga.imageMarginLeft
            })), ga.isMobile || (ga.metaHeight = ga.$meta.outerHeight(!0), ga.contentHeight += ga.metaHeight), ga.thumbnails && (ga.thumbnailHeight = ga.$thumbnails.outerHeight(!0), ga.contentHeight += ga.thumbnailHeight), a++;
            ga.touch && (ga.scaleMinHeight = ga.targetImageHeight, ga.scaleMinWidth = ga.targetImageWidth, ga.scaleMaxHeight = ga.naturalHeight, ga.scaleMaxWidth = ga.naturalWidth)
        }
    }

    function A() {
        var a = ga.isMobile ? ga.contentHeight - ga.spacerHeight : ga.viewportHeight,
            b = ga.isMobile ? ga.contentWidth : ga.viewportWidth;
        ga.isWide ? (ga.targetImageWidth = b, ga.targetImageHeight = ga.targetImageWidth * ga.ratioHorizontal, ga.targetImageHeight > a && (ga.targetImageHeight = a, ga.targetImageWidth = ga.targetImageHeight * ga.ratioVertical)) : (ga.targetImageHeight = a, ga.targetImageWidth = ga.targetImageHeight * ga.ratioVertical, ga.targetImageWidth > b && (ga.targetImageWidth = b, ga.targetImageHeight = ga.targetImageWidth * ga.ratioHorizontal)), (ga.targetImageWidth > ga.imageWidth || ga.targetImageHeight > ga.imageHeight) && (ga.targetImageHeight = ga.imageHeight, ga.targetImageWidth = ga.imageWidth), (ga.targetImageWidth < ga.minWidth || ga.targetImageHeight < ga.minHeight) && (ga.targetImageWidth < ga.minWidth ? (ga.targetImageWidth = ga.minWidth, ga.targetImageHeight = ga.targetImageWidth * ga.ratioHorizontal) : (ga.targetImageHeight = ga.minHeight, ga.targetImageWidth = ga.targetImageHeight * ga.ratioVertical))
    }

    function B(a) {
        return "//www.youtube.com/embed/" + a[1]
    }

    function C(a) {
        return "//player.vimeo.com/video/" + a[3]
    }

    function D(b) {
        var c = U(b),
            d = b.split("?");
        c ? (d.length >= 2 && (c += "?" + d.slice(1)[0].trim()), ga.$videoWrapper = a('<div class="' + Z.video_wrapper + '"></div>'), ga.$video = a('<iframe class="' + Z.video + '" frameborder="0" seamless="seamless" allowfullscreen></iframe>'), ga.$video.attr("src", c).addClass(Z.video).prependTo(ga.$videoWrapper), ga.$content.prepend(ga.$videoWrapper), E(), k()) : S()
    }

    function E() {
        ga.windowHeight = ga.viewportHeight = b.windowHeight - ga.mobilePaddingVertical - ga.paddingVertical, ga.windowWidth = ga.viewportWidth = b.windowWidth - ga.mobilePaddingHorizontal - ga.paddingHorizontal, ga.videoMarginTop = 0, ga.videoMarginLeft = 0, ga.isMobile ? (ga.isTouch ? (ga.$controlBox.css({
            width: b.windowWidth
        }), ga.spacerHeight = ga.$controls.outerHeight(!0)) : (ga.$tools.css({
            width: b.windowWidth
        }), ga.spacerHeight = ga.$tools.outerHeight(!0)), ga.spacerHeight = ga.$thumbnails.outerHeight(!0) + 10, ga.viewportHeight -= ga.spacerHeight, ga.targetVideoWidth = ga.viewportWidth, ga.targetVideoHeight = ga.targetVideoWidth * ga.videoRatio, ga.targetVideoHeight > ga.viewportHeight && (ga.targetVideoHeight = ga.viewportHeight, ga.targetVideoWidth = ga.targetVideoHeight / ga.videoRatio), ga.videoMarginTop = (ga.viewportHeight - ga.targetVideoHeight) / 2, ga.videoMarginLeft = (ga.viewportWidth - ga.targetVideoWidth) / 2) : (ga.viewportHeight = ga.windowHeight - ga.margin, ga.viewportWidth = ga.windowWidth - ga.margin, ga.targetVideoWidth = ga.videoWidth > ga.viewportWidth ? ga.viewportWidth : ga.videoWidth, ga.targetVideoWidth < ga.minWidth && (ga.targetVideoWidth = ga.minWidth), ga.targetVideoHeight = ga.targetVideoWidth * ga.videoRatio, ga.contentHeight = ga.targetVideoHeight, ga.contentWidth = ga.targetVideoWidth), ga.isMobile || ga.isTouch || ga.$meta.css({
            width: ga.contentWidth
        }), ga.$videoWrapper.css({
            height: ga.targetVideoHeight,
            width: ga.targetVideoWidth,
            marginTop: ga.videoMarginTop,
            marginLeft: ga.videoMarginLeft
        }), ga.isMobile || (ga.metaHeight = ga.$meta.outerHeight(!0), ga.contentHeight += ga.metaHeight), ga.thumbnails && (ga.thumbnailHeight = ga.$thumbnails.outerHeight(!0), ga.contentHeight += ga.thumbnailHeight)
    }

    function F(b) {
        var c = "";
        ga.gallery.index > 0 && (c = ga.gallery.$items.eq(ga.gallery.index - 1).attr("href"), U(c) || a('<img src="' + c + '">')), ga.gallery.index < ga.gallery.total && (c = ga.gallery.$items.eq(ga.gallery.index + 1).attr("href"), U(c) || a('<img src="' + c + '">'))
    }

    function G(b) {
        _.killEvent(b);
        var c = a(b.currentTarget);
        ga.isAnimating || c.hasClass(Z.control_disabled) || (ga.isAnimating = !0, u(), p(), ga.gallery.index += c.hasClass(Z.control_next) ? 1 : -1, ga.gallery.index > ga.gallery.total && (ga.gallery.index = ga.infinite ? 0 : ga.gallery.total), ga.gallery.index < 0 && (ga.gallery.index = ga.infinite ? ga.gallery.total : 0), I(), ga.$lightbox.addClass(Z.animating), ga.$content.fsTransition({
            property: "opacity"
        }, K), ga.$lightbox.addClass(Z.loading))
    }

    function H(b) {
        _.killEvent(b);
        var c = a(b.currentTarget);
        ga.isAnimating || c.hasClass(Z.active) || (ga.isAnimating = !0, u(), p(), ga.gallery.index = ga.$thumbnailItems.index(c), I(), ga.$lightbox.addClass(Z.animating), ga.$content.fsTransition({
            property: "opacity"
        }, K), ga.$lightbox.addClass(Z.loading))
    }

    function I() {
        if (ga.thumbnails) {
            var a = ga.$thumbnailItems.eq(ga.gallery.index);
            ga.$thumbnailItems.removeClass(Z.active), a.addClass(Z.active)
        }
    }

    function J() {
        if (ga.thumbnails) {
            var a = ga.$thumbnailItems.eq(ga.gallery.index),
                b = a.position().left + a.outerWidth(!1) / 2 - ga.$thumbnailContainer.outerWidth(!0) / 2;
            ga.$thumbnailContainer.stop().animate({
                scrollLeft: b
            }, 200, "linear")
        }
    }

    function K() {
        "undefined" != typeof ga.$imageContainer && ga.$imageContainer.remove(), "undefined" != typeof ga.$videoWrapper && ga.$videoWrapper.remove(), ga.$el = ga.gallery.$items.eq(ga.gallery.index), ga.$caption.html(ga.formatter.call(ga.$el, ga)), ga.$position.find(Y.position_current).html(ga.gallery.index + 1);
        var a = ga.$el.attr("href"),
            b = U(a);
        b ? (ga.type = "video", D(a)) : (ga.type = "image", t(a)), L()
    }

    function L() {
        ga.$controls.removeClass(Z.control_disabled), ga.infinite || (0 === ga.gallery.index && ga.$controls.filter(Y.control_previous).addClass(Z.control_disabled), ga.gallery.index === ga.gallery.total && ga.$controls.filter(Y.control_next).addClass(Z.control_disabled))
    }

    function M(a) {
        !ga.gallery.active || 37 !== a.keyCode && 39 !== a.keyCode ? 27 === a.keyCode && ga.$close.trigger($.click) : (_.killEvent(a), ga.$controls.filter(37 === a.keyCode ? Y.control_previous : Y.control_next).trigger($.click))
    }

    function N(b) {
        ga.$inlineTarget = a(b), ga.$inlineContents = ga.$inlineTarget.children().detach(), Q(ga.$inlineContents)
    }

    function O() {
        ga.$inlineTarget.append(ga.$inlineContents.detach())
    }

    function P(b) {
        b += b.indexOf("?") > -1 ? "&" + ga.requestKey + "=true" : "?" + ga.requestKey + "=true";
        var c = a('<iframe class="' + Z.iframe + '" src="' + b + '"></iframe>');
        Q(c)
    }

    function Q(a) {
        ga.$content.append(a), R(a), k()
    }

    function R(a) {
        ga.windowHeight = b.windowHeight - ga.mobilePaddingVertical - ga.paddingVertical, ga.windowWidth = b.windowWidth - ga.mobilePaddingHorizontal - ga.paddingHorizontal, ga.objectHeight = a.outerHeight(!0), ga.objectWidth = a.outerWidth(!0), ga.targetHeight = ga.targetHeight || (ga.$el ? ga.$el.data(W + "-height") : null), ga.targetWidth = ga.targetWidth || (ga.$el ? ga.$el.data(W + "-width") : null), ga.maxHeight = ga.windowHeight < 0 ? ga.minHeight : ga.windowHeight, ga.isIframe = a.is("iframe"), ga.objectMarginTop = 0, ga.objectMarginLeft = 0, ga.isMobile || (ga.windowHeight -= ga.margin, ga.windowWidth -= ga.margin), ga.contentHeight = ga.targetHeight ? ga.targetHeight : ga.isIframe || ga.isMobile ? ga.windowHeight : ga.objectHeight, ga.contentWidth = ga.targetWidth ? ga.targetWidth : ga.isIframe || ga.isMobile ? ga.windowWidth : ga.objectWidth, (ga.isIframe || ga.isObject) && ga.isMobile ? (ga.contentHeight = ga.windowHeight, ga.contentWidth = ga.windowWidth) : ga.isObject && (ga.contentHeight = ga.contentHeight > ga.windowHeight ? ga.windowHeight : ga.contentHeight, ga.contentWidth = ga.contentWidth > ga.windowWidth ? ga.windowWidth : ga.contentWidth), ga.isMobile || (ga.contentHeight > ga.maxHeight && (ga.contentHeight = ga.maxHeight), ga.contentWidth > ga.maxWidth && (ga.contentWidth = ga.maxWidth))
    }

    function S() {
        var b = a('<div class="' + Z.error + '"><p>Error Loading Resource</p></div>');
        ga.type = "element", ga.$tools.remove(), ga.$image.off($.namespace), Q(b)
    }

    function T(a) {
        var b = a[0],
            c = new Image;
        return "undefined" != typeof b.naturalHeight ? {
            naturalHeight: b.naturalHeight,
            naturalWidth: b.naturalWidth
        } : "img" === b.tagName.toLowerCase() ? (c.src = b.src, {
            naturalHeight: c.height,
            naturalWidth: c.width
        }) : !1
    }

    function U(a) {
        var b, c = ga.videoFormatter;
        for (var d in c)
            if (c.hasOwnProperty(d) && (b = a.match(c[d].pattern), null !== b)) return c[d].format.call(ga, b);
        return !1
    }
    var V = b.Plugin("lightbox", {
        widget: !0,
        defaults: {
            customClass: "",
            fileTypes: /\.(jpg|sjpg|jpeg|png|gif)$/i,
            fixed: !1,
            formatter: q,
            infinite: !1,
            labels: {
                close: "Close",
                count: "of",
                next: "Next",
                previous: "Previous",
                captionClosed: "View Caption",
                captionOpen: "Close Caption",
                thumbnailsClosed: "View Thumbnails",
                thumbnailsOpen: "Close Thumbnails"
            },
            margin: 50,
            maxHeight: 1e4,
            maxWidth: 1e4,
            minHeight: 100,
            minWidth: 100,
            mobile: !1,
            retina: !1,
            requestKey: "fs-lightbox",
            theme: "fs-light",
            thumbnails: !1,
            top: 0,
            touch: !0,
            videoFormatter: {
                youtube: {
                    pattern: /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,
                    format: B
                },
                vimeo: {
                    pattern: /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
                    format: C
                }
            },
            videoRatio: .5625,
            videoWidth: 800
        },
        classes: ["loading", "animating", "scaling", "fixed", "mobile", "touch", "inline", "iframed", "open", "ready", "overlay", "close", "loading_icon", "container", "content", "image", "image_container", "video", "video_wrapper", "tools", "meta", "meta_content", "controls", "control", "control_previous", "control_next", "control_disabled", "position", /*"position_current","position_total"*/ , "toggle", "caption_toggle", "caption", "caption_open", "thumbnailed", "thumbnails_open", "thumbnail_toggle", "thumbnails", "thumbnail_container", "thumbnail_item", "active", "has_controls", "has_caption", "iframe", "error", "active", "lock"],
        events: {
            open: "open",
            close: "close"
        },
        methods: {
            _setup: c,
            _construct: e,
            _destruct: f,
            _resize: d,
            resize: i
        },
        utilities: {
            _initialize: g,
            close: j
        }
    }),
        W = V.namespace,
        X = V.defaults,
        Y = V.classes,
        Z = Y.raw,
        $ = V.events,
        _ = V.functions,
        aa = b.window,
        ba = b.$window,
        ca = null,
        da = null,
        ea = !1,
        fa = !1,
        ga = null
}), /*! formstone v1.1.3 [mediaquery.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c(b) {
        b = b || {};
        for (var c in t) t.hasOwnProperty(c) && (l[c] = b[c] ? a.merge(b[c], l[c]) : l[c]);
        l = a.extend(l, b), l.minWidth.sort(p.sortDesc), l.maxWidth.sort(p.sortAsc), l.minHeight.sort(p.sortDesc), l.maxHeight.sort(p.sortAsc);
        for (var d in t)
            if (t.hasOwnProperty(d)) {
                s[d] = {};
                for (var e in l[d])
                    if (l[d].hasOwnProperty(e)) {
                        var f = window.matchMedia("(" + t[d] + ": " + (l[d][e] === 1 / 0 ? 1e5 : l[d][e]) + l.unit + ")");
                        f.addListener(g), s[d][l[d][e]] = f
                    }
            }
        g()
    }

    function d(a, b, c) {
        var d = o.matchMedia(b),
            e = i(d.media);
        r[e] || (r[e] = {
            mq: d,
            active: !0,
            enter: {},
            leave: {}
        }, r[e].mq.addListener(h));
        for (var f in c) c.hasOwnProperty(f) && r[e].hasOwnProperty(f) && (r[e][f][a] = c[f]);
        var g = r[e],
            j = d.matches;
        j && g[m.enter].hasOwnProperty(a) ? (g[m.enter][a].apply(d), g.active = !0) : !j && g[m.leave].hasOwnProperty(a) && (g[m.leave][a].apply(d), g.active = !1)
    }

    function e(a, b) {
        if (a)
            if (b) {
                var c = i(b);
                r[c] && (r[c].enter[a] && delete r[c].enter[a], r[c].leave[a] && delete r[c].leave[a])
            } else
                for (var d in r) r.hasOwnProperty(d) && (r[d].enter[a] && delete r[d].enter[a], r[d].leave[a] && delete r[d].leave[a])
    }

    function f() {
        q = {
            unit: l.unit
        };
        for (var a in t)
            if (t.hasOwnProperty(a))
                for (var c in s[a])
                    if (s[a].hasOwnProperty(c)) {
                        var d = "Infinity" === c ? 1 / 0 : parseInt(c, 10),
                            e = t[a].indexOf("width") > -1 ? b.fallbackWidth : b.fallbackHeight,
                            f = a.indexOf("max") > -1;
                        b.support.nativeMatchMedia ? s[a][c].matches && (f ? (!q[a] || d < q[a]) && (q[a] = d) : (!q[a] || d > q[a]) && (q[a] = d)) : f ? !q[a] && d > e && (q[a] = d) : (!q[a] && 0 !== q[a] || d > q[a] && e > d) && (q[a] = d)
                    }
    }

    function g() {
        f(), n.trigger(m.mqChange, [q])
    }

    function h(a) {
        var b = i(a.media),
            c = r[b],
            d = a.matches,
            e = d ? m.enter : m.leave;
        if (c && (c.active || !c.active && d)) {
            for (var f in c[e]) c[e].hasOwnProperty(f) && c[e][f].apply(c.mq);
            c.active = !0
        }
    }

    function i(a) {
        return a.replace(/[^a-z0-9\s]/gi, "").replace(/[_\s]/g, "").replace(/^\s+|\s+$/g, "")
    }

    function j() {
        return q
    }
    var k = b.Plugin("mediaquery", {
        utilities: {
            _initialize: c,
            state: j,
            bind: d,
            unbind: e
        },
        events: {
            mqChange: "mqchange"
        }
    }),
        l = {
            minWidth: [0],
            maxWidth: [1 / 0],
            minHeight: [0],
            maxHeight: [1 / 0],
            unit: "px"
        }, m = a.extend(k.events, {
            enter: "enter",
            leave: "leave"
        }),
        n = b.$window,
        o = n[0],
        p = k.functions,
        q = null,
        r = [],
        s = {}, t = {
            minWidth: "min-width",
            maxWidth: "max-width",
            minHeight: "min-height",
            maxHeight: "max-height"
        }
}), /*! formstone v1.1.3 [pagination.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mediaquery"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c(b) {
        b.mq = "(max-width:" + (b.maxWidth === 1 / 0 ? "100000px" : b.maxWidth) + ")";
        var c = "";
        c += '<button type="button" class="' + [m.control, m.control_previous].join(" ") + '">' + b.labels.previous + "</button>", c += '<button type="button" class="' + [m.control, m.control_next].join(" ") + '">' + b.labels.next + "</button>", c += '<div class="' + m.position + '">', c += '<span class="' + m.current + '">0</span>', c += " " + b.labels.count + " ", c += '<span class="' + m.total + '">0</span>', c += "</div>", c += '<select class="' + m.select + '" tab-index="-1"></select>', b.thisClasses = [m.base, b.theme, b.customClass], this.addClass(b.thisClasses.join(" ")).wrapInner('<div class="' + m.pages + '"></div>').prepend(c), b.$controls = this.find(l.control), b.$pages = this.find(l.pages), b.$items = b.$pages.children().addClass(m.page), b.$position = this.find(l.position), b.$select = this.find(l.select), b.index = -1, b.total = b.$items.length - 1;
        var d = b.$items.index(b.$items.filter(l.active));
        b.$items.eq(0).addClass(m.first).after('<span class="' + m.ellipsis + '">&hellip;</span>').end().eq(b.total).addClass(m.last).before('<span class="' + m.ellipsis + '">&hellip;</span>'), b.$ellipsis = b.$pages.find(l.ellipsis), j(b), this.on(n.click, l.page, b, g).on(n.click, l.control, b, e).on(n.click, l.position, b, h).on(n.change, l.select, b, f), a.fsMediaquery("bind", b.rawGuid, b.mq, {
            enter: function () {
                b.$el.addClass(m.mobile)
            },
            leave: function () {
                b.$el.removeClass(m.mobile)
            }
        }), i(b, d)
    }

    function d(b) {
        a.fsMediaquery("unbind", b.rawGuid), b.$controls.remove(), b.$ellipsis.remove(), b.$select.remove(), b.$position.remove(), b.$items.removeClass([m.page, m.active, m.visible, m.first, m.last].join(" ")).unwrap(), this.removeClass(b.thisClasses.join(" ")).off(n.namespace)
    }

    function e(b) {
        o.killEvent(b);
        var c = b.data,
            d = c.index + (a(b.currentTarget).hasClass(m.control_previous) ? -1 : 1);
        d >= 0 && c.$items.eq(d).trigger(n.raw.click)
    }

    function f(b) {
        o.killEvent(b);
        var c = b.data,
            d = a(b.currentTarget),
            e = parseInt(d.val(), 10);
        c.$items.eq(e).trigger(n.raw.click)
    }

    function g(b) {
        var c = b.data,
            d = c.$items.index(a(b.currentTarget));
        o.killEvent(b), c.ajax ? i(c, d) : window.location = a(b.currentTarget).attr("href")
    }

    function h(a) {
        o.killEvent(a);
        var c = a.data;
        if (b.isMobile && !b.isFirefoxMobile) {
            var d = c.$select[0];
            if (window.document.createEvent) {
                var e = window.document.createEvent("MouseEvents");
                e.initMouseEvent("mousedown", !1, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), d.dispatchEvent(e)
            } else d.fireEvent && d.fireEvent("onmousedown")
        }
    }

    function i(a, b) {
        if (0 > b && (b = 0), b > a.total && (b = a.total), b !== a.index) {
            a.index = b;
            var c = a.index - a.visible,
                d = a.index + (a.visible + 1);
            0 > c && (c = 0), d > a.total && (d = a.total), a.$items.removeClass(m.visible).filter(l.active).removeClass(m.active).end().eq(a.index).addClass(m.active).end().slice(c, d).addClass(m.visible), a.$position.find(l.current).text(a.index + 1).end().find(l.total).text(a.total + 1), a.$select.val(a.index), a.$controls.removeClass(l.disabled), 0 === b && a.$controls.filter(l.control_previous).addClass(m.disabled), b === a.total && a.$controls.filter(l.control_next).addClass(m.disabled), a.$ellipsis.removeClass(m.visible), b > a.visible + 1 && a.$ellipsis.eq(0).addClass(m.visible), b < a.total - a.visible - 1 && a.$ellipsis.eq(1).addClass(m.visible), a.$el.trigger(n.update, [a.index])
        }
    }

    function j(a) {
        for (var b = "", c = 0; c <= a.total; c++) b += '<option value="' + c + '"', c === a.index && (b += 'selected="selected"'), b += ">Page " + (c + 1) + "</option>";
        a.$select.html(b)
    }
    var k = b.Plugin("pagination", {
        widget: !0,
        defaults: {
            ajax: !1,
            customClass: "",
            labels: {
                count: "of",
                next: "Next",
                previous: "Previous"
            },
            maxWidth: "740px",
            theme: "fs-light",
            visible: 2
        },
        classes: ["pages", "page", "active", "first", "last", "visible", "ellipsis", "control", "control_previous", "control_next", "position", "select", "mobile", "current", "total"],
        events: {
            update: "update"
        },
        methods: {
            _construct: c,
            _destruct: d
        }
    }),
        l = k.classes,
        m = l.raw,
        n = k.events,
        o = k.functions
}), /*! formstone v1.1.3 [navigation.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mediaquery", "./swap"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c() {
        w = a("html, body")
    }

    function d(b) {
        b.handleGuid = u.handle + b.guid, b.isToggle = "toggle" === b.type, b.open = !1, b.isToggle && (b.gravity = "");
        var c = u.base,
            d = [c, b.type].join("-"),
            e = b.gravity ? [d, b.gravity].join("-") : "",
            f = [b.rawGuid, b.theme, b.customClass].join(" ");
        b.handle = this.data(s + "-handle"), b.content = this.data(s + "-content"), b.handleClasses = [u.handle, u.handle.replace(c, d), e ? u.handle.replace(c, e) : "", b.handleGuid, f].join(" "), b.thisClasses = [u.nav.replace(c, d), e ? u.nav.replace(c, e) : "", f], b.contentClasses = [u.content.replace(c, d), f].join(" "), b.contentClassesOpen = [e ? u.content.replace(c, e) : "", u.open].join(" "), b.$nav = this.addClass(b.thisClasses.join(" ")), b.$handle = a(b.handle).addClass(b.handleClasses), b.$content = a(b.content).addClass(b.contentClasses), b.$animate = a().add(b.$nav).add(b.$content), p(b), b.$handle.attr("data-swap-target", b.dotGuid).attr("data-swap-linked", b.handleGuid).attr("data-swap-group", u.base).on("activate.swap" + b.dotGuid, b, j).on("deactivate.swap" + b.dotGuid, b, k).on("enable.swap" + b.dotGuid, b, l).on("disable.swap" + b.dotGuid, b, m).fsSwap({
            maxWidth: b.maxWidth,
            classes: {
                target: b.dotGuid,
                enabled: t.enabled,
                active: t.open,
                raw: {
                    target: b.rawGuid,
                    enabled: u.enabled,
                    active: u.open
                }
            }
        })
    }

    function e(a) {
        a.$content.removeClass([a.contentClasses, a.contentClassesOpen].join(" ")).off(v.namespace), a.$handle.removeAttr("data-swap-target").removeData("swap-target").removeAttr("data-swap-linked").removeData("swap-linked").removeClass(a.handleClasses).off(a.dotGuid).html(a.originalLabel).fsSwap("destroy"), q(a), o(a), this.removeClass(a.thisClasses.join(" ")).off(v.namespace)
    }

    function f(a) {
        a.$handle.fsSwap("activate")
    }

    function g(a) {
        a.$handle.fsSwap("deactivate")
    }

    function h(a) {
        a.$handle.fsSwap("enable")
    }

    function i(a) {
        a.$handle.fsSwap("disable")
    }

    function j(a) {
        if (!a.originalEvent) {
            var b = a.data;
            b.open || (b.$el.trigger(v.open), b.$content.addClass(b.contentClassesOpen).one(v.click, function () {
                g(b)
            }), b.label && b.$handle.html(b.labels.open), n(b), b.open = !0)
        }
    }

    function k(a) {
        if (!a.originalEvent) {
            var b = a.data;
            b.open && (b.$el.trigger(v.close), b.$content.removeClass(b.contentClassesOpen).off(v.namespace), b.label && b.$handle.html(b.labels.closed), o(b), b.open = !1)
        }
    }

    function l(a) {
        var b = a.data;
        b.$content.addClass(u.enabled), setTimeout(function () {
            b.$animate.addClass(u.animated)
        }, 0), b.label && b.$handle.html(b.labels.closed)
    }

    function m(a) {
        var b = a.data;
        b.$content.removeClass(u.enabled, u.animated), b.$animate.removeClass(u.animated), q(b), o(b)
    }

    function n(a) {
        a.isToggle || w.addClass(u.lock)
    }

    function o(a) {
        a.isToggle || w.removeClass(u.lock)
    }

    function p(a) {
        if (a.label)
            if (a.$handle.length > 1) {
                a.originalLabel = [];
                for (var b = 0, c = a.$handle.length; c > b; b++) a.originalLabel[b] = a.$handle.eq(b).html()
            } else a.originalLabel = a.$handle.html()
    }

    function q(a) {
        if (a.label)
            if (a.$handle.length > 1)
                for (var b = 0, c = a.$handle.length; c > b; b++) a.$handle.eq(b).html(a.originalLabel[b]);
            else a.$handle.html(a.originalLabel)
    }
    var r = b.Plugin("navigation", {
        widget: !0,
        defaults: {
            customClass: "",
            gravity: "left",
            label: !0,
            labels: {
                closed: "Menu",
                open: "Close"
            },
            maxWidth: "980px",
            theme: "fs-light",
            type: "toggle"
        },
        classes: ["handle", "nav", "content", "animated", "enabled", "open", "toggle", "push", "reveal", "overlay", "left", "right", "lock"],
        events: {
            open: "open",
            close: "close"
        },
        methods: {
            _setup: c,
            _construct: d,
            _destruct: e,
            open: f,
            close: g,
            enable: h,
            disable: i
        }
    }),
        s = r.namespace,
        t = r.classes,
        u = t.raw,
        v = r.events,
        w = (r.functions, null)
}), /*! formstone v1.1.3 [number.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c() {
        u = b.$body
    }

    function d(a) {
        var b = parseFloat(this.attr("min")),
            c = parseFloat(this.attr("max"));
        a.min = b || 0 === b ? b : !1, a.max = c || 0 === c ? c : !1, a.step = parseFloat(this.attr("step")) || 1, a.timer = null, a.digits = n(a.step), a.disabled = this.is(":disabled") || this.is("[readonly]");
        var d = "";
        d += '<button type="button" class="' + [r.arrow, r.up].join(" ") + '">' + a.labels.up + "</button>", d += '<button type="button" class="' + [r.arrow, r.down].join(" ") + '">' + a.labels.down + "</button>", this.wrap('<div class="' + [r.base, a.theme, a.customClass, a.disabled ? r.disabled : ""].join(" ") + '"></div>').after(d), a.$container = this.parent(q.base), a.$arrows = a.$container.find(q.arrow), this.on(s.keyPress, a, j).on(s.focus, a, h).on(s.blur, a, i), a.$container.on([s.touchStart, s.mouseDown].join(" "), q.arrow, a, k)
    }

    function e(a) {
        a.$arrows.remove(), this.unwrap().off(s.namespace)
    }

    function f(a) {
        a.disabled && (this.prop("disabled", !1), a.$container.removeClass(r.disabled), a.disabled = !1)
    }

    function g(a) {
        a.disabled || (this.prop("disabled", !0), a.$container.addClass(r.disabled), a.disabled = !0)
    }

    function h(a) {
        a.data.$container.addClass(r.focus)
    }

    function i(a) {
        a.data.$container.removeClass(r.focus)
    }

    function j(a) {
        var b = a.data;
        38 !== a.keyCode && 40 !== a.keyCode || (a.preventDefault(), m(b, 38 === a.keyCode ? b.step : -b.step))
    }

    function k(b) {
        t.killEvent(b), l(b);
        var c = b.data;
        if (!c.disabled && b.which <= 1) {
            var d = a(b.target).hasClass(r.up) ? c.step : -c.step;
            c.timer = t.startTimer(c.timer, 300, function () {
                c.timer = t.startTimer(c.timer, 125, function () {
                    m(c, d, !1)
                }, !0)
            }), m(c, d), u.on([s.touchEnd, s.mouseUp].join(" "), c, l)
        }
    }

    function l(a) {
        t.killEvent(a);
        var b = a.data;
        t.clearTimer(b.timer, !0), u.off(s.namespace)
    }

    function m(b, c) {
        var d = parseFloat(b.$el.val()),
            e = c;
        "undefined" === a.type(d) || isNaN(d) ? e = b.min !== !1 ? b.min : 0 : b.min !== !1 && d < b.min ? e = b.min : e += d;
        var f = (e - b.min) % b.step;
        0 !== f && (e -= f), b.min !== !1 && e < b.min && (e = b.min), b.max !== !1 && e > b.max && (e -= b.step), e !== d && (e = o(e, b.digits), b.$el.val(e).trigger(s.raw.change))
    }

    function n(a) {
        var b = String(a);
        return b.indexOf(".") > -1 ? b.length - b.indexOf(".") - 1 : 0
    }

    function o(a, b) {
        var c = Math.pow(10, b);
        return Math.round(a * c) / c
    }
    var p = b.Plugin("number", {
        widget: !0,
        defaults: {
            customClass: "",
            labels: {
                up: "Up",
                down: "Down"
            },
            theme: "fs-light"
        },
        classes: ["arrow", "up", "down", "disabled", "focus"],
        methods: {
            _setup: c,
            _construct: d,
            _destruct: e,
            enable: f,
            disable: g
        }
    }),
        q = p.classes,
        r = q.raw,
        s = p.events,
        t = p.functions,
        u = null
}), /*! formstone v1.1.3 [range.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./touch"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c(a) {
        v.iterate.call(w, i)
    }

    function d() {
        w = a(s.element)
    }

    function e(a) {
        a.formatter || (a.formatter = q), a.min = parseFloat(this.attr("min")) || 0, a.max = parseFloat(this.attr("max")) || 100, a.step = parseFloat(this.attr("step")) || 1, a.digits = a.step.toString().length - a.step.toString().indexOf("."), a.value = parseFloat(this.val()) || a.min + (a.max - a.min) / 2;
        var b = "";
        a.vertical = "vertical" === this.attr("orient") || a.vertical, a.disabled = this.is(":disabled") || this.is("[readonly]"), b += '<div class="' + t.track + '">', a.fill && (b += '<span class="' + t.fill + '"></span>'), b += '<div class="' + t.handle + '">', b += '<span class="' + t.marker + '"></span>', b += "</div>", b += "</div>";
        var c = [t.base, a.theme, a.customClass, a.vertical ? t.vertical : "", a.labels ? t.labels : "", a.disabled ? t.disabled : ""];
        if (this.addClass(t.element).wrap('<div class="' + c.join(" ") + '"></div>').after(b), a.$container = this.parents(s.base), a.$track = a.$container.find(s.track), a.$fill = a.$container.find(s.fill), a.$handle = a.$container.find(s.handle), a.$output = a.$container.find(s.output), a.labels) {
            var e = '<span class="' + [t.label, t.label_max].join(" ") + '">' + a.formatter.call(this, a.labels.max ? a.labels.max : a.max) + "</span>",
                f = '<span class="' + [t.label, t.label_min].join(" ") + '">' + a.formatter.call(this, a.labels.max ? a.labels.min : a.min) + "</span>";
            a.$container.prepend(a.vertical ? e : f).append(a.vertical ? f : e)
        }
        a.$labels = a.$container.find(s.label), this.on(u.focus, a, m).on(u.blur, a, n).on(u.change, a, p), a.$container.fsTouch({
            pan: !0,
            axis: a.vertical ? "y" : "x"
        }).on(u.panStart, a, j).on(u.pan, a, k).on(u.panEnd, a, l), d(), i.call(this, a)
    }

    function f(a) {
        a.$container.off(u.namespace).fsTouch("destroy"), a.$track.remove(), a.$labels.remove(), this.unwrap().removeClass(t.element).off(u.namespace), d()
    }

    function g(a) {
        a.disabled && (this.prop("disabled", !1), a.$container.removeClass(t.disabled), a.disabled = !1)
    }

    function h(a) {
        a.disabled || (this.prop("disabled", !0), a.$container.addClass(t.disabled), a.disabled = !0)
    }

    function i(a) {
        a.stepCount = (a.max - a.min) / a.step, a.offset = a.$track.offset(), a.vertical ? (a.trackHeight = a.$track.outerHeight(), a.handleHeight = a.$handle.outerHeight(), a.increment = a.trackHeight / a.stepCount) : (a.trackWidth = a.$track.outerWidth(), a.handleWidth = a.$handle.outerWidth(), a.increment = a.trackWidth / a.stepCount);
        var b = (a.$el.val() - a.min) / (a.max - a.min);
        o(a, b, !0)
    }

    function j(a) {
        v.killEvent(a);
        var b = a.data;
        b.disabled || (k(a), b.$container.addClass(t.focus))
    }

    function k(a) {
        v.killEvent();
        var b = a.data,
            c = 0;
        b.disabled || (c = b.vertical ? 1 - (a.pageY - b.offset.top) / b.trackHeight : (a.pageX - b.offset.left) / b.trackWidth, o(b, c))
    }

    function l(a) {
        v.killEvent(a);
        var b = a.data;
        b.disabled || b.$container.removeClass(t.focus)
    }

    function m(a) {
        a.data.$container.addClass(t.focus)
    }

    function n(a) {
        a.data.$container.removeClass(t.focus)
    }

    function o(a, b, c) {
        a.increment > 1 && (b = a.vertical ? Math.round(b * a.stepCount) * a.increment / a.trackHeight : Math.round(b * a.stepCount) * a.increment / a.trackWidth), 0 > b && (b = 0), b > 1 && (b = 1);
        var d = (a.min - a.max) * b;
        d = -parseFloat(d.toFixed(a.digits)), a.$fill.css(a.vertical ? "height" : "width", 100 * b + "%"), a.$handle.css(a.vertical ? "bottom" : "left", 100 * b + "%"), d += a.min, d !== a.value && d !== !1 && c !== !0 && (a.$el.val(d).trigger(u.raw.change, [!0]), a.value = d)
    }

    function p(a, b) {
        var c = a.data;
        if (!b && !c.disabled) {
            var d = (c.$el.val() - c.min) / (c.max - c.min);
            o(c, d)
        }
    }

    function q(a) {
        var b = a.toString().split(".");
        return b[0] = b[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), b.join(".")
    }
    var r = b.Plugin("range", {
        widget: !0,
        defaults: {
            customClass: "",
            fill: !1,
            formatter: !1,
            labels: {
                max: !1,
                min: !1
            },
            theme: "fs-light",
            vertical: !1
        },
        classes: ["track", "handle", "fill", "marker", "labels", "label", "label_min", "label_max", "vertical", "focus", "disabled"],
        methods: {
            _construct: e,
            _destruct: f,
            _resize: c,
            enable: g,
            disable: h,
            resize: i
        }
    }),
        s = r.classes,
        t = s.raw,
        u = r.events,
        v = r.functions,
        w = []
}), /*! formstone v1.1.3 [scrollbar.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./touch"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c() {
        q = b.$body
    }

    function d(a) {
        v.iterate.call(w, i)
    }

    function e() {
        w = a(s.base)
    }

    function f(a) {
        var b = "";
        b += '<div class="' + t.bar + '">', b += '<div class="' + t.track + '">', b += '<span class="' + t.handle + '"></span>', b += "</div></div>", a.paddingRight = parseInt(this.css("padding-right"), 10), a.paddingBottom = parseInt(this.css("padding-bottom"), 10), a.thisClasses = [t.base, a.theme, a.customClass, a.horizontal ? t.horizontal : ""], this.addClass(a.thisClasses.join(" ")).wrapInner('<div class="' + t.content + '" />').prepend(b), a.$content = this.find(s.content), a.$bar = this.find(s.bar), a.$track = this.find(s.track), a.$handle = this.find(s.handle), a.trackMargin = parseInt(a.trackMargin, 10), a.$content.on(u.scroll, a, j), a.mouseWheel && a.$content.on("DOMMouseScroll" + u.namespace + " mousewheel" + u.namespace, a, k), a.$track.fsTouch({
            axis: a.horizontal ? "x" : "y",
            pan: !0
        }).on(u.panStart, a, m).on(u.pan, a, n).on(u.panEnd, a, o), i(a), e()
    }

    function g(a) {
        a.$track.fsTouch("destroy"), a.$bar.remove(), a.$content.off(u.namespace).contents().unwrap(), this.removeClass(a.thisClasses.join(" ")).off(u.namespace)
    }

    function h(b, c, d) {
        var e = d || b.duration,
            f = {};
        if ("number" !== a.type(c)) {
            var g = a(c);
            if (g.length > 0) {
                var h = g.position();
                c = b.horizontal ? h.left + b.$content.scrollLeft() : h.top + b.$content.scrollTop()
            } else c = "top" === c ? 0 : "bottom" === c ? b.horizontal ? b.$content[0].scrollWidth : b.$content[0].scrollHeight : b.$content.scrollTop()
        }
        f[b.horizontal ? "scrollLeft" : "scrollTop"] = c, b.$content.stop().animate(f, e)
    }

    function i(a) {
        a.$el.addClass(t.isSetup);
        var b = {}, c = {}, d = {}, e = 0,
            f = !0;
        if (a.horizontal) {
            a.barHeight = a.$content[0].offsetHeight - a.$content[0].clientHeight, a.frameWidth = a.$content.outerWidth(), a.trackWidth = a.frameWidth - 2 * a.trackMargin, a.scrollWidth = a.$content[0].scrollWidth, a.ratio = a.trackWidth / a.scrollWidth, a.trackRatio = a.trackWidth / a.scrollWidth, a.handleWidth = a.handleSize > 0 ? a.handleSize : a.trackWidth * a.trackRatio, a.scrollRatio = (a.scrollWidth - a.frameWidth) / (a.trackWidth - a.handleWidth), a.handleBounds = {
                left: 0,
                right: a.trackWidth - a.handleWidth
            }, a.$content.css({
                paddingBottom: a.barHeight + a.paddingBottom
            });
            var g = a.$content.scrollLeft();
            e = g * a.ratio, f = a.scrollWidth <= a.frameWidth, b = {
                width: a.frameWidth
            }, c = {
                width: a.trackWidth,
                marginLeft: a.trackMargin,
                marginRight: a.trackMargin
            }, d = {
                width: a.handleWidth
            }
        } else {
            a.barWidth = a.$content[0].offsetWidth - a.$content[0].clientWidth, a.frameHeight = a.$content.outerHeight(), a.trackHeight = a.frameHeight - 2 * a.trackMargin, a.scrollHeight = a.$content[0].scrollHeight, a.ratio = a.trackHeight / a.scrollHeight, a.trackRatio = a.trackHeight / a.scrollHeight, a.handleHeight = a.handleSize > 0 ? a.handleSize : a.trackHeight * a.trackRatio, a.scrollRatio = (a.scrollHeight - a.frameHeight) / (a.trackHeight - a.handleHeight), a.handleBounds = {
                top: 0,
                bottom: a.trackHeight - a.handleHeight
            };
            var h = a.$content.scrollTop();
            e = h * a.ratio, f = a.scrollHeight <= a.frameHeight, b = {
                height: a.frameHeight
            }, c = {
                height: a.trackHeight,
                marginBottom: a.trackMargin,
                marginTop: a.trackMargin
            }, d = {
                height: a.handleHeight
            }
        }
        f ? a.$el.removeClass(t.active) : a.$el.addClass(t.active), a.$bar.css(b), a.$track.css(c), a.$handle.css(d), a.panning = !1, p(a, e), j({
            data: a
        }), a.$el.removeClass(t.setup)
    }

    function j(a) {
        v.killEvent(a);
        var b = a.data,
            c = {};
        if (!b.panning) {
            if (b.horizontal) {
                var d = b.$content.scrollLeft();
                0 > d && (d = 0), b.handleLeft = d / b.scrollRatio, b.handleLeft > b.handleBounds.right && (b.handleLeft = b.handleBounds.right), c = {
                    left: b.handleLeft
                }
            } else {
                var e = b.$content.scrollTop();
                0 > e && (e = 0), b.handleTop = e / b.scrollRatio, b.handleTop > b.handleBounds.bottom && (b.handleTop = b.handleBounds.bottom), c = {
                    top: b.handleTop
                }
            }
            b.$handle.css(c)
        }
    }

    function k(a) {
        var b, c, d = a.data;
        if (d.horizontal) {
            var e = d.$content[0].scrollLeft,
                f = d.$content[0].scrollWidth,
                g = d.$content.outerWidth();
            if (b = "DOMMouseScroll" === a.type ? -40 * a.originalEvent.detail : a.originalEvent.wheelDelta, c = b > 0 ? "right" : "left", "left" === c && -b > f - g - e) return d.$content.scrollLeft(f), l(a);
            if ("right" === c && b > e) return d.$content.scrollLeft(0), l(a)
        } else {
            var h = d.$content[0].scrollTop,
                i = d.$content[0].scrollHeight,
                j = d.$content.outerHeight();
            if (b = "DOMMouseScroll" === a.type ? -40 * a.originalEvent.detail : a.originalEvent.wheelDelta, c = b > 0 ? "up" : "down", "down" === c && -b > i - j - h) return d.$content.scrollTop(i), l(a);
            if ("up" === c && b > h) return d.$content.scrollTop(0), l(a)
        }
    }

    function l(a) {
        return v.killEvent(a), a.returnValue = !1, !1
    }

    function m(a) {
        var b, c = a.data,
            d = c.$track.offset();
        c.panning = !0, b = c.horizontal ? c.handleLeft = a.pageX - d.left - c.handleWidth / 2 : c.handleTop = a.pageY - d.top - c.handleHeight / 2, p(c, b)
    }

    function n(a) {
        var b, c = a.data;
        b = c.horizontal ? c.handleLeft + a.deltaX : c.handleTop + a.deltaY, p(c, b)
    }

    function o(a) {
        var b = a.data;
        b.panning = !1, b.horizontal ? b.handleLeft += a.deltaX : b.handleTop += a.deltaY
    }

    function p(a, b) {
        var c = {};
        a.horizontal ? (b < a.handleBounds.left && (b = a.handleBounds.left), b > a.handleBounds.right && (b = a.handleBounds.right), c = {
            left: b
        }, a.$content.scrollLeft(Math.round(b * a.scrollRatio))) : (b < a.handleBounds.top && (b = a.handleBounds.top), b > a.handleBounds.bottom && (b = a.handleBounds.bottom), c = {
            top: b
        }, a.$content.scrollTop(Math.round(b * a.scrollRatio))), a.$handle.css(c)
    }
    var q, r = b.Plugin("scrollbar", {
            widget: !0,
            defaults: {
                customClass: "",
                duration: 0,
                handleSize: 0,
                horizontal: !1,
                mouseWheel: !0,
                theme: "fs-light",
                trackMargin: 0
            },
            classes: ["content", "bar", "track", "handle", "horizontal", "setup", "active"],
            methods: {
                _setup: c,
                _construct: f,
                _destruct: g,
                _resize: d,
                scroll: h,
                resize: i
            }
        }),
        s = r.classes,
        t = s.raw,
        u = r.events,
        v = r.functions,
        w = (b.$window, [])
}), /*! formstone v1.1.3 [swap.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mediaquery"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c(b) {
        b.enabled = !1, b.active = !1, b.classes = a.extend(!0, {}, m, b.classes), b.target = this.data(l + "-target"), b.$target = a(b.target).addClass(b.classes.raw.target), b.mq = "(max-width:" + (b.maxWidth === 1 / 0 ? "100000px" : b.maxWidth) + ")";
        var c = this.data(l + "-linked");
        b.linked = c ? "[data-" + l + '-linked="' + c + '"]' : !1;
        var d = this.data(l + "-group");
        b.group = d ? "[data-" + l + '-group="' + d + '"]' : !1, b.$swaps = a().add(this).add(b.$target), this.on(n.click + b.dotGuid, b, j)
    }

    function d(b) {
        b.collapse || !b.group || a(b.group).filter("[data-" + l + "-active]").length || a(b.group).eq(0).attr("data-" + l + "-active", "true"), b.onEnable = this.data(l + "-active") || !1, a.fsMediaquery("bind", b.rawGuid, b.mq, {
            enter: function () {
                h.call(b.$el, b, !0)
            },
            leave: function () {
                i.call(b.$el, b, !0)
            }
        })
    }

    function e(b) {
        a.fsMediaquery("unbind", b.rawGuid), b.$swaps.removeClass([b.classes.raw.enabled, b.classes.raw.active].join(" ")).off(n.namespace)
    }

    function f(b, c) {
        if (b.enabled && !b.active) {
            b.group && !c && a(b.group).not(b.$el).not(b.linked)[k.namespaceClean]("deactivate", !0);
            var d = b.group ? a(b.group).index(b.$el) : null;
            b.$swaps.addClass(b.classes.raw.active), c || b.linked && a(b.linked).not(b.$el)[k.namespaceClean]("activate", !0), this.trigger(n.activate, [d]), b.active = !0
        }
    }

    function g(b, c) {
        b.enabled && b.active && (b.$swaps.removeClass(b.classes.raw.active), c || b.linked && a(b.linked).not(b.$el)[k.namespaceClean]("deactivate", !0), this.trigger(n.deactivate), b.active = !1)
    }

    function h(b, c) {
        b.enabled || (b.enabled = !0, b.$swaps.addClass(b.classes.raw.enabled), c || a(b.linked).not(b.$el)[k.namespaceClean]("enable"), this.trigger(n.enable), b.onEnable ? (b.active = !1, f.call(this, b)) : (b.active = !0, g.call(this, b)))
    }

    function i(b, c) {
        b.enabled && (b.enabled = !1, b.$swaps.removeClass([b.classes.raw.enabled, b.classes.raw.active].join(" ")), c || a(b.linked).not(b.$el)[k.namespaceClean]("disable"), this.trigger(n.disable))
    }

    function j(a) {
        o.killEvent(a);
        var b = a.data;
        b.active && b.collapse ? g.call(b.$el, b) : f.call(b.$el, b)
    }
    var k = b.Plugin("swap", {
        widget: !0,
        defaults: {
            collapse: !0,
            maxWidth: 1 / 0
        },
        classes: ["target", "enabled", "active"],
        events: {
            activate: "activate",
            deactivate: "deactivate",
            enable: "enable",
            disable: "disable"
        },
        methods: {
            _construct: c,
            _postConstruct: d,
            _destruct: e,
            activate: f,
            deactivate: g,
            enable: h,
            disable: i
        }
    }),
        l = k.namespace,
        m = k.classes,
        n = k.events,
        o = k.functions
}), /*! formstone v1.1.3 [tabs.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mediaquery", "./swap"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c(c) {
        c.mq = "(max-width:" + (c.mobileMaxWidth === 1 / 0 ? "100000px" : c.mobileMaxWidth) + ")", c.content = this.attr("href"), c.group = this.data(q + "-group"), c.elementClasses = [s.tab, c.rawGuid, c.theme, c.customClass], c.mobileTabClasses = [s.tab, s.tab_mobile, c.rawGuid, c.theme, c.customClass].join(" "), c.contentClasses = [s.content, c.rawGuid, c.theme, c.customClass].join(" "), c.$mobileTab = a('<button type="button" class="' + c.mobileTabClasses + '">' + this.text() + "</button>"), c.$content = a(c.content).addClass(c.contentClasses), c.$content.before(c.$mobileTab);
        var d = b.window.location.hash,
            e = !1,
            f = !1;
        d.length && (e = this.filter("[href*='" + d + "']").length > 0, f = c.group && a("[data-" + q + '-group="' + c.group + '"]').filter("[href*='" + d + "']").length > 0), e ? this.attr("data-swap-active", "true") : f ? this.removeAttr("data-swap-active").removeData("data-swap-active") : "true" === this.attr("data-tabs-active") && this.attr("data-swap-active", "true"), this.attr("data-swap-target", c.content).attr("data-swap-group", c.group).addClass(c.elementClasses.join(" ")).on("activate.swap" + c.dotGuid, c, i).on("deactivate.swap" + c.dotGuid, c, j).on("enable.swap" + c.dotGuid, c, k).on("disable.swap" + c.dotGuid, c, l)
    }

    function d(b) {
        this.fsSwap({
            maxWidth: b.maxWidth,
            classes: {
                target: b.dotGuid,
                enabled: r.enabled,
                active: r.active,
                raw: {
                    target: b.rawGuid,
                    enabled: s.enabled,
                    active: s.active
                }
            },
            collapse: !1
        }), b.$mobileTab.on("click" + b.dotGuid, b, m), a.fsMediaquery("bind", b.rawGuid, b.mq, {
            enter: function () {
                n.call(b.$el, b)
            },
            leave: function () {
                o.call(b.$el, b)
            }
        })
    }

    function e(b) {
        a.fsMediaquery("unbind", b.rawGuid), b.$mobileTab.off(t.namespace).remove(), b.$content.removeClass(b.contentClasses.push(s.mobile).join(" ")), this.removeAttr("data-swap-active").removeData("data-swap-active").removeAttr("data-swap-target").removeData("data-swap-target").removeAttr("data-swap-group").removeData("data-swap-group").removeClass(b.elementClasses.push(s.mobile).join(" ")).off(t.namespace).fsSwap("destroy")
    }

    function f(a) {
        this.fsSwap("activate")
    }

    function g(a) {
        this.fsSwap("enable")
    }

    function h(a) {
        this.fsSwap("disable")
    }

    function i(a) {
        if (!a.originalEvent) {
            var b = a.data,
                c = 0;
            b.$el.trigger(t.update, [c]), b.$mobileTab.addClass(s.active), b.$content.addClass(s.active)
        }
    }

    function j(a) {
        if (!a.originalEvent) {
            var b = a.data;
            b.$mobileTab.removeClass(s.active), b.$content.removeClass(s.active)
        }
    }

    function k(a) {
        var b = a.data;
        b.$mobileTab.addClass(s.enabled), b.$content.addClass(s.enabled)
    }

    function l(a) {
        var b = a.data;
        b.$mobileTab.removeClass(s.enabled), b.$content.removeClass(s.enabled)
    }

    function m(a) {
        a.data.$el.fsSwap("activate")
    }

    function n(a) {
        a.$el.addClass(s.mobile), a.$mobileTab.addClass(s.mobile), a.$content.addClass(s.mobile)
    }

    function o(a) {
        a.$el.removeClass(s.mobile), a.$mobileTab.removeClass(s.mobile), a.$content.removeClass(s.mobile)
    }
    var p = b.Plugin("tabs", {
        widget: !0,
        defaults: {
            customClass: "",
            maxWidth: 1 / 0,
            mobileMaxWidth: "740px",
            theme: "fs-light",
            vertical: !1
        },
        classes: ["tab", "tab_mobile", "mobile", "content", "enabled", "active"],
        events: {
            update: "update"
        },
        methods: {
            _construct: c,
            _postConstruct: d,
            _destruct: e,
            activate: f,
            enable: g,
            disable: h
        }
    }),
        q = p.namespace,
        r = p.classes,
        s = r.raw,
        t = p.events;
    p.functions
}), /*! formstone v1.1.3 [tooltip.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c(a) {
        this.on(o.mouseEnter, a, e)
    }

    function d(a) {
        j(), this.off(o.namespace)
    }

    function e(a) {
        j();
        var b = a.data;
        b.left = a.pageX, b.top = a.pageY, h(b)
    }

    function f(a) {
        var b = a.data;
        p.clearTimer(b.timer), j()
    }

    function g(a) {
        i(a.pageX, a.pageY)
    }

    function h(c) {
        j();
        var d = "";
        d += '<div class="', d += [n.base, n[c.direction], c.theme, c.customClass].join(" "), d += '">', d += '<div class="' + n.content + '">', d += c.formatter.call(c.$el, c), d += '<span class="' + n.caret + '"></span>', d += "</div>", d += "</div>", q = {
            $tooltip: a(d),
            $el: c.$el
        }, b.$body.append(q.$tooltip);
        var e = q.$tooltip.find(m.content),
            h = q.$tooltip.find(m.caret),
            k = c.$el.offset(),
            l = c.$el.outerHeight(),
            r = c.$el.outerWidth(),
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = !1,
            x = !1,
            y = h.outerHeight(!0),
            z = h.outerWidth(!0),
            A = e.outerHeight(!0),
            B = e.outerWidth(!0);
        "right" === c.direction || "left" === c.direction ? (x = (A - y) / 2, v = -A / 2, "right" === c.direction ? u = c.margin : "left" === c.direction && (u = -(B + c.margin))) : (w = (B - z) / 2, u = -B / 2, "bottom" === c.direction ? v = c.margin : "top" === c.direction && (v = -(A + c.margin))), e.css({
            top: v,
            left: u
        }), h.css({
            top: x,
            left: w
        }), c.follow ? c.$el.on(o.mouseMove, c, g) : (c.match ? "right" === c.direction || "left" === c.direction ? (t = c.top, "right" === c.direction ? s = k.left + r : "left" === c.direction && (s = k.left)) : (s = c.left, "bottom" === c.direction ? t = k.top + l : "top" === c.direction && (t = k.top)) : "right" === c.direction || "left" === c.direction ? (t = k.top + l / 2, "right" === c.direction ? s = k.left + r : "left" === c.direction && (s = k.left)) : (s = k.left + r / 2, "bottom" === c.direction ? t = k.top + l : "top" === c.direction && (t = k.top)), i(s, t)), c.timer = p.startTimer(c.timer, c.delay, function () {
            q.$tooltip.addClass(n.visible)
        }), c.$el.one(o.mouseLeave, c, f)
    }

    function i(a, b) {
        q && q.$tooltip.css({
            left: a,
            top: b
        })
    }

    function j() {
        q && (q.$el.off([o.mouseMove, o.mouseLeave].join(" ")), q.$tooltip.remove(), q = null)
    }

    function k(a) {
        return this.data("title")
    }
    var l = b.Plugin("tooltip", {
        widget: !0,
        defaults: {
            customClass: "",
            delay: 0,
            direction: "top",
            follow: !1,
            formatter: k,
            margin: 15,
            match: !1,
            theme: "fs-light"
        },
        classes: ["content", "caret", "visible", "top", "bottom", "right", "left"],
        methods: {
            _construct: c,
            _destruct: d
        }
    }),
        m = l.classes,
        n = m.raw,
        o = l.events,
        p = l.functions,
        q = null
}), /*! formstone v1.1.3 [touch.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c(a) {
        if (a.touches = [], a.touching = !1, this.on(q.dragStart, r.killEvent), a.swipe && (a.pan = !0), a.scale && (a.axis = !1), a.axisX = "x" === a.axis, a.axisY = "y" === a.axis, b.support.pointer) {
            var c = "";
            !a.axis || a.axisX && a.axisY ? c = "none" : (a.axisX && (c += " pan-y"), a.axisY && (c += " pan-x")), n(this, c), this.on(q.pointerDown, a, e)
        } else this.on(q.touchStart, a, e).on(q.mouseDown, a, f)
    }

    function d(a) {
        this.off(q.namespace), n(this, "")
    }

    function e(a) {
        a.preventManipulation && a.preventManipulation();
        var b = a.data,
            c = a.originalEvent;
        if (c.type.match(/(up|end|cancel)$/i)) return void j(a);
        if (c.pointerId) {
            var d = !1;
            for (var e in b.touches) b.touches[e].id === c.pointerId && (d = !0, b.touches[e].pageX = c.pageX, b.touches[e].pageY = c.pageY);
            d || b.touches.push({
                id: c.pointerId,
                pageX: c.pageX,
                pageY: c.pageY
            })
        } else b.touches = c.touches;
        c.type.match(/(down|start)$/i) ? f(a) : c.type.match(/move$/i) && g(a)
    }

    function f(c) {
        var d = c.data,
            f = "undefined" !== a.type(d.touches) ? d.touches[0] : null;
        d.touching || (d.startE = c.originalEvent, d.startX = f ? f.pageX : c.pageX, d.startY = f ? f.pageY : c.pageY, d.startT = (new Date).getTime(), d.scaleD = 1, d.passed = !1), d.$links && d.$links.off(q.click);
        var h = k(d.scale ? q.scaleStart : q.panStart, c, d.startX, d.startY, d.scaleD, 0, 0, "", "");
        if (d.scale && d.touches && d.touches.length >= 2) {
            var i = d.touches;
            d.pinch = {
                startX: l(i[0].pageX, i[1].pageX),
                startY: l(i[0].pageY, i[1].pageY),
                startD: m(i[1].pageX - i[0].pageX, i[1].pageY - i[0].pageY)
            }, h.pageX = d.startX = d.pinch.startX, h.pageY = d.startY = d.pinch.startY
        }
        d.touching || (d.touching = !0, d.pan && s.on(q.mouseMove, d, g).on(q.mouseUp, d, j), b.support.pointer ? s.on([q.pointerMove, q.pointerUp, q.pointerCancel].join(" "), d, e) : s.on([q.touchMove, q.touchEnd, q.touchCancel].join(" "), d, e), d.$el.trigger(h))
    }

    function g(b) {
        var c = b.data,
            d = "undefined" !== a.type(c.touches) ? c.touches[0] : null,
            e = d ? d.pageX : b.pageX,
            f = d ? d.pageY : b.pageY,
            g = e - c.startX,
            h = f - c.startY,
            i = g > 0 ? "right" : "left",
            n = h > 0 ? "down" : "up",
            o = Math.abs(g) > t,
            p = Math.abs(h) > t;
        if (!c.passed && c.axis && (c.axisX && p || c.axisY && o)) j(b);
        else {
            !c.passed && (!c.axis || c.axis && c.axisX && o || c.axisY && p) && (c.passed = !0), c.passed && (r.killEvent(b), r.killEvent(c.startE));
            var s = !0,
                u = k(c.scale ? q.scale : q.pan, b, e, f, c.scaleD, g, h, i, n);
            if (c.scale)
                if (c.touches && c.touches.length >= 2) {
                    var v = c.touches;
                    c.pinch.endX = l(v[0].pageX, v[1].pageX), c.pinch.endY = l(v[0].pageY, v[1].pageY), c.pinch.endD = m(v[1].pageX - v[0].pageX, v[1].pageY - v[0].pageY), c.scaleD = c.pinch.endD / c.pinch.startD, u.pageX = c.pinch.endX, u.pageY = c.pinch.endY, u.scale = c.scaleD, u.deltaX = c.pinch.endX - c.pinch.startX, u.deltaY = c.pinch.endY - c.pinch.startY
                } else c.pan || (s = !1);
            s && c.$el.trigger(u)
        }
    }

    function h(b, c) {
        b.on(q.click, c, i);
        var d = a._data(b[0], "events").click;
        d.unshift(d.pop())
    }

    function i(a) {
        r.killEvent(a, !0), a.data.$links.off(q.click)
    }

    function j(b) {
        var c = b.data,
            d = "undefined" !== a.type(c.touches) ? c.touches[0] : null,
            e = d ? d.pageX : b.pageX,
            f = d ? d.pageY : b.pageY,
            g = e - c.startX,
            i = f - c.startY,
            j = (new Date).getTime(),
            l = c.scale ? q.scaleEnd : q.panEnd,
            m = g > 0 ? "right" : "left",
            n = i > 0 ? "down" : "up",
            o = Math.abs(g) > 1,
            p = Math.abs(i) > 1;
        if (c.swipe && Math.abs(g) > t && j - c.startT < u && (l = q.swipe), c.axis && (c.axisX && p || c.axisY && o) || o || p) {
            c.$links = c.$el.find("a");
            for (var r = 0, v = c.$links.length; v > r; r++) h(c.$links.eq(r), c)
        }
        var w = k(l, b, e, f, c.scaleD, g, i, m, n);
        s.off([q.touchMove, q.touchEnd, q.touchCancel, q.mouseMove, q.mouseUp, q.pointerMove, q.pointerUp, q.pointerCancel].join(" ")), c.$el.trigger(w), c.touches = [], c.scale, c.touching = !1
    }

    function k(b, c, d, e, f, g, h, i, j) {
        return a.Event(b, {
            originalEvent: c,
            bubbles: !0,
            pageX: d,
            pageY: e,
            scale: f,
            deltaX: g,
            deltaY: h,
            directionX: i,
            directionY: j
        })
    }

    function l(a, b) {
        return (a + b) / 2
    }

    function m(a, b) {
        return Math.sqrt(a * a + b * b)
    }

    function n(a, b) {
        a.css({
            "-ms-touch-action": b,
            "touch-action": b
        })
    }
    var o = !b.window.PointerEvent,
        p = b.Plugin("touch", {
            widget: !0,
            defaults: {
                axis: !1,
                pan: !1,
                scale: !1,
                swipe: !1
            },
            methods: {
                _construct: c,
                _destruct: d
            },
            events: {
                pointerDown: o ? "MSPointerDown" : "pointerdown",
                pointerUp: o ? "MSPointerUp" : "pointerup",
                pointerMove: o ? "MSPointerMove" : "pointermove",
                pointerCancel: o ? "MSPointerCancel" : "pointercancel"
            }
        }),
        q = p.events,
        r = p.functions,
        s = b.$window,
        t = 10,
        u = 50;
    q.pan = "pan", q.panStart = "panstart", q.panEnd = "panend", q.scale = "scale", q.scaleStart = "scalestart", q.scaleEnd = "scaleend", q.swipe = "swipe"
}), /*! formstone v1.1.3 [transition.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c(a, c) {
        if (c) {
            a.$target = this.find(a.target), a.$check = a.target ? a.$target : this, a.callback = c, a.styles = h(a.$check), a.timer = null;
            var d = a.$check.css(b.transition + "-duration"),
                f = parseFloat(d);
            b.support.transition && d && f ? this.on(k.transitionEnd, a, e) : a.timer = l.startTimer(a.timer, 50, function () {
                g(a)
            }, !0)
        }
    }

    function d(a) {
        l.clearTimer(a.timer, !0), this.off(k.namespace)
    }

    function e(b) {
        b.stopPropagation(), b.preventDefault();
        var c = b.data,
            d = b.originalEvent,
            e = c.target ? c.$target : c.$el;
        c.property && d.propertyName !== c.property || !a(d.target).is(e) || f(c)
    }

    function f(a) {
        a.always || a.$el[j.namespaceClean]("destroy"), a.callback.apply(a.$el)
    }

    function g(a) {
        var b = h(a.$check);
        i(a.styles, b) || f(a), a.styles = b
    }

    function h(b) {
        var c, d, e, f = {};
        if (b instanceof a && (b = b[0]), m.getComputedStyle) {
            c = m.getComputedStyle(b, null);
            for (var g = 0, h = c.length; h > g; g++) d = c[g], e = c.getPropertyValue(d), f[d] = e
        } else if (b.currentStyle) {
            c = b.currentStyle;
            for (d in c) c[d] && (f[d] = c[d])
        }
        return f
    }

    function i(b, c) {
        if (a.type(b) !== a.type(c)) return !1;
        for (var d in b) {
            if (!b.hasOwnProperty(d)) return !1;
            if (!b.hasOwnProperty(d) || !c.hasOwnProperty(d) || b[d] !== c[d]) return !1
        }
        return !0
    }
    var j = b.Plugin("transition", {
        widget: !0,
        defaults: {
            always: !1,
            property: null,
            target: null
        },
        methods: {
            _construct: c,
            _destruct: d,
            resolve: f
        }
    }),
        k = j.events,
        l = j.functions,
        m = b.window
}), /*! formstone v1.1.3 [upload.js] 2016-05-24 | GPL-3.0 License | formstone.it */ ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core"], a) : a(jQuery, Formstone)
}(function (a, b) {
    "use strict";

    function c(a) {
        if (b.support.file) {
            var c = "";
            a.label !== !1 && (c += '<div class="' + u.target + '">', c += a.label, c += "</div>"), c += '<input class="' + u.input + '" type="file"', a.multiple && (c += " multiple"), a.accept && (c += ' accept="' + a.accept + '"'), c += ">", a.baseClasses = [u.base, a.theme, a.customClass].join(" "), this.addClass(a.baseClasses).append(c), a.$input = this.find(t.input), a.queue = [], a.total = 0, a.uploading = !1, a.disabled = !0, a.aborting = !1, this.on(v.click, t.target, a, i).on(v.dragEnter, a, k).on(v.dragOver, a, l).on(v.dragLeave, a, m).on(v.drop, a, n), a.$input.on(v.change, a, j), h.call(this, a)
        }
    }

    function d(a) {
        b.support.file && (a.$input.off(v.namespace), this.off(v.namespace).removeClass(a.baseClasses).html(""))
    }

    function e(b, c) {
        var d;
        b.aborting = !0;
        for (var e in b.queue) b.queue.hasOwnProperty(e) && (d = b.queue[e], ("undefined" === a.type(c) || c >= 0 && d.index === c) && (d.started && !d.complete ? d.transfer.abort() : f(b, d, "abort")));
        b.aborting = !1, q(b)
    }

    function f(a, b, c) {
        b.error = !0, a.$el.trigger(v.fileError, [b, c]), a.aborting || q(a)
    }

    function g(a) {
        a.disabled || (this.addClass(u.disabled), a.$input.prop("disabled", !0), a.disabled = !0)
    }

    function h(a) {
        a.disabled && (this.removeClass(u.disabled), a.$input.prop("disabled", !1), a.disabled = !1)
    }

    function i(a) {
        w.killEvent(a);
        var b = a.data;
        b.disabled || b.$input.trigger(v.click)
    }

    function j(a) {
        w.killEvent(a);
        var b = a.data,
            c = b.$input[0].files;
        !b.disabled && c.length && o(b, c)
    }

    function k(a) {
        w.killEvent(a);
        var b = a.data;
        b.$el.addClass(u.dropping).trigger(v.fileDragEnter)
    }

    function l(a) {
        w.killEvent(a);
        var b = a.data;
        b.$el.addClass(u.dropping).trigger(v.fileDragOver)
    }

    function m(a) {
        w.killEvent(a);
        var b = a.data;
        b.$el.removeClass(u.dropping).trigger(v.fileDragLeave)
    }

    function n(a) {
        w.killEvent(a);
        var b = a.data,
            c = a.originalEvent.dataTransfer.files;
        b.$el.removeClass(u.dropping), b.disabled || o(b, c)
    }

    function o(a, b) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = {
                index: a.total++,
                file: b[d],
                name: b[d].name,
                size: b[d].size,
                started: !1,
                complete: !1,
                error: !1,
                transfer: null
            };
            c.push(e), a.queue.push(e)
        }
        a.$el.trigger(v.queued, [c]), a.autoUpload && p(a), a.$input.val("")
    }

    function p(a) {
        a.uploading || (y.on(v.beforeUnload, function () {
            return a.leave
        }), a.uploading = !0, a.$el.trigger(v.start, [a.queue])), q(a)
    }

    function q(a) {
        var b = 0,
            c = [];
        for (var d in a.queue)!a.queue.hasOwnProperty(d) || a.queue[d].complete || a.queue[d].error || c.push(a.queue[d]);
        a.queue = c;
        for (var e in a.queue)
            if (a.queue.hasOwnProperty(e)) {
                if (!a.queue[e].started) {
                    var f = new FormData;
                    f.append(a.postKey, a.queue[e].file);
                    for (var g in a.postData) a.postData.hasOwnProperty(g) && f.append(g, a.postData[g]);
                    r(a, f, a.queue[e])
                }
                if (b++, b >= a.maxQueue) return;
                d++
            }
        0 === b && (y.off(v.beforeUnload), a.uploading = !1, a.$el.trigger(v.complete))
    }

    function r(b, c, d) {
        c = b.beforeSend.call(x, c, d), d.size >= b.maxSize || c === !1 || d.error === !0 ? f(b, d, c ? "size" : "abort") : (d.started = !0, d.transfer = a.ajax({
            url: b.action,
            data: c,
            dataType: b.dataType,
            type: "POST",
            contentType: !1,
            processData: !1,
            cache: !1,
            xhr: function () {
                var c = a.ajaxSettings.xhr();
                return c.upload && c.upload.addEventListener("progress", function (a) {
                    var c = 0,
                        e = a.loaded || a.position,
                        f = a.total;
                    a.lengthComputable && (c = Math.ceil(e / f * 100)), b.$el.trigger(v.fileProgress, [d, c])
                }, !1), c
            },
            beforeSend: function (a, c) {
                b.$el.trigger(v.fileStart, [d])
            },
            success: function (a, c, e) {
                d.complete = !0, b.$el.trigger(v.fileComplete, [d, a]), q(b)
            },
            error: function (a, c, e) {
                f(b, d, e)
            }
        }))
    }
    var s = b.Plugin("upload", {
        widget: !0,
        defaults: {
            accept: !1,
            action: "",
            autoUpload: !0,
            beforeSend: function (a) {
                return a
            },
            customClass: "",
            dataType: "html",
            label: "Drag and drop files or click to select",
            leave: "You have uploads pending, are you sure you want to leave this page?",
            maxQueue: 2,
            maxSize: 5242880,
            multiple: !0,
            postData: {},
            postKey: "file",
            theme: "fs-light"
        },
        classes: ["input", "target", "multiple", "dropping", "disabled"],
        methods: {
            _construct: c,
            _destruct: d,
            disable: g,
            enable: h,
            abort: e,
            start: p
        }
    }),
        t = s.classes,
        u = t.raw,
        v = s.events,
        w = s.functions,
        x = b.window,
        y = b.$window;
    v.complete = "complete", v.fileComplete = "filecomplete", v.fileDragEnter = "filedragenter", v.fileDragLeave = "filedragleave", v.fileDragOver = "filedragover", v.fileError = "fileerror", v.fileProgress = "fileprogress", v.fileStart = "filestart", v.start = "start", v.queued = "queued"
});
/*-------------------------------------------
	Site
-------------------------------------------*/
// !IE
var IE8 = IE8 || !1,
    IE9 = IE9 || !1,
    Site = function (a, b) {
        // Loop through callbacks
        function c(a) {
            for (var b in a) a.hasOwnProperty(b) && a[b].apply(h, Array.prototype.slice.call(arguments, 1))
        }
        // Media Query Change Handler
        function d(a, b) {
            h.minWidth = b.minWidth, c(h.onRespond, b)
        }
        // Resize Handler
        function e() {
            h.windowWidth = h.$window.width(), h.windowHeight = h.$window.height(), c(h.onResize)
        }
        // Scroll Handler
        function f() {
            h.scrollTop = h.$window.scrollTop(), c(h.onScroll)
        }
        // !BaseController
        var g = function () {
            this.namespace = "", this.minWidth = 320, this.maxWidth = 1 / 0, this.scrollTop = 0, this.windowHeight = 0, this.windowWidth = 0, this.window = null, this.doc = null, this.$window = null, this.$doc = null, this.$body = null,
            // Public modules
            this.modules = [], this.onInit = [], this.onRespond = [], this.onResize = [], this.onScroll = [], this.minXS = "320", this.minSM = "500", this.minMD = "740", this.minLG = "980", this.minXL = "1220", this.maxXS = this.minXS - 1, this.maxSM = this.minSM - 1, this.maxMD = this.minMD - 1, this.maxLG = this.minLG - 1, this.maxXL = this.minXL - 1, this.minHTsm = parseInt("800_sm", 10), this.minHT = parseInt("800", 10), this.maxHTsm = this.minHTsm - 1, this.maxHT = this.minHT - 1, this.touch = !1
        };
        a.extend(g.prototype, {
            // Init
            init: function (g) {
                // Objects
                this.namespace = g, this.window = b, this.doc = document, this.$window = a(b), this.$doc = a(document), this.$body = a("body"), this.touch = a("html").hasClass("touch"), a.mediaquery && a.mediaquery({
                    minWidth: [this.minXS, this.minSM, this.minMD, this.minLG, this.minXL],
                    maxWidth: [this.maxXL, this.maxLG, this.maxMD, this.maxSM, this.maxXS],
                    minHeight: [this.minHTsm, this.minHT],
                    maxHeight: [this.maxHT, this.maxHTsm]
                }), a.cookie && a.cookie({
                    path: "/"
                }),
                // Init modules before scroll/resize/respond
                c(this.onInit), this.$window.on("mqchange.mediaquery", d).on(h.ns("resize"), e).on(h.ns("scroll"), f), this.resize()
            },
            // Namespace Text
            ns: function (a) {
                return a + "." + this.namespace
            },
            // Resize Trigger
            resize: function () {
                this.$window.trigger(h.ns("resize"))
            },
            // Scroll Trigger
            scroll: function () {
                this.$window.trigger(h.ns("scroll"))
            },
            // Kill event
            killEvent: function (a) {
                a && a.preventDefault && (a.preventDefault(), a.stopPropagation())
            },
            // Start timer
            startTimer: function (a, b, c, d) {
                return this.clearTimer(a), d ? setInterval(c, b) : setTimeout(c, b)
            },
            // Clear timer
            clearTimer: function (a, b) {
                a && (b ? clearInterval(a) : clearTimeout(a), a = null)
            }
        });
        // Internal Instance
        var h = new g;
        // Return Internal Instance
        return h
    }(jQuery, window);
// !Ready
$(document).ready(function () {
    Site.init("Namespace")
}),
/*-------------------------------------------
	Page
-------------------------------------------*/
/* global picturefill */
Site.modules.Page = function (a, b) {
    function c() {
        /*
			$(".js-component_select").dropdown();
			$(".js-theme_select").dropdown().on("change", function() {
				buildPlugins($(this).val());
			});
*/
        a.cookie({
            path: "/"
        }), g("fs-light"), b.onScroll.push(d), b.onResize.push(e), b.onRespond.push(f), b.scroll()
    }

    function d() {}

    function e() {
        d()
    }

    function f() {
        d()
    }

    function g(a) {
        var c = {
            theme: a
        };
        // Destroy
        b.$body.find(".js-background").background("destroy"), b.$body.find(".js-carousel").carousel("destroy"), b.$body.find(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox("destroy"), b.$body.find(".js-dropdown").dropdown("destroy"), b.$body.find(".js-equalize").equalize("destroy"), b.$body.find(".js-lightbox").lightbox("destroy"), b.$body.find(".js-navigation").navigation("destroy"), b.$body.find("input[type=number]").number("destroy"), b.$body.find(".js-pagination").pagination("destroy"), b.$body.find("input[type=range]").range("destroy"), b.$body.find(".js-scrollbar").scrollbar("destroy"), b.$body.find(".js-swap").swap("destroy"), b.$body.find(".js-tabs").tabs("destroy"), b.$body.find(".js-tooltip").tooltip("destroy"), b.$body.find(".js-upload").upload("destroy"),
        // Init
        b.$body.find(".js-background").background(c), b.$body.find(".js-carousel").carousel(c), b.$body.find(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox(c), b.$body.find(".js-dropdown").dropdown(c), b.$body.find(".js-equalize").equalize(c), b.$body.find(".js-lightbox").lightbox(c), b.$body.find(".js-navigation").navigation(c), b.$body.find("input[type=number]").number(c), b.$body.find(".js-pagination").pagination(c), b.$body.find("input[type=range]").range(c), b.$body.find(".js-scrollbar").scrollbar(c), b.$body.find(".js-swap").swap(c), b.$body.find(".js-tabs").tabs(c), b.$body.find(".js-tooltip").tooltip(c), b.$body.find(".js-upload").upload(c)
    } /* Hook Into Main init Routine */
    return b.onInit.push(c), {}
}(jQuery, Site);