import React, { useState } from "react"

import VirtualizedSelect from 'react-virtualized-select'
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import "./inventory.css"
import Inventorytable from "../component/inventorytable"

function Inventory() {
    const [datefrom, setDatefrom] = useState();
    const [dateto, setDateto] = useState();
    const [itemtype, setItemtype] = useState(null)
    const type = [
        { label: "One", value: 1 },
        { label: "Two", value: 2 },
        { label: "Three", value: 3 },
        { label: "Four", value: 4 },
        { label: "Five", value: 5 },
        { label: "Six", value: 6 }
      ]

      const [vendortype, setVendortype] = useState(null)
      const vendor = [
        { label: "One 2", value: 1 },
        { label: "Two", value: 2 },
        { label: "Three", value: 3 },
        { label: "Four", value: 4 },
        { label: "Five", value: 5 },
        { label: "Six", value: 6 }
      ]
      const [item, setItem] = useState(null)
      const items = [
        { label: "One 3", value: 1 },
        { label: "Two", value: 2 },
        { label: "Three", value: 3 },
        { label: "Four", value: 4 },
        { label: "Five", value: 5 },
        { label: "Six", value: 6 }
      ]

      const [packtype, setPack] = useState(null)
      const pack = [
        { label: "One 4", value: 1 },
        { label: "Two", value: 2 },
        { label: "Three", value: 3 },
        { label: "Four", value: 4 },
        { label: "Five", value: 5 },
        { label: "Six", value: 6 }
      ]

      const [classtype, setClasstype] = useState(null)
      const classes = [
        { label: "One 5", value: "One2" },
        { label: "Two", value: 2 },
        { label: "Three", value: 3 },
        { label: "Four", value: 4 },
        { label: "Five", value: 5 },
        { label: "Six", value: 6 }
      ]

      const datefromHandleChange = (e) => {
        setDatefrom(e.target.value);
        console.log(e.target.value);
      }
    
      const datetoHandleChange = (e) => {
        setDateto(e.target.value);
        console.log(e.target.value);
      }



console.log(classes[0].value)
const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
      <>
      <div style={{display:"flex"}}>
    <form className="row g-3 abc">
        <div>
            <h5 className="heading">POP Details </h5>
        </div>
    <div className="col-md-3">
      <label for="Number" className="form-label">PO Number / Date</label>
      <div style={{display:"flex"}}>
      <input type="text" className="form-control" />
      <input  className="form-control" value={date} />
      </div>
    </div>
    <div className="col-md-3">
      <label for="Number" className="form-label">Amendment Number</label>
      <input type="text" className="form-control" />
    </div>
    <div className="col-md-3">
      <label for="Number" className="form-label">Last Reminder Number</label>
      <input type="text" className="form-control" />
    </div>
    <div className="col-md-3">
      <label for="FromDate" className="form-label">From Date</label>
      <input type="Date" className="form-control" onChange={datefromHandleChange} />
    </div>
    <div className="col-md-3">
      <label for="ToDate" className="form-label">To Date</label>
      <input type="Date" className="form-control" onChange={datetoHandleChange} />
      {datefrom > dateto ? <p style={{ fontSize: "12px", color: "#F1844D", fontWeight: "bold" }}>To Date must be greater than From Date</p> : ''}
    </div>

    <div className="col-md-3">
      <label for="Type" className="form-label">Type</label>
     
      <VirtualizedSelect
        options={type}
        onChange={(value) => setItemtype(value)}
        value={itemtype}
      />
    </div>

    <div className="col-md-3">
      <label for="Classs" className="form-label">Class</label>
       
      <VirtualizedSelect
        options={classes}
        onChange={(value) => setClasstype(value)}
        value={classtype}
      />
    </div>
    <div className="col-md-3">
      <label for="Number" className="form-label">Currency</label>
      <input type="text" className="form-control" />
    </div>
    <div className="col-md-3">
      <label for="Vendor" className="form-label">Vendor</label>
       
      <VirtualizedSelect
        options={vendor}
        onChange={(value) => setVendortype(value)}
        value={vendortype}
      />
    </div>
    {/* <div className="col-md-3">
      <label for="Item" className="form-label">Item</label>
       
      <VirtualizedSelect
        options={items}
        onChange={(value) => setItem(value)}
        value={item}
      />
    </div>
    <div className="col-md-3">
      <label for="Item" className="form-label">Pack</label>
       
      <VirtualizedSelect
        options={pack}
        onChange={(value) => setPack(value)}
        value={packtype}
      />
    </div> */}
    
    <div className="col-md-3">
      <label for="Number" className="form-label">Contact</label>
      <input type="text" className="form-control" />
    </div>

    {/* <div className="col-12">
      <button type="submit" className="btn btn-primary">Search</button>
    </div> */}
  </form>

  <form className="row g-3 cde">
        <div>
            <h5 className="headingright">Amount Details </h5>
        </div>
    <div className="col-md-4 billpurchase ">
      <label for="Number" className="form-label">Total items</label>
      <input type="text" className="form-control" readOnly={true} />
    </div>
    <div className="col-md-4 billpurchase">
      <label for="Number" className="form-label">Total Amount</label>
      <input type="text" className="form-control" readOnly={true} />
    </div>
    <div className="col-md-4 billpurchase">
      <label for="Number" className="form-label">Final Amount</label>
      <input type="text" className="form-control" readOnly={true} />
    </div>
    <div className="col-3">
      <button type="submit" className="btn btns btn-primary">Save</button>
    </div>
    <div className="col-3">
      <button type="submit" className="btn btnss btn-primary">Print</button>
    </div>
  </form>

</div>







  <Inventorytable/>
  </>
  )
}

export default Inventory