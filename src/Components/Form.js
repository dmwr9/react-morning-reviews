import React, {Component} from 'react';

class Form extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            posterImg: '',
            year: ''
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <form className="Form">
                <input onChange={ e => this.handleChange(e)} name="title" placeholder="Title"/>
                <input onChange={ e => this.handleChange(e)} name="year" placeholder="Year"/>
                <input onChange={ e => this.handleChange(e)} name="posterImg" placeholder="Poster url"/>
                <button type="submit">Add Movie</button>
            </form>
        )
    }
}

export default Form;