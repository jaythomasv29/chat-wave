import styled from 'styled-components'

function MessageBox({msg}) {
  
  const { message, timestamp, userImage, user} = msg
  
  let messageDate = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds/1000000)
  messageDate = (`${messageDate.toUTCString()} ${messageDate.toLocaleTimeString()}`)
  return (
    <MessageContainer>
      <img src={userImage} alt="user-profile" referrerPolicy="no-referrer"/>
      <MessageInfo>
        <h4>
        {user}{' '}
        <span>
          <>
          {messageDate}
          </>
        </span>
        </h4>
     <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  )
}

export default MessageBox

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
    border: 1px solid whitesmoke;
  }

`

const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }

  > p {
    padding: 5px 0;
  }
`