const Meal = ({ meal }) => {
  //   console.log(menuItemsCard);
  //   return <p>Meal</p>;
  return (
    <div className="menuBodyCard">
      <div className="menuItemsCard">
        <h2>{meal.title}</h2>
        <p>{meal.description}</p>
        <div className="menuItemsInfo"></div>
        <div className="price-popular-container">
          <div className="price">{meal.price} €</div>
          <div className="populaire">POPULAIRE wip</div>
        </div>
      </div>
      <div className="menuItemCardImage">
        {meal.picture ? (
          <img src={meal.picture} alt="menu item card " />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Meal;
