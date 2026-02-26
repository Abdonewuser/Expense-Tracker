import React from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';

const TransactionForm = ({ setTransactions }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        let id = uuidv4();

        console.log("I am data " + data.amount, data.type, data.desc, data.date, id)
        setTransactions(
            [...transactions, { id: id, amount: data.amount, type: data.type, desc: data.desc, date: data.date }]
        )

    }


    return (
        <div><form onSubmit={handleSubmit(onSubmit)}>

            <input
                placeholder='$'
                {...register("amount", { required: { value: true, message: "Please enter the amount" } })} />
            {errors.amount && <div style={{ color: "red" }}>{errors.amount.message}</div>}

            <select {...register("type", { required: true })}>
                <option value="">Select Transaction Type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>

            <input placeholder='Description'
                {...register("desc")} />

            <input type="date" {...register("date")} />
            <input type="submit" />
        </form></div>
    )
}

export default TransactionForm