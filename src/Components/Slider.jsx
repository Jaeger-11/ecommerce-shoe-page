import next from '../images/icon-next.svg';
import previous from '../images/icon-previous.svg';
import productthumb1 from '../images/image-product-1-thumbnail.jpg';
import productthumb2 from '../images/image-product-2-thumbnail.jpg';
import productthumb3 from '../images/image-product-3-thumbnail.jpg';
import productthumb4 from '../images/image-product-4-thumbnail.jpg';
import close from '../images/icon-close-white.svg';
import { useGlobalContext } from './Context';
const Slider = () => {
    const {closeSlider, changeImage, currentImage, currentIndex, changeIndex} = useGlobalContext();
    const handleNext = () => {
        let index = currentIndex + 1
        if (index > 3){
            index = 0
        }
        changeImage(index)
        changeIndex(index)
    }
    const handlePrevious = () => {
        let index = currentIndex - 1;
        if(index < 0){
            index = 3
        }
        changeImage(index)
        changeIndex(index)
    }
    
    return(
        <div className='slider-container'>
            <section className='slider'>
                <p style={{textAlign: 'right'}}><img src={close} className='slider-close'  onClick={closeSlider} /></p>
                <div style={{position: 'relative'}}>
                    <img src={currentImage} className="slider-image" alt="sliderimage"/>
                    <div className="slider-arrows">
                        <p className="hero-arrow previous"><img src={previous} alt="previous" className="slider-arrow" onClick={handlePrevious}/></p> 
                        <p className="hero-arrow next"><img src={next} alt="next" className="slider-arrow" onClick={handleNext} /></p>
                    </div>
                    <div className="slider-thumbs">
                        <img src={productthumb1} alt="thumbnail" className="slider-thumbnail" onClick={() => changeImage(0)}/>
                        <img src={productthumb2} alt="thumbnail" className="slider-thumbnail" onClick={() => changeImage(1)}/>
                        <img src={productthumb3} alt="thumbnail" className="slider-thumbnail" onClick={() => changeImage(2)}/>
                        <img src={productthumb4} alt="thumbnail" className="slider-thumbnail" onClick={() => changeImage(3)}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Slider;