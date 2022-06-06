import React from 'react'
import styled from 'styled-components'

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Avatar, Button } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase.utils';


function Header() {
  const [user] = useAuthState(auth)
  return (
    <HeaderContainer>
      {/* Header - left */}
      <HeaderLeft>
        <HeaderAvatar
          alt={user?.displayName}
          src={user?.photoURL}
          

        />
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header - search  */}
      <HeaderSearch>
        <SearchIcon />
        <input type="text" placeholder="Search Channel" />
        <DisplaySettingsIcon />
      </HeaderSearch>
      {/* Header - right */}
      <HeaderRight>
          <RightContainer>
            <HelpOutlineIcon />
        {
          user &&
            <Button onClick={() => auth.signOut()}>Sign Out</Button>
          }
          </RightContainer>
      </HeaderRight>

    </HeaderContainer>
  )
}

export default Header;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`

const HeaderLeft = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
  
`

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  /* padding: 10px 0; */
  
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`

const HeaderSearch = styled.div`
  flex: 0.3;
  opacity: 1;
  border-radius: 6px;
  background-color: #00268f;
  text-align: center;
  padding: 3px 20px;
  color: gray;
  border: 1px gray solid;
  display: flex;
  align-items: center;
  justify-content: center;

  

> input {
  background-color: transparent;
  outline: none;
  border: none;
  text-align: center;
  min-width: 35vw;
  color: white;
}
`

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: #aeadad;

  .MuiSvgIcon-root {
    font-size: 1.25rem;
    cursor: pointer
}
  `



const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`



