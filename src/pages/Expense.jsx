import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Expense = () => {
    const { transactions } = useOutletContext()
    const expenseTransactions = transactions.filter(t => t.type === "expense")
    return (
        <div className="main-content">
            <h1>Expenses</h1>
            <div className="transaction-list">
                {expenseTransactions.length === 0 ? (
                    <div className="empty-state">
                        <div className="icon">💸</div>
                        <p>No expense transactions yet.</p>
                    </div>
                ) : (
                    expenseTransactions.map((transaction) => (
                        <div key={transaction.id} className="transaction-card expense">
                            <div className="desc">{transaction.desc || 'No description'}</div>
                            <div className="amount">{transaction.amount}</div>
                            <div className="meta">
                                <span className="type-badge">expense</span>
                                <span>{transaction.date}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Expense