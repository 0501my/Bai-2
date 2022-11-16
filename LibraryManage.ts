import {Book} from "./Book/Book";
import {BookManage} from "./Book/BookManage";
import {MagazineManage} from "./Magazine/magazineManage";
import {Magazine} from "./Magazine/Magazine";
import {NewPapPer} from "./NewPapper/NewPapper";
import {NewPapPerManage} from "./NewPapper/newPappeerManage";

let input = require('readline-sync');
let choice = -1


function main() {
    do {
        showMenu()
        choice = +input.question('lua chon cua ban')

        switch (choice) {
            case 1 :
                manageBook();
                break;
            case 2:
                manageMagazine();
                break;
            case 3 :
                manageNewPapPer();
                break;
        }

    } while (choice !== 0)
}


main()

function showMenu() {
    let menu = `
    1. Quan ly Sach
    2. Quan ly Tap Chi
    3.Quan ly Bao
    0. Thoat chuong trinh`
    console.log(menu)
}

// Quản lý Sách
function manageBook() {
    do {
        showMenuBook()
        choice = +input.question(`nhap lua chon cua ban`)
        switch (choice) {
            case 1:
                addBook();
                break;
            case 2:
                displayBook();
                break;
            case 3:
                deleteBook();
                break;
            case 4:
                findBook();
        }
    } while (choice !== 0)
}

function showMenuBook() {
    let menu = `
    1. Them sach
    2. Hien thi danh sach Sach
    3. Xoa Sach
    4. Tim sach
    0. Thoat`
    console.log(menu)
}

function addBook() {
    let code = +input.question("Ma tai lieu: ")
    let imprint = input.question(`ten nha san xuat: `)
    let numberIssue = input.question(`so ban phat hanh : `)
    let numberPage = input.question(`so trang : `)
    let nameWriter = input.question(`ten tac gia : `)
    let book = new Book(code, imprint, numberIssue, numberPage, nameWriter)
    BookManage.addBook(book)
}

function displayBook() {
    console.log(`------Sau khi them-----`)
    console.table(BookManage.displayBook())
}

function findBook() {
    console.log(`------Sau khi tim-----`)
    let fullName = input.question(`nhap ten: `)
    console.log(BookManage.findBook(fullName))
}

function deleteBook() {
    let idDelete = input.question('Enter id delete : ')
    BookManage.deleteBook(idDelete)
}

// quản Lý tạp chí
function manageMagazine() {
    do {
        showMenuMagazine()
        choice = +input.question(`nhap lua chon cua ban`)
        switch (choice) {
            case 1:
                addMagazine();
                break;
            case 2:
                displayMagazine();
                break;
            case 3:
                deleteMagazine();
                break;
            case 4:
                findMagazine();
        }
    } while (choice !== 0)
}

function showMenuMagazine() {
    let menu = `
    1. Them tap chi
    2. Hien thi danh sach Tapp chi
    3. Xoa Tap chi
    4. Tim Tap chi
    0. Thoat`
    console.log(menu)
}

function addMagazine() {
    let code = +input.question("Ma tai lieu: ")
    let imprint = input.question(`ten nha san xuat: `)
    let numberIssue = input.question(`so ban phat hanh : `)
    let releaseNumber = input.question(`so phat  hanh : `)
    let releaseMonth = input.question(`Thang phat hanh : `)
    let magazine = new Magazine(code, imprint, numberIssue, releaseNumber, releaseMonth)
    MagazineManage.addMagazine(magazine)
}

function displayMagazine() {
    console.log(`------Sau khi them-----`)
    console.table(BookManage.displayBook())
}

function findMagazine() {
    console.log(`------Sau khi tim-----`)
    let fullName = input.question(`nhap ten: `)
    console.log(MagazineManage.findMagazine(fullName))
}

function deleteMagazine() {
    let idDelete = input.question('Enter id delete : ')
    MagazineManage.deleteMagazine(idDelete)
}

// Quản lý tạp chí
function manageNewPapPer() {
    do {
        showMenuNewPapPer()
        choice = +input.question(`nhap lua chon cua ban`)
        switch (choice) {
            case 1:
                addNewPapPer();
                break;
            case 2:
                displayNewPapPer();
                break;
            case 3:
                deleteNewPapPer();
                break;
            case 4:
                findNewPapPer();
        }
    } while (choice !== 0)
}

function showMenuNewPapPer() {
    let menu = `
    1. Them Bao
    2. Hien thi danh sach Bao
    3. Xoa Bao
    4. Tim Bao
    0. Thoat`
    console.log(menu)
}

function addNewPapPer() {
    let code = +input.question("Ma tai lieu: ")
    let imprint = input.question(`ten nha san xuat: `)
    let numberIssue = input.question(`so ban phat hanh : `)
    let releaseDate = input.question(`Ngay phat hanh : `)
    let newPapPer = new NewPapPer(code, imprint, numberIssue, releaseDate)
    NewPapPerManage.addNewPapPer(newPapPer)
}

function displayNewPapPer() {
    console.log(`------Sau khi them-----`)
    console.table(BookManage.displayBook())
}

function findNewPapPer() {
    console.log(`------Sau khi tim-----`)
    let fullName = input.question(`nhap ten: `)
    console.log(BookManage.findBook(fullName))
}

function deleteNewPapPer() {
    let idDelete = input.question('Enter id delete : ')
    NewPapPerManage.deleteNewPapPer(idDelete)
}

