import {Library} from "../Library";
export class NewPapPer extends Library{
    private _releaseDate:number

    constructor(Code: number, imprint: string, numberIssue: number, releaseDate: number) {
        super(Code, imprint, numberIssue);
        this._releaseDate = releaseDate;
    }

    get releaseDate(): number {
        return this._releaseDate;
    }
}