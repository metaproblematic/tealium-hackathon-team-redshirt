import React, { Component } from 'react'
import axios from "axios";

export class Data extends Component {

  state = {
    error: null,
    isLoaded: false,
    visitors: []
    
  }

  componentDidMount() {
    axios.get("https://e2nkh9bvqg.execute-api.us-east-2.amazonaws.com/prod/visitorSampler?count=100",
    ).then(
      (result) => {
        console.log(result)
        this.setState({
          isLoaded: true,
          visitors: result.data
        });
      
        console.log(this.state.attributes)
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )

  }

  render() {
    const { error, isLoaded, visitors } = this.state;
    // console.log(persons)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <h1>Platinum Tier</h1>
          <h3>What</h3>
          <ul>
            {visitors.map(item => (
              <li key={item.metrics.lat}>
                  
                <h1>{item.audiences}</h1>

              </li>
            ))}
          </ul>
        </>
      );
    }
  }
}

export default Data
