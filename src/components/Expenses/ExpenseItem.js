import { useState } from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!!!');
        //console.log('Clicked!!!!');
    };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                    <button onClick={clickHandler}>Change Title</button>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
