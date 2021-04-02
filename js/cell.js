class Cell extends Game {
    constructor(x, y, state, element){
        this._x = x;
        this._y = y;
        this._state = state;
        this._element = element;
    }
    get x(){
        return this._x;
    }
    get y(){
        return this._x;
    }
    get state(){
        return this._state;
    }
}
export default Cell;
