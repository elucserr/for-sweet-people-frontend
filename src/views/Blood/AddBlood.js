import React, { Component } from "react";
import Button from "../../components/Button";
import "./Blood.css";

class AddBlood extends Component {
  render() {
    const { onSubmit, onChange, date, time, level } = this.props;
    return (
      <div>
        <form className="login-form" onSubmit={onSubmit}>
          <input
            className="input-options"
            type="date"
            name="date"
            id="date"
            placeholder="DATE"
            value={date}
            onChange={onChange}
          />

          <input
            className="input-options"
            type="time"
            name="time"
            id="time"
            placeholder="TIME"
            value={time}
            onChange={onChange}
          />

          <input
            className="input-options"
            type="number"
            name="level"
            id="level"
            placeholder="LEVEL OF GLUCOSE"
            value={level}
            onChange={onChange}
          />

          <Button
            onClick={() => {
              console.log("Clicked");
            }}
            type="submit"
            buttonStyle="btn--white--solid--1"
            buttonSize="btn--options"
            value="submit"
          >
            ADD
          </Button>
        </form>
      </div>
    );
  }
}

export default AddBlood;
