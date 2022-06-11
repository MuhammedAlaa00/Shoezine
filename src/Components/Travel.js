import React , {useState , useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Loading from './Loading';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import '../style/home.css'
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Skeleton from '@material-ui/lab/Skeleton';
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Navbar from './Navbar';
import {AuthContextConfigMethod } from '../Contexts/AuthContext';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid:{
    margin:theme.spacing(1)
  },
  mainCard:{
    maxWidth: 345,
    width:"100%"
  },
  media: {
    height: 300,
    overflow:"hidden",
    width:"100%"
  },
}));
function Travel() {
    const [images, setImages] = useState([]);
    const [loading, setloading] = useState(false)
    const [pagenextNumb, setpagenextNumb] = useState(1)
    const classes = useStyles();
    const {userData} = AuthContextConfigMethod();
    useEffect(() => {
        const usplashApi = "gN2owvKtm8BAum3PTUT-RpTJm1FaHXR2HJ-lQHADqog"
        axios.get(`https://api.unsplash.com/search/photos?page=${pagenextNumb}&query=Travel&client_id=${usplashApi}`)
        .then(res => {
        setImages(res.data.results);
        setloading(true);
        })
        .catch(err => {
          console.log(err);
        })
    }, [pagenextNumb]);
    const getEveryImage = images.slice(0,8).map(image =>
    <Grid className={`${classes.grid} grid`} item xs={12} sm={6} md={4} lg={3} key={image.id}>
      <Card className={classes.mainCard}>
        <CardMedia className={classes.media}>
          {!loading 
            ? 
            <Skeleton variant="rect" height={300} width="100%" /> 
            : 
            <LazyLoadImage
                effect="blur"
                height="300px"
                width="100%"
                src={image.urls.full}
                alt="image"
                className="img"
                placeholder={<Skeleton variant="rect" height={300} />}
              />
          }
        </CardMedia>
      </Card>
    </Grid>)
    return (
        <div>
            {userData ?
            <div className={classes.root}>
                <Navbar></Navbar>
                <Container>
                  {loading ? <Grid  container className="centerContainer">
                      {getEveryImage}
                    
                  </Grid> : <Loading></Loading>}
                  <div className="center">
                      <Button variant="contained" color="secondary" className="button" onClick={
                        ()=>
                        {
                          if(pagenextNumb === 1)
                          {
                            setpagenextNumb(1)
                            throw(console.log('error'))
                          }
                          else{
                            setpagenextNumb(pagenextNumb - 1)
                          }
                        }
                        }>
                        prev
                      </Button>
                      <Button variant="contained" className="button" color="secondary" onClick={()=>setpagenextNumb(pagenextNumb + 1)}>
                        next
                      </Button>
                  </div>
              </Container>
            </div> 
            : 
            <Loading></Loading>
            }
        </div>
    )
}

export default Travel
