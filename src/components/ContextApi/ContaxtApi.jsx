import { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext(); // Corrected the name to CartDispatchContext

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, {
        id: action.id, img: action.img, name: action.name, description: action.description, CategoryName: action.CategoryName, qty: action.qty, size: action.size, finalPrice: action.finalPrice
      }]
      break;
    case "remove":
      const currentState = [...state];
      console.log(currentState)
      currentState.splice(action.index, 1)
      return currentState
      break;
    case "update":
      let arr = [...state]
      arr.find((food, index) => {
        if (food.id === action.id) {
          console.log(food.qty, parseInt(action.qty), action.finalPrice + food.finalPrice)
          arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, finalPrice: action.finalPrice + food.finalPrice }
        }
        return arr
      })
      return arr
    case "dorp": {
      const arr = []
      return arr
    }
    default:
      return state
      break;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartDispatch = () => useContext(CartDispatchContext);
export const useCartState = () => useContext(CartStateContext);
