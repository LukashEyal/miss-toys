import { toyService } from "../../services/toy.service"



export const SET_TOYS = 'SET_TOYS'

export const REMOVE_TOY = 'REMOVE_TOY'

export const SET_FILTER = 'SET_FILTER'






const initialState = {
toys: [],
filterBy: {}


}




export function toyReducr(state = initialState, cmd) {
    switch (cmd.type) {
        case SET_TOYS:
            return {
                ...state,
                toys: cmd.toys
            }
        
        case REMOVE_TOY:
            return {
                ...state,
                toys: state.toys.filter(toy => toy._id !== cmd.toyId)
            }





  case SET_FILTER:
            return {
                ...state,
                filterBy: { ...state.filterBy, ...cmd.filterBy }
            }


        default:
            return state
    }
}
