import { toyService  } from '../../services/toy.service.js'

import { store } from '../store.js'


export function loadToys(){

    return toyService.query()
        .then(toys => {
            
            store.dispatch({ type: 'SET_TOYS', toys })
        })
        .catch(err => {
            console.error('Error loading todos:', err)
        })

}



// export function removeTodo(todoId) {
//     return todoService.remove(todoId)
//         .then(() => {
//             store.dispatch({ type: 'REMOVE_TODO', todoId })
//         })
//         .catch(err => {
//             console.error('Error removing todo:', err)
//         })
// }

// export function toggleTodo(todo) {
//     return todoService.save(todo)
//         .then(savedTodo => {
//             store.dispatch({ type: 'TOGGLE_TODO', todo: savedTodo })
//             return savedTodo
//         })
//         .catch(err => {
//             console.error('Error adding todo:', err)
//         })
// }

// export function changeTxt(todo){
//     return todoService.save(todo)
//         .then(savedTodo => {
//             store.dispatch({ type: 'CHANGE_TXT', todo: savedTodo })
//             return savedTodo
//         })
//         .catch(err => {
//             console.error('Error adding todo:', err)
//         })

// // }

// export function setFilter(filterBy) {
//     store.dispatch({ type: 'SET_FILTER', filterBy })
// }

// export function setLoading(isLoading) {
//   return store.dispatch({ type: 'SET_LOADING', isLoading })
// }