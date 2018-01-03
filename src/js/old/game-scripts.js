import $ from 'jquery';
import { audio } from './audio';
import Team from './Team';

var board;
var round = 0;
var teamLeft = new Team();
var teamRight = new Team();

$('#txt-team-1').change(function() {
    teamLeft.name = $('#txt-team-1').val();
});

$('#txt-team-2').change(function () {
    teamRight.name = $('#txt-team-2').val();
});

function openGameWindow() {
    board = window.open('board.html', 'board', 'width=1024,height=768,resizable=yes');
    console.log(board);
    
    gameStart();
}
$('#btn-open-window').click(openGameWindow);

function gameStart() { 
    
        console.log('here works');
        audio.newSound('intro', './sounds/Familiada_intro.wav');
        audio.play('intro');

    // TODO start game here
}

function nextRound() {
    
    if (round == 0) {
        board.hideIntro();
    }
}
$('#btn-next-round').click(nextRound);