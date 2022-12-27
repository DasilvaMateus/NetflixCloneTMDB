import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./Components/MovieRow";
import FeaturedMovie from "./Components/FeaturedMovie"


export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  useEffect(() => {
    const loadAll = async () => {
      //Lista de filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Filme Hypado
      let originals = list.find(i=>i.slug === 'originals');
      let randomChoice = Math.floor(Math.random() * (originals.items.results.length-1));
      let chosen = originals.items.results[randomChoice];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);
  return (
    <div className="page">

      

      {featuredData && <FeaturedMovie item={featuredData}/>}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Projeto pessoal de Mateus Natanael da Silva
      </footer>
      <div className="loading">
      </div>
    </div>
  );
}
