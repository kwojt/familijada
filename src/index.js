// CSS files
import './css/common-classes.scss';
import './css/controller.scss';

// JS files
import $ from 'jquery';
import FamilyFeud from './js/FamilyFeud';

const app = new FamilyFeud();

// Bindings
$('#btn-open-window').click(() => {
    app.openBoardWindow();
    $('#btn-next-round').show();
});

$('#btn-next-round').click(() => {
    app.firstRound();
    $('#btn-next-round').val('Następna runda');
    $('#btn-next-round').off();
    $('#btn-next-round').click(app.nextRound);
});

$('#txt-team-1').change(function () {
    app.game.teamLeft.name = $('#txt-team-1').val();
});

$('#txt-team-2').change(function () {
    app.game.teamRight.name = $('#txt-team-2').val();
});

$('#chk-mute').click(function () {
    app.audio.changeMute($('#chk-mute').prop('checked'));
});

$('#chk-intro-mute').click(function () {
    app.audio.mute('intro', $('#chk-mute').prop('checked'));
});

