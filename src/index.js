import "./style.css";
import generateMenuPage from "./menu";
import generateHomePage from "./home";

const toggleActiveTab = (activeTabID) => {
  const currentTab = document.querySelector(".tab.selected");
  currentTab.classList.remove("selected");

  const newTab = document.querySelector(`#${activeTabID}`);
  newTab.classList.add("selected");
};

let currentTabIndex = 0;

const addTab = (pageGenerator, tabTitle) => {
  const tab = document.createElement("li");
  tab.setAttribute("id", `tab-${currentTabIndex++}`);
  tab.textContent = tabTitle;

  tab.addEventListener("click", (event) => {
    toggleActiveTab(event.target.id);

    document.getElementById("tab-container").replaceChildren(pageGenerator());
  });

  tab.classList.add("tab");
  if (currentTabIndex === 1) {
    tab.classList.add("selected");
  }
  return tab;
};

const setupMainPage = () => {
  const pageContent = document.createElement("div");
  pageContent.setAttribute("id", "content");

  const header = document.createElement("div");
  header.classList.add("header");

  const tabSelectors = document.createElement("ul");
  tabSelectors.classList.add("tab-select-container");

  tabSelectors.appendChild(addTab(generateHomePage, "Home"));
  tabSelectors.appendChild(addTab(generateMenuPage, "Menu"));

  const title = document.createElement("h1");
  title.textContent = "Restaurant website";

  const tabContentContainer = document.createElement("div");
  tabContentContainer.setAttribute("id", "tab-container");
  tabContentContainer.appendChild(generateHomePage());

  header.appendChild(title);
  header.appendChild(tabSelectors);

  pageContent.appendChild(header);
  pageContent.appendChild(tabContentContainer);

  document.getElementById("content").replaceWith(pageContent);
};

setupMainPage();
