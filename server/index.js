const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mycon = require('mysql');
const fileupload = require('express-fileupload');
const { request, response } = require('express');

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(fileupload());
app.use(express.static('public'));

const c = mycon.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "Manoj@30_14_05",
    database : "spark"
});

c.connect(function(error,result){
    if(error){console.log(error);}
    else{console.log("database connected");}
})

app.post('/Registation',(request,response)=>{

    // let {date_time}=request.body;

    let {vander_name,mob_no,email,pin}=request.body;
    // console.log(date_time);
    let sql = "insert into sparkuser(vander_name,mob_no,email,pin,status) value(?,?,?,?,?)";


    c.query(sql,[vander_name,mob_no,email,pin,0],(error,result)=>{
        if(error){
            let s={"status":"error"};
            console.log(error);
            response.send(s);
        }
        else{
            let s={"status":"uploaded"};
            response.send(s);
        }
    })
})


app.post('/Signin',(request,response)=>{
    let {mob_no,pin} = request.body;
    let sql = 'select * from sparkuser where mob_no=?';

    c.query(sql,[mob_no],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            console.log(error);
            response.send(s);
        }
        else if(result.length > 0){

            let id = result[0].id;
            let mob_no1 = result[0].mob_no;
            let pin1 = result[0].pin;
            if(mob_no1 == mob_no && pin1 == pin){
                let s = {"status":"Success","userid":id};
                response.send(s);
                
            }
            else{
                let s = {"status":"Invalid"};
                response.send(s);
            }
        }
        else{
            let s ={"status":"final_error"};
                   
            response.send(s);
        }
    })
})


app.get('/viewdet',(request,response)=>{

    let sql = "select * from sparkuser"

    c.query(sql,(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let name = result[0].name;
            let s = {"status":name};
            response.send(result);
            
        }
    });
})

app.get('/viewbus/:id',(request,response)=>{
    let {id}=request.body;
    let sql="select sparkuser.*,userbus.* from sparkuser inner join userbus on sparkuser.id=userbus.bus_id where id=?"

    c.query(sql,[id],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let name = result[0].name;
            let s = {"status":name};
            response.send(result);
            
        }
    })
})
app.listen(3008, ()=>{console.log('Port number running in 3008')});