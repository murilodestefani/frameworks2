import { useEffect, useState } from "react";
import "./style.css";
interface FoodProps {
  food: {
    label: string;
    category: string;
    image: string;
  };
}

export function Produto() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    function getFood() {
      fetch(
        "https://api.edamam.com/api/food-database/v2/parser?app_id=9eac306d&app_key=085fe1bec89b6fad168286e2d7cc4422&nutrition-type=cooking"
      )
        .then((response) => response.json())
        .then((data) => {
          setFoods(data.hints);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getFood();
  }, []);

  return (
    <div>
      <div className="cabecalho">
        <h1 className="title">Página de Produtos</h1>
      </div>

      <div className="card-list">
        {foods.map((item, index) => (
          <div key={index} className="food-list">
            <img src={item.food.image} alt={item.food.label} />
            <h3>{item.food.label}</h3>
            <p>{item.food.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
