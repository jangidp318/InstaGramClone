import { combineReducers } from 'redux';
import PhotosReducer from './photosReducer';
const rootReducer = combineReducers({
    photos: PhotosReducer,
    likes: () => []
});

export default rootReducer;