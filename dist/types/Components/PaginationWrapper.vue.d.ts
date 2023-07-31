declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    darkMode: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    wrapperClass: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    darkMode: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    wrapperClass: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    darkMode: boolean;
    wrapperClass: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
