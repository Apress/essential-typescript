export class Product {

    constructor(public id: number,
            public name: string, 
            public price: number) {
        // no statements required
    }
}

export enum SPORT {
    Running, Soccer, Watersports, Other
}

export class SportsProduct extends Product {
    private _sports: SPORT[];

    constructor(public id: number,
            public name: string, 
            public price: number,
            ...sportArray: SPORT[]) {
        super(id, name, price);
        this._sports = sportArray;
    }

    usedForSport(s: SPORT): boolean {
        return this._sports.includes(s);
    }

    get sports(): SPORT[] {
        return this._sports;
    }
}
