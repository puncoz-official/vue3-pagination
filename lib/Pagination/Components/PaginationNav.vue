<script setup lang="ts">
    defineProps({
        rounded: { type: Boolean, required: false, default: false },
        navClass: { type: String, required: false, default: "" },
    })
</script>

<template>
    <nav :class="[
        navClass || `pg__nav pg-border-slate-300 dark:pg-border-slate-600 pg-flex pg-flex-nowrap`,
        {'pg-rounded pg-border pg-shadow-sm': !rounded},
    ]">
        <slot/>
    </nav>
</template>
