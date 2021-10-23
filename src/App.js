import {ChatEngine} from 'react-chat-engine';
import ChatFeed from '../src/components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
const projectID = 'd482fde6-2ad8-4cf0-b27b-48279da66ffa';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};
export default App;