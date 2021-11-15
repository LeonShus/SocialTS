import React from "react"
import {setCurrentPageACType} from "../../Redux/Reducers/UsersReducer";
import classes from "./Paginator.module.css"

export type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPageAC: (currentPage: number) => setCurrentPageACType
}

export const Paginator = ({totalUsersCount, pageSize, currentPage, setCurrentPageAC}: PaginatorPropsType) => {
    const allPages = []
    const pages = Math.ceil(totalUsersCount / pageSize)

    for (let i = 1; i < pages + 1; i++) { //Must be without + 1
        allPages.push(i)
    }


    const pagesJSX = allPages.map(p => {
        return (
            <span className={`${classes.cell} ${currentPage === p && classes.target}`}
                  onClick={() => setCurrentPageAC(p)}
            >
                {p}
            </span>
        )
    })

    return (
        <div className={classes.container}>
            {pagesJSX}
        </div>

    )
}