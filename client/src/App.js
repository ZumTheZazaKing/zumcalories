import io from 'socket.io-client'
import { createContext, useMemo, useState, useEffect } from 'react'

import Header from './components/Main/Header'
import List from './components/Main/List'

const socket = io.connect('http://localhost:3001')
export const Context = createContext({})

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    socket.emit("get_data")
  }, [])

  useEffect(() => {
    socket.on("load_data", data => {
      setItems(data)
    })
  }, [socket])

  const memo = useMemo(() => ({
    socket,
    items, setItems
  }), [socket, items])

  return (
    <Context.Provider value={memo}>
      <div className="App">
        <Header />
        <List />
      </div>
    </Context.Provider>
  );
}

export default App;
