import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from "axios";

function App() {
const [vote,setvote]=useState('');


const [image ,setImage]=useState([]);
useEffect(()=>{
    axios.get('https://node-api-o269.onrender.com/tmc',).then((resonse)=>{
        
        setImage(resonse.data);
     });

},1000);
const [cong,setcong]=useState([]);
useEffect(()=>{
  axios.get('https://node-api-o269.onrender.com/cong',).then((resonse)=>{
      
      setcong(resonse.data);
   });

},1000);
const [cpm,setcpm]=useState([]);

useEffect(()=>{
  axios.get('https://node-api-o269.onrender.com/cpm',).then((resonse)=>{
      
      setcpm(resonse.data);
   });

},1000)


  const handlechange=(e)=>{
    const {id,value} =e.target;
    if(id==="cpm"){
      setvote(value);
      
    }
    if(id === "cong"){
      setvote(value);
    }
    if(id === "tmc"){
      setvote(value);
    }

  };
  const handleSubmit=()=>{
       
    let obj ={
        party:vote,
        
    };
    
    
   axios.post('https://node-api-o269.onrender.com/party',obj).then((result)=>{
    if(result.data.Status=== 'invalid'){
        alert('invalid')
    }
    alert("voting successfully complete");
   }).catch(function(error){
    console.log(error);
   })
};

  return (<div>
 <div> <h1>ONLINE VOTING SYSTEM</h1></div><br></br><br></br>
 

<div>
  <p>Please select your favorite party</p><br></br>
  <input type="radio" id="cpm" name="fav_language" value="cpm" onClick={(e)=>handlechange(e)}/><br></br>
  <label for="html"><img src='data:image/png;base64,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' height='100px' width='100px'/></label><br></br>
  <input type="radio" id="cong" name="fav_language" value="cong" onClick={(e)=>handlechange(e)}/><br></br>
  <label for="css"><img src='data:image/jpeg;base64,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' height='100px' width='100px'/></label><br></br>
  <input type="radio" id="tmc" name="fav_language" value="tmc" onClick={(e)=>handlechange(e)}/><br></br>
  <label for="javascript" ><img src='data:image/png;base64,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' height='100px' width='100px'/> </label><br></br>
   </div><br></br>
   <input type='button' value='click here for your voting' onClick={()=>handleSubmit()}/><br></br>
  <div><br></br>
    <h1>RESULTS</h1>
  <table>
  <tr>
    <th>TMC</th>
    <th>cong</th>
    <th>cpm</th>
  </tr>
  <tr>
    <td>{image.length}</td>
    <td>{cong.length}</td>
    <td>{cpm.length}</td>
  </tr>
 
</table>
   </div>
    <p>design by @tbhcr</p>
    </div>
  );
}

export default App;
