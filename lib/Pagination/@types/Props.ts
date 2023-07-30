export interface PaginationProps {
    total: number
    perPage: number
    current?: number
    maxButtons?: number

    hideInfo?: boolean
    darkMode?: boolean
    rounded?: boolean

    formatter?: (pageNumber: number) => string | number
}

export type PaginationPropsRequired = Required<PaginationProps>

export type DotsPosition = "LEFT" | "RIGHT"
