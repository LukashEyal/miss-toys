import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'



export  const toyService = {
        query,
        getDefaultFilter,
        createToy,
        getById,
        remove,
        save,
        getFilterFromSearchParams,
        getDefaultFilter

}




const TOY_KEY = 'toysDB'



const labels = [
  'On wheels',
  'Box game',
  'Art',
  'Baby',
  'Doll',
  'Puzzle',
  'Outdoor',
  'Battery Powered',
]


_createToys()




async function query(filterBy = {}) {
    try {
        let toys = await storageService.query(TOY_KEY)

        // Destructure with default values
        let {
            name = '',
            label = '',
            inStock,
            sortBy = ''
        } = filterBy

        // Apply filters
        if (name) {
            toys = toys.filter(toy =>
                toy.name.toLowerCase().includes(name.toLowerCase())
            )
        }

        if (label) {
           toys = toys.filter(toy =>
    toy.label === label
)
        }

   if (typeof inStock === 'boolean') {
    toys = toys.filter(toy => toy.inStock === inStock)
}
        // Optional sorting logic
        if (sortBy === 'name') {
            toys.sort((a, b) => a.name.localeCompare(b.name))

   if (sortBy === 'createdAt') {
    toys.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
}

        } else if (sortBy === 'price') {
            toys.sort((a, b) => a.price - b.price)
        }

        return toys
    } catch (err) {
        console.error('Error querying toys:', err)
        throw err
    }
}



// async function query(filterBy) {
//     try {
//         let toys = await storageService.query(TOY_KEY)

//         if (filterBy) {
//             let {
//                 name = '',
//                 price = 0,
//                 inStock,
//                 label = ''
//             } = filterBy

//             toys = toys.filter(toy =>
//                 toy.name.toLowerCase().includes(name.toLowerCase()) &&
//                 toy.price >= price &&
//                 (inStock === undefined || toy.inStock === inStock) &&
//                 toy.label.toLowerCase().includes(label.toLowerCase())
//             )
//         }

//         return toys
//     } catch (error) {
//         console.log('error:', error)
//         throw error
//     }
// }

function getDefaultFilter() {
    return {
        name: '',
        price: 0,
        inStock: undefined,
        label: ''
    }
}


function getFilterFromSearchParams(searchParams) {
    const defaultFilter = getDefaultFilter()
    const filterBy = {}
    for (const field in defaultFilter) {
        filterBy[field] = searchParams.get(field) || ''
    }
    return filterBy
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



function getById(_id) {
    
    return storageService.get(TOY_KEY, _id);
}


function remove(_id) {
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
    if (!toys || !toys.length) {

        toys = [
            { _id: 't101', name: 'Super Racer', price: 199, label: 'On wheels', createdAt: Date.now(), inStock: true },
            { _id: 't102', name: 'Mega Box Challenge', price: 89, label: 'Box game', createdAt: Date.now(), inStock: false },
            { _id: 't103', name: 'Tiny Paint Set', price: 145, label: 'Art', createdAt: Date.now(), inStock: true },
            { _id: 't104', name: 'Baby Blocks', price: 75, label: 'Baby', createdAt: Date.now(), inStock: true },
            { _id: 't105', name: 'Doll House', price: 38, label: 'Doll', createdAt: Date.now(), inStock: false },
            { _id: 't106', name: 'Puzzle Quest', price: 120, label: 'Puzzle', createdAt: Date.now(), inStock: true },
            { _id: 't107', name: 'Outdoor Fun Kit', price: 64, label: 'Outdoor', createdAt: Date.now(), inStock: true },
            { _id: 't108', name: 'Battery Robot', price: 220, label: 'Battery Powered', createdAt: Date.now(), inStock: false },
            { _id: 't109', name: 'Artistic Clay Set', price: 109, label: 'Art', createdAt: Date.now(), inStock: true },
            { _id: 't110', name: 'Wheels of Fury', price: 184, label: 'On wheels', createdAt: Date.now(), inStock: true }
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
