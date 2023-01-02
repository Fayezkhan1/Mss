import './HeroStyles.css';
import  pic from './../../img/finalepic.jpg';


function Hero()
{
    return(
        <>
            <div className="Hero">
                
                <img  alt="HeroImg" src={pic}/>
                <h1 className='hero-text'>Innovate.Invent.Inspire.</h1>
                <h1 className='hero-text2'>Microsoft Student Society</h1>

            </div>
        </>

    )
}

export default Hero;