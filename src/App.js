import logo from './logo.svg';
import './App.css';
import getBusinessList from './BusinessList';

const businesses = [
  {
    name: "Name 1",
    address: "Address 1",
    city: "City 1",
    state: "State 1",
    zipCode: "ZipCode 1",
    category: "Category 1",
    rating: "Rating 1",
    review: "Review 1"
  },
  {
    name: "Name 2",
    address: "Address 2",
    city: "City 2",
    state: "State 2",
    zipCode: "ZipCode 2",
    category: "Category 2",
    rating: "Rating 2",
    review: "Review 2"
  },
  {
    name: "Name 3",
    address: "Address 3",
    city: "City 3",
    state: "State 3",
    zipCode: "ZipCode 3",
    category: "Category 3",
    rating: "Rating 3",
    review: "Review 3"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {getBusinessList(businesses)}
    </div>
  );
}

export default App;
