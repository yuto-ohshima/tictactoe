const squaresData: Square[] = Array(9).fill(null); 

export type Square = "O" | "X" | null

export type HistorySquare = {
  squares: Square[]; 
}[];
/*
[
  {
    squares: Square[];
  }
];
*/

export default squaresData;