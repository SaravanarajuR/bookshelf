"use client"

import icon from "../../app/public/icon.png"
import Image from "next/image"
import classes from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useState } from "react"
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import WidgetsIcon from '@mui/icons-material/Widgets';

function Navbar() {
    let [open, setOpened] = useState(false)
    let [size, setSize] = useState(0)

    function componentMounted() {
        let size = window.innerWidth
        setSize(() => {
            return size
        })
    }

    function handleMenu(evt) {
        setOpened(Number(evt.target.id))
    }

    useEffect(() => {
        let listener = window.addEventListener("resize", () => {
            setSize(() => {
                return window.innerWidth
            })
        })

        componentMounted()

        return window.removeEventListener("resize", listener)
    }, [])



    return (
        <div className={classes.navbar}>
            <Link className={classes.logo} href="/"><Image alt="website-logo" src={icon} width={120} height={35} className={classes.logo} /></Link>

            {size < 750 ? (
                open ? (
                    <div className={classes.menu}>
                        <CancelPresentationIcon className={classes.navbarIcon} id="0" onClick={handleMenu} />
                        <Link href="/" className={classes.menuItem}>
                            <span className={classes.menuText}>Home</span>
                        </Link>
                        <Link href="/explore" className={classes.menuItem}>
                            <span className={classes.menuText}>Explore</span>
                        </Link>
                        <Link href="/share" className={classes.menuItem}>
                            <span className={classes.menuText}>Share</span>
                        </Link>
                    </div>
                ) : (
                    <WidgetsIcon onClick={handleMenu} className={classes.menuIcon} id="1" />
                )
            ) : (
                <div className={classes.menu}>
                    <Link href="/" className={classes.menuItem}>
                        <span className={classes.menuText}>Home</span>
                    </Link>
                    <Link href="/explore" className={classes.menuItem}>
                        <span className={classes.menuText}>Explore</span>
                    </Link>
                    <Link href="/share" className={classes.menuItem}>
                        <span className={classes.menuText}>Share</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Navbar;