import React, { useState } from 'react';

const CreatePage = ({ setRefresh }) => {
  const userId = localStorage.getItem('userId');
  const [budgetForm, setBudgetForm] = useState({
    name: '',
    expense: '',
  });

  const handleChange = (event) => {
    event.persist();
    setBudgetForm({
      ...budgetForm,
      [event.target.name]: event.target.value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    const obj = { ...budgetForm, user: userId };
    fetch('https://young-shelf-82889.herokuapp.com/budget', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBudgetForm({
          name: '',
          expense: '',
        });
        setRefresh(data.name);
      })
      .catch((err) => console.log(err));
  }


  return (
    <div className='card-footer'>
      <div className='input-group mb-3'>
        <input
          type='text'
          name='name'
          className='form-control type_msg'
          placeholder='Add Name'
          value={budgetForm.name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='expense'
          className='form-control type_msg'
          placeholder='Add Expense'
          value={budgetForm.expense}
          onChange={handleChange}
        />
        <span
          type='submit'
          onClick={handleSubmit}
          className='input-group-text send_btn'
        >
          <i className='fas fa-plus-circle'></i>
        </span>
      </div>
    </div>
  );
};

export default CreatePage;