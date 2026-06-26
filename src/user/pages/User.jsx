import React from "react";
import UserList from "../components/UserList";

const Users = () => {
   const USERS=[ {
     id:'u1',
     name:'Max Winget',
     image:'',
     places:3
   }]

    return <UserList  items={USERS}/>
};

export default Users;