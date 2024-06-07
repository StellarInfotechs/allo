(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [81], {
        83476: function(t, e, n) {
            "use strict";
            var r, o = n(90952);

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            e.Z = function(t) {
                return o.createElement("svg", a({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 14,
                    height: 13,
                    fill: "none",
                    strokeWidth: .5,
                    viewBox: "0 0 14 13"
                }, t), r || (r = o.createElement("path", {
                    fill: "currentColor",
                    stroke: "currentColor",
                    d: "M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z",
                    vectorEffect: "non-scaling-stroke"
                })))
            }
        },
        73446: function(t, e, n) {
            "use strict";
            var r, o = n(90952);

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            e.Z = function(t) {
                return o.createElement("svg", a({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 18,
                    height: 18,
                    fill: "none",
                    viewBox: "0 0 18 18"
                }, t), r || (r = o.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "square",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M2.332 15.667 15.665 2.333m0 13.334L2.332 2.333",
                    vectorEffect: "non-scaling-stroke"
                })))
            }
        },
        10966: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Button: function() {
                    return m
                },
                ButtonLink: function() {
                    return p
                }
            });
            var r = n(57437),
                o = n(63718),
                a = n(83476),
                s = n(57042),
                i = n(95090),
                l = n(95685),
                c = n(6971),
                u = n.n(c),
                d = n(89539);
            let m = t => {
                    let {
                        children: e,
                        className: n,
                        innerClassName: o,
                        useIcon: a,
                        icon: i,
                        bgTheme: l,
                        magnetHoverProps: c,
                        ...d
                    } = t;
                    return (0, r.jsx)("button", {
                        className: (0, s.Z)(u()["button-wrapper"], n),
                        ...d,
                        children: (0, r.jsx)(f, {
                            children: e,
                            innerClassName: o,
                            useIcon: a,
                            icon: i,
                            bgTheme: l,
                            magnetHoverProps: c
                        })
                    })
                },
                p = t => {
                    let {
                        children: e,
                        className: n,
                        innerClassName: o,
                        useIcon: a,
                        icon: i,
                        bgTheme: l,
                        magnetHoverProps: c,
                        ...m
                    } = t;
                    return (0, r.jsx)(d.r, {
                        className: (0, s.Z)(u()["button-wrapper"], n),
                        ...m,
                        children: (0, r.jsx)(f, {
                            children: e,
                            innerClassName: o,
                            useIcon: a,
                            icon: i,
                            bgTheme: l,
                            magnetHoverProps: c
                        })
                    })
                },
                f = t => {
                    let {
                        innerClassName: e,
                        children: n,
                        useIcon: c = !1,
                        icon: d = a.Z,
                        bgTheme: m = "secondary",
                        magnetHoverProps: p = {
                            maxTranslateX: 5,
                            maxTranslateY: 10
                        }
                    } = t;
                    return (0, r.jsx)(o.I, { ...p,
                        children: t => {
                            let {
                                ref: o,
                                motionProps: a,
                                onMouseMove: p,
                                setIsMagnetic: f
                            } = t;
                            return (0, r.jsxs)(i.E.span, {
                                className: (0, s.Z)(u().button, c && u()["button--icon"], u()["button--bg-".concat(m)], e),
                                ref: o,
                                ...a,
                                onMouseMove: p,
                                onMouseEnter: () => f(!0),
                                onMouseLeave: () => f(!1),
                                onBlur: () => f(!1),
                                children: [n, c && (0, r.jsx)(l.W, {
                                    src: d
                                })]
                            })
                        }
                    })
                }
        },
        51665: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                LenisSmoothScroll: function() {
                    return c
                },
                useLenisContext: function() {
                    return l
                }
            });
            var r = n(57437),
                o = n(28477),
                a = n(57042),
                s = n(2265);
            let i = (0, s.createContext)({
                lenis: void 0
            });

            function l() {
                let {
                    lenis: t
                } = (0, s.useContext)(i);
                return t
            }
            let c = (0, s.forwardRef)((t, e) => {
                let {
                    root: n,
                    options: l,
                    lenisRef: c,
                    children: u,
                    className: d,
                    innerClassName: m
                } = t, [p, f] = (0, s.useState)();
                c && (c.current = p), (0, s.useImperativeHandle)(e, () => v.current);
                let v = (0, s.useRef)(null),
                    _ = (0, s.useRef)(null);
                return (0, s.useEffect)(() => {
                    let t = new o.Z({ ...l,
                        ...!n && {
                            wrapper: v.current,
                            content: _.current
                        }
                    });
                    return f(t), requestAnimationFrame(e => (function t(e, n) {
                        e.raf(n), requestAnimationFrame(n => t(e, n))
                    })(t, e)), () => {
                        t.destroy(), f(void 0)
                    }
                }, [n, l]), (0, r.jsx)(i.Provider, {
                    value: {
                        lenis: p
                    },
                    children: n ? u : (0, r.jsx)("div", {
                        ref: v,
                        className: (0, a.Z)(null == p ? void 0 : p.className, d),
                        children: (0, r.jsx)("div", {
                            ref: _,
                            className: (0, a.Z)("lenis-content", m),
                            children: u
                        })
                    })
                })
            });
            c.displayName = "LenisSmoothScroll"
        },
        13726: function(t, e, n) {
            "use strict";
            n.d(e, {
                o: function() {
                    return u
                }
            });
            var r = n(57437),
                o = n(95685),
                a = n(66487),
                s = n.n(a),
                i = n(73446),
                l = n(2265),
                c = n(57042);
            let u = (0, l.forwardRef)((t, e) => {
                let {
                    className: n,
                    ...a
                } = t;
                return (0, r.jsx)("button", {
                    className: (0, c.Z)(s()["modal-close-button"], n),
                    ref: e,
                    ...a,
                    "aria-label": "Close Dialog",
                    children: (0, r.jsx)(o.W, {
                        src: i.Z
                    })
                })
            });
            u.displayName = "ModalCloseButton"
        },
        41006: function(t, e, n) {
            "use strict";
            n.d(e, {
                A: function() {
                    return h
                }
            });
            var r = n(57437),
                o = n(51665),
                a = n(13726),
                s = n(66782),
                i = n(2342),
                l = n(35033),
                c = n(57042),
                u = n(95090),
                d = n(26522),
                m = n(50728),
                p = n(2265),
                f = n(54887),
                v = n(81271),
                _ = n.n(v);
            let x = (0, u.E)(a.o),
                h = t => (0, r.jsx)(s.PageTransitionWithNewContext, {
                    children: (0, r.jsx)(b, { ...t
                    })
                }),
                b = t => {
                    let {
                        closeFn: e,
                        children: n,
                        className: a,
                        bgClassName: v
                    } = t, h = (0, o.useLenisContext)(), b = (0, p.useRef)(), w = (0, p.useRef)(null), g = (0, p.useRef)(null), y = (0, p.useRef)(null), j = [.87, 0, .13, 1], [k, E] = (0, p.useState)(200), N = (0, p.useRef)(Math.max(.2 * window.innerHeight, 200)), C = (0, p.useRef)(window.innerHeight - N.current);
                    (0, p.useEffect)(() => E(N.current), []);
                    let {
                        setRouteFn: S,
                        startExitTransition: L,
                        isExiting: R
                    } = (0, p.useContext)(s.PageTransitionContext);

                    function M() {
                        R || (S(() => {
                            e()
                        }), L())
                    }
                    let B = (0, i.m)(640),
                        {
                            scope: Z,
                            animate: H
                        } = (0, l.C)({
                            onEnter: () => {
                                var t;
                                document.body.classList.add("overflow-hidden"), h && h.stop(), null === (t = g.current) || void 0 === t || t.focus({
                                    preventScroll: !0
                                }), H([
                                    [".".concat(_().modal), {
                                        opacity: [1, 1]
                                    }],
                                    [".".concat(_()["modal-inner"]), {
                                        y: [C.current, 0]
                                    }, {
                                        at: "<",
                                        duration: .8,
                                        ease: j
                                    }],
                                    [".".concat(_()["modal-backdrop"]), {
                                        opacity: .5,
                                        pointerEvents: "all"
                                    }, {
                                        at: "<",
                                        duration: .5,
                                        ease: "linear"
                                    }]
                                ]).then(() => {
                                    b && b.current && b.current.resize()
                                })
                            },
                            onExit: t => {
                                var e, n, r, o, a;
                                document.body.classList.remove("overflow-hidden"), null === (e = w.current) || void 0 === e || e.classList.add("overflow-hidden"), h && h.start(), null === (n = b.current) || void 0 === n || n.stop(), null === (r = window.lastFocussedDescendant) || void 0 === r || r.focus({
                                    preventScroll: !0
                                }), H([
                                    [".".concat(_()["modal-inner"]), {
                                        y: [null, C.current + (null !== (a = null === (o = b.current) || void 0 === o ? void 0 : o.actualScroll) && void 0 !== a ? a : 0)]
                                    }, {
                                        ease: j
                                    }],
                                    [".".concat(_()["modal-backdrop"]), {
                                        opacity: 0
                                    }, {
                                        at: "<",
                                        ease: "linear"
                                    }]
                                ], {
                                    duration: .5
                                }).then(() => {
                                    t()
                                })
                            }
                        }),
                        {
                            scrollY: I
                        } = (0, d.v)({
                            container: w
                        }),
                        T = (0, m.H)(I, [0, k], ["0px", B ? "-15px" : "-30px"]),
                        A = (0, m.H)(I, [0, k], [B ? "30px" : "50px", "0px"]),
                        O = (0, m.H)(I, [0, k], ["0px", B ? "35px" : "60px"]),
                        P = (0, m.H)(I, [0, k], ["0px", B ? "-15px" : "-30px"]),
                        W = (0, p.useRef)(null);

                    function D(t) {
                        "Escape" !== t.key || R || M()
                    }
                    return (0, p.useEffect)(() => (document.addEventListener("keydown", D), () => {
                        document.removeEventListener("keydown", D)
                    })), (0, f.createPortal)((0, r.jsxs)("div", {
                        ref: Z,
                        onClick: function(t) {
                            (t.target.classList.contains(_().modal) || t.target.classList.contains("lenis-content")) && M()
                        },
                        className: (0, c.Z)(_()["modal-wrapper"], R && _()["modal-wrapper--exiting"]),
                        children: [(0, r.jsx)("div", {
                            className: _()["modal-backdrop"]
                        }), (0, r.jsx)("div", {
                            tabIndex: 0,
                            onFocus: function() {
                                var t;
                                null === (t = y.current) || void 0 === t || t.focus()
                            }
                        }), (0, r.jsx)("div", {
                            className: _()["modal-tab-trap-start"],
                            ref: g,
                            tabIndex: -1
                        }), (0, r.jsx)(o.LenisSmoothScroll, {
                            role: "dialog",
                            tabIndex: -1,
                            lenisRef: b,
                            ref: w,
                            className: (0, c.Z)(_().modal, a),
                            children: (0, r.jsxs)("div", {
                                className: _()["modal-inner"],
                                children: [(0, r.jsx)(u.E.div, {
                                    className: (0, c.Z)(_()["modal-inner__bg"], v),
                                    style: {
                                        borderTopLeftRadius: A,
                                        borderTopRightRadius: A,
                                        left: T,
                                        right: T
                                    }
                                }), (0, r.jsx)(x, {
                                    onClick: M,
                                    ref: W,
                                    className: _()["modal-close"],
                                    style: {
                                        y: P,
                                        x: O
                                    }
                                }), (0, r.jsx)("main", {
                                    className: _()["modal-content"],
                                    children: "function" == typeof n ? n(w) : n
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            ref: y,
                            tabIndex: -1
                        }), (0, r.jsx)("div", {
                            tabIndex: 0,
                            onFocus: function() {
                                var t;
                                null === (t = g.current) || void 0 === t || t.focus()
                            }
                        })]
                    }), document.body)
                }
        },
        85993: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                TextAnimateUp: function() {
                    return d
                }
            });
            var r = n(57437),
                o = n(45051),
                a = n(69360),
                s = n(95090),
                i = n(19066),
                l = n(2265),
                c = n(74431),
                u = n.n(c);
            let d = l.forwardRef((t, e) => {
                let {
                    text: n,
                    className: c,
                    allowReveal: d = !0,
                    as: m,
                    viewportMargin: p,
                    children: f,
                    dangerouslySetInnerHTML: v,
                    ..._
                } = t, x = (0, l.useRef)(null);
                (0, l.useImperativeHandle)(e, () => x.current, []);
                let h = (0, l.useRef)((0, s.E)(m || "span")),
                    {
                        onViewportEnter: b,
                        animate: w,
                        ...g
                    } = (0, o.n)({
                        initial: "inactive",
                        animate: "active",
                        viewport: p ? {
                            once: !0,
                            margin: p,
                            amount: "some"
                        } : void 0
                    }),
                    y = 0;
                return (0, r.jsx)(h.current, {
                    className: c,
                    ref: x,
                    ..._,
                    ...g,
                    ...d ? {
                        onViewportEnter: b,
                        animate: w
                    } : null,
                    children: (0, a.Op)({
                        text: n,
                        wordRender: (t, e, n) => (0, r.jsx)(s.E.span, {
                            className: u().word,
                            style: {
                                display: "inline-block",
                                whiteSpace: "pre"
                            },
                            transition: {
                                ease: (0, i._)(0, .55, .45, 1),
                                duration: .6,
                                delay: (y - t.length) * .005
                            },
                            variants: {
                                inactive: {
                                    transform: "translate3d(0, 80%, 0)"
                                },
                                active: {
                                    animation: "".concat(u()["mask-down"], " 0.8s forwards cubic-bezier(0, 0.55, 0.45, 1)"),
                                    transform: "translate3d(0, 0%, 0)"
                                }
                            },
                            children: e
                        }, n),
                        characterRender: (t, e) => (0, r.jsx)(s.E.span, {
                            className: u().character,
                            style: {
                                display: "inline-block",
                                whiteSpace: "pre"
                            },
                            transition: {
                                ease: (0, i._)(0, .55, .45, 1),
                                duration: .6,
                                delay: .005 * y++
                            },
                            variants: {
                                inactive: {
                                    opacity: 0
                                },
                                active: {
                                    opacity: 1
                                }
                            },
                            children: t
                        }, e)
                    })
                })
            });
            d.displayName = "TextAnimateUp"
        },
        3446: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                WaypointStagger: function() {
                    return i
                }
            });
            var r = n(57437),
                o = n(45051),
                a = n(83151),
                s = n(95090);
            let i = t => {
                let {
                    queueKey: e,
                    as: n,
                    direction: i,
                    children: l,
                    viewportMargin: c,
                    ...u
                } = t, d = (() => {
                    switch (i) {
                        case "up":
                            return "stepInBottom";
                        case "down":
                            return "stepInTop";
                        case "left":
                            return "stepInRight";
                        case "right":
                            return "stepInLeft";
                        default:
                            return "stepIn"
                    }
                })(), m = (0, o.n)({
                    key: e,
                    initial: a.b[d].variants.inactive,
                    animate: a.b[d].variants.active,
                    transition: a.b[d].transition,
                    viewport: c ? {
                        once: !0,
                        margin: c,
                        amount: "some"
                    } : void 0
                }), p = s.E[n || "div"];
                return (0, r.jsx)(p, { ...u,
                    ...m,
                    children: l
                })
            }
        },
        35033: function(t, e, n) {
            "use strict";
            n.d(e, {
                C: function() {
                    return s
                }
            });
            var r = n(77196),
                o = n(52127),
                a = n(2265);

            function s() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                let [{
                    onEnter: s,
                    onExit: i
                }] = e, [l, c] = (0, r.oO)(), [u, d] = (0, o.H)();
                return (0, a.useEffect)(() => {
                    l ? s() : i(c)
                }, [l, c, s, i]), {
                    isPresent: l,
                    scope: u,
                    animate: d
                }
            }
        },
        6971: function(t) {
            t.exports = {
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
        66487: function(t) {
            t.exports = {
                "modal-close-button": "ModalCloseButton_modal-close-button___iKD_"
            }
        },
        81271: function(t) {
            t.exports = {
                "modal-wrapper": "SmoothModal_modal-wrapper__kCDpT",
                "modal-backdrop": "SmoothModal_modal-backdrop__Yw8at",
                modal: "SmoothModal_modal__46NFH",
                "modal--exiting": "SmoothModal_modal--exiting__rL47D",
                "modal-inner": "SmoothModal_modal-inner__5cyWM",
                "modal-inner__bg": "SmoothModal_modal-inner__bg__c_nv9",
                "modal-close": "SmoothModal_modal-close__Sul5C",
                "modal-content": "SmoothModal_modal-content__DCcjC",
                "modal-tab-trap-start": "SmoothModal_modal-tab-trap-start__Eb_c5"
            }
        },
        74431: function(t) {
            t.exports = {
                word: "TextAnimateUp_word__Yvn5A",
                "mask-down": "TextAnimateUp_mask-down__TzvI8"
            }
        }
    }
]);