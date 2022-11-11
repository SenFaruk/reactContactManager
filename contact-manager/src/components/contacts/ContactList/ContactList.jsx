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
                <p className="h3">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactList;
