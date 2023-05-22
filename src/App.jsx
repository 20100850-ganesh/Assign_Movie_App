import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/header/Header'
import SimpleBottomNavigation from './components/Mainnav'
import { Container } from "@material-ui/core"
import Trending from './Route_pages/Trending/Trending'
import Movies from './Route_pages/Movies/Movies'
import Series from './Route_pages/Series/Series'
import Search from './Route_pages/Search/Search'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path='/' element={<Trending />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/series' element={<Series />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </Container>
      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>
  )
}

export default App;
