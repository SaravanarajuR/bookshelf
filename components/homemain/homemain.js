import classes from "./homemain.module.css"
import Section1 from "../../elements/section1/section1";
import Section2 from "../../elements/section2/section2";
import Section3 from "../../elements/section3/section3";
import Section4 from "../../elements/section4/section4";
import Section5 from "../../elements/section5/contact"

function HomePage() {
    return (
        <div className={classes.main}>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </div>
    )
}

export default HomePage;