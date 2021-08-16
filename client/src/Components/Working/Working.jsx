import React from 'react'
import w from "./Working.module.css"

function Working() {
    return (
        <div className={w.workingContainer}>
            <h3 className={w.workingTitle}>We are currently developing something awesome for you.</h3>
            <div className={w.centerWorkingImages}>
                <img className={w.imageLeft} src="https://mk0buildfireqbf86ll2.kinstacdn.com/wp-content/uploads/2020/07/how-long-does-it-take-to-build-a-mobile-app@3x-1024x487.png" alt="Working for you" />
                <img className={w.imageRight} src="https://media.giphy.com/media/cJHeQTbMltsjcCHiVs/giphy.gif" alt=" "></img>
            </div>
            {/* <img src="https://media.giphy.com/media/fTnSZ7b2eUEvyIOG6r/source.gif" alt=""></img>
            <img src="https://media.giphy.com/media/YMjtdHfXclxz9guJjk/source.gif" alt=""></img> */}
        </div>
    )
}

export default Working
