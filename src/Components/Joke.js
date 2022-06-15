import React from "react";
import {FaStar} from "react-icons/fa";

export default function Joke({selectStars=0, totalJokes = 5, onRate = f => f , style={} }){
    // const [selectStars, setStarCount] = useState(3);
    const starColor = "green"; 

    const createArray = length => [...Array(length)]; 
    return (
        <div style={{padding: "5px", ...style}}>
            {createArray(totalJokes).map((n,i)=> (
                <Star 
                key={i} 
                selected={selectStars > i}
                starColor = {starColor}
                onSelect={()=> onRate(i+1)}
                />
            ))}
            <p>
                {selectStars} of {totalJokes} stars
            </p>
        </div>

    )
}

const Star = ({selected = false, starColor ,onSelect = f => f}) => (
    <FaStar color={selected ? starColor : "grey"} onClick={onSelect} />
)