import React, {useState} from "react";
import {FaStar} from "react-icons/fa";

export default function Joke({selectStars=0, totalJokes = 5, onRate = f => f , style={} }){
    // const [selectStars, setStarCount] = useState(3);
    const starColor = "green";
    const [joke, setJoke] =  useState([]);

    const fetchJokeData = async () => {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any'); 
        const data = await response.json(); 
         console.log(data.type); 
        const transformedJoke = {
                category: data.category,
                type: data.type,
                joke: data.joke,
                setup: data.setup,
                delivery: data.delivery,
                safe: data.safe
        };
        setJoke(transformedJoke);
        console.log(transformedJoke)
    }

    const createArray = length => [...Array(length)]; 
    return (
        <React.Fragment>
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
            <div>
                <button onClick={fetchJokeData}>Get Joke</button>
               { joke.type === 'single' ? <p>{joke.joke}</p> : 
               <React.Fragment>
                <p>{joke.setup}</p> 
                <p>{joke.delivery} </p>
               </React.Fragment>
               }
            </div>
        </div>
        </React.Fragment>
    )
}

const Star = ({selected = false, starColor ,onSelect = f => f}) => (
    <FaStar color={selected ? starColor : "grey"} onClick={onSelect} />
)