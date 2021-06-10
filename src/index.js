import React from 'react'
import ReactDOM from 'react-dom'

// Components
import App from './Compnents/App'

const Index = () => {
    return(
        <div>
            <App />
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));