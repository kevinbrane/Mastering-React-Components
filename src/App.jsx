import Page from './Components/Page'
import Main from './Components/Main'
import Photos from './Components/Photos'
import Header from './Components/Header'
import Footer from './Components/Footer'
import data from './mocks/data.json'
import './App.css'

function App() {

  return (
    <>
      <Page>
        <Header titile= "header title"/>
        <Main>
          <Photos/>
        </Main>
        <Footer titile="footer title"/>
      </Page>
    </>
  )
}

export default App
