import React from "react";
import Sdata from "./Sdata";
import Cards from "./Cards";

const Netflix = () => {
    return (
        <>
            {Sdata.map((val) => (
                <Cards
                    key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    seriesName={val.seriesName}
                    link={val.link}
                />
            ))}
        </>
    );
}

export default Netflix;
