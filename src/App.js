import React from 'react'
import CartContainer from './components/CartContainer'
import Modal from 'react-modal'

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <CartContainer />
    </div>
  );
}

export default App
