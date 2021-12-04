import React, {useState} from "react"
import {Pagination} from "@mui/material";


export type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
}

export const Paginator = ({totalUsersCount, pageSize, currentPage, setCurrentPage}: PaginatorPropsType) => {

    const [page, setPage] = useState<number>(currentPage)

    const pages = Math.ceil(totalUsersCount / pageSize)

    const pageChangeHandler = (e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        setCurrentPage(value)
    }

    return (

        <Pagination count={pages}
                    variant={"outlined"}
                    color="secondary"
                    page={page}
                    onChange={pageChangeHandler}
        />


    )
}