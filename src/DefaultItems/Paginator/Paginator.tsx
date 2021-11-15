import React from "react"

export type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

export const Paginator = ({totalUsersCount, pageSize}: PaginatorPropsType) => {
    return (
        <div>
            <span>{pageSize}</span>
            <span>{totalUsersCount}</span>
        </div>

    )
}