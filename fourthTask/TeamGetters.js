const getTeamMembers = (teamId, teams, authorsList) => {
  const memberIds = teams.reduce((acc, team) => (team.id === teamId) ? team.members : acc, []);
  return authorsList.filter(author=> memberIds.includes(author.id));
}

const getTeamMembersIds = (teamId, teams) => {
  return teams.reduce((acc, team) => (team.id === teamId) ? team.members : acc, []);
}

const getTeamName = (teamId, teamList) => {
  return teamList.reduce((acc, team) => (team.id === teamId) ? team.name : acc, '')
}

const getCoauthoredArticles = (teamId, articesList, teamList) => {
  const teamIds = getTeamMembersIds(teamId, teamList);
  return articesList.reduce((acc, article) => {
    if(article.authors) {
      return (article.authors.some(author => teamIds.includes(author))) ? acc + 1 : acc;
    }
    return acc;
  }, 0)
}

export {getTeamMembers, getTeamMembersIds, getTeamName, getCoauthoredArticles};
