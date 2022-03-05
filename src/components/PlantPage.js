import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(plants => setPlants(plants))
  }, [])

  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  function filterSearch(newSearch){
    setSearch(newSearch)
  }
  
  return (
    <main>
      <NewPlantForm />
      <Search search={search} filteredSearch={filterSearch} />
      <PlantList filteredPlants={filteredPlants} plants={plants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
