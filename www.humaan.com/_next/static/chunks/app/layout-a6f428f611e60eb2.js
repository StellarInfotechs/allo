(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        61243: function(e, n, t) {
            "use strict";
            var r, o = t(90952);

            function i() {
                return (i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.Z = function(e) {
                return o.createElement("svg", i({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 289,
                    height: 311,
                    fill: "none",
                    viewBox: "0 0 289 311"
                }, e), r || (r = o.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M137.188 169.585c15.584 0 28.264-12.681 28.264-28.265V56.528C165.452 25.358 190.81 0 221.981 0c31.17 0 56.528 25.358 56.528 56.528h-28.264c0-15.584-12.681-28.264-28.264-28.264-15.584 0-28.264 12.68-28.264 28.264v84.792c0 31.171-25.358 56.529-56.529 56.529-31.17 0-56.528-25.358-56.528-56.529h28.264c0 15.584 12.681 28.265 28.264 28.265Zm122.764-.002h28.264c0 77.925-63.396 141.321-141.321 141.321V282.64c62.339 0 113.057-50.716 113.057-113.057ZM19.986 4.137 0 24.123l32.404 32.405L0 88.93l19.986 19.986 32.405-32.402 32.401 32.402 19.986-19.986-32.404-32.402 32.404-32.404L84.792 4.137 52.391 36.542 19.986 4.137Z",
                    clipRule: "evenodd"
                })))
            }
        },
        83476: function(e, n, t) {
            "use strict";
            var r, o = t(90952);

            function i() {
                return (i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.Z = function(e) {
                return o.createElement("svg", i({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 14,
                    height: 13,
                    fill: "none",
                    strokeWidth: .5,
                    viewBox: "0 0 14 13"
                }, e), r || (r = o.createElement("path", {
                    fill: "currentColor",
                    stroke: "currentColor",
                    d: "M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z",
                    vectorEffect: "non-scaling-stroke"
                })))
            }
        },
        73446: function(e, n, t) {
            "use strict";
            var r, o = t(90952);

            function i() {
                return (i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.Z = function(e) {
                return o.createElement("svg", i({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 18,
                    height: 18,
                    fill: "none",
                    viewBox: "0 0 18 18"
                }, e), r || (r = o.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "square",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M2.332 15.667 15.665 2.333m0 13.334L2.332 2.333",
                    vectorEffect: "non-scaling-stroke"
                })))
            }
        },
        52224: function(e, n, t) {
            Promise.resolve().then(t.bind(t, 3631)), Promise.resolve().then(t.bind(t, 35473)), Promise.resolve().then(t.bind(t, 42123)), Promise.resolve().then(t.bind(t, 39016)), Promise.resolve().then(t.bind(t, 85622)), Promise.resolve().then(t.t.bind(t, 13246, 23)), Promise.resolve().then(t.bind(t, 51665)), Promise.resolve().then(t.bind(t, 74836)), Promise.resolve().then(t.bind(t, 66782)), Promise.resolve().then(t.bind(t, 32230)), Promise.resolve().then(t.bind(t, 24274)), Promise.resolve().then(t.t.bind(t, 66927, 23)), Promise.resolve().then(t.t.bind(t, 51770, 23)), Promise.resolve().then(t.bind(t, 34997)), Promise.resolve().then(t.bind(t, 44441)), Promise.resolve().then(t.t.bind(t, 85935, 23)), Promise.resolve().then(t.t.bind(t, 47430, 23)), Promise.resolve().then(t.t.bind(t, 9301, 23))
        },
        3631: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                FrameCounter: function() {
                    return u
                },
                FrameCounterContext: function() {
                    return l
                }
            });
            var r = t(57437),
                o = t(99804),
                i = t(6599),
                a = t.n(i),
                s = t(2265);
            let l = s.createContext({
                    fps: {
                        current: 0
                    },
                    maxFps: {
                        current: 0
                    }
                }),
                u = e => {
                    let {
                        children: n,
                        renderFPS: t
                    } = e, i = 0, u = Date.now(), c = (0, s.useRef)(0), _ = (0, s.useRef)(0);
                    (0, o.p)(() => {
                        let e = Date.now(),
                            n = e - u;
                        i += (n - i) / 20, u = e, c.current = Number((1e3 / i).toFixed(0)), c.current > _.current && (_.current = c.current), t && d.current && (d.current.innerHTML = c.current.toString())
                    });
                    let d = (0, s.useRef)(null);
                    return (0, r.jsxs)(l.Provider, {
                        value: {
                            fps: c,
                            maxFps: _
                        },
                        children: [t && (0, r.jsx)("span", {
                            className: a()["frame-counter"],
                            ref: d
                        }), n]
                    })
                }
        },
        35473: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                FooterRevealPageWrap: function() {
                    return B
                }
            });
            var r = t(57437),
                o = t(24866),
                i = t(89539),
                a = t(95090),
                s = t(91842),
                l = t.n(s),
                u = t(55057);
            let c = [0, ...(0, u.se)(1, 12), 0],
                _ = ["-25%", ...(0, u.se)("0%", 12), "25%"],
                d = e => {
                    let {
                        words: n
                    } = e;
                    return (0, r.jsx)(a.E.span, {
                        className: l()["word-ticker"],
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        children: n.map((e, t) => (0, r.jsxs)(a.E.span, {
                            animate: {
                                opacity: c,
                                y: _
                            },
                            transition: {
                                repeat: 1 / 0,
                                duration: 3,
                                delay: 3 * t - .1 * t,
                                repeatDelay: (n.length - 1) * 3 - .1 * (n.length - 1)
                            },
                            children: [e, " "]
                        }, e + t))
                    })
                };
            var m = t(61243),
                h = t(83476),
                f = t(57042),
                p = t(24930),
                v = t.n(p),
                b = t(95685),
                g = t(79656),
                x = t.n(g);
            let w = v()(() => Promise.all([t.e(21), t.e(914), t.e(585), t.e(32)]).then(t.bind(t, 56585)).then(e => e.BallPit), {
                    loadableGenerated: {
                        webpack: () => [56585]
                    }
                }),
                k = e => {
                    let {
                        className: n,
                        shouldRunPhysics: t,
                        simpleContent: s,
                        wordTickerContent: l,
                        ...u
                    } = e;
                    return (0, r.jsx)("footer", {
                        className: (0, f.Z)(x().footer, n),
                        children: (0, r.jsxs)(a.E.div, {
                            className: x()["footer__sticky-inner"],
                            ...u,
                            children: [(0, r.jsx)("h2", {
                                className: x().footer__heading,
                                children: (0, r.jsxs)(i.r, {
                                    href: "/contact",
                                    className: x()["footer__heading-link"],
                                    children: [(0, r.jsx)("span", {
                                        children: "Let’s make "
                                    }), (0, r.jsx)("br", {}), (0, r.jsx)(b.W, {
                                        src: h.Z,
                                        className: x().arrow
                                    }), (0, r.jsxs)("span", {
                                        className: x()["footer__word-ticker-wrapper"],
                                        children: ["something ", (0, r.jsx)(d, {
                                            words: l
                                        })]
                                    })]
                                })
                            }), (0, r.jsx)(b.W, {
                                src: m.Z,
                                className: x().face
                            }), (0, r.jsx)("div", {
                                className: x()["footer__ballpit-wrapper"],
                                children: (0, r.jsx)(w, {
                                    shouldRun: t
                                })
                            }), (0, r.jsx)(o.FooterSimpleContents, {
                                content: s
                            })]
                        })
                    })
                };
            var j = t(51665),
                y = t(2342),
                N = t(14706),
                C = t(26522),
                H = t(50728),
                E = t(87168),
                Z = t(84666),
                P = t(24033),
                M = t(2265),
                S = t(34516),
                R = t.n(S);
            let O = ["/contact"],
                B = e => {
                    let {
                        children: n,
                        beforePageWrap: t,
                        footerSimpleContent: o,
                        wordTickerContent: i
                    } = e, s = (0, P.usePathname)(), l = !O.every(e => e !== s), u = (0, j.useLenisContext)(), c = (0, M.useRef)(null), _ = (0, M.useRef)(null), d = (0, y.m)(992), {
                        scrollYProgress: m
                    } = (0, C.v)({
                        target: _,
                        offset: ["start end", "start 45%"]
                    }), {
                        scrollYProgress: h
                    } = (0, C.v)({
                        target: _,
                        offset: ["start end", "end end"]
                    }), p = (0, H.H)(m, [0, 1], ["scale(1)", "scale(0.95)"]), v = (0, H.H)(() => m.get() > 0 && !d ? "transform, border-radius" : "auto"), b = (0, H.H)(() => m.get() > 0 && !d ? p.get() : "none"), g = (0, H.H)(h, [0, 1], [d ? 0 : -250, 0]), [x, w] = (0, M.useState)(!1), [S, B] = (0, M.useState)(!1);
                    return (0, E.W)(h, "change", e => {
                        null == u || u.dimensions.onContentResize(), !S && e > .5 ? (B(!0), w(!0)) : S && (e > 0 && !x ? w(!0) : 0 === e && x && w(!1))
                    }), (0, N.y)(() => {
                        B(!1), w(!1)
                    }), (0, r.jsxs)("div", {
                        className: R()["frame-wrap"],
                        children: [t, (0, r.jsx)(Z.M, {
                            children: (0, r.jsx)(a.E.div, {
                                className: (0, f.Z)(R()["page-wrap"], l && R()["page-wrap--ignored"]),
                                id: "page-content",
                                ref: c,
                                style: l ? void 0 : {
                                    transform: b,
                                    transformOrigin: "bottom",
                                    willChange: v
                                },
                                children: n
                            })
                        }), (0, r.jsx)("div", {
                            className: R()["footer-scroll-twin"],
                            ref: _
                        }), !l && (0, r.jsx)(k, {
                            shouldRunPhysics: x,
                            simpleContent: o,
                            wordTickerContent: i.map(e => e.text),
                            style: {
                                y: g
                            }
                        })]
                    })
                }
        },
        39016: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                ChangingFaces: function() {
                    return A
                },
                Header: function() {
                    return Y
                }
            });
            var r, o, i, a, s = t(57437),
                l = t(63718),
                u = t(89539),
                c = t(69360),
                _ = t(24033);

            function d() {
                let e = (0, _.usePathname)();
                return function() {
                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, c.Sp)(e, n)
                }
            }
            var m = t(57042),
                h = t(84666),
                f = t(95090),
                p = t(12793),
                v = t.n(p),
                b = t(95685),
                g = t(2265);
            let x = {
                    out: {
                        backgroundColor: "rgba(255,255,255,0.7)",
                        height: "100%"
                    },
                    in: {
                        backgroundColor: "rgba(255,255,255,1)",
                        height: "auto"
                    },
                    exit: {
                        backgroundColor: "rgba(255,255,255,1)",
                        height: "100%",
                        boxShadow: "0px 0px transparent"
                    }
                },
                w = e => {
                    let {
                        groups: n,
                        isOpen: t = !0,
                        setOpen: r,
                        onLinkClick: o
                    } = e, i = d();

                    function a() {
                        let e;
                        return n.forEach(n => {
                            if (n.children && !e) {
                                var t;
                                let r = null === (t = n.children) || void 0 === t ? void 0 : t.find(e => i({
                                    path: (0, c.n4)((0, c.JK)(e.link)),
                                    pathMatch: "strict"
                                }));
                                r && (e = (0, c.n4)((0, c.JK)(r.link)))
                            }
                        }), e
                    }
                    let [p, w] = (0, g.useState)(a()), k = (0, _.usePathname)();
                    return (0, g.useEffect)(() => {
                        w(a())
                    }, [k]), (0, s.jsx)(h.M, {
                        children: t && (0, s.jsx)(f.E.nav, {
                            className: v().submenu,
                            variants: x,
                            initial: "out",
                            animate: "in",
                            exit: "exit",
                            transition: {
                                duration: v().submenuTiming,
                                ease: [.86, 0, .07, 1]
                            },
                            style: {
                                x: "-50%"
                            },
                            children: n.map(e => {
                                var n;
                                return (0, s.jsxs)(f.E.div, {
                                    className: v().submenu__group,
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    children: [e.heading && (0, s.jsx)("h2", {
                                        className: v().submenu__heading,
                                        children: e.heading
                                    }), (0, s.jsx)("ul", {
                                        className: v().submenu__list,
                                        children: null === (n = e.children) || void 0 === n ? void 0 : n.map(e => e.link && (0, s.jsx)(l.I, {
                                            maxDegrees: 2,
                                            maxTranslateY: 4,
                                            maxTranslateX: 2,
                                            children: n => {
                                                var t, i, a, l, _;
                                                let {
                                                    motionProps: d,
                                                    onMouseMove: h,
                                                    ref: g,
                                                    setIsMagnetic: x
                                                } = n;
                                                return (0, s.jsx)(f.E.li, {
                                                    ref: g,
                                                    onMouseMove: h,
                                                    ...d,
                                                    onMouseEnter: () => x(!0),
                                                    onFocus: () => x(!0),
                                                    onMouseLeave: () => x(!1),
                                                    onBlur: () => x(!1),
                                                    children: (0, s.jsxs)(u.r, {
                                                        className: (0, m.Z)(v().submenu__link, (null === (t = e.link) || void 0 === t ? void 0 : t.linktype) === "story" && v()["submenu__link--" + (null !== (_ = null === (i = null === (l = e.link) || void 0 === l ? void 0 : null === (a = l.story) || void 0 === a ? void 0 : a.content) || void 0 === i ? void 0 : i.theme) && void 0 !== _ ? _ : "green")], p === (0, c.n4)((0, c.JK)(e.link)) && v()["submenu__link--active"]),
                                                        href: (0, c.n4)((0, c.JK)(e.link)),
                                                        onClick: () => {
                                                            o && o(), w((0, c.n4)((0, c.JK)(e.link))), r(!1)
                                                        },
                                                        children: [e.icon_svg && (0, s.jsx)(b.W, {
                                                            className: v()["submenu__link-icon"],
                                                            raw: e.icon_svg
                                                        }), e.label]
                                                    })
                                                })
                                            }
                                        }, e._uid))
                                    })]
                                }, e.heading)
                            })
                        })
                    })
                };
            var k = t(52127),
                j = t(89180),
                y = t.n(j),
                N = t(44441),
                C = t(23845);

            function H() {
                let e = (0, g.useRef)(null),
                    n = (0, g.useRef)(0),
                    t = (0, g.useRef)(),
                    [r, o] = (0, k.H)();
                return (0, s.jsx)("div", {
                    className: y()["nothing-wrapper"],
                    onClick: function() {
                        var i, a;
                        (null === (i = e.current) || void 0 === i ? void 0 : i.readyState) === 0 && (null === (a = e.current) || void 0 === a || a.load()), window.clearTimeout(t.current), n.current++, t.current = window.setTimeout(() => {
                            n.current = 0
                        }, 1e3), n.current >= 3 && (e.current && ((0, N.track)("Toasty!"), (0, C.sendGTMEvent)({
                            event: "toasty_easter_egg"
                        }), e.current.currentTime = 0, e.current.play(), o([
                            [r.current, {
                                x: ["0%", "-150%", "-150%", "0%"],
                                y: ["40%", "38%", "40%", "38%", "40%", "38%", "40%", "38%", "40%", "38%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "38%", "40%", "38%", "40%", "38%", "40%", "38%", "40%", "38%", "40%", "38%", "40%", "38%"]
                            }]
                        ], {
                            duration: 1.2
                        })), window.clearTimeout(t.current), n.current = 0)
                    },
                    "aria-hidden": "true",
                    children: (0, s.jsxs)(f.E.div, {
                        className: y().nothing,
                        ref: r,
                        children: [(0, s.jsx)("img", {
                            src: "/nothing/nothing-2.gif",
                            alt: "",
                            width: 81,
                            height: 200
                        }), (0, s.jsx)("audio", {
                            src: "/nothing/nothing.mp3",
                            ref: e,
                            preload: "auto"
                        })]
                    })
                })
            }
            var E = t(2342),
                Z = t(90952);

            function P() {
                return (P = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var M = function(e) {
                return Z.createElement("svg", P({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 40,
                    height: 37,
                    fill: "none",
                    viewBox: "0 0 40 37"
                }, e), r || (r = Z.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M18.183 0v18.182H10.91v3.636h18.182v-3.636h-7.273V0h-3.636Z",
                    clipRule: "evenodd"
                })), o || (o = Z.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M7.273 7.273a3.64 3.64 0 0 1 3.636 3.636h3.636c0-4.01-3.262-7.273-7.272-7.273S0 6.9 0 10.91h3.636a3.64 3.64 0 0 1 3.637-3.636ZM3.636 18.182H0c0 10.025 8.156 18.182 18.182 18.182v-3.637c-8.02 0-14.546-6.525-14.546-14.545ZM34.545 3.636a5.455 5.455 0 1 0 0 10.91 5.455 5.455 0 0 0 0-10.91Zm0 3.637a1.82 1.82 0 0 1 1.818 1.818 1.82 1.82 0 0 1-1.818 1.818 1.82 1.82 0 0 1-1.819-1.818 1.82 1.82 0 0 1 1.819-1.818Z",
                    clipRule: "evenodd"
                })))
            };

            function S() {
                return (S = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var R = function(e) {
                    return Z.createElement("svg", S({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 37,
                        height: 40,
                        fill: "none",
                        viewBox: "0 0 37 40"
                    }, e), i || (i = Z.createElement("path", {
                        fill: "currentColor",
                        fillRule: "evenodd",
                        d: "M3.636 21.818H0C0 31.844 8.156 40 18.182 40v-3.636c-8.02 0-14.546-6.525-14.546-14.546ZM21.816 3.636h14.546V0H21.816v3.636ZM7.273 10.909a3.64 3.64 0 0 1 3.636 3.636h3.636c0-4.01-3.262-7.272-7.272-7.272S0 10.535 0 14.545h3.636a3.64 3.64 0 0 1 3.637-3.636ZM18.183 25.455a3.64 3.64 0 0 1-3.636-3.637H10.91c0 4.01 3.263 7.273 7.273 7.273s7.273-3.263 7.273-7.273h-3.637a3.64 3.64 0 0 1-3.636 3.637ZM33.259 7.805l-4.169 4.17-4.169-4.17-2.571 2.572 10.909 10.909 2.571-2.572-4.169-4.169 4.17-4.168-2.572-2.572Z",
                        clipRule: "evenodd"
                    })))
                },
                O = t(79368),
                B = t(99254);

            function L() {
                return (L = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var F = function(e) {
                    return Z.createElement("svg", L({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 40,
                        height: 40,
                        fill: "none",
                        viewBox: "0 0 40 40"
                    }, e), a || (a = Z.createElement("path", {
                        fill: "currentColor",
                        fillRule: "evenodd",
                        d: "M21.818 18.08a3.64 3.64 0 0 1-3.636 3.637 3.64 3.64 0 0 1-3.636-3.637v-7.273c0-4.01-3.263-7.272-7.273-7.272S0 6.797 0 10.807h3.636a3.64 3.64 0 0 1 3.637-3.636 3.64 3.64 0 0 1 3.636 3.636v7.273c0 4.01 3.262 7.273 7.273 7.273 4.01 0 7.273-3.263 7.273-7.273h-3.637ZM29.09 3.636a3.64 3.64 0 0 1 3.635 3.637h3.637c0-4.01-3.263-7.273-7.273-7.273s-7.273 3.262-7.273 7.273h3.637a3.64 3.64 0 0 1 3.636-3.637ZM36.362 21.716c0 8.021-6.525 14.546-14.546 14.546v3.636c10.026 0 18.182-8.156 18.182-18.182h-3.636Z",
                        clipRule: "evenodd"
                    })))
                },
                W = t(98666),
                T = t(93622),
                I = t(5982),
                K = t.n(I);
            let Y = e => {
                    let {
                        menu: n,
                        className: t
                    } = e, [r, o] = (0, g.useState)(null), i = d();

                    function a() {
                        return n.findIndex(e => {
                            var n, t;
                            return i({
                                path: "nav_item" === e.component ? "/" + (0, c.n4)(null !== (t = null === (n = e.link) || void 0 === n ? void 0 : n.cached_url) && void 0 !== t ? t : "") : e.active_path,
                                pathMatch: "nav_item" === e.component ? e.path_match_strictness : "loose"
                            })
                        })
                    }
                    let [l, h] = (0, g.useState)(a()), p = (0, _.usePathname)();
                    (0, g.useEffect)(() => {
                        h(a())
                    }, [p]);
                    let v = (0, g.useRef)(null),
                        x = (0, g.useRef)(null),
                        k = (0, E.m)(768),
                        j = (0, T.q)(0, {
                            mass: .1
                        }),
                        y = e => ({
                            transition: {
                                type: "spring",
                                duration: .4
                            },
                            style: {
                                left: k || e !== r ? 0 : j,
                                position: "relative",
                                gridColumn: e >= 0 ? e + 1 : 1,
                                opacity: e < 0 ? 0 : void 0,
                                borderRadius: 100
                            }
                        });

                    function N(e) {
                        let n = e.target.getBoundingClientRect(),
                            t = ((e.clientX - n.x) / n.width - .5) * 2;
                        j.set(8 * t)
                    }
                    let [C, H] = (0, g.useState)(null);

                    function Z(e) {
                        o(e), H(e)
                    }
                    return (0, g.useEffect)(() => {
                        function e(e) {
                            e.target.closest(".link-wrap") || Z(null)
                        }
                        return document.addEventListener("click", e), () => document.removeEventListener("click", e)
                    }, []), (0, s.jsxs)("header", {
                        className: (0, m.Z)(K().header, t),
                        children: [(0, s.jsx)("a", {
                            className: K()["skip-link"],
                            href: "#page-content",
                            children: "Skip Navigation"
                        }), (0, s.jsxs)("div", {
                            className: K().header__inner,
                            children: [(0, s.jsxs)(u.r, {
                                href: "/",
                                className: K().header__logo,
                                "aria-hidden": "true",
                                tabIndex: -1,
                                children: [(0, s.jsx)("span", {
                                    className: "hidden",
                                    children: "Home"
                                }), (0, s.jsx)(b.W, {
                                    src: W.Z
                                })]
                            }), (0, s.jsxs)("nav", {
                                ref: v,
                                className: (0, m.Z)(K().menu, null !== C && K()["menu--submenu-open"]),
                                children: [(0, s.jsx)("ul", {
                                    className: (0, m.Z)(K().menu__list, null !== C && K()["menu__list--submenu-open"]),
                                    children: n.map((e, n) => {
                                        var t;
                                        let i = {
                                            onMouseEnter: () => o(n),
                                            onFocus: () => {
                                                j.set(0), o(n)
                                            },
                                            onMouseLeave: () => {
                                                j.set(0), o(C)
                                            },
                                            onBlur: () => {
                                                j.set(0), o(C)
                                            },
                                            onMouseMove: N
                                        };
                                        return (0, s.jsxs)("li", {
                                            className: K().menu__item,
                                            children: ["nav_item" === e.component && e.link && (0, s.jsx)(J, {
                                                ref: n === r ? x : void 0,
                                                href: (0, c.n4)((0, c.JK)(e.link)),
                                                className: (0, m.Z)(K().menu__link, n === l && K()["menu__link--active"]),
                                                onClick: () => h(n),
                                                ...i,
                                                children: e.label
                                            }, null === (t = e.link) || void 0 === t ? void 0 : t.cached_url), "nav_item_parent" === e.component && (0, s.jsxs)("div", {
                                                className: "link-wrap",
                                                children: [(0, s.jsx)("button", {
                                                    ref: n === r ? x : void 0,
                                                    className: (0, m.Z)(K().menu__link, n === l && K()["menu__link--active"]),
                                                    ...i,
                                                    onClick: () => Z(C === n ? null : n),
                                                    children: e.label
                                                }), (0, s.jsx)(w, {
                                                    groups: e.subnav_groups,
                                                    isOpen: C === n,
                                                    setOpen: e => Z(e ? n : null),
                                                    onLinkClick: () => h(n)
                                                })]
                                            })]
                                        }, e.label)
                                    })
                                }), (0, s.jsxs)(f.E.div, {
                                    layout: !0,
                                    layoutRoot: !0,
                                    className: (0, m.Z)(K().menu__list, K()["menu__list--twin"]),
                                    children: [null == n ? void 0 : n.map((e, n) => (0, s.jsx)("span", {
                                        className: (0, m.Z)(K().menu__link, K()["menu__link--twin"]),
                                        style: {
                                            gridColumn: n + 1
                                        },
                                        children: e.label
                                    }, e.label)), (0, s.jsx)(f.E.div, {
                                        layout: !0,
                                        className: (0, m.Z)(K()["menu__hover-pill"]),
                                        ...y(null != r ? r : l)
                                    }), (0, s.jsx)(f.E.div, {
                                        layout: !0,
                                        className: (0, m.Z)(K()["menu__active-pill"]),
                                        ...y(l)
                                    })]
                                })]
                            }), (0, s.jsx)(A, {})]
                        })]
                    })
                },
                J = (0, f.E)(u.r),
                A = () => {
                    let e = d(),
                        n = e({
                            path: "/about",
                            pathMatch: "loose"
                        }),
                        t = e({
                            path: "/work",
                            pathMatch: "loose"
                        }),
                        r = e({
                            path: "/expertise",
                            pathMatch: "loose"
                        }),
                        o = e({
                            path: "/contact",
                            pathMatch: "loose"
                        }),
                        [i, a] = (0, k.H)();
                    return (0, s.jsxs)("div", {
                        className: K().face,
                        onClick: e => {
                            a(i.current, {
                                rotate: ["0deg", "360deg"]
                            })
                        },
                        children: [(0, s.jsx)(f.E.div, {
                            ref: i,
                            initial: {
                                rotate: "0deg"
                            },
                            style: {
                                transformOrigin: "top center"
                            },
                            children: (0, s.jsx)(h.M, {
                                children: n ? (0, s.jsx)(D, {
                                    children: (0, s.jsx)(b.W, {
                                        src: M
                                    })
                                }, "about") : t ? (0, s.jsx)(D, {
                                    children: (0, s.jsx)(b.W, {
                                        src: R
                                    })
                                }, "work") : r ? (0, s.jsx)(D, {
                                    children: (0, s.jsx)(b.W, {
                                        src: O.default
                                    })
                                }, "expertise") : o ? (0, s.jsx)(D, {
                                    children: (0, s.jsx)(b.W, {
                                        src: F
                                    })
                                }, "contact") : (0, s.jsx)(D, {
                                    children: (0, s.jsx)(b.W, {
                                        src: B.default
                                    })
                                }, "home")
                            })
                        }), (0, s.jsx)(H, {})]
                    })
                },
                D = e => {
                    let {
                        children: n
                    } = e;
                    return (0, s.jsx)(f.E.div, {
                        variants: {
                            out: {
                                opacity: 0,
                                y: "-150%"
                            },
                            in: {
                                opacity: 1,
                                y: "-50%"
                            }
                        },
                        initial: "out",
                        animate: "in",
                        children: n
                    })
                }
        },
        85622: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                BallpitContextProvider: function() {
                    return a
                },
                BallpitKeyContext: function() {
                    return i
                }
            });
            var r = t(57437),
                o = t(2265);
            let i = o.createContext({
                    key: {
                        current: ""
                    }
                }),
                a = e => {
                    let {
                        children: n
                    } = e, t = (0, o.useRef)("");
                    return (0, r.jsx)(i.Provider, {
                        value: {
                            key: t
                        },
                        children: n
                    })
                }
        },
        10966: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                Button: function() {
                    return d
                },
                ButtonLink: function() {
                    return m
                }
            });
            var r = t(57437),
                o = t(63718),
                i = t(83476),
                a = t(57042),
                s = t(95090),
                l = t(95685),
                u = t(6971),
                c = t.n(u),
                _ = t(89539);
            let d = e => {
                    let {
                        children: n,
                        className: t,
                        innerClassName: o,
                        useIcon: i,
                        icon: s,
                        bgTheme: l,
                        magnetHoverProps: u,
                        ..._
                    } = e;
                    return (0, r.jsx)("button", {
                        className: (0, a.Z)(c()["button-wrapper"], t),
                        ..._,
                        children: (0, r.jsx)(h, {
                            children: n,
                            innerClassName: o,
                            useIcon: i,
                            icon: s,
                            bgTheme: l,
                            magnetHoverProps: u
                        })
                    })
                },
                m = e => {
                    let {
                        children: n,
                        className: t,
                        innerClassName: o,
                        useIcon: i,
                        icon: s,
                        bgTheme: l,
                        magnetHoverProps: u,
                        ...d
                    } = e;
                    return (0, r.jsx)(_.r, {
                        className: (0, a.Z)(c()["button-wrapper"], t),
                        ...d,
                        children: (0, r.jsx)(h, {
                            children: n,
                            innerClassName: o,
                            useIcon: i,
                            icon: s,
                            bgTheme: l,
                            magnetHoverProps: u
                        })
                    })
                },
                h = e => {
                    let {
                        innerClassName: n,
                        children: t,
                        useIcon: u = !1,
                        icon: _ = i.Z,
                        bgTheme: d = "secondary",
                        magnetHoverProps: m = {
                            maxTranslateX: 5,
                            maxTranslateY: 10
                        }
                    } = e;
                    return (0, r.jsx)(o.I, { ...m,
                        children: e => {
                            let {
                                ref: o,
                                motionProps: i,
                                onMouseMove: m,
                                setIsMagnetic: h
                            } = e;
                            return (0, r.jsxs)(s.E.span, {
                                className: (0, a.Z)(c().button, u && c()["button--icon"], c()["button--bg-".concat(d)], n),
                                ref: o,
                                ...i,
                                onMouseMove: m,
                                onMouseEnter: () => h(!0),
                                onMouseLeave: () => h(!1),
                                onBlur: () => h(!1),
                                children: [t, u && (0, r.jsx)(l.W, {
                                    src: _
                                })]
                            })
                        }
                    })
                }
        },
        51665: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                LenisSmoothScroll: function() {
                    return u
                },
                useLenisContext: function() {
                    return l
                }
            });
            var r = t(57437),
                o = t(28477),
                i = t(57042),
                a = t(2265);
            let s = (0, a.createContext)({
                lenis: void 0
            });

            function l() {
                let {
                    lenis: e
                } = (0, a.useContext)(s);
                return e
            }
            let u = (0, a.forwardRef)((e, n) => {
                let {
                    root: t,
                    options: l,
                    lenisRef: u,
                    children: c,
                    className: _,
                    innerClassName: d
                } = e, [m, h] = (0, a.useState)();
                u && (u.current = m), (0, a.useImperativeHandle)(n, () => f.current);
                let f = (0, a.useRef)(null),
                    p = (0, a.useRef)(null);
                return (0, a.useEffect)(() => {
                    let e = new o.Z({ ...l,
                        ...!t && {
                            wrapper: f.current,
                            content: p.current
                        }
                    });
                    return h(e), requestAnimationFrame(n => (function e(n, t) {
                        n.raf(t), requestAnimationFrame(t => e(n, t))
                    })(e, n)), () => {
                        e.destroy(), h(void 0)
                    }
                }, [t, l]), (0, r.jsx)(s.Provider, {
                    value: {
                        lenis: m
                    },
                    children: t ? c : (0, r.jsx)("div", {
                        ref: f,
                        className: (0, i.Z)(null == m ? void 0 : m.className, _),
                        children: (0, r.jsx)("div", {
                            ref: p,
                            className: (0, i.Z)("lenis-content", d),
                            children: c
                        })
                    })
                })
            });
            u.displayName = "LenisSmoothScroll"
        },
        13726: function(e, n, t) {
            "use strict";
            t.d(n, {
                o: function() {
                    return c
                }
            });
            var r = t(57437),
                o = t(95685),
                i = t(66487),
                a = t.n(i),
                s = t(73446),
                l = t(2265),
                u = t(57042);
            let c = (0, l.forwardRef)((e, n) => {
                let {
                    className: t,
                    ...i
                } = e;
                return (0, r.jsx)("button", {
                    className: (0, u.Z)(a()["modal-close-button"], t),
                    ref: n,
                    ...i,
                    "aria-label": "Close Dialog",
                    children: (0, r.jsx)(o.W, {
                        src: s.Z
                    })
                })
            });
            c.displayName = "ModalCloseButton"
        },
        74836: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                OnNavigationEvent: function() {
                    return l
                }
            });
            var r = t(51665),
                o = t(66782),
                i = t(24274),
                a = t(14706),
                s = t(2265);
            let l = () => {
                let {
                    setIsExiting: e
                } = (0, s.useContext)(o.PageTransitionContext), {
                    clearStaggerQueue: n
                } = (0, s.useContext)(i.WaypointStaggerContext), t = (0, r.useLenisContext)();
                return (0, a.y)(() => {
                    document.body.classList.remove("overflow-hidden"), e(!1), n(), t && (t.resize(), t.scrollTo(0, {
                        force: !0,
                        immediate: !0
                    }))
                }), (0, a.y)(() => {
                    document.body.classList.remove("overflow-hidden"), t && t.start()
                }, [], !1), null
            }
        },
        32230: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                TrackMousePosition: function() {
                    return o
                }
            });
            var r = t(28071);
            let o = () => ((0, r.S)(), null)
        },
        55057: function(e, n, t) {
            "use strict";

            function r(e) {
                return "".concat(e / 16, "rem")
            }

            function o(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1512,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1.33;
                return "clamp(".concat(r(e), ", ").concat(e / n * 100, "vw, ").concat(r(e * t), ")")
            }

            function i(e, n) {
                return Array(n).fill(e)
            }
            t.d(n, {
                KK: function() {
                    return o
                },
                se: function() {
                    return i
                }
            })
        },
        9301: function() {},
        6599: function(e) {
            e.exports = {
                "frame-counter": "FrameCounter_frame-counter__iOdfd"
            }
        },
        79656: function(e) {
            e.exports = {
                footer: "Footer_footer__GQa1y",
                "footer__sticky-inner": "Footer_footer__sticky-inner__m5LLE",
                "footer__ballpit-wrapper": "Footer_footer__ballpit-wrapper__S6heb",
                footer__heading: "Footer_footer__heading__8h65q",
                "footer__heading-link": "Footer_footer__heading-link__v415t",
                arrow: "Footer_arrow__kw0yI",
                "footer__word-ticker-wrapper": "Footer_footer__word-ticker-wrapper__UUW_n",
                face: "Footer_face__88tuY",
                footer__content: "Footer_footer__content__L0G1i"
            }
        },
        34516: function(e) {
            e.exports = {
                "frame-wrap": "FooterRevealPageWrap_frame-wrap__PJi9O",
                "page-wrap": "FooterRevealPageWrap_page-wrap__RQIzf",
                "page-wrap--ignored": "FooterRevealPageWrap_page-wrap--ignored__IPEO0",
                "footer-scroll-twin": "FooterRevealPageWrap_footer-scroll-twin__tn7UN"
            }
        },
        5982: function(e) {
            e.exports = {
                header: "Header_header__r9N9Y",
                header__inner: "Header_header__inner__nfTZS",
                header__logo: "Header_header__logo__7Zjhj",
                header__face: "Header_header__face__LVesY",
                face: "Header_face__r0io3",
                menu: "Header_menu__Yr6mh",
                "replace-bg-after-submenu-close": "Header_replace-bg-after-submenu-close__Ub52C",
                "menu--submenu-open": "Header_menu--submenu-open___908m",
                "no-bg-when-submenu-open": "Header_no-bg-when-submenu-open__2GrrC",
                menu__list: "Header_menu__list__h_Anx",
                "menu__list--submenu-open": "Header_menu__list--submenu-open__7Xt79",
                "menu__list--twin": "Header_menu__list--twin__w_0Lp",
                menu__link: "Header_menu__link__UGkEv",
                menu__item: "Header_menu__item__cb_Hw",
                "menu__link--twin": "Header_menu__link--twin__3W8NS",
                "menu__link--active": "Header_menu__link--active__QKyk9",
                "menu__active-pill": "Header_menu__active-pill__YdBUl",
                "menu__hover-pill": "Header_menu__hover-pill__NFAxL",
                "skip-link": "Header_skip-link__VZ9J_"
            }
        },
        12793: function(e) {
            e.exports = {
                submenuTiming: ".3",
                submenu: "HeaderSubmenu_submenu__TXNdc",
                submenu__group: "HeaderSubmenu_submenu__group__BIGgm",
                submenu__heading: "HeaderSubmenu_submenu__heading__CpYC6",
                submenu__list: "HeaderSubmenu_submenu__list__be8NW",
                submenu__link: "HeaderSubmenu_submenu__link__8aEu8",
                "submenu__link-icon": "HeaderSubmenu_submenu__link-icon__Xz8Jl",
                "submenu__link--default": "HeaderSubmenu_submenu__link--default__8ckpN",
                "submenu__link--active": "HeaderSubmenu_submenu__link--active__eVA57",
                "submenu__link--green": "HeaderSubmenu_submenu__link--green__g7YoO",
                "submenu__link--purple": "HeaderSubmenu_submenu__link--purple__lM_G4",
                "submenu__link--pink": "HeaderSubmenu_submenu__link--pink__BfkSt",
                "submenu__link--yellow": "HeaderSubmenu_submenu__link--yellow__zn3eA",
                "submenu__link--blue": "HeaderSubmenu_submenu__link--blue__ErsfR",
                "submenu__link--cyan": "HeaderSubmenu_submenu__link--cyan__YUx20",
                "submenu__link--xmas": "HeaderSubmenu_submenu__link--xmas__7O8Y0"
            }
        },
        6971: function(e) {
            e.exports = {
                "button-wrapper": "Button_button-wrapper__2Ps4h",
                "button--bg-secondary": "Button_button--bg-secondary__6flN1",
                "button--bg-white": "Button_button--bg-white__c36cv",
                "button--bg-primary": "Button_button--bg-primary__xsHnK",
                "button--bg-transparent": "Button_button--bg-transparent__4_NCr",
                button: "Button_button__lQZdm",
                "button--icon": "Button_button--icon__Me_aL",
                angled: "Button_angled__TxtHA"
            }
        },
        13246: function(e) {
            e.exports = {
                draft: "DraftIndicator_draft__cFBQ_",
                draft__tag: "DraftIndicator_draft__tag__Qrd5I"
            }
        },
        66487: function(e) {
            e.exports = {
                "modal-close-button": "ModalCloseButton_modal-close-button___iKD_"
            }
        },
        89180: function(e) {
            e.exports = {
                "nothing-wrapper": "Nothing_nothing-wrapper__3K5Pl",
                nothing: "Nothing_nothing__zpuZI"
            }
        },
        91842: function(e) {
            e.exports = {
                "word-ticker": "WordTicker_word-ticker__2HQ3j"
            }
        }
    },
    function(e) {
        e.O(0, [14, 332, 203, 726, 677, 924, 29, 501, 971, 824, 744], function() {
            return e(e.s = 52224)
        }), _N_E = e.O()
    }
]);