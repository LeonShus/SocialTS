import React from "react"
import {setCurrentPageACType} from "../../Redux/Reducers/UsersReducer";
import classes from "./Paginator.module.css"
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

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
            <Button size={'small'} onClick={() => setCurrentPageAC(p)}>{p}</Button>
        )
    })

    return (
        <div className={classes.container}>
            {/*Создаем группу кнопок*/}
            <ButtonGroup variant="text" aria-label="text button group">
                {pagesJSX}
            </ButtonGroup>
        </div>

    )
}