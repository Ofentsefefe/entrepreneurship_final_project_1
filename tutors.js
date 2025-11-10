// Sample tutor data
const tutors = [
    {
        id: 1,
        name: "Sarah Johnson",
        subject: "Mathematics",
        rating: 4.8,
        rate: 120,
        bio: "Third-year Engineering student specializing in Calculus and Algebra. Available for online and in-person sessions.",
        image: "fa-user-graduate"
    },
    {
        id: 2,
        name: "David Chen",
        subject: "Programming",
        rating: 4.9,
        rate: 150,
        bio: "Computer Science major with expertise in Python, Java, and web development. Let's code together!",
        image: "fa-laptop-code"
    },
    {
        id: 3,
        name: "Emily Wilson",
        subject: "Science",
        rating: 4.6,
        rate: 100,
        bio: "Biology student passionate about helping others understand complex scientific concepts.",
        image: "fa-flask"
    },
    {
        id: 4,
        name: "Michael Brown",
        subject: "Business",
        rating: 4.7,
        rate: 110,
        bio: "Business Administration student with focus on accounting and economics. Previous tutoring experience.",
        image: "fa-chart-line"
    },
    {
        id: 5,
        name: "Lisa Rodriguez",
        subject: "Design",
        rating: 4.5,
        rate: 90,
        bio: "Graphic Design student offering help with Adobe Creative Suite and design principles.",
        image: "fa-palette"
    },
    {
        id: 6,
        name: "James Taylor",
        subject: "Languages",
        rating: 4.9,
        rate: 80,
        bio: "Fluent in Spanish and French. Let's improve your language skills through conversation and practice.",
        image: "fa-language"
    },
    {
        id: 7,
        name: "Amanda Lee",
        subject: "Mathematics",
        rating: 4.4,
        rate: 70,
        bio: "Second-year Math major specializing in Statistics and Probability. Patient and methodical approach.",
        image: "fa-calculator"
    },
    {
        id: 8,
        name: "Robert Kim",
        subject: "Programming",
        rating: 4.7,
        rate: 130,
        bio: "Experienced in C++, data structures, and algorithms. Available for coding interview prep.",
        image: "fa-code"
    }
];

// DOM elements
const tutorsGrid = document.getElementById('tutors-grid');
const tutorsCount = document.getElementById('tutors-count');
const tutorSearch = document.getElementById('tutor-search');
const subjectFilters = document.querySelectorAll('.subject-filter');
const ratingFilters = document.querySelectorAll('.rating-filter');
const rateFilters = document.querySelectorAll('.rate-filter');
const sortSelect = document.getElementById('sort-tutors');

// Current filters
let currentFilters = {
    subject: 'all',
    rating: 0,
    rate: 'all',
    search: ''
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    renderTutors(tutors);
    setupEventListeners();
});

// Set up event listeners
function setupEventListeners() {
    // Search input
    tutorSearch.addEventListener('input', function () {
        currentFilters.search = this.value.toLowerCase();
        filterAndRenderTutors();
    });

    // Subject filters
    subjectFilters.forEach(filter => {
        filter.addEventListener('click', function () {
            // Remove active class from all subject filters
            subjectFilters.forEach(f => f.classList.remove('active'));
            // Add active class to clicked filter
            this.classList.add('active');
            // Update current filter
            currentFilters.subject = this.getAttribute('data-subject');
            filterAndRenderTutors();
        });
    });

    // Rating filters
    ratingFilters.forEach(filter => {
        filter.addEventListener('click', function () {
            // Remove active class from all rating filters
            ratingFilters.forEach(f => f.classList.remove('active'));
            // Add active class to clicked filter
            this.classList.add('active');
            // Update current filter
            currentFilters.rating = parseFloat(this.getAttribute('data-rating'));
            filterAndRenderTutors();
        });
    });

    // Rate filters
    rateFilters.forEach(filter => {
        filter.addEventListener('click', function () {
            // Remove active class from all rate filters
            rateFilters.forEach(f => f.classList.remove('active'));
            // Add active class to clicked filter
            this.classList.add('active');
            // Update current filter
            currentFilters.rate = this.getAttribute('data-rate');
            filterAndRenderTutors();
        });
    });

    // Sort select
    sortSelect.addEventListener('change', function () {
        filterAndRenderTutors();
    });
}

