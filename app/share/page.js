import Navbar from "@/elements/navbar/navbar";
import Share from "../../components/shareBooks/share"

function ShareBook() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Navbar />
            <Share />
        </div>
    )
}

export default ShareBook;