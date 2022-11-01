import React, { useState } from "react";
import {Container, Row, Col} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import tilde from "../Archivos/Imagenes/tilde.png"
import cross from "../Archivos/Imagenes/cruz.png"
import Nav from 'react-bootstrap/Nav';
export const Modal = ({open,onClose}) => {


    if(!open) return null
   
    return(
            <section className="popuptest">
                <div className="cajagrande">
                 <Button onClick={onClose} className="close" alt="cross" >X</Button>
        <h2 className="titlepu">Upgrade a Plan</h2>
        <p className="popp">If you need more info, please check <a href="#">Pricing Guidelines</a>.</p>
      <div className="botones"><div className="plantype" aria-label="Basic example">
      
      <Button className="popb active-link" >Monthly</Button>
      <Button className="popb" >Annual</Button>
           
  </div></div>
        <div className="monbox">
            <div className="boxmon">
            <div className="boxplan">
                <label className="custom-radio-btn">
                    <input type="radio" name="plan" checked ></input>
                    <span className="checkmark"></span>
                </label>
                <div className="first">
                <h4 className="h4su">Startup</h4>
                <p className="sup">Best for startups</p>
                </div>
                <div className="second"><p>$ <span>39</span> / Mon</p></div>
                </div>

                <div className="boxplan">
                <label className="custom-radio-btn">
                    <input type="radio" name="plan" ></input>
                    <span className="checkmark"></span>
                </label>
                <div className="first">
                <h4 className="h4su">Advance</h4>
                <p className="sup">Best for 100+ team size</p>
                </div>
                <div className="second"><p>$ <span>339</span> / Mon</p></div>
                </div>

                <div className="boxplan">
                <label className="custom-radio-btn">
                    <input type="radio" name="plan" ></input>
                    <span className="checkmark"></span>
                </label>
                <div className="first">
                <h4 className="h4su">Enterprise <span>Popular</span></h4>
                <p className="sup">Best value for 1000+ team</p>
                </div>
                <div className="second"><p>$ <span>999</span> / Mon</p></div>
                </div>

                <div className="boxplan">
                <label className="custom-radio-btn">
                    <input type="radio" name="plan" ></input>
                    <span className="checkmark"></span>
                </label>
                <div className="first">
                <h4 className="h4su">Custom</h4>
                <p className="sup">Request a custom license</p>
                </div>
                <div className="second"><p className="contact">Contact us</p></div>
                </div>
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
                    <img className="tilde" src={tilde}></img>
                    </li>
                    <li>
                    <img className="tilde icon" src={tilde}></img>
                    </li>
                    <li>
                    <img className="tilde icon" src={tilde}></img>
                    </li>
                    <li>
                    <img className="cross icon" src={cross}></img>
                    </li>
                    <li>
                    <img className="cross icon" src={cross}></img>
                    </li>
                    <li>
                    <img className="cross icon" src={cross}></img>
                    </li>
                    <li>
                    <img className="cross icon" src={cross}></img>
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
        <Button className="upgradebutton" >Upgrade Plan</Button>
     
     </div>
     </div>
     </section>
    )
}

export default Modal;