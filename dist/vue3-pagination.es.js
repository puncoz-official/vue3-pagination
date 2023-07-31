import { defineComponent as w, ref as V, watchEffect as z, computed as i, openBlock as g, createElementBlock as y, mergeProps as O, toHandlers as R, Fragment as D, renderList as G, renderSlot as d, normalizeClass as r, createElementVNode as b, watch as W, unref as n, createBlock as L, withCtx as f, createTextVNode as p, toDisplayString as q, createCommentVNode as T, createVNode as $, withModifiers as M } from "vue";
const A = ["value"], J = ["value"], K = /* @__PURE__ */ w({
  __name: "PageSelect",
  props: {
    totalPages: { type: Number, required: !0 },
    current: { type: Number, required: !0 },
    rounded: { type: Boolean, required: !1, default: !1 },
    selectClass: { type: String, required: !1, default: "" }
  },
  emits: ["input"],
  setup(e, { emit: l }) {
    const s = e, h = V();
    z(() => {
      h.value = s.current;
    });
    const o = i(() => {
      const u = [];
      for (let k = 1; k <= s.totalPages; k++)
        u.push(k);
      return u;
    }), v = (u) => {
      l("input", parseInt(u.currentTarget.value));
    }, _ = i(() => s.selectClass ? "" : `pg-rounded-full pg-border
                pg-mr-1 pg-inline-flex pg-justify-center pg-items-center`);
    return (u, k) => (g(), y("select", O({
      value: h.value,
      class: `
                ${e.selectClass || `pg__link--select pg-text-sm pg-border-slate-300 dark:pg-border-slate-600
                    pg-border pg-pl-2 pg-pr-6`}
                ${e.rounded ? _.value : ""}
            `,
      onChange: v
    }, R({ ...u.$attrs }, !0)), [
      (g(!0), y(D, null, G(o.value, (m) => (g(), y("option", {
        key: `pg-page-select-${m}`,
        value: m
      }, [
        d(u.$slots, "default", { page: m })
      ], 8, J))), 128))
    ], 16, A));
  }
}), Q = /* @__PURE__ */ w({
  __name: "PaginationInfo",
  props: {
    infoClass: { type: String, required: !1, default: "" }
  },
  setup(e) {
    return (l, s) => (g(), y("p", {
      class: r(e.infoClass || "pg__info pg-text-sm")
    }, [
      d(l.$slots, "default")
    ], 2));
  }
}), P = /* @__PURE__ */ w({
  __name: "PaginationLink",
  props: {
    active: { type: Boolean, required: !1, default: !1 },
    disabled: { type: Boolean, required: !1, default: !1 },
    rounded: { type: Boolean, required: !1, default: !1 },
    classes: { type: Object, required: !1, default: () => ({}) }
  },
  setup(e) {
    const l = e, s = i(() => {
      var o, v, _;
      return l.active ? ((o = l.classes) == null ? void 0 : o.active) || `
                pg__link--active pg-bg-slate-400 dark:pg-bg-slate-500 pg-text-slate-100 dark:pg-text-slate-300
            ` : l.disabled ? ((v = l.classes) == null ? void 0 : v.disabled) || `
                pg__link--disabled pg-cursor-not-allowed pg-opacity-50
                pg-bg-slate-100 dark:pg-bg-slate-700 pg-text-slate-600 dark:pg-text-slate-400
            ` : ((_ = l.classes) == null ? void 0 : _.link) || `
            hover:pg-bg-slate-200 dark:hover:pg-bg-slate-600 pg-transition pg-duration-200 pg-ease-in-out
        `;
    }), h = i(() => {
      var o;
      return (o = l.classes) != null && o.link ? "" : `pg-rounded-full pg-border
                pg-mr-1 pg-inline-flex pg-justify-center pg-items-center pg-w-[2.5rem] pg-h-[2.5rem]`;
    });
    return (o, v) => (g(), y("button", {
      type: "button",
      class: r(
        `
                ${e.classes.link ? "" : "pg__link pg-text-sm pg-border-slate-300 dark:pg-border-slate-600"}
                ${s.value}
                ${e.rounded ? h.value : "pg-px-4 pg-py-2"}`
      )
    }, [
      d(o.$slots, "default")
    ], 2));
  }
}), U = /* @__PURE__ */ w({
  __name: "PaginationNav",
  props: {
    rounded: { type: Boolean, required: !1, default: !1 },
    navClass: { type: String, required: !1, default: "" }
  },
  setup(e) {
    return (l, s) => (g(), y("nav", {
      class: r([
        e.navClass || "pg__nav pg-border-slate-300 dark:pg-border-slate-600 pg-flex pg-flex-nowrap",
        { "pg-rounded pg-border pg-shadow-sm": !e.rounded }
      ])
    }, [
      d(l.$slots, "default")
    ], 2));
  }
}), X = ["data-theme"], Y = /* @__PURE__ */ w({
  __name: "PaginationWrapper",
  props: {
    darkMode: { type: Boolean, required: !1, default: !1 },
    wrapperClass: { type: String, required: !1, default: "" }
  },
  setup(e) {
    return (l, s) => (g(), y("div", {
      "data-theme": e.darkMode ? "dark" : "light",
      class: "pg__pagination"
    }, [
      b("div", {
        class: r(e.wrapperClass || `pg__wrapper pg-py-4 pg-px-4
                    pg-bg-white dark:pg-bg-slate-700
                    pg-text-slate-500 dark:pg-text-slate-300
                    pg-flex pg-items-center pg-justify-between`)
      }, [
        d(l.$slots, "default")
      ], 2)
    ], 8, X));
  }
}), Z = (e) => {
  const l = V(e.current), s = i(() => Math.ceil(e.total / e.perPage)), h = i(() => (e.current - 1) * e.perPage + 1), o = i(() => e.total > e.current * e.perPage ? e.current * e.perPage : e.total), v = i(() => e.current === 1), _ = i(() => e.current === s.value), u = i(() => {
    const a = e.current - Math.floor(e.maxButtons / 2);
    return Math.min(Math.max(a, 1), s.value - e.maxButtons + 1);
  }), k = i(() => {
    const a = Math.max(e.current + Math.floor(e.maxButtons / 2), e.maxButtons);
    return Math.min(a, s.value);
  }), m = i(() => {
    const a = [];
    for (let t = u.value; t <= k.value; t++)
      t > 0 && a.push(t);
    return a;
  }), x = (a) => a === "LEFT" ? !m.value.includes(1) : !m.value.includes(s.value), C = (a) => {
    l.value = a;
  };
  return {
    selectedPage: l,
    totalPages: s,
    currentStart: h,
    currentEnd: o,
    isInFirstPage: v,
    isInLastPage: _,
    gotoPageNumber: C,
    gotoFirstPage: () => C(1),
    gotoLastPage: () => C(s.value),
    gotoNextPage: () => C(e.current >= s.value ? s.value : e.current + 1),
    gotoPreviousPage: () => C(e.current <= 1 ? 1 : e.current - 1),
    startPage: u,
    endPage: k,
    pages: m,
    showDots: x
  };
}, ee = ["textContent"], te = ["textContent"], se = ["textContent"], ae = /* @__PURE__ */ b("span", { class: "pg-sr-only" }, "Go to first", -1), le = /* @__PURE__ */ b("span", { class: "pg-sr-only" }, "Previous", -1), ne = /* @__PURE__ */ b("span", { class: "pg-sr-only" }, "Next", -1), re = /* @__PURE__ */ b("span", { class: "pg-sr-only" }, "Go to Last", -1), de = /* @__PURE__ */ w({
  __name: "Pagination",
  props: {
    total: {},
    perPage: {},
    current: { default: 1 },
    maxButtons: { default: 5 },
    hideInfo: { type: Boolean, default: !1 },
    darkMode: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    formatter: { type: Function, default: (e) => e },
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
  setup(e, { emit: l }) {
    const s = e, {
      selectedPage: h,
      totalPages: o,
      currentStart: v,
      currentEnd: _,
      isInFirstPage: u,
      isInLastPage: k,
      gotoPageNumber: m,
      gotoFirstPage: x,
      gotoLastPage: C,
      gotoNextPage: E,
      gotoPreviousPage: H,
      pages: j,
      showDots: I
    } = Z(s), a = i(() => {
      var t, S, B, N, c, F;
      return {
        link: s.linkClass,
        active: s.activeLinkClass,
        disabled: s.disabledLinkClass,
        type: {
          first: ((t = s.linkTypeClass) == null ? void 0 : t.first) || "",
          last: ((S = s.linkTypeClass) == null ? void 0 : S.last) || "",
          previous: ((B = s.linkTypeClass) == null ? void 0 : B.previous) || "",
          next: ((N = s.linkTypeClass) == null ? void 0 : N.next) || "",
          divider: ((c = s.linkTypeClass) == null ? void 0 : c.divider) || "",
          select: ((F = s.linkTypeClass) == null ? void 0 : F.select) || ""
        }
      };
    });
    return W(h, (t) => {
      l("change", t);
    }), (t, S) => n(o) > 1 ? (g(), L(Y, {
      key: 0,
      "wrapper-class": t.wrapperClass,
      "dark-mode": t.darkMode
    }, {
      default: f(() => [
        t.hideInfo ? T("", !0) : (g(), L(Q, {
          key: 0,
          "info-class": t.infoClass
        }, {
          default: f(() => [
            d(t.$slots, "info", {
              start: n(v),
              end: n(_),
              total: t.total
            }, () => [
              p(" Showing "),
              b("span", {
                class: r(t.infoHighlightClass || "pg-font-bold"),
                textContent: q(n(v))
              }, null, 10, ee),
              p(" to "),
              b("span", {
                class: r(t.infoHighlightClass || "pg-font-bold"),
                textContent: q(n(_))
              }, null, 10, te),
              p(" out of "),
              b("span", {
                class: r(t.infoHighlightClass || "pg-font-bold"),
                textContent: q(t.total)
              }, null, 10, se),
              p(" results. ")
            ])
          ]),
          _: 3
        }, 8, ["info-class"])),
        $(U, {
          rounded: t.rounded,
          "nav-class": t.navClass
        }, {
          default: f(() => {
            var B, N;
            return [
              $(P, {
                key: "pg-first",
                class: r(a.value.type.first || "pg__link--first  pg-border-r"),
                classes: a.value,
                disabled: n(u),
                rounded: t.rounded,
                onClick: M(n(x), ["prevent"])
              }, {
                default: f(() => [
                  d(t.$slots, "first", {}, () => [
                    ae,
                    p(" « ")
                  ])
                ]),
                _: 3
              }, 8, ["class", "classes", "disabled", "rounded", "onClick"]),
              $(P, {
                key: "pg-previous",
                class: r(a.value.type.previous || "pg__link--previous pg-border-r"),
                classes: a.value,
                disabled: n(u),
                rounded: t.rounded,
                onClick: M(n(H), ["prevent"])
              }, {
                default: f(() => [
                  d(t.$slots, "previous", {}, () => [
                    le,
                    p(" ‹ ")
                  ])
                ]),
                _: 3
              }, 8, ["class", "classes", "disabled", "rounded", "onClick"]),
              n(I)("LEFT") ? (g(), L(P, {
                key: "pg-divider-left",
                rounded: t.rounded,
                class: r(a.value.type.divider || "pg__dots--left pg-hidden md:pg-inline-block pg-border-r"),
                classes: a.value
              }, {
                default: f(() => [
                  d(t.$slots, "dots", {}, () => [
                    p(" ... ")
                  ])
                ]),
                _: 3
              }, 8, ["rounded", "class", "classes"])) : T("", !0),
              (g(!0), y(D, null, G(n(j), (c) => (g(), L(P, {
                key: `pg-pages-${c}`,
                class: r(a.value.link ? "" : "pg-border-r pg-hidden md:pg-inline-block"),
                classes: a.value,
                disabled: c === t.current,
                active: c === t.current,
                rounded: t.rounded,
                onClick: M((F) => n(m)(c), ["prevent"])
              }, {
                default: f(() => [
                  d(t.$slots, "number", { pageNumber: c }, () => [
                    p(q(t.formatter(c)), 1)
                  ])
                ]),
                _: 2
              }, 1032, ["class", "classes", "disabled", "active", "rounded", "onClick"]))), 128)),
              $(K, {
                key: "pg-page-select",
                "total-pages": n(o),
                class: r(a.value.type.select ? "" : "md:pg-hidden"),
                "select-class": ((N = (B = a.value) == null ? void 0 : B.type) == null ? void 0 : N.select) || "",
                rounded: t.rounded,
                current: t.current,
                onInput: n(m)
              }, {
                default: f(({ page: c }) => [
                  d(t.$slots, "select-number", {
                    pageNumber: { page: c }
                  }, () => [
                    p(q(t.formatter(c)), 1)
                  ])
                ]),
                _: 3
              }, 8, ["total-pages", "class", "select-class", "rounded", "current", "onInput"]),
              n(I)("RIGHT") ? (g(), L(P, {
                key: "pg-divider-right",
                rounded: t.rounded,
                class: r(a.value.type.divider || "pg__dots--right pg-border-r pg-hidden md:pg-inline-block"),
                classes: a.value
              }, {
                default: f(() => [
                  d(t.$slots, "dots", {}, () => [
                    p(" ... ")
                  ])
                ]),
                _: 3
              }, 8, ["rounded", "class", "classes"])) : T("", !0),
              $(P, {
                key: "pg-next",
                class: r(a.value.type.next || "pg__link--next pg-border-r"),
                classes: a.value,
                disabled: n(k),
                rounded: t.rounded,
                onClick: M(n(E), ["prevent"])
              }, {
                default: f(() => [
                  d(t.$slots, "next", {}, () => [
                    ne,
                    p(" › ")
                  ])
                ]),
                _: 3
              }, 8, ["class", "classes", "disabled", "rounded", "onClick"]),
              $(P, {
                key: "pg-last",
                class: r(a.value.type.last || "pg__link--last"),
                classes: a.value,
                disabled: n(k),
                rounded: t.rounded,
                onClick: M(n(C), ["prevent"])
              }, {
                default: f(() => [
                  d(t.$slots, "last", {}, () => [
                    re,
                    p(" » ")
                  ])
                ]),
                _: 3
              }, 8, ["class", "classes", "disabled", "rounded", "onClick"])
            ];
          }),
          _: 3
        }, 8, ["rounded", "nav-class"])
      ]),
      _: 3
    }, 8, ["wrapper-class", "dark-mode"])) : T("", !0);
  }
});
export {
  de as Pagination
};
