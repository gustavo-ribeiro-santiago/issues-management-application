const carouselImages = document.getElementById('carouselImages');
const carouselIndicators = document.getElementById('carouselIndicators');
const descriptions = [
  {
    title: 'Navigation Bar Options',
    text: 'The user can click to register new issues or search for existing ones directly from the navigation bar.',
  },
  {
    title: 'Navigation Bar Options',
    text: 'Registering new stakeholders or searching for existing ones can also be accessed from the navigation bar.',
  },
  {
    title: 'Navigation Bar Options',
    text: "In the indicators section, the user can choose between viewing issues' or stakeholders' KPIs.",
  },
  {
    title: 'Search Issues',
    text: 'By choosing to search for issues, the user can type to search for a specific issue and create a report with the filtered issues.',
  },
  {
    title: 'Search Issues',
    text: 'The user can order the issues by different criteria, namely alphabetic order, issue score, last modified date and date created.',
  },
  {
    title: 'Issue Record',
    text: `By selecting an issue from the search issues page, or directly from the home menu, the user can view the issue record. 
    The issue record shows different information on the issue, including charts, associated key actions and stakeholders.`,
  },
  {
    title: 'Search Stakeholders',
    text: 'The user can also search for stakeholders, which can be filtered by criteria such as institution, scope and favorability.',
  },
  {
    title: 'Search Stakeholders',
    text: 'The stakeholders can be ordered by alphabetic order, institution, average favorability, last modified date and created date.',
  },
  {
    title: "Stakeholder's Record",
    text: "In the stakeholder's record, the user can view information on the stakeholder including photo, different attachments and issues and key actions associated to them.",
  },
  {
    title: "Issues' Indicators",
    text: `The issues' indicators were developed as a Power BI report embedded on the application. 
    The report can be filtered by scope, status, priority, theme and month and shows the issues' evolution over time.`,
  },
  {
    title: "Stakeholders' Indicators",
    text: "Similarly, the stakeholders' indicators were also built using Power BI and contain different filters and visuals.",
  },
];

for (let i = 3; i < 14; i++) {
  carouselImages.innerHTML += `
  <figure class="carousel-item">
    <img src="images/issues_${i}.jpg" class="slide-img d-block rounded-2 border-1" alt="Issues Management Application Print Screen">
    <figcaption class="carousel-caption custom-caption mt-2 pb-0">
      <h6>${descriptions[i - 3].title}</h6>
      <p class="mb-1">${descriptions[i - 3].text}</p>
    </figcaption>
  </figure>`;
  carouselIndicators.innerHTML += `<button type="button" data-bs-target="#carousel" data-bs-slide-to="${
    i - 1
  }" aria-label="Slide ${i}"></button>`;
}
