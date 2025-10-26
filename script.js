document.getElementById("test-btn").addEventListener("click", async () => {
  const apiUrl = "https://your-api-id.execute-api.region.amazonaws.com/prod/resource";
  const output = document.getElementById("output");

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
});

