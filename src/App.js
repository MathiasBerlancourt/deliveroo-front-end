import "./assets/css/App.css";
import logoteal from "./assets/img/logo-teal.svg";
import axios from "axios";
import Category from "./components/Category";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);

  const handleBasketMinus = (id) => {
    const newTab = [...basket];

    for (let i = 0; i < newTab.length; i++) {
      if (newTab[i].id === id) {
        newTab[i].quantity -= 1;
        if (newTab[i].quantity === 0) {
          newTab.splice(i, 1);
        }
        break;
      }
    }
    setBasket(newTab);
    console.log(newTab);
  };
  const handleBasket = (id, title, price) => {
    const newTab = [...basket];
    const meal = { id: id, title: title, price: Number(price), quantity: 1 };
    let found = false;
    for (let i = 0; i < newTab.length; i++) {
      if (newTab[i].id === id) {
        found = true;
        newTab[i].quantity += 1;
        break;
      }
    }
    if (found === false) {
      newTab.push(meal);
    }

    setBasket(newTab);
    console.log("Mon newTab après ajout", newTab);
  };
  const sumPrices = (array) => {
    console.log("sumPrice", array);
    let sum = 0;

    array.forEach(({ price, quantity }) => {
      console.log("Price", price);
      return (sum += price * quantity);
    });

    console.log("SUM :", sum);
    return sum;
  };
  console.log("test de sumprices", sumPrices(basket));

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
          {data.categories.map((category, index) => {
            // console.log(category);

            if (category.meals.length !== 0) {
              // Je donne l'objet représentant une categorie en props à mon composant
              return (
                <Category
                  category={category}
                  basket={basket}
                  setBasket={setBasket}
                  handleBasket={handleBasket}
                />
              );
            } else {
              // Sinon rien
              return null;
            }
          })}
        </section>
        <section className="basket">
          <div className="basketContainer">
            <button>Valider mon panier</button>

            <div className="lineContainer">
              {basket.map((line, index) => (
                <article key={index} className="line">
                  <div className="basketCounter">
                    <button
                      onClick={() => {
                        handleBasketMinus(line.id);
                      }}
                    >
                      <span>-</span>
                    </button>
                    <span>{line.quantity}</span>
                    <button
                      onClick={() => {
                        handleBasket(line.id, line.title, Number(line.price));
                      }}
                    >
                      <span>+</span>
                    </button>
                  </div>
                  <div className="basketMeal">
                    <div className="itemTitle">{line.title}</div>
                    <div className="itemAmount">
                      {Number(
                        line.quantity > 1
                          ? line.price * line.quantity
                          : line.price
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="subtotal">
              <div className="basketName">Sous-total</div>
              <div className="basketAmount">{sumPrices(basket)}</div>
            </div>
            <div className="deliveryFees">
              <div className="basketName">Frais de livraison</div>
              <div className="basketAmount">{2.5}</div>
            </div>
            <div className="Total">
              <div className="basketName">Total</div>
              <div className="basketAmount">{sumPrices(basket) + 2.5}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
