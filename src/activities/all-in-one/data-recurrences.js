// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    |
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, optional)

const data =
  {
    id:          'recurrences-mock',
    recurrences:
    [
      {
        id:        'r1',
        StartDate: '2017-01-01',
        EndDate:   '2017-06-30',
        Cron:      '0 0 0 * * 1,4',  // tous les lundis et jeudis
        Delete:    [
          '2017-04-20',  // supprime le jeudi 20 avril
        ],
        Add: [
          '2017-04-21',  // ajoute le vendredi 21 avril
        ],
      },
      {
        id:        'r2',
        StartDate: '2017-07-01',
        EndDate:   '2017-07-31',
        Cron:      '0 0 0 * * 2',  // tous les mardis
        Delete:    [],
        Add:       [],
      },
      {
        id:        'r3',
        StartDate: '2017-08-01',
        EndDate:   '2017-12-31',
        Cron:      '0 0 0 * * 3',  // tous les mercredis
        Delete:    [],
        Add:       [],
      },
    ],
  };

module.exports = {data};
