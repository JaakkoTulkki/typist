import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import Col from 'react-bootstrap/lib/Col';
import TextWell from './Components/TextWell';

const WriterView = () => {
  return (
    <div>
      <Grid className="pt-1">
        <Row>
          <TextWell />
        </Row>
      </Grid>
    </div>
  );
};

export default WriterView;
