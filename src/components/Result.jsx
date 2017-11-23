import './Result.css';

const Result = ({ highlight }) => (
  <div className="Result">
    <div className={`Result-alcohol Result-${highlight === "alcohol"}`}>
      A
    </div>
    <div className={`Result-gasoline Result-${highlight === "gasoline"}`}>
      G
    </div>
  </div>
)

export default Result
