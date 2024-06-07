(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [987], {
        66782: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                PageTransition: function() {
                    return s
                },
                PageTransitionContext: function() {
                    return o
                },
                PageTransitionContextProvider: function() {
                    return c
                },
                PageTransitionWithNewContext: function() {
                    return d
                }
            });
            var n = r(57437),
                i = r(84666),
                a = r(2265);
            let o = (0, a.createContext)({
                    isExiting: !1,
                    setIsExiting: () => null,
                    startExitTransition: () => null,
                    onExitComplete: () => null,
                    setRouteFn: () => null
                }),
                c = t => {
                    let {
                        children: e
                    } = t, [r, i] = (0, a.useState)(!1), c = (0, a.useRef)(() => {
                        console.error("Default `routeFn()`. PageTransitionContext.setRouteFn was not called by the time the exit transition finished.")
                    });
                    return (0, n.jsx)(o.Provider, {
                        value: {
                            isExiting: r,
                            setIsExiting: i,
                            startExitTransition: () => {
                                i(!0)
                            },
                            setRouteFn: t => {
                                c.current = t
                            },
                            onExitComplete: () => {
                                c.current()
                            }
                        },
                        children: e
                    })
                },
                s = t => {
                    let {
                        children: e,
                        initial: r
                    } = t, c = (0, a.useContext)(o);
                    return (0, n.jsx)(i.M, {
                        onExitComplete: c.onExitComplete,
                        initial: r,
                        children: !c.isExiting && e
                    })
                },
                d = t => (0, n.jsx)(c, {
                    children: (0, n.jsx)(s, { ...t
                    })
                })
        },
        4628: function(t, e, r) {
            "use strict";
            r.d(e, {
                Y: function() {
                    return d
                }
            });
            var n = r(57437),
                i = r(89539),
                a = r(66782),
                o = r(91414),
                c = r(24033),
                s = r(2265);
            let d = (0, s.forwardRef)((t, e) => {
                let {
                    onClick: r,
                    ...d
                } = t, u = (0, s.useContext)(a.PageTransitionContext), l = (0, c.useRouter)(), h = (0, c.usePathname)(), p = d.replace ? l.replace : l.push;
                if (!u) throw Error("Cannot find PageTransitionContext. Please ensure that <PageTransitionLink> appears as a descendant of <PageTransition>.");
                return (0, n.jsx)(i.r, {
                    ref: e,
                    onClick: function(t) {
                        t.preventDefault(), r && r(t), u && h && decodeURI(h) !== decodeURI(d.href) && (l.prefetch(d.href, {
                            kind: o.PrefetchKind.FULL
                        }), u.setRouteFn(() => p(d.href, {
                            scroll: d.scroll
                        })), u.startExitTransition())
                    },
                    ...d
                })
            });
            d.displayName = "PageTransitionLink"
        },
        81558: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                Picture: function() {
                    return l
                }
            });
            var n = r(57437);

            function i(t, e) {
                let r = Object.entries(e).filter(t => t[1]).map(t => "&" + t[0] + "=" + t[1]).join("");
                return "https://wsrv.nl/?url=" + encodeURIComponent(t) + r
            }

            function a(t, e) {
                let r = [],
                    n = {};
                return "contain" === e.fit && (r.push("fit-in"), n.fill = "transparent"), e.dpr && (e.width *= e.dpr, e.height *= e.dpr), r.push("".concat(e.width, "x").concat(e.height)), e.output && (n.format = e.output), e.quality && (n.quality = String(e.quality)), Object.keys(n).length > 0 && r.push("filters:" + Object.entries(n).map(t => {
                    let [e, r] = t;
                    return "".concat(e, "(").concat(r, ")")
                }).join(":")), t + "/m/" + r.join("/")
            }
            var o = r(57042),
                c = r(2265),
                s = r(54887),
                d = r(18752),
                u = r.n(d);

            function l(t) {
                let {
                    src: e,
                    alt: r,
                    width: d,
                    height: l,
                    crop: h = !!l,
                    preload: p = !1,
                    eager: _ = !1,
                    sizes: w = {},
                    pixelDensities: m = [1, 2],
                    responsive: v = !1,
                    quality: g = 80,
                    className: f,
                    imgClassName: k,
                    imgProps: x,
                    params: C,
                    ...y
                } = t, j = Object.keys(w = {
                    0: {
                        width: d,
                        height: l
                    },
                    ...w
                }).map(t => Number(t)), b = (null == e ? void 0 : e.startsWith("https://a-us.storyblok.com")) ? a : i, W = b(e, { ...C,
                    fit: (null == C ? void 0 : C.crop) || !h ? "contain" : "cover",
                    quality: g,
                    width: d,
                    height: l
                }), P = (0, c.useRef)(null), [E, N] = (0, c.useState)(!1);
                return (0, c.useEffect)(() => {
                    P.current && N(!P.current.complete)
                }, []), e ? (0, n.jsxs)("picture", {
                    className: (0, o.Z)(u().picture, v && u()["picture--responsive"], E && "loading", f),
                    ...y,
                    children: [
                        ["default"].map(t => (0, n.jsx)(c.Fragment, {
                            children: Object.entries(w).map((r, i) => {
                                let [a, o] = r, c = m.map(r => "".concat(b(e, { ...C,
                                    fit: (null == C ? void 0 : C.crop) || !h ? "contain" : "cover",
                                    width: o.width,
                                    height: o.height,
                                    output: "default" !== t ? t : void 0,
                                    dpr: r,
                                    quality: g
                                }))).map((t, e) => "".concat(t, " ").concat(m[e], "x")).join(", "), d = "", u = j[i + 1], l = a && "".concat(a, "px"), _ = u && "".concat(u - 1, "px");
                                l && (d += "(min-width: ".concat(l, ")")), l && _ && (d += " and "), _ && (d += "(max-width: ".concat(_, ")"));
                                let w = "".concat(e, "-").concat(t, "-").concat(o.width, "-").concat(o.height, "-").concat(a);
                                return p && "default" !== t && s.preload(W, {
                                    key: w,
                                    as: "image",
                                    imageSrcSet: c,
                                    media: d,
                                    type: "image/" + t
                                }), (0, n.jsx)("source", {
                                    srcSet: c,
                                    media: d,
                                    type: "default" !== t ? "image/" + t : void 0
                                }, w)
                            })
                        }, t)), (0, n.jsx)("img", {
                            src: W,
                            loading: p || _ ? "eager" : "lazy",
                            width: d || void 0,
                            height: l || void 0,
                            alt: null != r ? r : "",
                            className: (0, o.Z)(u().img, k),
                            draggable: !1,
                            onLoad: () => N(!1),
                            ref: P,
                            ...x
                        })
                    ]
                }) : null
            }
        },
        24274: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                WaypointStaggerContext: function() {
                    return o
                },
                WaypointStaggerProvider: function() {
                    return c
                }
            });
            var n = r(57437),
                i = r(83151),
                a = r(2265);
            let o = (0, a.createContext)({
                    addToStaggerQueue: () => 0,
                    removeFromStaggerQueue: () => null,
                    clearStaggerQueue: () => null,
                    viewportMargin: {
                        current: "0%"
                    }
                }),
                c = t => {
                    let {
                        children: e,
                        viewportMargin: r = i.b.waypoint.viewport.margin
                    } = t, c = (0, a.useRef)({}), s = (0, a.useRef)(r);

                    function d() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                        c.current[t] = 0
                    }
                    return (0, n.jsx)(o.Provider, {
                        value: {
                            addToStaggerQueue: function() {
                                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                                return void 0 === c.current[t] && d(t), c.current[t]++
                            },
                            removeFromStaggerQueue: function() {
                                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                                c.current[t]--
                            },
                            clearStaggerQueue: d,
                            viewportMargin: s
                        },
                        children: e
                    })
                }
        },
        52987: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                WorkCard: function() {
                    return g
                }
            });
            var n = r(57437),
                i = r(89539),
                a = r(4628),
                o = r(81558),
                c = r(45051),
                s = r(57042),
                d = r(26522),
                u = r(50728),
                l = r(78868),
                h = r(95090),
                p = r(2265),
                _ = r(94392),
                w = r.n(_),
                m = r(2342);
            let v = {
                    landscape: {
                        outer: {
                            aspectX: 1452,
                            aspectY: 890,
                            width: 450,
                            height: Math.round(330),
                            sizes: {
                                480: {
                                    width: 932,
                                    height: Math.round(571 * 1.2)
                                },
                                992: {
                                    width: 1452,
                                    height: Math.round(1068)
                                },
                                1513: {
                                    width: 1905,
                                    height: Math.round(1401.6)
                                }
                            }
                        },
                        inner: {
                            width: 312,
                            height: 178,
                            sizes: {
                                480: {
                                    width: 647,
                                    height: 370
                                },
                                992: {
                                    width: 1008,
                                    height: 576
                                },
                                1513: {
                                    width: 1322,
                                    height: 755
                                }
                            }
                        }
                    },
                    portrait: {
                        outer: {
                            aspectX: 710,
                            aspectY: 890,
                            width: 450,
                            height: Math.round(676.8),
                            sizes: {
                                480: {
                                    width: 932,
                                    height: Math.round(1401.6)
                                },
                                992: {
                                    width: 710,
                                    height: Math.round(1068)
                                },
                                1513: {
                                    width: 933,
                                    height: Math.round(1402.8)
                                }
                            }
                        },
                        inner: {
                            width: 171,
                            height: 369,
                            sizes: {
                                480: {
                                    width: 355,
                                    height: 765
                                },
                                992: {
                                    width: 270,
                                    height: 582
                                },
                                1680: {
                                    width: 355,
                                    height: 765
                                }
                            }
                        }
                    }
                },
                g = t => {
                    var e, r;
                    let {
                        project: _,
                        orientation: g,
                        className: f,
                        scrollRef: k,
                        pageTransitionLink: x,
                        linkProps: C,
                        ...y
                    } = t, j = "landscape" === g, b = {
                        image: j ? _.content.landscape_outer_image : _.content.portrait_outer_image,
                        video: j ? _.content.landscape_outer_vimeo : _.content.portrait_outer_vimeo
                    }, W = j ? _.content.landscape_text_color : _.content.portrait_text_color, P = {
                        image: j ? _.content.landscape_inner_image : _.content.portrait_inner_image,
                        video: j ? _.content.landscape_inner_vimeo : _.content.portrait_inner_vimeo
                    }, E = (0, c.n)(), N = (0, p.useRef)(null), {
                        scrollYProgress: I
                    } = (0, d.v)({
                        target: N,
                        offset: ["start end", "end start"],
                        container: k,
                        layoutEffect: !1
                    }), S = (0, m.m)(992), T = (0, u.H)(I, [0, 1], S ? ["-50%", "-50%"] : ["-60%", "-40%"]), R = (0, l.Y)(N, {
                        margin: "100% 0px 100% 0px",
                        once: !0
                    }), Y = x ? a.Y : i.r;
                    return (0, n.jsx)(h.E.div, {
                        className: (0, s.Z)(w()["work-card-wrapper"], f),
                        ...E,
                        ...y,
                        ref: N,
                        style: {
                            "--aspect-x": v[g].outer.aspectX,
                            "--aspect-y": v[g].outer.aspectY
                        },
                        children: (0, n.jsxs)(Y, {
                            scroll: !1,
                            href: "/work/".concat(_.slug),
                            className: (0, s.Z)(w()["work-card"], w()["work-card--".concat(g)], f),
                            ...C,
                            children: [(0, n.jsxs)("div", {
                                className: w()["work-card__thumbnail-wrapper"],
                                children: [(0, n.jsxs)(h.E.div, {
                                    className: w()["work-card__thumbnail-outer"],
                                    style: {
                                        y: T
                                    },
                                    children: [(0, n.jsx)(o.Picture, {
                                        className: w()["work-card__picture"],
                                        src: b.image.filename,
                                        alt: b.image.alt,
                                        width: v[g].outer.width,
                                        height: v[g].outer.height,
                                        sizes: v[g].outer.sizes
                                    }), b.video && !S && (0, n.jsx)("video", {
                                        className: w()["work-card__video"],
                                        src: R ? b.video : void 0,
                                        muted: !0,
                                        autoPlay: !0,
                                        loop: !0,
                                        playsInline: !0
                                    })]
                                }), ((null === (e = P.image) || void 0 === e ? void 0 : e.filename) || P.video) && (0, n.jsxs)("div", {
                                    className: w()["work-card__thumbnail-inner"],
                                    children: [(null === (r = P.image) || void 0 === r ? void 0 : r.filename) && (0, n.jsx)(o.Picture, {
                                        className: w()["work-card__picture"],
                                        src: P.image.filename,
                                        alt: P.image.alt,
                                        width: v[g].inner.width,
                                        height: v[g].inner.height,
                                        sizes: v[g].inner.sizes
                                    }), P.video && !S && (0, n.jsx)("video", {
                                        className: w()["work-card__video"],
                                        src: R ? P.video : void 0,
                                        muted: !0,
                                        autoPlay: !0,
                                        loop: !0,
                                        playsInline: !0
                                    })]
                                })]
                            }), (0, n.jsx)("div", {
                                className: (0, s.Z)(w()["work-card__content"], w()["work-card__content--".concat(null != W ? W : "white")]),
                                children: (0, n.jsx)("div", {
                                    className: w()["work-card__content-inner"],
                                    children: (0, n.jsx)("h3", {
                                        className: w()["work-card__title"],
                                        children: _.content.title
                                    })
                                })
                            })]
                        })
                    })
                }
        },
        2342: function(t, e, r) {
            "use strict";
            r.d(e, {
                m: function() {
                    return i
                }
            });
            var n = r(2265);
            let i = t => {
                let [e, r] = (0, n.useState)(!1), i = () => {
                    e && window.innerWidth >= t ? r(!1) : !e && window.innerWidth < t && r(!0)
                };
                return (0, n.useEffect)(() => (i(), window.addEventListener("resize", i), () => {
                    window.removeEventListener("resize", i)
                })), e
            }
        },
        45051: function(t, e, r) {
            "use strict";
            r.d(e, {
                n: function() {
                    return o
                }
            });
            var n = r(24274),
                i = r(83151),
                a = r(2265);

            function o() {
                var t, e, r;
                let {
                    key: o,
                    onViewportEnter: c,
                    ...s
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [d, u] = (0, a.useState)(), {
                    addToStaggerQueue: l,
                    removeFromStaggerQueue: h,
                    viewportMargin: p
                } = (0, a.useContext)(n.WaypointStaggerContext), _ = {
                    initial: i.b.stepInBottom.variants.inactive,
                    animate: i.b.stepInBottom.variants.active,
                    viewport: { ...i.b.waypoint.viewport,
                        margin: p.current
                    },
                    transition: i.b.stepInBottom.transition
                };
                return {
                    viewport: null !== (t = s.viewport) && void 0 !== t ? t : _.viewport,
                    initial: null !== (e = s.initial) && void 0 !== e ? e : _.initial,
                    animate: void 0 !== d ? null !== (r = s.animate) && void 0 !== r ? r : _.animate : void 0,
                    transition: { ..._.transition,
                        ...s.transition,
                        delay: d
                    },
                    onViewportEnter: function() {
                        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        void 0 === d && (u(.1 * l(o)), setTimeout(() => h(o), 0)), c && c(...e)
                    }
                }
            }
        },
        83151: function(t, e, r) {
            "use strict";
            r.d(e, {
                b: function() {
                    return i
                }
            });
            let n = {
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
                        transition: n,
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
                        transition: n,
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
                        transition: n,
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
                        transition: n,
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
                        transition: n,
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
        18752: function(t) {
            t.exports = {
                picture: "Picture_picture__X3Eos",
                "picture--responsive": "Picture_picture--responsive__gDfjI"
            }
        },
        94392: function(t) {
            t.exports = {
                "work-card-wrapper": "WorkCard_work-card-wrapper__7mGrZ",
                "work-card": "WorkCard_work-card__Z7y63",
                "work-card__thumbnail": "WorkCard_work-card__thumbnail__kDxlY",
                "work-card__thumbnail-wrapper": "WorkCard_work-card__thumbnail-wrapper__DZTs2",
                "work-card__thumbnail-outer": "WorkCard_work-card__thumbnail-outer__kJvp9",
                "work-card__picture": "WorkCard_work-card__picture__CqjRI",
                pulse: "WorkCard_pulse__K_k7e",
                "work-card__thumbnail-inner": "WorkCard_work-card__thumbnail-inner__YScRN",
                "work-card--landscape": "WorkCard_work-card--landscape__cw0_a",
                "work-card--portrait": "WorkCard_work-card--portrait__WHYgm",
                "work-card__video": "WorkCard_work-card__video__hb14D",
                "work-card__content": "WorkCard_work-card__content__Br9N4",
                "work-card__content--white": "WorkCard_work-card__content--white__ISlcm",
                "work-card__content--black": "WorkCard_work-card__content--black__mhLGY",
                "work-card__content-inner": "WorkCard_work-card__content-inner__8Mqvf",
                "work-card__title": "WorkCard_work-card__title__vsvFl"
            }
        }
    }
]);