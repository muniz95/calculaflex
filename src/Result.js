import Component from 'inferno-component';

import './Result.css';

class Result extends Component {
  render({ result, highlight }) {
      return (
        <div className="Result">
          <div className={`Result-alcohol Result-${highlight === "alcohol"}`}>
            A
          </div>
          <div className={`Result-gasoline Result-${highlight === "gasoline"}`}>
            G
          </div>
        </div>
      );
    }
  }

export default Result;
