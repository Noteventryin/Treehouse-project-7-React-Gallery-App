import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const PhotoContainer = (props) => {
    const results = props.data;
    let photos ;
    if (results.length > 0){
        photos = results.map((photo) => {
            return <Photo id={photo.id}
                          server={photo.server}
                          secret={photo.secret}
                          title={photo.title}  
                          key={photo.id}
                        />
        }); 
    } else {
       photos = <NotFound />
    }
        
    return(
        <div className="photo-container">
            <ul>
                {photos}
            </ul>
        </div> 
    )
       
}

  
export default PhotoContainer;