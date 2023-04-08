import "./style.css";

const setupMainPage = () => {
  const pageContent = document.createElement("div");
  pageContent.setAttribute("id", "content");

  const header = document.createElement("div");
  header.classList.add("header");

  const tabSelectors = document.createElement("ul");
  tabSelectors.classList.add("tab-select-container");

  for (let i = 0; i < 5; i++) {
    const listItem = document.createElement("li");
    const tab = document.createElement("a");
    tab.textContent = `tab ${i}`;
    listItem.classList.add("tab");
    if (i === 0) {
      listItem.classList.add("selected");
    }

    listItem.appendChild(tab);
    tabSelectors.appendChild(listItem);
  }

  const title = document.createElement("h1");
  title.textContent = "Restaurant website";

  const tabContents = document.createElement("div");
  tabContents.classList.add("tab-contents");
  tabContents.textContent = "asd";

  header.appendChild(title);
  header.appendChild(tabSelectors);

  pageContent.appendChild(header);
  pageContent.appendChild(tabContents);

  document.getElementById("content").replaceWith(pageContent);
};

setupMainPage();
