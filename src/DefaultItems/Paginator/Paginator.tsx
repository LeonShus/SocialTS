import React, {useState} from "react"
import {SetCurrentPageACType} from "../../Redux/Reducers/UsersReducer";
import {Pagination} from "@mui/material";


export type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPageAC: (currentPage: number) => SetCurrentPageACType
}

export const Paginator = ({totalUsersCount, pageSize, currentPage, setCurrentPageAC}: PaginatorPropsType) => {

    const [page, setPage] = useState<number>(1)

    const pages = Math.ceil(totalUsersCount / pageSize)

    const pageChangeHandler = (e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        setCurrentPageAC(value)
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