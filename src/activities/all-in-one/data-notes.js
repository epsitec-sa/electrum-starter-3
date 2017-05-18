const data =
  [
    {
      id:      'n1',
      Content: 'Coucou',
      Glyphs:  [
        {
          id:          'g1',
          Name:        'Pick',
          Glyph:       'bookmark-primary',
          Description: 'Marque pour pick',
        },
        {
          id:          'g2',
          Name:        'Drop',
          Glyph:       'bookmark-secondary',
          Description: 'Marque pour drop',
        },
        {
          id:          'g3',
          Name:        'Attention',
          Glyph:       'warning',
          Description: 'Triangle attention',
        },
        {
          id:          'g4',
          Name:        'Vélo',
          Glyph:       'bicycle',
          Description: 'Petit vélo comme moyen de transport\nSuite...',
        },
      ],
    },
    {
      id:      'n2',
      Content: 'Et voilà une note beaucoup plus longue...',
      Glyphs:  [
        {
          id:          'g3',
          Name:        'Attention',
          Glyph:       'warning',
          Description: 'Triangle attention',
        },
      ],
    },
    {
      id:      'n3',
      Content: 'Première ligne\nDeuxième ligne\nEt troisième',
      Glyphs:  [
        {
          id:          'g5',
          Name:        'Bus',
          Glyph:       'bus',
          Description: 'Autocar comme moyen de transport',
        },
        {
          id:          'g6',
          Name:        'Validation',
          Glyph:       'check-#ad00ff',
          Description: '',
        },
      ],
    },
  ];

module.exports = {data};
