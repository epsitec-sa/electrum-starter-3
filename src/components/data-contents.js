'use strict';

function getMessengersContent () {
  return {
    jl:  ['k.pick', 'k.drop', 'l1.pick', 'l1.drop', 'm.pick', 'm.drop'],
    san: ['n.pick', 'o.pick', 'n.drop', 'o.drop'],
    jp:  ['l2.pick', 'r.pick', 'p.pick', 'r.drop', 'q.pick', 'q.drop', 'l2.drop', 'p.drop'],
    cha: ['s1.pick', 's1.drop'],
    fre: ['s2.pick', 't.pick', 't.drop', 's2.drop'],
  };
}

function getTripBoxContent () {
  return ['a', 'b', 'c', 'd', 'e', 'f'];
}

function getGlueContent () {
  return ['g', 'h', 'i', 'j'];
}

function initializeData () {
  window.document.dataMessengersContent = getMessengersContent ();
  window.document.dataTripBoxContent    = getTripBoxContent ();
  window.document.dataGlueContent       = getGlueContent ();
}

/******************************************************************************/

module.exports = {
  initializeData,
};
