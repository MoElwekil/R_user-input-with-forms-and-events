import React, {Component} from 'react'

class SearchBar extends Component {
    state = {keywoard: ''}

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.keywoard);

    }
    render(){
        return (
            <div className='container' style={{marginTop:40}}>
                <form onSubmit={this.onFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Search</label>
                        <input type="search" className="form-control" id="exampleFormControlInput1" placeholder="Search" value={this.state.keywoard} onChange = {(event) => {
                            this.setState({keywoard: event.target.value})
                        }} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar