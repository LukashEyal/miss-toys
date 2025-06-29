


export const SET_TOYS = 'SET_TOYS'

export const REMOVE_TOY = 'REMOVE_TOY'

export const SET_FILTER = 'SET_FILTER'






const initialState = {
toys: []


}




export function toyReducr(state = initialState, cmd) {
    switch (cmd.type) {
        case SET_TOYS:
            return {
                ...state,
                toys: cmd.toys
            }
        
    //     case REMOVE_TOY:
    //         return {
    //             ...state,
    //             toys: state.todos.filter(todo => todo._id !== cmd.todoId)
    //         }



    //   case SET_FILTER:
    // return {
    //     ...state,
    //     currentFilterBy: cmd.filterBy
    // }


        default:
            return state
    }
}
