import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'



export  const toyService = {
        query,
        getDefaultFilter,
        createToy,
        getById,
        remove,
        save

}




const TOY_KEY = 'toysDB'
_createToys()


async function query(filterBy) {
    try {
        let toys = await storageService.query(TOY_KEY)

        if (filterBy) {
            let {
                name = '',
                price = 0,
                inStock,
                label = ''
            } = filterBy

            toys = toys.filter(toy =>
                toy.name.toLowerCase().includes(name.toLowerCase()) &&
                toy.price >= price &&
                (inStock === undefined || toy.inStock === inStock) &&
                toy.label.toLowerCase().includes(label.toLowerCase())
            )
        }

        return toys
    } catch (error) {
        console.log('error:', error)
        throw error
    }
}

function getDefaultFilter() {
    return {
        name: '',
        price: 0,
        inStock: undefined,
        label: ''
    }
}



function createToy(name = '', price = 0, label = 'General', inStock = true) {
    return {
        _id: utilService.makeId(),     // assuming utilService.makeId() exists
        name,
        price,
        label,
        inStock,
        createdAt: Date.now()
    }
}



function getById(id) {
    return storageService.get(TOY_KEY, _id)
}

function remove(id) {
    return storageService.remove(TOY_KEY, _id)
}

function save(toyToSave) {
    if (toyToSave._id) {
        return storageService.put(TOY_KEY, toyToSave)
    } else {
        toyToSave.isOn = false
        return storageService.post(TOY_KEY, toyToSave)
    }
}





function _createToys() {
    let toys = utilService.loadFromStorage(TOY_KEY)
    if (!toys || !toys.length ){

        toys = [
            { _id: 't101', name: 'Talking Doll', price: 123, label: 'Doll', createdAt: Date.now(), inStock: true},
            { _id: 't102', name: 'Talking Doll', price: 123, label: 'Doll', createdAt: Date.now(), inStock: false},
            { _id: 't103', name: 'Talking Doll', price: 123, label: 'Doll', createdAt: Date.now(), inStock: true}   
        ]

        utilService.saveToStorage(TOY_KEY, toys)

    }

}








// const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery Powered']


// const toy = { 

//             _id: 't101', 
//             name: 'Talking Doll',
//             price: 123,
//             labels: ['Doll', 'Battery Powered', 'Baby'], 
//             createdAt: 1631031801011, 
//             inStock: true
        
//         }
