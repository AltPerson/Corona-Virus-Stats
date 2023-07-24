import './App.css';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CountryTable from './components/CountryTable';
import Grid from '@material-ui/core/Grid';
import bgImage from './assets/bg.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    height: '100%',
    position: 'fixed',
    overflow: 'auto',
    padding: '10px 0 20px',
    textAlign: 'center',
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  title: {
    marginBottom: '40px',
    fontWeight: '400',
    color: 'white',
  },
  input: {
    width: '100%',
    margin: '10px 0 20px',
    color: 'white',
  },
  loader: {
    marginTop: '80px',
  },
  paper: {
    overflowX: 'auto',
    width: '100%',
    border: 'none',
  },
  table: {
    '& thead th:not(:first-child)': {
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all .5s ease',
      borderRadius: '25px',
    },
    '& thead th:first-child': {
      backgroundColor: 'transparent',
      border: 'none',
    },
    '& thead th:not(:first-child):hover': {
      backgroundColor: '#f3f3f3',
    },
    '& tbody td': {
      fontWeight: '300',
    },
    '& tbody tr': {
      transition: 'all .5s ease',
    },
    '& tbody tr:hover': {
      backgroundColor: '#f3f3f3',
      cursor: 'pointer',
    },
  },
  img: {
    width: 'auto',
    height: 'auto',
    objectFit: 'cover',
  },
}));
function App() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const classes = useStyles();

  async function getCountryStatistics() {
    setLoading(true);
    try {
      const response = await fetch('https://disease.sh/v3/covid-19/countries/');
      const data = await response.json();
      setLoading(false);
      setCountries(data);
    } catch (e) {
      console.log('Error', e);
      return;
    }
  }

  useEffect(() => {
    getCountryStatistics();
  }, []);

  if (loading) {
    return (
      <div className={classes.root}>
        <Container maxWidth="lg">
          <CircularProgress className={classes.loader} />
        </Container>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.title}>
          Coronavirus Statistics
        </Typography>
        <Input
          className={classes.input}
          color="white"
          placeholder="Enter a country..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        ></Input>
        <CountryTable
          countries={countries}
          searchCountry={country}
          tableClass={classes.table}
          imgClass={classes.img}
          paperClass={classes.paper}
        />
      </Container>
    </div>
  );
}

export default App;
