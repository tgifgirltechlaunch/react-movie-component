import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import VotesIcon from '@material-ui/icons/LocalActivity';
import LinkIcon from '@material-ui/icons/Link';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    display: 'flex',
    maxWidth: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '0 auto'
  },
  detailscontainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    backgroundColor: '#fff',
    border: '1px solid #808080',
    margin: '-10px auto',
    justifyContent: 'space-between',
  },
  details: {
    paddingTop: '-15px',
  },
  basic: {
    display: 'flex',
    flexDirection: 'column',
    width: 180,
    backgroundColor: '#fff',
    border: '0px solid #808080',
    margin: '0 auto',
    paddingTop: '-16px',
    justifyContent: 'center',
    alignItems: 'space-between'
  },
  content: {
    flex: '1 0 auto',
    fontSize: '34px',
    fontWeight: 700
  },
  title: {
    fontSize: '28px',
    marginTop: '0'
  },
  cover: {
    width: '600px',
    height: '600px'
  },
  avatarcontainer: {
    width: '100%'
  },
  avatar: {
    margin: '0 auto',
    width: '2.4em',
    height: '2.4em',
    backgroundColor:'#808080'
  },
  linkcontainer: {
    width: '100%'
  },
  link: {
    margin: '0 auto',
    width: '2.4em',
    height: '2.4em',
    color: '#808080'
  },
  votecontainer: {
    width: '100%'
  },
  votes: {
    margin: '0 auto',
  },
  badge: {
    background: '#c51162',
    padding: '4px'
  },
  votecolor: {
    color: '#808080',
    width: '30px'
  },
  votesicon: {
    marginLeft: '-15px',
    width: '2.4em',
    height: '2.4em',
  },
  rowheader: {
    fontSize: '24px',
    lineHeight: '12px'
  },
  runtimecontainer: {
    width: '100%',
    color: '#808080',
    fontSize: '18px',
    fontWeight: '500',
  },
  yearstyle: {
    fontWeight: '500',
    fontSize: '18px',
    color: '#808080',
  }
});


class MovieCard extends React.Component {
  state = { 
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

  render() {
    const { classes, imdbID, genre, plot, rated, title, language, year, cast, image, director, votes, runtime } = this.props;

    return (
      <Card className={classes.card}>
        <div className={classes.basic}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} component="h5" variant="h5">
            {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            <p className={classes.yearstyle}>{year}</p>
            </Typography>
            
            <p className={classes.avatarcontainer}><Avatar aria-label={rated} className={classes.avatar}>
              {rated}</Avatar></p>
         
            <p className={classes.linkcontainer}>
              <a className={classes.linktag} href={'https://www.imdb.com/title/' + imdbID}><LinkIcon className={classes.link} /></a>
            </p>
          
            <p className={classes.votescontainer}>
             <Badge Badge classes={{badge: classes.badge}} color="secondary" badgeContent={votes} className={classes.votecolor}>
              <VotesIcon variant="contained" className={classes.votesicon}></VotesIcon>
             </Badge>
            </p>

            <p className={classes.runtimecontainer}>{runtime}</p>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={image}
        />
        <div className={classes.detailscontainer}>
        <CardContent className={classes.details}>
            <p className={classes.rowheader} paragraph>Plot </p>
            <p>{plot}</p>
            <p className={classes.rowheader} paragraph>Genre </p>
            <p>{genre}</p>
            <p className={classes.rowheader} paragraph>Language </p>
            <p>{language}</p>
            <p className={classes.rowheader} paragraph>Director </p>
            <p>{director}</p>
            <p className={classes.rowheader} paragraph>Cast </p>
            <p>{cast}</p>
          </CardContent>
        </div>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


export default withStyles(styles)(MovieCard);