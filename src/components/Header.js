import React from "react";
import Title from "./Header/Title";
import CircleButton from './CircleButton';
import OutlineInput from './OutlineInput';
import Movie from './MovieCard';

const styles = {
    topContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'start',
        marginTop: '5px',
    },
    searchContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '5px 5px 25px 5px',
        padding: '10px'
    }
};

export default class Header extends React.Component {
    //grab value from onChange event and assign it to title, then pass it to changeTitle

    constructor(props){
        super(props);
        this.state = {
            findTitle: '',
            imdbID: '',
            title: '',
            year: '',
            rated: '',
            genre: '',
            plot: '',
            language: '',
            poster: '',
            director: '',
            cast: '',
            votes: '',
            runtime: ''
        };
    }


    handleChange(e) {
        this.setState({
            findTitle: e.target.value
        });
    }

    onKeyPress(event){
        
        if (event.key === 'Enter') {
            this.setState({ findTitle: event.target.value });
            const title = this.state.findTitle;
            this.find(title);
        }

   }
    
   searchTitle(e){
        const title = this.state.findTitle;
        this.find(title);
    }

    find(TitleSearch){
        var that = this;
        var url = 'http://www.omdbapi.com/?t=' + TitleSearch + '&apikey=5fc0b4d0'
      
        fetch(url)
        .then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
        })
        .then(function(data) {
          that.setState({ imdbID: data.imdbID, title: data.Title, year: data.Year, plot: data.Plot, rated: data.Rated, language: data.Language, genre: data.Genre, poster: data.Poster, director: data.Director, cast: data.Actors, votes: data.imdbRating, runtime: data.Runtime});
        });
    }

    componentDidMount() {    
        this.find('Enough');
    }

    render(){

        return(
            <div style={styles.topContainer}>
                <Title title={this.props.title} />
                {/* trigger event on layout when user types in input by calling handleChange method */}
                <div style={styles.searchContainer}>
                    <OutlineInput
                        value='' 
                        type="text"
                        onChange={this.handleChange.bind(this)} 
                        onKeyPress={this.onKeyPress.bind(this)} 
                    />
                    <CircleButton
                        onClick={this.searchTitle.bind(this)}
                        label="Search"
                    />
                </div>
                <Movie
                    imdbID={this.state.imdbID} 
                    genre={this.state.genre} 
                    plot={this.state.plot} 
                    rated={this.state.rated} 
                    title={this.state.title}
                    language={this.state.language}
                    year={this.state.year}
                    cast={this.state.cast} 
                    image={this.state.poster}
                    director={this.state.director} 
                    votes={this.state.votes}
                    runtime={this.state.runtime}
                />
            </div>
        )
    }
}