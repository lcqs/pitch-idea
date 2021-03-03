import React from 'react';
import './styles.css';
import api from '../../API/api'
const users = api;

const app = () =>{   
    return(
        <div className="app">
            <ul>
                {users.map(user => {
                    return(
                        <li key={user.id}>
                            {user.first_name}
                        </li>
                    )
                 })}
            </ul>
        </div>
    )
};

export default app;