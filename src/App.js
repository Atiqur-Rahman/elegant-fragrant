import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Question from './components/Question/Question';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Shop></Shop>
        </div>
    );
}

export default App;
