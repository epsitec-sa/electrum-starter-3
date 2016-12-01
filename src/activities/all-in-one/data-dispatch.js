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
        id: 'c78bb24b-6465-44dd-9c74-524726a0aac7'
      },
      Name: 'Paul — 01.12.2016',
      Revenue: '250 CHF',
      Tickets: [
        {
          Order: 0,
          Owner: 'messenger-Paul',
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
              TripId: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa',
              Type: 'drop',
              ZoneId: 'c713cbe1-e4cf-465a-8cf5-487cbb9852b0',
              id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
            },
            MissionId: 'c8b4f4ad-fe27-400b-9015-82f40c5c6678',
            Notes: [],
            PackageCount: '1 colis',
            Packages: [
               {
                  Content: 'Stylos magiques',
                  Dimensions: '30x10x10',
                  TripId: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa',
                  Weight: '1 kg',
                  id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
                },
                {
                  Content: 'Enveloppe',
                  Dimensions: '30x21x1',
                  TripId: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa',
                  Weight: '0.2 g',
                  id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
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
              TripId: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa',
              Type: 'pick',
              ZoneId: 'c713cbe1-e4cf-465a-8cf5-487cbb9852b0',
              id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
            },
            Price: '32 CHF',
            Product: 'Standard',
            Urgency: '100',
            Weight: '1.2 kg',
            id: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa'
          },
          Type: 'pick',
          id: 'e9a247ff-1ec2-45e9-b7d5-f5923727902d'
        },
        {
          Order: 1,
          Owner: 'messenger-Paul',
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
              TripId: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa',
              Type: 'drop',
              ZoneId: 'c713cbe1-e4cf-465a-8cf5-487cbb9852b0',
              id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
            },
            MissionId: 'c8b4f4ad-fe27-400b-9015-82f40c5c6678',
            Notes: [],
            PackageCount: '1 colis',
            Packages: [
               {
                  Content: 'Stylos magiques',
                  Dimensions: '30x10x10',
                  TripId: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa',
                  Weight: '1 kg',
                  id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
                },
                {
                  Content: 'Enveloppe',
                  Dimensions: '30x21x1',
                  TripId: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa',
                  Weight: '0.2 g',
                  id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
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
              TripId: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa',
              Type: 'pick',
              ZoneId: 'c713cbe1-e4cf-465a-8cf5-487cbb9852b0',
              id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
            },
            Price: '32 CHF',
            Product: 'Standard',
            Urgency: '100',
            Weight: '1.2 kg',
            id: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa'
          },
          Type: 'drop',
          id: 'e9a247ff-1ec2-45e9-b7d5-f5923727902d'
        },
      ],
      Transport: 'bicycle',
      id: 'f2ab3015-9607-4505-b62c-a907f349a9c8'
    }
  ],
  Name: 'New board',
  Status: 'open',
  TicketsToDispatch: {
    Tickets: [
       {
          Order: 0,
          Owner: 'to-dispatch-zone',
          Status: 'to-dispatch',
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
              TripId: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa',
              Type: 'drop',
              ZoneId: 'c713cbe1-e4cf-465a-8cf5-487cbb9852b0',
              id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
            },
            MissionId: 'c8b4f4ad-fe27-400b-9015-82f40c5c6676',
            Notes: [],
            PackageCount: '1 colis',
            Packages: [
               {
                  Content: 'Stylos magiques',
                  Dimensions: '30x10x10',
                  TripId: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa',
                  Weight: '1 kg',
                  id: 'd23724dd-ded8-4071-8a6b-150cd2add84d'
                },
                {
                  Content: 'Enveloppe',
                  Dimensions: '30x21x1',
                  TripId: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa',
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
              TripId: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa',
              Type: 'pick',
              ZoneId: 'c713cbe1-e4cf-465a-8cf5-487cbb9852b0',
              id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
            },
            Price: '32 CHF',
            Product: 'Standard',
            Urgency: '100',
            Weight: '1.2 kg',
            id: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa'
          },
          Type: 'both',
          id: 'e9a247ff-1ec2-45e9-b7d5-f5923727902d'
        },
       {
          Order: 1,
          Owner: 'to-dispatch-zone',
          Status: 'to-dispatch',
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
              TripId: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa',
              Type: 'drop',
              ZoneId: 'c713cbe1-e4cf-465a-8cf5-487cbb9852b0',
              id: 'c3da226c-dd9e-4260-a245-2d39f235aaae'
            },
            MissionId: 'c8b4f4ad-fe27-400b-9015-82f40c5c6677',
            Notes: [],
            PackageCount: '1 colis',
            Packages: [
               {
                  Content: 'Stylos magiques',
                  Dimensions: '30x10x10',
                  TripId: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa',
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
              TripId: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa',
              Type: 'pick',
              ZoneId: 'c713cbe1-e4cf-465a-8cf5-487cbb9852b0',
              id: 'cd2308d1-42b6-4ffb-903c-9a1fe3bf2c3b'
            },
            Price: '17 CHF',
            Product: 'Dring-dring',
            Urgency: '80',
            Weight: '1 kg',
            id: 'dc1bc9f2-6882-4d6b-955a-37774b1b9aaa'
          },
          Type: 'both',
          id: 'c767e7a2-187b-4092-99c0-57749f79655d'
        }
    ],
    id: 'fdf0bf2d-3810-4aca-9b17-3fd77be0e479'
  },
  TicketsTrays: [
     {
        Name: 'T1',
        Position: '0,0',
        Rotation: '0',
        Tickets: [

        ],
        id: 'fa487d69-8fef-46db-9d4d-e6991e54968f'
      },
     {
        Name: 'T2',
        Position: '0,0',
        Rotation: '0',
        Tickets: [

        ],
        id: 'f0e46424-00cd-4c2f-a56c-53a671300fe1'
      }
  ],
  id: 'c8671498-5a41-4261-9537-1131736681bf'
};

export default function getData () {
  return data;
}
