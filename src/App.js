import "./App.css";
import * as React from "react";
import {  Route, Routes} from "react-router-dom";
import AppHeader from "./pages/appHeader/AppHeader";
import HomePage from "./pages/homePage/HomePage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import TrainingPage from "./pages/TrainingPage/TrainingPage";
import WorkersPage from "./pages/WorkersPage/WorkersPage";
import FuncComponents from "./pages/funcComponents/FuncComponents";
import AppMarvelPage from "./pages/Marvel/AppMarvelPage";
import ToDoLight from "./pages/toDoLight/ToDoLight";
import ReactLibraries from "./pages/reactLibraries/ReactLibraries";

/// second link
import Props from './pages/TrainingPage/Props/Props'
import Counter from './pages/TrainingPage/Counter/Counter'
import Ref from "./pages/TrainingPage/Events-This/Ref";
import BootstrapTest from "./pages/TrainingPage/BootstrapTest/BootstrapTest";
import UseState from "./pages/funcComponents/useState/UseState";
import UseEffect from "./pages/funcComponents/useEffect/UseEffect";
import CustomHook from "./pages/funcComponents/customHook/CustomHook";
import FakeData from "./pages/TrainingPage/fake-data/FakeData";
import UseReducer from "./pages/funcComponents/useReducer/UseReducer";
import HigherOrderComponent from "./pages/funcComponents/HOC/HigherOrderComponent";
import ReactTransitionGroup from "./pages/reactLibraries/reactTransitionGroup/ReactTransitionGroup";

function App() {
  
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/func-components/*" element={<FuncComponents />}></Route>
        <Route path="/react-libraries" element={<ReactLibraries/>}></Route>
        <Route path="/training-page/*" element={<TrainingPage />}></Route>
        <Route path="/workers-page" element={<WorkersPage />}></Route>
        <Route path="/marvel-page/*" element={<AppMarvelPage />}></Route>
        <Route path="/props" element={<Props />} ></Route>
        <Route path="/counter" element={<Counter count={0}/>} ></Route>
        <Route path="/events" element={<Ref />} ></Route>
        <Route path="/todo-light" element={<ToDoLight />} ></Route>
        <Route path="/bootstrap-test" element={<BootstrapTest />} ></Route>
        <Route path="/fake-data" element={<FakeData />} ></Route>
       
        <Route path="/func-components/use-state" element={<UseState />} ></Route>
        <Route path="/func-components/use-effect" element={<UseEffect />} ></Route>
        <Route path="/func-components/custom-hooks" element={<CustomHook />} ></Route>
        <Route path="/func-components/useReducer" element={<UseReducer />} ></Route>
        <Route path="/func-components/HOC" element={<HigherOrderComponent />} ></Route>
        <Route path="/react-libraries/react-transition-group/" element={<ReactTransitionGroup />} ></Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
     
    </div>
  );
}

export default App;
