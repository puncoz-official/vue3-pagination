<script setup lang="ts">
    import { Pagination } from "@lib/"
    import { ref } from "vue"

    const total = ref(102)
    const perPage = ref(10)
    const current = ref(1)

    const handlePageChange = (page: number) => {
        current.value = page
    }

    const formatter = (page: number) => {
        return `0${page}`
    }
</script>

<template>
    <div>
        Pagination Demo

        <h3>Light Mode</h3>
        <div class="bg-white py-5 px-4">
            <Pagination :total="total"
                        :per-page="perPage"
                        :current="current"
                        :formatter="formatter"
                        rounded
                        @change="handlePageChange">
                <template #first>left</template>
            </Pagination>
        </div>

        <h3>Dark Mode</h3>
        <div class="bg-slate-700 py-5 px-4">
            <Pagination :total="total"
                        :per-page="perPage"
                        :current="current"
                        :formatter="formatter"
                        dark-mode
                        rounded
                        @change="handlePageChange">
                <template #first>left</template>
            </Pagination>
        </div>
    </div>
</template>
