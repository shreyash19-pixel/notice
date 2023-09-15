import React from 'react'
import styled from 'styled-components'
import Test from '../../components/Test'


const Home = () => {
    const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 32px;
    `
  return (
   <Container>
      <Test />
   </Container>
  )
}

export default Home