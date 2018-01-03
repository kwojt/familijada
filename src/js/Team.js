let teamNextNumer = 0;

export default class {
    
    constructor(name = 'Drużyna '+ ++teamNextNumer) {
        this.name = name;
        this.points = 0;
    }
}