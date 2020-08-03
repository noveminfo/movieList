import React from 'react';
import Card from '../components/Card/Card';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    };

  }

  componentDidMount() {
    const apiToken = '74fae36472e5adab668ae23e55efb954';
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiToken}`)
      .then(response => response.json())
      .then(json => this.setState({
        data: json.results,
        loading: false
      }))
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <p>Loading</p>
    }

    return (
      <div className='row'>
        {data.map(movie =>
          <div key={movie.id} className='col-sm-3'>
            <Card movie={movie} />
          </div>
        )}
      </div>
    );
  }
}

export default List;