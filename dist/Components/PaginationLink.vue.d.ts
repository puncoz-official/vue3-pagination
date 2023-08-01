import { PropType } from "vue";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    active: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    rounded: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    classes: {
        type: PropType<LinkClasses>;
        required: false;
        default: () => {};
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    active: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    rounded: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    classes: {
        type: PropType<LinkClasses>;
        required: false;
        default: () => {};
    };
}>>, {
    rounded: boolean;
    disabled: boolean;
    active: boolean;
    classes: LinkClasses;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
