import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Alert,
    ListView,
    FlatList,
    Modal,
    TouchableOpacity,
    Button,
    Platform
} from 'react-native';

export default class CustomAlert extends Component {
    constructor(props){
        super(props);
        this.state = {
            Alert_visibility: false
        };
    }

    submitBtn = () => {
        Alert.alert("Anda menekan tombol Ok!");
    }

    customAlert(visible) {
        this.setState({Alert_visibility: visible});
    }

    render(){
        return(
            <View style={tampil.container}>
                <Modal 
                    visible={this.state.Alert_visibility}
                    transparent={false}
                    animationType={"fade"}
                    onRequestClose={() => {this.customAlert(!this.state.Alert_visibility)}}>
                    
                    <View style={{flex:1, 
                        alignItems: 'center',
                        justifyContent: 'center'}}>
                        
                        <View style={tampil.mainAlertView}>
                            <Text style={tampil.alertTitle}>Ini adalah title</Text>
                            <View style={{width: '100%', height: 2, backgroundColor: '#fff'}}/>
                            <Text style={tampil.alertMessage}>Ini adalah message</Text>
                            <View style={{width: '100%', height: 1, backgroundColor: '#fff'}}/>
                            <View style={{flexDirection: 'row', height: '30%'}}>
                                <TouchableOpacity style={tampil.alertButton} 
                                    onPress={this.submitBtn}
                                    activeOpacity={0.8}>
                                    <Text style={tampil.teks}>Ok</Text>
                                </TouchableOpacity>
                                <View style={{width: 0.5, height: '100%', backgroundColor: '#fff'}}/>
                                <TouchableOpacity style={tampil.alertButton} 
                                    onPress={() => { this.customAlert(!this.state.Alert_visibility)} }
                                    activeOpacity={0.8}>
                                    <Text style={tampil.teks}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </Modal>

                <Button onPress={() => { this.customAlert(true) }} 
                    color="#BB1CE5" title="Custom Alert"/>
            </View>
        );
    }
}

const tampil = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: (Platform.OS == 'ios') ? 20 : 0
    },
    mainAlertView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E4CBF',
        height: 200,
        width: '90%',
        borderColor: '#59B5D5',
        borderRadius: 7
    },
    alertTitle: {
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center',
        padding: 10,
        height: '30%'
    },
    alertMessage: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 10,
        height: '40%'
    },
    alertButton: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    teks: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 20,
        marginTop: -5
    }
});