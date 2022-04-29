import './App.css';
import Header from './component/header/Header';
import TopBar from './component/topbar/TopBar';
import Article from './component/article/Article';
import Archiving from './component/archiving/Archiving';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Article />
      <Archiving />
      <Footer />
      
    </div>
  );
}

export default App;
