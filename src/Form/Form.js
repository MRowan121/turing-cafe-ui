import React, { Component } from "react";
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date: '',
            time: '',
            guests: '',
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <form className="form">
                <input 
                    type='text' 
                    placeholder="Name"
                    name="name" 
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}
                    required
                    />
                <input 
                    type='text' 
                    placeholder="Date (mm/dd)" 
                    name="date"
                    value={this.state.date}
                    onChange={e => this.handleChange(e)}
                    required
                    />
                <input 
                    type='text' 
                    placeholder="Time" 
                    name="time"
                    value={this.state.time}
                    onChange={e => this.handleChange(e)}
                    required
                    />
                <input 
                    type='number' 
                    placeholder="Number of guests" 
                    name="guests"
                    value={this.state.guests}
                    onChange={e => this.handleChange(e)}
                    required
                    />
                <button>Make Reservation</button>
            </form>
        )
    }
}

export default Form;