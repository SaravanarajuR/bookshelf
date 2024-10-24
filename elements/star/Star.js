import StarIcon from '@mui/icons-material/Star';

function Star({ rating }) {
    const style = {
        fill: `url(#grad${rating})`,
        margin: 0,
    };

    return (
        <svg width="20" height="20" viewBox="0 0 24 24">
            <defs>
                <linearGradient id={`grad${rating}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset={`${rating}%`} stopColor="#FCCD2A" />
                    <stop offset={`${rating}%`} stopColor="#fff" />
                </linearGradient>
            </defs>
            <StarIcon style={style} />
        </svg>
    );
}

export default Star;