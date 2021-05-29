const githubError = document.getElementById("githubError");

const getUserData = (query, searchBtn, stopLoading) => {
  fetch(`https://api.github.com/graphql`, {
    method: "POST",
    headers: {
      // Add Github token here...
      Authorization: `Bearer `,
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
        githubError.innerText = data.errors[0].message;
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
