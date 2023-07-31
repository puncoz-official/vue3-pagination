<script setup lang="ts">
    import { PaginationProps, PaginationPropsRequired } from "#lib/Props"
    import PageSelect from "@lib/Components/PageSelect.vue"
    import PaginationInfo from "@lib/Components/PaginationInfo.vue"
    import PaginationLink from "@lib/Components/PaginationLink.vue"
    import PaginationNav from "@lib/Components/PaginationNav.vue"
    import PaginationWrapper from "@lib/Components/PaginationWrapper.vue"
    import usePagination from "@lib/Composables/usePagination"
    import { watch } from "vue"

    const props = withDefaults(defineProps<PaginationProps>(), {
        current: 1,
        maxButtons: 5,
        hideInfo: false,
        darkMode: false,
        rounded: false,
        formatter: (n: number) => n,
    })

    const {
        selectedPage,
        totalPages,
        currentStart,
        currentEnd,
        isInFirstPage,
        isInLastPage,
        gotoPageNumber,
        gotoFirstPage,
        gotoLastPage,
        gotoNextPage,
        gotoPreviousPage,
        pages,
        showDots,
    } = usePagination(props as PaginationPropsRequired)

    const emit = defineEmits(["change"])

    watch(selectedPage, (page) => {
        emit("change", page)
    })
</script>

<template>
    <PaginationWrapper v-if="totalPages > 1" :dark-mode="darkMode">
        <PaginationInfo v-if="!hideInfo">
            <slot name="info" :start="currentStart" :end="currentEnd" :total="total">
                Showing
                <span class="pg-font-bold" v-text="currentStart"/>
                to
                <span class="pg-font-bold" v-text="currentEnd"/>
                out of
                <span class="pg-font-bold" v-text="total"/>
                results.
            </slot>
        </PaginationInfo>

        <PaginationNav :rounded="rounded">
            <PaginationLink key="pg-first"
                            class="pg-border-r"
                            :disabled="isInFirstPage"
                            :rounded="rounded"
                            @click.prevent="gotoFirstPage">
                <slot name="first">
                    <span class="pg-sr-only">Go to first</span>
                    &laquo;
                </slot>
            </PaginationLink>

            <PaginationLink key="pg-previous"
                            class="pg-border-r"
                            :disabled="isInFirstPage"
                            :rounded="rounded"
                            @click.prevent="gotoPreviousPage">
                <slot name="previous">
                    <span class="pg-sr-only">Previous</span>
                    &lsaquo;
                </slot>
            </PaginationLink>

            <template v-if="showDots('LEFT')">
                <PaginationLink key="pg-divider-left"
                                :rounded="rounded"
                                class="pg__dots--left pg-hidden md:pg-inline-block pg-border-r">
                    <slot name="dots">
                        ...
                    </slot>
                </PaginationLink>
            </template>

            <PaginationLink v-for="page in pages"
                            :key="`pg-pages-${page}`"
                            class="pg-border-r pg-hidden md:pg-inline-block"
                            :disabled="page === current"
                            :active="page === current"
                            :rounded="rounded"
                            @click.prevent="gotoPageNumber(page)">
                <slot name="number" :page-number="page">
                    {{ formatter(page) }}
                </slot>
            </PaginationLink>

            <PageSelect key="pg-page-input"
                        :total-pages="totalPages"
                        class="md:pg-hidden"
                        :rounded="rounded"
                        :current="current"
                        @input="gotoPageNumber">
                <template #default="{page}">
                    <slot name="select-number" :page-number="{page}">
                        {{ formatter(page) }}
                    </slot>
                </template>
            </PageSelect>

            <template v-if="showDots('RIGHT')">
                <PaginationLink key="pg-divider-right"
                                :rounded="rounded"
                                class="pg__dots--right pg-border-r pg-hidden md:pg-inline-block">
                    <slot name="dots">
                        ...
                    </slot>
                </PaginationLink>
            </template>

            <PaginationLink key="pg-next"
                            class="pg-border-r"
                            :disabled="isInLastPage"
                            :rounded="rounded"
                            @click.prevent="gotoNextPage">
                <slot name="next">
                    <span class="pg-sr-only">Next</span>
                    &rsaquo;
                </slot>
            </PaginationLink>

            <PaginationLink key="pg-last"
                            :disabled="isInLastPage"
                            :rounded="rounded"
                            @click.prevent="gotoLastPage">
                <slot name="last">
                    <span class="pg-sr-only">Go to Last</span>
                    &raquo;
                </slot>
            </PaginationLink>
        </PaginationNav>
    </PaginationWrapper>
</template>

<style src="./styles/normalize.css"/>
<style src="./styles/main.css"/>
