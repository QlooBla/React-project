import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const Dialogs = (props) => {
    let dialogElements = props.valueDialog.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.valueMessage.map(message => <Message message={message.message}/>)
    return (
        <div className={s.body}>
            <h2 className={s.title}>Диалоги</h2>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;