import React, { Component } from 'react';
import { signIn} from "../../helpers/auth";

class Login extends Component{
  constructor(){
    super();
    this.state = {
      hello:"yo peeps"
    }
    // this.logUserIn = this.logUserIn.bind(this);
    // this.logUserOut = this.logUserOut.bind(this);
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
        console.log(`name: ${name}, email:${email}, photo:${photo},
          uid:${uid}`);
        window.location.pathname = "/profile";

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
        <button onClick={this.logUserIn}>Login as a Band</button>
      </div>
    )
  }
}

export default Login;
