export function getQuery(username) {
  return `{
  user(login: "${username}") {
    name
    bio
    login
    avatarUrl
    status {
      emojiHTML
      message
    }
    repositories(first: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
      totalCount
      nodes {
        id
        name
        description
        updatedAt
        stargazerCount
				forkCount
        licenseInfo {
					name
					spdxId
				}
        primaryLanguage {
          name
          color
        }
        licenseInfo {
          name
          spdxId
        }
      }
    }
  }
}`;
}
