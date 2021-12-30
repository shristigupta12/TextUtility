import './App.css'; 
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import PropTypes from 'prop-types'
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <>
    <Navbar title="Textutils" aboutText="About"/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyse"/>
      {/* <AboutUs></AboutUs> */}
    </div>
    </>
    );
}
Navbar.PropTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}
Navbar.defaultProps = {
  title : 'Set title here',
  aboutText: 'Write about text here'
}

export default App;
