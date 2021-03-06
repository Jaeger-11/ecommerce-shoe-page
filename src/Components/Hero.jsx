
import productthumb1 from '../images/image-product-1-thumbnail.jpg';
import productthumb2 from '../images/image-product-2-thumbnail.jpg';
import productthumb3 from '../images/image-product-3-thumbnail.jpg';
import productthumb4 from '../images/image-product-4-thumbnail.jpg';
import plus from '../images/icon-plus.svg';
import minus from '../images/icon-minus.svg';
import next from '../images/icon-next.svg';
import previous from '../images/icon-previous.svg';
import { useGlobalContext } from "./Context";
 
const Hero = () => {
    const {increase, decrease, currentNumber, addToCart, openSlider, currentImage, changeImage, currentIndex, changeIndex} = useGlobalContext();
    
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
        <main className="container">
            <section className="hero-section1">
                <article className="hero-images">
                    <div className="hero-image-box">
                        <img src={currentImage} className="hero-image" alt="heroimage" onClick={openSlider}/>
                        <div className="hero-arrows">
                            <p className="hero-arrow" onClick={handlePrevious}><img src={previous} alt="previous" className="arrow"/></p> 
                            <p className="hero-arrow" onClick={handleNext}><img src={next} alt="next" className="arrow" /></p>
                        </div>
                    </div>
                    <div className="hero-thumbs">
                        <img src={productthumb1} alt="thumbnail" className="hero-thumbnail" onClick={() => changeImage(0)}/>
                        <img src={productthumb2} alt="thumbnail" className="hero-thumbnail" onClick={() => changeImage(1)}/>
                        <img src={productthumb3} alt="thumbnail" className="hero-thumbnail" onClick={() => changeImage(2)}/>
                        <img src={productthumb4} alt="thumbnail" className="hero-thumbnail" onClick={() => changeImage(3)}/>
                    </div>
                </article>
            </section>

            <section className="hero-section2">
                <article className="hero-article">
                    <h5 className="hero-small-header">Sneaker Company</h5>
                    <h2 className="hero-large-header">Fall Limited Edition Sneakers</h2>
                    <p className="hero-text">These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they???ll withstand everything the weather can offer.
                    </p>

                    <section className="hero-figures">
                        <div className="hero-figures-sub">
                            <h1>$125.00</h1>
                            <p>50%</p>
                        </div>
                        <p className="hero-figures-strike"> <strike>$250.00</strike> </p>
                    </section>

                    <section className="hero-last">
                        <div className="hero-last-sub">
                            <img src={minus} alt="minus" onClick={decrease} /> 
                            <p>{currentNumber}</p>
                            <img src={plus} alt="plus" onClick={increase} />
                        </div>
                        <button className="hero-btn" onClick={addToCart}>
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero"/></svg> 
                             Add to cart
                        </button>
                    </section>
                </article>
            </section>
        </main>
    )
}

export default Hero;