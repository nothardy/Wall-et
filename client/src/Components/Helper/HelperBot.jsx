import s from './HelperBot.module.css';
import Bar from '../Bar/bar';
import NavBar from '../Home/NavBar/navBar';
import Helper from './Helper';

function HelperBot() {
    return (
        <div>
            <Bar />
            <div className={s.container}>
                <div className={s.left}>
                    <NavBar />
                </div>
                <div className={s.right}>
                    <Helper />
                </div>
            </div>
        </div>
    )
}

export default HelperBot