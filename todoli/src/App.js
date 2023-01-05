import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateList from './component/CreateList/CreateList';
import ListContent from './component/ListContent/ListContent';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<CreateList />} />
        <Route path='/createlist' element={<CreateList />} />
        <Route path="/listcontent/Grocery" element={<ListContent category = "Grocery"/>} />
        <Route path="/listcontent/Assignment" element={<ListContent category = "Assignment"/>} />
        <Route path="/listcontent/Chore" element={<ListContent category = "Chore"/>} />
        <Route path="/listcontent/Other" element={<ListContent category = "Other"/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
