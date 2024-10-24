const sqlite = require("better-sqlite3")
const db = sqlite("books.db")
const books = require("./data/bookNode")
const reviews = require("./data/reviews")


db.exec('PRAGMA foreign_keys = ON');

db.prepare(`
    create table if not exists books(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bookName VARCHAR NOT NULL,
    url VARCHAR NOT NULL,
    thumbnail VARCHAR NOT NULL,
    author VARCHAR NOT NULL,
    likes INTEGER NOT NULL,
    price INTEGER NOT NULL,
    pages INTEGER NOT NULL,
    reads INTEGER NOT NULL)`).run();

db.prepare(`
    create table if not exists reviews(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        bookId INTEGER NOT NULL,
        review VARCHAR NOT NULL,
        rating REAL NOT NULL,
        description VARCHAR NOT NULL,
        FOREIGN KEY (bookId) REFERENCES books(id) ON DELETE CASCADE)`).run()

async function initData() {
    let insert = db.prepare(`
        INSERT INTO books (
            bookName,
            url,
            thumbnail,
            author,
            likes,
            price,
            pages,
            reads
        ) VALUES (
            @bookName,
            @url,
            @thumbnail,
            @author,
            @likes,
            @price,
            @pages,
            @reads
        )`);


    for (let book of books) {
        insert.run(book)
    }
}


async function initReviewData() {
    let insert = db.prepare(`
        INSERT INTO reviews values(
            null,
            @bookId,
            @review,
            @rating,
            @description
        )`);


    for (let review of reviews) {
        insert.run(review)
    }
}


initData()
initReviewData()