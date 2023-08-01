import { defineComponent as B, ref as V, watchEffect as z, computed as g, openBlock as o, createElementBlock as _, mergeProps as O, toHandlers as R, Fragment as D, renderList as G, renderSlot as u, normalizeClass as r, createElementVNode as b, watch as W, unref as n, createBlock as P, withCtx as f, createTextVNode as p, toDisplayString as q, createCommentVNode as w, createVNode as M, withModifiers as F } from "vue";
const A = ["value"], J = ["value"], K = /* @__PURE__ */ B({
  __name: "PageSelect",
  props: {
    totalPages: { type: Number, required: !0 },
    current: { type: Number, required: !0 },
    rounded: { type: Boolean, required: !1, default: !1 },
    selectClass: { type: String, required: !1, default: "" }
  },
  emits: ["input"],
  setup(t, { emit: l }) {
    const s = t, y = V();
    z(() => {
      y.value = s.current;
    });
    const d = g(() => {
      const i = [];
      for (let k = 1; k <= s.totalPages; k++)
        i.push(k);
      return i;
    }), v = (i) => {
      l("input", parseInt(i.currentTarget.value));
    }, h = g(() => s.selectClass ? "" : `pg-rounded-full pg-border
                pg-mr-1 pg-inline-flex pg-justify-center pg-items-center`);
    return (i, k) => (o(), _("select", O({
      value: y.value,
      class: `
                ${t.selectClass || `pg__link--select pg-text-sm pg-border-slate-300 dark:pg-border-slate-600
                    pg-border pg-pl-2 pg-pr-6`}
                ${t.rounded ? h.value : ""}
            `,
      onChange: v
    }, R({ ...i.$attrs }, !0)), [
      (o(!0), _(D, null, G(d.value, (m) => (o(), _("option", {
        key: `pg-page-select-${m}`,
        value: m
      }, [
        u(i.$slots, "default", { page: m })
      ], 8, J))), 128))
    ], 16, A));
  }
}), Q = /* @__PURE__ */ B({
  __name: "PaginationInfo",
  props: {
    infoClass: { type: String, required: !1, default: "" }
  },
  setup(t) {
    return (l, s) => (o(), _("p", {
      class: r(t.infoClass || "pg__info pg-text-sm")
    }, [
      u(l.$slots, "default")
    ], 2));
  }
}), $ = /* @__PURE__ */ B({
  __name: "PaginationLink",
  props: {
    active: { type: Boolean, required: !1, default: !1 },
    disabled: { type: Boolean, required: !1, default: !1 },
    rounded: { type: Boolean, required: !1, default: !1 },
    classes: { type: Object, required: !1, default: () => ({}) }
  },
  setup(t) {
    const l = t, s = g(() => {
      var d, v, h;
      return l.active ? ((d = l.classes) == null ? void 0 : d.active) || `
                pg__link--active pg-bg-slate-400 dark:pg-bg-slate-500 pg-text-slate-100 dark:pg-text-slate-300
            ` : l.disabled ? ((v = l.classes) == null ? void 0 : v.disabled) || `
                pg__link--disabled pg-cursor-not-allowed pg-opacity-50
                pg-bg-slate-100 dark:pg-bg-slate-700 pg-text-slate-600 dark:pg-text-slate-400
            ` : ((h = l.classes) == null ? void 0 : h.link) || `
            hover:pg-bg-slate-200 dark:hover:pg-bg-slate-600 pg-transition pg-duration-200 pg-ease-in-out
        `;
    }), y = g(() => {
      var d;
      return (d = l.classes) != null && d.link ? "" : `pg-rounded-full pg-border
                pg-mr-1 pg-inline-flex pg-justify-center pg-items-center pg-w-[2.5rem] pg-h-[2.5rem]`;
    });
    return (d, v) => (o(), _("button", {
      type: "button",
      class: r(
        `
                ${t.classes.link ? "" : "pg__link pg-text-sm pg-border-slate-300 dark:pg-border-slate-600"}
                ${s.value}
                ${t.rounded ? y.value : "pg-px-4 pg-py-2"}`
      )
    }, [
      u(d.$slots, "default")
    ], 2));
  }
}), U = /* @__PURE__ */ B({
  __name: "PaginationNav",
  props: {
    rounded: { type: Boolean, required: !1, default: !1 },
    navClass: { type: String, required: !1, default: "" }
  },
  setup(t) {
    return (l, s) => (o(), _("nav", {
      class: r([
        t.navClass || "pg__nav pg-border-slate-300 dark:pg-border-slate-600 pg-flex pg-flex-nowrap",
        { "pg-rounded pg-border pg-shadow-sm": !t.rounded }
      ])
    }, [
      u(l.$slots, "default")
    ], 2));
  }
}), X = ["data-theme"], Y = /* @__PURE__ */ B({
  __name: "PaginationWrapper",
  props: {
    darkMode: { type: Boolean, required: !1, default: !1 },
    wrapperClass: { type: String, required: !1, default: "" }
  },
  setup(t) {
    return (l, s) => (o(), _("div", {
      "data-theme": t.darkMode ? "dark" : "light",
      class: "pg__pagination"
    }, [
      b("div", {
        class: r(t.wrapperClass || `pg__wrapper pg-py-4 pg-px-4
                    pg-bg-white dark:pg-bg-slate-700
                    pg-text-slate-500 dark:pg-text-slate-300
                    pg-flex pg-items-center pg-justify-between`)
      }, [
        u(l.$slots, "default")
      ], 2)
    ], 8, X));
  }
}), Z = (t) => {
  const l = V(t.current), s = g(() => Math.ceil(t.total / t.perPage)), y = g(() => (t.current - 1) * t.perPage + 1), d = g(() => t.total > t.current * t.perPage ? t.current * t.perPage : t.total), v = g(() => t.current === 1), h = g(() => t.current === s.value), i = g(() => {
    const a = t.current - Math.floor(t.maxButtons / 2);
    return Math.min(Math.max(a, 1), s.value - t.maxButtons + 1);
  }), k = g(() => {
    const a = Math.max(t.current + Math.floor(t.maxButtons / 2), t.maxButtons);
    return Math.min(a, s.value);
  }), m = g(() => {
    const a = [];
    for (let e = i.value; e <= k.value; e++)
      e > 0 && a.push(e);
    return a;
  }), T = (a) => a === "LEFT" ? !m.value.includes(1) : !m.value.includes(s.value), C = (a) => {
    l.value = a;
  };
  return {
    selectedPage: l,
    totalPages: s,
    currentStart: y,
    currentEnd: d,
    isInFirstPage: v,
    isInLastPage: h,
    gotoPageNumber: C,
    gotoFirstPage: () => C(1),
    gotoLastPage: () => C(s.value),
    gotoNextPage: () => C(t.current >= s.value ? s.value : t.current + 1),
    gotoPreviousPage: () => C(t.current <= 1 ? 1 : t.current - 1),
    startPage: i,
    endPage: k,
    pages: m,
    showDots: T
  };
}, ee = ["textContent"], te = ["textContent"], se = ["textContent"], ae = /* @__PURE__ */ b("span", { class: "pg-sr-only" }, "Go to first", -1), le = /* @__PURE__ */ b("span", { class: "pg-sr-only" }, "Previous", -1), ne = /* @__PURE__ */ b("span", { class: "pg-sr-only" }, "Next", -1), re = /* @__PURE__ */ b("span", { class: "pg-sr-only" }, "Go to Last", -1), de = /* @__PURE__ */ B({
  __name: "Pagination",
  props: {
    total: {},
    perPage: {},
    current: { default: 1 },
    maxButtons: { default: 5 },
    hideInfo: { type: Boolean, default: !1 },
    hideFirstLast: { type: Boolean, default: !1 },
    darkMode: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    formatter: { type: Function, default: (t) => t },
    wrapperClass: { default: "" },
    infoClass: { default: "" },
    infoHighlightClass: { default: "" },
    navClass: { default: "" },
    linkClass: { default: "" },
    activeLinkClass: { default: "" },
    disabledLinkClass: { default: "" },
    linkTypeClass: { default: void 0 }
  },
  emits: ["change"],
  setup(t, { emit: l }) {
    const s = t, {
      selectedPage: y,
      totalPages: d,
      currentStart: v,
      currentEnd: h,
      isInFirstPage: i,
      isInLastPage: k,
      gotoPageNumber: m,
      gotoFirstPage: T,
      gotoLastPage: C,
      gotoNextPage: E,
      gotoPreviousPage: H,
      pages: j,
      showDots: I
    } = Z(s), a = g(() => {
      var e, S, L, N, c, x;
      return {
        link: s.linkClass,
        active: s.activeLinkClass,
        disabled: s.disabledLinkClass,
        type: {
          first: ((e = s.linkTypeClass) == null ? void 0 : e.first) || "",
          last: ((S = s.linkTypeClass) == null ? void 0 : S.last) || "",
          previous: ((L = s.linkTypeClass) == null ? void 0 : L.previous) || "",
          next: ((N = s.linkTypeClass) == null ? void 0 : N.next) || "",
          divider: ((c = s.linkTypeClass) == null ? void 0 : c.divider) || "",
          select: ((x = s.linkTypeClass) == null ? void 0 : x.select) || ""
        }
      };
    });
    return W(y, (e) => {
      l("change", e);
    }), (e, S) => n(d) > 1 ? (o(), P(Y, {
      key: 0,
      "wrapper-class": e.wrapperClass,
      "dark-mode": e.darkMode
    }, {
      default: f(() => [
        e.hideInfo ? w("", !0) : (o(), P(Q, {
          key: 0,
          "info-class": e.infoClass
        }, {
          default: f(() => [
            u(e.$slots, "info", {
              start: n(v),
              end: n(h),
              total: e.total
            }, () => [
              p(" Showing "),
              b("span", {
                class: r(e.infoHighlightClass || "pg-font-bold"),
                textContent: q(n(v))
              }, null, 10, ee),
              p(" to "),
              b("span", {
                class: r(e.infoHighlightClass || "pg-font-bold"),
                textContent: q(n(h))
              }, null, 10, te),
              p(" out of "),
              b("span", {
                class: r(e.infoHighlightClass || "pg-font-bold"),
                textContent: q(e.total)
              }, null, 10, se),
              p(" results. ")
            ])
          ]),
          _: 3
        }, 8, ["info-class"])),
        M(U, {
          rounded: e.rounded,
          "nav-class": e.navClass
        }, {
          default: f(() => {
            var L, N;
            return [
              e.hideFirstLast ? w("", !0) : (o(), P($, {
                key: "pg-first",
                class: r(a.value.type.first || "pg__link--first  pg-border-r"),
                classes: a.value,
                disabled: n(i),
                rounded: e.rounded,
                onClick: F(n(T), ["prevent"])
              }, {
                default: f(() => [
                  u(e.$slots, "first", {}, () => [
                    ae,
                    p(" « ")
                  ])
                ]),
                _: 3
              }, 8, ["class", "classes", "disabled", "rounded", "onClick"])),
              M($, {
                key: "pg-previous",
                class: r(a.value.type.previous || "pg__link--previous pg-border-r"),
                classes: a.value,
                disabled: n(i),
                rounded: e.rounded,
                onClick: F(n(H), ["prevent"])
              }, {
                default: f(() => [
                  u(e.$slots, "previous", {}, () => [
                    le,
                    p(" ‹ ")
                  ])
                ]),
                _: 3
              }, 8, ["class", "classes", "disabled", "rounded", "onClick"]),
              n(I)("LEFT") ? (o(), P($, {
                key: "pg-divider-left",
                rounded: e.rounded,
                class: r(a.value.type.divider || "pg__dots--left pg-hidden md:pg-inline-block pg-border-r"),
                classes: a.value
              }, {
                default: f(() => [
                  u(e.$slots, "dots", {}, () => [
                    p(" ... ")
                  ])
                ]),
                _: 3
              }, 8, ["rounded", "class", "classes"])) : w("", !0),
              (o(!0), _(D, null, G(n(j), (c) => (o(), P($, {
                key: `pg-pages-${c}`,
                class: r(a.value.link ? "" : "pg-border-r pg-hidden md:pg-inline-block"),
                classes: a.value,
                disabled: c === e.current,
                active: c === e.current,
                rounded: e.rounded,
                onClick: F((x) => n(m)(c), ["prevent"])
              }, {
                default: f(() => [
                  u(e.$slots, "number", { pageNumber: c }, () => [
                    p(q(e.formatter(c)), 1)
                  ])
                ]),
                _: 2
              }, 1032, ["class", "classes", "disabled", "active", "rounded", "onClick"]))), 128)),
              M(K, {
                key: "pg-page-select",
                "total-pages": n(d),
                class: r(a.value.type.select ? "" : "md:pg-hidden"),
                "select-class": ((N = (L = a.value) == null ? void 0 : L.type) == null ? void 0 : N.select) || "",
                rounded: e.rounded,
                current: e.current,
                onInput: n(m)
              }, {
                default: f(({ page: c }) => [
                  u(e.$slots, "select-number", {
                    pageNumber: { page: c }
                  }, () => [
                    p(q(e.formatter(c)), 1)
                  ])
                ]),
                _: 3
              }, 8, ["total-pages", "class", "select-class", "rounded", "current", "onInput"]),
              n(I)("RIGHT") ? (o(), P($, {
                key: "pg-divider-right",
                rounded: e.rounded,
                class: r(a.value.type.divider || "pg__dots--right pg-border-r pg-hidden md:pg-inline-block"),
                classes: a.value
              }, {
                default: f(() => [
                  u(e.$slots, "dots", {}, () => [
                    p(" ... ")
                  ])
                ]),
                _: 3
              }, 8, ["rounded", "class", "classes"])) : w("", !0),
              M($, {
                key: "pg-next",
                class: r(a.value.type.next || "pg__link--next pg-border-r"),
                classes: a.value,
                disabled: n(k),
                rounded: e.rounded,
                onClick: F(n(E), ["prevent"])
              }, {
                default: f(() => [
                  u(e.$slots, "next", {}, () => [
                    ne,
                    p(" › ")
                  ])
                ]),
                _: 3
              }, 8, ["class", "classes", "disabled", "rounded", "onClick"]),
              e.hideFirstLast ? w("", !0) : (o(), P($, {
                key: "pg-last",
                class: r(a.value.type.last || "pg__link--last"),
                classes: a.value,
                disabled: n(k),
                rounded: e.rounded,
                onClick: F(n(C), ["prevent"])
              }, {
                default: f(() => [
                  u(e.$slots, "last", {}, () => [
                    re,
                    p(" » ")
                  ])
                ]),
                _: 3
              }, 8, ["class", "classes", "disabled", "rounded", "onClick"]))
            ];
          }),
          _: 3
        }, 8, ["rounded", "nav-class"])
      ]),
      _: 3
    }, 8, ["wrapper-class", "dark-mode"])) : w("", !0);
  }
});
export {
  de as Pagination
};
