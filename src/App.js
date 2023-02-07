import "./assets/css/App.css";
import logoteal from "./assets/img/logo-teal.svg";
import axios from "axios";
import MenuItems from "./components/MenuItems";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--x9gzzf87kd8r.code.run/"
        );
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
      <div className="container">
        <section className="menu">
          {data.categories.map((menuItems, index) => {
            console.log(menuItems);

            if (menuItems.meals.length !== 0) {
              // Je donne l'objet représentant une categorie en props à mon composant
              return <MenuItems menuItems={menuItems} />;
            } else {
              // Sinon rien
              return null;
            }
          })}
        </section>
        <section className="basket">
          <button>Valide mon panier</button>
          <article className="line"></article>
          <div className="subtotal">Sous-total</div>
          <div className="deliveryFees">Frais de livraison</div>
          <div className="Total">Total</div>
        </section>
      </div>
    </div>
  );
}

export default App;
