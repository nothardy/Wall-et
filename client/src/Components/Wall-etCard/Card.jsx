import s from './Card.module.css'
import Bar from '../Bar/bar'
import NavBar from '../Home/NavBar/navBar'
import WalletCard from './wall-etCard'

function Card() {
    return (
        <div>
            <Bar />
            <div className={s.container}>
                <div className={s.left}>
                    <NavBar />
                </div>
                <div className={s.right}>
                    <WalletCard />
                </div>
            </div>
        </div>
    )
}

export default Card