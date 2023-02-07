const MenuItemsCard = ({ menuItemsCard }) => {
  return (
    <div className="menuBodyCard">
      <div className="menuItemsCard">
        <h2>{menuItemsCard.title}</h2>
        <p>{menuItemsCard.description}</p>
        <div className="menuItemsInfo"></div>
        <div className="price-popular-container">
          <div className="price">{menuItemsCard.price} €</div>
          <div className="populaire">POPULAIRE wip</div>
        </div>
      </div>
      <div className="menuItemCardImage">
        {menuItemsCard.picture ? (
          <img src={menuItemsCard.picture} alt="menu item card picture" />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MenuItemsCard;
