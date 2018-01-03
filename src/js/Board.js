import $ from 'jquery';

export default class {

    constructor() {
        this.introBoard = $('#board-intro');
        this.gameBoard = $('#board-game');
    }

    startGame() {
        this.introBoard.hide();
        this.gameBoard.show();
    }
}