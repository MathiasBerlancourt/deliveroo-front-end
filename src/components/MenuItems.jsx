import MenuItemsCard from "./MenuItemsCard";

const MenuItems = ({ menuItems }) => {
  //   console.log(menuItems);
  return (
    <div className="menuItems">
      <h1>{menuItems.name}</h1>
      <div className="menuItemsBody">
        {menuItems.meals.map((menuItemsCard, j) => {
          console.log(menuItemsCard);
          return (
            <div
              key={menuItemsCard.id}
              onClick={() => {
                console.log(menuItemsCard);
              }}
            >
              {menuItems.meals.length !== 0 && (
                <MenuItemsCard menuItemsCard={menuItemsCard} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItems;
