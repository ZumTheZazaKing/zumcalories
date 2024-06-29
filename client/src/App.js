import { createContext, useMemo, useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import io from 'socket.io-client'

import Header from './components/Main/Header'
import Searchbar from './components/Main/Searchbar'
import List from './components/Main/List'
import BackToTop from './components/BackToTop'

export const Context = createContext({})
export const ReactSwal = withReactContent(Swal)

const socket = io.connect("https://zumcalories.onrender.com")

function App() {

  const [defaultItems, setDefaultItems] = useState([])
  const [items, setItems] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [fetchingData, setFetchingData] = useState(true)


  useEffect(() => {
    if (searchQuery.trim() === "") return setItems([...defaultItems])
    let temp = [...defaultItems]
    temp = temp.filter(food => {
      return food.name.toLowerCase().includes(searchQuery.trim("").toLowerCase())
    })
    setItems([...temp])
  }, [searchQuery])


  useEffect(() => {
    socket.emit("get_data")
  }, [])

  useEffect(() => {
    socket.on("load_data", data => {
      setItems(data)
      setDefaultItems(data)
      setFetchingData(false)
    })
  }, [socket])

  const memo = useMemo(() => ({
    socket,
    items, setItems,
    searchQuery, setSearchQuery
  }), [items, searchQuery])

  return (
    <Context.Provider value={memo}>
      <div className="App space-y-5">
        <Header />
        <Searchbar />
        {!fetchingData ?
          <List />
          :
          <h1 className='text-2xl font-bold text-center'>Loading...</h1>
        }
        <BackToTop />
      </div>
    </Context.Provider>
  );
}

export default App;
