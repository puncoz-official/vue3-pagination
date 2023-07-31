declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    total: {
        type: import("vue").PropType<number>;
        required: true;
    };
    current: {
        type: import("vue").PropType<number>;
        default: number;
    };
    rounded: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    infoClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    navClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    darkMode: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    wrapperClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    perPage: {
        type: import("vue").PropType<number>;
        required: true;
    };
    maxButtons: {
        type: import("vue").PropType<number>;
        default: number;
    };
    hideInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    formatter: {
        type: import("vue").PropType<(pageNumber: number) => string | number>;
        default: (n: number) => number;
    };
    infoHighlightClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    linkClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    activeLinkClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabledLinkClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    linkTypeClass: {
        type: import("vue").PropType<import("#lib/Props").LinkType>;
        default: undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    total: {
        type: import("vue").PropType<number>;
        required: true;
    };
    current: {
        type: import("vue").PropType<number>;
        default: number;
    };
    rounded: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    infoClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    navClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    darkMode: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    wrapperClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    perPage: {
        type: import("vue").PropType<number>;
        required: true;
    };
    maxButtons: {
        type: import("vue").PropType<number>;
        default: number;
    };
    hideInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    formatter: {
        type: import("vue").PropType<(pageNumber: number) => string | number>;
        default: (n: number) => number;
    };
    infoHighlightClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    linkClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    activeLinkClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabledLinkClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    linkTypeClass: {
        type: import("vue").PropType<import("#lib/Props").LinkType>;
        default: undefined;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    current: number;
    rounded: boolean;
    infoClass: string;
    navClass: string;
    darkMode: boolean;
    wrapperClass: string;
    maxButtons: number;
    hideInfo: boolean;
    formatter: (pageNumber: number) => string | number;
    infoHighlightClass: string;
    linkClass: string;
    activeLinkClass: string;
    disabledLinkClass: string;
    linkTypeClass: import("#lib/Props").LinkType;
}, {}>, {
    info?(_: {
        start: number;
        end: number;
        total: number;
    }): any;
    first?(_: {}): any;
    previous?(_: {}): any;
    dots?(_: {}): any;
    number?(_: {
        pageNumber: number;
    }): any;
    "select-number"?(_: {
        pageNumber: {
            page: number;
        };
    }): any;
    next?(_: {}): any;
    last?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
