import {Magazine} from "./Magazine";

export class MagazineManage {
    static listMagazine: Magazine[] = []

    static addMagazine(Magazine: Magazine): void {
        MagazineManage.listMagazine.push(Magazine)
    }

    static displayMagazine(): MagazineManage {
        return this.listMagazine
    }

    static findMagazine(code: number) {
        for (let i = 0; i < this.listMagazine.length; i++) {
            if (this.listMagazine[i].Code === code) {
                return this.listMagazine[i]
            }
        }
        return -1
    }

    static deleteMagazine(code: string): void {
        let index = this.findMagazine(+code);
        if (index === undefined) {
            console.log('Không tìm thấy sản phẩm này!')
        } else {
            this.listMagazine.splice(+index, 1);
            console.log('Xóa thành công!')

        }
    }

}