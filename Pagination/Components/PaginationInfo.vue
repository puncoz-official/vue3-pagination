<script setup lang="ts">
    defineProps({
        infoClass: { type: String, required: false, default: "" },
    })
</script>

<template>
    <p :class="infoClass || `pg__info pg-text-sm`">
        <slot/>
    </p>
</template>
