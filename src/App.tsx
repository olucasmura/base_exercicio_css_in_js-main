import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import GlobalStyle, { Container } from './styles'

import './styles.ts'

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
