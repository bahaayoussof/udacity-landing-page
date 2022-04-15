/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const navbar = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();
const sections = [...document.querySelectorAll("section")];
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

sections.map(section => {
	const listItem = document.createElement("li");
	const link = document.createElement("a");

	link.classList.add("menu__link");
	link.href = `#${section.id}`;
	link.textContent = section.dataset.nav;

	// add link to li element then append li to fragment
	listItem.appendChild(link);
	fragment.appendChild(listItem);

	// add smooth scroll to navbar links
	link.addEventListener("click", event => {
		event.preventDefault();
		section.scrollIntoView({
			behavior: "smooth",
		});
	});
});
navbar.appendChild(fragment);


// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", () => {
	sections.map(section => {
		const sectionTop = section.getBoundingClientRect().top;
		const link = document.querySelector(`a[href="#${section.id}"]`);

		if (sectionTop >= 0 && sectionTop <= 300) {
			section.classList.add("your-active-class");
			link.classList.add("active");
		} else {
			section.classList.remove("your-active-class");
			link.classList.remove("active");
		}
	});
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
// Set sections as active


