import {AppThunk} from "../../n1-main/m2-bll/store";

const initialState = {
}

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: FinalProfileActionTypes): InitialStateType => {
    switch (action.type) {
        case 'EXAMPLE':
            return state
        default:
            return state;
    }
}

export const exampleTC = ():AppThunk => (dispatch) => {
    // dispatch()
    // authAPI.login()
    //     .then(res => {
    //     }
    // )
}


export const exampleAC = () =>
    ({type: 'EXAMPLE'} as const)

export type FinalProfileActionTypes =
    ReturnType<typeof exampleAC>

