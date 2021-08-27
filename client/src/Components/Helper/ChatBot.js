import s from "./ChatBot.module.css";
import React from 'react';

function ChatBot({array}) {
    return (
        <div className={s.contentWrap}>
            <div className={s.bodyChat}>
            {array.map((message) =>
                <div className={s.chatMessage}>
                    <img className={s.chatImage} alt="chatImage" src={message.image} />
                    <p>{message.text} </p>
                </div>
            )}
            </div>
        </div>)
}

export default ChatBot