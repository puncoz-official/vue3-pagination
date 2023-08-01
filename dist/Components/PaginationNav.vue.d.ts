declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    rounded: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    navClass: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rounded: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    navClass: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    rounded: boolean;
    navClass: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
