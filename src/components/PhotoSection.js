import { Text, View,Image,StyleSheet,TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react';
import {Ionicons} from 'react-native-vector-icons';

export default class PhotoSection extends Component {
    constructor(){
        super();

        this.like = false;
        this.state = { heartIcon : 'ios-heart-outline'}
    }

    togglelike() {
        this.like = !this.like;
        if(this.like){
            this.setState({heartIcon: 'ios-heart'});
        } else {
            this.setState({heartIcon: 'ios-heart-outline'});
        }
    }
  render() {
    return (
      <View>
        <View style={styles.sectionHeader}>  
            <Image 
                style={styles.profileImage} 
                source={{uri : this.props.photo.user_avatar}}/>
            <Text style={styles.username}>{this.props.photo.username}</Text>
        </View>
        <View>
            <Image 
                style={styles.image} 
                source = {{uri : this.props.photo.image}}/>
        </View>
        <View style={styles.IconsContainer}>
            <View style={{flexDirection:'row'}}>
                <TouchableWithoutFeedback onPress={this.togglelike.bind(this)}>
                    <Ionicons 
                        name={this.state.heartIcon} 
                        size={30}
                        style={{ color: this.state.heartIcon === 'ios-heart'? 'red':'black'}} 
                    />
                </TouchableWithoutFeedback>
                <Ionicons name="paper-plane-outline" size={30}/>
            </View>
            <Ionicons name="bookmark-outline" size={30} />
            
        </View>
        <View style={styles.imagemeta}>
            <Text style={styles.username}>{this.props.photo.username}</Text>
            <Text>{this.props.photo.caption}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    profileImage:{
        width:50,
        height:50,
        borderRadius:50,
    },
    image:{
        height:400,
    },
    username:{
        marginHorizontal:5,
        fontWeight:'bold',
        fontSize:16,
    },
    sectionHeader:{
        flexDirection:"row",
        alignItems:'center',
        padding:5,
    },
    imagemeta:{
        flexDirection:'row'
    },
    IconsContainer:{
        paddingTop:10,
        paddingBottom:10,
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between'
    }

})