import React from 'react';

function Credentials(props) {
    return (
        <div style={{textAlign: 'right'}}>Username: {props.username} - Roles: {props.roles}</div>
    );
}

export default Credentials;
