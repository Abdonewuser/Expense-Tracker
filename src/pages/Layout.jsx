import React from 'react'
import Sidebar from '../component/Sidebar'
import { Outlet } from 'react-router-dom'



const Layout = ({ transactions, setTransactions }) => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            {/* This is where the child routes will be rendered.
            We have received transactions and setTransactions as props from App.jsx, and we can pass them to the Outlet context so that all child components of Layout can access them. */}
            <Outlet context={{ transactions, setTransactions }} />
        </div>
    )
}

export default Layout