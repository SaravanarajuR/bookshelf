"use client"

import { useEffect, useState } from "react"
import timer from "../hooks/timer"

function timer(){
    let [time,setTime]=useState(0)

    useEffect(()=>{
        let interval=setInterval(()=>{
            setTime(()=>timer(time))
        },1000)

        return ()=>clearInterval(interval)
    },[])

    return(<div>
        <p>{time}</p>
    </div>)
}

export default timer;