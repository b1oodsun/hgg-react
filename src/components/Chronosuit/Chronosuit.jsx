import styles from "./style.module.scss"

const Chrono = () => {
return(
    <div className={styles["chrono-suit"]}>
        <h2>chronosuit</h2>
    <span>
        <p>
As part of the time travel project, two versions of the suits were created - Alpha and Beta. 
Both outfits can perform both active (direct intervention) and passive (observation) jumps into the past. 
However, they differ in that Beta equipment was created for military purposes and has a wider range of capabilities.
        </p>
<p>
Additional Beta Equipment Features 
Time dilation. In this mode, the suit's energy is consumed slowly, movement speeds up.
Stopping time. In this mode, the suit's energy is consumed quickly, movement slows down.
Time inversion (playing time in reverse), in this mode, the suit's energy is consumed quickly. 
Movement also slows down.
<img className={styles["large_timeshift"]}
src="https://cdna.artstation.com/p/assets/images/images/000/280/104/large/timeshift_concept.jpg?1414853910" 
alt="suit" />
</p>

When the latter function is enabled, it becomes impossible to influence any objects, as this can lead to a paradox. 
The equipment protects the user from any effects of time inversion, both positive and negative. 
The Beta Equipment includes the following systems:

S².AM - Strategy System for Adaptable Metacognition (Strategic System for Adaptable Metacognition)
SAR - System of Auto Return
NEXT² - Next-gen Exploration of Time Travel(NOT-FOUND)

<img className="image"
src="https://upload.wikimedia.org/wikipedia/ru/thumb/e/ee/S2am_processor.jpg/220px-S2am_processor.jpg" 
alt="processor" />

Processor S².AM
S².AM is an artificial intelligence embodied in the nanocomputer network of Beta Equipment, which controls all systems, including the user’s neurosystem. The computer is connected to it using nanoimplants that penetrate the spinal cord . If there are negative changes in the user's health readings, the neurostimulation process is activated. This process occurs most quickly when time is stopped. The suit's AI gives tactical advice and instructions, 
and blocks time inversion if its use could lead to a paradox. 
All information is displayed on a high-precision visor. 
The suit's energy is self-regenerating.

<img className={styles["large_timeshift"]}
src="https://cdn.myportfolio.com/a1b6fb49-9348-410c-abab-39e995383269/f83fc9ba-96a4-470e-81ce-13e28dd047b8_rw_1920.jpg?h=af0ea0c62058dcbcf8090d45aef25f84" 
alt="beta_suit" />.

Beta equipment is also capable of independently hacking the nearest enemy servers and downloading information from them, and then transmitting it to the nearest allied servers
    </span>
    </div>

    )
}

export { Chrono };