import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Select, SelectItem} from '@ui-kitten/components';
import {SelectProps} from "@ui-kitten/components/ui/select/select.component";

export const Selector = (props) => {

    const [selectedIndex, setSelectedIndex] = React.useState();

    useEffect(() => {
        if (selectedIndex != null && typeof selectedIndex.row ) {
            props.onOptionChange(selectedIndex.row)
        }
    }, [selectedIndex])


    return (
        <Layout style={[styles.container, props.style]} level='1'>
            <Select
                selectedIndex={selectedIndex}
                value={selectedIndex != null ? props.options[selectedIndex.row] : props.defaultTitle}
                size="large"
                multiSelect={false}
                {...props}
                // @ts-ignore
                onSelect={index => setSelectedIndex(index)}>
                {props.options.map((item, index) => (
                    <SelectItem key={index} title={item}/>
                ))}
            </Select>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
});

export default Selector