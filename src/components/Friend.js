import React from 'react'
import FriendsList from './FriendsList'
import PetsList from './PetsList'

export default function Friend(props) {
  // 👉 1- What does a Friend need? -- needs prop(s) bc it isn't being used rn. so FriendsList can't access it 
  const {friendDetails, changeCivilStatus} = props


  return (
    <div className='friend-friends container'>
      {/* 👉 2- Fix the JSX so it displays real info coming into the component */}
      
      <div className='friend-info'>
        <div >
          <h3>Name: {friendDetails.name}</h3>
          <p>Age: {friendDetails.age}</p>

          <p>Married: {friendDetails.married ? 'Yes' : 'No'} <button onClick={(evt) => changeCivilStatus(friendDetails.id)}>change</button>
          </p>
          <div>Likes:
            <ul>
              {/* 👉 3- Loop over the friend's hobbies and generate <li/> elements as you go */}
              {
                friendDetails.hobbies.map((hobb) => {
                  console.log(hobb); //returns list of all hobbies from everyone
                  return <li key={hobb}>{hobb}</li>
                })
              }
            </ul>
          </div>
        </div>

        <div>
          {/* 👉 3- What data does the PetsList need? */}
          {/* What is the exact name of the prop/props it expects? pets. same as in Pet component*/}
          {/* Is the data around here somewhere so I may pass it to the pets prop? into PetsList?*/}
           {/* rendering PetsList component */}
          <PetsList pets={friendDetails.pets} /> 
          {/* now have pets property inide of PetsList component. 'pets' is the property name (the prop name that we also put in PetsList and we're pulling out 'pets' objects from the friendDetails array (which is the friend's array) */}
        </div>
      </div>
    </div>
  )
}
