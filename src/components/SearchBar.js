// SearchBar.js
import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Input, Layout} from '@ui-kitten/components';
import {debounce} from '../utils/TextUtils';

const SearchBar = ({onSearch, onMenuClick}) => {
    const [searchPhrase, setSearchPhrase] = useState('');

    const optimizedFn = useCallback(debounce(onSearch), []);


    return (
        <Layout style={styles.container} level="1">
            <Input
                style={styles.input}
                placeholder="Search"
                value={searchPhrase}
                onChangeText={(text) => {
                    setSearchPhrase(text);
                    optimizedFn(text);
                }}
                accessoryLeft={
                    <Icon
                        name='search-outline'
                        fill="black"
                        style={{width: 20, height: 20}}/>
                }
            />

            <Icon
                name="menu-outline"
                fill="black"
                style={{width: 32, height: 32, marginEnd: 4}}
                onPress={onMenuClick}/>
        </Layout>
    );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 6,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    input: {
        fontSize: 20,
        flex: 1,
        paddingHorizontal: 4,
        paddingVertical: 4,
    },
});
