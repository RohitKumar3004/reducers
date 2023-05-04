import './App.css';
import Childs1 from './component/Childs1';
import Childs2 from './component/Childs2';
import Navbar from './component/e-commerce/Navbar';
import ProductList from './component/e-commerce/ProductList';
import CreateNote from './component/notes/CreateNote';
import NoteList from './component/notes/NoteList';
function App() {
  return (
    <div className="App">
      {/* <Childs1 />
      <Childs2/> */}
      {/* Hello */}
      {/* <CreateNote />
      <NoteList /> */}
      <Navbar />
      <ProductList/>
    </div>
  );
}

export default App;
