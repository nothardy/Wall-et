import p from './Transfer.module.css'
import Bar from '../Bar/bar'
import NavBar from '../Home/NavBar/navBar'
import Working from '../Working/Working'

function Transfer() {
    return (
        <div>
            <Bar />
            <div className={p.container}>
                <div className={p.left}>
                    <NavBar />
                </div>
                <div className={p.right}>
                    <Working />
                </div>
            </div>
        </div>
    )
}

export default Transfer