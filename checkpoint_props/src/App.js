import React from "react";
import Profile from "./profile/Profile";

const App = () => {
  const handleName = (fullName) => {
    console.log(fullName);
    alert("Welcome" + fullName);
  };
  return (
    <div>
      <Profile
        FullName="Sarra AYARI"
        bio="Certified Lead Auditor ISO 9001V2015 , IRCA®
        Certified Professional Scrum Master Level I ,PSM I®
        I had a rich experience along 2 years as Junior Management Consultant
        I had participate on the implementation also :
        - Of some ISO management system like ISO 9001:2015 , ISO 45001:2018 , ISO 14001:2015
        - Project management system
        - Lean Management
        
        I m also worked to become integrated into the Management world, and i fixed to getting the PMP® Certification on 2021 as an objectif to develop my professional career. "
        profession="Junior project manager"
        handleName={(fullName) => handleName(fullName)}
      >
        {/* children */}
        <img src="sarra.jpg" alt="image" />
      </Profile>
    </div>
  );
};

export default App;
