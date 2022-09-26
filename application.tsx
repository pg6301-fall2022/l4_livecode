import * as React from "react";
import * as ReactDOM from "react-dom";

import {useState} from "react";

export function ListMovies(){
    return <div>
        <h1>Something else basic, but in a different file</h1>
    </div>
}

interface Movie {
    title: String;
    year: String;
    plot: String;
}

export function NewMovieForm(
    {onAddMovie,} : {onAddMovie(mov: Movie): void }
){
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");

    function handleSubmit() {
        onAddMovie({title, year, plot});
    }

    return <form onSubmit={handleSubmit}>
        <h1> New Movie </h1>
        <div>
            Title: <input data-testid="title" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div>
            Year: <input data-testid="year" value={year} onChange={e => setYear(e.target.value)}/>
        </div>
        <div>
            Plot: <textarea data-testid="plot" value={plot} onChange={e => setPlot(e.target.value)}/>
        </div>
    </form>
}