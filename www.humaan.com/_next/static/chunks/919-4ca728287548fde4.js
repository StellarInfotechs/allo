(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [919], {
        76867: function(t, e, i) {
            Promise.resolve().then(i.bind(i, 50251)), Promise.resolve().then(i.bind(i, 66782))
        },
        42123: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                GlobalRouteSpinner: function() {
                    return h
                },
                GlobalRouteSpinnerContext: function() {
                    return l
                }
            });
            var s = i(57437),
                r = i(2265),
                n = i(14706),
                o = i(86629);
            let l = (0, r.createContext)({
                    setIsRoutePending: () => null
                }),
                h = t => {
                    let {
                        children: e
                    } = t, [i, h] = (0, r.useState)(!1), [a, c] = (0, r.useState)(!1), u = (0, r.useRef)();
                    return (0, r.useEffect)(() => {
                        i ? u.current = window.setTimeout(function() {
                            i ? c(!0) : c(!1), u.current = void 0
                        }, 500) : window.clearTimeout(u.current)
                    }, [i]), (0, n.y)(() => {
                        window.clearTimeout(u.current), h(!1), c(!1)
                    }, [], !1), (0, s.jsxs)(l.Provider, {
                        value: {
                            setIsRoutePending: h
                        },
                        children: [e, a && (0, s.jsx)(o.MouseSpinner, {})]
                    })
                }
        },
        50251: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                WorkPage: function() {
                    return g
                }
            });
            var s = i(57437),
                r = i(35033),
                n = i(38267),
                o = i(45560),
                l = i.n(o),
                h = i(52987),
                a = i(57042),
                c = i(2265),
                u = i(6552),
                p = i.n(u);
            let d = (0, c.forwardRef)((t, e) => {
                let {
                    rows: i,
                    className: r
                } = t;
                return (0, s.jsx)("div", {
                    className: (0, a.Z)(p()["work-grid"], r),
                    ref: e,
                    children: i.map((t, e) => (0, s.jsx)("div", {
                        className: (0, a.Z)(p()["work-grid__row"], p()["work-grid__row--".concat(t.layout)]),
                        children: t.projects.map((e, i) => "string" != typeof e && (0, s.jsx)(h.WorkCard, {
                            project: e,
                            orientation: t.layout
                        }, e.slug))
                    }, e))
                })
            });
            d.displayName = "WorkGrid";
            var m = i(51665);
            let g = t => {
                let {
                    workPage: e
                } = t, i = (0, m.useLenisContext)(), {
                    scope: o,
                    animate: h
                } = (0, r.C)({
                    onEnter: () => {
                        i && i.resize()
                    },
                    onExit: t => {
                        h(o.current, {
                            opacity: [1, 0],
                            y: [0, 50]
                        }, {
                            type: "tween",
                            duration: .15,
                            ease: n.Vv
                        }).then(t)
                    }
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("h2", {
                        className: "hidden",
                        children: e.name
                    }), (0, s.jsx)(d, {
                        className: l()["work-grid"],
                        rows: e.content.work_rows,
                        ref: o
                    })]
                })
            }
        },
        51665: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                LenisSmoothScroll: function() {
                    return a
                },
                useLenisContext: function() {
                    return h
                }
            });
            var s = i(57437),
                r = i(28477),
                n = i(57042),
                o = i(2265);
            let l = (0, o.createContext)({
                lenis: void 0
            });

            function h() {
                let {
                    lenis: t
                } = (0, o.useContext)(l);
                return t
            }
            let a = (0, o.forwardRef)((t, e) => {
                let {
                    root: i,
                    options: h,
                    lenisRef: a,
                    children: c,
                    className: u,
                    innerClassName: p
                } = t, [d, m] = (0, o.useState)();
                a && (a.current = d), (0, o.useImperativeHandle)(e, () => g.current);
                let g = (0, o.useRef)(null),
                    f = (0, o.useRef)(null);
                return (0, o.useEffect)(() => {
                    let t = new r.Z({ ...h,
                        ...!i && {
                            wrapper: g.current,
                            content: f.current
                        }
                    });
                    return m(t), requestAnimationFrame(e => (function t(e, i) {
                        e.raf(i), requestAnimationFrame(i => t(e, i))
                    })(t, e)), () => {
                        t.destroy(), m(void 0)
                    }
                }, [i, h]), (0, s.jsx)(l.Provider, {
                    value: {
                        lenis: d
                    },
                    children: i ? c : (0, s.jsx)("div", {
                        ref: g,
                        className: (0, n.Z)(null == d ? void 0 : d.className, u),
                        children: (0, s.jsx)("div", {
                            ref: f,
                            className: (0, n.Z)("lenis-content", p),
                            children: c
                        })
                    })
                })
            });
            a.displayName = "LenisSmoothScroll"
        },
        89539: function(t, e, i) {
            "use strict";
            i.d(e, {
                r: function() {
                    return a
                }
            });
            var s = i(57437),
                r = i(42123),
                n = i(61396),
                o = i.n(n),
                l = i(24033),
                h = i(2265);
            let a = (0, h.forwardRef)((t, e) => {
                let {
                    scroll: i,
                    onClick: n,
                    ...a
                } = t, c = a.href.match(/\/work\/\w+/), u = a.href.startsWith("/"), {
                    setIsRoutePending: p
                } = (0, h.useContext)(r.GlobalRouteSpinnerContext), d = (0, l.usePathname)();
                return (0, s.jsx)(o(), { ...a,
                    ref: e,
                    scroll: null != i ? i : !c,
                    onClick: function() {
                        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        n && n(...e), u && "_blank" !== a.target && a.href !== d && p(!0)
                    }
                })
            });
            a.displayName = "Link"
        },
        86629: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                MouseSpinner: function() {
                    return S
                }
            });
            var s, r = i(57437),
                n = i(95685),
                o = i(69277),
                l = i.n(o),
                h = i(90952);

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
                    }
                    return t
                }).apply(this, arguments)
            }
            var c = function(t) {
                return h.createElement("svg", a({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 543 525"
                }, t), s || (s = h.createElement("path", {
                    fill: "currentColor",
                    d: "M268 475c-110.275 0-200-89.725-200-200H18c0 137.85 112.15 250 250 250s250-112.15 250-250h-50c0 110.275-89.712 200-200 200ZM443 200A100 100 0 1 0 443-.001 100 100 0 0 0 443 200Zm0-150a49.998 49.998 0 0 1 50 50 50.001 50.001 0 0 1-50 50 50.06 50.06 0 0 1-50-50 50 50 0 0 1 50-50ZM185.85 42.85 150.5 7.5 93.175 64.825 35.85 7.5.5 42.85l57.325 57.325L.5 157.5l35.35 35.35 57.325-57.325L150.5 192.85l35.35-35.35-57.325-57.325L185.85 42.85Z"
                })))
            };
            let u = () => (0, r.jsx)(n.W, {
                src: c,
                className: l().spinner
            });
            var p = i(28071),
                d = i(93622),
                m = i(95090),
                g = i(2265),
                f = i(54887),
                v = i(33851),
                w = i.n(v);
            let S = t => {
                let {
                    log: e
                } = t, i = (0, p.k)(), s = (0, d.q)(i.x, {
                    stiffness: 300,
                    mass: .25
                }), n = (0, d.q)(i.y, {
                    stiffness: 300,
                    mass: .25
                }), [o, l] = (0, g.useState)(!1);
                return (0, g.useEffect)(() => {
                    l(!0)
                }, []), e && console.log(e), o && (0, f.createPortal)((0, r.jsx)("div", {
                    className: w()["mouse-spinner-wrapper"],
                    children: (0, r.jsx)(m.E.div, {
                        className: w()["mouse-spinner"],
                        style: {
                            left: s,
                            top: n
                        },
                        children: (0, r.jsx)(u, {})
                    })
                }), document.body)
            }
        },
        95685: function(t, e, i) {
            "use strict";
            i.d(e, {
                W: function() {
                    return l
                }
            });
            var s = i(57437),
                r = i(57042),
                n = i(34621),
                o = i.n(n);
            let l = t => {
                let {
                    src: e = "svg",
                    className: i,
                    raw: n,
                    width: l,
                    height: h,
                    ...a
                } = t, c = "", u = {};
                if (n) {
                    let t = n.split(/(<\/?svg.*?>)/),
                        e = t[1],
                        i = t[2];
                    if (u = e.split(/\s(?:width|height)=['"].+?['"]/).join("").split(/(\w+=".+?")/).reduce((t, e, i) => (i % 2 && (t[e.split("=")[0]] = e.split("=")[1].replace(/['"]/g, "")), t), u), c = i, !h) {
                        let t = e.match(/\sheight=['"](.+?)['"]/);
                        h = t ? Number(t[1]) : h
                    }
                    if (!l) {
                        let t = e.match(/\swidth=['"](.+?)['"]/);
                        l = t ? Number(t[1]) : l
                    }
                } else l || (l = e().props.width), h || (h = e().props.height);
                let p = {};
                return l && (p.width = l), h && (p.height = h), (0, s.jsx)(e, { ...a,
                    ...p,
                    ...n ? u : {},
                    className: (0, r.Z)(n && o()["svg-raw-wrap"], i),
                    style: { ...a.style,
                        "--width": l,
                        "--height": h
                    },
                    dangerouslySetInnerHTML: n ? {
                        __html: c
                    } : void 0
                })
            }
        },
        28071: function(t, e, i) {
            "use strict";
            i.d(e, {
                S: function() {
                    return a
                },
                k: function() {
                    return h
                }
            });
            var s = i(20609),
                r = i(99804),
                n = i(2265);
            let o = 0,
                l = 0;

            function h() {
                let t = (0, s.c)(o),
                    e = (0, s.c)(l);
                return (0, r.p)(() => {
                    o !== t.get() && t.set(o), l !== e.get() && e.set(l)
                }), {
                    x: t,
                    y: e
                }
            }

            function a() {
                (0, n.useEffect)(() => {
                    function t(t) {
                        o = t.clientX, l = t.clientY
                    }
                    return document.addEventListener("mousemove", t), () => {
                        document.removeEventListener("mousemove", t)
                    }
                }, [])
            }
        },
        14706: function(t, e, i) {
            "use strict";
            i.d(e, {
                y: function() {
                    return n
                }
            });
            var s = i(24033),
                r = i(2265);

            function n(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    n = (0, s.usePathname)(),
                    o = (0, r.useRef)(""),
                    l = (0, s.useSelectedLayoutSegments)(),
                    h = (0, r.useRef)([""]);
                (0, r.useEffect)(() => {
                    let e = o.current !== n,
                        s = !i || l.length !== h.current.length || !l.every((t, e) => h.current[e] === t);
                    if (e && (o.current = n), s && (h.current = l), e && s) {
                        let e = t();
                        if (e) return e
                    }
                }, [n, l, t, ...e])
            }
        },
        35033: function(t, e, i) {
            "use strict";
            i.d(e, {
                C: function() {
                    return o
                }
            });
            var s = i(77196),
                r = i(52127),
                n = i(2265);

            function o() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                let [{
                    onEnter: o,
                    onExit: l
                }] = e, [h, a] = (0, s.oO)(), [c, u] = (0, r.H)();
                return (0, n.useEffect)(() => {
                    h ? o() : l(a)
                }, [h, a, o, l]), {
                    isPresent: h,
                    scope: c,
                    animate: u
                }
            }
        },
        45560: function(t) {
            t.exports = {
                "work-grid": "WorkPage_work-grid__Y_M2E",
                "enter-grid": "WorkPage_enter-grid__Cm6Vh"
            }
        },
        33851: function(t) {
            t.exports = {
                "mouse-spinner": "MouseSpinner_mouse-spinner__As5lG",
                "fade-in": "MouseSpinner_fade-in__Mtrmz",
                "mouse-spinner-wrapper": "MouseSpinner_mouse-spinner-wrapper__pRzBe"
            }
        },
        34621: function(t) {
            t.exports = {
                "svg-raw-wrap": "SVG_svg-raw-wrap__ODfz9"
            }
        },
        69277: function(t) {
            t.exports = {
                spinner: "Spinner_spinner__2zNSi",
                spin: "Spinner_spin___JmP1"
            }
        },
        6552: function(t) {
            t.exports = {
                "work-grid": "WorkGrid_work-grid__0043M",
                "work-grid__row": "WorkGrid_work-grid__row__p9SUz",
                "work-grid__row--landscape": "WorkGrid_work-grid__row--landscape__klf5g",
                "work-grid__row--portrait": "WorkGrid_work-grid__row--portrait__nwacA"
            }
        },
        28477: function(t, e, i) {
            "use strict";

            function s() {
                return (s = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
                    }
                    return t
                }).apply(this, arguments)
            }

            function r(t, e, i) {
                return Math.max(t, Math.min(e, i))
            }
            i.d(e, {
                Z: function() {
                    return a
                }
            });
            class n {
                advance(t) {
                    var e, i, s, n;
                    if (!this.isRunning) return;
                    let o = !1;
                    if (this.lerp) this.value = (i = this.value, s = this.to, (1 - (n = 1 - Math.exp(-60 * this.lerp * t))) * i + n * s), Math.round(this.value) === this.to && (this.value = this.to, o = !0);
                    else {
                        this.currentTime += t;
                        let e = r(0, this.currentTime / this.duration, 1),
                            i = (o = e >= 1) ? 1 : this.easing(e);
                        this.value = this.from + (this.to - this.from) * i
                    }
                    null == (e = this.onUpdate) || e.call(this, this.value, o), o && this.stop()
                }
                stop() {
                    this.isRunning = !1
                }
                fromTo(t, e, {
                    lerp: i = .1,
                    duration: s = 1,
                    easing: r = t => t,
                    onStart: n,
                    onUpdate: o
                }) {
                    this.from = this.value = t, this.to = e, this.lerp = i, this.duration = s, this.easing = r, this.currentTime = 0, this.isRunning = !0, null == n || n(), this.onUpdate = o
                }
            }
            class o {
                constructor({
                    wrapper: t,
                    content: e,
                    autoResize: i = !0
                } = {}) {
                    if (this.resize = () => {
                            this.onWrapperResize(), this.onContentResize()
                        }, this.onWrapperResize = () => {
                            this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
                        }, this.onContentResize = () => {
                            this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth
                        }, this.wrapper = t, this.content = e, i) {
                        var s;
                        let t;
                        let e = (s = this.resize, function() {
                            let e = arguments,
                                i = this;
                            clearTimeout(t), t = setTimeout(function() {
                                s.apply(i, e)
                            }, 250)
                        });
                        this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(e), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(e), this.contentResizeObserver.observe(this.content)
                    }
                    this.resize()
                }
                destroy() {
                    var t, e;
                    null == (t = this.wrapperResizeObserver) || t.disconnect(), null == (e = this.contentResizeObserver) || e.disconnect()
                }
                get limit() {
                    return {
                        x: this.scrollWidth - this.width,
                        y: this.scrollHeight - this.height
                    }
                }
            }
            class l {
                constructor() {
                    this.events = {}
                }
                emit(t, ...e) {
                    let i = this.events[t] || [];
                    for (let t = 0, s = i.length; t < s; t++) i[t](...e)
                }
                on(t, e) {
                    var i;
                    return (null == (i = this.events[t]) ? void 0 : i.push(e)) || (this.events[t] = [e]), () => {
                        var i;
                        this.events[t] = null == (i = this.events[t]) ? void 0 : i.filter(t => e !== t)
                    }
                }
                off(t, e) {
                    var i;
                    this.events[t] = null == (i = this.events[t]) ? void 0 : i.filter(t => e !== t)
                }
                destroy() {
                    this.events = {}
                }
            }
            class h {
                constructor(t, {
                    wheelMultiplier: e = 1,
                    touchMultiplier: i = 2,
                    normalizeWheel: s = !1
                }) {
                    this.onTouchStart = t => {
                        let {
                            clientX: e,
                            clientY: i
                        } = t.targetTouches ? t.targetTouches[0] : t;
                        this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                            x: 0,
                            y: 0
                        }
                    }, this.onTouchMove = t => {
                        let {
                            clientX: e,
                            clientY: i
                        } = t.targetTouches ? t.targetTouches[0] : t, s = -(e - this.touchStart.x) * this.touchMultiplier, r = -(i - this.touchStart.y) * this.touchMultiplier;
                        this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                            x: s,
                            y: r
                        }, this.emitter.emit("scroll", {
                            deltaX: s,
                            deltaY: r,
                            event: t
                        })
                    }, this.onTouchEnd = t => {
                        this.emitter.emit("scroll", {
                            deltaX: this.lastDelta.x,
                            deltaY: this.lastDelta.y,
                            event: t
                        })
                    }, this.onWheel = t => {
                        let {
                            deltaX: e,
                            deltaY: i
                        } = t;
                        this.normalizeWheel && (e = r(-100, e, 100), i = r(-100, i, 100)), e *= this.wheelMultiplier, i *= this.wheelMultiplier, this.emitter.emit("scroll", {
                            deltaX: e,
                            deltaY: i,
                            event: t
                        })
                    }, this.element = t, this.wheelMultiplier = e, this.touchMultiplier = i, this.normalizeWheel = s, this.touchStart = {
                        x: null,
                        y: null
                    }, this.emitter = new l, this.element.addEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.element.addEventListener("touchstart", this.onTouchStart, {
                        passive: !1
                    }), this.element.addEventListener("touchmove", this.onTouchMove, {
                        passive: !1
                    }), this.element.addEventListener("touchend", this.onTouchEnd, {
                        passive: !1
                    })
                }
                on(t, e) {
                    return this.emitter.on(t, e)
                }
                destroy() {
                    this.emitter.destroy(), this.element.removeEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.element.removeEventListener("touchstart", this.onTouchStart, {
                        passive: !1
                    }), this.element.removeEventListener("touchmove", this.onTouchMove, {
                        passive: !1
                    }), this.element.removeEventListener("touchend", this.onTouchEnd, {
                        passive: !1
                    })
                }
            }
            class a {
                constructor({
                    wrapper: t = window,
                    content: e = document.documentElement,
                    wheelEventsTarget: i = t,
                    eventsTarget: r = i,
                    smoothWheel: a = !0,
                    smoothTouch: c = !1,
                    syncTouch: u = !1,
                    syncTouchLerp: p = .1,
                    __iosNoInertiaSyncTouchLerp: d = .4,
                    touchInertiaMultiplier: m = 35,
                    duration: g,
                    easing: f = t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    lerp: v = !g && .1,
                    infinite: w = !1,
                    orientation: S = "vertical",
                    gestureOrientation: _ = "vertical",
                    touchMultiplier: y = 1,
                    wheelMultiplier: k = 1,
                    normalizeWheel: b = !1,
                    autoResize: x = !0
                } = {}) {
                    this.onVirtualScroll = ({
                        deltaX: t,
                        deltaY: e,
                        event: i
                    }) => {
                        if (i.ctrlKey) return;
                        let r = i.type.includes("touch"),
                            n = i.type.includes("wheel");
                        if ("both" === this.options.gestureOrientation && 0 === t && 0 === e || "vertical" === this.options.gestureOrientation && 0 === e || "horizontal" === this.options.gestureOrientation && 0 === t || r && "vertical" === this.options.gestureOrientation && 0 === this.scroll && !this.options.infinite && e <= 0) return;
                        let o = i.composedPath();
                        if ((o = o.slice(0, o.indexOf(this.rootElement))).find(t => {
                                var e;
                                return (null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent")) || r && (null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent-touch")) || n && (null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent-wheel")) || (null == (e = t.classList) ? void 0 : e.contains("lenis"))
                            })) return;
                        if (this.isStopped || this.isLocked) return void i.preventDefault();
                        if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && r || this.options.smoothWheel && n, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
                        i.preventDefault();
                        let l = e;
                        "both" === this.options.gestureOrientation ? l = Math.abs(e) > Math.abs(t) ? e : t : "horizontal" === this.options.gestureOrientation && (l = t);
                        let h = r && this.options.syncTouch,
                            a = r && "touchend" === i.type && Math.abs(l) > 1;
                        a && (l = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + l, s({
                            programmatic: !1
                        }, h && {
                            lerp: a ? this.syncTouchLerp : this.options.__iosNoInertiaSyncTouchLerp
                        }))
                    }, this.onScroll = () => {
                        if (!this.isScrolling) {
                            let t = this.animatedScroll;
                            this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - t), this.emit()
                        }
                    }, window.lenisVersion = "1.0.27", t !== document.documentElement && t !== document.body || (t = window), this.options = {
                        wrapper: t,
                        content: e,
                        wheelEventsTarget: i,
                        eventsTarget: r,
                        smoothWheel: a,
                        smoothTouch: c,
                        syncTouch: u,
                        syncTouchLerp: p,
                        __iosNoInertiaSyncTouchLerp: d,
                        touchInertiaMultiplier: m,
                        duration: g,
                        easing: f,
                        lerp: v,
                        infinite: w,
                        gestureOrientation: _,
                        orientation: S,
                        touchMultiplier: y,
                        wheelMultiplier: k,
                        normalizeWheel: b,
                        autoResize: x
                    }, this.animate = new n, this.emitter = new l, this.dimensions = new o({
                        wrapper: t,
                        content: e,
                        autoResize: x
                    }), this.toggleClass("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = u || a || c, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onScroll, {
                        passive: !1
                    }), this.virtualScroll = new h(r, {
                        touchMultiplier: y,
                        wheelMultiplier: k,
                        normalizeWheel: b
                    }), this.virtualScroll.on("scroll", this.onVirtualScroll)
                }
                destroy() {
                    this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onScroll, {
                        passive: !1
                    }), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClass("lenis", !1), this.toggleClass("lenis-smooth", !1), this.toggleClass("lenis-scrolling", !1), this.toggleClass("lenis-stopped", !1), this.toggleClass("lenis-locked", !1)
                }
                on(t, e) {
                    return this.emitter.on(t, e)
                }
                off(t, e) {
                    return this.emitter.off(t, e)
                }
                setScroll(t) {
                    this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
                }
                resize() {
                    this.dimensions.resize()
                }
                emit() {
                    this.emitter.emit("scroll", this)
                }
                reset() {
                    this.isLocked = !1, this.isScrolling = !1, this.velocity = 0, this.animate.stop()
                }
                start() {
                    this.isStopped = !1, this.reset()
                }
                stop() {
                    this.isStopped = !0, this.animate.stop(), this.reset()
                }
                raf(t) {
                    let e = t - (this.time || t);
                    this.time = t, this.animate.advance(.001 * e)
                }
                scrollTo(t, {
                    offset: e = 0,
                    immediate: i = !1,
                    lock: s = !1,
                    duration: n = this.options.duration,
                    easing: o = this.options.easing,
                    lerp: l = !n && this.options.lerp,
                    onComplete: h = null,
                    force: a = !1,
                    programmatic: c = !0
                } = {}) {
                    if (!this.isStopped && !this.isLocked || a) {
                        if (["top", "left", "start"].includes(t)) t = 0;
                        else if (["bottom", "right", "end"].includes(t)) t = this.limit;
                        else {
                            var u;
                            let i;
                            if ("string" == typeof t ? i = document.querySelector(t) : null != (u = t) && u.nodeType && (i = t), i) {
                                if (this.options.wrapper !== window) {
                                    let t = this.options.wrapper.getBoundingClientRect();
                                    e -= this.isHorizontal ? t.left : t.top
                                }
                                let s = i.getBoundingClientRect();
                                t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll
                            }
                        }
                        if ("number" == typeof t) {
                            if (t += e, t = Math.round(t), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : t = r(0, t, this.limit), i) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), void(null == h || h(this));
                            if (!c) {
                                if (t === this.targetScroll) return;
                                this.targetScroll = t
                            }
                            this.animate.fromTo(this.animatedScroll, t, {
                                duration: n,
                                easing: o,
                                lerp: l,
                                onStart: () => {
                                    s && (this.isLocked = !0), this.isScrolling = !0
                                },
                                onUpdate: (t, e) => {
                                    this.isScrolling = !0, this.velocity = t - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t, this.setScroll(this.scroll), c && (this.targetScroll = t), e || this.emit(), e && requestAnimationFrame(() => {
                                        this.reset(), this.emit(), null == h || h(this)
                                    })
                                }
                            })
                        }
                    }
                }
                get rootElement() {
                    return this.options.wrapper === window ? this.options.content : this.options.wrapper
                }
                get limit() {
                    return this.dimensions.limit[this.isHorizontal ? "x" : "y"]
                }
                get isHorizontal() {
                    return "horizontal" === this.options.orientation
                }
                get actualScroll() {
                    return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
                }
                get scroll() {
                    var t;
                    return this.options.infinite ? (this.animatedScroll % (t = this.limit) + t) % t : this.animatedScroll
                }
                get progress() {
                    return 0 === this.limit ? 1 : this.scroll / this.limit
                }
                get isSmooth() {
                    return this.__isSmooth
                }
                set isSmooth(t) {
                    this.__isSmooth !== t && (this.__isSmooth = t, this.toggleClass("lenis-smooth", t))
                }
                get isScrolling() {
                    return this.__isScrolling
                }
                set isScrolling(t) {
                    this.__isScrolling !== t && (this.__isScrolling = t, this.toggleClass("lenis-scrolling", t))
                }
                get isStopped() {
                    return this.__isStopped
                }
                set isStopped(t) {
                    this.__isStopped !== t && (this.__isStopped = t, this.toggleClass("lenis-stopped", t))
                }
                get isLocked() {
                    return this.__isLocked
                }
                set isLocked(t) {
                    this.__isLocked !== t && (this.__isLocked = t, this.toggleClass("lenis-locked", t))
                }
                get className() {
                    let t = "lenis";
                    return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), this.isSmooth && (t += " lenis-smooth"), t
                }
                toggleClass(t, e) {
                    this.rootElement.classList.toggle(t, e), this.emitter.emit("className change", this)
                }
            }
        },
        78868: function(t, e, i) {
            "use strict";
            i.d(e, {
                Y: function() {
                    return o
                }
            });
            var s = i(2265),
                r = i(37636);
            let n = {
                some: 0,
                all: 1
            };

            function o(t, {
                root: e,
                margin: i,
                amount: o,
                once: l = !1
            } = {}) {
                let [h, a] = (0, s.useState)(!1);
                return (0, s.useEffect)(() => {
                    if (!t.current || l && h) return;
                    let s = {
                        root: e && e.current || void 0,
                        margin: i,
                        amount: o
                    };
                    return function(t, e, {
                        root: i,
                        margin: s,
                        amount: o = "some"
                    } = {}) {
                        let l = (0, r.I)(t),
                            h = new WeakMap,
                            a = new IntersectionObserver(t => {
                                t.forEach(t => {
                                    let i = h.get(t.target);
                                    if (!!i !== t.isIntersecting) {
                                        if (t.isIntersecting) {
                                            let i = e(t);
                                            "function" == typeof i ? h.set(t.target, i) : a.unobserve(t.target)
                                        } else i && (i(t), h.delete(t.target))
                                    }
                                })
                            }, {
                                root: i,
                                rootMargin: s,
                                threshold: "number" == typeof o ? o : n[o]
                            });
                        return l.forEach(t => a.observe(t)), () => a.disconnect()
                    }(t.current, () => (a(!0), l ? void 0 : () => a(!1)), s)
                }, [e, t, i, l]), h
            }
        }
    }
]);