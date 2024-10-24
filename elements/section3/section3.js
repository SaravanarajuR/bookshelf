import TrendingBooks from "../../components/trendingBooks/trendingBooks"
import classes from "@/components/homemain/homemain.module.css"
import { getBooksfromSQLlite } from "@/getBooks"

function Section3() {
    let books = getBooksfromSQLlite()

    return (
        <div className={classes.section3}>
            <TrendingBooks books={books} />
        </div>
    )
}

export default Section3;