import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/home'
import Login from './Pages/Login/login'
import Editcourse from './Pages/Editcourse/editcourse'
import Addcourse from './Pages/AddCourse/addcourse'
import Viewcourse from './Pages/ViewCourse/viewcourse'
import NavBar from './components/NavBar/navBar'
import DeleteCourse from './Pages/deleteCourse/deleteCourse'
function App() {
 

  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editcourse/:id" element={<Editcourse />} />
          <Route path="/addcourse" element={<Addcourse />} />
          <Route path="/viewcourse/:id" element={<Viewcourse />} />
          <Route path="/delete/:id" element={<DeleteCourse />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
