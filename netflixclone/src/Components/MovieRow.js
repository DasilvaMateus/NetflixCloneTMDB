import React, {useState} from "react";
import style from "./MovieRow.module.css";
import "../AppStyles.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";




export default function MovieRow({ title, items }) {
  const [scrollX, setScrollX] = useState(-400);
  const handleLeftArrow = ()=>{
    let x = scrollX + Math.round(window.innerWidth/2)
    if(x>0){
      x=0
    }
    setScrollX(x);
  }
  const handleRightArrow = ()=>{
    let x = scrollX - Math.round(window.innerWidth/2);
    let listW = items.results.length * 150;
    if((window.innerWidth - listW)>x){
     x=(window.innerWidth - listW) - 60;
    }
    setScrollX(x);
    
  }
  return (
    <div className={style.movieRow}>
      <h2>{title}</h2>
      <div className={style.movieRowLeft} onClick={handleLeftArrow}>
        <FiChevronLeft style={{fontSize:50}}/>
      </div>
      <div className={style.movieRowRight}onClick={handleRightArrow}>
        <FiChevronRight  style={{fontSize:50}}/>
      </div>
      <div className={style.movieListArea}>
        <div className={style.movieRowList} style={{
          marginLeft:scrollX,
          width: items?.results?.length * 150,
        }}>
          {" "}
          {items?.results.map((item, key) => (
            <div className={style.movieRowItem} key={key}>
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.original_title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
