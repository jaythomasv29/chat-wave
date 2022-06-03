import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function Navigation() {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
    </Wrapper>
  )
}

export default Navigation

const Wrapper = styled.div`
  display: flex;
  height: 100vh;

`