import React, { Component } from 'react';
import { signIn, signOut, authStateChange} from "../../helpers/auth";

class Login extends Component{
  constructor(){
    super();
    this.state = {
      hello:"yo peeps"
    }
  }

  componentDidUpdate(){
    // authStateChange();
  }

  logUserIn = (e) => {
    e.preventDefault();
      // console.log('you clicked the login button');
      signIn().then(function(result) {
        // const token = result.credential.accessToken;
        console.log("you've signed in!")
        const user = result.user;
            const name = user.displayName;
            const email = user.email;
            const photo = user.photoURL;
            const uid = user.uid;
          if(name === "theband app"){
            console.log("welcome admin!");
            window.location.pathname = "/admin";
          }else{
            signOut().then(function() {
              // Sign-out successful.
              alert("sorry, you're not an admin");
            }).catch(function(error) {
              // An error happened.
            });
          }
        // window.location.pathname = "/signup";
      }).catch(function(error) {
            console.log(error.code);
            console.log(error.message);
            // The email of the user's account used.
            console.log(error.email);
            // The firebase.auth.AuthCredential type that was used.
            console.log(error.credential)
            // ...
          });;
  }

  render(){
    return(
      <div className="col-md-6">
        <button onClick={this.logUserIn}>Login as Admin</button>
      </div>
    )
  }
}

export default Login;
