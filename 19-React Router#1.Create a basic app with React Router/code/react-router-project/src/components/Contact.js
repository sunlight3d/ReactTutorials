/*
 Mr Nguyen Duc Hoang,
 Youtube channel: https://www.youtube.com/c/nguyenduchoang
 Email: sunlight4d@gmail.com
 */
import React from 'react';
const Contact = ({match}) => (
    <div>
        <h3>Contact</h3>
        <h3>{`You clicked: ${match.url}`}</h3>
        <h3>{`match object details: ${JSON.stringify(match, null, 4)}`}</h3>
    </div>
);
export default Contact;