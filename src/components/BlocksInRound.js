import React from 'react';
import { client } from 'ontology-dapi';

client.registerClient({});

export default class BlocksInRound extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blockHeight: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.onGetBlockHeight();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  async onGetBlockHeight() {
    try {
      const height = await client.api.network.getBlockHeight();
      console.log(height);
      this.setState({
        blockHeight: height
      });
    } catch(e) {
      console.log(e);
    }
  }

  render() {

    var round51Start = 8154319;

    var thisRoundHeight = this.state.blockHeight - round51Start;
    console.log('blockHeight', this.state.blockHeight);
    console.log('round51Start', round51Start);
    console.log('thisRoundHeight', thisRoundHeight);

    var blocksPerRound = 60000;
    var blocksRemaining = blocksPerRound - thisRoundHeight;
    var hoursPerBlock = 0.0048;
    var daysRemaining = (blocksRemaining * hoursPerBlock) / 24;
    var hoursRemaining = (blocksRemaining * hoursPerBlock) % 24;

      return (
        <React.Fragment>
        <div>
          STAKING ROUND
        </div>
        <div>
        {thisRoundHeight} / {blocksPerRound}
        </div>
        <div>
        {blocksRemaining} blocks remaining
        </div>
        <div>
        {daysRemaining} days {hoursRemaining} hours remaining (estimate)
        </div>
        </React.Fragment>
      );
  };
}
