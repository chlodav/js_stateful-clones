'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const history = [];
  let current = { ...state };

  for (const action of actions) {
    if (action.type === 'clear') {
      current = {};
    } else if (action.type === 'addProperties') {
      current = { ...current, ...action.extraData };
    } else if (action.type === 'removeProperties') {
      current = { ...current };
      action.keysToRemove.forEach((key) => delete current[key]);
    }

    history.push(current);
  }

  return history;
}

module.exports = transformStateWithClones;
