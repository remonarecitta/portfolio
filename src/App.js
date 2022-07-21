import logo from './Photograph.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='main-div'>
        <h5>Remona Recitta Mary</h5>
        <p className='title'>FrontEnd Developer</p>
        <button className='email'>
        <i class="fa fa-envelope" aria-hidden="true"></i>
          Email</button>
          <button className='linkedin'>
          <i class="fa fa-linkedin" aria-hidden="true"></i>
          Linkedin</button>
          <p className='header'>About</p>
          <p className='about-content'>To work with maximum potential in a challenging and dynamic environment using emerging technologies.</p>
          <p className='interest'>Interests</p>
          <p className='interest-content'> Music, Social Work, Politics, Books</p>
</div>
      </div>
      <div className='footer'>
      <i class="fa fa-linkedin" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default App;
