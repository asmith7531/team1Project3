import React from "react";
import M from "materialize-css";


function Protected(props) {

    useEffect(() => {
        M.AutoInit();
    });

    return (
    <>
    <h1>protected signed in page</h1>
    </>);

}

export default Protected;