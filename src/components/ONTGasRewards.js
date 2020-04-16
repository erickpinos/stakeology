import React from 'react';

export default class ONTGasRewards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ontPrice: .40,
      ongPrice: .084,
      ontAmount: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {

    var ontValue = this.state.ontAmount * this.state.ontPrice;
    var roi = .33;
    var ongRoi = roi * this.state.ontAmount;
    var ongUsdRoi = ongRoi * this.state.ongPrice;

      return (
        <React.Fragment>
        <div>
          RATES
        </div>
        <div>
          ONT = ${this.state.ontPrice}
        </div>
        <div>
          ONG = ${this.state.ongPrice}
        </div>
        <div>
          ENTER ONT AMOUNT
        </div>
        <form onSubmit={this.handleSubmit}>
          <input name="ontAmount" type="number" value={this.state.ontAmount} onChange={this.handleChange} required/>
{/*          <button type="submit">Submit</button> */}
        </form>
        <div>
          ONT Owned: {this.state.ontAmount}
        </div>
        <div>
          ONT USD Value: {ontValue}
        </div>
        <div>
          ONG Per Year: {ongRoi}
        </div>
        <div>
          USD Value Per Year: {ongUsdRoi}
        </div>
        <div>
          ROI: 3.33%
        </div>
        </React.Fragment>
      );
  };
}
