'use strict';

function getTrips () {
  return [
    {
      Pick:
      {
        Time: '10.45',
        Description: 'Migros Pont-Neuf',
      },
      Drop:
      {
        Time: '13:30',
        Description: 'Mercier P.',
        Glyphs: ['warning'],
      },
      Count: '2x',
      Weight: '3.6 kg',
      Price: '45.00',
    },
    {
      Pick:
      {
        Time: '11:00',
        Description: 'Coop St. Laurent',
      },
      Drop:
      {
        Time: '14:00',
        Description: 'Dupond J.',
        Glyphs: ['bookmark-base'],
      },
      Count: '1x',
      Weight: '0.7 kg',
      Price: '30.00',
    },
    {
      Pick:
      {
        Time: '13:40',
        Description: 'Tagada & Cie',
        Glyphs: ['bookmark-secondary', 'bookmark-primary'],
      },
      Drop:
      {
        Time: '16:00',
        Description: 'Micro AG',
      },
      Count: '3x',
      Weight: '1.3 kg',
      Price: '100.00',
      PriceGlyphs: ['warning'],
    },
  ];
}

/******************************************************************************/

module.exports = {
  getTrips,
};
