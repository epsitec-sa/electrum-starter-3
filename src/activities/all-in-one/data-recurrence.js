const data =
  {
    StartDate: '2017-01-01',
    EndDate:   '2017-06-30',
    Cron:      '0 0 0 * * 1,4',  // tous les lundis et jeudis
    Delete:    [
      '2017-04-03',  // supprime le lundi 3 avril
      '2017-04-06',  // supprime le jeudi 6 avril
      '2017-04-10',  // supprime le lundi 10 avril
      '2017-04-20',  // supprime le jeudi 20 avril
      '2017-05-18',  // supprime le jeudi 18 mai
    ],
    Add: [
      '2017-04-11',  // ajoute le mardi 11 avril
      '2017-04-19',  // ajoute le mercredi 19 avril
      '2017-04-28',  // ajoute le vendredi 28 avril
      '2017-05-18',  // ajoute le jeudi 18 mai
    ],
  };

module.exports = {data};
