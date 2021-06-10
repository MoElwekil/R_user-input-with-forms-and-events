import React, {Component} from 'react'

// Serach Bar
import SearchBar from './SearchBar'

class App extends Component {
    onSearchSubmit(event){
        console.log(event)
    }
    render(){
        return (
            <div className='container' style={{marginTop:40}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App