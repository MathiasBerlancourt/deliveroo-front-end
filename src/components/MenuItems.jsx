import MenuItemsCard from "./MenuItemsCard";

const MenuItems = ({ menuItems }) => {
  return (
    <div className="menuItems">
      <h1>{menuItems.name}</h1>
      <div className="menuItemsBody">
        {menuItems.meals.map((menuItemsCard, j) => {
          console.log(menuItemsCard);
          return <MenuItemsCard meals={menuItemsCard} />;
        })}
      </div>
    </div>
  );
};

export default MenuItems;
