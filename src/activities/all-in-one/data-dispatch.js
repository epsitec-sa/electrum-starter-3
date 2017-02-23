'use strict';

const data =
{
  BacklogFilter: 'all',
  BacklogSort: 'byPickTime',
  Roadbooks: [
    {
      Compacted: 'false',
      ShowHidden: 'false',
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
          Order: 0,
          OwnerId: 'id-tickets-to-paul',
          Status: 'dispatched',
          Trip: {
            Description: '',
            Drop: {
              Contact: null,
              LongDescription: 'Juliette Dupond',
              Notes: [
              ],
              PlanedDate: '2016-11-30',
              StartPlanedTime: '14:00:00',
              EndPlanedTime: '14:30:00',
              RealisedDate: '0001-01-01',
              RealisedTime: '00:00:00',
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
              PlanedDate: '2016-11-30',
              StartPlanedTime: '11:00:00',
              EndPlanedTime: '12:00:00',
              RealisedDate: '0001-01-01',
              RealisedTime: '00:00:00',
              ShortDescription: 'Coop St. Laurent',
              Status: 'init',
              TripId: 't1',
              Type: 'pick',
              Zone: 'Zone B',
              id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
            },
            Price: '32 CHF',
            Product: 'Dring-dring',
            Urgency: '100',
            Weight: '1.2 kg',
            id: 't1'
          },
          Type: 'pick',
          Warning: '',
          id: 'id-ticket-paul-0'
        },
        {
          Order: 1,
          OwnerId: 'id-tickets-to-paul',
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
              PlanedDate: '2016-11-30',
              StartPlanedTime: '14:00:00',
              EndPlanedTime: '16:00:00',
              RealisedDate: '0001-01-01',
              RealisedTime: '00:00:00',
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
              PlanedDate: '2016-11-30',
              StartPlanedTime: '11:00:00',
              EndPlanedTime: '11:30:00',
              RealisedDate: '0001-01-01',
              RealisedTime: '00:00:00',
              ShortDescription: 'Coop St. Laurent',
              Status: 'init',
              TripId: 't2',
              Type: 'pick',
              Zone: 'Zone C',
              id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
            },
            Price: '32 CHF',
            Product: 'Dring-dring',
            Urgency: '100',
            Weight: '1.2 kg',
            id: 't2'
          },
          Type: 'drop',
          Warning: '',
          id: 'id-ticket-paul-1'
        },
        {
          Order: 0,
          OwnerId: 'id-tickets-to-paul',
          Status: 'pre-dispatched',
          Trip: {
            Description: '',
            Drop: {
              Contact: null,
              LongDescription: 'Bernard Franko',
              Notes: [
              ],
              PlanedDate: '2016-11-30',
              StartPlanedTime: '14:30:00',
              EndPlanedTime: '14:40:00',
              RealisedDate: '0001-01-01',
              RealisedTime: '00:00:00',
              ShortDescription: 'Franko B.',
              Status: 'init',
              TripId: 't1b',
              Type: 'drop',
              Zone: 'Zone A',
              id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
            },
            MissionId: 'id-ticket-paul-link-2',
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
              LongDescription: 'Flagada & Co\\nPlace St. Laurent 15\\n1004 Lausanne',
              Notes: [
                {
                  Content: 'Livraison selon les indications standards de la dispo',
                  Glyphs: [
                    {
                      Name: 'warning',
                      Glyph: 'warning',
                      Description: '',
                    },
                  ],
                },
              ],
              PlanedDate: '2016-11-30',
              StartPlanedTime: '11:45:00',
              EndPlanedTime: '12:30:00',
              RealisedDate: '0001-01-01',
              RealisedTime: '00:00:00',
              ShortDescription: 'Flagada & Co',
              Status: 'init',
              TripId: 't1b',
              Type: 'pick',
              Zone: 'Zone B',
              id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
            },
            Price: '32 CHF',
            Product: 'Standard',
            Urgency: '100',
            Weight: '1.2 kg',
            id: 't1b'
          },
          Type: 'pick',
          Warning: '',
          id: 'id-ticket-paul-2'
        },
        {
          Order: 1,
          OwnerId: 'id-tickets-to-paul',
          Status: 'pre-dispatched',
          Trip: {
            Description: '',
            Drop: {
              Contact: null,
              LongDescription: 'Bernard Franko',
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
              ],
              PlanedDate: '2016-11-30',
              StartPlanedTime: '14:30:00',
              EndPlanedTime: '15:00:00',
              RealisedDate: '0001-01-01',
              RealisedTime: '00:00:00',
              ShortDescription: 'Franko B.',
              Status: 'init',
              TripId: 't2b',
              Type: 'drop',
              Zone: 'Zone A',
              id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
            },
            MissionId: 'id-ticket-paul-link-2',
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
              LongDescription: 'Flagada & Co\\nPlace St. Laurent 15\\n1004 Lausanne',
              Notes: [
              ],
              PlanedDate: '2016-11-30',
              StartPlanedTime: '11:45:00',
              EndPlanedTime: '15:00:00',
              RealisedDate: '0001-01-01',
              RealisedTime: '00:00:00',
              ShortDescription: 'Flagada & Co',
              Status: 'init',
              TripId: 't2b',
              Type: 'pick',
              Zone: 'Zone C',
              id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
            },
            Price: '32 CHF',
            Product: 'Standard',
            Urgency: '100',
            Weight: '1.2 kg',
            id: 't2b'
          },
          Type: 'drop',
          Warning: '',
          id: 'id-ticket-paul-3'
        },
      ],
      Transport: 'bicycle',
      id: 'id-tickets-to-paul'
    },
    {
      Compacted: 'false',
      ShowHidden: 'false',
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
        {
          Order: 0,
          OwnerId: 'id-tickets-to-sandra',
          Status: 'pre-dispatched',
          Trip: {
            Description: '',
            Drop: {
              Contact: null,
              LongDescription: 'Bernard Franko',
              Notes: [
              ],
              PlanedDate: '2016-11-30',
              StartPlanedTime: '15:30:00',
              EndPlanedTime: '15:45:00',
              RealisedDate: '0001-01-01',
              RealisedTime: '00:00:00',
              ShortDescription: 'Muhler A.',
              Status: 'init',
              TripId: 't1c',
              Type: 'drop',
              Zone: 'Zone A',
              id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
            },
            MissionId: 'id-ticket-sandra-link-0',
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
              LongDescription: 'Flagada & Co\\nPlace St. Laurent 15\\n1004 Lausanne',
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
              PlanedDate: '2016-11-30',
              StartPlanedTime: '11:45:00',
              EndPlanedTime: '12:00:00',
              RealisedDate: '0001-01-01',
              RealisedTime: '00:00:00',
              ShortDescription: 'Blibli',
              Status: 'init',
              TripId: 't1c',
              Type: 'pick',
              Zone: 'Zone B',
              id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
            },
            Price: '32 CHF',
            Product: 'Standard',
            Urgency: '100',
            Weight: '1.2 kg',
            id: 't1c'
          },
          Type: 'pick',
          Warning: '',
          id: 'id-ticket-sandra-0'
        },
        {
          Order: 1,
          OwnerId: 'id-tickets-to-sandra',
          Status: 'pre-dispatched',
          Trip: {
            Description: '',
            Drop: {
              Contact: null,
              LongDescription: 'Bernard Franko',
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
              PlanedDate: '2016-11-30',
              StartPlanedTime: '15:30:00',
              EndPlanedTime: '16:30:00',
              RealisedDate: '0001-01-01',
              RealisedTime: '00:00:00',
              ShortDescription: 'Muhler A.',
              Status: 'init',
              TripId: 't2c',
              Type: 'drop',
              Zone: 'Zone A',
              id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
            },
            MissionId: 'id-ticket-sandra-link-0',
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
              LongDescription: 'Flagada & Co\\nPlace St. Laurent 15\\n1004 Lausanne',
              Notes: [
              ],
              PlanedDate: '2016-11-30',
              StartPlanedTime: '11:45:00',
              EndPlanedTime: '12:15:00',
              RealisedDate: '0001-01-01',
              RealisedTime: '00:00:00',
              ShortDescription: 'Blibli',
              Status: 'init',
              TripId: 't2c',
              Type: 'pick',
              Zone: 'Zone C',
              id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
            },
            Price: '32 CHF',
            Product: 'Standard',
            Urgency: '100',
            Weight: '1.2 kg',
            id: 't2c'
          },
          Type: 'drop',
          Warning: '',
          id: 'id-ticket-sandra-1'
        },
      ],
      Transport: 'car',
      id: 'id-tickets-to-sandra'
    },
    {
      Compacted: 'false',
      ShowHidden: 'false',
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
      Compacted: 'false',
      ShowHidden: 'false',
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
    {
      Compacted: 'false',
      ShowHidden: 'false',
      Messenger: {
        Name: 'François',
        Photo: {
          Description: '',
          Glyph: 'user',
          Name: '',
          Path: '',
          id: ''
        },
        id: 'id-François'
      },
      Name: 'François — 01.12.2016',
      Revenue: '0 CHF',
      Tickets: [
      ],
      Transport: 'bicycle',
      id: 'id-tickets-to-François'
    },
    {
      Compacted: 'false',
      ShowHidden: 'false',
      Messenger: {
        Name: 'Frédérique',
        Photo: {
          Description: '',
          Glyph: 'user',
          Name: '',
          Path: '',
          id: ''
        },
        id: 'id-Frédérique'
      },
      Name: 'Frédérique — 01.12.2016',
      Revenue: '0 CHF',
      Tickets: [
      ],
      Transport: 'bicycle',
      id: 'id-tickets-to-Frédérique'
    },
    {
      Compacted: 'false',
      ShowHidden: 'false',
      Messenger: {
        Name: 'Charlotte',
        Photo: {
          Description: '',
          Glyph: 'user',
          Name: '',
          Path: '',
          id: ''
        },
        id: 'id-Charlotte'
      },
      Name: 'Charlotte — 01.12.2016',
      Revenue: '0 CHF',
      Tickets: [
      ],
      Transport: 'bicycle',
      id: 'id-tickets-to-Charlotte'
    },
    {
      Compacted: 'false',
      ShowHidden: 'false',
      Messenger: {
        Name: 'Béatrice',
        Photo: {
          Description: '',
          Glyph: 'user',
          Name: '',
          Path: '',
          id: ''
        },
        id: 'id-Béatrice'
      },
      Name: 'Béatrice — 01.12.2016',
      Revenue: '0 CHF',
      Tickets: [
      ],
      Transport: 'bicycle',
      id: 'id-tickets-to-Béatrice'
    },
    {
      Compacted: 'false',
      ShowHidden: 'false',
      Messenger: {
        Name: 'Marc',
        Photo: {
          Description: '',
          Glyph: 'user',
          Name: '',
          Path: '',
          id: ''
        },
        id: 'id-Marc'
      },
      Name: 'Marc — 01.12.2016',
      Revenue: '0 CHF',
      Tickets: [
      ],
      Transport: 'car',
      id: 'id-tickets-to-Marc'
    },
    {
      Compacted: 'false',
      ShowHidden: 'false',
      Messenger: {
        Name: 'Charles',
        Photo: {
          Description: '',
          Glyph: 'user',
          Name: '',
          Path: '',
          id: ''
        },
        id: 'id-Charles'
      },
      Name: 'Charles — 01.12.2016',
      Revenue: '0 CHF',
      Tickets: [
      ],
      Transport: 'bicycle',
      id: 'id-tickets-to-Charles'
    },
    {
      Compacted: 'false',
      ShowHidden: 'false',
      Messenger: {
        Name: 'Henri',
        Photo: {
          Description: '',
          Glyph: 'user',
          Name: '',
          Path: '',
          id: ''
        },
        id: 'id-Henri'
      },
      Name: 'Henri — 01.12.2016',
      Revenue: '0 CHF',
      Tickets: [
      ],
      Transport: 'bicycle',
      id: 'id-tickets-to-Henri'
    },
    {
      Compacted: 'false',
      ShowHidden: 'false',
      Messenger: {
        Name: 'Simone',
        Photo: {
          Description: '',
          Glyph: 'user',
          Name: '',
          Path: '',
          id: ''
        },
        id: 'id-Simone'
      },
      Name: 'Simone — 01.12.2016',
      Revenue: '0 CHF',
      Tickets: [
      ],
      Transport: 'bicycle',
      id: 'id-tickets-to-Simone'
    },
    {
      Compacted: 'false',
      ShowHidden: 'false',
      Messenger: {
        Name: 'Véronique',
        Photo: {
          Description: '',
          Glyph: 'user',
          Name: '',
          Path: '',
          id: ''
        },
        id: 'id-Véronique'
      },
      Name: 'Véronique — 01.12.2016',
      Revenue: '0 CHF',
      Tickets: [
      ],
      Transport: 'bicycle',
      id: 'id-tickets-to-Véronique'
    },
    {
      Compacted: 'false',
      ShowHidden: 'false',
      Messenger: {
        Name: 'Alice',
        Photo: {
          Description: '',
          Glyph: 'user',
          Name: '',
          Path: '',
          id: ''
        },
        id: 'id-Alice'
      },
      Name: 'Alice — 01.12.2016',
      Revenue: '0 CHF',
      Tickets: [
      ],
      Transport: 'bicycle',
      id: 'id-tickets-to-Alice'
    },
  ],
  Name: 'New board',
  Status: 'open',
  Backlog: {
    Tickets: [
       {
        OwnerId: 'id-to-dispatch',
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
            PlanedDate: '2016-11-30',
            StartPlanedTime: '11:15:00',
            EndPlanedTime: '12:00:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Fiduciaire Kdo',
            Status: 'init',
            TripId: 't3',
            Type: 'drop',
            Zone: 'Zone A',
            id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
          },
          MissionId: 'mission-0',
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
            PlanedDate: '2016-11-30',
            StartPlanedTime: '10:05:00',
            EndPlanedTime: '11:05:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
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
        Type: 'pick',
        Warning: '',
        id: 'id-ticket-to-dispatch-0p'
      },
      {
        OwnerId: 'id-to-dispatch',
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
            PlanedDate: '2016-11-30',
            StartPlanedTime: '11:15:00',
            EndPlanedTime: '12:00:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Fiduciaire Kdo',
            Status: 'init',
            TripId: 't3',
            Type: 'drop',
            Zone: 'Zone A',
            id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
          },
          MissionId: 'mission-0',
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
            PlanedDate: '2016-11-30',
            StartPlanedTime: '10:05:00',
            EndPlanedTime: '11:05:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
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
        Type: 'drop',
        Warning: '',
        id: 'id-ticket-to-dispatch-0d'
      },
      {
        OwnerId: 'id-to-dispatch',
        Status: 'backlog',
        Trip: {
          Description: '',
          Drop: {
            Contact: null,
            LongDescription: 'Peter Mercier',
            Notes: [],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '11:45:00',
            EndPlanedTime: '14:30:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Mercier P.',
            Status: 'init',
            TripId: 't4',
            Type: 'drop',
            Zone: 'Zone B',
            id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
          },
          MissionId: 'mission-1',
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
            Notes: [],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '10:45:00',
            EndPlanedTime: '14:00:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
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
        Type: 'pick',
        Warning: '',
        id: 'id-ticket-to-dispatch-1p'
      },
      {
        OwnerId: 'id-to-dispatch',
        Status: 'backlog',
        Trip: {
         Description: '',
         Drop: {
           Contact: null,
           LongDescription: 'Peter Mercier',
           Notes: [],
           PlanedDate: '2016-11-30',
           StartPlanedTime: '11:45:00',
           EndPlanedTime: '14:30:00',
           RealisedDate: '0001-01-01',
           RealisedTime: '00:00:00',
           ShortDescription: 'Mercier P.',
           Status: 'init',
           TripId: 't4',
           Type: 'drop',
           Zone: 'Zone B',
           id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
         },
         MissionId: 'mission-1',
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
           Notes: [],
           PlanedDate: '2016-11-30',
           StartPlanedTime: '10:45:00',
           EndPlanedTime: '14:00:00',
           RealisedDate: '0001-01-01',
           RealisedTime: '00:00:00',
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
        Type: 'drop',
        Warning: '',
        id: 'id-ticket-to-dispatch-1d'
      },
      {
        OwnerId: 'id-to-dispatch',
        Status: 'backlog',
        Trip: {
          Description: '',
          Drop: {
            Contact: null,
            LongDescription: 'André Schmidt\\nClosalet 28A\\n1002 Lausanne',
            Notes: [],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '13:40:00',
            EndPlanedTime: '13:40:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Schmidt A.',
            Status: 'init',
            TripId: 't5',
            Type: 'drop',
            Zone: 'Zone A',
            id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
          },
          MissionId: 'mission-2',
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
            Notes: [],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '10:50:00',
            EndPlanedTime: '11:00:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Migros Pont-Neuf',
            Status: 'init',
            TripId: 't5',
            Type: 'pick',
            Zone: 'Zone B',
            id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
          },
          Price: '52 CHF',
          Product: 'Dring-dring',
          Urgency: '40',
          Weight: '1.4 kg',
          id: 't5'
        },
        Type: 'pick',
        Warning: '',
        id: 'id-ticket-to-dispatch-2p'
      },
      {
        OwnerId: 'id-to-dispatch',
        Status: 'backlog',
        Trip: {
          Description: '',
          Drop: {
            Contact: null,
            LongDescription: 'André Schmidt\\nClosalet 28A\\n1002 Lausanne',
            Notes: [],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '13:40:00',
            EndPlanedTime: '13:40:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Schmidt A.',
            Status: 'init',
            TripId: 't5',
            Type: 'drop',
            Zone: 'Zone A',
            id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
          },
          MissionId: 'mission-2',
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
            Notes: [],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '10:50:00',
            EndPlanedTime: '11:00:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Migros Pont-Neuf',
            Status: 'init',
            TripId: 't5',
            Type: 'pick',
            Zone: 'Zone B',
            id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
          },
          Price: '52 CHF',
          Product: 'Dring-dring',
          Urgency: '40',
          Weight: '1.4 kg',
          id: 't5'
        },
        Type: 'drop',
        Warning: '',
        id: 'id-ticket-to-dispatch-2d'
      },
      {
        OwnerId: 'id-to-dispatch',
        Status: 'backlog',
        Trip: {
          Description: '',
          Drop: {
            Contact: null,
            LongDescription: 'Aux belles fleurs\\nPlace du Marché 1\\n1000 Lausanne',
            Notes: [],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '14:15:00',
            EndPlanedTime: '14:30:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Aux belles fleurs',
            Status: 'init',
            TripId: 't6',
            Type: 'drop',
            Zone: 'Zone B',
            id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
          },
          MissionId: 'mission-3',
          Notes: [],
          PackageCount: '1 colis',
          Packages: [
             {
                Content: 'Stylos magiques',
                Dimensions: '30x10x10',
                TripId: 't6',
                Weight: '1 kg',
                id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
              }
          ],
          Pick: {
            Contact: null,
            LongDescription: 'Arboressa SA\\nAv. du Tir Fédéral 102\\n1009 Prilly',
            Notes: [
              {
                Content: 'En raison de travaux à la rue Centrale, tout le trafic passant par cette rue doit impérativement être dévié par la rue du Midi.',
                Glyphs: [
                  {
                    Name: 'bookmark-base',
                    Glyph: 'bookmark-base',
                    Description: '',
                  },
                ],
              },
              {
                Content: 'Code porte #45601.',
                Glyphs: [
                  {
                    Name: 'bookmark-secondary',
                    Glyph: 'bookmark-secondary',
                    Description: '',
                  },
                ],
              },
            ],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '11:05:00',
            EndPlanedTime: '12:25:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Arboressa',
            Status: 'init',
            TripId: 't6',
            Type: 'pick',
            Zone: 'Zone B',
            id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
          },
          Price: '17 CHF',
          Product: 'Urgent',
          Urgency: '10',
          Weight: '1 kg',
          id: 't6'
        },
        Type: 'pick',
        Warning: '',
        id: 'id-ticket-to-dispatch-3p'
      },
      {
        OwnerId: 'id-to-dispatch',
        Status: 'backlog',
        Trip: {
          Description: '',
          Drop: {
            Contact: null,
            LongDescription: 'Aux belles fleurs\\nPlace du Marché 1\\n1000 Lausanne',
            Notes: [],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '14:15:00',
            EndPlanedTime: '14:30:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Aux belles fleurs',
            Status: 'init',
            TripId: 't6',
            Type: 'drop',
            Zone: 'Zone B',
            id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
          },
          MissionId: 'mission-3',
          Notes: [],
          PackageCount: '1 colis',
          Packages: [
             {
                Content: 'Stylos magiques',
                Dimensions: '30x10x10',
                TripId: 't6',
                Weight: '1 kg',
                id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
              }
          ],
          Pick: {
            Contact: null,
            LongDescription: 'Arboressa SA\\nAv. du Tir Fédéral 102\\n1009 Prilly',
            Notes: [
              {
                Content: 'En raison de travaux à la rue Centrale, tout le trafic passant par cette rue doit impérativement être dévié par la rue du Midi.',
                Glyphs: [
                  {
                    Name: 'bookmark-base',
                    Glyph: 'bookmark-base',
                    Description: '',
                  },
                ],
              },
              {
                Content: 'Code porte #45601.',
                Glyphs: [
                  {
                    Name: 'bookmark-secondary',
                    Glyph: 'bookmark-secondary',
                    Description: '',
                  },
                ],
              },
            ],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '11:05:00',
            EndPlanedTime: '12:25:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Arboressa',
            Status: 'init',
            TripId: 't6',
            Type: 'pick',
            Zone: 'Zone B',
            id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
          },
          Price: '17 CHF',
          Product: 'Urgent',
          Urgency: '10',
          Weight: '1 kg',
          id: 't6'
        },
        Type: 'drop',
        Warning: '',
        id: 'id-ticket-to-dispatch-3d'
      },
      {
        OwnerId: 'id-to-dispatch',
        Status: 'backlog',
        Trip: {
          Description: '',
          Drop: {
            Contact: null,
            LongDescription: 'Fiduciaire Franko & Frères\\nMadame Darbelet\\nAv. Victor Ruffy 3\\n1004 Lausanne',
            Notes: [],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '15:30:00',
            EndPlanedTime: '16:00:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Fiduciaire Franko & Frères',
            Status: 'init',
            TripId: 't7',
            Type: 'drop',
            Zone: 'Zone B',
            id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
          },
          MissionId: 'mission-4',
          Notes: [],
          PackageCount: '1 colis',
          Packages: [
             {
                Content: 'Stylos magiques',
                Dimensions: '30x10x10',
                TripId: 't7',
                Weight: '1 kg',
                id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
              }
          ],
          Pick: {
            Contact: null,
            LongDescription: 'Etude Leclerc et Me Giorgino\\n1032 Crissier',
            Notes: [],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '11:45:00',
            EndPlanedTime: '11:45:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Etude Leclerc et Me Giorgino',
            Status: 'init',
            TripId: 't7',
            Type: 'pick',
            Zone: 'Zone A',
            id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
          },
          Price: '17 CHF',
          Product: 'Urgent',
          Urgency: '0',
          Weight: '2.2 kg',
          id: 't7'
        },
        Type: 'pick',
        Warning: '',
        id: 'id-ticket-to-dispatch-4p'
      },
      {
        OwnerId: 'id-to-dispatch',
        Status: 'backlog',
        Trip: {
          Description: '',
          Drop: {
            Contact: null,
            LongDescription: 'Fiduciaire Franko & Frères\\nMadame Darbelet\\nAv. Victor Ruffy 3\\n1004 Lausanne',
            Notes: [],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '15:30:00',
            EndPlanedTime: '16:00:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Fiduciaire Franko & Frères',
            Status: 'init',
            TripId: 't7',
            Type: 'drop',
            Zone: 'Zone B',
            id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
          },
          MissionId: 'mission-4',
          Notes: [],
          PackageCount: '1 colis',
          Packages: [
             {
                Content: 'Stylos magiques',
                Dimensions: '30x10x10',
                TripId: 't7',
                Weight: '1 kg',
                id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
              }
          ],
          Pick: {
            Contact: null,
            LongDescription: 'Etude Leclerc et Me Giorgino\\n1032 Crissier',
            Notes: [],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '11:45:00',
            EndPlanedTime: '11:45:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Etude Leclerc et Me Giorgino',
            Status: 'init',
            TripId: 't7',
            Type: 'pick',
            Zone: 'Zone A',
            id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
          },
          Price: '17 CHF',
          Product: 'Urgent',
          Urgency: '0',
          Weight: '2.2 kg',
          id: 't7'
        },
        Type: 'drop',
        Warning: '',
        id: 'id-ticket-to-dispatch-4d'
      },
      {
        OwnerId: 'id-tray-0',
        Status: 'backlog',
        Trip: {
          Description: '',
          Drop: {
            Contact: null,
            LongDescription: 'Micro SA\\nAv. Dufour 4\\n1010 Renens',
            Notes: [
            ],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '16:00:00',
            EndPlanedTime: '17:00:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Micro SA',
            Status: 'init',
            TripId: 't100',
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
            PlanedDate: '2016-11-30',
            StartPlanedTime: '11:15:00',
            EndPlanedTime: '13:00:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Tagada AG',
            Status: 'init',
            TripId: 't100',
            Type: 'pick',
            Zone: 'Zone C',
            id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
          },
          Price: '17 CHF',
          Product: 'Standard',
          Urgency: '0',
          Weight: '0.6 kg',
          id: 't5'
        },
        Type: 'pick',
        Warning: '',
        id: 'id-tray-0-ticket-0p'
      },
      {
        OwnerId: 'id-tray-0',
        Status: 'backlog',
        Trip: {
          Description: '',
          Drop: {
            Contact: null,
            LongDescription: 'Micro SA\\nAv. Dufour 4\\n1010 Renens',
            Notes: [
            ],
            PlanedDate: '2016-11-30',
            StartPlanedTime: '16:00:00',
            EndPlanedTime: '17:00:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Micro SA',
            Status: 'init',
            TripId: 't100',
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
            PlanedDate: '2016-11-30',
            StartPlanedTime: '11:15:00',
            EndPlanedTime: '13:00:00',
            RealisedDate: '0001-01-01',
            RealisedTime: '00:00:00',
            ShortDescription: 'Tagada AG',
            Status: 'init',
            TripId: 't100',
            Type: 'pick',
            Zone: 'Zone C',
            id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
          },
          Price: '17 CHF',
          Product: 'Standard',
          Urgency: '0',
          Weight: '0.6 kg',
          id: 't5'
        },
        Type: 'drop',
        Warning: '',
        id: 'id-tray-0-ticket-0d'
      },
    ],
    id: 'id-to-dispatch'
  },
  Desk: [
     {
        Name: 'Après-midi',
        Tickets: [],
        id: 'id-tray-0'
      },
     {
        Name: 'Urgent',
        Tickets: [],
        id: 'id-tray-1'
      },
      {
        Name: 'T3',
        Tickets: [],
        id: 'id-tray-2'
      },
      {
        Name: 'T4',
        Tickets: [],
        id: 'id-tray-3'
      },
      {
        Name: 'T5',
        Tickets: [],
        id: 'id-tray-4'
      },
      {
        Name: 'T6',
        Tickets: [],
        id: 'id-tray-5'
      },
      {
        Name: 'T7',
        Tickets: [],
        id: 'id-tray-6'
      },
      {
        Name: 'T8',
        Tickets: [],
        id: 'id-tray-7'
      },
  ],
  id: 'id-roadbooks'
};

module.exports = {data};
