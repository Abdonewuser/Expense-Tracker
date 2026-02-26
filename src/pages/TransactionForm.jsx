import React from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';
import { useOutletContext } from "react-router-dom"

const TransactionForm = () => {
    const { transactions, setTransactions } = useOutletContext()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        let id = uuidv4();
        setTransactions([...transactions, { id, amount: data.amount, type: data.type, desc: data.desc, date: data.date }])
        reset()
    }

    return (
        <div className="main-content">
            <h1>Add Transaction</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <label className="form-label">Amount</label>
                        <input
                            placeholder="0.00"
                            {...register("amount", { required: { value: true, message: "Please enter the amount" } })}
                        />
                        {errors.amount && <div className="error-msg">{errors.amount.message}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Transaction Type</label>
                        <select {...register("type", { required: true })}>
                            <option value="">Select type...</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <input placeholder="What was this for?" {...register("desc")} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Date</label>
                        <input type="date" {...register("date")} />
                    </div>

                    <input type="submit" value="Add Transaction" />
                </form>
            </div>
        </div>
    )
}

export default TransactionForm