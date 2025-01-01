import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidenav from '../SideNav/Sidenav';
// import { useNavigate } from 'react-router-dom';
import './Invoice.css';


function Invoice() {
  const [invoices, setInvoices] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [itemTitle, setItemTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    axios.get('/api/invoices')
      .then(response => {
        setInvoices(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleCreateInvoice = (event) => {
    event.preventDefault();
    axios.post('/api/invoices', {
      name,
      email,
      address,
      phoneNumber,
      dueDate,
      description,
      status,
      itemTitle,
      quantity,
      price
    })
      .then(response => {
        setInvoices([...invoices, response.data]);
        setName('');
        setEmail('');
        setAddress('');
        setPhoneNumber('');
        setDueDate('');
        setDescription('');
        setStatus('');
        setItemTitle('');
        setQuantity('');
        setPrice('');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <Sidenav />
      <h1>Invoices</h1>
      <form onSubmit={handleCreateInvoice}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <br />
        <label>Address:</label>
        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
        <br />
        <label>Phone Number:</label>
        <input type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
        <br />
        <label>Due Date:</label>
        <input type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
        <br />
        <label>Description:</label>
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
        <br />
        <label>Status:</label>
        <select value={status} onChange={(event) => setStatus(event.target.value)}>
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
        </select>
        <br />
        <label>Item Title:</label>
        <input type="text" value={itemTitle} onChange={(event) => setItemTitle(event.target.value)} />
        <br />
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
        <br />
        <label>Price:</label>
        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
        <br />
        <button type="submit">Create Invoice</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Due Date</th>
            <th>Description</th>
            <th>Status</th>
            <th>Item Title</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index}>
              <td>{invoice.id}</td>
              <td>{invoice.name}</td>
              <td>{invoice.email}</td>
              <td>{invoice.address}</td>
              <td>{invoice.phoneNumber}</td>
              <td>{invoice.dueDate}</td>
              <td>{invoice.description}</td>
              <td>{invoice.status}</td>
              <td>{invoice.itemTitle}</td>
              <td>{invoice.quantity}</td>
              <td>{invoice.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Invoice;