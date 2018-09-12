import React, { Component } from 'react'
import classNames from 'classnames'

class ComboBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valid: false,
        }
    }
    onChange = e => {
        const valid = e.target.value !== "empty"
        if (this.state.valid !== valid) {
            this.props.onValidationChange({
                key: this.props.valKey,
                value: valid,
            })
        }
        this.setState({
            valid,
        })
    }
    render() {
        const { children, pristine, valKey, label } = this.props
        const { valid } = this.state
        return (
            <div className={classNames("form-section mb-4", { error: !valid && !pristine })}>
                <label className="mb-0" htmlFor={valKey}>{label}</label>
                <div className="select-container">
                    <select className="pl-1" id={valKey} onChange={e => this.onChange(e)}>
                        {children}
                    </select>
                    <img src="img/arrow-down.svg"/>
                </div>
            </div>
        )
    }
}

export default ComboBox
