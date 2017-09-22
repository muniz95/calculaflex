import Component from 'inferno-component';
import Result from './Result.js';
import './App.css';

class App extends Component {
  state = { result: '', highlight: 'none', alcohol: 0, gasoline: 0 };

	setAlcohol = e => {
		this.setState({ alcohol: e.target.value });
	}
	
	setGasoline = e => {
		this.setState({ gasoline: e.target.value });
	}
	
	calculate = () => {
		let { alcohol, gasoline } = this.state;
		let cx = alcohol / gasoline;
		let result = cx < 0.7 ? 'A' : 'G';
		let highlight = cx < 0.7 ? 'alcohol' : 'gasoline';
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
