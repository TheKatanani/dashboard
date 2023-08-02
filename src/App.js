import './App.css';
import NavBar from './Component/NavBar'
import Search from './Component/Search'
import Title from './Component/Title'
import Dashboard from './Component/Dashboard'
import Settings from './Component/Settings'
import Profile from './Component/Profile'
import Projects from "./Component/Project"
import Courses from "./Component/Courses"
import Friends from "./Component/Friends"
import Files from "./Component/Files"
import Plans from "./Component/Plans"

import { Routes , Route } from "react-router-dom"

function App() {
  return (
    <div className="App">

          <div className='row m-0'>
              <NavBar/>
            <div className='row  ps-5 m-0'>
              <div className='p-0'>
              <Search/>
              </div>
                  <Routes>
                    <Route path="/"
                      element={
                        <>
                        <Title title="Dashboard"/>
                        <Dashboard/>
                        </>
                      }
                    />
                    <Route path="/Settings"
                      element={
                        <>
                        <Title title="Settings"/>
                        <Settings/>
                        </>
                      }
                    />
                    <Route path="/Profile"
                      element={
                        <>
                        <Title title="Profile"/>
                        <Profile/>
                        </>
                      }
                    />
                    <Route path="/Projects"
                      element={
                        <>
                        <Title title="Projects"/>
                        <Projects/>
                        </>
                      }
                    />
                    <Route path="/Courses"
                      element={
                        <>
                        <Title title="Courses"/>
                        <Courses/>
                        </>
                      }
                    />
                    <Route path="/Friends"
                      element={
                        <>
                        <Title title="Friends"/>
                        <Friends/>
                        </>
                      }
                    />
                    <Route path="/Files"
                      element={
                        <>
                        <Title title="Files"/>
                        <Files/>
                        </>
                      }
                    />
                    <Route path="/Plans"
                      element={
                        <>
                        <Title title="Plans"/>
                        <Plans/>
                        </>
                      }
                    />
                    </Routes>
              </div>
            </div>
          </div>
  
  );
}

export default App;    

//content overflow-scroll  ps-4