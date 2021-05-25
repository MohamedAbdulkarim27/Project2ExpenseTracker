import React, { useState } from 'react';

const EditForm = ({ budget, setRefresh }) => {
  const toggleEditForm = () => {
    document.getElementById(`budgetCard${budget._id}`).style.display = 'flex';
    document.getElementById(`editForm${budget._id}`).style.display = 'none';
  };

  const userId = localStorage.getItem('userId');
  const [editForm, setEditForm] = useState({
    name: budget.name,
    expense: budget.expense,
  });

  const handleChange = (event) => {
    event.persist();
    setEditForm((editForm) => ({
      ...editForm,
      [event.target.name]: event.target.value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    const obj = { ...editForm, user: userId };
    fetch(`https://young-shelf-82889.herokuapp.com/budget/${budget._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEditForm({
          name: '',
          expense: '',
        });
        toggleEditForm();
        setRefresh(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div
      id={'editForm${budget._id}'}
      style={{ display: 'none' }}
      className='card-footer'
    >
      <div className='input-group mb-3'>
        <input
          type='text'
          name='name'
          className='form-control type_msg'
          placeholder='Add Name'
          value={editForm.name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='expense'
          className='form-control type_msg'
          placeholder='Add Expense'
          value={editForm.expense}
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

export default EditForm;