import React from "react";

class ComfirmButton extends React.Component{
    constructor(props){ //생성자 constructor
        super(props);

        this.state = {
            isConfirmed: false,
        };
       // this.handleConfirm = this.handleConfirm.bind(this);
    }
   /* handleConfirm(){
        this.setState((prevState) =>({
            isConfirmed: !prevState.isConfirmed,
        }));
    }
    */
   handleConfirm = () =>{
       this.setState((prevState) =>({
            
            isConfirmed: !prevState.isConfirmed,
        }));
    }
    
    render(){
        console.log("출력" , this.state.isConfirmed )
        return( 
        <button 
            onClick={this.handleConfirm}
            disabled = {this.state.isConfirmed} //<!--비활성화 됨 -->
        >
            {this.state.isConfirmed ? "확인 됨" :"확인하기"}    
        </button>
        );
    }
}
export default ComfirmButton;
