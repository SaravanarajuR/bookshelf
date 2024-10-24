import classes from "./bookRead.module.css"
import Navbar from "@/elements/navbar/navbar";
import { getBookFromId, getReviewsFromBookId } from "@/getBooks";
import Image from "next/image";
import Star from "../../../elements/star/Star";
import { useId } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function bookRead({ params }) {
    let book = getBookFromId(params.bookId), reviews = getReviewsFromBookId(params.bookId);
    console.log(reviews)
    function calculateRating(sum, length) {
        let avg = sum / length, arr = new Array(5).fill(1)
        return arr.map(() => {
            if (avg > 1) {
                avg -= 1
                return <Star key={useId()} rating={100} />
            } else if (avg < 1 && avg > 0) {
                let temp = avg;
                avg = 0
                return <Star key={useId()} rating={Math.floor(temp * 100)} />
            } else {
                return <Star key={useId()} rating={0} />
            }
        })
    }

    function handleReviews() {
        return reviews.map((rev) => {
            return (<div key={useId()} className={classes.card}>
                <AccountCircleIcon className={classes.userIcon} />
                <p className={classes.stars}>{calculateRating(rev.rating, 1)}</p>
                <p className={classes.reviewHead}>{rev.review}</p>
                <p className={classes.reviewText}>{rev.description}</p>
            </div>)
        })
    }

    return (
        <div className={classes.parent}>
            <Navbar />
            <div className={classes.product}>
                <div className={classes.imageDiv}>
                    <Image alt="Book Image" src={book.thumbnail} width={300} height={400} className={classes.image} />
                </div>
                <div className={classes.rightSection}>
                    <div className={classes.author}>{book.author}</div>
                    <div className={classes.bookName}>{book.bookName}</div>
                    <div className={classes.rating}>
                        <div className={classes.star}>
                            {calculateRating(reviews.reduce((a, b) => a + b.rating, 0), reviews.length)}
                        </div>
                        <div className={classes.reviewsCount}>{reviews.length} reviews</div>
                    </div>
                    <div className={classes.bottom}>
                        <div className={classes.bottomChild}><FavoriteIcon />{book.likes}</div>
                        <div className={classes.bottomChild}><RemoveRedEyeIcon />{book.reads}</div>
                        <div className={classes.bottomChild}><AutoStoriesIcon />Read</div>
                    </div>
                    <div className={classes.price}>{book.pages}</div>
                </div>
            </div>
            <div className={classes.section2Head}>See What People think about this book</div>
            <div className={classes.reviews}>
                <div className={classes.review}>
                    {handleReviews()}
                    {handleReviews()}
                </div>
            </div>
        </div>
    )
}

export default bookRead;