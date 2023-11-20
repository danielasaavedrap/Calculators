import "./App.css";
import { DefaultLayout } from "./layout/default";
import { Geometry } from "./pages/geometry/geometry";
import { Index } from "./pages/index/index";
import { Route, Routes } from "react-router-dom";
import { Process } from "./pages/process/process";
import { Statistic } from "./pages/statistic/statistic";
import { PageNotFound } from "./pages/pageNotFound/pageNotFound";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<DefaultLayout><Index/></DefaultLayout>}/>
        <Route path="/math" element={<DefaultLayout><Process/></DefaultLayout> }/>
        <Route path="/geometry" element={<DefaultLayout><Geometry/></DefaultLayout> }/>
        <Route path="/algebra" element={<DefaultLayout><Process/></DefaultLayout> }/>
        <Route path="/statistic" element={<DefaultLayout><Statistic/></DefaultLayout> }/>
        <Route path="/metrics" element={<DefaultLayout><Process/></DefaultLayout> }/>
        <Route path="*" element={<DefaultLayout><PageNotFound/></DefaultLayout> }/>
      </Routes>
    </div>
  );
}

export default App;
