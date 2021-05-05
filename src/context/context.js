import React, {useReducer, createContext} from 'react'
import contextReducer from './contextReducer'
const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transaction, dispatch] = useReducer(contextReducer, initialState)

    //Action creators
    const deleteTransaction = (id) => {
        dispatch({type: "DELETE_TRANSACTION" , payload: id})
    }

    const addTransaction = (transaction) => {
        dispatch({type: "ADD_TRANSACTION", payload: transaction})
    }

    const balance = transaction.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transaction,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}