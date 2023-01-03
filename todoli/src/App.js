import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateList from './component/CreateList/CreateList';
import ListContent from './component/ListContent/ListContent';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
     //<CreateList></CreateList>
    //<ListContent></ListContent>
    <BrowserRouter>
    <Routes>
        <Route index element={<CreateList />} />
        <Route path="listcontent" element={<ListContent />} />
        {/* <Route path='listcontent/grocery' element={<ListContent prop="grocery" ></ListContent>} */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
