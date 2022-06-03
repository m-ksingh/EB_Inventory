import React, {useState} from 'react'
import "./inventorytable.css"

function Inventorytable() {
    const [noOfRows, setNoOfRows] = useState(0);
    const addrowhandeler = ()=>{
        setNoOfRows(noOfRows + 1)
    }
    const deleterowhandeler = ()=>{
        if(noOfRows > 0){
            setNoOfRows(noOfRows - 1)
        }
       
    }
  return (
    <div>
        <button type="button" className="btn1 btn btn-primary me-3" onClick={addrowhandeler}>Add item</button>
            <button type="button" className="btn btn-danger" onClick={deleterowhandeler }>Delete item</button>
      <div className='table-responsive'>
          
        <table className="table">
    <thead>
        
      <tr>
      <th className="header-label">#</th>
        <th className="header-label" >Item</th>
        <th className="header-label">Item Description</th>
        <th className="header-label">Pack</th>
        <th className="header-label">Unit</th>
        <th className="header-label">Quantity Ordered</th>
        <th className="header-label">Calculate</th>
        <th className="header-label">Rate</th>
        <th className="header-label">Item Amount</th>
        <th className="header-label">Total Amount</th>
        <th className="header-label">Default Charge</th>
        <th className="header-label">Vat Applicable</th>
        <th className="header-label">Vat Included</th>

        <th className="header-label">Item Tax Class</th>
        <th className="header-label">Group</th>
        <th className="header-label">Justification</th>
        <th className="header-label">Max Quantity Justification</th>
        <th className="header-label">Brand Id</th>
        <th className="header-label">Brand Name</th>
        <th className="header-label">Unit Description</th>
        <th className="header-label">Schedule</th>
        <th className="header-label">Last Date Received</th>
        <th className="header-label">Free of Cost</th>
        <th className="header-label">Quantity Received</th>
        <th className="header-label">Lowest Receipt Rate</th>
        <th className="header-label">Lowest Receipt Date</th>
        <th className="header-label">Lowest Receipt Property</th>
      </tr>
      {[...Array(noOfRows)].map((elementInArray, index) => {
         
         return (
      <tr>
     <td></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td ><input type="text" /></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>

        <td ><input type="text" /></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td ><input type="text" /></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td ><input type="text" /></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td ><input type="text" /></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td ><input type="text" /></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td ><input type="text" /></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td ><input type="text" /></td>
        <td ><input type="text" /></td>
      </tr>
        );
    })}
    </thead>
    <tbody>
      {/* <tr>
        <td>0</td>
        <td>Paige Bean</td>
        <td>+1 (871) 458-2959</td>
        <td>MOREGANIC</td>
        <td>2018-12-27T11:28:50 -01:00</td>
        <td>false</td>
      </tr> */}
     
    </tbody>
  </table>
      </div>
  </div>
  )
}

export default Inventorytable