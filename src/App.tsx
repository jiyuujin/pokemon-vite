import React from 'react'
import useSWR from 'swr'
import './App.css'
import './assets/gallery.css'

import { Search } from './components/Search'
import { CardList } from './components/CardList'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function App() {
  const { data, error } = useSWR(
    `${import.meta.env.VITE_APP_POKEMON_API}/pokemon?limit=200&offset=200`,
    fetcher
  )
  const [searchText, setSearchText] = React.useState<string>('')

  if (!data) return <div>Loading..</div>

  if (error) return <div>Failed</div>

  const handleInputClick = (newtext: string) => {
    setSearchText(newtext)
  }

  return (
    <div className="App">
      <div className="search">
        <Search text={searchText} setText={handleInputClick} />
      </div>
      <div className="gallery">
        <CardList data={data.results} search={searchText} />
      </div>
    </div>
  )
}

export default App
