import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Alert,
    ListView,
    FlatList
} from 'react-native';

const data = [
    {
        id: '1',
        nama: 'Septian'
    },
    {
        id: '2',
        nama: 'Adi'
    },
    {
        id: '3',
        nama: 'Prakoso'
    },
    {
        id: '4',
        nama: 'Shazad'
    },
    {
        id: '1',
        nama: 'Zaydan'
    },
];

export default class FlatLists extends Component {

    ambilNama = (item) => {
        Alert.alert(item.key);
    }

    render(){
        return(
            <View style={tampil.container}>
                <FlatList data={[
                    {key: 'Septian'},
                    {key: 'Adi'},
                    {key: 'Prakoso'},
                    {key: 'Shazad'},
                    {key: 'Zaydan'},
                ]}
                    renderItem={({item}) =>
                        <Text style={tampil.item} 
                        onPress={this.ambilNama.bind(this, item)}>
                            {item.key}
                        </Text>}/>
            </View>
        );
    }
}

function Item({nama}){
    return(
        <View>
            <Text>
                {nama}
            </Text>
        </View>
    );
}

const tampil = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 45
    }
});