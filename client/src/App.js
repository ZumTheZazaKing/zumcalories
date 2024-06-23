import io from 'socket.io-client'
import { createContext, useMemo } from 'react'

import Header from './components/Main/Header'

const socket = io.connect('http://localhost:3001')
const Context = createContext({})

function App() {

  const memo = useMemo(() => ({
    socket
  }), [socket])

  return (
    <Context.Provider value={memo}>
      <div className="App">
        <Header />
      </div>
    </Context.Provider>
  );
}

export default App;
