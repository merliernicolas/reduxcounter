import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Compteur React-Redux</h1>
      <p>{counter}</p>
      <button
        onClick={() => {
          dispatch({ type: "NUMBER_ADD" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "NUMBER_SUBSTRACT" });
        }}
      >
        -1
      </button>
    </div>
  );
}