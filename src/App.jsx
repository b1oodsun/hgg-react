import { Routes, Route, Link } from "react-router-dom";

import { Plot } from "./components/Plot/Plot";
import { Game } from "./components/Gameplay/Game";
import { Chrono } from "./components/Chronosuit/Chronosuit";
import { Trailer } from "./components/Beta/Trailer";
import styles from "./style.module.scss";

function App() {
  return (
    <>
    <header className={styles["header"]}>
      <a href="https://www.youtube.com/watch?v=S42YRChMOH4"
    target="_blank" >
      <img className={styles["image"]}
    src="https://w.forfun.com/fetch/e2/e25c599fd80b937ae7d18d9be40dfe60.jpeg" 
    alt="timeshift" 
    />
    </a>
  <Link  to="/">PloTofgame</Link>
  <Link  to="/posts">Gameplay</Link>
  <Link  to="/about">Chronosuit</Link>
  <Link  to="*">Trailer</Link>
  <a 
  href="https://www.youtube.com/watch?v=ERzn-_w78y4"
  target="_blank">
    <img 
  className={styles["image"]}
  src="https://cdn.mobygames.com/promos/2018332-timeshift-render-beta-suit-pose-2.jpg" 
  alt="photo_timeshift" />
    </a>
    </header>

<Routes>
    <Route  path="/" element={<Plot />}/>
    <Route  path="/posts" element={<Game />}/>
    <Route  path="/about" element={<Chrono />}/>
    <Route  path="*" element={<Trailer />}/>
</Routes>
<footer>
  <a href="https://en.wikipedia.org/wiki/TimeShift#:~:text=TimeShift%20is%20a%20first%2Dperson,developed%20using%20the%20Saber3D%20Engine."></a>
  <a href=""></a>
</footer>
    </>
  );
}

export default App;
