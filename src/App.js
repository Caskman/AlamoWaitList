import React, { Component } from 'react'
import classNames from 'classnames'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import TextInput from "./TextInput"
import ComboBox from "./ComboBox"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pristine: true,
            firstName: false,
            lastName: false,
            email: false,
            localAlamo: false,
            mobileType: false,
            submitted: false,
        }
    }
    attemptSubmit = () => {
        const s = this.state
        const submitted = s.firstName && s.lastName && s.email && s.localAlamo && s.mobileType
        this.setState({
            pristine: false,
            submitted,
        })
        if (submitted) {
            toast("Yay! You're on the waitlist!")
        }
    }
    validationChange = e => {
        const newState = {}
        newState[e.key] = e.value
        this.setState(newState)
    }
    render() {
        const { pristine, submitted } = this.state
        return (
            <div className="alamo-app">
                <ToastContainer position="top-right"/>
                <div className="first-bg">
                    <div className="header">
                        <div className="header-left">
                            <img src="img/two-color-reversed.svg" width="119px" height="48px"/>
                        </div>
                        <div className="buffer"></div>
                        <div className="header-right">
                            <div className="header-item">
                                <a href="#sign-up">Join</a>
                            </div>
                            <div className="header-item">
                                <a href="#faq">FAQ</a>
                            </div>
                            <div className="header-item">
                                <a href="https://drafthouse.com/show/2d-avengers-infinity-war">External Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="greeting-section" ref={this.greetingRef}>
                        <div className="big-greeting">
                            <div className="small-section">
                                WELCOME TO THE
                            </div>
                            <div className="large-section">
                                CUPCAKE IPSUM DOLOR
                            </div>
                        </div>
                        <div className="description">
                            <div className="description-image">
                                <img src="img/card.svg"/>
                            </div>
                            <div className="description-text">
                                <p>
                                    Biscuit dessert carrot cake chocolate macaroon sweet cotton candy fruitcake soufflé. Caramels jelly-o halvah soufflé. Chocolate bar jelly jelly beans jelly-o.
                                </p>
                                <p>
                                    Carrot cake marshmallow halvah chocolate cake pudding sugar plum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-bg" id="sign-up">
                    <div className="signup-section">
                        <div className="signup-wrapper">
                            <div className="section-img">
                                <img src="img/page-1-copy-5.svg"/>
                            </div>
                            <div className="signup-content">
                                <TextInput
                                    pristine={pristine}
                                    valKey="firstName"
                                    onValidationChange={e => this.validationChange(e)}>
                                    FIRST NAME
                                </TextInput>
                                <TextInput
                                    pristine={pristine}
                                    valKey="lastName"
                                    onValidationChange={e => this.validationChange(e)}>
                                    LAST NAME
                                </TextInput>
                                <TextInput
                                    pristine={pristine}
                                    valKey="email"
                                    onValidationChange={e => this.validationChange(e)}>
                                    VICTORY EMAIL ADDRESS
                                </TextInput>
                                <ComboBox 
                                    label="YOUR LOCAL ALAMO"
                                    pristine={pristine}
                                    valKey="localAlamo"
                                    onValidationChange={e => this.validationChange(e)}>

                                    <option value="empty">Select your Alamo</option>
                                    <option>South Lamar</option>
                                    <option>Mueller</option>
                                    <option>Ritz</option>
                                    <option>Village</option>
                                    <option>Slaughter Lane</option>
                                    <option>Lakeline</option>
                                </ComboBox>
                                <ComboBox 
                                    label="MOBILE PHONE TYPE"
                                    pristine={pristine}
                                    valKey="mobileType"
                                    onValidationChange={e => this.validationChange(e)}>

                                    <option value="empty">Select mobile phone type</option>
                                    <option>Apple iPhone</option>
                                    <option>Samsung Galaxy</option>
                                    <option>Google Pixel</option>
                                </ComboBox>
                                <div className="form-section submit-container">
                                    <button onClick={() => this.attemptSubmit()}>
                                        JOIN WAITLIST
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third-bg" id="faq">
                    <div className="faq-section">
                        <div className="faq-content">
                            <div className="section-img">
                                <img src="img/page-1-copy-4.svg"/>
                            </div>
                            <div className="faq-block">
                                <div className="block-header">
                                    Caramels donut chocolate bar?
                                </div>
                                <div className="block-content">
                                    <p>
                                        Cheesecake ice cream marshmallow oat cake cake wafer. Ice cream topping chupa chups candy. Donut powder pastry. Dragée croissant biscuit wafer gummies dessert pudding sweet roll jelly beans.
                                    </p>
                                    <p>
                                        Each week, we will invite people from the waitlist to purchase an Alamo Season Pass. Once you receive your invitation, we will give you two weeks to decide if you want to purchase your pass, and if you decide not to, your place in line will be given to someone else.
                                    </p>
                                    <p>
                                        We will be testing the Alamo Season Pass in a limited number of cities, starting in Yonkers, NY. This waitlist will help us determine which cities we will test in next.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-block">
                                <div className="block-header">
                                    Jelly-o lemon drops tart tiramisu?
                                </div>
                                <div className="block-content">
                                    <p>
                                        Cheesecake ice cream marshmallow oat cake cake wafer. Ice cream topping chupa chups candy. Donut powder pastry. Dragée croissant biscuit wafer gummies dessert pudding sweet roll jelly beans.
                                    </p>
                                    <p>
                                        Each week, we will invite people from the waitlist to purchase an Alamo Season Pass. Once you receive your invitation, we will give you two weeks to decide if you want to purchase your pass, and if you decide not to, your place in line will be given to someone else.
                                    </p>
                                    <p>
                                        We will be testing the Alamo Season Pass in a limited number of cities, starting in Yonkers, NY. This waitlist will help us determine which cities we will test in next.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-block">
                                <div className="block-header">
                                    Soufflé cheesecake cotton candy cake jujubes?
                                </div>
                                <div className="block-content">
                                    <p>
                                        Cheesecake ice cream marshmallow oat cake cake wafer. Ice cream topping chupa chups candy. Donut powder pastry. Dragée croissant biscuit wafer gummies dessert pudding sweet roll jelly beans.
                                    </p>
                                    <p>
                                        Each week, we will invite people from the waitlist to purchase an Alamo Season Pass. Once you receive your invitation, we will give you two weeks to decide if you want to purchase your pass, and if you decide not to, your place in line will be given to someone else.
                                    </p>
                                    <p>
                                        We will be testing the Alamo Season Pass in a limited number of cities, starting in Yonkers, NY. This waitlist will help us determine which cities we will test in next.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
