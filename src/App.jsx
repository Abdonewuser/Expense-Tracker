import { useEffect, useState } from 'react'
import './App.css'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import Income from './pages/Income'
import Expense from './pages/Expense'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TransactionForm from './pages/TransactionForm'



function App() {
  // Generate dummy transactions for testing
  // useEffect(() => {
  //   let dummyTransactions = []
  //   for (let i = 0; i < 20; i++) {
  //     dummyTransactions.push({
  //       id: i + 1,
  //       amount: (Math.random() * 100).toFixed(2),
  //       type: Math.random() > 0.5 ? "income" : "expense",
  //       desc: "Dummy transaction " + (i + 1),
  //       date: new Date().toISOString().split('T')[0]
  //     })
  //   }
  //   setTransactions(dummyTransactions)
  // }, [])
  const [transactions, setTransactions] = useState(() => {
    const data = localStorage.getItem("transactions");
    return data ? JSON.parse(data) : []
  })

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  // Create Router
  const router = createBrowserRouter([
    /*
    This means:
    When URL starts with "/"
    Render <Layout />.

    Then inside Layout, look for <Outlet />.

    Whatever child route matches will render inside that Outlet.
     */
    {
      path: "/",
      element: <Layout
        // This way we can pass transactions and setTransactions to all child components of Layout through the Outlet context.
        transactions={transactions}
        setTransactions={setTransactions}
      />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "add",
          element: <TransactionForm />
        },
        {
          path: "income",
          element: <Income />
        },
        {
          path: "expense",
          element: <Expense />
        }
      ]
    }
  ])

  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
