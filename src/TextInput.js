import React, { Component } from 'react'
import classNames from 'classnames'

class TextInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valid: false,
        }
    }
    onChange = e => {
        const value = e.target.value
        const trimmed = value.replace(/\s/g, "")
        let valid = trimmed.length > 0
        if (valid && this.props.valKey == "email") {
            // from https://stackoverflow.com/questions/4964691/super-simple-email-validation-with-javascript
            valid = /(.+)@(.+){2,}\.(.+){2,}/.test(trimmed)
        }
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
        const { children, pristine, valKey } = this.props
        const { valid } = this.state
        return (
            <div className={classNames("form-section mb-4", { error: !valid && !pristine })}>
                <label className="mb-0" htmlFor={`${valKey}`}>{children}</label>
                <input className="pl-1" type="text" id={`${valKey}`} onChange={e => this.onChange(e)}/>
            </div>
        )
    }
}

export default TextInput
