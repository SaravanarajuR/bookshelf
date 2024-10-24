"use client";

import classes from "@/components/homemain/homemain.module.css"
import { useId } from "react"
import features from "@/data/features"

function Section2() {
    function handleFeatures() {
        return (
            features.map(a => {
                return (
                    <div className={classes.card} key={useId()}>
                        {a.component}
                        <div className={classes.featureDescription}>
                            <div className={classes.headText}>
                                {a.head}
                            </div>
                            <div className={classes.cardText}>
                                {a.text}
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <div className={classes.section2}>
            <p className={classes.head}>What You Will get</p>
            <hr className={classes.line} />
            <div className={classes.container}>
                {handleFeatures()}
            </div>
        </div>
    )
}

export default Section2;