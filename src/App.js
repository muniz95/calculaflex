import Component from 'inferno-component';
import Result from './Result.js';
import './App.css';

class App extends Component {

  state = { result: '', highlight: 'none', alcohol: undefined, gasoline: undefined };

	setAlcohol = e => 
		this.setState({ alcohol: (e.target.value < 0 ? 0 : e.target.value) })
	
	setGasoline = e => 
		this.setState({ gasoline: (e.target.value < 0 ? 0 : e.target.value) })

	parseValue = (value) => Number.parseFloat(value.replace(',', '.'))
	
	calculate = () => {
		const { alcohol, gasoline } = this.state;
		const cx = this.parseValue(alcohol) / this.parseValue(gasoline);
		const result = cx < 0.7 ? 'A' : 'G';
		const highlight = cx < 0.7 ? 'alcohol' : 'gasoline';
		this.setState({
		  result: result,
		  highlight: highlight
		})
	}
	
	render() {
		return (
		  <div className="App">
		    <div className="App-header">
		      <Result result={this.state.result} highlight={this.state.highlight} />
		    </div>
		    <p className="App-group">
		      <label for="alcohol">Preço do álcool</label><br/>
					<input id="alcohol" type="number" className="App-input"
						value={this.state.alcohol} onChange={this.setAlcohol} /><br/>
		    </p>
		    <p className="App-group">
		      <label for="gasoline">Preço da gasolina</label><br/>
		      <input id="gasoline" type="number" step="0.01" className="App-input"
						value={this.state.gasoline} onChange={this.setGasoline} /><br/>
		    </p>
		    <p className="App-group">
		      <button onClick={this.calculate}>Calcular</button>
		    </p>
		  </div>
		);
	}
}

export default App;
