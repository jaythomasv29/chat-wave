import React from 'react'

import styled from 'styled-components'
import Chat from '../components/Chat'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function Home() {
  
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Chat />
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  display: flex;
  height: 100vh;

`