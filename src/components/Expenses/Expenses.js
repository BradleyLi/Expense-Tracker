import { useState } from 'react'
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState(2020);

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseList items={filteredExpenses} />
            </Card>
        </div>

    );
}

export default Expenses;