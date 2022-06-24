import { Avatar, IconButton } from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile'
import React, { useEffect, useState } from 'react'
import './WhatsChat.css'
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import { useParams } from 'react-router-dom'
import db from "./db/firebaseConfig"
import { useStateValue } from './StateProvider';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


function WhatsupChat() {
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState("")
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("")
    const [messages, setMessages] = useState([])
    const [{ user }, dispatch] = useStateValue()

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
            db.collection("rooms").doc(roomId).collection("message").orderBy('timestamp', 'asc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(
                    doc => doc.data()
                ))
            ))
        }
    })

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault()
        console.log("message typed", input)
        db.collection('rooms').doc(roomId).collection('message').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
    }

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last Seen at {" "} {
                        new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.name === user.displayName && "chat__receiver"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}

            </div>
            <div className="chat__footer">
                <InsertEmotionIcon />
                <form action="">
                    <input type="text" placeholder='Type a Message' value={input} onChange={(e) => setInput(e.target.value)} />
                    <button type='submit' onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default WhatsupChat