import { type Square } from "#/lib/data/square";

type Props = {
  value: Square;
  onClick: () => void; 
};

export default function Square(props: Props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
       {props.value} 
    </button> 
  ); 
};