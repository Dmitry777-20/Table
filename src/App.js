import React, {useEffect, useState} from 'react';
import './App.css';
import Element from './components/Element';
import * as axios from 'axios';
import Button from "./components/Button";
import PageNumbers from "./components/PageNumbers";
import Loader from "./components/Loader";



let pageSize = 30;
let left = 0;
let right = pageSize - 1;


function App(props) {

    useEffect(() => {
        axios
            .get(' http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            .then(response => {

                let tableNew = response.data
                for (let i = 0; i < tableNew.length; i++) {
                    tableNew[i].oldId = tableNew[i].id;
                    tableNew[i].id = i;
                }

                props.setTable(tableNew)
                setLoading(false)
            })
    }, [])


    // state loading
    const [loading, setLoading] = useState(true);


    // создание массива количества страниц


    let pagesCount = Math.ceil(props.table.length / pageSize);


    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    if ((right - left) < (pageSize - 1)) {
        right += 1;
    }


    let arr = [];
    if (props.table.length !== 0) {
        if (right >= props.table.length) {
            right = props.table.length - 1;
        }

        for (let i = left; i <= right; i++) {
            arr.push(props.table[i]);
        }
    }





    // state для вывода полных данных о пользователе


    const [fullInfo, setFullInfo] = useState({});
    let func = (r) => {
        return setFullInfo(r);
    }





    let Elements = arr.map(p => <Element name={p} func={func} key={p.id}/>);


    // state для постраничного вывода


    const [currentPage, setCurrentPage] = useState(1)


    let pageFunc = (i, p) => {
        if (p === i) {
            left = (i - 1) * pageSize;
            right = left + pageSize - 1;
            return [left, right]
        }
    }

    let renderPage = (p) => {
        for (let i = 1; i <= pagesCount; i++) {
            pageFunc(i, p)
        }
        return (
            [setCurrentPage(p), left, right]
        )
    }




    let onChangeFirstName = (e) => {
        let text = e.target.value;
        props.onChangeFN(text)
    }

    let onChangeLastName = (e) => {
        let text = e.target.value;
        props.onChangeLN(text)
    }

    let onChangeEmail = (e) => {
        let text = e.target.value;
        props.onChangeE(text)
    }
    let onChangePhone = (e) => {
        let text = e.target.value;
        props.onChangeP(text)
    }

    let renderSort = (field) => {
        props.renderSort(field)
    }
console.log(fullInfo.address)
    return (
        <div>
            <div className="table">
                <table>
                    <thead>
                    <tr>
                        <Button pointer={props.pointer} renderSort={renderSort} name={'firstName'}/>
                        <Button pointer={props.pointer} renderSort={renderSort} name={'lastName'}/>
                        <Button pointer={props.pointer} renderSort={renderSort} name={'email'}/>
                        <Button pointer={props.pointer} renderSort={renderSort} name={'phone'}/>
                    </tr>
                    <tr>
                        <td><input type="text" value={props.newTextFirstName} onChange={onChangeFirstName}/></td>
                        <td><input type="text" value={props.newTextLastName} onChange={onChangeLastName}/></td>
                        <td><input type="email" value={props.newTextEmail} onChange={onChangeEmail}/></td>
                        <td><input type="tel" value={props.newTextPhone} onChange={onChangePhone}/></td>
                    </tr>
                    </thead>
                    <tbody>
                    {Elements}
                    </tbody>
                </table>
                <button className="buttonAdd" onClick={() => props.addElement()}>Добавить</button>
            </div>
            <div className="pageNumbers">
                <PageNumbers pages={pages} renderPage={renderPage} currentPage={currentPage}/>
            </div>
            <div className="fullInfo">
                Выбран пользователь: <b>{fullInfo.firstName} {fullInfo.lastName} {fullInfo.id}</b><br/>
                {fullInfo.description}
            </div>
            {loading && <Loader/>}
        </div>
    )
}

export default App;