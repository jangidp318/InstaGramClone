import photosData from '../../db.json'
import axios from 'axios';
export function getPhotos() {
    console.log(photosData.photos);
    return ((dispatch) => 
            dispatch({
                type:'GET_PHOTOS',
                payload: photosData.photos
            })   
    )
}