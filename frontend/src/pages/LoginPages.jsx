import { useState } from "react"
import { useNavigate } from "react-router-dom";

function LoginPage(){
    const navigate = useNavigate();
    const[college, setCollege]= useState("GLA UNIVERSITY");
    const[branch, setBranch]= useState("B TECH ");
    const[semester, setSemester]= useState("4");
   const handleContinue = () => {
  if (!college || !branch || !semester) {
    alert("Please select all fields");
    return;
  }

  const userPrefs = {
    college,
    branch,
    semester,
  };

  localStorage.setItem("userPrefs", JSON.stringify(userPrefs));

  console.log("Saved:", userPrefs);

  navigate("/landingpage"); // landing page
};
    return(
        <>
        <div className="bg-[#ffff] w-screen h-screen flex items-center justify-center ">
            <div className="  w-[500px] h-[600px] flex justify-center  flex-col items-center gap-2">
                <img src="/LoginLogo.png" alt="" className="w-[64px] h-[64px] align-center" />
                <h1 className="text-2xl">Notexa</h1>

                <h3>All your study resources, one place</h3>


                <label htmlFor="clg_selc">Select College</label>
                <select id="clg_selc" className="w-[398px] h-[50px] p-[15px] bg-[#E6EAEB] rounded-md" 
                value={college} onChange={(e)=>setCollege(e.target.value)}>
                <option>Gl_BAJAJ</option>    
                <option>BSA</option>    
                <option>GLA UNIVERSITY</option>    
                </select>


                <label htmlFor="branch-select">Select Branch</label>
                <select id="branch-select" className="w-[398px] h-[50px] p-[15px] bg-[#E6EAEB] rounded-md " 
                value={branch} onChange={(e)=>setBranch(e.target.value)}>
                <option>B tech</option>    
                <option>Bsc</option>    
                <option>BA</option>    
                </select>


                <label htmlFor="Semester-select">Select Semester</label>
                <select id="Semester-select" className="w-[398px] p-[15px] bg-[#E6EAEB] rounded-md " 
                value={semester} onChange={(e)=>setSemester(e.target.value)}>
                <option>1st</option>    
                <option>2nd</option>    
                <option>3rd</option>    
                <option>4th</option>    
                <option>5th</option>    
                <option>6th</option>    
                </select>


                <button className="bg-[#5044E3] w-[398px] h-[50px] rounded-md text-white"
                onClick={handleContinue}
                >
                    Continue
                </button>

                <div className="w-[100%] bg-yellow-200 m-[40px]">
                    <i src="/Community.svg"></i>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginPage