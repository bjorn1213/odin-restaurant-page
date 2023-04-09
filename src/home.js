const generateHomeText = () => {
  const homeText = "Welcome to the restaurant page, baybay.";
  const homeElement = document.createElement("div");
  homeElement.textContent = homeText;

  return homeElement;
};

const generatePageTitle = (pageTitle) => {
  const pageTitleElement = document.createElement("h2");
  pageTitleElement.textContent = pageTitle;
  return pageTitleElement;
};

export default function generatePage() {
  const pageContent = document.createElement("div");
  pageContent.classList.add("tab-contents");
  pageContent.appendChild(generatePageTitle("Home"));
  pageContent.appendChild(generateHomeText());

  return pageContent;
}
