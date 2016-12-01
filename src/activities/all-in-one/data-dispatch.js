'use strict';

const data =
{
  MessengersBooks: [],
  Name: 'New board',
  Status: 'open',
  Tickets: [],
  TicketsToDispatch: {
    Tickets: [
      {
        Order: 0,
        Owner: 'to-dispatch-zone',
        Status: 'to-dispatch',
        Trip: {
          Count: '636161065837036190',
          Description: '',
          Drop: {
            Contact: null,
            LongDescription: 'M. Krens',
            Notes: [],
            PlanedTime: '2016-11-30T12:43:03.9052723+01:00',
            RealisedTime: '2016-11-30T12:43:03.9052723+01:00',
            ShortDescription: 'M. Krens',
            Status: 'init',
            TripId: 'd08cc0bf-121e-4a91-abc6-ad762f1aad7f',
            Type: 'drop',
            ZoneId: 'eb463e55-5121-43de-88f7-1fbf2dbaa4d9',
            id: 'cffb3f8a-15c4-4896-8a38-7b4fe9af584a'
          },
          MissionId: 'dc0d9a0f-7de3-45ea-adf9-18740a0d130c',
          Notes: [],
          Packages: [
            {
              Content: 'Pack Courrier',
              Dimensions: '22.9x32.4x10',
              TripId: 'd08cc0bf-121e-4a91-abc6-ad762f1aad7f',
              Weight: '800g',
              id: 'd08927e7-ce26-4874-a551-912cfd3a7314'
            }
          ],
          Pick: {
            Contact: null,
            LongDescription: 'Publitec SA',
            Notes: [],
            PlanedTime: '2016-11-30T12:43:03.8874362+01:00',
            RealisedTime: '2016-11-30T12:43:03.8874362+01:00',
            ShortDescription: 'Publitec s.a',
            Status: 'init',
            TripId: 'd08cc0bf-121e-4a91-abc6-ad762f1aad7f',
            Type: 'pick',
            ZoneId: 'eb463e55-5121-43de-88f7-1fbf2dbaa4d9',
            id: 'c40cd4be-65da-4177-82c5-c16df9653347'
          },
          Price: '17 CHF',
          Weight: '0.8 kg',
          id: 'd08cc0bf-121e-4a91-abc6-ad762f1aad7f'
        },
        Type: 'pick',
        id: 'b235a53b-7806-4877-a5ec-121e87480769'
      },
      {
        Order: 1,
        Owner: 'to-dispatch-zone',
        Status: 'to-dispatch',
        Trip: {
          Count: '636161065837036190',
          Description: '',
          Drop: {
            Contact: null,
            LongDescription: 'M. Krens',
            Notes: [],
            PlanedTime: '2016-11-30T12:43:03.9052723+01:00',
            RealisedTime: '2016-11-30T12:43:03.9052723+01:00',
            ShortDescription: 'M. Krens',
            Status: 'init',
            TripId: 'd08cc0bf-121e-4a91-abc6-ad762f1aad7f',
            Type: 'drop',
            ZoneId: 'eb463e55-5121-43de-88f7-1fbf2dbaa4d9',
            id: 'cffb3f8a-15c4-4896-8a38-7b4fe9af584a'
          },
          MissionId: 'dc0d9a0f-7de3-45ea-adf9-18740a0d130c',
          Notes: [],
          Packages: [
            {
              Content: 'Pack Courrier',
              Dimensions: '22.9x32.4x10',
              TripId: 'd08cc0bf-121e-4a91-abc6-ad762f1aad7f',
              Weight: '800g',
              id: 'd08927e7-ce26-4874-a551-912cfd3a7314'
            }
          ],
          Pick: {
            Contact: null,
            LongDescription: 'Publitec SA',
            Notes: [],
            PlanedTime: '2016-11-30T12:43:03.8874362+01:00',
            RealisedTime: '2016-11-30T12:43:03.8874362+01:00',
            ShortDescription: 'Publitec s.a',
            Status: 'init',
            TripId: 'd08cc0bf-121e-4a91-abc6-ad762f1aad7f',
            Type: 'pick',
            ZoneId: 'eb463e55-5121-43de-88f7-1fbf2dbaa4d9',
            id: 'c40cd4be-65da-4177-82c5-c16df9653347'
          },
          Price: '17 CHF',
          Weight: '0.8 kg',
          id: 'd08cc0bf-121e-4a91-abc6-ad762f1aad7f'
        },
        Type: 'drop',
        id: 'cb094d39-1b92-4ded-943f-a3d557932166'
      }
    ],
    id: 'e3a0ef70-42a3-4c9b-838f-9ae9dc38abc2'
  },
  id: 'f0d71e22-ba57-48e7-93b7-578a6468632a'
};

export default function getData () {
  return data;
}
