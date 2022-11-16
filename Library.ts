export class Library{
    private _Code : number;
    private _imprint: string;
    private _numberIssue : number;

    constructor(Code: number, imprint: string, numberIssue: number) {
        this._Code = Code;
        this._imprint = imprint;
        this._numberIssue = numberIssue;
    }

    get Code(): number {
        return this._Code;
    }

    get imprint(): string {
        return this._imprint;
    }

    get numberIssue(): number {
        return this._numberIssue;
    }
}