// Import some code we need
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

// Create our component
var DayItem = React.createClass({
  render: function() {
    return <Text style={styles.title}>
      {this.props.title}
    </Text>
  }
});

// Style our component
var styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#0000FF'
  }
});

// Make this code available elsewhere
module.exports = DayItem;
