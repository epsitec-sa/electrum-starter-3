'use strict';

const data =
{
  Cron: '00 30 11 * * 1,4',  // tous les lundis et jeudis à 11:30
  Delete: [
    {
      Date: '2017-04-03',  // supprime le lundi 3 avril
      Time: '11:30:00',
    },
    {
      Date: '2017-04-06',  // supprime le jeudi 6 avril
      Time: '11:30:00',
    },
    {
      Date: '2017-04-10',  // supprime le lundi 10 avril
      Time: '11:30:00',
    },
    {
      Date: '2017-04-20',  // supprime le jeudi 20 avril
      Time: '11:30:00',
    },
  ],
  Add: [
    {
      Date: '2017-04-11',  // ajoute le mardi 10 avril
      Time: '11:30:00',
    },
    {
      Date: '2017-04-19',  // ajoute le mercredi 19 avril
      Time: '16:00:00',
    },
    {
      Date: '2017-04-28',  // ajoute le vendredi 28 avril
      Time: '16:00:00',
    },
  ],
};

module.exports = {data};
