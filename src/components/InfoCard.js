import EditForm from "./forms/EditForm"
const InfoCard = ({ budget }) => {
  const obj = { userId: localStorage.getItem('userId') };
  const toggleEditForm = () => {
    document.getElementById(`budgetCard${budget._id}`).style.display = 'none';
    document.getElementById(`editForm${budget._id}`).style.display = 'inline';
  };

  function deleteBudget() {
    fetch(`https://young-shelf-82889.herokuapp.com/budget/${budget._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRefresh(data);
      })
      .catch((err) => console.log(err));
  }
  
  return (
    <>
      <div className='budgetCont'>
        <div id={`budgetCard${budget._id}`} className='budgetCard'>
          <span>{budget.name}</span>
          <span>{budget.expense}</span>
        </div>
        <EditForm index={index} budget={budget} setRefresh={setRefresh} />
        <span onClick={() => toggleEditForm()}>
          <i className='fas fa-marker'></i>
        </span>
        <span onClick={() => deleteBudget(budget._id)}>
          <i className='fas fa-trash-alt'></i>
        </span>
      </div>
      <hr />
      <br />
    </>
  );
};

export default InfoCard;