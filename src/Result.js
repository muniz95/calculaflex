import Component from 'inferno-component';

import './Result.css';

class Result extends Component {
  render({ result, highlight }) {
      return (
        <div className="Result">
          <span className={`Result-alcohol Result-${highlight === "alcohol"}`}>
            A
          </span>
          <span>&nbsp;|&nbsp;</span>
          <span className={`Result-gasoline Result-${highlight === "gasoline"}`}>
            G
          </span>
        </div>
      );
    }
  }

export default Result;
