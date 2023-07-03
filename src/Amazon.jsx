import React from "react";
import Sdata from "./Sdata";
import Cards from "./Cards";


const Amazon = () => {
    return (
        <Cards
            key={Sdata[2].id}
            imgsrc={Sdata[2].imgsrc}
            title={Sdata[2].title}
            seriesName={Sdata[2].seriesName}
            link={Sdata[2].link}
        />);
}

export default Amazon;