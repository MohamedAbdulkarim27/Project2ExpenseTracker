import EditForm from "./forms/EditForm"
const InfoCard = ({ budget }) => {
  
  
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