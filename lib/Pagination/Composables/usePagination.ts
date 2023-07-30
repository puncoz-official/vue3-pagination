import { DotsPosition, PaginationPropsRequired } from "#lib/Props"
import { computed, ref } from "vue"


const usePagination = (props: PaginationPropsRequired) => {
    const selectedPage = ref<number>(props.current)
    const totalPages = computed(() => Math.ceil(props.total / props.perPage))
    const currentStart = computed(() => (props.current - 1) * props.perPage + 1)
    const currentEnd = computed(() => props.total > (props.current * props.perPage) ? (props.current * props.perPage) : props.total)

    const isInFirstPage = computed(() => props.current === 1)
    const isInLastPage = computed(() => props.current === totalPages.value)

    const startPage = computed(() => {
        if (props.current === 1) {
            return 1
        }

        if (props.current === totalPages.value) {
            return totalPages.value - (props.maxButtons) + 1
        }

        return props.current - 1
    })
    const endPage = computed(() => Math.min(startPage.value + props.maxButtons - 1, totalPages.value))

    const pages = computed(() => {
        const range = []

        for (let i = startPage.value; i <= endPage.value; i++) {
            if (i > 0) {
                range.push(i)
            }
        }

        return range
    })

    const showDots = (position: DotsPosition): boolean => {
        if (position === "LEFT") {
            return startPage.value > 1
        }

        return endPage.value < totalPages.value
    }

    const gotoPageNumber = (page: number) => {
        selectedPage.value = page
    }

    const gotoFirstPage = () => gotoPageNumber(1)
    const gotoLastPage = () => gotoPageNumber(totalPages.value)
    const gotoNextPage = () => gotoPageNumber((props.current >= totalPages.value) ? totalPages.value : (props.current + 1))
    const gotoPreviousPage = () => gotoPageNumber((props.current <= 1) ? 1 : (props.current - 1))

    return {
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
        startPage,
        endPage,
        pages,
        showDots,
    }
}

export default usePagination
