import React, {useState} from "react";

import Button from 'react-bootstrap/Button';

import tilde from "../Archivos/Imagenes/tilde.png"
import cross from "../Archivos/Imagenes/cruz.png"

export const Modal = ({open,onClose}) => {
    const planes1 = [
        {id:1, plan: "Startup", desc: "Best for startups", p1: "$", p2: "39", p3: " / Mon" },
       ];
        


 
    const [appState, changeState]=useState({
        activeObject: null,
        objects:[{planes1}, {planes1},{planes1},{planes1},]
    })
  
      

       function toggleActive(index){
    changeState({...appState, activeObject: appState.objects[index]});
   }
   function toggleActiveStyles(index){
    if (appState.objects[index] === appState.activeObject){
        return "box active";
    }else {
        return "box inactive";
    }
   }
    
     
    if(!open) return null

   
    return(
            <section className="popuptest">
                <div className="cajagrande">
                 <Button onClick={onClose} className="close" alt="cross" >X</Button>
        <h2 className="titlepu">Upgrade a Plan</h2>
        <p className="popp">If you need more info, please check <a href="''">Pricing Guidelines</a>.</p>
      <div className="botones"><div className="plantype" aria-label="Basic example">
      
      <Button className="popb active-link" >Monthly</Button>
      <Button className="popb " >Annual</Button>
           
  </div></div>
        <div className="monbox">
            <div className="boxmon">
            
            {appState.objects.map((elements, index)=>
         (<div key={index} className={toggleActiveStyles(index)} onClick={()=> {toggleActive(index);}}>
            
            <div className="box"  >
               <label className="custom-radio-btn" >
                    <input type="radio" name="plan"  ></input>
                    <span className="checkmark"></span>
                </label>
                <div className="first">
                <h4 className="h4su">Startup</h4>
                <p className="sup">Best for startups</p>
                </div>
                <div className="second"><p>$ <span>39</span> / Mon</p></div>
                
                </div>
                
                
            </div>))}
            
            
            

                
            </div>
            <div className="startup">
            <h3 className="toptext">What's in Startup Plan</h3>
                <p className="startupp">Optimal for 10+ team size and new startup</p>
            <div className="opciones">
                
                <div className="beneficios">
                <ul>
                    <li>
                       <p className="act">Up to 10 Active Users </p>
                    </li>
                    <li>
                    <p className="pp act">Up to 30 Project Integration </p>
                    </li>
                    <li>
                    <p className="pp act">Analitycs Module</p>
                    </li>
                    <li>
                    <p className="pp">Finance Module</p>
                    </li>
                    <li>
                    <p className="pp">Accounting Module</p>
                    </li>
                    <li>
                    <p className="pp">Network Platform</p>
                    </li>
                    <li>
                    <p className="pp">Unlimited Cloud Space</p>
                    </li>
                </ul>
                </div>
                <div className="signos">
                <ul>
                    <li>
                    <img className="tilde" alt="tilde" src={tilde}></img>
                    </li>
                    <li>
                    <img className="tilde icon" alt="tilde" src={tilde}></img>
                    </li>
                    <li>
                    <img className="tilde icon" alt="tilde" src={tilde}></img>
                    </li>
                    <li>
                    <img className="cross icon" alt="cross" src={cross}></img>
                    </li>
                    <li>
                    <img className="cross icon" alt="cross" src={cross}></img>
                    </li>
                    <li>
                    <img className="cross icon" alt="cross" src={cross}></img>
                    </li>
                    <li>
                    <img className="cross icon" alt="cross" src={cross}></img>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>

                
       
     
    
  <div className="footer">
      
        <Button onClick={onClose} className="closebutton" >
          Cancel
        </Button>
        <Button className="upgradebutton">Upgrade Plan</Button>
     
     </div>
     </div>
     </section>
    )
}

export default Modal;