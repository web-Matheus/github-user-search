import { BiSearch } from 'react-icons/bi'
import { CiLocationOn } from 'react-icons/ci';
import { FiLink, FiTwitter } from 'react-icons/fi'
import { BsBuilding } from 'react-icons/bs'
import './App.css';

function App() {

  return (
    <div>
      <nav>
        <form>
          <BiSearch/><input type="text" 
           placeholder="Search Github username..."/>
        </form>
      </nav>
      <section className='container'>
        <section>
          <h3>The Octocat</h3>
          <strong>Joined 25 jan 2020</strong>
        </section>
        <p className='p-marcação'>@Octocat</p>
        <p className='p-bio'>This profile has no bio</p>
        <div className='repo'>
          <div>
            <h2>Repo</h2>
            <p>29</p>
          </div>
          <div>
            <h2>Repo</h2>
            <p>29</p>
          </div>
          <div>
            <h2>Repo</h2>
            <p>29</p>
          </div>
        </div>
        <footer>
          <div>
           <p> <CiLocationOn/> San francisco</p>
           <p>< FiLink/> San francisco</p>
          </div>
          <div>
          <p>< FiTwitter/> San francisco</p>
          <p>< BsBuilding/> San francisco</p>
          </div>
          
        </footer>
      </section>
    </div>
  );
}

export default App;
