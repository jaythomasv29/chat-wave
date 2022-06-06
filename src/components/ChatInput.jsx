import React, { useRef } from 'react'
import { selectRoomName } from '../features/chatSlice'
import { Button } from '@mui/material'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setRoomMessages } from '../features/chatSlice'
import { addMessageToChannel, getMessagesFromChannel, } from '../utils/firebase.utils'

function ChatInput({ channelId }) {
  const dispatch = useDispatch()
  const inputRef = useRef(null)
  const roomName = useSelector(selectRoomName)

  const setMessages = async () => {
    const messages = await getMessagesFromChannel(channelId)

    dispatch(setRoomMessages({
      roomMessages: messages
    }))
  }

  const sendMessage = async e => {
    e.preventDefault()
    if (!channelId) return
    const message = inputRef.current.value
    await addMessageToChannel(message, channelId)
    inputRef.current.value = ''
    setMessages()
  }
  return (
    <ChatInputContainer>
      <form>
        {

        }
        <input ref={inputRef} type="text" placeholder={roomName ? `Message #${roomName}` : 'Enter a channel to chat'} />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export const ChatInputContainer = styled.div`
  /* border-radius: 20px; */

  > form {
    position: relative;
    display: flex;
    justify-content: center;

    > input {
      position: fixed;
      bottom: 30px;
      width: 60%;
      border: 1px solid gray;
      border-radius: 3px;
      padding: 20px;
      outline: none;
    }

    > button {
      display: none;
    }
  }
`

export default ChatInput