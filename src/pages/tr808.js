import React ,{Component } from 'react';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import '../pages/sequencer.css';
import Synth from './Synth';


class Tr808 extends Component {
constructor(props){
super(props);

let time=new Date().toLocaleTimeString()



this.state = {

           time:new Date().toLocaleTimeString(),
          }
        
}
 



componentDidMount() {
  this.intervalID = setInterval(
() => this.setState({time:new Date().toLocaleTimeString()})
  );
}
componentWillUnmount() {
  clearInterval(this.intervalID);
}



render(){

            return( 
      
              (
                 <div>
                  <Synth currentVol={this.props.currentVol} callback={this.props.callback}/>
                </div>
            )
            );
        }
 }

 
 
export default Tr808; 
