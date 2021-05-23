import React, { useState, useEffect } from 'react';



const HomePage = () => {
  
  
  return (
    <>
      <div className='title'>
        <span>Budget Your Spending</span>
      </div>
      
      <div className='budgetCont'>
        <div className='budgetCard'>
          <span className='titleName'>Name:</span>
          <span className='titleExpense'>Expense:</span>
        </div>
      </div>
      

      <div className='budgetCont'>
        <div className='budgetCard'>
          <span>Total:</span>
          <span>Amount</span>
          
        </div>
      </div>
    </>
  );
};

export default HomePage;
