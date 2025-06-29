import { toyService } from '../services/toy.service.js'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { loadToys } from '../store/actions/toy.actions.js'
import { ToysList } from './ToyList.jsx'

export function ToyIndex() {
  const toys = useSelector((state) => state.toyModule.toys)

  const dispatch = useDispatch()

  useEffect(() => {
    loadToys()
  })

  if (!toys) return <div>loading</div>

  return (
    <div>
      <h1>Toys list</h1>
      <ToysList toys={toys} />
    </div>
  )
}
