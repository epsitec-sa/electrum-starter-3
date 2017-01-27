

function fillAllTicketsFromMissionId (state, list, missionId, result) {
  for (let i = 0; i < list.length; i++) {
    const ticket = list[i];
    if (ticket.Trip.MissionId === missionId) {
      result.push (ticket);
    }
  }
}


function getTicketsFromMissionId (tickets, missionId) {
  const result = [];
  for (var ticket of tickets) {
    if (ticket.Trip.MissionId === missionId) {
      result.push (ticket);
    }
  }
  return result;
}

