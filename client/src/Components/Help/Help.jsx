import h from './Help.module.css'
import Bar from '../Bar/bar'
import NavBar from '../Home/NavBar/navBar'
import Working from '../Working/Working'

function Help() {
    return (
        <div>
            <Bar />
            <div className={h.container}>
                <div className={h.left}>
                    <NavBar />
                </div>
                <div className={h.right}>
                    <Working />
                </div>
            </div>
        </div>
    )
}

export default Help