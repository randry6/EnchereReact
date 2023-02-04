import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Login from '../services/LoginUser';
import './../vendors/css/vendor.bundle.base.css'

function LoginUser(){
      
    const [mail, setMail] = useState("edmond@gmail.com");
    const [mdp, setMdp] = useState("1234"); 
    const [error,setError] = useState("");
    const style={
        color:"red"
    }
    const nav = useNavigate();
    const login=async (e)=>{
        e.preventDefault()
      const es  = await Login.login({email:mail,mot:mdp});
      console.log(es)
      if (es.data.hasOwnProperty("message")) {
        setError(es.data.message)
      }
      else{
        sessionStorage.setItem('iduser',es.data.data.iduser)
        localStorage.setItem("token",es.data.data.valeur)
        nav('/historiqueUser')
      }
    }
        return (

          <div class="content-wrapper">
          <div class="row">
            <center>
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Se connecter ici</h4>
                  <p class="card-description">
                    Verifier bien votre email et Mot de passe
                  </p>
                  <form class="forms-sample" onSubmit={login}>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="text" class="form-control" id="exampleInputEmail1" value="edmond@gmail.com" placeholder="Email" onChange={(e)  => setMail(e.target.value)} />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" value="1234" placeholder="Password" onChange={ (e) => setMdp(e.target.value) } />
                    </div>
                    <p style={style}> {error}</p>
                    <div class="form-check form-check-flat form-check-primary">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" />
                        Remember me
                      </label>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">Connecter</button>
                    
                  </form>
                </div>
              </div>
            </div>

            </center>
            
          </div>
      </div>

        )
    

}
export default LoginUser