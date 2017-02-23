import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AppRegistry
} from 'react-native';
import formatTime from 'minutes-seconds-milliseconds'

var StopWatch = React.createClass({
  getInitialState: function() {
    return {
      timeElapsed:null,
      running:false
    }
  },
  render: function(){
    return <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timerWrapper}>
          <Text style={styles.timer}>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={styles.footer}>
        <Text>
          I am a list of laps
        </Text>
      </View>

    </View>
  },
  startStopButton: function() {
    var style = this.state.running ? styles.stopButton : styles.startButton

    return <TouchableHighlight
     onPress={ () => this.onPress}
     onPress={this.handleStartPress}
     underlayColor="gray"
     style={[styles.button, style]}>
      <Text>
        {this.state.running ? 'Stop' : 'Start'}
      </Text>
    </TouchableHighlight>
  },
  lapButton: function() {
    return <View style={styles.button}>
      <Text>
        Lap
      </Text>
    </View>
  },
  handleStartPress: function() {
    if(this.state.running){
      clearInterval(this.interval);
      this.setState({running:false});
      return
    }

    var startTime = new Date();

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime,
        running: true
      });
    }, 30);
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: "#00CC00"
  },
  stopButton: {
    borderColor: "#CC0000"
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
