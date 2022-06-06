import React from 'react'
import styled from 'styled-components'
import { useCollection } from 'react-firebase-hooks/firestore'
import { roomsCollection } from '../utils/firebase.utils'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import { SIDEBAR_DATA } from '../sidebarData';
import SidebarOption from './SidebarOption';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add'


function Sidebar() {
  const [channels, loading, error] = useCollection(roomsCollection)
  console.log(channels)
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Chat HQ</h2>
          <h3><FiberManualRecordIcon />James Vongampai</h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      {
        SIDEBAR_DATA.map(({ id, icon, title }) => (
          <SidebarOption key={id} Icon={icon} title={title} />

        ))
      }
      <hr />
      <SidebarOption Icon={ExpandLessIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
      {
        channels?.docs.map((doc) => (
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
        ))
      }

    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  margin-top: 60px;
  max-width: 260px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    padding: 7px;
    border-radius: 50%;
    background-color: white;
    font-size: 18px;
  }
  `
const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 7px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    
    align-items: center;

    > .MuiSvgIcon-root {
      font-size: 14px;
      margin-top: 1px;
      margin-right: 2px;
      color: green;
    }
  }
`