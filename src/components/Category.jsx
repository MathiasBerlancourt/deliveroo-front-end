import Meal from "./Meal";

const Category = ({ category, basket, setBasket, handleBasket }) => {
  //   console.log(category);
  return (
    <div className="category">
      <h1>{category.name}</h1>
      <div className="categoryBody">
        {category.meals.map((meal, j) => {
          return (
            <div
              key={meal.id}
              onClick={() => {
                console.log("clg de meal : ", meal);
                handleBasket(meal.id, meal.title, meal.price);
              }}
            >
              {category.meals.length !== 0 && <Meal meal={meal} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
