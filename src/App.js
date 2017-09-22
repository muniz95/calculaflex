import Component from 'inferno-component';
import Result from './Result.js';
import './App.css';

class App extends Component {
  state = { result: '', highlight: 'none', alcohol: undefined, gasoline: undefined };

	setAlcohol = e => {
		const value = Number.parseFloat(e.target.value);
		this.setState({ alcohol: (value < 0 ? 0 : value) });
	}
	
	setGasoline = e => {
		const value = Number.parseFloat(e.target.value);
		this.setState({ gasoline: (value < 0 ? 0 : value) });
	}
	
	calculate = () => {
		const { alcohol, gasoline } = this.state;
		const cx = alcohol / gasoline;
		const result = cx < 0.7 ? 'A' : 'G';
		const highlight = cx < 0.7 ? 'alcohol' : 'gasoline';
		this.setState({
		  result: result,
		  highlight: highlight
		})
		console.log(this.state);
	}
	
	render() {
		return (
		  <div className="App">
		    <div className="App-header">
		      <Result result={this.state.result} highlight={this.state.highlight} />
		    </div>
		    <p className="App-intro">
		      <label for="alcohol">Preço do álcool</label><br/>
		      <input id="alcohol" type="number" value={this.state.alcohol} onChange={this.setAlcohol} /><br/>
		      <label for="gasoline">Preço da gasolina</label><br/>
		      <input id="gasoline" type="number" value={this.state.gasoline} onChange={this.setGasoline} /><br/>
		      <button onClick={this.calculate}>Calcular</button>
		    </p>
		  </div>
		);
	}
}

export default App;
