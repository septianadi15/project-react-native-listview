/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  FlatList,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// deteksi ukuran layar smartphone
var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;

export default class App extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]}>
          <Text>Header</Text>
        </View>
        <View style={[styles.box, styles.box2]}>
          <Text>Content</Text>
        </View>
        <View style={[styles.box, styles.box3]}>
          <Text>Footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // bisa juga di isi row
  },
  box: {
    height: box_height,
    borderBottomWidth: 5,
    borderBottomColor: '#FFFFFF',
  },
  box1: {
    flex: 1,
    backgroundColor: '#75FF33'
  },
  box2: {
    flex: 10,
    backgroundColor: '#FF5733'
  },
  box3: {
    flex:1,
    backgroundColor: '#FFBD33'
  },
});

// const data = [
//   {
//     id: '123456', 
//     title: 'Android Programming'
//   }, 
//   {
//     id: '223344', 
//     title: 'iOS Programming'
//   }, 
//   {
//     id: '543455', 
//     title: 'Web Programming'
//   }
// ];

// export default class App extends Component {

//   renderSeparator = () => {
//     return(
//       <View style={{ 
//         height:3, 
//         width: "100%", 
//         backgroundColor: "#FFBD33" }} />
//     );
//   };

//   // jika dipilih salah satu item 
//   getListViewItem = (item) => {
//     Alert.alert(item.key);
//   }
  
//     render() {
//       return(
//         <View style={styles.container}>
//           {/* <FlatList data={data} 
//             renderItem={({ item }) => 
//             <Item title={item.title} />} /> */}

//             <FlatList data={[
//               { key: 'Android Programming' }, 
//               { key: 'iOS Programming' }, 
//               { key: 'Web Programming' }, 
//               { key: 'React Native' }, 
//               { key: 'Angular JS' },
//               { key: 'Vue JS' },
//             ]}
//             renderItem={({item}) => 
//               <Text style={styles.item} 
//                 onPress={this.getListViewItem.bind(this, item)}>
//                 {item.key} 
//               </Text>} ItemSeparatorComponent={this.renderSeparator} />
//         </View>
//       );
//     }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }, 
//   item: {
//     padding: 10, 
//     fontSize: 18, 
//     height: 44,
//   },
// })

// function Item({ title }) {
//   return(
//     <View>
//       <Text>{title}</Text>
//     </View>
//   );
// }