import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>I am {person.name} and I am {person.age}.My skill is {person.skill}.My ID is {person.id}</h2>
    </div>
  )
}

export default Person
