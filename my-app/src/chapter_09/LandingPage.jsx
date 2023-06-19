import React, {useState} from "react";
import Toolbar from "./Toolbar";


function LandingPage(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const onClickLogin =() =>{
        setIsLoggedIn(true);
    };

    const onClickLogout =() =>{
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar 
                isLoggedIn ={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div stlye={{padding:16}} > 소풀과 함께 공부하는 리액트 !</div>
        </div>
    );
}

export default LandingPage;