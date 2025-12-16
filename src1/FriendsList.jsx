import React from 'react'

const FriendsList = ({friends}) => {
	return <ul>{
        friends.map( (friend, i) =>
        <li key={i}>{friend}</li>)
		}</ul>
}

export default FriendsList