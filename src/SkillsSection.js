import React from "react";
import { v4 as uuid } from "uuid";
import Skill from "./Skill";
import { Consumer } from "./context";

function SkillsSection() {
  return (
    <Consumer>
      {(value) => {
        const { skills } = value;
        const finalSkillRow = [];
        for (let i = 0; i < skills.length / 4; i++) {
          let skillRow = skills.slice(i * 4, (i + 1) * 4);
          finalSkillRow.push(
            <div key={uuid()} className="d-flex justify-content-around py-3">
              {skillRow.map((skill) => (
                <Skill key={uuid()} skill={skill} />
              ))}
            </div>
          );
        }
        return (
          <div className="back w-100">
            <div className="container text-center py-5">
              <h1 className="FontStyle font-weight-light">
                <span className="FontStyle text-dark">Gallery</span> 
              </h1>
              <p>
                <span className='line1'></span>
                <i className='fa fa-heart text-danger'></i>
                <span className='line1'></span>
              </p>
              {finalSkillRow}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default SkillsSection;
