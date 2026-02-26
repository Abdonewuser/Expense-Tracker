import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
    return (
        <div style={{ display: 'flex', flexFlow: "column", gap: '30px', width: '10vw', height: '100vh', backgroundColor: '#ecd365ff', padding: '10px' }}>
            <NavLink to="/" ><span>Home</span></NavLink>
            <NavLink to="add"><span>Add Transaction</span></NavLink>
            <NavLink to="income"><span>Income</span></NavLink>
            <NavLink to="expense"><span>Expenses</span></NavLink>





        </div>
    )
}

export default Sidebar