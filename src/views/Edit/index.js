import React, { Component } from "react";
import Button from "../../components/Button";

export default class Edit extends Component {
  render() {
    const {
      username,
      dateOfBirth,
      typeOfDiabetes,
      email,
      weight,
      height,
      handleSubmit,
      handleChange,
      handleUpdate,
    } = this.props;

    return (
     
        <section className="section-container">
          <div className="user-data">
            <div className="image-info">
              <img src="/images/user.png" alt="user" className="user" />
            </div>
            <div className="buttons-info">
              <div className="user-name">{username}</div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <ul className="pr-1 pl-1 pb-1 flex-row">
              <li className="flex-row col-12 bb-white pb-1">
                <label for="name" className="user-font flex-row col-4">
                  NAME:
                </label>
                <input
                  type="text"
                  className="user-font flex-row col-8"
                  name="username"
                  id="username"
                  value={username}
                  onChange={handleChange}
                />
              </li>

              <li className="flex-row col-12 bb-white pb-1">
                <label for="email" className="user-font flex-row col-4">
                  EMAIL:
                </label>
                <input
                  type="text"
                  className="user-font flex-row col-8"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </li>

              <li className="flex-row col-12 bb-white pb-1">
                <label for="type" className="user-font flex-row col-4">
                  TYPE :
                </label>
                <input
                  type="text"
                  className="user-font flex-row col-8"
                  name="type"
                  value={typeOfDiabetes}
                  onChange={handleChange}
                />
              </li>
              <li className="flex-row col-12 bb-white pb-1">
                <label for="birth" className="user-font flex-row col-4">
                  BIRTH:
                </label>
                <input
                  type="date"
                  className="user-font flex-row col-8"
                  name="date"
                  value={dateOfBirth}
                  onChange={handleChange}
                />
              </li>
              <li className="flex-row col-12 bb-white pb-1">
                <label for="weight" className="user-font flex-row col-4">
                  WEIGHT:
                </label>
                <input
                  type="number"
                  className="user-font flex-row col-8"
                  name="weight"
                  value={weight}
                  onChange={handleChange}
                />
              </li>
              <li className="flex-row col-12 bb-white pb-1">
                <label for="height" className="user-font flex-row col-4">
                  HEIGHT:
                </label>
                <input
                  type="number"
                  className="user-font flex-row col-8"
                  name="height"
                  value={height}
                  onChange={handleChange}
                />
              </li>
            </ul>
            <div className="buttons">
              <Button
                type="submit"
                buttonStyle="btn--orange--solid"
                buttonSize="-btn--super--small"
                value="save"
              >
                SAVE
              </Button>

              <Button
                onClick={handleUpdate}
                type="back"
                buttonStyle="btn--orange--solid"
                buttonSize="-btn--super--small"
                value="back"
              >
                BACK
              </Button>
            </div>
          </form>
        </section>
      
    );
  }
}
