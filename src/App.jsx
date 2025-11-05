// import React from "react";
// import Get_api from "./Component/get_api";

// const App = () => {
//   return (
//     <div>
//       <Get_api />

//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Component/Layout.jsx";
import Get_api from "./Component/get_api.jsx";
import Home from "./Component/Home.jsx";
import Post_api from "./Component/post_api.jsx";
import CounterRedux from "./Component/CounterRedux.jsx";
import TaskApp from "./Component/TaskApp.jsx";
import Login from "./Component/Login.jsx";
import ResumeComponent from "./Component/resumeComponent.jsx";
import API_Integration from "./Component/API_Integration.jsx";
import ResgistrationForm from "./Component/ResgistrationForm.jsx";
import ReactPractice from "./StudyComponent/ReactPractice.jsx";
import { Button } from "reactstrap";
import WallClockUI from "./Component/WallClockUI.jsx";
import TechnoUi from "./Component/TechnoUi.jsx";
import AboutUs from "./Component/AboutUs.Jsx";
import AxiosApi from "./Component/AxiosApi.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="get_api" element={<Get_api />} />
          <Route path="post_api" element={<Post_api />} />
          <Route path="CounterRedux" element={<CounterRedux />} />
          <Route path="TaskApp" element={<TaskApp />} />
          <Route path="Login" element={<Login />} />
          <Route path="resumeComponent" element={<ResumeComponent />} />
          <Route path="apiIntegration" element={<API_Integration />} />
          <Route path="ResgistrationForm" element={<ResgistrationForm />} />
          <Route path="WallClockUI" element={<WallClockUI />} />
          <Route path="TechnoUi" element={<TechnoUi />} />
          <Route path="TechnoUi" element={<TechnoUi />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="AxiosApi" element={<AxiosApi />} />

          <Route
            path="ReactPractice"
            element={
              <>
                {/* Follwing are code explaning props in react   */}
                {/* <ReactPractice name="Rushikesh" heroName="Superman">
                  <p>This is a chindren props</p>
                </ReactPractice>
                <ReactPractice name="Sam" heroName="Batman">
                  <p>This is a chindren props for Second Element </p>
                </ReactPractice>
                <ReactPractice name="Tom" heroName="Itachi">
                  <Button>Click</Button>
                </ReactPractice> */}
                {/* <ReactPractice name="Curren" heroName="Eren" />
                <ReactPractice name="Lx" heroName="Mikasa" /> */}
                {/* Destrututing props */}
                <ReactPractice primary={true} />
              </>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
