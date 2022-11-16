import {Library} from "../Library";
export class Book extends Library{
    private _numberPage : number;
    private _nameWriter:string;

    constructor(Code: number, imprint: string, numberIssue: number, numberPage: number, nameWriter: string) {
        super(Code, imprint, numberIssue);
        this._numberPage = numberPage;
        this._nameWriter = nameWriter;
    }

    get numberPage(): number {
        return this._numberPage;
    }

    get nameWriter(): string {
        return this._nameWriter;
    }
}