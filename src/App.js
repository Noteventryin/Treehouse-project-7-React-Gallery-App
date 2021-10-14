import React , { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import axios from 'axios';

//import 3 default topics to the home page.
import { cats, dogs, birds } from './components/Topic';

//App components.
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PageNotFound from "./components/PageNotFound";
import NotFound from './components/NotFound';

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
  
    performSearch = (query = 'cats') =>{
      this.setState({ loading: true });
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
           .then(response => {
             if(response.data.photos.photo.length > 0 ){
              this.setState({
                photos: response.data.photos.photo,
                title: query,
                searchString: query,
                loading: false
              })
            }else{
            this.setState({
              loading: false,
              searchString: "noresults"
            });
             this.props.history.replace("/noresults");
            }
          })
           .catch(error => {
              console.log('Error fetching and parsing data', error);
              this.setState({loading: false});
              // this.props.history.replace("/404");
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
                        <Route exact path="/" render={ () => <PhotoContainer data={this.state.photos} title={this.state.title} />} />
                        <Route path="/cats" render={ () => 
                          <PhotoContainer data={cats} title={"cats"} /> } />
                        <Route path="/dogs" render={ () => 
                          <PhotoContainer data={dogs} title={"dogs"} /> } />
                        <Route path="/birds" render={ () => 
                          <PhotoContainer data={birds} title={"birds"} /> } />
                        <Route exact path="/noresults" component={NotFound} /> 
                        {/* <Route exact path="/404" component={PageNotFound} />  */}
                        <Route component={PageNotFound} /> 
                    </Switch>
              }
            </div>
        </BrowserRouter> 
      )
    }
}


export default withRouter(App);
