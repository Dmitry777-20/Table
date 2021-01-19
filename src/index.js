import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {connect, Provider} from "react-redux";
import store from "./store";
import {addElement, onChangeE, onChangeFN, onChangeLN, onChangeP, renderSort, setTable} from "./reducer";




let mapStateToProps = (state) => {
    return {
        table: state.state.table,
        newTextFirstName: state.state.newTextFirstName,
        newTextLastName: state.state.newTextLastName,
        newTextEmail: state.state.newTextEmail,
        newTextPhone: state.state.newTextPhone,
        pointer: state.state.pointer
    }
}


const AppContainer = connect(mapStateToProps, {
    onChangeFN, onChangeLN, onChangeE, onChangeP,
    renderSort, addElement, setTable
})(App);





ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();