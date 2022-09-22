import React from 'react'

function List({persons}) {
    // persons is our prop from the parent APP.js
  return (
    <>
    {persons.map((person) => {
        // we are distructuring the objects keys inside the data.js
        const {id,name,age,image} = person
        return <article key={id} className="person" >
            <img src={image} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>

        </article>

    })}
    </>
  )
}

export default List