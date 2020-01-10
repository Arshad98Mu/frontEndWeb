import React from 'react'
import Navbar from './Navbar'
import ChatContent from './ChatContent'

class ChatTest extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <ChatContent />
            </div>
        );
    }
}

export default ChatTest;