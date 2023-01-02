import { Component } from "react";
import "./About_us/About.js"
import "./About_us/About.css"
import pics from './../img/pic1.jpg';
class Aboutdata extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>
                    {this.props.text}
                    </p>



                </div>

                <div className="image">
                    <img alt="img" src={this.props.img1}    />
                   
                </div>

               
            </div>
        )
    }

    
}

export default Aboutdata;