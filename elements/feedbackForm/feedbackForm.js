"use client"

import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import classes from "@/elements/section5/contact.module.css"
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';


function feedbackForm() {
    function submitFeedback(evt) {
        console.log(evt)
    }

    return (
        <form onSubmit={submitFeedback} className={classes.form}>
            <p className={classes.feedbackHead}>Send Us a feedback</p>
            <FormControl>
                <FormLabel className={classes.label}>Name</FormLabel>
                <Input placeholder="Enter your name" />
            </FormControl>
            <FormControl>
                <FormLabel className={classes.label}>Email</FormLabel>
                <Input placeholder="Enter email" />
            </FormControl>
            <FormControl>
                <FormLabel className={classes.label}>Feedback</FormLabel>
                <Textarea size="lg" placeholder="What's on your mind" />
            </FormControl>
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default feedbackForm;