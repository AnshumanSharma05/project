import React, {Component} from 'react';
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import InputC from "./Components/InputC/InputC";
import Signin from "./Components/Signin/Signin";
import Particles from 'react-particles-js';
import Logo2 from "./Components/Logo2/Logo2";
import Register from "./Components/Register/Register";
import './App.css';
const particleOptions={
  particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5
                }
              }
            }
          }
  


class App extends Component {
  constructor(){
    super();
    this.state={
      route:'signin',
      isSignedIn:false
    }
  }

  onRouteChange=(route)=>{
    if(route==='signout'){
      this.setState({isSignedIn:false})
    }else if(route==='home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route});
  }
  render(){
     return (
      <div className="App">

      <Particles className="particles"
          params={particleOptions}
            
        />
        
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      {this.state.route==='home'
      ?<div>
        <Logo/>
        <InputC/>
        </div>
        :(
         this.state.route==='signin'
          ?<div>
          <Logo2/>
          <Signin onRouteChange={this.onRouteChange}/>
          </div>
          : <Register onRouteChange={this.onRouteChange}/>
          )
      }
      </div>
  );

  }
}




export default App;
