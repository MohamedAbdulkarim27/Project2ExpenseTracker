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
