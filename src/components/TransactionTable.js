import React, {useState} from "react";

function TransactionTable({txns}) {
  const [trxn, setTrxn] = useState(txns);
  // const [txns, setTxns] = useState([]);
  const [dateVal, setDateVal] = useState('');
  const [count, setCount] = useState(0);
  
  const sort = (val) => {
    const data = trxn.sort(function(a, b) {
      return a[val] - b[val];
    });

    setCount(count+1)
    setTrxn(data);
  };

  const getValue =(e) => {
    setDateVal(e.target.value);
  }
  
  const filterData =() =>{
    const data = txns.filter((item) => {
       return item.date === dateVal;
    });
    console.log(data);
    setTrxn(data);
  }


  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input id="date" type="date" defaultValue="2019-11-29" onChange={(e) =>getValue(e)} />
        <button className="small" onClick={() => filterData()}>Filter</button>
      </section>

      <div className="card mt-50">
          <table className="table" >
              <thead>
              <tr className="table">
                  <th className="table-header">Date</th>
                  <th className="table-header">Description</th>
                  <th className="table-header">Type</th>
                  <th className="table-header">
                      <span id="amount" onClick={() =>sort('amount')}>Amount ($)</span>
                  </th>
                  <th className="table-header">Available Balance</th>
              </tr>
              </thead>
              <tbody>
                {
                  trxn.map((item, index) => {
                    return(
                      <tr key={index} >
                  <td>{item.date}</td>
                  <td>{item.description}</td>
                  <td>{item.type === 1 ? "Debit" : "Credit"}</td>
                  <td>{item.amount}</td>
                  <td>{item.balance}</td>
              </tr>
                    )
                  })
                }
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default TransactionTable;
