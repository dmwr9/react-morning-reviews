import React, { Component } from 'react';
import movies from '../data/movies.json';
import ListItem from './ListItem';
import Form from './Form';

class List extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies
    }

    this.addMovie = this.addMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  addMovie(title, year, posterImg){
    const {movies} = this.state;
    const id = movies[movies.length - 1].id + 1
    const newMovie = {id, title, year, posterImg};
    this.setState({
      movies: [...this.state.movies, newMovie]
    })
  }

  deleteMovie(id){
    const index = this.state.movies.findIndex( movie => movie.id === id)
    const newArr = [...this.state.movies]
    newArr.splice(index, 1)
    this.setState({
      movies: newArr
    })
  }

  render() {
    const moviesMap = this.state.movies.map( movie => {
        return <ListItem key={movie.id} movie={movie} deleteMovie={this.deleteMovie}/>
    })
    return <div className="List">
        <Form addMovie={this.addMovie}/>
        {moviesMap}
        </div>
  }
}
export default List