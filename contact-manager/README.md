# başlarken:
 ````
   npm i bootstrap
   npm i @fortawesome/fontawesome-free
   yarn add axios
    yarn add react-router-dom@6.2.1
````

````
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
````

#
proje structure

components
        |_navbar
        |_contact-list
        |_view-contact
        |_edit-contact
        |_add-contact

services
        |_contactService

![](./Foto/1.jpg)

# index.js

````
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'


// fontawesome icons
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// Bootstrap 5.2
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);

````
# App.js
````
import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ContactList from "./components/contacts/ContactList/ContactList";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/contacts/list"} />} />
        <Route path={"/contacts/list"} element={<ContactList />} />
      </Routes>
    </>
  );
}

export default App;
````

````
<Route path={"/"} element={<Navigate to={"/contacts/list"} />} />
````
"/" olduğunda bile direk "/contacts/list" e yönlenir demek

![](./Foto/2.jpg)
# NavBar.js
````
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <h2>
            <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
              <i
                className="fa fa-mobile text-warning"
                style={{ marginRight: "10px" }}
              ></i> 
              Contact <span className="text-warning">Manager</span>
            </Link>
          </h2>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
````

# ContactList.js
````
import React from "react";
import { Link } from "react-router-dom";

const ContactList = () => {
  return (
    <>
      <section className="contact-search p-5">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Contact Manager
                  <Link to={"/contacts/add"} className="btn btn-primary ms-2">
                    {" "}
                    <i className="fa fa-plus-circle me-2"></i>New
                  </Link>
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Itaque eum reiciendis, quisquam ut quasi odit quam blanditiis
                  consequuntur sequi iusto ea qui nulla. Praesentium sapiente
                  incidunt vitae dolores deleniti cumque?
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="search Names"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-4">
                      <img
                        src="https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png"
                        alt=""
                        className="contact-img"
                      />
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Name: <span className="fw-bold">Faruk</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          mobile number:{" "}
                          <span className="fw-bold">0546856213</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Email: <span className="fw-bold">dgtf@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center">
                      <Link
                        to={"/contacts/view/:contactId"}
                        className="btn btn-warning my-1"
                      >
                        <i className="fa fa-eye"></i>
                      </Link>
                      <Link
                        to={"/contacts/edit/:contactId"}
                        className="btn btn-primary my-1"
                      >
                        <i className="fa fa-pen"></i>
                      </Link>
                      <button className="btn btn-danger my-1">
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactList;

````
![](./Foto/3.jpg)

# AddContact.js
````
import React from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-success fw-bold">Create Contact</p>
              <p className="fst-italic">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                omnis iure dolor dolorem, ullam quaerat optio dolorum aut
                magnam, dignissimos reprehenderit quos beatae illum cum atque!
                Error fuga dignissimos tenetur.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Photo Url"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Compony"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-2">
                  <select className="form-control">
                    <option value="">select a group</option>
                  </select>
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Create"
                  />
                  <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddContact;

````
![](./Foto/5.jpg)

# EditContact.js
````
import React from "react";
import { Link } from "react-router-dom";

const EditContact = () => {
  return (
    <>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row ">
            <div className="col">
              <p className="h4 text-primary fw-bold">Edit Contact</p>
              <p className="fst-italic">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                omnis iure dolor dolorem, ullam quaerat optio dolorum aut
                magnam, dignissimos reprehenderit quos beatae illum cum atque!
                Error fuga dignissimos tenetur.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Photo Url"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Compony"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-2">
                  <select className="form-control">
                    <option value="">select a group</option>
                  </select>
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Update"
                  />
                  <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img
                src="https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png"
                alt=""
                className="contact-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditContact;
````
![](./Foto/6.jpg)



   