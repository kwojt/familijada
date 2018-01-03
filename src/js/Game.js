import Team from './Team';

export default class {

    constructor() {
        this.round = 0;
        this.teamLeft = new Team();
        this.teamRight = new Team();
    }

    changeTeamName(team, name) {
        if (team === 'left') {
            this.teamLeft.name = name;
        } 
        else if (team === 'right') {
            this.teamRight.name = name;
        }
        else {
            console.log(`Error occured while trying to change team's name; team: ${name}`);
        }
    }

    start() {
        
    }
}