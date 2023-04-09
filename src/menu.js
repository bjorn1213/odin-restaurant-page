const menuItemFactory = (name, description, price) => ({
  name,
  description,
  price,
});

const menuFactory = (starters, mains, deserts) => ({
  starters,
  mains,
  deserts,
});

const round = (number, decimals) => {
  let result = number * 10 ** decimals;
  result = Math.round(result);
  result /= 10 ** decimals;
  return result.toFixed(2);
};

const getDummyMenu = () => {
  const dummyDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed magna sagittis, tincidunt arcu ut, mattis eros. Pellentesque tempus odio mauris, et hendrerit urna tincidunt ac. Morbi eleifend feugiat purus, nec convallis mi luctus ut. Morbi euismod, nisl id sagittis pretium, arcu eros rhoncus ligula, id bibendum nisl ex nec magna. Morbi semper mauris ut arcu tincidunt suscipit. Nullam consectetur posuere ornare. Nulla nec quam a purus tempor auctor id id est. ";

  let starters = [];
  for (let i = 0; i < 2; i++) {
    const price = round((i + 1) * 1.05, 2);
    starters.push(menuItemFactory(`Starter${i}`, dummyDescription, price));
  }

  let mains = [];
  for (let i = 0; i < 4; i++) {
    const price = round((i + 5) * 1.05, 2);
    mains.push(menuItemFactory(`Main${i}`, dummyDescription, price));
  }

  let deserts = [];
  for (let i = 0; i < 3; i++) {
    const price = round((i + 2) * 1.05, 2);
    deserts.push(menuItemFactory(`Desert${i}`, dummyDescription, price));
  }

  const menu = menuFactory(starters, mains, deserts);

  return menu;
};

const generateMenuSection = (subMenu, sectionTitle) => {
  const menuSection = document.createElement("div");
  menuSection.classList.add("menu-section");

  const sectionHeader = document.createElement("h3");
  sectionHeader.textContent = sectionTitle;

  menuSection.appendChild(sectionHeader);

  for (let i = 0; i < subMenu.length; i++) {
    const mealContainer = document.createElement("div");
    mealContainer.classList.add("meal-container");

    const containerHead = document.createElement("div");
    containerHead.classList.add("meal-container-head");

    const mealTitle = document.createElement("h3");
    mealTitle.textContent = subMenu[i].name;

    const mealPrice = document.createElement("div");
    mealPrice.textContent = `€${subMenu[i].price}`;

    containerHead.appendChild(mealTitle);
    containerHead.appendChild(mealPrice);

    const mealDescription = document.createElement("div");
    mealDescription.textContent = subMenu[i].description;

    mealContainer.appendChild(containerHead);
    mealContainer.appendChild(mealDescription);
    menuSection.appendChild(mealContainer);
  }

  return menuSection;
};

const generatePageTitle = (pageTitle) => {
  const pageTitleElement = document.createElement("h2");
  pageTitleElement.textContent = pageTitle;
  return pageTitleElement;
};

export default function generatePage() {
  const menu = getDummyMenu();

  const pageContent = document.createElement("div");
  pageContent.classList.add("tab-contents");
  pageContent.appendChild(generatePageTitle("Menu"));
  pageContent.appendChild(generateMenuSection(menu.starters, "Starters"));
  pageContent.appendChild(generateMenuSection(menu.mains, "Mains"));
  pageContent.appendChild(generateMenuSection(menu.deserts, "Deserts"));

  return pageContent;
}
