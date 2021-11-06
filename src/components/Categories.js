import { useState } from "react";
import { plantList } from "../datas/plantList";
import AddCart from "./AddCart";

function Categories() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  const [choice, setChoice] = useState("---");

  console.log([choice]);

  return choice ? (
    <ul className="lmj-plant-list">
      {categories.filter(
        (choice) =>
          choice ===
          categories.category => (
            <div key={choice} category={choice}>
              <AddCart />
            </div>
          )
      )}
    </ul>
  ) : (
    <select value={choice} onChange={(e) => setChoice(e.target.value)}>
      {categories.map((cat) => (
        <option value={cat} key={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}

export default Categories;
