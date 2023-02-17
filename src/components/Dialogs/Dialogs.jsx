import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

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

    let dialogElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = messagesData.map(message => <Message message={message.message}/>)

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