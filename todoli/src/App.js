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
        <Route path="/listcontent" element={<ListContent />} />
        {/* <Route key="Grocery" exact path = "/grocery" element = {<ListContent/>}/>
        <Route key="Chore" exact path = "/chore" element = {<ListContent/>}/>
        <Route key="Assignment" exact path = "/assignment" element = {<ListContent/>}/>
        <Route key="Other" exact path = "/other" element = {<ListContent/>}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
