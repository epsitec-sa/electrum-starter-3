'use strict';

const data =
{
  FromDate: '2017-02-06',
  ToDate: '2017-02-12',
  Events: [
    {
      FromDate: '2017-02-07',
      FromTime: '14:00:00',
      ToDate: '2017-02-07',
      ToTime: '14:30:00',
      Note:
      {
        Content: 'Coucou',
        Glyphs: [{Glyph: 'rocket'}],
      }
    },
    {
      FromDate: '2017-02-07',
      FromTime: '15:10:00',
      ToDate: '2017-02-07',
      ToTime: '15:45:00',
      Note:
      {
        Content: 'Tralala',
        Glyphs: [{Glyph: 'car'},{Glyph: 'warning'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '09:30:00',
      ToDate: '2017-02-08',
      ToTime: '11:30:00',
      Note:
      {
        Content: 'Ceci est un texte beaucoup plus long',
        Glyphs: [{Glyph: 'bicycle'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '11:05:00',
      ToDate: '2017-02-08',
      ToTime: '11:25:00',
      Note:
      {
        Content: 'Bonjour',
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:20:00',
      ToDate: '2017-02-08',
      ToTime: '15:00:00',
      Note:
      {
        Content: 'Rendre le rapport',
        Glyphs: [{Glyph: 'bell'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'A',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-10',
      FromTime: '08:00:00',
      ToDate: '2017-02-10',
      ToTime: '17:00:00',
      Note:
      {
        Content: 'Suite',
        Glyphs: [{Glyph: 'user'}],
      }
    },
  ],
  id: 'id-events'
};

module.exports = {data};
