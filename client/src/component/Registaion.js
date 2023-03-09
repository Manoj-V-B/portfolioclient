import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export function Registion() {

   

    var handalesubmit=(event)=>{
        event.preventDefault();
       
       
        

        var datastring = new FormData(event.target);
        var config={Headers:{"enctype":"multipart/form-data"}};

        axios.post('http://localhost:3008/Registation',datastring,config)
        .then(function(response) {
            if(response.data.status ==="error"){
                alert("error")
            }
            else if(response.data.status === "uploaded"){
                alert("uploaded")
                window.location.href="/signin";
            }
            else{
                alert("contact admin")
            }
        })
        .catch(function(error){
            alert(error);
        })
    }

    
    return(
        <>
       <div className="coinatiner-fluid">
        <div className="row">
            <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-10">
                    <div className="table-responsive">
                        <form onSubmit={handalesubmit}>

                        <table className="table-responsive">
                            <thead>
                                <tr>
                                    <th colspan={2}>
                                        Registion
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <lable>Vander Name</lable>

                                    </td>
                                    <td>
                                    <input type="text" name="vander_name" id="vander_name" className="form-control "/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <lable>Mobil No</lable>

                                    </td>
                                    <td>
                                    <input type="number" name="mob_no" id="mob_no" className="form-control "/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <lable>Email</lable>

                                    </td>
                                    <td>
                                    <input type="email" name="email" id="email" className="form-control "/>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <lable>Pin</lable>

                                    </td>
                                    <td>
                                    <input type="number" name="pin" id="pin" className="form-control "/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                       
                                        <button type="submit"  className="btn btn-primary">submit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </form>
                    </div>
                </div>
            <div className="col-lg-2">&nbsp;</div>
        </div>
       </div>
        </>
    )
}