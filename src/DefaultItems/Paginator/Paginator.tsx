import React from "react"
import {setCurrentPageACType} from "../../Redux/Reducers/UsersReducer";
import classes from "./Paginator.module.css"
import {Pagination} from "@mui/material";


export type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPageAC: (currentPage: number) => setCurrentPageACType
}

export const Paginator = ({totalUsersCount, pageSize, currentPage, setCurrentPageAC}: PaginatorPropsType) => {
    const allPages = []
    const pages = Math.ceil(totalUsersCount / pageSize)

    for (let i = 1; i <= pages; i++) {
        allPages.push(i)
    }


    const pagesJSX = allPages.map(p => {
        return (
            <button onClick={() => setCurrentPageAC(p)}>{p}</button>
        )
    })

    return (
        <div className={classes.container}>
            {/*Создаем группу кнопок*/}
            {/*<ButtonGroup variant="text" aria-label="text button group">*/}
            {/*    {pagesJSX}*/}
            {/*</ButtonGroup>*/}
            <Pagination count={10} color="secondary" />

        </div>

    )
}