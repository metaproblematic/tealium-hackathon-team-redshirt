import React, { Component } from 'react'
import axios from "axios";

export class Data extends Component {

  state = {
    error: null,
    isLoaded: false,
    visitors: [],
    bigSpenders: 0,
    nonBigSpenders:0,
    bigSpenderTotal: 0,
    nonBigSpenderTotal: 0
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

      // ** BIG SPENDERS ** // 
      let BigSpender = visitors.filter(visitor => visitor.audiences[0].includes("Big Spender")
      ).map(visitor => <h1>{visitor.audiences[0]}</h1>)
      let itemValue = visitors.filter(visitor => visitor.audiences[0].includes("Big Spender")
      ).map(visitor => <p>Item Value:{visitor.metrics['Average Purchase Value']}</p>)
      let AvgValue = visitors.filter(visitor => visitor.audiences[0].includes("Big Spender")
      ).map(visitor => <p>Average Value Per Visit: {visitor.metrics['Average Value Per Visit']}</p>)
      let lifeTimeValue = visitors.filter(visitor => visitor.audiences[0].includes("Big Spender")
      ).map(visitor => <p>Average Lifetime Total Value: {visitor.metrics["Lifetime total value"]}</p>)

      // ** NON BIG SPENDERS ** //

      let nonBigSpender = visitors.filter(visitor => !visitor.audiences[0].includes("Big Spender")
      ).map(visitor => <h1>{visitor.audiences[0]}</h1>)
      let NBitemValue = visitors.filter(visitor => !visitor.audiences[0].includes("Big Spender")
      ).map(visitor => <p>Item Value: {visitor.metrics['Average Purchase Value']}</p>)
      let NBAvgValue = visitors.filter(visitor => !visitor.audiences[0].includes("Big Spender")
      ).map(visitor => <p>Average Value Per Visit: {visitor.metrics['Average Value Per Visit']}</p>)
        let NBLifeTimeValue = visitors.filter(visitor => !visitor.audiences[0].includes("Big Spender")
      ).map(visitor => <p>Average Lifetime Total Value: {visitor.metrics["Lifetime total value"]}</p>)

        console.log(BigSpender)
        
        
      return (
        <>

          <ul>
              <li>{BigSpender}</li>
              <li>{itemValue}</li>
              <li>{AvgValue}</li>
              <li>{lifeTimeValue}</li>
          </ul>
          <ul>
            <p>{nonBigSpender}</p>
            <p>{NBitemValue}</p>
            <p>{NBAvgValue}</p>
            <p>{NBLifeTimeValue}</p>
          </ul>
        </>
      );
    }
  }
}

export default Data
