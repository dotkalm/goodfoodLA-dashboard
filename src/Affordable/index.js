import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Affordable extends Component {

  state = {
    chartData: {
      labels: ['Adults living at 0-199% FPL', 'All adults'],
      datasets: [
        {
          label: "Fruit & Vegetable Accessibility",
          data: [
            81.9, 79.7
          ],
          backgroundColor:[
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)'
          ]
        }
      ]
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    //submit data to db
  }

  render() {

    console.log(this.props.data, 'this.props in affordable')
    return(
      <div>
          
          <Bar
            data={this.state.chartData}
            width={800}
            height={500}
            options={{maintainAspectRatio: false , responsive:false}}
          />

        {/* <div className="foodInsecurity">
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
        </div> */}

      </div>
    )
  }
}

export default Affordable;