import styled from 'styled-components'
// import { useParams } from 'react-router-dom'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import { selectRoomId, selectRoomName } from '../features/chatSlice';
import { useSelector } from 'react-redux'
import ChatInput from './ChatInput';
import { getMessagesFromChannel } from '../utils/firebase.utils';

function Chat() {
  const roomId = useSelector(selectRoomId)
  const roomName = useSelector(selectRoomName)
  const getMessages = async () => {
    await getMessagesFromChannel(roomId)
   
  }
  console.log(getMessages())

  
  console.log(roomId)
  return (
    <ChatContainer>
      <>
      <Header>
        <HeaderLeft>
          <h4><strong>{roomName}</strong>
            <StarBorderIcon />
          </h4>
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoIcon /> Details
          </p>
        </HeaderRight>
      </Header>
      <h1>{roomId}</h1>
      </>
      <ChatMessages>
        {/* List out messages */}
      </ChatMessages>

      <ChatInput channelId={roomId}/>
        {/* ChannelName */}
        {/* roomId */}

      
    </ChatContainer>
  )
}

export default Chat

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
  margin-top: 60px;
`