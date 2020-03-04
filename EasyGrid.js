import React, { Component } from 'react';
import {
    Text,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View
} from 'react-native';
import {
    Col,
    Grid,
    Row
} from 'react-native-easy-grid';

export default class EasyGrid extends Component {
    render(){
        return(
            <Grid>
                <Col style={styles.colom1}>
                    <Row size={35} style={styles.baris1}></Row>
                    <Row size={20} style={styles.baris2}></Row>
                    <Row size={45}></Row>
                </Col>
                <Col style={styles.colom2}>
                    <Row>
                    </Row>
                    <Row style={styles.baris1}></Row>
                    <Row style={styles.baris2}></Row>
                </Col>
                <Col style={styles.colom3}>
                    <Row style={styles.baris2}></Row>
                    <Row>
                        <Col style={styles.colom1}>
                            <Row style={styles.baris3}></Row>
                            <Row style={styles.baris4}></Row>
                        </Col>
                    </Row>
                    <Row style={styles.baris1}></Row>
                </Col>
            </Grid>
        );
    }
}

const styles = StyleSheet.create({
    colom1: {
        backgroundColor: 'orange'
    },
    colom2: {
        backgroundColor: 'green'
    },
    colom3: {
        backgroundColor: '#330033'
    },
    baris1: {
        backgroundColor: '#003300'
    },
    baris2: {
        backgroundColor: '#880077'
    },
    baris3: {
        backgroundColor: '#551100'
    },
    baris4: {
        backgroundColor: '#031194'
    }
})