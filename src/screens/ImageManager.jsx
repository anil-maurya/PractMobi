import React, { Component }  from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';


class ImageManager extends Component{
  
    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>This is Image Manager</Text>
                <Text>{this.props.count}</Text>
                <Button title="Add One" onPress={this.props.increment}/>
                <Button title="Sub One" onPress={this.props.decrement} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return ({
        count: state.count
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment :() => dispatch({type: 'ADD_ONE'}),
        decrement: () => dispatch({type: 'SUB_ONE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageManager);