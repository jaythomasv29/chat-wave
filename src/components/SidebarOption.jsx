import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addToChannelCollection } from "../utils/firebase.utils";
import { enterRoom } from '../features/chatSlice'
import { useDispatch } from 'react-redux'


function SidebarOption({ id, Icon, title, addChannelOption }) {
  console.log(Icon)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      addToChannelCollection({ name: channelName });
    }
  };

  const selectChannel = () => {
    if (id) {
      navigate(`/${id}`)
      dispatch(enterRoom({
        roomId: id,
        roomName: title
      }))
    }
  };
  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  padding-left: 5px;
  cursor: pointer;


  > .MuiSvgIcon-root {
    color: white;
  }

  :hover {
    opacity: 0.9;
    background-color: #191a51;
  }

  > h3 {
    font-weight: bolder;
    letter-spacing: 0.25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 5px 0;
    padding: 5px;


  }

  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionChannel = styled.h3`
  font-weight: 500;
  padding: 10px 0;
  font-size: 14px;

  letter-spacing: 0.25px;
`;