// Filter and render tutors based on current filters
function filterAndRenderTutors() {
    let filteredTutors = tutors.filter(tutor => {
        // Subject filter
        if (currentFilters.subject !== 'all' && tutor.subject.toLowerCase() !== currentFilters.subject) {
            return false;
        }

        // Rating filter
        if (currentFilters.rating > 0 && tutor.rating < currentFilters.rating) {
            return false;
        }

        // Rate filter
        if (currentFilters.rate !== 'all') {
            const maxRate = parseInt(currentFilters.rate);
            if (tutor.rate > maxRate) {
                return false;
            }
        }

        // Search filter
        if (currentFilters.search) {
            const searchTerm = currentFilters.search;
            const matchesName = tutor.name.toLowerCase().includes(searchTerm);
            const matchesSubject = tutor.subject.toLowerCase().includes(searchTerm);
            const matchesBio = tutor.bio.toLowerCase().includes(searchTerm);

            if (!matchesName && !matchesSubject && !matchesBio) {
                return false;
            }
        }

        return true;
    });

    // Sort tutors
    const sortValue = sortSelect.value;
    filteredTutors.sort((a, b) => {
        switch (sortValue) {
            case 'rating':
                return b.rating - a.rating;
            case 'price-low':
                return a.rate - b.rate;
            case 'price-high':
                return b.rate - a.rate;
            case 'name':
                return a.name.localeCompare(b.name);
            default:
                return 0;
        }
    });

    // Update count and render
    tutorsCount.textContent = `${filteredTutors.length} Tutors Available`;
    renderTutors(filteredTutors);
}

// Render tutors to the grid
function renderTutors(tutorsToRender) {
    tutorsGrid.innerHTML = '';

    if (tutorsToRender.length === 0) {
        tutorsGrid.innerHTML = `
            <div class="no-tutors" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 3rem; color: #bdc3c7; margin-bottom: 20px;"></i>
                <h3 style="color: #7f8c8d;">No tutors match your criteria</h3>
                <p style="color: #95a5a6;">Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }

    tutorsToRender.forEach(tutor => {
        const tutorCard = document.createElement('div');
        tutorCard.className = 'tutor-card';

        // Generate star rating HTML
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(tutor.rating)) {
                starsHtml += '<i class="fas fa-star"></i>';
            } else if (i === Math.ceil(tutor.rating) && !Number.isInteger(tutor.rating)) {
                starsHtml += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHtml += '<i class="far fa-star"></i>';
            }
        }

        tutorCard.innerHTML = `
            <div class="tutor-image">
                <i class="fas ${tutor.image}"></i>
            </div>
            <div class="tutor-info">
                <h3 class="tutor-name">${tutor.name}</h3>
                <p class="tutor-subject">${tutor.subject}</p>
                <div class="tutor-rating">
                    <div class="stars">${starsHtml}</div>
                    <span class="rating-value">${tutor.rating}</span>
                </div>
                <p class="tutor-rate">R${tutor.rate}/hr</p>
                <p class="tutor-bio">${tutor.bio}</p>
                <button class="book-btn" data-id="${tutor.id}">Book Session</button>
            </div>
        `;

        tutorsGrid.appendChild(tutorCard);
    });

    // Add event listeners to book buttons
    document.querySelectorAll('.book-btn').forEach(button => {
        button.addEventListener('click', function () {
            const tutorId = this.getAttribute('data-id');
            const tutor = tutors.find(t => t.id == tutorId);
            alert(`Booking session with ${tutor.name}! This would typically open a booking form.`);
        });
    });
}