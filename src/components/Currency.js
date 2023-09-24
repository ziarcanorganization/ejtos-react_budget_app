import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);

  const currencyMap = {
    "£": "Pound",
    $: "Dollar",
    "€": "Euro",
    "₹": "Ruppee"
  };

  const changeCurrency = val => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val
    });
  };

  return (
    <div className="alert alert-secondary">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Currency ({currency} {currencyMap[currency]})
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li onClick={() => changeCurrency("$")}>
            <a className="dropdown-item" href="#">
              $ Dollar
            </a>
          </li>
          <li onClick={() => changeCurrency("£")}>
            <a className="dropdown-item" href="#">
              £ Pound
            </a>
          </li>
          <li onClick={() => changeCurrency("€")}>
            <a className="dropdown-item" href="#">
              € Euro
            </a>
          </li>
          <li onClick={() => changeCurrency("₹")}>
            <a className="dropdown-item" href="#">
              ₹ Ruppee
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Currency;
