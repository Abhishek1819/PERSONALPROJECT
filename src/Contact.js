import React, { Component } from "react";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    description: "",
    submitMesssage: "",
    submitMessageTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    let isSuccessful = true;
    const { name } = this.state;

    if (isSuccessful) {
      this.setState({
        submitMesssage: `Thank you ${name}, I will contact you soon!`,
        submitMessageTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMesssage: "Oops! Something went wrong. Please try again later :(",
        submitMessageTextColor: "text-danger",
      });
    }
  };

  render() {
    const { submitMessageTextColor, submitMesssage } = this.state;
    return (
      <div className="container my-5">
        <h1 className="font-weight-light text-center py-5">
          <span className="text-info">Thank you!</span>for your interest
        </h1>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">
                  Tell me about your project *
                </label>
                <textarea
                  name="description"
                  rows="5"
                  className="form-control"
                  onChange={this.onChange}
                ></textarea>
              </div>
              <button
                className="btn btn-dark float-right"
                type="submit"
                style={{ backgroundColor: "black" }}
              >
                Let's talk business
              </button>
            </form>
          </div>
        </div>

        <div className="py-5 mx-2 text-center">
          <h5 className={submitMessageTextColor}>{submitMesssage}</h5>
        </div>
      </div>
    );
  }
}

export default Contact;
