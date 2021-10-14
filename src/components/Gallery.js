import { useState } from "react";
import productImgOneT from '../images/image-product-1-thumbnail.jpg'
import productImgOne from '../images/image-product-1.jpg'
import productImgTwoT from '../images/image-product-2-thumbnail.jpg'
import productImgTwo from '../images/image-product-2.jpg'
import productImgThreeT from '../images/image-product-3-thumbnail.jpg'
import productImgThree from '../images/image-product-3.jpg'
import productImgFourT from '../images/image-product-4-thumbnail.jpg'
import productImgFour from '../images/image-product-4.jpg'
import { ReactComponent as PrevIcon } from '../images/icon-previous.svg'
import { ReactComponent as NextIcon } from '../images/icon-next.svg'
const Gallery = ({ isOverlay, setIsOverlay }) => {
    const productImages = [
        { mainImg: productImgOne, thumbnailImg: productImgOneT },
        { mainImg: productImgTwo, thumbnailImg: productImgTwoT },
        { mainImg: productImgThree, thumbnailImg: productImgThreeT },
        { mainImg: productImgFour, thumbnailImg: productImgFourT }
    ]
    const [mainImageIndex, setMainImageIndex] = useState(0)
    const handleChangeImg = (index) => {
        setMainImageIndex(index)
    }
    const handlePrevBtnClick = () => {
        if (mainImageIndex === 0) {
            setMainImageIndex(3)
        } else {
            setMainImageIndex(mainImageIndex - 1)
        }
    }
    const handleNextBtnClick = () => {
        if (mainImageIndex === 3) {
            setMainImageIndex(0)
        } else {
            setMainImageIndex(mainImageIndex + 1)
        }
    }

    return (
        <div className="Gallery" >
            <div className="product__image">
                <img src={
                    productImages[mainImageIndex].mainImg
                } alt="product"
                    onClick={() => setIsOverlay(!isOverlay)}
                />
                <button className="gallery-btn btn" onClick={handlePrevBtnClick} > <PrevIcon className="toggle-icon" /> <span>prev</span></button>
                <button className="gallery-btn btn" onClick={handleNextBtnClick} > <NextIcon className="toggle-icon" /> <span>next</span></button>
            </div>
            <div className="thumbnails">
                {productImages.map((productImg, i) =>
                    <div className={mainImageIndex === i ? 'active product__image__thumbnail' : "product__image__thumbnail"} key={i} onClick={() => handleChangeImg(i)}>
                        <img src={productImg.thumbnailImg} alt='thumbnail' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Gallery
