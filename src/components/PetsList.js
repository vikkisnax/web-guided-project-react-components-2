import React from 'react'
// 👉 1- We need the Pet component
import Pet from './Pet'

export default function PetsList(props) {
  const { pets } = props
  console.log('pets',pets)

  return (
    <div className='list-pets-friends container'>
      {/* 2- Loop over the data generating a Pet element as you go - .map */}
      {/* What props does the Pet component expect? since we're using .map, key and pet props*/}
      {pets.map((petsObj) => {      // going through each line in the obj
        return (
          <Pet
            key={petsObj.id}
            pet={petsObj}
      />
      )
      })}

    </div>
  )
}
