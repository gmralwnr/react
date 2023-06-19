import React from "react";
import Notification from "./Notification";

const reservedNotifications =[
    {
        id:1,
        message : "안녕하세요 오늘 일정입니다",

    },
    {   
        id:2,
        message:"점심식사 시간입니더ㅏ",
    },
    {
        id:3,
        message: "이제 곧 미팅이 시작 됩니단"
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notifications:[],
        };
    }

    componentDidMount(){
        const{notifications} = this.state;
        console.log("값", notifications ," this.state" , this.state )
        timer = setInterval(()=>{
            if(notifications.length  < reservedNotifications.length){
                const index = notifications.length;
                console.log("출력" , index, reservedNotifications  , notifications)

                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications:notifications,
                });
            }else{
                this.setState({
                    notifications:[],
                });
                
                clearInterval(timer);
            }
        },1000);
    }

    render(){
        return (
            <div>
                {this.state.notifications.map((notification) =>{
                    return (
                    <Notification key={notification.id} 
                    id={notification.id}
                    message={notification.message}>;
                    </Notification>
                    );
                })}
            </div>
        );
    }
}
export default NotificationList;
