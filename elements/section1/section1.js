"use client";

import classes from "@/components/homemain/homemain.module.css"
import homePageImage from "../../app/public/homeimage.jpeg"
import Image from "next/image"
import { useId } from "react"
import Link from "next/link"

function Section1() {
    function handleString() {
        let string = ["Your", "Next", "Read", "is", "Just", "a", "Share", "Away!"]
        return (
            string.map((a) => {
                return <p key={useId()} className={classes.letter}>{a + "\u00A0"}</p>
            })
        )
    }

    return (
        <div className={classes.section1}>
            <div className={classes.content}>
                <div className={classes.slogan}>{handleString()}</div>
                <p className={classes.description}>Bookshelf enables you to share Documents,books and study materials with.</p>
                <div className={classes.buttons}>
                    <button className={classes.button}><Link href="/register">Sign Up</Link></button>
                    <button className={classes.button}><Link href="/login">Login</Link></button>
                </div>
            </div>
            <Image src={homePageImage} alt="book image" className={classes.homePageImage} />
        </div>
    )
}

export default Section1;