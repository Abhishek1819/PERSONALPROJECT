import React from "react";
import { v4 as uuid } from "uuid";
import RecommendationCard from "./RecommendationCard";
import { Consumer } from "./context";

function RecommendationSection() {
  return (
    <Consumer>
      {(value) => {
        const { recommendations } = value;
        return (
          <div className="container-fluid my-5 py-5 back">
            <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
              {recommendations.map((recommendation) => (
                <RecommendationCard
                  key={uuid()}
                  recommendation={recommendation}
                />
              ))}
            </div>
            <div className="d-flex servs border border-dark rounded justify-content-center reads h-25 click" data-aos="slide-up">
              <p className="text-light my-1 text-decoration-none">
                <h5>
                  PLEASE CLICK <i className='fa fa-hand-pointer text-light'></i>
                </h5>
              </p>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default RecommendationSection;
