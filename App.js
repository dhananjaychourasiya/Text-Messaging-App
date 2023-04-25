import React from 'react';
import './styles.css';
 
// don't change the Component name "App"
export default function App() {
    const [newMessage, setNewMessage] = React.useState('');
    
    const onInputChange = (e) => {
        setNewMessage(e.target.value);
    }
    
    return (
        <form>
            <label>Your message</label>
            <input onChange={onInputChange} type="text" />
            <p>{newMessage.trim().length < 3 ? 'Invalid' : 'Valid'} message</p>
        </form>
    );
}