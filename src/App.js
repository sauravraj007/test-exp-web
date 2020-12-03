import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>Sample Website for Experimentation</h3>
        <img src='./hero.jpg' className="App-logo" alt="logo" />
        <table>
          <tr>
            <td>
              <input class="email-txt" type='text' id='email' />
            </td>
            <td>
              <a class="signup-btn" href="https://cart.webex.com">Signup for free</a>
            </td>
          </tr>
        </table>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
