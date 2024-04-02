import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Main from './components/Main'
import DetailsPage from './components/details/DetailsPage'
import {Switch,Route} from 'react-router-dom'
import CategoryBasedPosts from './components/categories/CatBasedPosts'
import About from './components/about/About'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/details/:slug" component={DetailsPage}/>
          <Route path="/category/:id" component={CategoryBasedPosts}/>
          <Route path="/about" component={About}/>
      </Switch>
      <Footer/>
    </div>
  )
}
export default App
