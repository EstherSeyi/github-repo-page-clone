const getUserData = (query, searchBtn, stopLoading) => {
  const response = {
    error: null,
  };

  localStorage.removeItem("githubUser");

  fetch(`https://api.github.com/graphql`, {
    method: "POST",
    headers: {
      Authorization: `Bearer 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`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `${query}`,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("githubUser", JSON.stringify(data));
    })
    .then(() => {
      stopLoading(searchBtn, "Go");
      window.location.href = "./repositories.html";
    })
    .catch((error) => {
      stopLoading(searchBtn, "Go");
      response.error = error;
    });

  return response;
};

export { getUserData };
