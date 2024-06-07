(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [149], {
        28556: function(e, t, n) {
            Promise.resolve().then(n.t.bind(n, 55375, 23)), Promise.resolve().then(n.bind(n, 66754)), Promise.resolve().then(n.bind(n, 28660)), Promise.resolve().then(n.bind(n, 86629)), Promise.resolve().then(n.bind(n, 53572)), Promise.resolve().then(n.bind(n, 85993)), Promise.resolve().then(n.bind(n, 25247))
        },
        66754: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WorkCategories: function() {
                    return p
                }
            });
            var r = n(57437),
                i = n(63718),
                o = n(4628),
                a = n(57042),
                s = n(95090),
                u = n(24033),
                c = n(2265),
                l = n(8895),
                d = n.n(l),
                f = n(3446);
            let p = e => {
                let {
                    categories: t,
                    className: n
                } = e, l = (0, u.useParams)(), [p, m] = (0, c.useState)(t.findIndex(e => l.category ? e.slug === l.category : e.is_startpage));
                return (0, c.useEffect)(() => {
                    m(t.findIndex(e => l.category ? e.slug === l.category : e.is_startpage))
                }, [l, t]), (0, r.jsx)(f.WaypointStagger, {
                    direction: "up",
                    as: "div",
                    className: (0, a.Z)(d()["categories-wrap"], n),
                    children: t.map((e, t) => (0, r.jsx)(i.I, {
                        children: n => {
                            let {
                                ref: i,
                                motionProps: u,
                                onMouseMove: c,
                                setIsMagnetic: l
                            } = n;
                            return (0, r.jsx)(s.E.div, { ...u,
                                ref: i,
                                children: (0, r.jsx)(o.Y, {
                                    href: e.is_startpage ? "/work" : "/work/category/".concat(e.slug),
                                    className: (0, a.Z)(d().category, {
                                        [d()["is-active"]]: t === p
                                    }),
                                    onMouseMove: c,
                                    onMouseEnter: () => l(!0),
                                    onMouseLeave: () => l(!1),
                                    onBlur: () => l(!1),
                                    children: e.name
                                }, e.slug)
                            })
                        }
                    }, e.slug))
                })
            }
        },
        85622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BallpitContextProvider: function() {
                    return a
                },
                BallpitKeyContext: function() {
                    return o
                }
            });
            var r = n(57437),
                i = n(2265);
            let o = i.createContext({
                    key: {
                        current: ""
                    }
                }),
                a = e => {
                    let {
                        children: t
                    } = e, n = (0, i.useRef)("");
                    return (0, r.jsx)(o.Provider, {
                        value: {
                            key: n
                        },
                        children: t
                    })
                }
        },
        28660: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SetBallpitKey: function() {
                    return a
                }
            });
            var r = n(57437),
                i = n(85622),
                o = n(2265);
            let a = e => {
                let {
                    value: t
                } = e, {
                    key: n
                } = (0, o.useContext)(i.BallpitKeyContext);
                return n.current = t, (0, r.jsx)(r.Fragment, {})
            }
        },
        66782: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PageTransition: function() {
                    return u
                },
                PageTransitionContext: function() {
                    return a
                },
                PageTransitionContextProvider: function() {
                    return s
                },
                PageTransitionWithNewContext: function() {
                    return c
                }
            });
            var r = n(57437),
                i = n(84666),
                o = n(2265);
            let a = (0, o.createContext)({
                    isExiting: !1,
                    setIsExiting: () => null,
                    startExitTransition: () => null,
                    onExitComplete: () => null,
                    setRouteFn: () => null
                }),
                s = e => {
                    let {
                        children: t
                    } = e, [n, i] = (0, o.useState)(!1), s = (0, o.useRef)(() => {
                        console.error("Default `routeFn()`. PageTransitionContext.setRouteFn was not called by the time the exit transition finished.")
                    });
                    return (0, r.jsx)(a.Provider, {
                        value: {
                            isExiting: n,
                            setIsExiting: i,
                            startExitTransition: () => {
                                i(!0)
                            },
                            setRouteFn: e => {
                                s.current = e
                            },
                            onExitComplete: () => {
                                s.current()
                            }
                        },
                        children: t
                    })
                },
                u = e => {
                    let {
                        children: t,
                        initial: n
                    } = e, s = (0, o.useContext)(a);
                    return (0, r.jsx)(i.M, {
                        onExitComplete: s.onExitComplete,
                        initial: n,
                        children: !s.isExiting && t
                    })
                },
                c = e => (0, r.jsx)(s, {
                    children: (0, r.jsx)(u, { ...e
                    })
                })
        },
        4628: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return c
                }
            });
            var r = n(57437),
                i = n(89539),
                o = n(66782),
                a = n(91414),
                s = n(24033),
                u = n(2265);
            let c = (0, u.forwardRef)((e, t) => {
                let {
                    onClick: n,
                    ...c
                } = e, l = (0, u.useContext)(o.PageTransitionContext), d = (0, s.useRouter)(), f = (0, s.usePathname)(), p = c.replace ? d.replace : d.push;
                if (!l) throw Error("Cannot find PageTransitionContext. Please ensure that <PageTransitionLink> appears as a descendant of <PageTransition>.");
                return (0, r.jsx)(i.r, {
                    ref: t,
                    onClick: function(e) {
                        e.preventDefault(), n && n(e), l && f && decodeURI(f) !== decodeURI(c.href) && (d.prefetch(c.href, {
                            kind: a.PrefetchKind.FULL
                        }), l.setRouteFn(() => p(c.href, {
                            scroll: c.scroll
                        })), l.startExitTransition())
                    },
                    ...c
                })
            });
            c.displayName = "PageTransitionLink"
        },
        53572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SetTheme: function() {
                    return o
                }
            });
            var r = n(57437),
                i = n(2265);
            let o = e => {
                let {
                    color: t,
                    custom: n
                } = e;
                return (0, i.useEffect)(() => {
                    document.body.style.removeProperty("--theme-primary"), document.body.style.removeProperty("--theme-primary-text"), document.body.style.removeProperty("--theme-secondary"), document.body.style.removeProperty("--theme-text"), document.body.style.removeProperty("--theme-background"), document.body.style.removeProperty("--theme-logo"), document.body.style.removeProperty("--theme-header-face")
                }, []), (0, r.jsx)("style", {
                    children: "\n        :root{\n            --theme-primary: ".concat((null == n ? void 0 : n.primary) ? n.primary : "var(--".concat(t, "-primary)"), ";\n            --theme-primary-text: ").concat((null == n ? void 0 : n.primaryText) ? n.primaryText : "var(--".concat(t, "-primary-text)"), ";\n            --theme-secondary: ").concat((null == n ? void 0 : n.secondary) ? n.secondary : "var(--".concat(t, "-secondary)"), ";\n            --theme-text: ").concat((null == n ? void 0 : n.text) ? n.text : "var(--".concat(t, "-text)"), ";\n            --theme-background: ").concat((null == n ? void 0 : n.background) ? n.background : "var(--".concat(t, "-tertiary)"), ";\n            --theme-logo: ").concat((null == n ? void 0 : n.logo) ? n.logo : "var(--".concat(t, "-secondary)"), ";\n            --theme-header-face: ").concat((null == n ? void 0 : n.headerFace) ? n.headerFace : "var(--".concat(t, "-primary)"), ";\n        }\n        ")
                })
            }
        },
        85993: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TextAnimateUp: function() {
                    return d
                }
            });
            var r = n(57437),
                i = n(45051),
                o = n(69360),
                a = n(95090),
                s = n(19066),
                u = n(2265),
                c = n(74431),
                l = n.n(c);
            let d = u.forwardRef((e, t) => {
                let {
                    text: n,
                    className: c,
                    allowReveal: d = !0,
                    as: f,
                    viewportMargin: p,
                    children: m,
                    dangerouslySetInnerHTML: h,
                    ...v
                } = e, y = (0, u.useRef)(null);
                (0, u.useImperativeHandle)(t, () => y.current, []);
                let g = (0, u.useRef)((0, a.E)(f || "span")),
                    {
                        onViewportEnter: x,
                        animate: w,
                        ...E
                    } = (0, i.n)({
                        initial: "inactive",
                        animate: "active",
                        viewport: p ? {
                            once: !0,
                            margin: p,
                            amount: "some"
                        } : void 0
                    }),
                    _ = 0;
                return (0, r.jsx)(g.current, {
                    className: c,
                    ref: y,
                    ...v,
                    ...E,
                    ...d ? {
                        onViewportEnter: x,
                        animate: w
                    } : null,
                    children: (0, o.Op)({
                        text: n,
                        wordRender: (e, t, n) => (0, r.jsx)(a.E.span, {
                            className: l().word,
                            style: {
                                display: "inline-block",
                                whiteSpace: "pre"
                            },
                            transition: {
                                ease: (0, s._)(0, .55, .45, 1),
                                duration: .6,
                                delay: (_ - e.length) * .005
                            },
                            variants: {
                                inactive: {
                                    transform: "translate3d(0, 80%, 0)"
                                },
                                active: {
                                    animation: "".concat(l()["mask-down"], " 0.8s forwards cubic-bezier(0, 0.55, 0.45, 1)"),
                                    transform: "translate3d(0, 0%, 0)"
                                }
                            },
                            children: t
                        }, n),
                        characterRender: (e, t) => (0, r.jsx)(a.E.span, {
                            className: l().character,
                            style: {
                                display: "inline-block",
                                whiteSpace: "pre"
                            },
                            transition: {
                                ease: (0, s._)(0, .55, .45, 1),
                                duration: .6,
                                delay: .005 * _++
                            },
                            variants: {
                                inactive: {
                                    opacity: 0
                                },
                                active: {
                                    opacity: 1
                                }
                            },
                            children: e
                        }, t)
                    })
                })
            });
            d.displayName = "TextAnimateUp"
        },
        25247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TrackLastFocussedDescendant: function() {
                    return o
                }
            });
            var r = n(57437),
                i = n(2265);
            let o = e => {
                let {
                    as: t,
                    children: n,
                    ...o
                } = e, a = (0, i.useRef)(null);

                function s(e) {
                    window.lastFocussedDescendant = e.target
                }
                return (0, i.useEffect)(() => {
                    let e = a.current;
                    return null == e || e.addEventListener("focusout", s), () => {
                        null == e || e.removeEventListener("focusout", s)
                    }
                }, []), (0, r.jsx)(t || "div", { ...o,
                    ref: a,
                    children: n
                })
            }
        },
        3446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WaypointStagger: function() {
                    return s
                }
            });
            var r = n(57437),
                i = n(45051),
                o = n(83151),
                a = n(95090);
            let s = e => {
                let {
                    queueKey: t,
                    as: n,
                    direction: s,
                    children: u,
                    viewportMargin: c,
                    ...l
                } = e, d = (() => {
                    switch (s) {
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
                })(), f = (0, i.n)({
                    key: t,
                    initial: o.b[d].variants.inactive,
                    animate: o.b[d].variants.active,
                    transition: o.b[d].transition,
                    viewport: c ? {
                        once: !0,
                        margin: c,
                        amount: "some"
                    } : void 0
                }), p = a.E[n || "div"];
                return (0, r.jsx)(p, { ...l,
                    ...f,
                    children: u
                })
            }
        },
        24274: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WaypointStaggerContext: function() {
                    return a
                },
                WaypointStaggerProvider: function() {
                    return s
                }
            });
            var r = n(57437),
                i = n(83151),
                o = n(2265);
            let a = (0, o.createContext)({
                    addToStaggerQueue: () => 0,
                    removeFromStaggerQueue: () => null,
                    clearStaggerQueue: () => null,
                    viewportMargin: {
                        current: "0%"
                    }
                }),
                s = e => {
                    let {
                        children: t,
                        viewportMargin: n = i.b.waypoint.viewport.margin
                    } = e, s = (0, o.useRef)({}), u = (0, o.useRef)(n);

                    function c() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                        s.current[e] = 0
                    }
                    return (0, r.jsx)(a.Provider, {
                        value: {
                            addToStaggerQueue: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                                return void 0 === s.current[e] && c(e), s.current[e]++
                            },
                            removeFromStaggerQueue: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                                s.current[e]--
                            },
                            clearStaggerQueue: c,
                            viewportMargin: u
                        },
                        children: t
                    })
                }
        },
        45051: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return a
                }
            });
            var r = n(24274),
                i = n(83151),
                o = n(2265);

            function a() {
                var e, t, n;
                let {
                    key: a,
                    onViewportEnter: s,
                    ...u
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [c, l] = (0, o.useState)(), {
                    addToStaggerQueue: d,
                    removeFromStaggerQueue: f,
                    viewportMargin: p
                } = (0, o.useContext)(r.WaypointStaggerContext), m = {
                    initial: i.b.stepInBottom.variants.inactive,
                    animate: i.b.stepInBottom.variants.active,
                    viewport: { ...i.b.waypoint.viewport,
                        margin: p.current
                    },
                    transition: i.b.stepInBottom.transition
                };
                return {
                    viewport: null !== (e = u.viewport) && void 0 !== e ? e : m.viewport,
                    initial: null !== (t = u.initial) && void 0 !== t ? t : m.initial,
                    animate: void 0 !== c ? null !== (n = u.animate) && void 0 !== n ? n : m.animate : void 0,
                    transition: { ...m.transition,
                        ...u.transition,
                        delay: c
                    },
                    onViewportEnter: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        void 0 === c && (l(.1 * d(a)), setTimeout(() => f(a), 0)), s && s(...t)
                    }
                }
            }
        },
        83151: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return i
                }
            });
            let r = {
                    duration: .5,
                    ease: [.33, 1, .68, 1]
                },
                i = {
                    waypoint: {
                        transition: {
                            staggerChildren: .1
                        },
                        viewport: {
                            once: !0,
                            margin: "0px 0px -15% 0px",
                            amount: 0
                        },
                        initial: "inactive",
                        whileInView: "active"
                    },
                    stepIn: {
                        transition: r,
                        variants: {
                            inactive: {
                                opacity: 0
                            },
                            active: {
                                opacity: 1
                            }
                        }
                    },
                    stepInLeft: {
                        transition: r,
                        variants: {
                            inactive: {
                                opacity: 0,
                                transform: "translateX(-50px)"
                            },
                            active: {
                                opacity: 1,
                                transform: "translateX(0px)"
                            }
                        }
                    },
                    stepInRight: {
                        transition: r,
                        variants: {
                            inactive: {
                                opacity: 0,
                                transform: "translateX(50px)"
                            },
                            active: {
                                opacity: 1,
                                transform: "translateX(0px)"
                            }
                        }
                    },
                    stepInTop: {
                        transition: r,
                        variants: {
                            inactive: {
                                opacity: 0,
                                transform: "translateY(-50px)"
                            },
                            active: {
                                opacity: 1,
                                transform: "translateY(0px)"
                            }
                        }
                    },
                    stepInBottom: {
                        transition: r,
                        variants: {
                            inactive: {
                                opacity: 0,
                                transform: "translateY(50px)"
                            },
                            active: {
                                opacity: 1,
                                transform: "translateY(0px)"
                            }
                        }
                    }
                }
        },
        55375: function(e) {
            e.exports = {
                "work-page": "layout_work-page__yja2T",
                "work-header": "layout_work-header__q0X91",
                "work-header__heading": "layout_work-header__heading__HhhhV",
                "enter-header": "layout_enter-header__4ZBkp",
                "enter-categories": "layout_enter-categories__Yv6Ms",
                "enter-grid": "layout_enter-grid__BsjXp"
            }
        },
        8895: function(e) {
            e.exports = {
                "categories-wrap": "WorkCategories_categories-wrap__nReVR",
                category: "WorkCategories_category__0Dq4q",
                "is-active": "WorkCategories_is-active__9T1KO"
            }
        },
        74431: function(e) {
            e.exports = {
                word: "TextAnimateUp_word__Yvn5A",
                "mask-down": "TextAnimateUp_mask-down__TzvI8"
            }
        },
        25566: function(e) {
            var t, n, r, i = e.exports = {};

            function o() {
                throw Error("setTimeout has not been defined")
            }

            function a() {
                throw Error("clearTimeout has not been defined")
            }

            function s(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : o
                } catch (e) {
                    t = o
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                    n = a
                }
            }();
            var u = [],
                c = !1,
                l = -1;

            function d() {
                c && r && (c = !1, r.length ? u = r.concat(u) : l = -1, u.length && f())
            }

            function f() {
                if (!c) {
                    var e = s(d);
                    c = !0;
                    for (var t = u.length; t;) {
                        for (r = u, u = []; ++l < t;) r && r[l].run();
                        l = -1, t = u.length
                    }
                    r = null, c = !1,
                        function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e)
                            } catch (t) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function p(e, t) {
                this.fun = e, this.array = t
            }

            function m() {}
            i.nextTick = function(e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                u.push(new p(e, t)), 1 !== u.length || c || s(f)
            }, p.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
                return []
            }, i.binding = function(e) {
                throw Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(e) {
                throw Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        },
        84666: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return y
                }
            });
            var r = n(2265),
                i = n(538);

            function o() {
                let e = (0, r.useRef)(!1);
                return (0, i.L)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
            var a = n(72363),
                s = n(38243),
                u = n(10961);
            class c extends r.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = this.props.sizeRef.current;
                        e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function l({
                children: e,
                isPresent: t
            }) {
                let n = (0, r.useId)(),
                    i = (0, r.useRef)(null),
                    o = (0, r.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return (0, r.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: r,
                        top: a,
                        left: s
                    } = o.current;
                    if (t || !i.current || !e || !r) return;
                    i.current.dataset.motionPopId = n;
                    let u = document.createElement("style");
                    return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${s}px !important;
          }
        `), () => {
                        document.head.removeChild(u)
                    }
                }, [t]), r.createElement(c, {
                    isPresent: t,
                    childRef: i,
                    sizeRef: o
                }, r.cloneElement(e, {
                    ref: i
                }))
            }
            let d = ({
                children: e,
                initial: t,
                isPresent: n,
                onExitComplete: i,
                custom: o,
                presenceAffectsLayout: a,
                mode: c
            }) => {
                let d = (0, u.h)(f),
                    p = (0, r.useId)(),
                    m = (0, r.useMemo)(() => ({
                        id: p,
                        initial: t,
                        isPresent: n,
                        custom: o,
                        onExitComplete: e => {
                            for (let t of (d.set(e, !0), d.values()))
                                if (!t) return;
                            i && i()
                        },
                        register: e => (d.set(e, !1), () => d.delete(e))
                    }), a ? void 0 : [n]);
                return (0, r.useMemo)(() => {
                    d.forEach((e, t) => d.set(t, !1))
                }, [n]), r.useEffect(() => {
                    n || d.size || !i || i()
                }, [n]), "popLayout" === c && (e = r.createElement(l, {
                    isPresent: n
                }, e)), r.createElement(s.O.Provider, {
                    value: m
                }, e)
            };

            function f() {
                return new Map
            }
            var p = n(781),
                m = n(63276),
                h = n(46567);
            let v = e => e.key || "",
                y = ({
                    children: e,
                    custom: t,
                    initial: n = !0,
                    onExitComplete: s,
                    exitBeforeEnter: u,
                    presenceAffectsLayout: c = !0,
                    mode: l = "sync"
                }) => {
                    (0, h.k)(!u, "Replace exitBeforeEnter with mode='wait'");
                    let f = (0, r.useContext)(p.p).forceRender || function() {
                            let e = o(),
                                [t, n] = (0, r.useState)(0),
                                i = (0, r.useCallback)(() => {
                                    e.current && n(t + 1)
                                }, [t]);
                            return [(0, r.useCallback)(() => a.Wi.postRender(i), [i]), t]
                        }()[0],
                        y = o(),
                        g = function(e) {
                            let t = [];
                            return r.Children.forEach(e, e => {
                                (0, r.isValidElement)(e) && t.push(e)
                            }), t
                        }(e),
                        x = g,
                        w = (0, r.useRef)(new Map).current,
                        E = (0, r.useRef)(x),
                        _ = (0, r.useRef)(new Map).current,
                        T = (0, r.useRef)(!0);
                    if ((0, i.L)(() => {
                            T.current = !1,
                                function(e, t) {
                                    e.forEach(e => {
                                        let n = v(e);
                                        t.set(n, e)
                                    })
                                }(g, _), E.current = x
                        }), (0, m.z)(() => {
                            T.current = !0, _.clear(), w.clear()
                        }), T.current) return r.createElement(r.Fragment, null, x.map(e => r.createElement(d, {
                        key: v(e),
                        isPresent: !0,
                        initial: !!n && void 0,
                        presenceAffectsLayout: c,
                        mode: l
                    }, e)));
                    x = [...x];
                    let k = E.current.map(v),
                        b = g.map(v),
                        P = k.length;
                    for (let e = 0; e < P; e++) {
                        let t = k[e]; - 1 !== b.indexOf(t) || w.has(t) || w.set(t, void 0)
                    }
                    return "wait" === l && w.size && (x = []), w.forEach((e, n) => {
                        if (-1 !== b.indexOf(n)) return;
                        let i = _.get(n);
                        if (!i) return;
                        let o = k.indexOf(n),
                            a = e;
                        a || (a = r.createElement(d, {
                            key: v(i),
                            isPresent: !1,
                            onExitComplete: () => {
                                w.delete(n);
                                let e = Array.from(_.keys()).filter(e => !b.includes(e));
                                if (e.forEach(e => _.delete(e)), E.current = g.filter(t => {
                                        let r = v(t);
                                        return r === n || e.includes(r)
                                    }), !w.size) {
                                    if (!1 === y.current) return;
                                    f(), s && s()
                                }
                            },
                            custom: t,
                            presenceAffectsLayout: c,
                            mode: l
                        }, i), w.set(n, a)), x.splice(o, 0, a)
                    }), x = x.map(e => {
                        let t = e.key;
                        return w.has(t) ? e : r.createElement(d, {
                            key: v(e),
                            isPresent: !0,
                            presenceAffectsLayout: c,
                            mode: l
                        }, e)
                    }), r.createElement(r.Fragment, null, w.size ? x : x.map(e => (0, r.cloneElement)(e)))
                }
        },
        63276: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return i
                }
            });
            var r = n(2265);

            function i(e) {
                return (0, r.useEffect)(() => () => e(), [])
            }
        }
    },
    function(e) {
        e.O(0, [14, 332, 29, 971, 824, 744], function() {
            return e(e.s = 28556)
        }), _N_E = e.O()
    }
]);