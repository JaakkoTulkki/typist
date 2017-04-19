import ramda from 'ramda';
const { pathOr } = ramda;

export const selectTexts = (state) => pathOr(null, ['texts'], state);
export const selectTextById = (state, id) => pathOr(null, [id], selectTexts(state));

export const selectTypist = (state) => pathOr(null, ['typing'], state);
export const selectActiveTextId = (state) => pathOr(null, ['activeTextId'], selectTypist(state));
