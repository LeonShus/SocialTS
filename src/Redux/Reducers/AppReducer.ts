export type AppInitState = {
    initialised: boolean
    fetching: boolean
}

const initState: AppInitState = {
    initialised: false,
    fetching: false
}

type ActionType = IsFetchingAT | IsInitialisedAT

export const appReducer = (state: AppInitState = initState, action: ActionType) => {
    switch (action.type) {
        case "APP-REDUCER/IS-INITIALISED":
            return {
                ...state,
                initialised: action.isInitialised
            }
        case "APP-REDUCER/IS-FETCHING":
            return {
                ...state,
                fetching: action.isFetching
            }
        default:
            return state
    }

}

export type IsInitialisedAT = ReturnType<typeof isInitialisedAC>
export const isInitialisedAC = (isInitialised: boolean) => ({type: "APP-REDUCER/IS-INITIALISED", isInitialised} as const)

export type IsFetchingAT = ReturnType<typeof isFetchingAC>
export const isFetchingAC = (isFetching: boolean) => ({type: "APP-REDUCER/IS-FETCHING", isFetching} as const)
