import { useEffect, useRef } from 'react'
import styled from 'styled-components'
// import { useParams } from 'react-router-dom'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import { selectRoomId, selectRoomName, setRoomMessages, selectMessages } from '../features/chatSlice';
import { useDispatch, useSelector } from 'react-redux'
import ChatInput from './ChatInput';

import { getMessagesFromChannel } from '../utils/firebase.utils';
import MessageBox from './MessageBox';

function Chat() {
  const chatRef = useRef(null)
  const roomMessages = useSelector(selectMessages)

  const roomId = useSelector(selectRoomId)
  const roomName = useSelector(selectRoomName)
  const dispatch = useDispatch()
  useEffect(() => {
    if (roomId) {
      const getMessages = async () => {
        const messages = await getMessagesFromChannel(roomId)
        dispatch(setRoomMessages({
          roomMessages: messages
        }))
      }
      getMessages()
    }
  }, [roomId, dispatch])

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end"
    })
  }, [roomId, roomMessages])


  return (
    <ChatContainer>

      <>
        <Header>
          <HeaderLeft>
            {
              roomName &&
              <h4><strong>{roomName}</strong>
                <StarBorderIcon />
              </h4>
            }
          </HeaderLeft>
          <HeaderRight>


            <p>
              <InfoIcon /> Details
            </p>


          </HeaderRight>
        </Header>
      </>
      {
        roomId &&
        <>
          <ChatMessages>
            {roomMessages && roomMessages.roomMessages?.map((message, idx) => (
              <MessageBox key={idx} msg={message} />
            ))}
          </ChatMessages>
          <ChatBottom ref={chatRef} />

          <ChatInput channelId={roomId} />
        </>
      }


    </ChatContainer>
  )
}

export default Chat

const ChatBottom = styled.div`
`

const ChatMessages = styled.div``

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`
const HeaderLeft = styled.div`
  >h4 {
   display: flex;
   align-items: center;
   color: gray;
   text-transform: lowercase;
 }

 .MuiSvgIcon-root {
   margin-left: 5px;
   font-size: 18px;
   cursor: pointer;
 }

`
const HeaderRight = styled.div`
> p{
    display: flex;
   align-items: center;
   color: gray;
   text-transform: lowercase;
  }
   .MuiSvgIcon-root {
   margin-right: 5px;
   font-size: 18px;
   cursor: pointer;
  }
  `

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 80px;
  margin-bottom: 80px;
`