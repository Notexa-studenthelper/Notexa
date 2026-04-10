import { useState } from "react"

function LoginPage(){
    const[selected, setSelected]=useState("Gla University");
    return(
        <>
        <div className="bg-[#ffff] w-screen h-screen flex items-center justify-center ">
            <div className="  w-[500px] h-[600px] flex justify-center  flex-col items-center gap-2">
                <img src="/LoginLogo.png" alt="" className="w-[64px] h-[64px] align-center" />
                <h1 className="text-2xl">Notexa</h1>

                <h3>All your study resources, one place</h3>


                <label htmlFor="clg_selc">Select College</label>
                <select id="clg_selc" className="w-[398px] h-[50px] p-[15px] bg-[#E6EAEB] rounded-md" value={selected} onChange={(e)=>setSelected(e.target.value)}>
                <option>Gl_BAJAJ</option>    
                <option>BSA</option>    
                <option>GLA UNIVERSITY</option>    
                </select>


                <label htmlFor="clg_selc">Select Branch</label>
                <select id="clg_selc" className="w-[398px] h-[50px] p-[15px] bg-[#E6EAEB] rounded-md " value={selected} onChange={(e)=>setSelected(e.target.value)}>
                <option>B tech</option>    
                <option>Bsc</option>    
                <option>BA</option>    
                </select>


                <label htmlFor="clg_selc">Select Semester</label>
                <select id="clg_selc" className="w-[398px] p-[15px] bg-[#E6EAEB] rounded-md " value={selected} onChange={(e)=>setSelected(e.target.value)}>
                <option>1st</option>    
                <option>2nd</option>    
                <option>3rd</option>    
                <option>4th</option>    
                <option>5th</option>    
                <option>6th</option>    
                </select>


                <button className="bg-[#5044E3] w-[398px] h-[50px] rounded-md text-white">
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