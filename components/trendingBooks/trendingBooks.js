"use client";

import { useEffect, useState } from "react";
import classes from "./trendingBooks.module.css";
import Image from "next/image";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Link from "next/link";

function FeaturedBooks({ books }) {
    const [page, setPage] = useState(0);
    const [count, setCount] = useState(2);

    useEffect(() => {
        setCount(() => window.innerWidth < 1000 ? 1 : 2)
    }, [])

    useEffect(() => {
        if (page >= Math.ceil(books.length / count)) {
            setPage(0);
        }

        const interval = setInterval(() => {
            setPage((prev) => (prev + 1) % Math.ceil(books.length / count));
        }, 2500);

        function listener() {
            setCount(window.innerWidth < 1000 ? 1 : 2);
        }

        window.addEventListener("resize", listener);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", listener);
        };
    }, [page, count, books.length]);

    function getBooks() {
        return books
            .slice(page * count, page * count + count)
            .map((book) => (
                <div className={classes.card} key={book.id}>
                    <Image
                        width={200}
                        height={250}
                        alt={book.bookName}
                        src={book.thumbnail}
                        className={classes.thumbnail}
                    />
                    <div className={classes.right}>
                        <p className={classes.author}>{book.author}</p>
                        <p className={classes.name}>{book.bookName}</p>
                        <div className={classes.data}>
                            <p className={classes.likes}>
                                <ThumbUpIcon className={classes.ThumbUpIcon} />
                                {"\u00A0" + book.likes}
                            </p>
                            <p className={classes.views}>
                                <RemoveRedEyeIcon className={classes.eyeIcon} />
                                {"\u00A0" + book.likes}
                            </p>
                        </div>
                        <Link href={`/books/${book.id}`}>
                            <button className={classes.button}>Read</button>
                        </Link>
                    </div>
                </div>
            ));
    }

    function handleCount() {
        const total = Math.ceil(books.length / count);
        return Array(total)
            .fill(0)
            .map((_, index) => {
                return page === index ? (
                    <FiberManualRecordIcon key={index} className={classes.active} />
                ) : (
                    <FiberManualRecordIcon key={index} className={classes.inactive} />
                );
            });
    }

    return (
        <div className={classes.carousel}>
            <div className={classes.head}>
                <p className={classes.headText}>Explore</p>
                <p className={classes.headText}>Today’s</p>
                <p className={classes.headText}>Hottest</p>
                <p className={classes.headText}>Reads</p>
            </div>
            <div className={classes.rightSection}>
                <div className={classes.books}>{getBooks()}</div>
                <div className={classes.count}>{handleCount()}</div>
            </div>
        </div>
    );
}

export default FeaturedBooks;
