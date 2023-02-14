import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
const Dialogs = (props) => {
    return (
        <div className={s.body}>
            <h2 className={s.title}>Диалоги</h2>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        <NavLink to='/dialogs/1'>Артёмка</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/2'>Валера</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/3'>Путин</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Message 1</div>
                    <div className={s.message}>Message 2</div>
                    <div className={s.message}>Message 3</div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;