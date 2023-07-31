declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    totalPages: {
        type: NumberConstructor;
        required: true;
    };
    current: {
        type: NumberConstructor;
        required: true;
    };
    rounded: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selectClass: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "input"[], "input", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    totalPages: {
        type: NumberConstructor;
        required: true;
    };
    current: {
        type: NumberConstructor;
        required: true;
    };
    rounded: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    selectClass: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>> & {
    onInput?: ((...args: any[]) => any) | undefined;
}, {
    rounded: boolean;
    selectClass: string;
}, {}>, {
    default?(_: {
        page: number;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
