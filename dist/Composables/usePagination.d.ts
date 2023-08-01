import { DotsPosition, PaginationPropsRequired } from '../@types/index';
declare const usePagination: (props: PaginationPropsRequired) => {
    selectedPage: import("vue").Ref<number>;
    totalPages: import("vue").ComputedRef<number>;
    currentStart: import("vue").ComputedRef<number>;
    currentEnd: import("vue").ComputedRef<number>;
    isInFirstPage: import("vue").ComputedRef<boolean>;
    isInLastPage: import("vue").ComputedRef<boolean>;
    gotoPageNumber: (page: number) => void;
    gotoFirstPage: () => void;
    gotoLastPage: () => void;
    gotoNextPage: () => void;
    gotoPreviousPage: () => void;
    startPage: import("vue").ComputedRef<number>;
    endPage: import("vue").ComputedRef<number>;
    pages: import("vue").ComputedRef<number[]>;
    showDots: (position: DotsPosition) => boolean;
};
export default usePagination;
