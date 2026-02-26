import { useState } from 'react'
import './App.css'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import Income from './pages/Income'
import Expense from './pages/Expense'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TransactionForm from './pages/TransactionForm'



function App() {
  const [transactions, setTransactions] = useState([])

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
      element: <Layout />,
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
