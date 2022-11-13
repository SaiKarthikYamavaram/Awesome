import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {Icon, Text} from '@ui-kitten/components';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomDrawer = props => {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{backgroundColor: '#8200d6'}}>
                <ImageBackground
                    source={require('../../assets/images/menu-bg.jpeg')}
                    style={{padding: 20}}>
                    <Image
                        source={require('../../assets/images/user-profile.jpg')}
                        style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
                    />
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 18,
                            marginBottom: 5,
                        }}>
                        John Doe
                    </Text>
                </ImageBackground>
                <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{padding: 10, borderTopWidth: 1, borderTopColor: '#ccc'}}>
                <TouchableOpacity onPress={() => {}} style={{paddingVertical: 12}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="log-out-outline" fill='black' style={{width: 24, height: 24}}/>
                        <Text
                            style={{
                                fontSize: 15,
                                marginLeft: 5,
                            }}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;
