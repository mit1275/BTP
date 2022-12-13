import HomePage from "./Pages/HomePage/HomePage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./Pages/SignIn/SignIn.js";
import SignUp from "./Pages/SignUp/SignUp.js";
import HospitalNearMe from "./Pages/HospitalNearMe/HospitalNearMe.js";
import { Toaster } from "react-hot-toast";
import NavBar from "./Component/NavBar/NavBar.js";
import { Recommendations } from "./Pages/Recommendations/Recommendations.js";
import MentalHealth from "./Pages/MentalHealth/MentalHealth.js";
import Quiz from "./components/Quiz/Quiz.js";

function App() {
  return (
    <Router>
      {/* <NavBar></NavBar> */}
      <Toaster />
      <NavBar style={{ marginBottem: "50px" }} />
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/hospital-near-me" element={<HospitalNearMe />} />
        <Route exact path="/mental-health" element={<MentalHealth />} />
        <Route exact path="/quiz" element={<Quiz/>}/>
        {/* <Route exact path="/pysical-health" element={<Home />} />
        <Route exact path="/exercise/:id" element={<ExerciseDetail />} /> */}
        <Route exact path="/home-page" element={<HomePage />} />
        <Route exact path="/recommendations" element={<Recommendations />} />
      </Routes>
    </Router>
  );
}

// export default App;

// import React from "react";
// import NavBar from "./Component/NavBar/NavBar";
// import HomePage from "./Pages/HomePage/HomePage";
// import PhysicalHealth from "./PysicalHealthSection/Pages/PhysicalHealth";
// import "./App.css";

// const App = () => {
//   return (
//     <div>
//       {/* <SignIn></SignIn> */}
//       {/* <SignUp></SignUp> */}
//       {/* <NavBar></NavBar> */}
//       {/* <HomePage></HomePage> */}
//       <PhysicalHealth></PhysicalHealth>
//     </div>
//   );
// };

export default App;
