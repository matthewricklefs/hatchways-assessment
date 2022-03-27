import './App.css';
import SearchBar from './components/SearchBar';
import Accordion from './components/Accordion';
import data from './MOCK_DATA.json';

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Search Our Book Selection!" data={data} />

      {data.map((val, key) => (
        <Accordion title="What is your return policy?" data={val} index={key} />
      ))}
    </div>
  );
}

export default App;
