import React, { useState, useEffect } from 'react';
import CreateForm from "../components/forms/CreateForm";
import InfoCard from "../components/InfoCard";


const HomePage = () => {
  const obj = { userId: localStorage.getItem('userId') };
  const [refresh, setRefresh] = useState(null);
  const [budgetCard, setBudgetCard] = useState([]);
  const [budgetAmount, setBudgetAmount] = useState({
    amount: '0',
    setAmount: '0',
  });
  const total = budgetCard.reduce((totalAmount, budget) => totalAmount + +budget.expense,0);
  useEffect(() => {
    fetch('https://young-shelf-82889.herokuapp.com/budget/index', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBudgetCard(data);
      })
      .catch((err) => console.log(err));
  }, [refresh]);
  const handleBudgetAmountChange = (event) => {
    event.persist();
    setBudgetAmount(() => ({
      ...budgetAmount,
      [event.target.name]: event.target.value,
    }));
  };
  const handleBudgetAmountSubmit = (event) => {
    event.preventDefault();

    setBudgetAmount({
      setAmount: budgetAmount.amount,
      amount: '0',
    });
  };
  return (
    <>
      <div className='title'>
        <span className = 'spanTitle'>Budget Your Spending</span>
      </div>
      <CreateForm budgetCard={budgetCard} setRefresh ={setRefresh} setBudgetCard={setBudgetCard} />
      <div className = 'pieChart'></div>
      <div className='card-footer'>
        <div className='input-group mb-3'>
          <input
            id='budgetAmount'
            name='amount'
            className='form-control type_msg'
            type='text'
            placeholder='Whats your Budget?'
            value={budgetAmount.amount}
            onChange={handleBudgetAmountChange}
          />
          <span
            type='submit'
            onClick={handleBudgetAmountSubmit}
            className='input-group-text send_btn'
          >
            <i className='fas fa-plus-circle'></i>
          </span>
        </div>
        <span className='text-white'>
          Your Budget Amount is: {budgetAmount.setAmount}
        </span>
      </div>
      {total > +budgetAmount.setAmount && (
        <div className='alert alert-danger' role='alert'>
          {' '}
          You Have Exceeded your Budget
        </div>
      )}
      <div className='budgetCont'>
        <div className='budgetCard'>
          <span className='titleName'>Name:</span>
          <span className='titleExpense'>Expense:</span>
        </div>
      
      </div>
      {budgetCard &&
        budgetCard.map((budget, index) => {
          return <InfoCard budget={budget} key={index} />;
        })}

      <div className='budgetCont'>
        <div className='budgetCard'>
          <span>Total:</span>
          <span>{total}</span>
          
        </div>
      </div>
    </>
  );
};

export default HomePage;
