import React from "react";
import Heading from "./Heading";
import Images from "./Images";

function Cards(props){
  return(
    <>
      <div className="cards">
        <div className="card">
          <Images imgsrc={props.imgsrc}/>
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <Heading seriesName={props.seriesName}/>
            <a href={props.link} target="_blank"><button>Watch {props.seriesName} Now </button></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;