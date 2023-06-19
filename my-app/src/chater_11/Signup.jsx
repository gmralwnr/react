import React, {useState} from "react";

function SignUp(props){
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");

    const handleChangeGender =(event) =>{
        setGender(event.target.value);
    };

    const handleChangeName =(event) =>{
        setName(event.target.value);
        console.log(event.target.value)
    };

    const handleSubmit =(event) =>{
        if(`${name}` ){
            alert(`이름 : ${name}, 성별 ${gender}` );
            console.log(`제출 :${name}`)
            event.preventDefault();
        }else{
            alert("이름을 입력하세욮!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 : 
                <input type="text" value={name} onChange={handleChangeName}/>
            </label>
            <br/>
            <label for="woman" onChange={handleChangeGender} >
                <input type="radio" id="woman" name="cha" value="여자"/>
                 여자
            </label>
            <label  for="man"  onChange={handleChangeGender} >
                <input type="radio" id="man" name="cha" value="남자" checked />
                 남자
            </label>

            <br/>
            <button type="submit">제출 </button>
        </form>
    )
}

export default SignUp;

