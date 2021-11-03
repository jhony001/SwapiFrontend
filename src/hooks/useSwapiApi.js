import React from "react";

const useSwapiApi = () => {
    const [planets, setPlanets] = React.useState([]);
    
    React.useEffect(() => {
        fetch("http://localhost:3000/planets")
        .then(response => response.json())
        .then(json => {
            setPlanets(json);
        })
    }, []);

    const next = function(){
        if(planets.next !== null){
            fetch(planets.next)
            .then(response => response.json())
            .then(json => {
                setPlanets(json)
            })
        }
    };

    const previous = function(){
        if(planets.previous !== null){
            fetch(planets.next)
            .then(response => response.json())
            .then(json => {
                setPlanets(json)
            })
        }
    };
    
    return {
        planets,
        next,
        previous
    }
}

export default useSwapiApi;