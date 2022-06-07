import React, { useState } from "react"

import VirtualizedSelect from 'react-virtualized-select'
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import "./inventory.css"
import "../component/inventorytable.css"
import PrintComponents from "react-print-components";
import axios from "axios"

function Inventory() {

  const [formFields, setFormFields] = useState([
    {
      item: '', itemdescription: '', pack: '',
      unit: '', quantityordered: '', calculate: '',
      rate: '', itemamount: 0, totalamount: 0,
      unitdescription: ''
    },
  ])
  let total = 0;
  const handleFormChange = (event, index) => {
    let data = [...formFields];

    data[index][event.target.name] = event.target.value;

    setFormFields(data);


    console.log(data)


  }
  for (let i = 0; i < formFields.length; i++) {
    total += formFields[i].totalamount;
  }


  const addFields = () => {
    let object = {
      item: '', itemdescription: '', pack: '',
      unit: '', quantityordered: '', calculate: '',
      rate: '', itemamount: 0, totalamount: 0,
      unitdescription: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = () => {
    let data = [...formFields];
    data.pop();

    setFormFields(data)

  }
  console.log(formFields);
  const [ponumber, setPonumber] = useState(100);
  const [datefrom, setDatefrom] = useState('');
  const [dateto, setDateto] = useState('');
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

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      purchaseordernumber: ponumber,
      purchasedate: date,
      datefrom: datefrom,
      dateto: dateto,
      type: itemtype,
      class: classtype,
      vendor: vendortype,
      itemdetails: formFields

    }
    axios.post(`http://localhost:8080/itemdetails`, data, {
      headers: {
        "Content-type": "application/json",
      }
    })
      .then(res => {
        console.log(res)
      }
      )

      .catch(err => {
        console.log(err);
      });

  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <form className="row g-3 abc">
          <div>
            <h5 className="heading">PO Details </h5>
          </div>
          <div className="col-md-3">
            <label for="Number" className="form-label">PO Number / Date</label>
            <div style={{ display: "flex" }}>
              <input type="text" className="form-control" value={ponumber} />
              <input className="form-control" value={date} readOnly />
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
              onChange={(value) => { setItemtype(value.value); console.log(value.value) }}
              value={itemtype}
            />
          </div>

          <div className="col-md-3">
            <label for="Classs" className="form-label">Class</label>

            <VirtualizedSelect
              options={classes}
              onChange={(value) => { setClasstype(value.value); console.log(value.value) }}
              value={classtype}
            />
          </div>
          <div className="col-md-3">
            <label for="Number" className="form-label">Currency</label>
            <input type="text" className="form-control" value={"BWP"} />
          </div>
          <div className="col-md-3">
            <label for="Vendor" className="form-label">Vendor</label>

            <VirtualizedSelect
              options={vendor}
              onChange={(value) => { setVendortype(value.value); console.log(value.value) }}
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
            <input type="text" className="form-control" value={formFields.length} readOnly={true} />
          </div>
          <div className="col-md-4 billpurchase">
            <label for="Number" className="form-label">Total Amount</label>
            <input type="text" className="form-control" value={total} readOnly={true} />
          </div>
          <div className="col-md-4 billpurchase">
            <label for="Number" className="form-label">Final Amount</label>
            <input type="text" className="form-control" value={total} readOnly={true} />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btns btn-primary" onClick={submitForm}>Save</button>
          </div>
          <div className="col-3">
            <PrintComponents trigger={<button type="submit" className="btn btnss btn-primary">Print</button>}>
              <div>

                <h2>Vendor {vendortype}</h2>
                <p>Purchase Order No {ponumber}</p>
                <p>Purchase Date {date}</p>

                {formFields.map((item) => {
                  return (
                    <>
                      <p>Item {item.item}</p>
                      <p>Item description {item.itemdescription}</p>
                      <p>Unit {item.unit}</p>
                      <p>Quantity {item.quantityordered}</p>
                      <p>Rate {item.rate}</p>
                      <p>Value {item.itemamount}</p>
                      <p>Total {total}</p>
                    </>
                  )
                })
                }

              </div>
            </PrintComponents>
          </div>
        </form>

      </div>


      <div>
        <button type="button" className="btn1 btn btn-primary me-3" onClick={addFields}>Add item</button>
        <button type="button" className="btn btn-danger" onClick={removeFields}>Delete item</button>
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
              {formFields.map((form, index) => {

                return (
                  <tr>
                    <td></td>
                    <td><input name="item" type="text" value={form.item} onChange={event => handleFormChange(event, index)} /></td>
                    <td><input name="itemdescription" type="text" value={form.itemdescription} onChange={event => handleFormChange(event, index)} /></td>
                    <td ><input name="pack" type="text" value={form.pack} onChange={event => handleFormChange(event, index)} /></td>
                    <td><input name="unit" type="text" value={form.unit} onChange={event => handleFormChange(event, index)} /></td>
                    <td><input name="quantityordered" type="text" value={form.quantityordered} onChange={event => handleFormChange(event, index)} /></td>

                    <td ><input name="calculate" type="text" value={form.calculate} onChange={event => handleFormChange(event, index)} /></td>
                    <td><input name="rate" type="text" value={form.rate} onChange={event => handleFormChange(event, index)} /></td>
                    <td><input name='itemamount' type="text" value={form.itemamount = form.quantityordered * form.rate} onChange={event => handleFormChange(event, index)}
                      style={{ backgroundColor: "#e9ecef" }} /></td>
                    <td ><input name='totalamount' type="text" value={form.totalamount = form.quantityordered * form.rate} onChange={event => handleFormChange(event, index)}
                      style={{ backgroundColor: "#e9ecef" }} /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td ><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td ><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td ><input type="text" /></td>
                    <td><input name="unitdescription" value={form.unitdescription} type="text" onChange={event => handleFormChange(event, index)} /></td>
                    <td><input type="text" /></td>
                    <td ><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td ><input type="text" /></td>
                    <td ><input type="text" /></td>
                  </tr>
                );
              })}
            </thead>
           
          </table>
        </div>
      </div>
    </>
  )
}

export default Inventory