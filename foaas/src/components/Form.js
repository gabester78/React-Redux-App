import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuote } from "../store/actions/actions";

const Form = (props) => {
  useEffect(() => {
    props.fetchQuote();
  }, []);

  return (
    <div className="quoteSection">
      <h1>Current Mood 👿</h1>
      <div>
        {/* <form>
          <label htmlFor="phrases">
            <select id="phrases" name="phrases">
              <option value="bucket">So annoyed</option>
              <option value="cool">I'm not ammused</option>
              <option value="cup">Leave me alone</option>
              <option value="even">No more talking today</option>
            </select>
          </label>

          <label htmlFor="name">
            Your name:
            <input
              type="text"
              id="name"
              name="name"
              // value={form.zipcode}
              // onChange={}
            />
          </label>
          <button>Submit</button>
        </form> */}

        <h3>"{props.quote}"</h3>
        <h3>From yours truly, {props.name}</h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    name: state.name,
  };
};

export default connect(mapStateToProps, { fetchQuote })(Form);
