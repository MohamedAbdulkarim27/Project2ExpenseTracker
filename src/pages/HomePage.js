import React, { useState, useEffect } from 'react';
import CreatePage from "../pages/CreatePage";
import InfoCard from "../components/InfoCard";


const HomePage = () => {
  const [budgetCard, setBudgetCard] = useState([]);
  useEffect(() => {}, [ budgetCard]);
  const total = budgetCard.reduce(
    (totalAmount, budget) => totalAmount + parseInt(budget.expense, 10),
    0
  );
  return (
    <>
      <div className='title'>
        <span>Budget Your Spending</span>
      </div>
      <CreatePage budgetCard={budgetCard} setBudgetCard={setBudgetCard} />
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
