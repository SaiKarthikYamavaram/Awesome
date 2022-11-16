import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        modelVisible: false,
        branchData: [
            'branch1',
            'branch2',
            'branch3',
            'branch4',
            'branch5',
            'branch6',
            'branch7',
            'branch8',
            'branch9',
            'branch10',
        ],
        currentBranch: null,
    },
    reducers: {
        showBottomSheet: (state) => {
            state.modelVisible = true;
            console.log('modal visibility ' + state.modelVisible);
        },
        hideBottomSheet: (state) => {
            state.modelVisible = false;
            console.log('modal visibility ' + state.modelVisible);
        }, setCurrentBranch: (state, action) => {
            state.currentBranch = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {showBottomSheet, hideBottomSheet, setCurrentBranch} = counterSlice.actions;

export default counterSlice.reducer;
