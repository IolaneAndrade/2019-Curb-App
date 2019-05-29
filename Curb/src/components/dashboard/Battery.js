import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  Platform
} from 'react-native';

import FusionCharts from "react-native-fusioncharts";

export default class Battery extends React.Component {
	constructor(props) {
        super(props);
        this.apiCaller = null;
        this.state = {
          type: 'angulargauge',
          width: '100%',
          height: '100%',
          dataFormat: 'json',
          dataSource: require('../../jsons/data.json')
        };
        this.libraryPath = Platform.select({
          android: require('../../../assets/fusioncharts/fusioncharts.html')
        });
      }
    
      render() {
        return (
          <View style={styles.container}>
            <Text style={styles.header}>A Simple Gauge</Text>
            <View style={styles.chartContainer}>
              <FusionCharts
                type={this.state.type}
                width={this.state.width}
                height={this.state.height}
                dataFormat={this.state.dataFormat}
                dataSource={this.state.dataSource}
                libraryPath={this.libraryPath}
              />
            </View>
          </View>
        );
      }
    }
    
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10
	},
	header: {
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center',
		paddingBottom: 10
	},
	chartContainer: {
		height: 400,
		borderColor: '#000',
		borderWidth: 1
	}
});