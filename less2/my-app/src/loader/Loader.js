import React, { Component } from "react";
import LoaderImg from "./LoaderImg";
import './style.css';

class Loader extends Component {

    state = {
        isLoading: true
    }

    handlerImgError = e => {
        e.target.src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjT02maa0H6nKYGDohH--cGR2dhrcXdKy7hQ&usqp=CAU';
    }

    componentDidMount = () => {
        setTimeout( () => this.setState({isLoading: false}), 1000);
    }

    render = () => {
        const { isLoading } = this.state;

        return(
            <div className='imgBlock'>
                {
                    isLoading ?
                    (
                        <div className="lds-roller">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> 
                    ):
                    (
                        <LoaderImg 
                            imgError={this.handlerImgError} 
                            imgLoad={this.handlerImgLoad}
                            img= 'ttps://media.springernature.com/lw630/nature-cms/uploads/cms/pages/2913/top_item_image/cuttlefish-e8a66fd9700cda20a859da17e7ec5748.png'
                        />
                    )
                }
            </div>
        );
    }

}

export default Loader;