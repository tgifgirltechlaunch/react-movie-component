import React from "react";
import logo from '../logo.svg';
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            title: 'Welcome',
            footercontent: 'Lazara Michelle ~ techlaunch.io Student'
        };
    }

    render(){
        
        return(
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                
                {/* pass changeTitle as a title prop to header. When passing function/methods around you want to bind them to this  */}
                <Header title={this.state.title} />
                <Footer footercontent={this.state.footercontent} />
                
          
            </div>
        )
    }
}