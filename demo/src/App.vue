<script setup lang="ts">
    import { Pagination } from "@puncoz/vue3-pagination"
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
                        wrapper-class="WRAPPER"
                        info-class="INFO"
                        info-highlight-class="INFO-HIGHLIGHT"
                        nav-class="NAV"
                        link-class="LINK"
                        active-link-class="ACTIVE-LINK"
                        disabled-link-class="DISABLED-LINK"
                        :link-type-class="{
                            first: 'FIRST',
                            last: 'LAST',
                            previous: 'PREVIOUS',
                            next: 'NEXT',
                            divider: 'DIVIDER',
                            select: 'SELECT',
                        }"
                        @change="handlePageChange">
                <template #first>left</template>
            </Pagination>
        </div>
    </div>
</template>

<style src="@puncoz/vue3-pagination/dist/style.css"/>
