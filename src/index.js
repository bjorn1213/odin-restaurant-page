import "./style.css";
import generateMenuPage from "./menu";

const toggleActiveTab = (activeTabID) => {
  const currentTab = document.querySelector(".tab.selected");
  currentTab.classList.remove("selected");

  const newTab = document.querySelector(`#${activeTabID}`);
  newTab.classList.add("selected");
};

const setupMainPage = () => {
  const pageContent = document.createElement("div");
  pageContent.setAttribute("id", "content");

  const header = document.createElement("div");
  header.classList.add("header");

  const tabSelectors = document.createElement("ul");
  tabSelectors.classList.add("tab-select-container");

  for (let i = 0; i < 5; i++) {
    const listItem = document.createElement("li");
    listItem.setAttribute("id", `tab-${i}`);
    listItem.textContent = `tab ${i}`;
    listItem.addEventListener("click", (event) => {
      toggleActiveTab(event.target.id);

      document
        .getElementById("tab-container")
        .replaceChildren(generateMenuPage());
    });

    listItem.classList.add("tab");
    if (i === 0) {
      listItem.classList.add("selected");
    }

    tabSelectors.appendChild(listItem);
  }

  const title = document.createElement("h1");
  title.textContent = "Restaurant website";

  const tabContentContainer = document.createElement("div");
  tabContentContainer.setAttribute("id", "tab-container");
  tabContentContainer.appendChild(generateMenuPage());

  header.appendChild(title);
  header.appendChild(tabSelectors);

  pageContent.appendChild(header);
  pageContent.appendChild(tabContentContainer);

  document.getElementById("content").replaceWith(pageContent);
};

setupMainPage();
