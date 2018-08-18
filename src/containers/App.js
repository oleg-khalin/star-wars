import React, { Component } from 'react';
import './App.css';
import FilmList from '../components/FilmList';
import SearchBox from '../components/SearchBox';


class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/?format=json')
      .then(res => res.json())
      .then(users => this.setState({ films: users.results }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value});
  }

  render() {
    const { films, searchField } = this.state;

    const filteredFilms = this.state.films.filter(film => 
      film.title.toLowerCase().includes(searchField.toLowerCase()) || film.release_date.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
        <div className='tc'>
          <h1>StarWars</h1>
          <SearchBox searchChange={ this.onSearchChange }/>
          <FilmList films={ filteredFilms }/>
        </div>
      );
  }
};

export default App;
