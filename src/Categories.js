import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';
import App from './App'
import Joke from './Joke';
import './Categories.css';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ selected, setSelected ] = useState('');
  
    useEffect(() => {
        setLoading(true);
        fetch(`https://api.chucknorris.io/jokes/categories`)
            .then(res => res.json())
            .then(cat => setCategories(cat))
        setLoading(false);
    }, []);
    console.log("Categories = " + categories);

    const categoryChangedHandler = (e) => {
        
        console.log("category choosed = " + e);
        setCategory(e); 
        setSelected(e);    
        
    };


    return (
        <div>
            <div className="categories">

                {categories.map((category, index) => {
                    console.log("catogoried.map called and categories= " + category);
                    return <Button className="CategoryButton" 
                                variant={selected === category ? "contained" : "outlined"} 
                                color="primary"
                                value={category}
                                onClick={() => {
                                    categoryChangedHandler(category);
                                        }}
                                style={{ textAlign: 'center' }}
                            >
                                {category}
                            </Button>
                })
                }
            </div>
            <Joke category={category} />
        </div>
    )
}

export default Categories
