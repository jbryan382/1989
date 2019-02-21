import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Movies from './components/Movies'

class App extends Component {
  render() {
    return (
      <>
        <main>
          <Header />
          <Movies />
          <Footer />
        </main>
      </>
    )
  }
}

export default App
