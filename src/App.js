import './App.css';
import './normal.css';


function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className='side-menu-bottom'>
        <span>+ </span>
        New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className='chat-input-holder'>
          <textarea 
          rows="1"
          className='chat-input-textarea' 
          placeholder='Type your message here'>

          </textarea>
        </div>
      </section>

    </div>
  );
}

export default App;
