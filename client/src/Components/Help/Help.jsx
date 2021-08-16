import s from './Help.module.css'
import Bar from '../Bar/bar'
import NavBar from '../Home/NavBar/navBar'
import ContactUs from './contactUs'

function Help() {
    return (
        <div>
            <Bar />
            <div className={s.container}>
                <div className={s.left}>
                    <NavBar />
                </div>
                <div className={s.right}>
                    <ContactUs />
                </div>
            </div>
        </div>
    )
}

export default Help