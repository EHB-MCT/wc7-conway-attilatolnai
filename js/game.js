import Cell from './cell.js';
class Game {
    constructor(){
        this.cells = [];

         for(let x = 0; x <20; x++){
              for(let y = 0; y <20; y++){
                  const c = new Cell(x,y);
                   this._cells.push(c);
               }
        }
    }
}
export default Game;
