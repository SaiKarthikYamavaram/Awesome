import {Button, CheckBox, Icon, Input, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {Image, StyleSheet, useWindowDimensions} from 'react-native';
import {NAVIGATION} from '../constants/navigationConstants';


const LoginScreen = ({navigation}) => {
    const {height, width} = useWindowDimensions();


    const [passwordVisibility, setPasswordVisibility] = React.useState(true);
    const [companyName, setCompanyName] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);

    const onSubmit = () => {
        navigation.replace(NAVIGATION.App);
    };


    return (
        <Layout style={[styles.containerStyle, {flexDirection: width > height ? 'row' : 'column'}]} level={'1'}>
            <Layout style={[styles.containerStyle, {width: '100%'}]}>
                <Image style={{flex: 1, width: Math.min(width, height)}} resizeMethod={'resize'} resizeMode="contain"
                       source={require('../assets/images/Invoice.png')}/>
            </Layout>
            <Layout style={{flex: 1, alignItems: 'flex-start', width: '100%'}}>
                <Text status='primary' style={styles.header} size="large">Login</Text>
                <Input
                    placeholder='Company name'
                    value={companyName}
                    size="large"
                    accessoryLeft={<Icon name='home-outline'/>}
                    style={styles.inputStyle}
                    onChangeText={setCompanyName}
                />

                <Input
                    placeholder='Username'
                    value={userName}
                    size="large"
                    textContentType={'username'}
                    accessoryLeft={<Icon name='person-outline'/>}
                    style={styles.inputStyle}
                    onChangeText={setUserName}
                />
                <Input
                    placeholder='Password'
                    value={password}
                    size="large"
                    secureTextEntry={passwordVisibility}
                    textContentType={'password'}
                    accessoryLeft={<Icon name='lock-outline'/>}
                    accessoryRight={<Icon onPress={() => setPasswordVisibility(!passwordVisibility)}
                                          name={passwordVisibility ? 'eye-outline' : 'eye-off-outline'}/>}
                    style={styles.inputStyle}
                    onChangeText={setPassword}
                />
                <Layout style={styles.rememberContainer}>
                    <Text style={{marginRight: 4}}>Remember me?</Text>
                    <CheckBox checked={rememberMe} onChange={checked => setRememberMe(checked)} status={'primary'}/>
                </Layout>

                <Button size="large" onPress={onSubmit} style={styles.button}>
                    {() => <Text style={[styles.labelStyle, styles.btnLabel]}>Login</Text>}
                </Button>
            </Layout>
        </Layout>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '4%',
        flex: 1,
    },
    inputStyle: {
        width: '100%',
        color: 'black',
        marginTop: 16,
    },
    button: {
        width: '100%',
        borderRadius: 8,
        marginVertical: 8,
    },
    btnLabel: {
        fontSize: 18,
        color: 'white',
    },
    counterButtonGroup: {
        'margin': 2,
    },
    actionButtonGroup: {
        flexDirection: 'column',
        width: '100%',
    },
    header: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 34,
    },
    counterContainer: {
        width: '100%',
        paddingHorizontal: 4,
        marginVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
    },
    selectorStyle: {
        marginTop: 12,
    },
    labelStyle: {
        fontSize: 13.5,
        marginBottom: 4,
    },
    rememberContainer: {
        width: '100%',
        paddingHorizontal: 4,
        marginVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },

});


export default LoginScreen;
