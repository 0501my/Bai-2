import {Library} from "../Library";

export class Magazine extends Library {
    private _releaseNumber: number;
    private _releaseMonth: number;

    constructor(Code: number, imprint: string, numberIssue: number, releaseNumber: number, releaseMonth: number) {
        super(Code, imprint, numberIssue);
        this._releaseNumber = releaseNumber;
        this._releaseMonth = releaseMonth;
    }

    get releaseNumber(): number {
        return this._releaseNumber;
    }

    get releaseMonth(): number {
        return this._releaseMonth;
    }
}