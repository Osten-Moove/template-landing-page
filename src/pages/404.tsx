import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styled from 'styled-components'
export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const Custom404: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])

  return (
    <Content>
      <h1>Oops! Página não encontrada.</h1>
      <p>Você será redirecionado para a página inicial em 3 segundos.</p>
    </Content>
  )
}

export default Custom404
