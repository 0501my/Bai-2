import {NewPapPer} from "./NewPapper";

export class NewPapPerManage {

    static listNewPapPer: NewPapPer[] = []

    static addNewPapPer(newPapPer: NewPapPer): void {
        NewPapPerManage.listNewPapPer.push(newPapPer)
    }

    static displayNewPapPer(): NewPapPerManage {
        return this.listNewPapPer
    }

    static findNewPapPer(code: number) {
        for (let i = 0; i < this.listNewPapPer.length; i++) {
            if (this.listNewPapPer[i].Code === +code) {
                return this.listNewPapPer[i]
            }
        }
        return -1
    }

    static deleteNewPapPer(code: string) {
        let index = this.findNewPapPer(+code);
        if (index === undefined) {
            console.log('Không tìm thấy sản phẩm này!')
        } else {
            this.listNewPapPer.splice(+index, 1);
            console.log('Xóa thành công!')

        }
    }
}
