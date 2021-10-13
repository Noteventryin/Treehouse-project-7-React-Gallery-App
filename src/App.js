import React , { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';

//import 3 default topics to the home page.
import { cats, dogs, birds } from './components/Topic';

//App components.
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PageNotFound from "./components/PageNotFound";

//Data fetching from config.
import apiKey from './components/config';


class App extends Component {
    state = {
      photos:[],
      loading: true,
      title:[],
      searchString:''
    };


    componentDidMount(){
      this.performSearch();
    }

    performSearch = (query= 'cats') =>{
      this.setState({ loading: true });
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
           .then(response => {
              this.setState({
                photos: response.data.photos.photo,
                title: query,
                loading: false
              })
           })
           .catch(error => {
              console.log('Error fetching and parsing data', error);
           });
    }
    
    render () {
      
      return (
        <BrowserRouter>
            <div className="container">
              <SearchForm onSearch={this.performSearch} />
              <Nav />
              {
                 (this.state.loading)
                   ? <p>loading...</p>
                   : <Switch>
                        <Route exact path="/" render={ () => <Redirect to={`/search/cats`} /> }  />
                        <Route path="/search/cats" render={ () => 
                          <PhotoContainer data={cats} title={"cats"} /> } />
                        <Route path="/search/dogs" render={ () => 
                          <PhotoContainer data={dogs} title={"dogs"} /> } />
                        <Route path="/search/birds" render={ () => 
                          <PhotoContainer data={birds} title={"birds"} /> } />
                        <Route path="/search/:query" render={() => (
                          <PhotoContainer data={this.state.photos}
                                          title={this.state.title} /> 
                          )}
                        />
                        {/* 404 error route  */}
                        <Route exact path="/404error" component={PageNotFound} />
                    </Switch>
              }
            </div>
        </BrowserRouter> 
      )
    }
}


export default App;
