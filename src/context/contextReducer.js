//TODO: Reducer is a function that takes old state and an action and return a new state.
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const contextReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter((t) => t.id !== action.payload);
      toast.error("TRANSACTION DELETED SUCCESSFULLY", { position: toast.POSITION.TOP_RIGHT });
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];
      toast.success("TRANSACTION ADDED SUCCESSFULLY", { position: toast.POSITION.TOP_LEFT });
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    default:
      return state;
  }
};

export default contextReducer;
