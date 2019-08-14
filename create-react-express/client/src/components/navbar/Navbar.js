import React from 'react';
const style = {
    navStyle: {
        background: 'yellow',
        height: "10vh",
        width: "100%",
        marginTop: 0,
        paddingTop: 0,
        textAlign: "right",
        position: "fixed",
        top: "0",
        left: "5",
        borderBottom: "3px, solid, black",
        borderTop: "3px, solid, black",
    }
}
function Navbar() {

    return (<div>
        <p class="right">Chloe By Design</p>

        <nav style={style.navStyle} >
            <p>Up here is where the Cart icon will appear</p></nav>
    </div>
    );
}
export default Navbar;