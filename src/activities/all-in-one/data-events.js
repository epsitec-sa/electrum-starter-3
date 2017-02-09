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
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'B',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'C',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'D',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'E',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'F',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'G',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'H',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'I',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'J',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'K',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'L',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'M',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'N',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'O',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'P',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'Q',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'R',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'S',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'T',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'U',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'V',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'W',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'X',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'Y',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:45:00',
      ToDate: '2017-02-08',
      ToTime: '15:10:00',
      Note:
      {
        Content: 'Z',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '18:00:00',
      ToDate: '2017-02-08',
      ToTime: '19:00:00',
      Note:
      {
        Content: 'Ceci est le dernier événement pour cette magnifique journée !',
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
