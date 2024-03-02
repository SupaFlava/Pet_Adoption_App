import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import fetchpet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchpet);
  console.log("result", results);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">loading !!!</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];
  console.log("pet", pet);
  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.name} - {pet.city} , {pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  );
};

export default Details;