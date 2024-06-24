import io from 'socket.io-client'
import { createContext, useMemo, useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Header from './components/Main/Header'
import Searchbar from './components/Main/Searchbar'
import List from './components/Main/List'

const socket = io.connect('http://localhost:3001')
export const Context = createContext({})
export const ReactSwal = withReactContent(Swal)

function App() {

  const [items, setItems] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

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
    items, setItems,
    searchQuery, setSearchQuery
  }), [socket, items, searchQuery])

  return (
    <Context.Provider value={memo}>
      <div className="App space-y-5">
        <Header />
        <Searchbar />
        <List />
      </div>
    </Context.Provider>
  );
}

export default App;
