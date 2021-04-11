import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Categories.css';

function Joke({ category }) {
    console.log("category selected for joke = " + category);
    const jokeId = category;
    const [joke, setJoke] = useState({});
    const [jokeState, setJokeState] = useState(false);


    useEffect(() => {
        console.log('................' + category);
        const api = `https://api.chucknorris.io/jokes/random?category=${category}`;
        fetch(api)
            .then(res => res.json())
            .then(res => {
                setJoke(res);
            });
    }, [category, jokeState]);

    console.log("Joke for " + jokeId + " = " + joke);
    return (
        <div>
            {category && jokeId == ''
                ? <p style={{ textAlign: 'center', marginTop: '100px' }}>Please choose a category to begin<p style={{ textAlign: 'center' }}>🙂</p></p>
                : <p style={{ textAlign: 'center', marginTop: '100px' }}>Selected Category: {jokeId}</p>
            }
            <Card className="jokeCard">
                <CardContent>
                    <p style={{ textAlign: 'center', marginTop: '20px' }}>{joke.value}</p>
                </CardContent>
            </Card>
            <div  className="JokeButton">
                <Button color='primary' onClick={() => { setJokeState(!jokeState) }}>New Joke</Button>
            </div>
        </div>
    )
}

export default Joke
