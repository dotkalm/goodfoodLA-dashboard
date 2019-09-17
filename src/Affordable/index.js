import React, { Component } from 'react';

class Affordable extends Component {

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    //submit data to db
  }

  render() {
    
    return(
      <div>
          
        <div className="foodInsecurity">
          <form onSubmit={this.onSubmit}>
            <h3>Food Insecurity</h3>
            <h4>Households living at 0-99% FPL</h4>
            Enter Number
            <input 
            type="text"
            name=""
            value=""
            onChange={this.onChange}
            />
            <br/>Source
            <input 
            type="text"
            name=""
            value=""
            onChange={this.onChange}
            />
            <br/><button onSubmit={this.onSubmit}>Submit</button>
            <h4>Households living at 100-199% FPL</h4>
            Enter Number
            <input 
            type="text"
            name=""
            value=""
            onChange={this.onChange}
            />
            <br/>Source
            <input 
            type="text"
            name=""
            value=""
            onChange={this.onChange}
            />
            <br/><button onSubmit={this.onSubmit}>Submit</button>
            <h4>Households living at 200-299% FPL</h4>
            Enter Number
            <input 
            type="text"
            name=""
            value=""
            onChange={this.onChange}
            />
            <br/>Source
            <input 
            type="text"
            name=""
            value=""
            onChange={this.onChange}
            />
            <br/><button onSubmit={this.onSubmit}>Submit</button>
          </form>
        </div>

      </div>
    )
  }
}

export default Affordable;