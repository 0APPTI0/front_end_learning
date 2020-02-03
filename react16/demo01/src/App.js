import React, {Component} from 'react'


class App extends Component {
    render() {
      return (
        <ul className='my-list'>
            <li>{true?'1':'2'}</li>
            <li>I Lov</li>
        </ul>
      );
    }
  }

export default App