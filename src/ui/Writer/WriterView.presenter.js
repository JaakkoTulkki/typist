import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import TextWell from './Components/TextWell';
import { Link } from 'react-router-dom';

const WriterView = ({ text }) => {
  return (
    <div>
      <Grid className="pt-1">
        <Row>
          <TextWell text={text}/>
        </Row>
        <Row>
          <Link to="/chicken" >link to chicken</Link>
        </Row>
      </Grid>
    </div>
  );
};

WriterView.propTypes = {
  text: React.PropTypes.string,
};

export default WriterView;
