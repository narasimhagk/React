import React, {useState} from "react";
function Clip1(){
    const[fname,setFname]=useState('')
    const handleChange=e=>{
        setFname(e.target.value)
    }
    return(
        <div>
            <h1>React Form Handling</h1>
                <form>
                    <label>
                        First Name:{""}
                        <input type="text" value={fname} onChange={handleChange}/>
                    </label>
                </form>
                <h5>First name:{fname}</h5>
        </div>
    )
}
export default Clip1