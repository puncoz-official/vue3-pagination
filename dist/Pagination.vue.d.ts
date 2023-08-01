declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<any, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<any> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {} | {
    [x: string]: any;
}, {}>, {
    info?(_: {
        start: any;
        end: any;
        total: any;
    }): any;
    first?(_: {}): any;
    previous?(_: {}): any;
    dots?(_: {}): any;
    number?(_: {
        pageNumber: any;
    }): any;
    "select-number"?(_: {
        pageNumber: {
            page: any;
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
