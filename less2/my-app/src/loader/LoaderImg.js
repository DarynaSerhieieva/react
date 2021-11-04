import { Component } from "react";
import Loader from "./Loader";
import './style.css';

class LoaderImg extends Component {

    state = {
        isLoading: false,
        img: '',
        error: false
    }

    changeHendler = event => {
        this.setState({img: event.target.value});

        console.log('lol', event.target.value)
        event.target.value = '';

    }

    handlerImgLoad = (e) => {
        this.setState({isLoading: true});
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.img !== prevState.img || this.state.error !== prevState.error) {
            this.setState({isLoading: true})
        }
    }

    handlerImgError = (e) => {
        this.setState({error: true})
    }

    render = () => {

        const { isLoading, img, error } = this.state;

        return(
            <div className='imgBlock'>

                <h1>Please add images</h1>

                <input value={img} onChange={this.changeHendler}/>

                <div>
                    {
                        !error ? 
                        <h2>Error</h2>:

                        <h2>good</h2>
                        

                    }
                    {
                        !isLoading ?
                        <div className="lds-roller">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> :
                        <Loader 
                            error={this.handlerImgError} 
                            load={this.handlerImgLoad} 
                            status={error} 
                            img={img}
                        />
                    }
                </div>
            </div>
        );
    }

}

export default LoaderImg;