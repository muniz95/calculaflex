import Component from 'inferno-component';
import Result from './Result.js';
import './App.css';
import masker from 'vanilla-masker'


class App extends Component {
	
	maskValue = (value) => {
		return masker.toMoney(value);
	}

  state = { result: '', highlight: 'none', alcohol: '0.00', gasoline: '0.00' };

	setAlcohol = e => 
		this.setState({ alcohol: (e.target.value < 0 ? 0 : this.maskValue(e.target.value)) })
	
	setGasoline = e => 
		this.setState({ gasoline: (e.target.value < 0 ? 0 : this.maskValue(e.target.value)) })

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
		      <input id="alcohol" type="text" className="App-input"
						value={this.state.alcohol} onKeyUp={this.setAlcohol} /><br/>
		    </p>
		    <p className="App-group">
		      <label for="gasoline">Preço da gasolina</label><br/>
		      <input id="gasoline" type="text" className="App-input"
						value={this.state.gasoline} onKeyUp={this.setGasoline} /><br/>
		    </p>
		    <p className="App-group">
		      <button onClick={this.calculate}>Calcular</button>
		    </p>
		  </div>
		);
	}
}

export default App;
