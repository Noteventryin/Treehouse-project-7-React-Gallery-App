import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


export default class PhotoContainer extends Component {
     
      render() {
        const results = this.props.data;
        let photos
        // let photos = results.map((photo) => {
        //     return <Photo id={photo.id}
        //             server={photo.server}
        //             secret={photo.secret}
        //             title={photo.title}  
        //             key={photo.id}
        //                 />
        // }); 
        if (results.length > 0){
             photos = results.map((photo) => {
                return <Photo id={photo.id}
                        server={photo.server}
                        secret={photo.secret}
                        title={photo.title}  
                        key={photo.id}
                            />
            }); 
            // return(
            //     <div className="photo-container">
            //         <h2>Results for {this.props.title}</h2>
            //         <ul>
            //             {photos}
            //         </ul>
            //     </div> 
            // )
        } else {
           photos= <NotFound />
        }
        return(
            <div className="photo-container">
                <h2>Results for {this.props.title}</h2>
                <ul>
                    {photos}
                </ul>
            </div> 
        )    
    }
}
