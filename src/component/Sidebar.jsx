import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="add">Add Transaction</NavLink>
            <NavLink to="income">Income</NavLink>
            <NavLink to="expense">Expenses</NavLink>
        </div>
    )
}

export default Sidebar