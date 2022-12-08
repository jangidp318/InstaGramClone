import { Text, View,ScrollView } from 'react-native';
import React, { Component, } from 'react';
import PhotoSection from './PhotoSection';
import { connect } from 'react-redux';
import { getPhotos } from '../actions'

class PhotoFeed extends Component {

  componentDidMount(){
    this.props.getPhotos();
  }

  renderPhotos(){
    console.log(this.props)
    return this.props.photos.map(_photo=>{
      return (
        <PhotoSection key={_photo.id} photo={_photo} />
      );
    })
  }
  render() {
    return (
      <ScrollView>
        {this.renderPhotos()}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos,
    likes: state.likes
  }
}

export default connect(mapStateToProps, { getPhotos })(PhotoFeed);