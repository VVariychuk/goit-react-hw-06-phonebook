import { createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer from './phonebook/phonebook-reducer';


const rootReducer = combineReducers({
    phonebook: phonebookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

// if we have only one reducer, we can make  this:
// const store = createStore(phonebookReducer, composeWithDevTools());

export default store;