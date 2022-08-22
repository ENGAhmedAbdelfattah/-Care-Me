import React, { Component } from 'react';
import axios from "axios";
import { HiSearch } from "react-icons/hi";
import Navbar from "../NavBar/Navbar";
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

export class FirstAid extends Component {
    state = {
        value: "",
        prediction: ''
    }

    predictionHandle = async () => {
        const baseURL = 'https://nlp-firstaid-api.herokuapp.com/predict/?text= ' + this.state.value;
        await axios.get(baseURL).then((response) => {
            this.setState({
                prediction: response.data
            });
            console.log(response.data);
        }).catch(err => console.log('err'))
    }
    setValue = e => {
        this.setState({
            value: e.target.value
        })
    }
    render() {


        return (
            <>
                <Navbar />
                <div className='faid'>
                    <div className='p-2 lang'>
                        <Link id='lang1' className="btn  active" aria-current="page" to="/Care-Me/firstaid">En</Link>
                        <Link id='lang2' className="btn lang2 active" to="/Care-Me/firstaidar">العربيه</Link>

                    </div>
                    <div className='container aid'>
                        <br />
                        <div className="App">
                            <div className="check">
                                <h1 className=' lbl'>Enter a description of your pain
                                    <div className="btn">
                                        <button className='btn' onClick={() => this.predictionHandle()}>
                                            <input value={this.state.value} onKeyPress={() => this.predictionHandle()} onChange={this.setValue} />

                                            <p className='btn search btn-success  my-2'><HiSearch /></p>
                                        </button>
                                    </div>
                                </h1>
                            </div>
                            <p className='source-text '><i>{this.state.prediction.source_text}<u>{this.state.prediction.translation}</u></i> </p>
                            <div className="pred container   ">
                                <p className='firstAid1'>{this.state.prediction.firstaid_instructions}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default FirstAid;
