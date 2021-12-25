
export type AppInitState = {
    initialised: boolean
}

const initState: AppInitState = {
    initialised: false
}

export const appReducer = (state: AppInitState = initState, action: IsInitialisedAT) => {
    switch (action.type) {
        case "IS-INITIALISED":
            return {
                ...state,
                initialised: action.status
            }
        default:
            return state
    }

}

export type IsInitialisedAT = ReturnType<typeof isInitialisedAC>
export const isInitialisedAC = (status: boolean) => ({ type: "IS-INITIALISED", status })