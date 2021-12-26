import {getAuthUserT} from "./AuthReducer";

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
                initialised: true
            }
        default:
            return state
    }

}

export type IsInitialisedAT = ReturnType<typeof isInitialisedAC>
export const isInitialisedAC = () => ({type: "IS-INITIALISED"})


//THUNK

export const initialisedAppT = () => (dispatch: any) => {
    dispatch(getAuthUserT())
        .then(dispatch(isInitialisedAC()))
}