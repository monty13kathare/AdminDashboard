
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./New.scss"
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import { useState } from 'react';

const New = ({inputs,title}) => {

  const [file, setFile] = useState("");

console.log(file);
  return (
    <div className='new'>
<Sidebar/>
<div className="newContainer">
  <Navbar/>
  <div className="top">
    <h1>{title}</h1>
  </div>
  <div className="bottom">
    <div className="left">
      <img src={
          file ? URL.createObjectURL(file) : "https://www.decoroo-designs.com/assets/frontend/img/noimg.jpg"
      }
       alt="" />
    </div>
    <div className="right">
      <form>
        <div className="formInput">
          <label htmlFor='file' >
          Image: <PhotoCameraOutlinedIcon className='icon'/>
          </label>
          <input type="file" id='file' onChange={(e) => setFile(e.target.files[0])} style={{display:"none"}}/>
        </div>
       
       {
        inputs.map((input) => (
          <div className="formInput" key={input.id}>
          <label >{input.label}</label>
          <input type={input.type} placeholder={input.placeholder} />
        </div>
        ))
       }
       
        <button>Send</button>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default New