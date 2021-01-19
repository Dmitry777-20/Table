const SET_TABLE = "SET-TABLE";
const ADD_ELEMENT = "ADD-ELEMENT";
const SEND_ELEMENT_FN = "SEND-ELEMENT-FN";
const SEND_ELEMENT_LN = "SEND-ELEMENT-LN";
const SEND_ELEMENT_E = "SEND-ELEMENT-E";
const SEND_ELEMENT_P = "SEND-ELEMENT-P";
const SORT = "SORT";



let q = 0;


export const setTable = (table) => {
    return {
        type: SET_TABLE,
        text: table
    }
}




let sortDown = (field) => {
    return (a, b) => a[field] > b[field] ? -1 : 1;
}

let sortUp = (field) => {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

export const renderSort = (field) => {
    return {
        type: SORT,
        text: field
    }
}




export const addElement = () => {
    return {
        type: ADD_ELEMENT
    }
}

export const onChangeFN = (text) => {
    return {
        type: SEND_ELEMENT_FN,
        text: text
    }
}
export const onChangeLN = (text) => {
    return {
        type: SEND_ELEMENT_LN,
        text: text
    }
}
export const onChangeE = (text) => {
    return {
        type: SEND_ELEMENT_E,
        text: text
    }
}
export const onChangeP = (text) => {
    return {
        type: SEND_ELEMENT_P,
        text: text
    }
}




let initialState = {
    table: [/*
        {id: 909, firstName: "Yvette", lastName: "Dentice", email: "RSalval@massa.net", phone: "(824)279-0323",},
        {id: 997, firstName: "Patrina", lastName: "Vlasses", email: "BCompton@dolor.org", phone: "(995)958-0773",},
        {id: 955, firstName: "Marisela", lastName: "Michaels", email: "AOnatop@sed.net", phone: "(995)314-0528",},
        {id: 773, firstName: "Harpal", lastName: "Burkhardt", email: "GPark@dolor.ly", phone: "(383)603-7622",},
        {id: 274, firstName: "Darlene", lastName: "Gilbertson", email: "EHunter@odio.com", phone: "(587)931-3157",},
        {id: 736, firstName: "Prakash", lastName: "Odonoghue", email: "KLandau@ipsum.gov", phone: "(315)914-6183",},
        {id: 953, firstName: "Alexandra", lastName: "Fournier", email: "PLangille@lacus.com", phone: "(161)119-9500",},
        {id: 10, firstName: "Oshiolene", lastName: "Scribner", email: "NBurks@massa.io", phone: "(534)898-2070",},
        {id: 712, firstName: "Connie", lastName: "Fine", email: "MBonita@tortor.org", phone: "(552)255-1999",},
        {id: 920, firstName: "Venus", lastName: "French", email: "LTerry@sed.gov", phone: "(430)742-7284",},
   */],
    newTextFirstName: "",
    newTextLastName: "",
    newTextEmail: "",
    newTextPhone: "",
    pointer: undefined
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLE: {
            return { ...state, table: action.text }
        }
        case ADD_ELEMENT: {

            let newElement = {
                id: (state.table.length + 1) + 1000,
                firstName: state.newTextFirstName,
                lastName: state.newTextLastName,
                email: state.newTextEmail,
                phone: state.newTextPhone,
            }


            let copyTable = {...state};
            copyTable.table = [...state.table];
            copyTable.table.push(newElement);
            copyTable.newTextFirstName = "";
            copyTable.newTextLastName = "";
            copyTable.newTextEmail = "";
            copyTable.newTextPhone = "";

            return copyTable;
        }
        case SEND_ELEMENT_FN: {

            let copyTable = {...state};
            copyTable.newTextFirstName = action.text
            return copyTable;
        }
        case SEND_ELEMENT_LN: {

            let copyTable = {...state};
            copyTable.newTextLastName = action.text
            return copyTable;
        }
        case SEND_ELEMENT_E: {

            let copyTable = {...state};
            copyTable.newTextEmail = action.text
            return copyTable;
        }
        case SEND_ELEMENT_P: {

            let copyTable = {...state};
            copyTable.newTextPhone = action.text
            return copyTable;
        }
        case SORT: {
            let newArray;

            if (action.text === q) {
                newArray = {...state};
                newArray.pointer = {...state.pointer};
                newArray.pointer = "up" + action.text;
                newArray.table = [...state.table];
                newArray.table.sort(sortUp(action.text));
                q = 0;
            } else {
                newArray = {...state};
                newArray.pointer = {...state.pointer};
                newArray.pointer = "down" + action.text;
                newArray.table = [...state.table];
                newArray.table.sort(sortDown(action.text));
                q = action.text;
            }
            return (
                newArray
            )
        }
        default:
            return state;
    }
};

export default reducer;

