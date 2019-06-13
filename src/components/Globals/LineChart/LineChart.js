import React, { PureComponent } from 'react'
import { VictoryLine } from 'victory';
import moment from 'moment';

let count = 0;

const data = [
  { price: 10000 },
  { price: 9000 },
  { price: 7500 },
  { price: 9000 },
  { price: 7700 },
  { price: 12000 },
  { price: 13000 }
]

class LineChart extends PureComponent {
  state = {
    today: new Date().getTime(),
    max: 0,
    min: 0
  }

  componentWillMount() {
    this.findMax()
    this.findMin()
  }


  findMax = () => {
    const arr = data.map(d => d.price / 1000);
    const max = Math.max(...arr);
    return this.setState({
      max
    })
  }

  findMin = () => {
    const arr = data.map(d => d.price / 1000);
    const min = Math.min(...arr);
    return this.setState({
      min
    })
  }

  render() {
    const { min, max } = this.state;
    let count = 1;
    const newData = data.map(d => {
      const container = {};

      container.y = d.price / 1000;
      container.x = count++

      return container;
    })

    console.log(newData)
    return (
      <div style={{ backgroundColor: '#343434', height: '100%', position: 'relative' }}>
        <span style={{ position: 'absolute', top: '0', left: '2px', color: 'white', fontSize: '.75em' }}>high - ${(max * 1000).toLocaleString()}</span>
        <span style={{ position: 'absolute', bottom: '0', right: '2px', color: 'white', fontSize: '.75em' }}>low - ${(min * 1000).toLocaleString()}</span>
        { /* <VictoryChart
          animate={{ duration: 2000 }}
          height={150}
        > */ }

        <VictoryLine
          animate={{ duration: 2000 }}
          height={70}
          style={{
            data: { stroke: "4aff00" },
            parent: { border: "1px solid gold", height: '70px' },
          }}

          responsive={false}

          minDomain={{ y: min, x: 1 }}
          maxDomain={{ y: max, x: 7 }}
          padding={10}

          data={newData}

        // data={[
        //   { x: 1, y: 2 },
        //   { x: 2, y: 3 },
        //   { x: 3, y: 4 },
        //   { x: 4, y: 7 },
        //   { x: 5, y: 4 },
        //   { x: 6, y: 3 },
        //   { x: 7, y: 13.5 }
        // ]}

        />
        { /* <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            style={{
              tickLabels: { fontSize: 15, padding: 5, fill: 'blue' }
            }}
            tickFormat={
              [
                moment(this.state.today).subtract(6, 'days').format('MM/DD'),
                moment(this.state.today).subtract(5, 'd').format('MM/DD'),
                moment(this.state.today).subtract(4, 'days').format('MM/DD'),
                moment(this.state.today).subtract(3, 'days').format('MM/DD'),
                moment(this.state.today).subtract(2, 'days').format('MM/DD'),
                moment(this.state.today).subtract(1, 'days').format('MM/DD'),
                moment(this.state.today).format('MM/DD')
              ]
            }
          />
        </VictoryChart> */ }
      </div>
    )
  }
}

export default LineChart;