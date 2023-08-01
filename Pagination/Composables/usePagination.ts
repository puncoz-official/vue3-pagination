import { DotsPosition, PaginationPropsRequired } from "#/index"
import { computed, ref } from "vue"

const usePagination = (props: PaginationPropsRequired) => {
    const selectedPage = ref<number>(props.current)
    const totalPages = computed(() => Math.ceil(props.total / props.perPage))
    const currentStart = computed(() => (props.current - 1) * props.perPage + 1)
    const currentEnd = computed(() => props.total > (props.current * props.perPage) ? (props.current * props.perPage) : props.total)

    const isInFirstPage = computed(() => props.current === 1)
    const isInLastPage = computed(() => props.current === totalPages.value)

    const startPage = computed(() => {
        const start = props.current - Math.floor(props.maxButtons / 2)

        return Math.min(Math.max(start, 1), totalPages.value - props.maxButtons + 1)
    })

    const endPage = computed(() => {
        const end = Math.max(props.current + Math.floor(props.maxButtons / 2), props.maxButtons)

        return Math.min(end, totalPages.value)
    })

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
            return !pages.value.includes(1)
        }

        return !pages.value.includes(totalPages.value)
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
