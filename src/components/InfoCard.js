const InfoCard = ({ budget }) => {
    return (
      <>
        <div className='budgetCont'>
          <div className='budgetCard'>
            <span>{budget.name}</span>
            <span>{budget.expense}</span>
          </div>
        </div>
      </>
    );
  };
  
  export default InfoCard;