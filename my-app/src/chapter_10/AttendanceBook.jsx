import React from "react";

const students =[
    {
        id:1,
        name:  "Inje",
    },
    {
        id:2,
        name:"Steve",
    },
    {
        id:3,
        name:"minji",
    },
    {
        id:4,
        name:"yang",
    },
    {
        id:5,
        name:"yong",
    },
];

function AttendanceBook(props){
    return (
        <ul>
            {students.map((student) =>{
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );

}

export default AttendanceBook;