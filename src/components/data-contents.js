'use strict';

import getMessengerData from './data-messengers.js';
import getTripData from './data-trips.js';

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
  return [
    {
      left:   '30px',
      top:    '50px',
      rotate: '5deg',
      title:  'Après-midi',
      tripId: 'g',
    },
    {
      left:   '310px',
      top:    '50px',
      rotate: '-1deg',
      title:  'Julien',
      tripId: 'h',
    },
    {
      left:   '590px',
      top:    '40px',
      rotate: '2deg',
      title:  '#3',
      tripId: 'i',
    },
    {
      left:   '860px',
      top:    '60px',
      rotate: '-5deg',
      title:  'Mardi',
      tripId: 'j',
    },
    {
      left:   '1120px',
      top:    '50px',
      rotate: '2deg',
      title:  '#5',
    },
    {
      left:   '1380px',
      top:    '70px',
      rotate: '-2deg',
      title:  'Urgent',
    },
    {
      left:   '1650px',
      top:    '50px',
      rotate: '0deg',
      title:  '#7',
    },
    {
      left:   '1920px',
      top:    '50px',
      rotate: '5deg',
      title:  '#8',
    },
  ];
}

export default function getData () {
  return {
    trips:             getTripData (),
    messengers:        getMessengerData (),
    messengersContent: getMessengersContent (),
    tripBoxContent:    getTripBoxContent (),
    glueContent:       getGlueContent (),
  };
}
