import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
        )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={s.body}>
            <h2 className={s.title}>Диалоги</h2>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name = "Артёмка" id = "1"/>
                    <DialogItem name = "Валера" id = "2"/>
                    <DialogItem name = "Николай" id = "3"/>
                    <DialogItem name = "Влад" id = "4"/>
                    <DialogItem name = "Путин" id = "5"/>
                </div>
                <div className={s.messages}>
                    <Message message = "Message 1"/>
                    <Message message = "Message 2"/>
                    <Message message = "Message 3"/>
                    <Message message = "Message 4"/>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;