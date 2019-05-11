import {getArticlesByAuthor, getArticlesByAuthorNames, getArticlesByAuthorAmount, getArticlesAmount} from './ArticlesGetters.js';
import {getTeamMembers, getTeamMembersIds, getTeamNames, getTeamName, getCoauthoredArticles} from './TeamGetters.js';
import {getAuthorsName, getAuthorsId} from './AuthorGetters';


const strExamples = [
  {
    example: (authorsName) => `${authorsName} wrote 0 articles.` ,
    check: arg => arg === 0,
  },
  {
    example: (authorsName, firstArticleName) => `${authorsName} wrote an article ${firstArticleName}.`,
    check: arg => arg === 1,
  },
  {
    example: (authorsName, firstArticleName, secondArticleName) => `${authorsName} wrote articles ${firstArticleName} and ${secondArticleName}.`,
    check: arg => arg === 2,
  },
  {
    example: (authorsName, firstArticleName, secondArticleName, articlesAmount) => `${authorsName} wrote articles ${firstArticleName}, ${secondArticleName} and ${articlesAmount - 2} more.`,
    check: arg => arg > 2,
  },
];

const getAuthorLogString = (articlesAmount, authorsName, firstArticleName, secondArticleName) => {
  return strExamples.find(example => example.check(articlesAmount)).example(authorsName, firstArticleName, secondArticleName, articlesAmount);
};


const getTeamArticles = (teamId) => {
  const members = getTeamMembers(teamId, teams, authors);

  const authorsLog = members.map(member => {
    const authorsName = getAuthorsName(member);
    const authorsId = getAuthorsId(member);
    const articlesByAuthor = getArticlesByAuthor(authorsId, articles);
    const articlesAmount = getArticlesByAuthorAmount(articlesByAuthor);
    const [firstArticleName, secondArticleName] = getArticlesByAuthorNames(articlesByAuthor);
    return getAuthorLogString(articlesAmount, authorsName, firstArticleName, secondArticleName);
  });

  const teamLog = `Team '${getTeamName(teamId, teams)}' co-authored ${getCoauthoredArticles(teamId, articles, teams)} out of ${getArticlesAmount(articles)} articles.`;

  return `${authorsLog.join('\n')}\n-----\n${teamLog}`;
}
