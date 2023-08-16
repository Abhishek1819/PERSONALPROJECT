import React, { Component } from "react";
import { Consumer } from "./context";
import { v4 as uuid } from "uuid";

class WriteRecommendation extends Component {
  state = {
    name: "",
    email: "",
    company: "",
    designation: "",
    recommendationMessage: "",
    submitMesssage: "",
    submitMessageTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (handler, event) => {
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

    const newRecommendation = {
      id: uuid(),
      name: this.state.name,
      company: this.state.company,
      designation: this.state.designation,
      Message: this.state.recommendationMessage,
    };

    handler("ADD_RECOMMENDATION", newRecommendation);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { submitMessageTextColor, submitMesssage } = this.state;
          const { handler } = value;
          return (
            <div className="container my-5">
              <h1 className="font-weight-light text-center py-5">
                <span className="text-info">Thank you!</span>for your interest
              </h1>
              <div className="row justify-content-center">
                <div className="col-11 col-lg-5">
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
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
                      <label htmlFor="company">Company / Institution *</label>
                      <input
                        name="company"
                        type="text"
                        className="form-control"
                        onChange={this.onChange}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="designation">Designation *</label>
                      <input
                        name="designation"
                        type="text"
                        className="form-control"
                        onChange={this.onChange}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="recommendation">Recommendation *</label>
                      <textarea
                        name="recommendation"
                        rows="5"
                        className="form-control"
                        onChange={this.onChange}
                      ></textarea>
                    </div>
                    <button
                      className="btn btn-dark float-right"
                      type="submit"
                      style={{ backgroundColor: "red" }}
                    >
                      Lot's of love
                    </button>
                  </form>
                </div>
              </div>

              <div className="py-5 mx-2 text-center">
                <h5 className={submitMessageTextColor}>{submitMesssage}</h5>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default WriteRecommendation;
