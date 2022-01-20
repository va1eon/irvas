const tabs = options => {
  const {headerSelector, tabSelector, contentSelector, activeClass} = options;

  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabSelector);
  const contents = document.querySelectorAll(contentSelector);

  const hideTabContents = () => {
    contents.forEach(content => content.style.display = 'none');
    tabs.forEach(tab => tab.classList.remove(activeClass));
  }

  const showTabContent = (index = 0) => {
    contents[index].style.display = 'block';
    tabs[index].classList.add(activeClass);
  }

  hideTabContents();
  showTabContent();

  header.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;
    if (target &&
      target.classList.contains(tabSelector.replace(/\./, '').trim()) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, '').trim())
    ) {
      tabs.forEach((tab, index) => {
        if (target === tab || target.parentNode === tab) {
          hideTabContents();
          showTabContent(index);
        }
      });
    }
  });
}

export default tabs;