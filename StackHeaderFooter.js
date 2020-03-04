import React, { Component } from 'react';
import {
    Text,
    StatusBar,
    SafeAreaView,
    ScrollView,
    View,
    Dimensions,
    StyleSheet,
    BackHandler
} from 'react-native';

export default class StackHeaderFooter extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.header]}>
                    <Text>Header</Text>
                </View> 
                <View style={[styles.content]}>
                    <ScrollView>
                        <View style={[styles.box]}></View>
                        <View style={[styles.box]}></View>
                        <View style={[styles.box]}></View>
                        <View style={[styles.box]}></View>
                        <View style={[styles.box]}></View>
                        <View style={[styles.box]}></View>
                        <View style={[styles.box]}></View>
                        <View style={[styles.box]}></View>
                        <View style={[styles.box]}></View>
                    </ScrollView>
                </View>
                <View style={[styles.footer]}>
                    <Text>Footer</Text>
                </View>
            </View>        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    header: {
        height: 40,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: '#03A9F4',
        zIndex: 10,
    },
    content: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 40
    },
    footer: {
        height: 40,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#8BC34A',
    },
    box: {
        width: 400,
        height: 100,
        backgroundColor: '#DBFF33',
        marginBottom: 10
    },
});