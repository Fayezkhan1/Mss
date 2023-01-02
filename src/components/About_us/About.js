import pics from './../../img/pic1.jpg';
import pic from './../../img/pic3.jpg';
import picture from './../../img/pic2.jpg';

import Aboutdata from '../Aboutdata';
const About = () => {
    return (


       
        <div className="about">
            <h1>About Us</h1>


         
            <Aboutdata className="first-des"
                heading="Who we are"
                text="Text"
                img1={pics}
            />
            

            <Aboutdata className="first-des-rev"
                heading="Our Mission"
                text="Text"
                img1={pic}
            />

            <Aboutdata className="first-des"
                heading="What We Do"
                text="Text"
                img1={picture}
            />






        </div>



    )
}

export default About;