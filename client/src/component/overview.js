import "bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect} from 'react';
import axios from "axios";
import { json } from "react-router-dom";




export function Overview() {

    let [userdetails,setuserdetails]= useState([]);
    
    // let id =localStorage.getItem(id)
    useEffect(()=>{
        fetch('http://localhost:3008/viewbus')
        .then(response=>response.json())
        .then(json=>setuserdetails(json));
       
    },[])

    return(
        <>
       
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
                                <th>business name</th>
                                <th>city</th>
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
                                        <td>{value.business_name}</td>
                                        <td>{value.city}</td>
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