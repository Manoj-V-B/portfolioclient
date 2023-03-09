import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export function Signin(){

    const handlesubmit= (event)=>{
        event.preventDefault();

        var datastring= new FormData(event.target);
        var config={headers:{"enctype":"multipart/form-data"}};

        var mob_no= document.getElementById('mob_no').value;
        var pin=document.getElementById('pin').value;

        if(mob_no==='' || mob_no===null){
            document.getElementById('useranme').focus();
        }
        else if(pin === '' || pin===null){
            document.getElementById('password').focus();
        }
        else{
            axios.post('http://localhost:3008/Signin',datastring,config)
            .then(function(response){
                if(response.data.status ==='error'){
                    alert('Query error')
                   
                }
                else if(response.data.status ==='Success'){
                    let userid = response.data.userid;
                    localStorage.setItem('userid',userid);
                    alert("logedin");
                    window.location.href="/viewdet"
                    
                }
                else if(response.data.status==="Invalid"){
                    alert("invalid mobile no or pin");
                    
                }
                else{
                    alert("contact admin");
                   
                }
            })
            .catch(function(error){
                alert(error);
               
            })
        }       
        
    }

    return(
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-3'>&nbsp;</div>
                <div className='col-lg-6'>
                <form onSubmit={handlesubmit}>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th colSpan={2} className="text-center">Login Form</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='text-center'><label>mobial no</label></td>
                                    <td>
                                        <input type='number' name='mob_no' id='mob_no' className='form-control'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center'><label>pin</label></td>
                                    <td>
                                        <input type='number' name='pin' id='pin' className='form-control'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <button type='submit' name='data_submit' id='data_submit' className='btn btn-primary' value='submit'>sign_in</button>&nbsp;
                                       
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </form>
                </div>
                <div className='col-lg-3'>&nbsp;</div>
            </div>
        </div> 
        </>
    )
}