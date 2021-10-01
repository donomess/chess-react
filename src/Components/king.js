import Piece from './piece.js';
import bking from './react-chess/src/ChessPieces/bking.png';
import wking from './react-chess/src/ChessPieces/wking.png';

export default class King extends Piece{
    constructor(player){
        super(player, (player === 1? bking : wking));
    }

    isMovePossible(src,dest){
        return (src - 9 === dest || 
            src - 8 === dest || 
            src - 7 === dest || 
            src + 1 === dest || 
            src + 9 === dest || 
            src + 8 === dest || 
            src + 7 === dest || 
            src - 1 === dest);
    }

    getSrcToDestPath(src, dest){
        return [];
    }
}