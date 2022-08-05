// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, { useState }from 'react'
import FriendsList from './FriendsList'
import Search from './Search'
// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)
import friendsDummyData, {hello} from '../dummy-data/friends'


export default function App() {
  // 👉 3- Initialize a slice of state to keep track of the DATA using the dummy data as the initial value of the slice of state
  const [myFriends, setMyFriends] = useState(friendsDummyData);

  // 👉 4- Initialize a slice to keep track of the VALUE of the search* box using an empty string as the initial value of the slice
  const [search, setSearch] = useState('');

  // 👉 5- Build a `changeStatus` function that takes an id and changes the `married` from true to false and viceversa
  function changeStatus(id){
    setMyFriends(myFriends.map(friend=>{
      // //for each friend, if the friend has the given id, 
      // if (friend.id === id){
      //   //return copy of friend object which has the toggled marriage status. change to prop name after the comma
      //   return {...friend, married: !friend.married}
      // }
      // //otherwise return friend unchanged 
      // return friend

      //OR USE A TERNARY 
      return friend.id === id ? { ...friend, married: !friend.married } : friend
    }))
  }

  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)
  // https://dev.to/salehmubashar/search-bar-in-react-js-545l Looking at this 

 


  return (
    <div className='app-friends container'>
        {/* 👉 6- Render the Search component */}
    
        {/* STRETCH - Changes to the input should update the search term */}

        {/* 👉 7- Render the FriendsList component */}
        {/* What prop/props does FriendsList need? */}
      <FriendsList friends={myFriends} changeStatusFunc={changeStatus}/>
    </div>
  )
}
