import Game from './Game';
import Audio from './Audio';
import { Howl } from 'howler';
import autoBind from 'auto-bind';
import $ from 'jquery';

export default class {

    constructor() {
        this.game = new Game();
        this.board = {};
        this.audio = new Audio();

        autoBind(this);
        this.init();
    }

    openBoardWindow() {
        this.board = window.open(
            'board.html',
            'board',
            'width=1024,height=768,resizable=yes'
        );

        this.audio.play('intro');
    }

    firstRound(event) {
        this.board.app.startGame();
    }

    nextRound() {
        // TODO
    }

    init() {

        // load all sounds
        this.audio.sounds['intro'] = new Howl({ 
            src: ['/sounds/Familiada_intro.wav'] });
        this.audio.sounds['jingle'] = new Howl({ 
            src: ['/sounds/dzingiel.wav'] });
        this.audio.sounds['good answer'] = new Howl({ 
            src: ['/sounds/dobrze.mp3'] });
        this.audio.sounds['bad answer'] = new Howl({ 
            src: ['/sounds/blad.mp3'] });
        this.audio.sounds['same answer'] = new Howl({ 
            src: ['/sounds/bylo.wav'] });
        //this.audio.sounds['score'] = new Howl({ 
        //    src: ['/sounds/monetki.wav'] });
    }
}