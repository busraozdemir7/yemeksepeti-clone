import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/Main';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
