import { createContext, useContext, useEffect, useState } from "react";

const mainContext = createContext({
  isMenuOpen: false,
  subMenuOpen: [],
  isOpen: true,
  items: [],
  handlerMenu: () => {},
  handlerOpenSubmenu: () => {},
  verifyer: () => {},
  openCart: () => {},
  closeCart: () => {},
  addItemToCart: (item) => {},
  getNumberOfItems: () => {},
  addOneItem: (item) => {},
  subOneItem: (item) => {},
  removeItem: (item) => {},
});

export default function ContextWrapper({ children }) {
  //State del carrito de compras
  const [items, setItems] = useState([ ]);


  useEffect(() => {
    const cartItems = localStorage.getItem("items");
    const items = JSON.parse(cartItems);

    if (items && items.length > 0) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const [isOpen, setIsOpen] = useState(false);

  function handleOpenCart() {
    setIsOpen(true);
  }
  function handleCloseCart() {
    setIsOpen(false);
  }

  //State del menu responsive

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState([
    { label: "By product", state: false },
    { label: "Costumer Service", state: false },
  ]);

  function handlerMenu() {
    setIsMenuOpen(!state);
  }

  function handlerOpenSubmenu(label) {
    setSubMenuOpen((prevState) =>
      prevState.map((obj) =>
        obj.label === label ? { ...obj, state: !obj.state } : obj
      )
    );
  }

  function handleAddItemToCart(item) {
    const temp = [...items];
    const found = temp.find((product) => product.id == item.id);
    if (found) {
      found.quantity++;
    } else {
    
      temp.push(item);
    }
    setItems([...temp]);
  }

  function handleAddOneItem(item) {
    const temp = [...items];
    const found = temp.find((product) => product.id == item.id);

    if (found) {
      found.quantity++;
    }
    setItems([...temp]);
  }

  function handleSubOneItem(item) {
    const temp = [...items];
    const found = temp.find((product) => product.id == item.id);
    if (found && found.quantity > 1) {
      found.quantity--;
    }
    setItems([...temp]);
  }

  function handleRemoveItem(item) {
    const temp = [...items];
    const found = temp.findIndex((product) => product.id == item.id);
    temp.splice(found, 1);
    setItems([...temp]);
  }

  function verifyer(label) {
    const obj = subMenuOpen.find((object) => object.label === label);
    // Si el objeto fue encontrado, retorna el valor de state correspondiente
    if (obj) {
      return obj.state;
    }
    // Si el objeto no fue encontrado, retorna undefined
    return undefined;
  }

  return (
    <mainContext.Provider
      value={{
        items: items,
        isOpen,
        isMenuOpen,
        handlerMenu,
        handlerOpenSubmenu,
        verifyer,
        addItemToCart:handleAddItemToCart,
        addOneItem: handleAddOneItem,
        subOneItem: handleSubOneItem,
        removeItem: handleRemoveItem,
        openCart: handleOpenCart,
        closeCart: handleCloseCart,
      }}
    >
      {children}
    </mainContext.Provider>
  );
}
export function useAppContext() {
  return useContext(mainContext);
}
