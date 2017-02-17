'use strict';

const data =
{
  FromDate: '2017-01-01',
  ToDate: '2017-12-31',
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
      StartFromTime: '14:10:00',
      EndFromTime: '15:15:00',
      ToDate: '2017-02-07',
      StartToTime: '16:15:00',
      EndToTime: '17:45:00',
      Note:
      {
        Content: 'Livraison Me Moulin',
        Glyphs: [{Glyph: 'bicycle'}],
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
      FromDate: '2017-02-07',
      FromTime: '17:10:00',
      ToDate: '2017-02-07',
      ToTime: '17:10:00',
      Note:
      {
        Content: 'Fermer le bureau',
        Glyphs: [{Glyph: 'close'},{Glyph: 'warning'}],
      }
    },
    {
      FromDate: '2017-02-07',
      FromTime: '22:00:00',
      ToDate: '2017-02-07',
      ToTime: '22:30:00',
      Note:
      {
        Content: 'Aller dormir pour être en forme demain',
        Glyphs: [{Glyph: 'bed'}],
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
      FromTime: '14:05:00',
      ToDate: '2017-02-08',
      ToTime: '14:30:00',
      Note:
      {
        Content: 'Dring-dring Schmidt',
        Glyphs: [{Glyph: 'bell'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:05:00',
      ToDate: '2017-02-08',
      ToTime: '17:00:00',
      Note:
      {
        Content: 'Dring-dring Schneider',
        Glyphs: [{Glyph: 'bell'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:20:00',
      ToDate: '2017-02-08',
      ToTime: '14:30:00',
      Note:
      {
        Content: 'Rendre le rapport',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:20:00',
      ToDate: '2017-02-08',
      ToTime: '14:30:00',
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
      ToTime: '14:30:00',
      Note:
      {
        Glyphs: [{Glyph: 'bookmark'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:20:00',
      ToDate: '2017-02-08',
      ToTime: '15:25:00',
      Note:
      {
        Content: 'Dring-dring Nicolet',
        Glyphs: [{Glyph: 'bell'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:20:00',
      ToDate: '2017-02-08',
      ToTime: '14:27:00',
      Note:
      {
        Content: 'Dring-dring Bertoli',
        Glyphs: [{Glyph: 'bell'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:25:00',
      ToDate: '2017-02-08',
      ToTime: '15:30:00',
      Note:
      {
        Content: 'SwissConnect',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:30:00',
      ToDate: '2017-02-08',
      ToTime: '14:30:00',
      Note:
      {
        Content: 'Appeler Jean-Pierre',
        Glyphs: [{Glyph: 'phone'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:40:00',
      ToDate: '2017-02-08',
      ToTime: '14:45:00',
      Note:
      {
        Content: 'Dring-dring Simonetti',
        Glyphs: [{Glyph: 'Bell'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:40:00',
      ToDate: '2017-02-08',
      ToTime: '14:55:00',
      Note:
      {
        Content: 'Pause',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:40:00',
      ToDate: '2017-02-08',
      ToTime: '18:00:00',
      Note:
      {
        Content: 'Dring-dring Durand',
        Glyphs: [{Glyph: 'bell'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:40:00',
      ToDate: '2017-02-08',
      ToTime: '14:55:00',
      Note:
      {
        Content: 'Ouvir le courrier',
        Glyphs: [{Glyph: 'cut'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:40:00',
      ToDate: '2017-02-08',
      ToTime: '15:55:00',
      Note:
      {
        Content: 'Dring-dring André',
        Glyphs: [{Glyph: 'bell'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:55:00',
      ToDate: '2017-02-08',
      ToTime: '19:00:00',
      Note:
      {
        Content: 'SwissConnect',
        Glyphs: [{Glyph: 'train'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:55:00',
      ToDate: '2017-02-08',
      ToTime: '15:15:00',
      Note:
      {
        Content: 'Chercher échantillon',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:55:00',
      ToDate: '2017-02-08',
      ToTime: '15:05:00',
      Note:
      {
        Content: 'Notaire',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:55:00',
      ToDate: '2017-02-08',
      ToTime: '15:00:00',
      Note:
      {
        Content: 'Téléphone à Mme Di Leonardo',
        Glyphs: [{Glyph: 'phone'}],
      }
    },
    {
      FromDate: '2017-02-08',
      FromTime: '14:55:00',
      ToDate: '2017-02-08',
      ToTime: '15:00:00',
      Note:
      {
        Content: 'Emballer colis',
        Glyphs: [{Glyph: 'cube'}],
      }
    },
    {
      FromDate: '2017-02-09',
      FromTime: '08:15:00',
      ToDate: '2017-02-09',
      ToTime: '15:00:00',
      Note:
      {
        Content: 'Q',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-09',
      FromTime: '08:30:00',
      ToDate: '2017-02-09',
      ToTime: '15:00:00',
      Note:
      {
        Content: 'R',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-09',
      FromTime: '10:00:00',
      ToDate: '2017-02-09',
      ToTime: '11:00:00',
      Note:
      {
        Content: 'S',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-09',
      FromTime: '10:05:00',
      ToDate: '2017-02-09',
      ToTime: '15:08:00',
      Note:
      {
        Content: 'T',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-09',
      FromTime: '11:00:00',
      ToDate: '2017-02-09',
      ToTime: '11:30:00',
      Note:
      {
        Content: 'U',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-09',
      FromTime: '12:00:00',
      ToDate: '2017-02-09',
      ToTime: '12:00:00',
      Note:
      {
        Content: 'Midi pile !',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-09',
      FromTime: '15:10:00',
      ToDate: '2017-02-09',
      ToTime: '15:22:00',
      Note:
      {
        Content: 'W',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-09',
      FromTime: '15:22:00',
      ToDate: '2017-02-09',
      ToTime: '16:00:00',
      Note:
      {
        Content: 'X',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-09',
      FromTime: '15:31:00',
      ToDate: '2017-02-09',
      ToTime: '15:44:00',
      Note:
      {
        Content: 'Y',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-09',
      FromTime: '16:45:00',
      ToDate: '2017-02-09',
      ToTime: '17:50:00',
      Note:
      {
        Content: 'Z',
        Glyphs: [{Glyph: 'truck'}],
      }
    },
    {
      FromDate: '2017-02-09',
      FromTime: '18:00:00',
      ToDate: '2017-02-09',
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
      FromTime: '09:00:00',
      ToDate: '2017-02-15',
      ToTime: '12:00:00',
      Note:
      {
        Content: 'SwissConnect',
        Glyphs: [{Glyph: 'train'}],
      }
    },
    {
      FromDate: '2017-02-15',
      FromTime: '10:30:00',
      ToDate: '2017-02-15',
      ToTime: '11:00:00',
      Note:
      {
        Content: 'SwissConnect',
        Glyphs: [{Glyph: 'train'}],
      }
    },
    {
      FromDate: '2017-02-15',
      FromTime: '16:55:00',
      ToDate: '2017-02-15',
      ToTime: '18:00:00',
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
      FromDate: '2017-02-16',
      FromTime: '08:25:00',
      ToDate: '2017-02-16',
      ToTime: '11:00:00',
      Note:
      {
        Content: 'SwissConnect',
        Glyphs: [{Glyph: 'train'}],
      }
    },
    {
      FromDate: '2017-02-16',
      FromTime: '11:00:00',
      ToDate: '2017-02-16',
      ToTime: '12:00:00',
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
        Content: 'SwissConnect spécial',
        Glyphs: [{Glyph: 'train'}],
      }
    },
    {
      FromDate: '2017-02-21',
      FromTime: '11:20:00',
      ToDate: '2017-02-21',
      ToTime: '15:20:00',
      Note:
      {
        Content: 'SwissConnect',
        Glyphs: [{Glyph: 'train'},{Glyph: 'rocket'},{Glyph: 'warning'}],
      }
    },
    {
      FromDate: '2017-03-20',
      FromTime: '11:20:00',
      ToDate: '2017-02-21',
      ToTime: '15:20:00',
      Note:
      {
        Content: 'SwissConnect',
        Glyphs: [{Glyph: 'train'}],
      }
    },
    {
      FromDate: '2017-04-22',
      FromTime: '11:20:00',
      ToDate: '2017-02-21',
      ToTime: '15:20:00',
      Note:
      {
        Content: 'SwissConnect',
        Glyphs: [{Glyph: 'train'}],
      }
    },
    {
      FromDate: '2017-05-19',
      FromTime: '11:20:00',
      ToDate: '2017-02-21',
      ToTime: '15:20:00',
      Note:
      {
        Content: 'SwissConnect',
        Glyphs: [{Glyph: 'train'}],
      }
    },
    {
      FromDate: '2017-05-19',
      FromTime: '14:20:00',
      ToDate: '2017-02-21',
      ToTime: '15:25:00',
      Note:
      {
        Content: 'Dring-dring Nicolet',
        Glyphs: [{Glyph: 'bell'}],
      }
    },
    {
      FromDate: '2017-05-19',
      FromTime: '14:20:00',
      ToDate: '2017-02-21',
      ToTime: '14:27:00',
      Note:
      {
        Content: 'Dring-dring Bertoli',
        Glyphs: [{Glyph: 'bell'},{Glyph: 'warning'}],
      }
    },
    {
      FromDate: '2017-11-21',
      FromTime: '11:20:00',
      ToDate: '2017-02-21',
      ToTime: '15:20:00',
      Note:
      {
        Content: 'SwissConnect',
        Glyphs: [{Glyph: 'train'}],
      }
    },
  ],
  id: 'id-events'
};

module.exports = {data};
