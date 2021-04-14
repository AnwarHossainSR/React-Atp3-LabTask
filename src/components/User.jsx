import React from 'react'

const User = ({id,name,dept,email}) => {
    return (
        <div>
            <h1>Name: {name}</h1>
			<p>ID: {id}</p>
			<p>DEPT: {dept}</p>
			<p>DEPT: {email}</p>
        </div>
    )
}

export default User
