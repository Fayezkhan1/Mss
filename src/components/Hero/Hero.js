import './HeroStyles.css';
import  pic from './../../img/finalepic.jpg';


function Hero()
{
    return(
        <>
            <div className="Hero">
                
                <img  alt="HeroImg" src={pic}/>
                <h1 className='tag'>Innovate.Invent.Inspire</h1>
            </div>
        </>

    )
}

export default Hero;