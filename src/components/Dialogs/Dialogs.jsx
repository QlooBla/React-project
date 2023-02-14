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

    let dialogsData = [
        {id: 1, name: 'Артёмка'},
        {id: 2, name: 'Валера'},
        {id: 3, name: 'Николай'},
        {id: 4, name: 'Влад'},
        {id: 5, name: 'Путин'},
    ]
    let messagesData = [
        {id: 1, message: 'Message 1'},
        {id: 2, message: 'Message 2'},
        {id: 3, message: 'Message 3'},
        {id: 4, message: 'Message 4'},
        {id: 5, message: 'Message 5'},
    ]

    return (
        <div className={s.body}>
            <h2 className={s.title}>Диалоги</h2>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                </div>
                <div className={s.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                    <Message message={messagesData[3].message}/>
                    <Message message={messagesData[4].message}/>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;