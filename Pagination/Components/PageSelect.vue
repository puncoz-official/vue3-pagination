<script setup lang="ts">
    import { HTMLSelectEvent } from "#/index"
    import { computed, ref, watchEffect } from "vue"

    const props = defineProps({
        totalPages: { type: Number, required: true },
        current: { type: Number, required: true },
        rounded: { type: Boolean, required: false, default: false },
        selectClass: { type: String, required: false, default: "" },
    })

    const emit = defineEmits(["input"])

    const value = ref()

    watchEffect(() => {
        value.value = props.current
    })

    const pages = computed(() => {
        const p = []

        for (let i = 1; i <= props.totalPages; i++) {
            p.push(i)
        }

        return p
    })

    const handleOnChange = (event: HTMLSelectEvent) => {
        emit("input", parseInt(event.currentTarget.value))
    }

    const roundedClass = computed(() => {
        if (props.selectClass) {
            return ""
        }

        return `pg-rounded-full pg-border
                pg-mr-1 pg-inline-flex pg-justify-center pg-items-center`
    })
</script>

<template>
    <select :value="value"
            :class="`
                ${selectClass || `pg__link--select pg-text-sm pg-border-slate-300 dark:pg-border-slate-600
                    pg-border pg-pl-2 pg-pr-6`}
                ${rounded ? roundedClass : ''}
            `"
            @change="handleOnChange"
            v-on="{...$attrs}">
        <option v-for="page in pages"
                :key="`pg-page-select-${page}`"
                :value="page">
            <slot :page="page"/>
        </option>
    </select>
</template>
