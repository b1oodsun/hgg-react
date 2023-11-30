import styles from "./style.module.scss"

const Game = () => {
    return(
            <div className={styles["swap-title"]}>
                <h2>Gameplay</h2>
                <p>
                    The gameplay is based on the idea of time management. 
                    The player has at his disposal chronosuit abilities such as stopping time, slowing down time and inverting time, 
                    which can only be used effectively in certain situations; 
                    in some situations this option is completely blocked. 
                    Time manipulation requires energy, which is consumed during use, 
                    but then quickly restored during normal operation. 
                    <a href="http://squarefaction.ru/game/timeshift/gallery/2297">Screenshots</a>
                    <p>
                    The game mechanics are almost entirely built on the game of time; 
                    it is impossible to completely complete the game without using the capabilities of the suit 
                    due to the fact that some puzzles when moving to the next level or when moving are solved only by manipulating time. 
                    </p>
                    <a href="http://squarefaction.ru/game/timeshift/gallery/41544">Gallery</a>
                    <p>
                    But if you are not interested in reading, you can watch the video on the right in the corner there is a picture, 
                    you can click and be redirected to the video clip
                    </p>
                </p>
        </div>
    )
}

export { Game };