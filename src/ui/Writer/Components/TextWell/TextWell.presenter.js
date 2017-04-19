import React from 'react';
import Well from 'react-bootstrap/lib/Well';

class TextWell extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event){
    console.log('event', event);
    const key = event.key;
    const currentWord = this.props.underlinedWord;
    console.log('key === currentWord', key === currentWord);
    if(key === currentWord) {
        this.props.increasePosition();
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  render() {
    const {start, underlinedWord, rest} = this.props;
    return (
        <div>
            <h2>Start Writing</h2>
            <Well>{start}<u>{underlinedWord}</u>{rest}</Well>
        </div>
    );
  }
}

TextWell.propTypes = {
    start: React.PropTypes.string,
    underlinedWord: React.PropTypes.string,
    rest: React.PropTypes.string,
    increasePosition: React.PropTypes.func,
};

export default TextWell;