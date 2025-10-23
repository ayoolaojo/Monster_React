
import Person from './assets/Person'
import ProductList from './assets/ProductList'
import Card from './components/Card'
import Footer from './Footer'
import Greeting from './Greeting'
import Header from './Header'
import JsxRules from './JsxRules'
import MainContent from './MainContent'
import ProductInfo from './ProductInfo'
import UserList from './UserList'
import Weather from './components/Weather'
import UserStatus from './components/userStatus'
import Greet from './components/Greet'
import StyledCard from './components/StyledCard'
import ProfileCard from './components/ProfileCard'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
const App = () => {
  return <div>
       <TodoList/>
       <Counter/>
      <StyledCard/>
      <ProfileCard/>
      <Header/>
      <Greet timeOfDay='morning' />
      <Greet timeOfDay='afternoon' />
        <Weather/>
      <UserStatus loggedIn={true} isAdmin={true}/>
      <UserStatus loggedIn={true} isAdmin={false}/>


      <MainContent/>
      <Footer/>

     

      <JsxRules/>

      <Greeting/>
      <ProductInfo/>
      <ProductList/>
      <Person name={'Ayoola'} age={24}/>
      <Person name={'Mathew'} age={21}/>
      <Card>
        <h1>My Card 1</h1>
        <p>This is some content for Card 1</p>
      </Card>
      <Card>
        <h1>My Card 2</h1>
        <p>This is some content for Card 2</p>
      </Card>
      <Card>
        <h1>My Card 3</h1>
        <p>This is some content for Card 3</p>
      </Card>

     
      



      
     

      

  </div> 
}


export default App