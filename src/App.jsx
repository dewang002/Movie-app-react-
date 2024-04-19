import React from 'react'
import Home from './components/Home'
import Sidebar from './components/partials/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tvshows from './components/Tvshows'
import People from './components/People'
import Moviedetail from './components/Moviedetail'
import Tvshowsdetail from './components/Tvshowsdetail'
import Peopledetail from './components/Peopledetail'
import Trailer from './components/partials/Trailer'


function App() {

  return (
    <div className='min-h-[100%] w-full flex bg-zinc-800 text-white overflow-hidden'>
      
    <Routes>
    <Route path='/' element={<Home />} />    
    <Route path='/trending' element={<Trending />} />
    <Route path='/popular' element={<Popular />} />
    <Route path='/movie' element={<Movie />} />
    <Route path='/movie/details/:id' element={<Moviedetail />}>
      <Route
       path="/movie/details/:id/trailer"
        element={<Trailer />}
      />
    </Route>
    <Route path='/tv' element={<Tvshows />} />
    <Route path='/tv/details/:id' element={<Tvshowsdetail />}>
    <Route
       path="/tv/details/:id/trailer"
        element={<Trailer />}
      />
    </Route>
    <Route path='/people' element={<People />} />
    <Route path='/people/details/:id' element={<Peopledetail />} />
    </Routes>

    </div>
  )
}

export default App
