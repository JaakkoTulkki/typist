import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import TextWell from './Components/TextWell';
import { Link } from 'react-router-dom';

class WriterView extends React.Component {
  render() {
    return (
      <div>
        <Grid className="pt-1">
          <Row>
            <TextWell text={this.props.text}/>
          </Row>
          <Row>
            <Link to="/chicken" >link to chicken</Link>
          </Row>
        </Grid>
      </div>
    );
  }
};

WriterView.propTypes = {
  text: React.PropTypes.string,
};

export default WriterView;
