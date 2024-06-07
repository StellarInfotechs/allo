(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [29], {
        55096: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, i = n(90952);

            function s() {
                return (s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.default = function(e) {
                return i.createElement("svg", s({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 100 100"
                }, e), r || (r = i.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M50 2.93C24.005 2.93 2.93 24.005 2.93 50S24.005 97.07 50 97.07 97.07 75.995 97.07 50 75.995 2.93 50 2.93ZM9.18 50C9.18 27.456 27.456 9.18 50 9.18S90.82 27.456 90.82 50 72.544 90.82 50 90.82 9.18 72.544 9.18 50Zm29.417-14.964a4.59 4.59 0 1 0-6.491 6.491 4.59 4.59 0 0 0 6.491-6.491Zm29.297 0a4.59 4.59 0 1 0-6.491 6.492 4.59 4.59 0 0 0 6.491-6.492ZM29.167 60.33a3.125 3.125 0 0 0-5.6 2.777 29.505 29.505 0 0 0 52.866 0 3.125 3.125 0 0 0-5.6-2.777 23.253 23.253 0 0 1-41.666 0Z",
                    clipRule: "evenodd"
                })))
            }
        },
        42123: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GlobalRouteSpinner: function() {
                    return l
                },
                GlobalRouteSpinnerContext: function() {
                    return o
                }
            });
            var r = n(57437),
                i = n(2265),
                s = n(14706),
                u = n(86629);
            let o = (0, i.createContext)({
                    setIsRoutePending: () => null
                }),
                l = e => {
                    let {
                        children: t
                    } = e, [n, l] = (0, i.useState)(!1), [c, a] = (0, i.useState)(!1), f = (0, i.useRef)();
                    return (0, i.useEffect)(() => {
                        n ? f.current = window.setTimeout(function() {
                            n ? a(!0) : a(!1), f.current = void 0
                        }, 500) : window.clearTimeout(f.current)
                    }, [n]), (0, s.y)(() => {
                        window.clearTimeout(f.current), l(!1), a(!1)
                    }, [], !1), (0, r.jsxs)(o.Provider, {
                        value: {
                            setIsRoutePending: l
                        },
                        children: [t, c && (0, r.jsx)(u.MouseSpinner, {})]
                    })
                }
        },
        63718: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return s
                }
            });
            var r = n(93622),
                i = n(2265);
            let s = e => {
                let {
                    children: t,
                    maxDegrees: n = 8,
                    maxTranslateX: s,
                    maxTranslateY: u,
                    maxTranslate: o = void 0 !== s || void 0 !== u ? void 0 : 5
                } = e, l = (0, i.useRef)(null), [c, a] = (0, i.useState)(!1), f = (0, r.q)(0, {
                    mass: .1
                }), p = (0, r.q)(0, {
                    mass: .1
                }), d = (0, r.q)(0, {
                    mass: .1
                });
                return t({
                    ref: l,
                    motionProps: (c || (f.set(0), p.set("0%"), d.set("0%")), {
                        transition: {
                            type: "tween",
                            duration: .4
                        },
                        style: {
                            rotate: f,
                            x: p,
                            y: d
                        }
                    }),
                    onMouseMove: function(e) {
                        if (l.current) {
                            var t;
                            let r = null === (t = l.current) || void 0 === t ? void 0 : t.getBoundingClientRect(),
                                i = ((e.clientX - r.x) / r.width - .5) * 2,
                                c = ((e.clientY - r.y) / r.height - .5) * 2;
                            f.set(i * c * n), (void 0 !== o || void 0 !== s) && p.set(i * (null != o ? o : s) + "%"), (void 0 !== o || void 0 !== u) && d.set(c * (null != o ? o : u) + "%")
                        }
                    },
                    setIsMagnetic: a
                })
            }
        },
        89539: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return c
                }
            });
            var r = n(57437),
                i = n(42123),
                s = n(61396),
                u = n.n(s),
                o = n(24033),
                l = n(2265);
            let c = (0, l.forwardRef)((e, t) => {
                let {
                    scroll: n,
                    onClick: s,
                    ...c
                } = e, a = c.href.match(/\/work\/\w+/), f = c.href.startsWith("/"), {
                    setIsRoutePending: p
                } = (0, l.useContext)(i.GlobalRouteSpinnerContext), d = (0, o.usePathname)();
                return (0, r.jsx)(u(), { ...c,
                    ref: t,
                    scroll: null != n ? n : !a,
                    onClick: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        s && s(...t), f && "_blank" !== c.target && c.href !== d && p(!0)
                    }
                })
            });
            c.displayName = "Link"
        },
        86629: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MouseSpinner: function() {
                    return y
                }
            });
            var r, i = n(57437),
                s = n(95685),
                u = n(69277),
                o = n.n(u),
                l = n(90952);

            function c() {
                return (c = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = function(e) {
                return l.createElement("svg", c({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 543 525"
                }, e), r || (r = l.createElement("path", {
                    fill: "currentColor",
                    d: "M268 475c-110.275 0-200-89.725-200-200H18c0 137.85 112.15 250 250 250s250-112.15 250-250h-50c0 110.275-89.712 200-200 200ZM443 200A100 100 0 1 0 443-.001 100 100 0 0 0 443 200Zm0-150a49.998 49.998 0 0 1 50 50 50.001 50.001 0 0 1-50 50 50.06 50.06 0 0 1-50-50 50 50 0 0 1 50-50ZM185.85 42.85 150.5 7.5 93.175 64.825 35.85 7.5.5 42.85l57.325 57.325L.5 157.5l35.35 35.35 57.325-57.325L150.5 192.85l35.35-35.35-57.325-57.325L185.85 42.85Z"
                })))
            };
            let f = () => (0, i.jsx)(s.W, {
                src: a,
                className: o().spinner
            });
            var p = n(28071),
                d = n(93622),
                h = n(95090),
                v = n(2265),
                m = n(54887),
                g = n(33851),
                w = n.n(g);
            let y = e => {
                let {
                    log: t
                } = e, n = (0, p.k)(), r = (0, d.q)(n.x, {
                    stiffness: 300,
                    mass: .25
                }), s = (0, d.q)(n.y, {
                    stiffness: 300,
                    mass: .25
                }), [u, o] = (0, v.useState)(!1);
                return (0, v.useEffect)(() => {
                    o(!0)
                }, []), t && console.log(t), u && (0, m.createPortal)((0, i.jsx)("div", {
                    className: w()["mouse-spinner-wrapper"],
                    children: (0, i.jsx)(h.E.div, {
                        className: w()["mouse-spinner"],
                        style: {
                            left: r,
                            top: s
                        },
                        children: (0, i.jsx)(f, {})
                    })
                }), document.body)
            }
        },
        95685: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return o
                }
            });
            var r = n(57437),
                i = n(57042),
                s = n(34621),
                u = n.n(s);
            let o = e => {
                let {
                    src: t = "svg",
                    className: n,
                    raw: s,
                    width: o,
                    height: l,
                    ...c
                } = e, a = "", f = {};
                if (s) {
                    let e = s.split(/(<\/?svg.*?>)/),
                        t = e[1],
                        n = e[2];
                    if (f = t.split(/\s(?:width|height)=['"].+?['"]/).join("").split(/(\w+=".+?")/).reduce((e, t, n) => (n % 2 && (e[t.split("=")[0]] = t.split("=")[1].replace(/['"]/g, "")), e), f), a = n, !l) {
                        let e = t.match(/\sheight=['"](.+?)['"]/);
                        l = e ? Number(e[1]) : l
                    }
                    if (!o) {
                        let e = t.match(/\swidth=['"](.+?)['"]/);
                        o = e ? Number(e[1]) : o
                    }
                } else o || (o = t().props.width), l || (l = t().props.height);
                let p = {};
                return o && (p.width = o), l && (p.height = l), (0, r.jsx)(t, { ...c,
                    ...p,
                    ...s ? f : {},
                    className: (0, i.Z)(s && u()["svg-raw-wrap"], n),
                    style: { ...c.style,
                        "--width": o,
                        "--height": l
                    },
                    dangerouslySetInnerHTML: s ? {
                        __html: a
                    } : void 0
                })
            }
        },
        28071: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return c
                },
                k: function() {
                    return l
                }
            });
            var r = n(20609),
                i = n(99804),
                s = n(2265);
            let u = 0,
                o = 0;

            function l() {
                let e = (0, r.c)(u),
                    t = (0, r.c)(o);
                return (0, i.p)(() => {
                    u !== e.get() && e.set(u), o !== t.get() && t.set(o)
                }), {
                    x: e,
                    y: t
                }
            }

            function c() {
                (0, s.useEffect)(() => {
                    function e(e) {
                        u = e.clientX, o = e.clientY
                    }
                    return document.addEventListener("mousemove", e), () => {
                        document.removeEventListener("mousemove", e)
                    }
                }, [])
            }
        },
        14706: function(e, t, n) {
            "use strict";
            n.d(t, {
                y: function() {
                    return s
                }
            });
            var r = n(24033),
                i = n(2265);

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    s = (0, r.usePathname)(),
                    u = (0, i.useRef)(""),
                    o = (0, r.useSelectedLayoutSegments)(),
                    l = (0, i.useRef)([""]);
                (0, i.useEffect)(() => {
                    let t = u.current !== s,
                        r = !n || o.length !== l.current.length || !o.every((e, t) => l.current[t] === e);
                    if (t && (u.current = s), r && (l.current = o), t && r) {
                        let t = e();
                        if (t) return t
                    }
                }, [s, o, e, ...t])
            }
        },
        69360: function(e, t, n) {
            "use strict";
            n.d(t, {
                Hv: function() {
                    return f
                },
                JK: function() {
                    return d
                },
                Op: function() {
                    return p
                },
                Sp: function() {
                    return l
                },
                n4: function() {
                    return a
                },
                td: function() {
                    return h
                }
            });
            var r = n(57437),
                i = n(95685),
                s = n(2265),
                u = n(55096);
            n(25566);
            let o = {
                pathMatch: "strict"
            };

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null !== (t = { ...o,
                        ...t
                    }).path) {
                    if ("loose" === t.pathMatch) return (e + "/").startsWith(t.path + "/");
                    if ("strict" === t.pathMatch) return e === t.path
                }
                return !1
            }

            function c(e, t, n) {
                return t && (n % 2 ? e[e.length - 1] += t : e.push(t)), e
            }

            function a(e) {
                return (null == (e = e.trim()) ? void 0 : e.endsWith("/")) && "/" !== e ? e.slice(0, -1) : e
            }

            function f(e) {
                return e.split(/(\[.*?\]\s?)/g).map((e, t) => t % 2 ? e.endsWith(" ") ? e.slice(1, -2) + " " : e.slice(1, -1) : e)
            }

            function p(e) {
                let {
                    text: t,
                    wordRender: n,
                    characterRender: o
                } = e;

                function l(e, t, s) {
                    let [l, c] = e.split(/(\s)/g);
                    return "@smiley" === l ? n(e, [o((0, r.jsx)(i.W, {
                        src: u.default
                    }), 0), c ? o(c, 1) : null], t) : n(e, e.split("").map((e, t) => o(e, t)), t)
                }
                return f(t).map(e => e.split(/(\s)/g).reduce(c, [])).map((e, t) => t % 2 ? (0, r.jsx)("span", {
                    className: "format",
                    children: e.map((e, n) => l(e, n, t))
                }, t) : (0, r.jsx)(s.Fragment, {
                    children: e.map((e, n) => l(e, n, t))
                }, t))
            }

            function d(e) {
                return "story" === e.linktype ? e.cached_url || e.story ? "/" + e.cached_url : "" : ("url" === e.linktype || "asset" === e.linktype) && e.url || ""
            }

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e, t) => e + " " + t,
                    r = Math.floor(Math.log(e) / Math.log(1024));
                return n(parseFloat((e / Math.pow(1024, r)).toFixed(t)), ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][r])
            }
        },
        33851: function(e) {
            e.exports = {
                "mouse-spinner": "MouseSpinner_mouse-spinner__As5lG",
                "fade-in": "MouseSpinner_fade-in__Mtrmz",
                "mouse-spinner-wrapper": "MouseSpinner_mouse-spinner-wrapper__pRzBe"
            }
        },
        34621: function(e) {
            e.exports = {
                "svg-raw-wrap": "SVG_svg-raw-wrap__ODfz9"
            }
        },
        69277: function(e) {
            e.exports = {
                spinner: "Spinner_spinner__2zNSi",
                spin: "Spinner_spin___JmP1"
            }
        }
    }
]);