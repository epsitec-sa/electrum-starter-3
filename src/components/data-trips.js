'use strict';

function getDescription (glyph) {
  if (glyph === 'bookmark-base') {
    return 'Livraison selon les indications standards de la dispo';
  } else if (glyph === 'bookmark-primary') {
    return 'En raison de travaux à la rue Centrale, tout le trafic passant par cette rue doit impérativement être dévié par la rue du Midi.';
  } else if (glyph === 'bookmark-secondary') {
    return 'Téléphoner au client avant le passage.';
  } else if (glyph === 'warning') {
    return 'Attention:\\nPaiement comptant exigé !';
  } else if (glyph === 'euro') {
    return 'Attention:\\nPaiement en Euro exigé !';
  } else {
    return 'Blabla';
  }
}

function getGlyphEntity (glyph) {
  if (glyph) {
    return {
      id:     'foo',
      offset: 0,
      value:  {
        Glyph:       glyph,
        Name:        'Glyph ' + glyph,
        Description: getDescription (glyph),
      }};
  } else {
    return null;
  }
}

function getGlyphEntities (glyphs) {
  if (glyphs) {
    var array = [];
    glyphs.forEach (g => {
      array.push (getGlyphEntity (g));
    });
    return array;
  } else {
    return null;
  }
}

