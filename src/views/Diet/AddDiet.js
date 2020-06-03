import React, { Component } from "react";
import Button from "../../components/Button";
import "./Diet.css";

class AddDiet extends Component {
  render() {
    const { onSubmit, onChange, date, time, aliment } = this.props;
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
            type="text"
            name="time"
            id="time"
            placeholder="TIME"
            value={time}
            onChange={onChange}
          />

          <input
            className="input-options"
            type="text"
            name="aliment"
            id="aliment"
            placeholder="ALIMENT"
            value={aliment}
            onChange={onChange}
          />

          <Button
            onClick={() => {
              console.log("Clicked");
            }}
            type="submit"
            buttonStyle="btn--white--solid--4"
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

export default AddDiet;
