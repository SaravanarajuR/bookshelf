"use client"

import classes from "./Share.module.css"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Image from "next/image"
import importImage from "@/public/insertImage.png"
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

function Share() {
    const [image, setImage] = React.useState(importImage)
    const thumbnailRef = React.useRef()

    function handleUpload() {
        let reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result)
        }

        reader.readAsDataURL(thumbnailRef.current.files[0])
    }

    return (
        <div className={classes.share}>
            <form className={classes.form}>
                <p className={classes.head}>Lets share Our Knowledge together</p>
                <FormControl>
                    <FormLabel className={classes.label}>Book/Document Name</FormLabel>
                    <Input placeholder="Enter your book or document name" />
                </FormControl>
                <FormControl>
                    <FormLabel className={classes.label}>Description</FormLabel>
                    <Input placeholder="A small description about your document" />
                </FormControl>
                <div className={classes.imageSection}>
                    <input id="uploadedImage" onChange={handleUpload} type="file" ref={thumbnailRef} className={classes.fileInput} />
                    <label htmlFor="uploadedImage" className={classes.imageLabel}>
                        <p className={classes.label}>Please Upload an thumbnail for your document</p>
                        <Image width={150} height={150} alt="uploaded Image" src={image} className={classes.uploadedImage} />
                    </label>
                    <input id="uploadedImage" type="file" className={classes.fileInput} />
                    <label htmlFor="uploadedImage" className={classes.imageLabel}>
                        <p className={classes.label}>Upload Your Document/Book</p>
                        <Image width={150} height={150} alt="uploaded Image" src={image} className={classes.uploadedImage} />
                    </label>
                </div>
                <FormControl>
                    <label htmlFor="select-button" id="select-label">Accessibility</label>
                    <Select
                        slotProps={{
                            button: {
                                id: 'select-button',
                                'aria-labelledby': 'select-label select-button',
                            }
                        }}
                    >
                        <Option value="public">Public</Option>
                        <Option value="private">Private</Option>
                        <Option disabled value="unlisted">Unlisted</Option>
                    </Select>
                </FormControl>
            </form>
        </div>
    )
}

export default Share;