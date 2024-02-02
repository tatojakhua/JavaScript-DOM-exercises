async function handleInitialFetchData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    let response = await fetch(url);
    response = await response.json();
    return response;
  } catch (err) {
    throw err;
  }
}

const btn = document.createElement("button");
btn.textContent = "Click for fetch data";
const mainDiv = document.querySelector("#data-container");
mainDiv.appendChild(btn);

btn.onclick = async () => {
  btn.textContent = "Loading...";

  try {
    const data = await handleInitialFetchData();

    for (let i = 0; i < data.length; i++) {
      const userCard = createUserCard(data[i]);
      mainDiv.appendChild(userCard);
    }

    btn.style.display = "none";
  } catch (error) {
    btn.textContent = "Oops, something unexpected happened!";
    console.error(error);
  }
};

function createDivElement() {
  const divElement = document.createElement("div");
  return divElement;
}

function createUserCard(user) {
  const card = createDivElement();
  card.classList.add("user-card");

  const nameElement = document.createElement("h3");
  nameElement.textContent = user.name;

  const emailElement = document.createElement("p");
  emailElement.textContent = `Email: ${user.email}`;

  const cityElement = document.createElement("p");
  cityElement.textContent = `City: ${user.address.city}`;

  card.appendChild(nameElement);
  card.appendChild(emailElement);
  card.appendChild(cityElement);

  return card;
}
