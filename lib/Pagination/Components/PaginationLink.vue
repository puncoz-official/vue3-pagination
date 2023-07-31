<script setup lang="ts">
    import { LinkClasses } from "#lib/Props"
    import { computed, PropType } from "vue"

    const props = defineProps({
        active: { type: Boolean, required: false, default: false },
        disabled: { type: Boolean, required: false, default: false },
        rounded: { type: Boolean, required: false, default: false },
        classes: { type: Object as PropType<LinkClasses>, required: false, default: () => ({}) },
    })

    const linkClasses = computed(() => {
        if (props.active) {
            return props.classes?.active || `
                pg__link--active pg-bg-slate-400 dark:pg-bg-slate-500 pg-text-slate-100 dark:pg-text-slate-300
            `
        }

        if (props.disabled) {
            return props.classes?.disabled || `
                pg__link--disabled pg-cursor-not-allowed pg-opacity-50
                pg-bg-slate-100 dark:pg-bg-slate-700 pg-text-slate-600 dark:pg-text-slate-400
            `
        }

        return props.classes?.link || `
            hover:pg-bg-slate-200 dark:hover:pg-bg-slate-600 pg-transition pg-duration-200 pg-ease-in-out
        `
    })

    const roundedClass = computed(() => {
        if (props.classes?.link) {
            return ""
        }

        return `pg-rounded-full pg-border
                pg-mr-1 pg-inline-flex pg-justify-center pg-items-center pg-w-[2.5rem] pg-h-[2.5rem]`
    })
</script>

<template>
    <button type="button"
            :class="`
                ${classes.link ? '' : `pg__link pg-text-sm pg-border-slate-300 dark:pg-border-slate-600`}
                ${linkClasses}
                ${rounded ? roundedClass : 'pg-px-4 pg-py-2'}`
            ">
        <slot/>
    </button>
</template>
