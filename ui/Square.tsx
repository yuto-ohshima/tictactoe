import { SquareState } from "./Board";

type Props = {
  value: SquareState;
  onClick: () => void; 
};

export default function Square(props: Props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
       {props.value} 
    </button> 
  ); 
};