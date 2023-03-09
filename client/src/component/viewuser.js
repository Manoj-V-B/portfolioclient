import "bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect} from 'react';
import axios from "axios";
import { json, Link } from "react-router-dom";




export function Viewuser() {

    let [userdetails,setuserdetails]= useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:3008/viewdet')
        .then(response=>response.json())
        .then(json=>setuserdetails(json))
        
       
    },[])

    return(
        <>
         <div className="cointainer-fluid mt-5">
            <div className="row">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-10">
                    <label>Select Your Nmae</label>
                    <select name="vender_id" id="vender_id" value="">
                        {userdetails.map((v,i)=>(<option>{v.vander_name}</option>))}
                    </select>
                    <label>Enter the business name</label>
                    <input type="text" name="bus_name" id="bus_name"/>
                    
                    <label>Enter the city</label>
                    <input type="text" name="city" id="city"/>

                    <button type="submit"></button>
                </div>
                <div className="col-lg-2">&nbsp;</div>
            </div>
        </div>
        <div className="cointainer-fluid">
            <div className="row">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-10">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Vendar Name</th>
                                <th>Mobile No</th>
                                <th>Email</th>
                                <th>pin</th>
                                <th>Date Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userdetails.map((value,index)=>(
                                    <tr>
                                        <td>{value.id}</td>
                                        <td>{value.vander_name}</td>
                                        <td>{value.mob_no}</td>
                                        <td>{value.email}</td>
                                        <td>{value.pin}</td>
                                        <td>{value.date_time}</td>
                                        <Link to="/overview">

                                        <button type="button" name="edit" id="edit" value={value.id}>Viewuser</button>
                                        </Link>
                                    </tr>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-2">&nbsp;</div>
            </div>
        </div>
        </>
    )
}