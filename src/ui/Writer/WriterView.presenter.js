import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import TextWell from './Components/TextWell';
import { Link } from 'react-router-dom';

class WriterView extends React.Component {
  render() {
    const {
      start,
      underlinedWord,
      rest,
      increasePosition
    } = this.props;
    return (
      <div>
        <Grid className="pt-1">
          <Row>
            <TextWell increasePosition={increasePosition} start={start} underlinedWord={underlinedWord} rest={rest} />
          </Row>
          <Row>
            <Link to="/chicken" >link to chicken</Link>
          </Row>
          <button onClick={this.props.action}>chicken</button>
        </Grid>
      </div>
    );
  }
};

WriterView.propTypes = {
  start: React.PropTypes.string,
  underlinedWord: React.PropTypes.string,
  rest: React.PropTypes.string,
  increasePosition: React.PropTypes.func,
};

export default WriterView;
