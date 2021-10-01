import Piece from './piece.js';
import bknight from './src/ChessPieces/bknight.png';
import wknight from './src/ChessPieces/wknight.png';

export default class Knight extends Piece {
  constructor(player){
    super(player, (player === 1 ? bknight : wknight));
  }

  isMovePossible(src, dest){
    return (src - 17 === dest || 
      src - 10 === dest || 
      src + 6 === dest || 
      src + 15 === dest || 
      src - 15 === dest || 
      src - 6 === dest || 
      src + 10 === dest || 
      src + 17 === dest);
  }

  getSrcToDestPath(){
    return [];
  }
}