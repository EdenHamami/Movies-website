import React, { useState, useEffect } from 'react';
import moviesData from './MoviesData';
import MoviesList from './MoviesList';
import "./HomePage.css";

function HomePage() {
  // Destructuring movies directly from moviesData for cleaner access
  const { movies } = moviesData;

  // Using Set to ensure categories are unique and then converting it to an array
  const categories = Array.from(new Set(movies.map(movie => movie.category)));

  // State for active categories, sorting, relevant movies, and search query
  const [activeCategories, setActiveCategories] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [relevantMovies, setRelevantMovies] = useState(movies);
  const [searchQuery, setSearchQuery] = useState("");

  // Effect hook to filter and sort movies whenever searchQuery, sortBy, or activeCategories change
  useEffect(() => {
    let filteredMovies = movies.filter(movie =>
      movie.name.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
      (activeCategories.length === 0 || activeCategories.includes(movie.category))
    );

    const sorter = {
      'name': (a, b) => a.name.localeCompare(b.name),
      'year': (a, b) => a.yearOfRelease - b.yearOfRelease,
      'duration': (a, b) => a.duration - b.duration
    };

    filteredMovies.sort(sorter[sortBy]);

    setRelevantMovies(filteredMovies);
  }, [searchQuery, sortBy, activeCategories, movies]);

  function handleSelectCategory(selectedCategory) {
    setActiveCategories(prevCategories =>
      prevCategories.includes(selectedCategory)
        ? prevCategories.filter(category => category !== selectedCategory)
        : [...prevCategories, selectedCategory]
    );
  }

  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className='homePage'>
      <div className='left-side'>
        <img src="./logo.png" alt="logo" />
        <div className="filter">
          {categories.map(category => (
            <div
              key={category}
              className={`category-filter-item ${activeCategories.includes(category) ? 'active' : ''}`}
              onClick={() => handleSelectCategory(category)}>
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className='right-side'>
        <div className='top'>
          <input
            className='search'
            type='text'
            placeholder='Search movie...'
            onChange={handleSearchChange}
          />
          <select className='sort-by' onChange={handleSortChange} value={sortBy}>
            <option value="name">Name</option>
            <option value="year">Year</option>
            <option value="duration">Duration</option>
          </select>
        </div>
        <div className='bottom'>
          <MoviesList relevantMovies={relevantMovies} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
