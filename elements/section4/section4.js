import classes from "@/components/homemain/homemain.module.css"
import { useId } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Section4() {
    let priceArray = [
        {
            price: 0,
            name: "Free",
            useCase: "For students and children",
            features: [
                "Access to the Community Forum",
                "Online Book Reading",
                "Upload Up to 10 Documents"
            ],
            featureHead: "Core Features"
        },
        {
            price: 150,
            name: "Premium",
            useCase: "For working professionals",
            features: [
                "Offline Reading Capability",
                "Ad-Free Browsing Experience",
                "Upload Up to 100 Documents"
            ], featureHead: "Everything Premium"
        },
        {
            price: 200,
            name: "Enterprise",
            useCase: "For Enterprise and organizations",
            features: [
                "Offline Reading Capability",
                "Comprehensive Analytics Dashboard",
                "Unlimited Document Uploads"
            ], featureHead: `Everything Scalable`
        }
    ];
    function createCards() {
        return priceArray.map((object) => {
            return (
                <div key={useId()} className={classes.priceCard}>
                    <div className={classes.price}>
                        <div className={classes.planName}>{object.name}</div>
                        <p>{"₹" + object.price}<span className={classes.month}>/month</span></p>
                    </div>
                    <p className={classes.useCase}>{object.useCase}</p>
                    <div className={classes.featureHead}>{object.featureHead.split(" ")[0]} <span className={classes.purple}>{object.featureHead.split(" ")[1]}</span></div>
                    <div className={classes.features}>
                        <p className={classes.feature}><AddCircleIcon />{object.features[0]}</p>
                        <p className={classes.feature}><AddCircleIcon />{object.features[1]}</p>
                        <p className={classes.feature}><AddCircleIcon />{object.features[2]}</p>
                    </div>
                </div>)
        })
    }

    return (
        <div className={classes.section4}>
            <div className={classes.cards}>
                {createCards()}
            </div>
        </div>
    )
}

export default Section4;