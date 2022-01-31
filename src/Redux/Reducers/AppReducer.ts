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
                initialised: action.isInitialised
            }
        default:
            return state
    }

}

export type IsInitialisedAT = ReturnType<typeof isInitialisedAC>
export const isInitialisedAC = (isInitialised: boolean) => ({type: "IS-INITIALISED", isInitialised} as const)
