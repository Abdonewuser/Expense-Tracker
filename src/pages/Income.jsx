import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Income = () => {
    const { transactions } = useOutletContext()
    const incomeTransactions = transactions.filter(t => t.type === "income")
    return (
        <div className="main-content">
            <h1>Income</h1>
            <div className="transaction-list">
                {incomeTransactions.length === 0 ? (
                    <div className="empty-state">
                        <div className="icon">💰</div>
                        <p>No income transactions yet.</p>
                    </div>
                ) : (
                    incomeTransactions.map((transaction) => (
                        <div key={transaction.id} className="transaction-card income">
                            <div className="desc">{transaction.desc || 'No description'}</div>
                            <div className="amount">{transaction.amount}</div>
                            <div className="meta">
                                <span className="type-badge">income</span>
                                <span>{transaction.date}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Income