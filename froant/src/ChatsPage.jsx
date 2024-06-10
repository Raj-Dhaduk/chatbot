import {PrettyChatWindow}from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
   

  return (
      <div style={{ height: '100vh' }}>
          <PrettyChatWindow
              projectId='749083d5-0447-4251-8d6c-6caea8d95341'
              username={props.user.username}
              secret={props.user.secret}
              style={{ height: '100%' }}    
          />

    </div>
  )
}

export default ChatsPage