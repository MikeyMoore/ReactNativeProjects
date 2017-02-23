// Import some code we need
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

var TITLES = ['M - A New Hope', 'T - The Empire Strikes Back', 'W - Return of the Jedi', 'R - The Phantom Menace', 'F - Attack of the Clones', 'S - Revenge of the Sith', 'Su - The Force Awakens']

// Create a react component
var Weekdays = React.createClass({
  render: function(){
    return <View style={styles.container}>
      <Text>
        STAR WARS Week
      </Text>
      {this.titles()}
    </View>
  },
  titles: function() {
    return TITLES.map(function(title){
      return <DayItem title={title} />
    });
  }
});

// Style the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays
});

// MTFBWYA
