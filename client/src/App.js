import { createContext, useMemo, useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import data from './assets/food_data.json'

import Header from './components/Main/Header'
import Searchbar from './components/Main/Searchbar'
import List from './components/Main/List'
import BackToTop from './components/BackToTop'

export const Context = createContext({})
export const ReactSwal = withReactContent(Swal)

function App() {

  const [defaultItems, setDefaultItems] = useState([])
  const [items, setItems] = useState([])
  const [searchQuery, setSearchQuery] = useState("")


  useEffect(() => {
    if (searchQuery.trim() === "") return
    let temp = [...defaultItems]
    temp = temp.filter(food => {
      return food.name.toLowerCase().includes(searchQuery.trim("").toLowerCase())
    })
    setItems([...temp])
  }, [searchQuery])

  const getFoodData = async () => {
    setDefaultItems(data)
    setItems(data)
  }

  useEffect(() => {
    getFoodData()
  }, [])

  const memo = useMemo(() => ({
    items, setItems,
    searchQuery, setSearchQuery
  }), [items, searchQuery])

  return (
    <Context.Provider value={memo}>
      <div className="App space-y-5">
        <Header />
        <Searchbar />
        <List />
        <BackToTop />
      </div>
    </Context.Provider>
  );
}

export default App;
