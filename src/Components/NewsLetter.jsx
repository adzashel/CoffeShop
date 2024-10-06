import { Alert } from "react-bootstrap";
import coffee from '../assets/img/cutedcoffee.png'

const NewsLetter = ({ onValidated, status, message }) => {
  let input;

  // handle subscribe
  const handleSubmit = (e) => {
    e.preventDefault();
    input &&
      input.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: input.value,
      });
  };
  return (
    <div className="form-section">
        <div className="form-img">
            <img src={coffee} alt="Coffee Shop" />
        </div>
      <div className="form-container">
        <div className="form-banner">
          <h3>
            Join in and <span>get 25% OFF</span>
          </h3>
          <p>
            Subscribe to Our NewsLetter and get %25 OFF Discount Code
          </p>
          {status === "sending" && <Alert>Sending...</Alert>}
          {status === "error" && <Alert variant="danger">{message}</Alert>}
          {status === "success" && <Alert variant="success" className="alert-success">{message}</Alert>}
        </div>
        <div className="form">
          <form>
            <div className="new-email-bx">
              <input
                ref={(node) => (input = node)}
                type="email"
                placeholder="Email Address"
              />
              <button onClick={handleSubmit} type="button" className="btn-subs">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
