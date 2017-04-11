import { connect } from 'react-redux';
import WriterView from './WriterView.presenter';
import { SET_ACTIVE_TEXT } from '../../reducers/typing.reducer';

function mapStateToProps(state) {
  return {text: 'chicken'};
}

export default connect(mapStateToProps)(WriterView);
