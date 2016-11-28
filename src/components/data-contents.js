'use strict';

import getMessengerData from './data-messengers.js';
import getTripData from './data-trips.js';

function getDispatch () {
  return {
    jl:  ['k.pick', 'k.drop', 'l1.drop', 'l1.pick', 'm.pick', 'm.drop'],
    san: ['n.pick', 'o.pick', 'n.drop', 'o.drop'],
    jp:  ['l2.pick', 'r.pick', 'p.pick', 'r.drop', 'q.pick', 'q.drop', 'l2.drop', 'p.drop'],
    cha: ['s1.pick', 's1.drop'],
    fre: ['s2.pick', 't.pick', 't.drop', 's2.drop'],
  };
}

function getMissions () {
  return ['a', 'b', 'c', 'd', 'e', 'f'];
}

function getDesk () {
  return [
    {
      Left:    '30px',
      Top:     '50px',
      Rotate:  '5deg',
      Title:   'Après-midi',
      TripIds: ['g'],
    },
    {
      Left:    '310px',
      Top:     '50px',
      Rotate:  '-1deg',
      Title:   'Julien',
      TripIds: ['h'],
    },
    {
      Left:    '590px',
      Top:     '40px',
      Rotate:  '2deg',
      Title:   '#3',
      TripIds: ['i.pick', 'i.drop'],
    },
    {
      Left:    '860px',
      Top:     '60px',
      Rotate:  '-5deg',
      Title:   'Mardi',
      TripIds: ['j'],
    },
    {
      Left:    '1120px',
      Top:     '50px',
      Rotate:  '2deg',
      Title:   '#5',
      TripIds: [],
    },
    {
      Left:    '1380px',
      Top:     '70px',
      Rotate:  '-2deg',
      Title:   'Urgent',
      TripIds: [],
    },
    {
      Left:    '1650px',
      Top:     '50px',
      Rotate:  '0deg',
      Title:   '#7',
      TripIds: [],
    },
    {
      Left:    '1920px',
      Top:     '50px',
      Rotate:  '5deg',
      Title:   '#8',
      TripIds: [],
    },
  ];
}

export default function getData () {
  return {
    trips:      getTripData (),
    messengers: getMessengerData (),
    dispatch:   getDispatch (),
    missions:   getMissions (),
    desk:       getDesk (),
  };
}
