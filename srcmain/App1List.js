import './App.css';
import FriendsList from './components/FriendsList';

function App()
{
  const items = ['apple', 'banana', 'cherry','mango'];
  const MyList = () =>
  {
    return (
      <div>
        <h1>Simple list</h1>
        <ol>
        {
          items.map((item, index) => (<li key={index}>{item}</li>))
        }
        </ol>
      </div>
    );
  }

const users = [
    { id: 1, name: 'Hadi', age: 30 },
    { id: 2, name: 'Carole', age: 25 },
    { id: 3, name: 'mahmoud', age: 20 },
    { id: 4, name: 'Mariam', age: 35 }];

  const ObjectList = () =>
  {
    return ( 
      <div>
      <h1>List of objects:</h1>
      <ul>
      {
        users.map((user) => (
                <li key={user.id}>{user.name} is {user.age} years old.
                </li> ))
      }
      </ul>
      </div>
    );
  }

  const youngUsers = users.filter(user => user.age <= 25);
  const YoungList = () =>
  {
    return ( 
      <div>
      <h1>List of young</h1>
      <ul>
      {
        youngUsers.map((user) => (
                <li key={user.id}>{user.name} is {user.age} years old.
                </li> ))
      }
      </ul>
      </div>
    );
  }

  return (
    <div className="App">
      <p> {MyList()}</p>
      <p> {ObjectList()}</p>
      <p> {YoungList()}</p>
      <FriendsList friends={['Fatima', 'Dania', 'Sarah', 'Rola']} />
    </div>
  );
}

export default App;