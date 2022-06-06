import React, { useRef } from 'react'
import { Button } from '@mui/material'
import styled from 'styled-components'

import { addMessageToChannel } from '../utils/firebase.utils'

function ChatInput({ channelId }) {
  const inputRef = useRef(null)
  
  const sendMessage = async e => {
    e.preventDefault()
    if (!channelId) return
    const message = inputRef.current.value
    await addMessageToChannel(message, channelId)
    inputRef.current.value = ''
  }
  return (
    <ChatInputContainer>
      <form>
        <input ref={inputRef} type="text" placeholder={`Message #ROOM`} />
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