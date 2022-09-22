import React, { useState } from "react";
import data from "../data"
import List from "./List";
function App() {
  const [persons, setPersons] = useState(data)
  return <main>
    <section className="container"> 
    {/* since our project is array we can do persons.length*/}
      <h3>{persons.length} birthdays today</h3> 
      <List persons={persons} />
      <button onClick={()=> setPersons([/**its empty array koz we want to clear the object array when we click on the button */])} >Clear All</button>
    </section>
  </main>
}

export default App;
