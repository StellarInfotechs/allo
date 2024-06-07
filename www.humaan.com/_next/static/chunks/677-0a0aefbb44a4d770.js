(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [677], {
        51770: function(e, t, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r);
                    var o = Object.getOwnPropertyDescriptor(t, r);
                    (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, n, o)
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return o(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let l = a(r(2265));
            t.default = function({
                html: e,
                height: t = null,
                width: r = null,
                children: n,
                dataNtpc: o = ""
            }) {
                return (0, l.useEffect)(() => {
                    o && performance.mark("mark_feature_usage", {
                        detail: {
                            feature: `next-third-parties-${o}`
                        }
                    })
                }, [o]), l.default.createElement(l.default.Fragment, null, n, e ? l.default.createElement("div", {
                    style: {
                        height: null != t ? `${t}px` : "auto",
                        width: null != r ? `${r}px` : "auto"
                    },
                    "data-ntpc": o,
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                }) : null)
            }
        },
        56293: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let o = n(r(2265)),
                a = r(50255),
                l = n(r(51770));
            t.default = function(e) {
                let {
                    apiKey: t,
                    ...r
                } = e, n = { ...r,
                    key: t
                }, {
                    html: i
                } = (0, a.GoogleMapsEmbed)(n);
                return o.default.createElement(l.default, {
                    height: n.height || null,
                    width: n.width || null,
                    html: i,
                    dataNtpc: "GoogleMapsEmbed"
                })
            }
        },
        66927: function(e, t, r) {
            "use strict";
            let n;
            var o = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r);
                    var o = Object.getOwnPropertyDescriptor(t, r);
                    (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, n, o)
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                l = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
                    return a(t, e), t
                },
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGTMEvent = t.GoogleTagManager = void 0;
            let u = l(r(2265)),
                s = i(r(48475));
            t.GoogleTagManager = function(e) {
                let {
                    gtmId: t,
                    dataLayerName: r = "dataLayer",
                    auth: o,
                    preview: a,
                    dataLayer: l
                } = e;
                void 0 === n && (n = r);
                let i = "dataLayer" !== r ? `$l=${r}` : "",
                    c = o ? `&gtm_auth=${o}` : "",
                    d = a ? `&gtm_preview=${a}&gtm_cookies_win=x` : "";
                return (0, u.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-gtm"
                        }
                    })
                }, []), u.default.createElement(u.default.Fragment, null, u.default.createElement(s.default, {
                    id: "_next-gtm-init",
                    dangerouslySetInnerHTML: {
                        __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${l?`w[l].push(${JSON.stringify(l)})`:""}
      })(window,'${r}');`
                    }
                }), u.default.createElement(s.default, {
                    id: "_next-gtm",
                    "data-ntpc": "GTM",
                    src: `https://www.googletagmanager.com/gtm.js?id=${t}${i}${c}${d}`
                }))
            }, t.sendGTMEvent = e => {
                if (void 0 === n) {
                    console.warn("@next/third-parties: GTM has not been initialized");
                    return
                }
                window[n] ? window[n].push(e) : console.warn(`@next/third-parties: GTM dataLayer ${n} does not exist`)
            }
        },
        23845: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGTMEvent = t.GoogleTagManager = t.YouTubeEmbed = t.GoogleMapsEmbed = void 0;
            var o = r(56293);
            Object.defineProperty(t, "GoogleMapsEmbed", {
                enumerable: !0,
                get: function() {
                    return n(o).default
                }
            });
            var a = r(98625);
            Object.defineProperty(t, "YouTubeEmbed", {
                enumerable: !0,
                get: function() {
                    return n(a).default
                }
            });
            var l = r(66927);
            Object.defineProperty(t, "GoogleTagManager", {
                enumerable: !0,
                get: function() {
                    return l.GoogleTagManager
                }
            }), Object.defineProperty(t, "sendGTMEvent", {
                enumerable: !0,
                get: function() {
                    return l.sendGTMEvent
                }
            })
        },
        98625: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let o = n(r(2265)),
                a = n(r(48475)),
                l = r(50255),
                i = n(r(51770)),
                u = {
                    server: "beforeInteractive",
                    client: "afterInteractive",
                    idle: "lazyOnload",
                    worker: "worker"
                };
            t.default = function(e) {
                let {
                    html: t,
                    scripts: r,
                    stylesheets: n
                } = (0, l.YouTubeEmbed)(e);
                return o.default.createElement(i.default, {
                    height: e.height || null,
                    width: e.width || null,
                    html: t,
                    dataNtpc: "YouTubeEmbed"
                }, null == r ? void 0 : r.map(e => o.default.createElement(a.default, {
                    key: e.url,
                    src: e.url,
                    strategy: u[e.strategy],
                    stylesheets: n
                })))
            }
        },
        13313: function(e, t) {
            "use strict";
            let r;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    DOMAttributeNames: function() {
                        return n
                    },
                    isEqualNode: function() {
                        return a
                    },
                    default: function() {
                        return l
                    }
                });
            let n = {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv",
                noModule: "noModule"
            };

            function o(e) {
                let {
                    type: t,
                    props: r
                } = e, o = document.createElement(t);
                for (let e in r) {
                    if (!r.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === r[e]) continue;
                    let a = n[e] || e.toLowerCase();
                    "script" === t && ("async" === a || "defer" === a || "noModule" === a) ? o[a] = !!r[e] : o.setAttribute(a, r[e])
                }
                let {
                    children: a,
                    dangerouslySetInnerHTML: l
                } = r;
                return l ? o.innerHTML = l.__html || "" : a && (o.textContent = "string" == typeof a ? a : Array.isArray(a) ? a.join("") : ""), o
            }

            function a(e, t) {
                if (e instanceof HTMLElement && t instanceof HTMLElement) {
                    let r = t.getAttribute("nonce");
                    if (r && !e.getAttribute("nonce")) {
                        let n = t.cloneNode(!0);
                        return n.setAttribute("nonce", ""), n.nonce = r, r === e.nonce && e.isEqualNode(n)
                    }
                }
                return e.isEqualNode(t)
            }

            function l() {
                return {
                    mountedInstances: new Set,
                    updateHead: e => {
                        let t = {};
                        e.forEach(e => {
                            if ("link" === e.type && e.props["data-optimized-fonts"]) {
                                if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]')) return;
                                e.props.href = e.props["data-href"], e.props["data-href"] = void 0
                            }
                            let r = t[e.type] || [];
                            r.push(e), t[e.type] = r
                        });
                        let n = t.title ? t.title[0] : null,
                            o = "";
                        if (n) {
                            let {
                                children: e
                            } = n.props;
                            o = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
                        }
                        o !== document.title && (document.title = o), ["meta", "base", "link", "style", "script"].forEach(e => {
                            r(e, t[e] || [])
                        })
                    }
                }
            }
            r = (e, t) => {
                let r = document.getElementsByTagName("head")[0],
                    n = r.querySelector("meta[name=next-head-count]"),
                    l = Number(n.content),
                    i = [];
                for (let t = 0, r = n.previousElementSibling; t < l; t++, r = (null == r ? void 0 : r.previousElementSibling) || null) {
                    var u;
                    (null == r ? void 0 : null == (u = r.tagName) ? void 0 : u.toLowerCase()) === e && i.push(r)
                }
                let s = t.map(o).filter(e => {
                    for (let t = 0, r = i.length; t < r; t++)
                        if (a(i[t], e)) return i.splice(t, 1), !1;
                    return !0
                });
                i.forEach(e => {
                    var t;
                    return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                }), s.forEach(e => r.insertBefore(e, n)), n.content = (l - i.length + s.length).toString()
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        85935: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    handleClientScriptLoad: function() {
                        return b
                    },
                    initScriptLoader: function() {
                        return g
                    },
                    default: function() {
                        return h
                    }
                });
            let n = r(21024),
                o = r(68533),
                a = n._(r(54887)),
                l = o._(r(2265)),
                i = r(27484),
                u = r(13313),
                s = r(52185),
                c = new Map,
                d = new Set,
                f = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"],
                p = e => {
                    if (a.default.preinit) {
                        e.forEach(e => {
                            a.default.preinit(e, {
                                as: "style"
                            })
                        });
                        return
                    } {
                        let t = document.head;
                        e.forEach(e => {
                            let r = document.createElement("link");
                            r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
                        })
                    }
                },
                m = e => {
                    let {
                        src: t,
                        id: r,
                        onLoad: n = () => {},
                        onReady: o = null,
                        dangerouslySetInnerHTML: a,
                        children: l = "",
                        strategy: i = "afterInteractive",
                        onError: s,
                        stylesheets: m
                    } = e, b = r || t;
                    if (b && d.has(b)) return;
                    if (c.has(t)) {
                        d.add(b), c.get(t).then(n, s);
                        return
                    }
                    let g = () => {
                            o && o(), d.add(b)
                        },
                        y = document.createElement("script"),
                        h = new Promise((e, t) => {
                            y.addEventListener("load", function(t) {
                                e(), n && n.call(this, t), g()
                            }), y.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            s && s(e)
                        });
                    for (let [r, n] of (a ? (y.innerHTML = a.__html || "", g()) : l ? (y.textContent = "string" == typeof l ? l : Array.isArray(l) ? l.join("") : "", g()) : t && (y.src = t, c.set(t, h)), Object.entries(e))) {
                        if (void 0 === n || f.includes(r)) continue;
                        let e = u.DOMAttributeNames[r] || r.toLowerCase();
                        y.setAttribute(e, n)
                    }
                    "worker" === i && y.setAttribute("type", "text/partytown"), y.setAttribute("data-nscript", i), m && p(m), document.body.appendChild(y)
                };

            function b(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, s.requestIdleCallback)(() => m(e))
                }) : m(e)
            }

            function g(e) {
                e.forEach(b), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    d.add(t)
                })
            }

            function y(e) {
                let {
                    id: t,
                    src: r = "",
                    onLoad: n = () => {},
                    onReady: o = null,
                    strategy: u = "afterInteractive",
                    onError: c,
                    stylesheets: f,
                    ...p
                } = e, {
                    updateScripts: b,
                    scripts: g,
                    getIsSsr: y,
                    appDir: h,
                    nonce: v
                } = (0, l.useContext)(i.HeadManagerContext), _ = (0, l.useRef)(!1);
                (0, l.useEffect)(() => {
                    let e = t || r;
                    _.current || (o && e && d.has(e) && o(), _.current = !0)
                }, [o, t, r]);
                let w = (0, l.useRef)(!1);
                if ((0, l.useEffect)(() => {
                        !w.current && ("afterInteractive" === u ? m(e) : "lazyOnload" === u && ("complete" === document.readyState ? (0, s.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
                            (0, s.requestIdleCallback)(() => m(e))
                        })), w.current = !0)
                    }, [e, u]), ("beforeInteractive" === u || "worker" === u) && (b ? (g[u] = (g[u] || []).concat([{
                        id: t,
                        src: r,
                        onLoad: n,
                        onReady: o,
                        onError: c,
                        ...p
                    }]), b(g)) : y && y() ? d.add(t || r) : y && !y() && m(e)), h) {
                    if (f && f.forEach(e => {
                            a.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === u) return r ? (a.default.preload(r, p.integrity ? {
                        as: "script",
                        integrity: p.integrity
                    } : {
                        as: "script"
                    }), l.default.createElement("script", {
                        nonce: v,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([r]) + ")"
                        }
                    })) : (p.dangerouslySetInnerHTML && (p.children = p.dangerouslySetInnerHTML.__html, delete p.dangerouslySetInnerHTML), l.default.createElement("script", {
                        nonce: v,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...p
                            }]) + ")"
                        }
                    }));
                    "afterInteractive" === u && r && a.default.preload(r, p.integrity ? {
                        as: "script",
                        integrity: p.integrity
                    } : {
                        as: "script"
                    })
                }
                return null
            }
            Object.defineProperty(y, "__nextScript", {
                value: !0
            });
            let h = y;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        48475: function(e, t, r) {
            e.exports = r(85935)
        },
        50255: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.YouTubeEmbed = t.GoogleMapsEmbed = t.GoogleAnalytics = void 0;
            var n = r(30531);
            Object.defineProperty(t, "GoogleAnalytics", {
                enumerable: !0,
                get: function() {
                    return n.GoogleAnalytics
                }
            });
            var o = r(40173);
            Object.defineProperty(t, "GoogleMapsEmbed", {
                enumerable: !0,
                get: function() {
                    return o.GoogleMapsEmbed
                }
            });
            var a = r(72487);
            Object.defineProperty(t, "YouTubeEmbed", {
                enumerable: !0,
                get: function() {
                    return a.YouTubeEmbed
                }
            })
        },
        30531: function(e, t, r) {
            "use strict";
            var n = this && this.__rest || function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                    return r
                },
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GoogleAnalytics = void 0;
            let a = o(r(46893)),
                l = r(83202);
            t.GoogleAnalytics = e => {
                var t = n(e, []);
                return (0, l.formatData)(a.default, t)
            }
        },
        40173: function(e, t, r) {
            "use strict";
            var n = this && this.__rest || function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                    return r
                },
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GoogleMapsEmbed = void 0;
            let a = o(r(46362)),
                l = r(83202);
            t.GoogleMapsEmbed = e => {
                var t = n(e, []);
                return (0, l.formatData)(a.default, t)
            }
        },
        72487: function(e, t, r) {
            "use strict";
            var n = this && this.__rest || function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                    return r
                },
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.YouTubeEmbed = void 0;
            let a = o(r(95825)),
                l = r(83202);
            t.YouTubeEmbed = e => {
                var t = n(e, []);
                return (0, l.formatData)(a.default, t)
            }
        },
        83202: function(e, t) {
            "use strict";

            function r(e, t, r = !1) {
                return t ? Object.keys(e).filter(e => r ? !t.includes(e) : t.includes(e)).reduce((t, r) => (t[r] = e[r], t), {}) : {}
            }

            function n(e, t, r, n) {
                let o = n && Object.keys(n).length > 0 ? new URL(Object.values(n)[0], e) : new URL(e);
                return t && r && t.forEach(e => {
                    r[e] && o.searchParams.set(e, r[e])
                }), o.toString()
            }

            function o(e, t, r, o, a) {
                var l;
                if (!t) return `<${e}></${e}>`;
                let i = (null === (l = t.src) || void 0 === l ? void 0 : l.url) ? Object.assign(Object.assign({}, t), {
                        src: n(t.src.url, t.src.params, o, a)
                    }) : t,
                    u = Object.keys(Object.assign(Object.assign({}, i), r)).reduce((e, t) => {
                        let n = null == r ? void 0 : r[t],
                            o = i[t],
                            a = null != n ? n : o,
                            l = !0 === a ? t : `${t}="${a}"`;
                        return a ? e + ` ${l}` : e
                    }, "");
                return `<${e}${u}></${e}>`
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatData = t.createHtml = t.formatUrl = void 0, t.formatUrl = n, t.createHtml = o, t.formatData = function(e, t) {
                var a, l, i, u, s;
                let c = r(t, null === (a = e.scripts) || void 0 === a ? void 0 : a.reduce((e, t) => [...e, ...Array.isArray(t.params) ? t.params : []], [])),
                    d = r(t, null === (i = null === (l = e.html) || void 0 === l ? void 0 : l.attributes.src) || void 0 === i ? void 0 : i.params),
                    f = r(t, [null === (s = null === (u = e.html) || void 0 === u ? void 0 : u.attributes.src) || void 0 === s ? void 0 : s.slugParam]),
                    p = r(t, [...Object.keys(c), ...Object.keys(d), ...Object.keys(f)], !0);
                return Object.assign(Object.assign({}, e), {
                    html: e.html ? o(e.html.element, e.html.attributes, p, d, f) : null,
                    scripts: e.scripts ? e.scripts.map(e => Object.assign(Object.assign({}, e), {
                        url: n(e.url, e.params, c)
                    })) : null
                })
            }
        },
        44441: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Analytics: function() {
                    return d
                },
                track: function() {
                    return c
                }
            });
            var n = r(2265),
                o = () => {
                    window.va || (window.va = function(...e) {
                        (window.vaq = window.vaq || []).push(e)
                    })
                };

            function a() {
                return "undefined" != typeof window
            }

            function l() {
                return "production"
            }

            function i() {
                return (a() ? window.vam : l()) || "production"
            }

            function u() {
                return "production" === i()
            }

            function s() {
                return "development" === i()
            }

            function c(e, t) {
                var r, n;
                if (!a()) {
                    let e = "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
                    if (u()) console.warn(e);
                    else throw Error(e);
                    return
                }
                if (!t) {
                    null == (r = window.va) || r.call(window, "event", {
                        name: e
                    });
                    return
                }
                try {
                    let r = function(e, t) {
                        if (!e) return;
                        let r = e,
                            n = [];
                        for (let [o, a] of Object.entries(e)) "object" == typeof a && null !== a && (t.strip ? r = function(e, {
                            [e]: t,
                            ...r
                        }) {
                            return r
                        }(o, r) : n.push(o));
                        if (n.length > 0 && !t.strip) throw Error(`The following properties are not valid: ${n.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);
                        return r
                    }(t, {
                        strip: u()
                    });
                    null == (n = window.va) || n.call(window, "event", {
                        name: e,
                        data: r
                    })
                } catch (e) {
                    e instanceof Error && s() && console.error(e)
                }
            }

            function d({
                beforeSend: e,
                debug: t = !0,
                mode: r = "auto"
            }) {
                return (0, n.useEffect)(() => {
                    ! function(e = {
                        debug: !0
                    }) {
                        var t;
                        if (!a()) return;
                        (function(e = "auto") {
                            if ("auto" === e) {
                                window.vam = l();
                                return
                            }
                            window.vam = e
                        })(e.mode), o(), e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend));
                        let r = s() ? "https://va.vercel-scripts.com/v1/script.debug.js" : "/_vercel/insights/script.js";
                        if (document.head.querySelector(`script[src*="${r}"]`)) return;
                        let n = document.createElement("script");
                        n.src = r, n.defer = !0, n.setAttribute("data-sdkn", "@vercel/analytics"), n.setAttribute("data-sdkv", "1.1.1"), n.onerror = () => {
                            let e = s() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                            console.log(`[Vercel Web Analytics] Failed to load script from ${r}. ${e}`)
                        }, s() && !1 === e.debug && n.setAttribute("data-debug", "false"), document.head.appendChild(n)
                    }({
                        beforeSend: e,
                        debug: t,
                        mode: r
                    })
                }, [e, t, r]), null
            }
        },
        46893: function(e) {
            "use strict";
            e.exports = JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')
        },
        46362: function(e) {
            "use strict";
            e.exports = JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')
        },
        95825: function(e) {
            "use strict";
            e.exports = JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')
        }
    }
]);