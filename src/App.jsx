import React from "react";
import Cards from './Cards'
import Sdata from "./Sdata";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = 'other';

const App = () => (
    <>
        <h1 className="heading_style">List of top 6 movies to watch</h1>
        {(favSeries === 'amazon')? <Amazon/> : <Netflix/> }

    </>
);

export default App;
