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

    render() {
        return (
            <form className="form">
                <input 
                    type='text' 
                    placeholder="Name" 
                    value={this.state.name}
                    required
                    />
                <input 
                    type='text' 
                    placeholder="Date (mm/dd)" 
                    value={this.state.date}
                    required
                    />
                <input 
                    type='text' 
                    placeholder="Time" 
                    value={this.state.time}
                    required
                    />
                <input 
                    type='number' 
                    placeholder="Number of guests" 
                    value={this.state.guests}
                    required
                    />
                <button>Make Reservation</button>
            </form>
        )
    }
}

export default Form;