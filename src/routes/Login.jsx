import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { signInWithGooglePopup } from '../utils/firebase.utils'

function Login() {

  const signIn = () => {
    try {
      signInWithGooglePopup()

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="slack-logo"/>
        <h1>Sign in to Workspace Community</h1>
        <p>A firebase app </p>

        <Button onClick={signIn}>Sign in with Google</Button>

      </LoginInnerContainer>
    </LoginContainer>

  )
}

export default Login

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;

`
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(80, 79, 79, 0.12), 0 1px 2px rgba(85, 84, 84, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 30px;
  }

  > button {
    text-transform: inherit;
    margin-top: 30px;
    background-color: #4C8BF5 ;
    
    color: white;
  }
`