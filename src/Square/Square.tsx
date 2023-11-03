import React from "react";
import {SquareType} from "../types";
import './Square.css';

interface Props {
  square: SquareType;
  onClicked: (id: number) => void;
}


const Square: React.FC<Props> = (props) => {
  let classSquare = 'square';
  if (props.square.clicked && props.square.hasItem) {
    classSquare = 'square-red';
  } else if (props.square.clicked) {
    classSquare = 'square-black';
  }

  return (
    <div className={classSquare} onClick={() => props.onClicked(props.square.id)}></div>
  );
};


export default Square;