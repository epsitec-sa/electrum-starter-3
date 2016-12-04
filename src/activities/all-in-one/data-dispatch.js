'use strict';

const data =
{
  MessengersBooks: [
    {
      Messenger: {
        Name: 'Paul',
        Photo: {
          Description: '',
          Glyph: 'user',
          Name: '',
          Path: '',
          id: ''
        },
        id: 'id-paul'
      },
      Name: 'Paul — 01.12.2016',
      Revenue: '250 CHF',
      Tickets: [
        {
          Extended: 'false',
          OwnerId: 'id-tickets-to-paul',
          Selected: 'false',
          Status: 'pre-dispatched',
          Trip: {
            Description: '',
            Drop: {
              Contact: null,
              LongDescription: 'Juliette Dupond',
              Notes: [
              ],
              PlanedTime: '2016-11-30T14:00:03.9052723+01:00',
              RealisedTime: '2016-12-01T10:07:12.7657601+01:00',
              ShortDescription: 'Dupond J.',
              Status: 'init',
              TripId: 't1',
              Type: 'drop',
              Zone: 'Zone A',
              id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
            },
            MissionId: 'id-ticket-paul-link-0',
            Notes: [],
            PackageCount: '1 colis',
            Packages: [
               {
                  Content: 'Stylos magiques',
                  Dimensions: '30x10x10',
                  TripId: 't1',
                  Weight: '1 kg',
                  id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
                },
                {
                  Content: 'Enveloppe',
                  Dimensions: '30x21x1',
                  TripId: 't1',
                  Weight: '0.2 g',
                  id: 'd23724dd-ded8-4071-8a6b-150cd2add84e'
                }
            ],
            Pick: {
              Contact: null,
              LongDescription: 'Coop\\nPlace St. Laurent 12\\n1004 Lausanne',
              Notes: [
                {
                  Content: 'Livraison selon les indications standards de la dispo',
                  Glyphs: [
                    {
                      Name: 'bookmark-secondary',
                      Glyph: 'bookmark-secondary',
                      Description: '',
                    },
                  ],
                },
              ],
              PlanedTime: '2016-11-30T11:00:03.9052723+01:00',
              RealisedTime: '2016-12-01T10:07:12.7507283+01:00',
              ShortDescription: 'Coop St. Laurent',
              Status: 'init',
              TripId: 't1',
              Type: 'pick',
              Zone: 'Zone B',
              id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
            },
            Price: '32 CHF',
            Product: 'Standard',
            Urgency: '100',
            Weight: '1.2 kg',
            id: 't1'
          },
          Type: 'pick',
          Warning: '',
          id: 'id-ticket-paul-0'
        },
        {
          Extended: 'false',
          OwnerId: 'id-tickets-to-paul',
          Selected: 'false',
          Status: 'pre-dispatched',
          Trip: {
            Description: '',
            Drop: {
              Contact: null,
              LongDescription: 'Juliette Dupond',
              Notes: [
                {
                  Content: 'Téléphoner au client avant le passage.',
                  Glyphs: [
                    {
                      Name: 'bookmark-primary',
                      Glyph: 'bookmark-primary',
                      Description: '',
                    },
                  ],
                },
                {
                  Content: 'Attention:\\nPaiement comptant exigé !',
                  Glyphs: [
                    {
                      Name: 'bookmark-base',
                      Glyph: 'bookmark-base',
                      Description: '',
                    },
                  ],
                },
              ],
              PlanedTime: '2016-11-30T14:00:03.9052723+01:00',
              RealisedTime: '2016-12-01T10:07:12.7657601+01:00',
              ShortDescription: 'Dupond J.',
              Status: 'init',
              TripId: 't2',
              Type: 'drop',
              Zone: 'Zone A',
              id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
            },
            MissionId: 'id-ticket-paul-link-0',
            Notes: [],
            PackageCount: '1 colis',
            Packages: [
               {
                  Content: 'Stylos magiques',
                  Dimensions: '30x10x10',
                  TripId: 't2',
                  Weight: '1 kg',
                  id: 'd23724dd-ded8-4071-8a6b-150cd2add84f'
                },
                {
                  Content: 'Enveloppe',
                  Dimensions: '30x21x1',
                  TripId: 't2',
                  Weight: '0.2 g',
                  id: 'd23724dd-ded8-4071-8a6b-150cd2add84g'
                }
            ],
            Pick: {
              Contact: null,
              LongDescription: 'Coop\\nPlace St. Laurent 12\\n1004 Lausanne',
              Notes: [
              ],
              PlanedTime: '2016-11-30T11:00:03.9052723+01:00',
              RealisedTime: '2016-12-01T10:07:12.7507283+01:00',
              ShortDescription: 'Coop St. Laurent',
              Status: 'init',
              TripId: 't2',
              Type: 'pick',
              Zone: 'Zone C',
              id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
            },
            Price: '32 CHF',
            Product: 'Standard',
            Urgency: '100',
            Weight: '1.2 kg',
            id: 't2'
          },
          Type: 'drop',
          Warning: '',
          id: 'id-ticket-paul-1'
        },
      ],
      Transport: 'bicycle',
      id: 'id-tickets-to-paul'
    },
    {
      Messenger: {
        Name: 'Sandra',
        Photo: {
          Description: '',
          Glyph: 'user',
          Name: '',
          Path: '',
          id: ''
        },
        id: 'id-sandra'
      },
      Name: 'Sandra — 01.12.2016',
      Revenue: '145 CHF',
      Tickets: [
      ],
      Transport: 'car',
      id: 'id-tickets-to-sandra'
    },
    {
      Messenger: {
        Name: 'Géraldine',
        Photo: {
          Description: '',
          Glyph: 'user',
          Name: '',
          Path: '',
          id: ''
        },
        id: 'id-Géraldine'
      },
      Name: 'Géraldine — 01.12.2016',
      Revenue: '0 CHF',
      Tickets: [
      ],
      Transport: 'bicycle',
      id: 'id-tickets-to-Géraldine'
    },
    {
      Messenger: {
        Name: 'Jean-Pierre',
        Photo: {
          Description: '',
          Glyph: 'user-secret',
          Name: '',
          Path: '',
          id: ''
        },
        id: 'id-jp'
      },
      Name: 'Jean-Pierre — 01.12.2016',
      Revenue: '0 CHF',
      Tickets: [
      ],
      Transport: 'bicycle',
      id: 'id-tickets-to-jp'
    },
  ],
  Name: 'New board',
  Status: 'open',
  TicketsToDispatch: {
    Tickets: [
       {
          Extended: 'false',
          OwnerId: 'id-to-dispatch',
          Selected: 'false',
          Status: 'backlog',
          Trip: {
            Description: '',
            Drop: {
              Contact: null,
              LongDescription: 'Fiduciaire Kdo\\nMadame Valentia Markez\\nEn Budron 5b\\n1052 Le Mont-sur-Lausanne',
              Notes: [
                {
                  Content: 'En raison de travaux à la rue Centrale, tout le trafic passant par cette rue doit impérativement être dévié par la rue du Midi.',
                  Glyphs: [
                    {
                      Name: 'bookmark-primary',
                      Glyph: 'bookmark-primary',
                      Description: '',
                    },
                  ],
                },
              ],
              PlanedTime: '2016-11-30T11:15:03.9052723+01:00',
              RealisedTime: '2016-12-01T10:07:12.7657601+01:00',
              ShortDescription: 'Fiduciaire Kdo',
              Status: 'init',
              TripId: 't3',
              Type: 'drop',
              Zone: 'Zone A',
              id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
            },
            MissionId: 'c8b4f4ad-fe27-400b-9015-82f40c5c6672',
            Notes: [],
            PackageCount: '1 colis',
            Packages: [
               {
                  Content: 'Stylos magiques',
                  Dimensions: '30x10x10',
                  TripId: 't3',
                  Weight: '1 kg',
                  id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
                },
                {
                  Content: 'Enveloppe',
                  Dimensions: '30x21x1',
                  TripId: 't3',
                  Weight: '0.2 g',
                  id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
                }
            ],
            Pick: {
              Contact: null,
              LongDescription: 'Mecano SA\\nAv. des Alpes 5\\n1023 Crissier',
              Notes: [
                {
                  Content: 'Attention:\\nPaiement comptant exigé !',
                  Glyphs: [
                    {
                      Name: 'warning',
                      Glyph: 'warning',
                      Description: 'Attention',
                    },
                    {
                      Name: 'euro',
                      Glyph: 'euro',
                      Description: 'Paiement en Euro',
                    },
                  ],
                },
              ],
              PlanedTime: '2016-11-30T10.05:03.9052723+01:00',
              RealisedTime: '2016-12-01T10:07:12.7507283+01:00',
              ShortDescription: 'Mecano SA',
              Status: 'init',
              TripId: 't3',
              Type: 'pick',
              Zone: 'Zone A',
              id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
            },
            Price: '32 CHF',
            Product: 'Standard',
            Urgency: '100',
            Weight: '1.2 kg',
            id: 't3'
          },
          Type: 'pair',
          Warning: '',
          id: 'id-ticket-to-dispatch-0'
        },
       {
          Extended: 'false',
          OwnerId: 'id-to-dispatch',
          Selected: 'false',
          Status: 'backlog',
          Trip: {
            Description: '',
            Drop: {
              Contact: null,
              LongDescription: 'Peter Mercier',
              Notes: [],
              PlanedTime: '2016-11-30T13:30:03.9052723+01:00',
              RealisedTime: '2016-12-01T10:07:12.7657601+01:00',
              ShortDescription: 'Mercier P.',
              Status: 'init',
              TripId: 't4',
              Type: 'drop',
              Zone: 'Zone B',
              id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
            },
            MissionId: 'c8b4f4ad-fe27-400b-9015-82f40c5c6673',
            Notes: [],
            PackageCount: '1 colis',
            Packages: [
               {
                  Content: 'Stylos magiques',
                  Dimensions: '30x10x10',
                  TripId: 't4',
                  Weight: '1 kg',
                  id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
                }
            ],
            Pick: {
              Contact: null,
              LongDescription: 'Migros SA\\nRue du Pont Neuf 26\\n1009 Prilly',
              Notes: [

              ],
              PlanedTime: '2016-11-30T10.45:03.9052723+01:00',
              RealisedTime: '2016-12-01T10:07:12.7507283+01:00',
              ShortDescription: 'Migros Pont-Neuf',
              Status: 'init',
              TripId: 't4',
              Type: 'pick',
              Zone: 'Zone B',
              id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
            },
            Price: '17 CHF',
            Product: 'Dring-dring',
            Urgency: '80',
            Weight: '1 kg',
            id: 't4'
          },
          Type: 'pair',
          Warning: '',
          id: 'id-ticket-to-dispatch-1'
        }
    ],
    id: 'id-to-dispatch'
  },
  TicketsTrays: [
     {
        Name: 'T1',
        Position: '30px,50px',
        Rotation: '5deg',
        Tickets: [
          {
            Extended: 'false',
            OwnerId: 'id-tray-0',
            Selected: 'false',
            Status: 'tray',
            Trip: {
              Description: '',
              Drop: {
                Contact: null,
                LongDescription: 'Micro SA\\nAv. Dufour 4\\n1010 Renens',
                Notes: [
                ],
                PlanedTime: '2016-11-30T16:00:03.9052723+01:00',
                RealisedTime: '2016-12-01T10:07:12.7657601+01:00',
                ShortDescription: 'Micro SA',
                Status: 'init',
                TripId: 't5',
                Type: 'drop',
                Zone: 'Zone A',
                id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
              },
              MissionId: 'c8b4f4ad-fe27-400b-9015-82f40c5c6675',
              Notes: [],
              PackageCount: '1 colis',
              Packages: [
                 {
                    Content: 'Box standard B',
                    Dimensions: '30x10x10',
                    TripId: 't5',
                    Weight: '0.4 kg',
                    id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
                  },
                  {
                    Content: 'Enveloppe',
                    Dimensions: '30x21x1',
                    TripId: 't5',
                    Weight: '0.1 kg',
                    id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
                  },
                  {
                    Content: 'Sac en vrac',
                    Dimensions: '20x20x20',
                    TripId: 't5',
                    Weight: '0.1 kg',
                    id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
                  },
              ],
              Pick: {
                Contact: null,
                LongDescription: 'Tagada AG\\nRue de Sans Unique 18\\n1000 Lausanne',
                Notes: [
                  {
                    Content: 'Livraison selon les indications standards de la dispo',
                    Glyphs: [
                      {
                        Name: 'bookmark-secondary',
                        Glyph: 'bookmark-secondary',
                        Description: '',
                      },
                    ],
                  },
                ],
                PlanedTime: '2016-11-30T11:15:03.9052723+01:00',
                RealisedTime: '2016-12-01T10:07:12.7507283+01:00',
                ShortDescription: 'Tagada AG',
                Status: 'init',
                TripId: 't5',
                Type: 'pick',
                Zone: 'Zone C',
                id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
              },
              Price: '17 CHF',
              Product: 'Standard',
              Urgency: '20',
              Weight: '0.6 kg',
              id: 't5'
            },
            Type: 'pair',
            Warning: '',
            id: 'id-tray-0-ticket-0'
          },
        ],
        id: 'id-tray-0'
      },
     {
        Name: 'T2',
        Position: '310px,50px',
        Rotation: '-1deg',
        Tickets: [
        ],
        id: 'id-tray-1'
      },
      {
        Name: 'T3',
        Position: '590px,50px',
        Rotation: '2deg',
        Tickets: [
        ],
        id: 'id-tray-2'
      },
  ],
  id: 'id-trays'
};

export default function getData () {
  return data;
}
