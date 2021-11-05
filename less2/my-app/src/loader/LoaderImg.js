import React from "react";

const LoaderImg = ({img, imgLoad, imgError}) => {

    return(
        <>
            <img onError={imgError} onLoad={imgLoad} src={img} alt='img'></img>
        </>
        
    )
}

export default LoaderImg;