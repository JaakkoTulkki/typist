import { connect } from 'react-redux';
import WriterView from './WriterView.presenter';

function mapStateToProps(state) {
  return {text: state.texts[0].text};
}

export default connect(mapStateToProps)(WriterView);
