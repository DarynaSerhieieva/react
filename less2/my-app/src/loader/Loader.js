import React from "react";

const Loader = ({img, load, error}) => {

    return(
        <img onError={error} onLoad={load} src={img} alt='img'></img>
    )
}

export default Loader;