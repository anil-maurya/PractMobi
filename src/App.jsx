import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      data : [],
      count: 0,
    };
    this.addOne = this.addOne.bind(this);
  }

  addOne(){
    this.setState(prevState=> ({...prevState, count: prevState.count + 1}))
  }

  componentDidMount(){
    const uri = 'http://dummy.restapiexample.com/api/v1/employees';
    fetch(uri)
    .then(response => response.json())
    .then(data=>{
      if(data.status === 'success'){
        this.setState(prevState=> ({
          ...prevState,
          data : data.data
        }))
      }else{
        console.log('Something went wrong.')
      }
    })
  }

  render() {
    const { count, data } = this.state;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{count}</Text>
        {
          data.map(user =><Text key={user.id}>{user['employee_name']}</Text>)
        }
   
        <Button onPress={this.addOne} title="Click" />
      </View>
    );
  } 
}

export default App;
