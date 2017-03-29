'use strict';

const data =
{
  Cron: '00 30 11 * * 1,4',  // tous les lundis et jeudis à 11:30
  Delete: [
    {
      Date: '2017-04-10',
      Time: '11:30:00',
    },
    {
      Date: '2017-04-20',
      Time: '11:30:00',
    },
  ],
  Add: [
    {
      Date: '2017-04-11',
      Time: '11:30:00',
    },
    {
      Date: '2017-04-19',
      Time: '16:00:00',
    },
    {
      Date: '2017-04-28',
      Time: '16:00:00',
    },
  ],
};

module.exports = {data};
