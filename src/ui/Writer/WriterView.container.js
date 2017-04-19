import { connect } from 'react-redux';
import WriterView from './WriterView.presenter';
import { SET_ACTIVE_TEXT } from '../../reducers/typing.reducer';
import { selectActiveTextId, selectTextById } from '../../reducers/selectors';

function mapStateToProps(state) {
  const activeTextId = selectActiveTextId(state);
  const text = selectTextById(state, activeTextId).text;
  return {
    text,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: () => dispatch({type: 'chicken'}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WriterView);
