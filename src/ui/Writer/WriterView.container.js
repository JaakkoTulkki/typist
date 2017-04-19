import { connect } from 'react-redux';
import WriterView from './WriterView.presenter';
import { SET_ACTIVE_TEXT } from '../../reducers/typing.reducer';
import { selectActiveTextId, selectTextById } from '../../reducers/selectors';
import {selectActiveCharacterPosition} from "../../reducers/selectors";
import {INCREASE_POSITION} from "../../reducers/typing.reducer";

function mapStateToProps(state) {
  const activeTextId = selectActiveTextId(state);
  const text = selectTextById(state, activeTextId).text;
  const position = selectActiveCharacterPosition(state);
  const start = text.slice(0, position);
  const underlinedWord = text.slice(position, position + 1);
  const rest = text.slice(position + 1);

  return {
    start,
    underlinedWord,
    rest,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increasePosition: () => dispatch(INCREASE_POSITION),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WriterView);
