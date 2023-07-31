export interface PaginationProps {
    total: number;
    perPage: number;
    current?: number;
    maxButtons?: number;
    hideInfo?: boolean;
    darkMode?: boolean;
    rounded?: boolean;
    formatter?: (pageNumber: number) => string | number;
    wrapperClass?: string;
    infoClass?: string;
    infoHighlightClass?: string;
    navClass?: string;
    linkClass?: string;
    activeLinkClass?: string;
    disabledLinkClass?: string;
    linkTypeClass?: LinkType;
}
export type PaginationPropsRequired = Required<PaginationProps>;
export type DotsPosition = "LEFT" | "RIGHT";
export type LinkType = {
    first: string;
    last: string;
    previous: string;
    next: string;
    divider: string;
    select: string;
};
export type LinkClasses = {
    link: string;
    active: string;
    disabled: string;
    type: LinkType;
};
