import Fruits from './Componenets/Comp1';
import Numbers from './Componenets/Comp2';
import Names from './Componenets/Comp3';
import Price from './Componenets/Comp4';
import Score  from './Componenets/Comp5';
import Temperature from './Componenets/Comp6';
import UserCard from './Componenets/UserCard';
import UserProfile from './Componenets/UserProfile';
import ProductPrice from './Componenets/ProductPrice';

function App() {
  return (
    <>
    <Fruits/>
    <hr></hr>
    <Numbers/>
    <hr></hr>
    <Names/>
    <hr></hr>
    <Price price={100} tax={20}/>
    <hr></hr>
    <Score score={120}/>
    <hr></hr>
    <Temperature degrees={21}/>
    <hr></hr>
    <UserCard name="Zvone" age={26} city="Široki Brijeg"/>
    <hr></hr>
    <UserProfile userName="Zvone" email="kozulzvone@gmail.com" city="Široki Brijeg" isOnline={true}/>
    <hr></hr>
    <ProductPrice price={100} discount={0}/>
    </>
    
  );
}

export default App;
