<script setup lang="ts">
    import { LinkClasses, PaginationProps, PaginationPropsRequired } from "#lib/Props"
    import PageSelect from "@lib/Components/PageSelect.vue"
    import PaginationInfo from "@lib/Components/PaginationInfo.vue"
    import PaginationLink from "@lib/Components/PaginationLink.vue"
    import PaginationNav from "@lib/Components/PaginationNav.vue"
    import PaginationWrapper from "@lib/Components/PaginationWrapper.vue"
    import usePagination from "@lib/Composables/usePagination"
    import { computed, watch } from "vue"

    const props = withDefaults(defineProps<PaginationProps>(), {
        current: 1,
        maxButtons: 5,
        hideInfo: false,
        darkMode: false,
        rounded: false,
        formatter: (n: number) => n,

        wrapperClass: "",
        infoClass: "",
        infoHighlightClass: "",
        navClass: "",
        linkClass: "",
        activeLinkClass: "",
        disabledLinkClass: "",
        linkTypeClass: undefined,
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

    const linkClasses = computed<LinkClasses>(() => {
        return {
            link: props.linkClass,
            active: props.activeLinkClass,
            disabled: props.disabledLinkClass,

            type: {
                first: props.linkTypeClass?.first || "",
                last: props.linkTypeClass?.last || "",
                previous: props.linkTypeClass?.previous || "",
                next: props.linkTypeClass?.next || "",
                divider: props.linkTypeClass?.divider || "",
                select: props.linkTypeClass?.select || "",
            },
        }
    })

    watch(selectedPage, (page) => {
        emit("change", page)
    })
</script>

<template>
    <PaginationWrapper v-if="totalPages > 1" :wrapper-class="wrapperClass" :dark-mode="darkMode">
        <PaginationInfo v-if="!hideInfo" :info-class="infoClass">
            <slot name="info" :start="currentStart" :end="currentEnd" :total="total">
                Showing
                <span :class="infoHighlightClass || `pg-font-bold`" v-text="currentStart"/>
                to
                <span :class="infoHighlightClass || `pg-font-bold`" v-text="currentEnd"/>
                out of
                <span :class="infoHighlightClass || `pg-font-bold`" v-text="total"/>
                results.
            </slot>
        </PaginationInfo>

        <PaginationNav :rounded="rounded" :nav-class="navClass">
            <PaginationLink key="pg-first"
                            :class="linkClasses.type.first || 'pg__link--first  pg-border-r'"
                            :classes="linkClasses"
                            :disabled="isInFirstPage"
                            :rounded="rounded"
                            @click.prevent="gotoFirstPage">
                <slot name="first">
                    <span class="pg-sr-only">Go to first</span>
                    &laquo;
                </slot>
            </PaginationLink>

            <PaginationLink key="pg-previous"
                            :class="linkClasses.type.previous || 'pg__link--previous pg-border-r'"
                            :classes="linkClasses"
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
                                :class="linkClasses.type.divider || 'pg__dots--left pg-hidden md:pg-inline-block pg-border-r'"
                                :classes="linkClasses">
                    <slot name="dots">
                        ...
                    </slot>
                </PaginationLink>
            </template>

            <PaginationLink v-for="page in pages"
                            :key="`pg-pages-${page}`"
                            :class="linkClasses.link ? '' : 'pg-border-r pg-hidden md:pg-inline-block'"
                            :classes="linkClasses"
                            :disabled="page === current"
                            :active="page === current"
                            :rounded="rounded"
                            @click.prevent="gotoPageNumber(page)">
                <slot name="number" :page-number="page">
                    {{ formatter(page) }}
                </slot>
            </PaginationLink>

            <PageSelect key="pg-page-select"
                        :total-pages="totalPages"
                        :class="linkClasses.type.select ? '' : 'md:pg-hidden'"
                        :select-class="linkClasses?.type?.select || ''"
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
                                :class="linkClasses.type.divider || 'pg__dots--right pg-border-r pg-hidden md:pg-inline-block'"
                                :classes="linkClasses">
                    <slot name="dots">
                        ...
                    </slot>
                </PaginationLink>
            </template>

            <PaginationLink key="pg-next"
                            :class="linkClasses.type.next || 'pg__link--next pg-border-r'"
                            :classes="linkClasses"
                            :disabled="isInLastPage"
                            :rounded="rounded"
                            @click.prevent="gotoNextPage">
                <slot name="next">
                    <span class="pg-sr-only">Next</span>
                    &rsaquo;
                </slot>
            </PaginationLink>

            <PaginationLink key="pg-last"
                            :class="linkClasses.type.last || 'pg__link--last'"
                            :classes="linkClasses"
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
