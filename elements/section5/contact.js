import classes from "./contact.module.css"
import FeedbackForm from "@/elements/feedbackForm/feedbackForm";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import FacebookIcon from '@mui/icons-material/Facebook';

function Contact() {
    function submitFeedback(evt) {
        console.log(evt)
    }

    return (
        <div className={classes.feedback}>
            <h1 className={classes.head}>Contact Our Team</h1>
            <div className={classes.contact}>
                <div className={classes.card}>
                    <XIcon />
                    <p className={classes.media}>X</p>
                </div>
                <div className={classes.card}>
                    <InstagramIcon />
                    <p className={classes.media}>Instagram</p>
                </div>
                <div className={classes.card}>
                    <MarkEmailUnreadIcon />
                    <p className={classes.media}>Email</p>
                </div>
                <div className={classes.card}>
                    <FacebookIcon />
                    <p className={classes.media}>Facebook</p>
                </div>
            </div>
            <FeedbackForm />
        </div>
    )
}

export default Contact;