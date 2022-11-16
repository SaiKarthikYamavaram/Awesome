import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import StackContainer from './src/navigation';
import store from './src/redux/store';
import {Provider} from 'react-redux';


export default () => (
    <Provider store={store}>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider {...eva} theme={eva.light}>
            <StackContainer/>
        </ApplicationProvider>
    </Provider>
);
