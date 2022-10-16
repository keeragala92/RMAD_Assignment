import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './HomeCC.Style';

class HomeCC extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  onIncrease() {
    console.log('PRESS');

    this.setState({
      count: this.state.count + 1,
    });
  }

  onDecrease() {
    console.log('PRESS');

    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.count}</Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.onIncrease()}>
            <Text style={styles.btnTitle}>+ Button</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn2}
            onPress={() => this.onDecrease()}>
            <Text style={styles.btnTitle}>- Button</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeCC;
