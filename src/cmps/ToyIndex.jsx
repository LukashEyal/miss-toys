import { toyService } from '../services/toy.service.js'
import { useSearchParams } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { loadToys, setFilter, removeToy } from '../store/actions/toy.actions.js'
import { ToysList } from './ToyList.jsx'
import { ToyFilter } from './ToyFilter.jsx'

export function ToyIndex() {
  const [searchParams, setSearchParams] = useSearchParams()

  const filterBy = useSelector((state) => state.toyModule.filterBy)

  const toys = useSelector((state) => state.toyModule.toys)

  const dispatch = useDispatch()

  useEffect(() => {
    loadToys()
  }, [filterBy])

  if (!toys) return <div>loading</div>

  async function onRemoveToy(toyId) {
    try {
      await removeToy(toyId)
    } catch (error) {
      console.log('Error ->', error)
    }
  }

  function onSetFilterBy(filterBy) {
    setFilter(filterBy)
  }

  return (
    <div>
      <ToyFilter onSetFilterBy={onSetFilterBy} filterBy={filterBy} />

      <ToysList toys={toys} onRemoveToy={onRemoveToy} />
      <Outlet />
    </div>
  )
}
