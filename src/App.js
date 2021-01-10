import { BrowserRouter } from 'react-router-dom';
import '../src/Style/Style.css';
import Onlineshop from './Component/Layouts/Onlineshop';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Onlineshop/>
      </BrowserRouter>


 </div>
  );
}

export default App;
