import React, { forwardRef } from 'react'
import {Card, CardContent, Typography } from '@material-ui/core'
import './Message.css'
const Message =({message,username})=> {
     const isUser= username === message.username;
    return (
      <div   className={`message__card ${isUser && 'message__user'} `}>
        <Card className={isUser ? 'message__userCard': 'message__guestCard'}>
            <CardContent>
                
                <Typography
                  variant="body2"
                  component="p"
                >
                {!isUser && `${message.username }: `}{message.message}
                </Typography>
            </CardContent>
        </Card>
      </div>
           
            
        
    )
} ;

export default Message
