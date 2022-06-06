import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import Chat from '../components/Chat'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Login from './Login'
import Spinner from 'react-spinkit'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase.utils'


function Home() {
  const [user] = useAuthState(auth)
  const [loadingState, setLoadingState] = useState(false)
  
  const loaderPreview = () => {
    setTimeout(() => {
      setLoadingState(prevState => !prevState)

    }, 3000)
    setLoadingState(prevState => !prevState)

  }

  useEffect(() => {
    loaderPreview()
  }, [])

  if (loadingState) {
    return (
      // Loading state
      <AppLoading>
        <AppLoadingContent>
          <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="slack-logo" />
          <Spinner name='folding-cube' fadeIn="none" color="green" />
          {
            user &&
            <h2>Welcome in {user.displayName}</h2>
          }
          <p>Loading Details...</p>
        </AppLoadingContent>
      </AppLoading>
    )
  }



  return (
    <>
      {
        !user ?
          <Login />
          :
          <Wrapper>
            <Header />
            <Sidebar />
            <Chat />
          </Wrapper>
      }
    </>
  )
}

export default Home

const Wrapper = styled.div`
  display: flex;
  height: 100vh;

`
const AppLoadingContent = styled.div`
 padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(80, 79, 79, 0.12), 0 1px 2px rgba(85, 84, 84, 0.24);
  display: flex;
  flex-direction: column;
  place-items: center;

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 30px;
  }

  > h2, p {
    margin-top: 30px;
  }

 `

const AppLoading = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`