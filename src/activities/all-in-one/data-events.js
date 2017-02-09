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
        Content: 'Café',
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
        Content: 'Réserver billets CFF',
        Glyphs: [{Glyph: 'train'},{Glyph: 'warning'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '09:30:00',
      ToDate: '2017-02-08',
      ToTime: '11:30:00',
      Note:
      {
        Content: 'Rendez-vous avec les services sociaux de la ville de Lausanne',
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
        Content: 'SwissConnect',
        Glyphs: [{Glyph: 'train'}],
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
      FromTime: '14:20:00',
      ToDate: '2017-02-08',
      ToTime: '15:00:00',
      Note:
      {
        Content: 'Sans glyph !',
        Glyphs: [],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:20:00',
      ToDate: '2017-02-08',
      ToTime: '15:00:00',
      Note:
      {
        Glyphs: [{Glyph: 'bookmark'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:05:00',
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
      FromTime: '14:10:00',
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
      FromTime: '14:20:00',
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
      FromTime: '14:20:00',
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
      FromTime: '14:25:00',
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
      FromTime: '14:30:00',
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
      FromTime: '14:40:00',
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
      FromTime: '14:50:00',
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
      FromTime: '14:50:00',
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
      FromTime: '14:55:00',
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
      FromTime: '14:55:00',
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
      FromTime: '14:55:00',
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
      FromTime: '14:55:00',
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
      FromTime: '14:55:00',
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
      FromTime: '14:59:00',
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
      FromTime: '15:05:00',
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
      FromTime: '15:06:00',
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
      FromTime: '15:07:00',
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
      FromTime: '15:08:00',
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
      FromTime: '15:09:00',
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
      FromTime: '15:10:00',
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
      FromTime: '15:22:00',
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
      FromTime: '15:31:00',
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
      FromTime: '15:44:00',
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
        Content: 'Nettoyer la cuisine et les vestiaires',
        Glyphs: [{Glyph: 'leaf'}],
      }
    },
    {
      FromDate: '2017-02-10',
      FromTime: '08:00:00',
      ToDate: '2017-02-10',
      ToTime: '17:00:00',
      Note:
      {
        Content: 'Dentiste',
        Glyphs: [{Glyph: 'user'}],
      }
    },
    {
      FromDate: '2017-02-11',
      FromTime: '16:30:00',
      ToDate: '2017-02-11',
      ToTime: '17:00:00',
      Note:
      {
        Content: 'Fermer les stores',
        Glyphs: [{Glyph: 'check-square'}],
      }
    },
    {
      FromDate: '2017-02-13',
      FromTime: '11:05:00',
      ToDate: '2017-02-13',
      ToTime: '11:25:00',
      Note:
      {
        Content: 'SwissConnect',
        Glyphs: [{Glyph: 'train'}],
      }
    },
    {
      FromDate: '2017-02-13',
      FromTime: '13:18:00',
      ToDate: '2017-02-13',
      ToTime: '13:25:00',
      Note:
      {
        Content: 'SwissConnect',
        Glyphs: [{Glyph: 'rocket'}],
      }
    },
    {
      FromDate: '2017-02-15',
      FromTime: '16:55:00',
      ToDate: '2017-02-15',
      ToTime: '17:00:00',
      Note:
      {
        Content: 'SwissConnect',
        Glyphs: [{Glyph: 'train'}],
      }
    },
    {
      FromDate: '2017-02-16',
      FromTime: '08:00:00',
      ToDate: '2017-02-16',
      ToTime: '08:25:00',
      Note:
      {
        Content: 'SwissConnect',
        Glyphs: [{Glyph: 'train'}],
      }
    },
    {
      FromDate: '2017-02-20',
      FromTime: '08:00:00',
      ToDate: '2017-02-20',
      ToTime: '08:25:00',
      Note:
      {
        Content: 'SwissConnectAndFrenchConnect',
        Glyphs: [{Glyph: 'train'}],
      }
    },
    {
      FromDate: '2017-02-21',
      FromTime: '11:20:00',
      ToDate: '2017-02-21',
      ToTime: '11:25:00',
      Note:
      {
        Content: 'Connect',
        Glyphs: [{Glyph: 'train'}],
      }
    },
  ],
  id: 'id-events'
};

module.exports = {data};
