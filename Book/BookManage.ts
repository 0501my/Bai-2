import {Book} from "./Book";

export class BookManage {
    static listBook: Book[] = []

    static addBook(Book: Book): void {
        BookManage.listBook.push(Book)
    }

    static displayBook(): BookManage {
        return this.listBook
    }

    static findBook(code: number) {
        for (let i = 0; i < this.listBook.length; i++) {
            if (this.listBook[i].Code === +code) {
                return this.listBook[i]
            }
        }
        return -1
    }

    static deleteBook(code: string):void {
        let index = this.findBook(+code);
        if (index === undefined) {
            console.log('Không tìm thấy sản phẩm này!')
        } else {
            this.listBook.splice(+index, 1);
            console.log('Xóa thành công!')
            console.log(`--------Sau khi Xoa-------`)
            console.table(BookManage.displayBook())
        }
    }
}