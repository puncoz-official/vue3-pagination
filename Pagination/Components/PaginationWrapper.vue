<script setup lang="ts">
    defineProps({
        darkMode: { type: Boolean, required: false, default: false },
        wrapperClass: { type: String, required: false, default: "" },
    })
</script>

<template>
    <div :data-theme="darkMode ? 'dark' : 'light'" class="pg__pagination">
        <div :class="wrapperClass || `pg__wrapper pg-py-4 pg-px-4
                    pg-bg-white dark:pg-bg-slate-700
                    pg-text-slate-500 dark:pg-text-slate-300
                    pg-flex pg-items-center pg-justify-between`">
            <slot/>
        </div>
    </div>
</template>
