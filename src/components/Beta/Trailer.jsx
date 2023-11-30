import styles from "./style.module.scss"

const Trailer = () => {
return(
    <div className={styles["video"]}>
<iframe 
className={styles["movie"]}
src="https://www.youtube.com/embed/-X_0qsBl9oM?si=bKadjY3oHorloHXL" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
allowfullscreen>

</iframe>
    </div>

    )
}

export { Trailer };