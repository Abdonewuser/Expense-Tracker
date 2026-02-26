import React from 'react'
import { useOutletContext } from "react-router-dom"

const HomePage = () => {
    const { transactions, setTransactions } = useOutletContext()
    return (
        <div className="main-content">
            <h1>Home</h1>
            <p className="welcome-text">Welcome to your Expense Tracker</p>
            <div className="homepage-meta">
                <span>{transactions.length}</span> total transactions
            </div>
            <div className="transaction-list">
                {transactions.length === 0 ? (
                    <div className="empty-state">
                        <div className="icon">📊</div>
                        <p>No transactions yet. Add one to get started.</p>
                    </div>
                ) : (
                    transactions.map((transaction) => (
                        <div key={transaction.id} className={`transaction-card ${transaction.type}`}>
                            <div className="desc">{transaction.desc || 'No description'}</div>
                            <div className="amount">{transaction.amount}</div>
                            <div className="meta">
                                <span className="type-badge">{transaction.type}</span>
                                <span>{transaction.date}</span>
                            </div>
                            <button onClick={() => {
                                // Filter out the transaction with the matching id and update the transactions state
                                setTransactions(transactions.filter(t => t.id !== transaction.id))
                            }}>Delete</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default HomePage