import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import Well from 'react-bootstrap/lib/Well';
import Button from 'react-bootstrap/lib/Button';

import { Link } from 'react-router-dom';

class WriterView extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toggleEventListener = this.toggleEventListener.bind(this);
    this.state = {
      eventListenerOn: false,
    }
  }

  toggleEventListener() {
    if (this.state.eventListenerOn) {
      document.removeEventListener("keydown", this.handleKeyPress);
    } else {
      document.addEventListener('keydown', this.handleKeyPress);
    }
    this.setState({eventListenerOn: !this.state.eventListenerOn});
  }

  handleKeyPress(event){
    const key = event.key;
    const currentWord = this.props.underlinedWord;
    if(key === currentWord) {
      this.props.increasePosition();
    }
  }

  render() {
    const {
      start,
      underlinedWord,
      rest,
    } = this.props;
    return (
      <div>
        <Grid className="pt-1">
          <Row>
            <Well bsSize="lg">
              <div className="writing-area">
                {start}
                {this.state.eventListenerOn &&
                  <mark>{underlinedWord}</mark>
                }
                {!this.state.eventListenerOn &&
                  underlinedWord
                }
                {rest}
              </div>
            </Well>
          </Row>
          <Row>
            <div className="button" onClick={() => this.toggleEventListener()}><p>{this.state.eventListenerOn ? 'Stop' : 'Start'} writing</p></div>
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
  start: React.PropTypes.string,
  underlinedWord: React.PropTypes.string,
  rest: React.PropTypes.string,
  increasePosition: React.PropTypes.func,
};

export default WriterView;
