function furnishInformationSection(infoSectionData) {
  const infoSection = document.getElementById("info-section");
  const infoSectionContainer = document.createElement("template");

  const infoMarkup = `<div class="information-section__names-photo">
<div class="information-section__photo">
  <img
    class="information-section__profile-photo"
    src=${infoSectionData?.avatarUrl}
    alt=${infoSectionData?.login ?? "User"}'s Avatar
  />

  <div class="information-section__emoji-container">${
    infoSectionData?.status?.emojiHTML ?? ""
  }</div>
</div>
<div class="information-section__names">
  <p class="names__fullname">${infoSectionData?.name}</p>
  <p class="names__username">${infoSectionData?.login}</p>
</div>
</div>
<div class="information-section__bio">
<p>${infoSectionData?.status?.message ?? ""}</p>
</div>
<p class="information-section__occupation">${infoSectionData?.bio ?? ""}</p>`;

  infoSectionContainer.innerHTML = infoMarkup;
  infoSection.appendChild(infoSectionContainer.content);
}

function furnishRepositories(repositories) {
  const repoSection = document.getElementById("repo-section");

  console.log(repositories);

  repositories.nodes.forEach((repository) => {
    const repo = document.createElement("template");
    const repoItemMarkup = ` <div class="repos-list__item">
    <div class="repos-list__item__details">
      <h3 class="repo-details__title-access">
      <span class="repo-details__title"> ${repository.name} 
      </span> 
        ${
          repository?.isPrivate
            ? `<span class="repo-details__access">Private</span>`
            : ""
        }
        
      </h3>
      <p class="repo-details__description">
        ${repository?.description ?? ""}
      </p>
      <div class="repo-details__language-timing">
        

        ${
          repository.primaryLanguage
            ? `<div class="repo-details__language"><span class="repo-details__language-circle" style="background-color:${repository.primaryLanguage.color};"></span>
            <span class="repo-details__language-text">${repository.primaryLanguage.name}</span></div>`
            : ""
        }
${
  repository.stargazerCount > 0
    ? `
  <div class="repo-features-count-icon">
        <img class="repo-features__icon" src="./assets/star.svg" alt="star count icon"/>
        <span class="repo-features__count">${repository.stargazerCount}</span>
        </div>`
    : ""
}
${
  repository.licenseInfo
    ? `
    <div class="repo-features-count-icon">
    <img class="repo-features__icon licence__icon" src="./assets/license.svg" alt="licence icon"/>
    <span class="repo-features__count">${repository.licenseInfo.name}</span>
    </div>`
    : ""
}
${
  repository?.forkCount
    ? `
    <div class="repo-features-count-icon">
    <img class="repo-features__icon licence__icon" src="./assets/fork.svg" alt="licence icon"/>
    <span class="repo-features__count">${repository.forkCount}</span>
    </div>`
    : ""
}
        <span class="repo-details__timing">Updated 2 days ago</span>
      </div>
    </div>
  
    <div class="repos-list__star-btn">
      <img
        src="./assets/star.svg"
        alt="Star Repo"
        class="star-btn__icon"
      />
      <span class="star-btn__text">Star</span>
    </div>
  </div>`;

    repo.innerHTML = repoItemMarkup;
    repoSection.appendChild(repo.content);
  });
}

function furnishOthers({ avatarUrl, login, totalRepos }) {
  const useAvatar = document.getElementById("user-avatar");
  const totalReposMarkup = document.getElementById("total-repo");
  const totalReposMarkup2 = document.getElementById("total-repo2");

  totalReposMarkup.textContent = totalRepos;
  totalReposMarkup2.textContent = totalRepos;
  useAvatar.src = avatarUrl;
  useAvatar.alt = `${login ?? "User"}'s Avatar`;
}

export { furnishInformationSection, furnishRepositories, furnishOthers };
