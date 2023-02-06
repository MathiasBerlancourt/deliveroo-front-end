import "./assets/css/App.css";
import logoteal from "./assets/img/logo-teal.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import { computeHeadingLevel } from "@testing-library/react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3200/");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="App">
      <div className="header">
        <img src={logoteal} alt="logo de l'application deliveroo" />
      </div>
      <div className="restaurantInfos">
        <img
          className="cover"
          src={data.restaurant.picture}
          alt="restaurant cover"
        />
        <div className="text">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
      </div>

      {data.categories.map((menuItems, index) => (
        <div className="menuItems">
          <h2>{menuItems[index].name}</h2>

          {data.categories[index].meals.map((menuItemsCard, j) => (
            <div className="menuItemsCard">
              <h3>{menuItemsCard.title}</h3>
              <p>{menuItemsCard.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
