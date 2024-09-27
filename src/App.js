
// import './App.css';
// import Biodata from './components/Biodata/biodata'
// import Navbar from './components/Navbar/navbar';
// import Hero from './components/Hero/hero';
// import Footer from './components/Footer/footer';
// import Contact from './components/Contact/contact';
// import About from './components/About/about';
// import HandlingFunction from './components/HandlingFunction';
// import HandlingClass from './components/HandlingClass';
// import IfCondition from './components/IfCondition';
// import Biodata from './components/Biodata/biodata';
import ToDoList from './components/todolist/todolist';

function App() {
  return (
    <div className="App">
      {/* <Navbar name="Reynamarie" lastname="Dailia"/>
      <Hero message="ILY"/>
      <About/>
      <Contact/>
      <Footer/>
      <HandlingFunction />
      <HandlingClass />
      <IfCondition isGoal={true} /> */}
     {/*<Biodata  name='Reynamarie' lastname='Dailia'
      Mobile ='09*********'
      Email ='dailiareynamarie@gmail.com'
      Gender='Female'
      Birthdate='November. 10, 2001'
      Father ='Rene S. Dailia'
      Mother ='Marichu L. Dailia'/>*/}
      <ToDoList />      
    </div>
  );
}

export default App;