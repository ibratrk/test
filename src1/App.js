import './App.css';
import MyButton from './MyButton';
import Welcome  from './Welcome';
import Parent from './Parent';
import GreetingWithout from './GreetingWithout';
import GreetingWith from './GreetingWith';
import FriendsList from './FriendsList';

function App()
{
  class Car
  {
    constructor (name)
    {
      this.brand = name;
    }
    present()
    {
      return "I have this " + this.brand;
    }
  }
  
  const mycar = new Car("Mercedes");

/**/
//Function without parameter:
  const hello1 = () =>
  {
    return "Welcome to REACT tutorial";
  }
//Function with parameter:
  const hello2  = val =>
  {
    return "Welcome to " + val;
  }

  const numbers = [1, 2, 3, 4];//array
  const doubled = numbers.map(x => x * 2);

// function MyList 
   const fruitlist = ['apple', 'banana', 'cherry'];
  const MyList = ()=>
  {
    return (
      <ol>
      {
        fruitlist.map((fruit, index) => <li key={index}>{fruit}</li>)
      }
      </ol>
    );
  }
  
//even
  const num = [4, 7, 9, 2];
  const even = () =>
  {
    return (
      <ul>
        {
          num.map(d => <li>{d} is { d%2==0 ? "even" : "odd" }</li>)
        }
      </ul>
    );
  }  

  
 
  
  return (
    <div className="App">
      {/* First exercise */}
      <h1>Class: Attribute: {mycar.brand}</h1>
      <h2>Class: Method: {mycar.present()}</h2>
      <p>-------------------------------------------------------------------------------------------------</p>
      <h3>Function without parameter: {hello1()}</h3>
      <h3>Function with parameter: {hello2('LIU')}</h3>
      <p>-------------------------------------------------------------------------------------------------</p>
      <p> Array: {numbers}</p>
      <p> Map on array: {doubled}</p>
      <p>-------------------------------------------------------------------------------------------------</p>
      <p> {MyList()}</p>
      <p>-------------------------------------------------------------------------------------------------</p>
      <MyButton text = "Click me" onClick = {() => alert ('Button i clicked')}/>
      <p>-------------------------------------------------------------------------------------------------</p>
      <p> {even()}</p>
      <p>-------------------------------------------------------------------------------------------------</p>
      <Welcome appName ='React demo' />
      <Parent />
      <GreetingWithout name = "Ahmed" age = "30" />
      <GreetingWith name = "Mariam" age = "25" />
      <FriendsList friends={['Fatima', 'Dania', 'Jamal', 'Omar', 'Sarah', 'Rola']} />
    </div>
  );
}

export default App;