import {Button, ButtonGroup, Datepicker, Icon, Input, Layout, Text} from '@ui-kitten/components';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Selector from '../components/Selector';


const Supplier = ['Supplier1', 'Supplier2', 'Supplier3', 'Supplier4', 'Supplier-5', 'Supplier5'];
const Transporter = ['Transporter1', 'Transporter2', 'Transporter3', 'Transporter4', 'TsCode-5'];


const NewInvoice = ({navigation, route}) => {
    const [invoiceReceiveDate, setInvoiceReceiveDate] = React.useState('');
    const [invoiceDate, setInvoiceDate] = React.useState('');
    const [lrDate, setLRDate] = React.useState('');

    const [noOfParcels, setnoOfParcels] = React.useState(1);

    const [selectedSupplier, setSelectedSupplier] = React.useState('');
    const [selectedTransporter, setSelectedTransporter] = React.useState('');


    const [invoiceNum, setInvoiceNum] = React.useState('');
    const [lrNum, setLrNum] = React.useState('');

    function updateNoOfParcels(increase: boolean) {
        if (increase) {
            setnoOfParcels(noOfParcels + 1);
        } else {
            setnoOfParcels(Math.max(0, noOfParcels - 1));
        }
    }

    function updateSupplier(index: number) {
        setSelectedSupplier(Supplier[index]);
    }

    function updateTransporter(index: number) {
        setSelectedTransporter(Transporter[index]);
    }

    const onSubmit = () => {
        navigation.pop()
    };

    const onCancel = () => {
        navigation.pop()
    };


    useEffect(() => {
        if (route.params && route.params.invoice) {
            const {invoice} = route.params
            console.log(invoice);
            setLrNum(invoice.lrNo);
            setInvoiceNum(invoice.invoiceId);
            setnoOfParcels(invoice.totalParcels)
        }

    }, []);


    return (
        <ScrollView contentContainerStyle={styles.containerStyle}>
            <Text style={styles.header}>Invoice</Text>

            <Selector
                label={() => <Text style={[styles.labelStyle123]}>Supplier</Text>}
                onOptionChange={updateSupplier}
                style={styles.selectorStyle}
                defaultTitle="Select Supplier"
                options={Supplier}/>

            <Selector
                label={() => <Text style={[styles.labelStyle123]}>Transporter</Text>}
                onOptionChange={updateTransporter}
                defaultTitle="Select Transporter"
                style={styles.selectorStyle}
                options={Transporter}/>

            <Input
                placeholder='Enter Invoice Number'
                value={invoiceNum}
                size="large"
                label={() => <Text style={[styles.labelStyle123]}>Invoice number</Text>}
                style={styles.inputStyle}
                onChangeText={setInvoiceNum}
            />

            <Input
                placeholder='Enter LR number'
                value={lrNum}
                label={() => <Text style={[styles.labelStyle123]}>LR number</Text>}
                size="large"
                style={styles.inputStyle}
                onChangeText={setLrNum}
            />

            <Datepicker
                placeholder='dd/mm/yyyy'
                style={styles.inputStyle}
                date={invoiceReceiveDate}
                label={() => <Text style={[styles.labelStyle123]}>Invoice Receive date</Text>}
                size="large"
                onSelect={nextDate => setInvoiceReceiveDate(nextDate)}
                accessoryRight={<Icon name='calendar-outline'/>}
            />

            <Datepicker
                placeholder='dd/mm/yyyy'
                style={styles.inputStyle}
                date={invoiceDate}
                label={() => <Text style={[styles.labelStyle123]}>Invoice date</Text>}
                size="large"
                onSelect={nextDate => setInvoiceDate(nextDate)}
                accessoryRight={<Icon name='calendar-outline'/>}
            />

            <Datepicker
                placeholder='dd/mm/yyyy'
                style={styles.inputStyle}
                date={lrDate}
                size="large"
                label={() => <Text style={[styles.labelStyle]}>LR date</Text>}
                onSelect={nextDate => setLRDate(nextDate)}
                accessoryRight={<Icon name='calendar-outline'/>}
            />

            <Layout style={styles.counterContainer}>
                <Text>No of parcels</Text>
                <ButtonGroup style={styles.counterButtonGroup} size={'tiny'}>
                    <Button onPress={() => updateNoOfParcels(false)} accessoryLeft={<Icon name='minus'/>}/>
                    <Button size="large" style={{backgroundColor: 'transparent'}} disabled={true}>
                        {() => <Text style={[styles.labelStyle, styles.btnLabel, {
                            color: 'black',

                        }]}>{noOfParcels}</Text>}
                    </Button>
                    <Button onPress={() => updateNoOfParcels(true)} accessoryLeft={<Icon name='plus'/>}/>
                </ButtonGroup>
            </Layout>

            <Button size="large" onPress={onSubmit} style={styles.button}>
                {() => <Text style={[styles.labelStyle, styles.btnLabel]}>Submit</Text>}
            </Button>

            <Button onPress={onCancel} size="large" style={styles.button} appearance='ghost'>
                {() => <Text
                    style={[styles.labelStyle, styles.btnLabel, {color: 'black'}]}>Cancel</Text>}
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flexGrow: 1,
        alignItems: 'center',
        padding: '4%',
    },
    inputStyle: {
        width: '100%',
        color: 'black',
        marginTop: 16,
    },
    button: {
        width: '100%',
        borderRadius: 8,
        marginTop: 8,
    },
    btnLabel: {
        fontSize: 18,
        color: 'white',
    },
    counterButtonGroup: {
        margin: 2,
    },
    actionButtonGroup: {
        flexDirection: 'column',
        width: '100%',
    },
    header: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 32,
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
    labelStyle123: {
        fontSize: 13.5,
        marginBottom: 4,
    },


});


export default NewInvoice;
