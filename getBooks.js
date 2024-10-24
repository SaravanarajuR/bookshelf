import sql from "better-sqlite3"

let db = sql("books.db")

export function getBooksfromSQLlite() {
    return db.prepare("SELECT * from books").all()
}


export function getBookFromId(id) {
    return db.prepare(`SELECT * from books where id=?`).get(id)
}

export function getReviewsFromBookId(id) {
    return db.prepare(`select * from reviews where bookId=?`).all(id)
}