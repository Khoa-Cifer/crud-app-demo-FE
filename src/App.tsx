import { Container } from 'react-bootstrap'
import './App.scss'
import Header from './components/Header'
import TableUsers from './components/TableUsers'
import { Bounce, ToastContainer } from "react-toastify";

function App() {


  return (
    <>
      <div className='app__container'>
        <Header />
        <Container>
          <TableUsers />
        </Container>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
