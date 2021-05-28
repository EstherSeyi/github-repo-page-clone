const getUserData = (query, searchBtn, stopLoading) => {
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
      stopLoading(searchBtn, "Go");
      if (data.errors) {
        localStorage.setItem(
          "githubError",
          JSON.stringify(data.errors[0].message)
        );
        return;
      }
      localStorage.setItem("githubUser", JSON.stringify(data));

      window.location.href = "./repositories.html";
    })
    .catch((error) => {
      stopLoading(searchBtn, "Go");
      console.error(error);
    });
};

export { getUserData };
