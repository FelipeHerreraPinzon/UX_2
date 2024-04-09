const tabs = document.querySelector('.tabs');
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

// handle click
function handleClick(e) {
  tabPanels.forEach(tabPanel => {
    tabPanel.hidden = true;
    tabPanel.classList.remove('active');
  });
  
  tabButtons.forEach(tabButton => {
    tabButton.setAttribute('aria-selected', 'false');
  });
  e.currentTarget.setAttribute('aria-selected', 'true');
  
  const { id } = e.currentTarget;

  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
  tabPanel.classList.add('active');
  
  const label = e.currentTarget.querySelector('.label');
  console.log(label.offsetWidth);
}

tabButtons.forEach(tabButton => {
  tabButton.addEventListener('click', handleClick);
});