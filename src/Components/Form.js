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

    handleAdd(e){
        const {title, year, posterImg} = this.state
        e.preventDefault();
        this.props.addMovie(title, year, posterImg);
        this.setState({
            title: '',
            posterImg: '',
            year: ''
        })
    }

    render(){
        return (
            <form onSubmit={ e => this.handleAdd(e)} className="Form">
                <input value={this.state.title} onChange={ e => this.handleChange(e)} name="title" placeholder="Title"/>
                <input value={this.state.year} onChange={ e => this.handleChange(e)} name="year" placeholder="Year"/>
                <input value={this.state.posterImg} onChange={ e => this.handleChange(e)} name="posterImg" placeholder="Poster url"/>
                <button type="submit">Add Movie</button>
            </form>
        )
    }
}

export default Form;