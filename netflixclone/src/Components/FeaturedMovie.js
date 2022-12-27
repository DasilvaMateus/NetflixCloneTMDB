import styles from "./FeaturedMovie.css";
import React from "react";



export default function FeaturedMovie({item}){
  let firstDate = new Date(item.first_air_date);
  let genres =[];
  for (let i in item.genres){
    genres.push(item.genres[i].name);
  }
  return (<section className='featured' style={{
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
  }}>
      <div className="featuredVertical">
        <div className="featuredHorizontal">
          <div className="featuredName">{item.original_name}</div>
          <div className="featuredInfo">
          <div className="featuredRate">Nota: {item.vote_average} </div>
          <div className="featuredYear">{firstDate.getFullYear()}</div>
          <div className="featuredSeason"> {item.number_of_seasons} Temporada{item.number_of_seasons !==1 ? 's' :''}</div>
          </div>
          <div className="featuredDescription">{item.overview}</div>
          <div className="featuredButtons">
            <a className="featuredPlay">Assistir</a>
            <a className="myList">+ Minha lista</a>

          </div>
          <div className="featuredGenres"><strong>Gêneros:</strong>{genres.join(', ')}</div>
        </div>
      </div>
  </section>);
};
