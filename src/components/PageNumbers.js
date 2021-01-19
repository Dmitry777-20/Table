import React from 'react';


const PageNumbers = (props) => {

    return (
        props.pages.map(p => {
            return <div className={(props.currentPage === p) ? "currentPage" : undefined}>
                <button onClick={() => props.renderPage(p)}>{p}</button>
            </div>
        })

    )
}


export default PageNumbers;