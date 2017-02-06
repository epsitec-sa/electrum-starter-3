'use strict';

const data =
{
  FromDate: '2017-02-01',
  ToDate: '2017-02-28',
  Events: [
    {
      FromDate: '2017-02-06',
      FromTime: '14:00:00',
      ToDate: '2017-02-06',
      ToTime: '14:30:00',
      Note:
      {
        Content: 'Coucou',
        Glyphs: [{Glyph: 'rocket'}],
      }
    },
    {
      FromDate: '2017-02-06',
      FromTime: '15:10:00',
      ToDate: '2017-02-06',
      ToTime: '15:45:00',
      Note:
      {
        Content: 'Tralala',
        Glyphs: [{Glyph: 'car'},{Glyph: 'warning'}],
      }
    },
    {
      FromDate: '2017-02-07',
      FromTime: '09:30:00',
      ToDate: '2017-02-07',
      ToTime: '11:30:00',
      Note:
      {
        Content: 'Ceci est une texte beaucoup plus long',
        Glyphs: [{Glyph: 'bicycle'}],
      }
    },
  ],
  id: 'id-events'
};

module.exports = {data};