export default function getData () {
  return {
    a: {
      Pick:
      {
        Time: '10.05',
        ShortDescription: 'Mecano SA',
        LongDescription: 'Mecano SA\\nAv. des Alpes 5\\n1023 Crissier',
      },
      Drop:
      {
        Time: '11:15',
        ShortDescription: 'Fiduciaire Kdo',
        LongDescription: 'Fiduciaire Kdo\\nMadame Valentia Markez\\nEn Budron 5b\\n1052 Le Mont-sur-Lausanne',
      },
      Count: '1x',
      Weight: '0.2 kg',
      Price: '30.00',
      Product: 'Standard',
      Urgency: '100',
    },
    b: {
      Pick:
      {
        Time: '10.45',
        ShortDescription: 'Migros Pont-Neuf',
        LongDescription: 'Migros SA\\nRue du Pont Neuf 26\\n1009 Prilly',
      },
      Drop:
      {
        Time: '13:30',
        ShortDescription: 'Mercier P.',
        LongDescription: 'Peter Mercier',
        Glyphs: getGlyphEntities (['warning']),
      },
      Count: '2x',
      Weight: '3.6 kg',
      Price: '45.00',
      Product: 'Dring-dring',
      Urgency: '80',
    },
    c: {
      Pick:
      {
        Time: '11:00',
        ShortDescription: 'Coop St. Laurent',
        LongDescription: 'Coop\\nPlace St. Laurent 12\\n1004 Lausanne',
      },
      Drop:
      {
        Time: '14:00',
        ShortDescription: 'Dupond J.',
        LongDescription: 'Juliette Dupond',
        Glyphs: getGlyphEntities (['bookmark-base']),
      },
      Count: '1x',
      Weight: '0.7 kg',
      Price: '30.00',
      Product: 'Dring-dring',
      Urgency: '60',
    },
    d: {
      Pick:
      {
        Time: '11:15',
        ShortDescription: 'Tagada AG',
        LongDescription: 'Tagada AG\\nRue de Sans Unique 18\\n1000 Lausanne',
        Glyphs: getGlyphEntities (['bookmark-secondary', 'bookmark-primary']),
      },
      Drop:
      {
        Time: '16:00',
        ShortDescription: 'Micro SA',
        LongDescription: 'Micro SA\\nAv. Dufour 4\\n1010 Renens',
      },
      Count: '3x',
      Weight: '1.3 kg',
      Price: '100.00',
      Glyphs: getGlyphEntities (['euro']),
      Product: 'Standard',
      Urgency: '40',
    },
    e: {
      Pick:
      {
        Time: '11:20',
        ShortDescription: 'Migros Pont-Neuf',
        LongDescription: 'Migros SA\\nRue du Pont Neuf 26\\n1009 Prilly',
      },
      Drop:
      {
        Time: '13:00',
        ShortDescription: 'Durand W.',
        LongDescription: 'Walter Durand\\n1008 Prilly',
      },
      Count: '1x',
      Weight: '2.5 kg',
      Price: '80.00',
      Glyphs: getGlyphEntities (['bookmark-primary']),
      Product: 'Dring-dring',
      Urgency: '10',
    },
    f: {
      Pick:
      {
        Time: '11:40',
        ShortDescription: 'Me Blatide & Associés',
        LongDescription: 'Me Blatide & Associés\\nEtude de Notaires\\nRue Centrale 72\\n1004 Lausanne',
      },
      Drop:
      {
        Time: '15:00',
        ShortDescription: 'Fiduciaire du Léman',
        LongDescription: 'Fiduciaire du Léman\\nAv. des Bains 12\\n1002 Lausanne',
      },
      Count: '2x',
      Weight: '1.9 kg',
      Price: '100.00',
      Product: 'Standard',
    },
    g: {
      Pick:
      {
        Time: '11:45',
        ShortDescription: 'Coop St. Laurent',
        LongDescription: 'Coop\\nPlace St. Laurent 12\\n1004 Lausanne',
        Glyphs: getGlyphEntities (['bookmark-primary']),
      },
      Drop:
      {
        Time: '13:30',
        ShortDescription: 'Arnaud K.',
        LongDescription: 'Kaspar Arnaud\\n1032 Crissier',
        Glyphs: getGlyphEntities (['bookmark-secondary']),
      },
      Count: '1x',
      Weight: '2.5 kg',
      Price: '100.00',
      Glyphs: getGlyphEntities (['euro']),
      Product: 'Dring-dring',
    },
    h: {
      Pick:
      {
        Time: '13:30',
        ShortDescription: 'Fiduciaire du Léman',
        LongDescription: 'Fiduciaire du Léman\\nAv. des Bains 12\\n1002 Lausanne',
      },
      Drop:
      {
        Time: '14:15',
        ShortDescription: 'Me Blatide',
        LongDescription: 'Me Blatide\\nEn Buchillon 50\\n1020 Echandens',
      },
      Count: '1x',
      Weight: '0.3 kg',
      Price: '50.00',
      Product: 'Standard',
    },
    i: {
      Pick:
      {
        Time: '13:30',
        ShortDescription: 'Jolibourg SA',
        LongDescription: 'Jolibourg SA\\nMonsieur Jules Krapulot\\nPlace du Château 61\\n1004 Lausanne',
      },
      Drop:
      {
        Time: '14:25',
        ShortDescription: 'Aux belles fleurs du Rivage',
        LongDescription: 'Aux belles fleurs du Rivage\\nQuai Perdonnet 33\\n1001 Lausanne',
        Glyphs: getGlyphEntities (['bookmark-secondary', 'bookmark-base', 'bookmark-primary']),
      },
      Count: '5x',
      Weight: '16.3 kg',
      Price: '182.00',
      Product: 'Urgent',
      Urgency: '50',
    },
    j: {
      Pick:
      {
        Time: '13:40',
        ShortDescription: 'Kalindo SA',
        LongDescription: 'Kalindo SA\\n1400 Yverdon-les-Bains',
        Glyphs: getGlyphEntities (['bookmark-secondary', 'bookmark-primary']),
      },
      Drop:
      {
        Time: '16:05',
        ShortDescription: 'Verra G.',
        LongDescription: 'Germaine Verra\\nAv. Fauchère 2\\n1092 Le Mont-sur-Lausanne',
        Glyphs: getGlyphEntities (['bookmark-secondary', 'bookmark-base', 'bookmark-primary']),
      },
      Count: '1x',
      Weight: '1.1 kg',
      Price: '24.00',
      Product: 'Standard',
    },
    k: {
      Pick:
      {
        Time: '13:55',
        ShortDescription: 'Migros La Sallaz',
        LongDescription: 'Migros\\nLa Sallaz 12b\\n1018 Lausanne',
        Glyphs: getGlyphEntities (['bookmark-secondary']),
      },
      Drop:
      {
        Time: '14:20',
        ShortDescription: 'Henry P.',
        LongDescription: 'Paul Henry\\nClosalet 12b\\n1004 Lausanne',
      },
      Count: '2x',
      Weight: '4.3 kg',
      Price: '110.00',
      Glyphs: getGlyphEntities (['euro']),
      Product: 'Dring-dring',
    },
    l1: {
      Link: 'l',
      Pick:
      {
        Time: '14:15',
        ShortDescription: 'Migros La Sallaz',
        LongDescription: 'Migros\\nLa Sallaz 12b\\n1018 Lausanne',
      },
      Drop:
      {
        Time: '14:35',
        ShortDescription: 'Gare Lausanne',
        LongDescription: 'Gare CFF\\nBox Quai 8\\nAv. de la Gare 1\\n1003 Lausanne',
        Glyphs: getGlyphEntities (['bookmark-secondary', 'bookmark-primary', 'warning']),
        Type: 'transit',
      },
      Count: '1x',
      Weight: '1.8 kg',
      Price: '70.00',
      Product: 'Dring-dring',
    },
    l2: {
      Link: 'l',
      Pick:
      {
        Time: '14:35',
        ShortDescription: 'Gare Lausanne',
        LongDescription: 'Gare CFF\\nBox Quai 8\\nAv. de la Gare 1\\n1003 Lausanne',
        Glyphs: getGlyphEntities (['bookmark-secondary', 'bookmark-primary', 'warning']),
        Type: 'transit',
      },
      Drop:
      {
        Time: '17:00',
        ShortDescription: 'Schmidt A.',
        LongDescription: 'André Schmidt\\nMartinet 14\\n1002 Lausanne',
      },
      Count: '1x',
      Weight: '1.8 kg',
      Price: '70.00',
      Product: 'Dring-dring',
    },
    m: {
      Pick:
      {
        Time: '15:00',
        ShortDescription: 'Aux belles fleurs',
        LongDescription: 'Aux belles fleurs\\nPlace de la Pallud\\n1004 Lausanne',
        Glyphs: getGlyphEntities (['warning']),
      },
      Drop:
      {
        Time: '16:10',
        ShortDescription: 'Ducommun S.',
        LongDescription: 'Sandra Ducommun\\nLes Faverges 2\\n1003 Lausanne',
      },
      Count: '4x',
      Weight: '1.8 kg',
      Price: '100.00',
      Product: 'Standard',
    },
    n: {
      Pick:
      {
        Time: '15:45',
        ShortDescription: 'Fiduciaire Blamond',
        LongDescription: 'Fiduciaire Blamond\\n1001 Lausanne',
      },
      Drop:
      {
        Time: '16:00',
        ShortDescription: 'Consulat Belge',
        LongDescription: 'Consulat Belge\\nJohn van Dieperink\\nAv. des Bains 102\\n1000 Lausanne\\nCode #30672',
      },
      Count: '1x',
      Weight: '0.3 kg',
      Price: '30.00',
      Product: 'Standard',
    },
    o: {
      Pick:
      {
        Time: '16:10',
        ShortDescription: 'Vermont & Frères',
        LongDescription: 'Vermont & Frères\\nRue Centrale3\\n1004 Lausanne',
      },
      Drop:
      {
        Time: '17:00',
        ShortDescription: 'Mecano SA',
        LongDescription: 'Mecano SA\\nAv. des Alpes 5\\n1023 Crissier',
        Glyphs: getGlyphEntities (['bookmark-primary']),
      },
      Count: '2x',
      Weight: '1.5 kg',
      Price: '70.00',
      Glyphs: getGlyphEntities (['euro']),
      Product: 'Urgent',
      Urgency: '50',
    },
    p: {
      Pick:
      {
        Time: '16:15',
        ShortDescription: 'Blibli SA',
        LongDescription: 'Blibli SA\\nAv. Victor Ruffy\\n1008 Prilly',
      },
      Drop:
      {
        Time: '17:15',
        ShortDescription: 'Librairie Frankin',
        LongDescription: 'Librairie Frankin\\nPlace du Marché\\n1008 Jouxtens',
        Glyphs: getGlyphEntities (['bookmark-base']),
      },
      Count: '1x',
      Weight: '2.9 kg',
      Price: '125.00',
      Glyphs: getGlyphEntities (['bookmark-secondary', 'bookmark-primary', 'euro']),
      Product: 'Standard',
    },
    q: {
      Pick:
      {
        Time: '16:25',
        ShortDescription: 'Blibli SA',
        LongDescription: 'Blibli SA\\nAv. Victor Ruffy\\n1008 Prilly',
      },
      Drop:
      {
        Time: '17:00',
        ShortDescription: 'Librairie Mercier',
        LongDescription: 'Librairie Mercier\\nAv. César Roux\\n1004 Lausanne',
      },
      Count: '2x',
      Weight: '5.2 kg',
      Price: '125.00',
      Glyphs: getGlyphEntities (['bookmark-base']),
      Product: 'Urgent',
      Urgency: '50',
    },
    r: {
      Pick:
      {
        Time: '16:30',
        ShortDescription: 'Coop St. Laurent',
        LongDescription: 'Coop\\nPlace St. Laurent 12\\n1004 Lausanne',
        Glyphs: getGlyphEntities (['bookmark-primary', 'bookmark-base']),
      },
      Drop:
      {
        Time: '17:15',
        ShortDescription: 'Coppet F.',
        LongDescription: 'Françoise Coppet\\nCh. de Buissons 45\\n1009 Echandens',
      },
      Count: '1x',
      Weight: '2.0 kg',
      Price: '25.00',
      Glyphs: getGlyphEntities (['euro']),
      Product: 'Dring-dring',
    },
    s1: {
      Link: 's',
      Pick:
      {
        Time: '16:35',
        ShortDescription: 'Me Georges-André',
        LongDescription: 'Etude Me Georges-André & Fils & Co & Cie\\nAv. du Château 31a\\n1008 Jouxtens',
      },
      Drop:
      {
        Time: '17:25',
        ShortDescription: 'Gare Lausanne',
        LongDescription: 'Gare CFF\\nBox Quai 8\\nAv. de la Gare 1\\n1003 Lausanne',
        Glyphs: getGlyphEntities (['bookmark-base']),
        Type: 'transit',
      },
      Count: '3x',
      Weight: '4.7 kg',
      Price: '75.00',
      Product: 'Standard',
    },
    s2: {
      Link: 's',
      Pick:
      {
        Time: '17:25',
        ShortDescription: 'Gare Lausanne',
        LongDescription: 'Gare CFF\\nBox Quai 8\\nAv. de la Gare 1\\n1003 Lausanne',
        Glyphs: getGlyphEntities (['bookmark-base']),
        Type: 'transit',
      },
      Drop:
      {
        Time: '17:45',
        ShortDescription: 'Mecano SA',
        LongDescription: 'Mecano SA\\nAv. des Alpes 5\\n1023 Crissier',
      },
      Count: '3x',
      Weight: '4.7 kg',
      Price: '75.00',
      Glyphs: getGlyphEntities (['bookmark-secondary', 'bookmark-primary']),
      Product: 'Standard',
    },
    t: {
      Pick:
      {
        Time: '16:35',
        ShortDescription: 'Librairie Bédé',
        LongDescription: 'Librairie Bédé\\nMarc Audiard\\nFlon 132\\n1002 Lausanne',
        Glyphs: getGlyphEntities (['bookmark-base', 'bookmark-primary', 'bookmark-secondary']),
      },
      Drop:
      {
        Time: '17:10',
        ShortDescription: 'Blibli SA',
        LongDescription: 'Blibli SA\\nAv. Victor Ruffy\\n1008 Prilly',
        Glyphs: getGlyphEntities (['warning']),
      },
      Count: '1x',
      Weight: '3.9 kg',
      Price: '120.00',
      Product: 'Standard',
    },
  };
}
