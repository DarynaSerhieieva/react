import { Component } from "react";
import Loader from "./Loader";
import './style.css';


class LoaderImg extends Component {

    state = {
        isLoading: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 1000)
        
    }

    render() {
        
        let img;

        if (!this.state.isLoading){
           img =  (
                <Loader
                    img= 'https://media.springernature.com/lw630/nature-cms/uploads/cms/pages/2913/top_item_image/cuttlefish-e8a66fd9700cda20a859da17e7ec5748.png'
                />
            )
        } else {
            img = (
                <div class="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )
        }

        return(
            <div className='imgBlock'>
                {img}
            </div>
        );
    }

}

export default LoaderImg;