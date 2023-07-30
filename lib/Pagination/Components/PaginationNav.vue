<script setup lang="ts">
    defineProps({
        rounded: { type: Boolean, required: false, default: false },
    })
</script>

<template>
    <nav class="pg__nav pg-border-slate-300 dark:pg-border-slate-600 pg-flex pg-flex-nowrap"
         :class="{'pg-rounded pg-border pg-shadow-sm': !rounded}">
        <slot/>
    </nav>
</template>
