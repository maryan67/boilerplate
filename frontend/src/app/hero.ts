export class Hero {




    constructor(public id = 0, public name = '') {
        this.id = id;
        this.name = name;
    }

    clone() { return new Hero(this.id, this.name); }
}