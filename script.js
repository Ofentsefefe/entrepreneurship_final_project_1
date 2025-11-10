// Sample data for skills
const skillsData = [
    {
        id: 1,
        title: "Calculus & Advanced Mathematics",
        category: "academic",
        tutor: "David Wilson",
        price: "R120/hr",
        rating: 4.9,
        students: 24,
        icon: "fas fa-calculator"
    },
    {
        id: 2,
        title: "Web Development (HTML, CSS, JS)",
        category: "technical",
        tutor: "Sarah Johnson",
        price: "R150/hr",
        rating: 4.8,
        students: 32,
        icon: "fas fa-code"
    },
    {
        id: 3,
        title: "Graphic Design with Adobe Suite",
        category: "creative",
        tutor: "Mike Chen",
        price: "R130/hr",
        rating: 4.7,
        students: 18,
        icon: "fas fa-palette"
    },
    {
        id: 4,
        title: "Financial Accounting",
        category: "academic",
        tutor: "James Brown",
        price: "R110/hr",
        rating: 4.9,
        students: 27,
        icon: "fas fa-chart-line"
    },
    {
        id: 5,
        title: "Public Speaking & Presentation",
        category: "business",
        tutor: "Lisa Taylor",
        price: "R100/hr",
        rating: 4.6,
        students: 15,
        icon: "fas fa-microphone"
    },
    {
        id: 6,
        title: "Python Programming",
        category: "technical",
        tutor: "Alex Kim",
        price: "R140/hr",
        rating: 4.8,
        students: 29,
        icon: "fas fa-laptop-code"
    }
];

// DOM Elements
const skillsGrid = document.querySelector('.skills-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const loginBtn = document.querySelector('.btn-login');
const signupBtn = document.querySelector('.btn-signup');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeModals = document.querySelectorAll('.close-modal');
const switchToSignup = document.getElementById('switch-to-signup');
const switchToLogin = document.getElementById('switch-to-login');

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    // Load skills
    displaySkills(skillsData);

    // Set up event listeners
    setupEventListeners();
});

// Display skills in the grid
function displaySkills(skills) {
    skillsGrid.innerHTML = '';

    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <div class="skill-image">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-content">
                <span class="skill-category">${skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}</span>
                <h3 class="skill-title">${skill.title}</h3>
                <div class="skill-tutor">
                    <div class="tutor-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <span>${skill.tutor}</span>
                </div>
                <div class="skill-info">
                    <span><i class="fas fa-users"></i> ${skill.students} students</span>
                    <span class="skill-rating"><i class="fas fa-star"></i> ${skill.rating}</span>
                </div>
                <div class="skill-info">
                    <span class="skill-price">${skill.price}</span>
                    <button class="btn-primary" style="padding: 0.5rem 1rem;">View Details</button>
                </div>
            </div>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

// Set up event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Filter skills
            const filter = this.textContent.toLowerCase();
            if (filter === 'all') {
                displaySkills(skillsData);
            } else {
                const filteredSkills = skillsData.filter(skill =>
                    skill.category === filter
                );
                displaySkills(filteredSkills);
            }
        });
    });

    // Login button
    loginBtn.addEventListener('click', function () {
        loginModal.style.display = 'flex';
    });

    // Signup button
    signupBtn.addEventListener('click', function () {
        signupModal.style.display = 'flex';
    });

    // Close modals
    closeModals.forEach(closeBtn => {
        closeBtn.addEventListener('click', function () {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        });
    });

    // Switch between login and signup modals
    switchToSignup.addEventListener('click', function (e) {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'flex';
    });

    switchToLogin.addEventListener('click', function (e) {
        e.preventDefault();
        signupModal.style.display = 'none';
        loginModal.style.display = 'flex';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (e) {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === signupModal) {
            signupModal.style.display = 'none';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle (you can expand this functionality)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    mobileMenuBtn.addEventListener('click', function () {
        alert('Mobile menu would open here. This is a demonstration.');
    });
}

// Form submission handlers
document.querySelectorAll('.auth-form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Form submission would be handled here. This is a demonstration.');
        // In a real application, you would send the form data to a
        // // Tutor Data
        const tutorsData = [
            {
                id: 1,
                name: "Sarah Johnson",
                subjects: ["Programming", "Web Development", "JavaScript"],
                rating: 4.9,
                reviews: 47,
                students: 32,
                price: 150,
                experience: "3 years",
                availability: "Weekdays",
                bio: "Computer Science graduate with passion for teaching web development",
                image: "fas fa-user-graduate"
            },
            {
                id: 2,
                name: "David Wilson",
                subjects: ["Mathematics", "Calculus", "Statistics"],
                rating: 4.8,
                reviews: 38,
                students: 24,
                price: 120,
                experience: "4 years",
                availability: "Flexible",
                bio: "Mathematics tutor specializing in calculus and advanced math",
                image: "fas fa-user-tie"
            },
            {
                id: 3,
                name: "Mike Chen",
                subjects: ["Design", "Graphic Design", "UI/UX"],
                rating: 4.7,
                reviews: 29,
                students: 18,
                price: 130,
                experience: "2 years",
                availability: "Weekends",
                bio: "Creative designer teaching Adobe Suite and design principles",
                image: "fas fa-user-astronaut"
            },
            {
                id: 4,
                name: "James Brown",
                subjects: ["Business", "Accounting", "Finance"],
                rating: 4.9,
                reviews: 42,
                students: 27,
                price: 110,
                experience: "5 years",
                availability: "Evenings",
                bio: "Business graduate with practical industry experience",
                image: "fas fa-user-graduate"
            },
            {
                id: 5,
                name: "Lisa Taylor",
                subjects: ["Languages", "English", "Public Speaking"],
                rating: 4.6,
                reviews: 31,
                students: 15,
                price: 100,
                experience: "3 years",
                availability: "Weekdays",
                bio: "Language enthusiast and communication coach",
                image: "fas fa-user"
            },
            {
                id: 6,
                name: "Alex Kim",
                subjects: ["Programming", "Python", "Data Science"],
                rating: 4.8,
                reviews: 35,
                students: 29,
                price: 140,
                experience: "4 years",
                availability: "Flexible",
                bio: "Data scientist passionate about teaching Python",
                image: "fas fa-user-ninja"
            },
            {
                id: 7,
                name: "Emma Davis",
                subjects: ["Science", "Physics", "Chemistry"],
                rating: 4.7,
                reviews: 26,
                students: 21,
                price: 125,
                experience: "3 years",
                availability: "Weekends",
                bio: "Science graduate making complex concepts simple",
                image: "fas fa-user-graduate"
            },
            {
                id: 8,
                name: "Ryan Patel",
                subjects: ["Mathematics", "Algebra", "Geometry"],
                rating: 4.5,
                reviews: 22,
                students: 16,
                price: 95,
                experience: "2 years",
                availability: "Evenings",
                bio: "Math tutor focused on building strong foundations",
                image: "fas fa-user"
            }
        ];

        // DOM Elements for Tutor Section
        const tutorsGrid = document.getElementById('tutors-grid');
        const tutorsCount = document.getElementById('tutors-count');
        const tutorSearch = document.getElementById('tutor-search');
        const subjectFilters = document.querySelectorAll('.subject-filter');
        const ratingFilters = document.querySelectorAll('.rating-filter');
        const rateFilters = document.querySelectorAll('.rate-filter');
        const sortTutors = document.getElementById('sort-tutors');

        // Initialize Tutors
        document.addEventListener('DOMContentLoaded', function () {
            displayTutors(tutorsData);
            setupTutorFilters();
        });

        // Display Tutors
        function displayTutors(tutors) {
            tutorsGrid.innerHTML = '';

            if (tutors.length === 0) {
                tutorsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No tutors found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
                tutorsCount.textContent = '0 Tutors Available';
                return;
            }

            tutorsCount.textContent = `${tutors.length} Tutor${tutors.length !== 1 ? 's' : ''} Available`;

            tutors.forEach(tutor => {
                const tutorCard = document.createElement('div');
                tutorCard.className = 'tutor-card';
                tutorCard.innerHTML = `
            <div class="tutor-header">
                <div class="tutor-avatar-large">
                    <i class="${tutor.image}"></i>
                </div>
                <div class="tutor-basic-info">
                    <h3>${tutor.name}</h3>
                    <p>${tutor.bio}</p>
                    <div class="tutor-rating">
                        <div class="stars">
                            ${generateStars(tutor.rating)}
                        </div>
                        <span>${tutor.rating} (${tutor.reviews} reviews)</span>
                    </div>
                </div>
            </div>
            <div class="tutor-body">
                <div class="tutor-subjects">
                    <h4>Subjects</h4>
                    <div class="subject-tags">
                        ${tutor.subjects.map(subject => `<span class="subject-tag">${subject}</span>`).join('')}
                    </div>
                </div>
                <div class="tutor-details">
                    <div class="detail-item">
                        <i class="fas fa-user-graduate"></i>
                        <span>${tutor.experience} experience</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-users"></i>
                        <span>${tutor.students} students</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-clock"></i>
                        <span>${tutor.availability}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-star"></i>
                        <span>${tutor.rating}/5 rating</span>
                    </div>
                </div>
                <div class="tutor-footer">
                    <div class="tutor-price">
                        R${tutor.price}<span>/hr</span>
                    </div>
                    <button class="btn-contact" onclick="contactTutor(${tutor.id})">
                        Contact Tutor
                    </button>
                </div>
            </div>
        `;
                tutorsGrid.appendChild(tutorCard);
            });
        }

        // Generate star ratings
        function generateStars(rating) {
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 >= 0.5;
            const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

            let stars = '';

            // Full stars
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }

            // Half star
            if (halfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }

            // Empty stars
            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star"></i>';
            }

            return stars;
        }

        // Setup Tutor Filters
        function setupTutorFilters() {
            // Search functionality
            tutorSearch.addEventListener('input', filterTutors);

            // Subject filters
            subjectFilters.forEach(button => {
                button.addEventListener('click', function () {
                    subjectFilters.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    filterTutors();
                });
            });

            // Rating filters
            ratingFilters.forEach(button => {
                button.addEventListener('click', function () {
                    ratingFilters.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    filterTutors();
                });
            });

            // Rate filters
            rateFilters.forEach(button => {
                button.addEventListener('click', function () {
                    rateFilters.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    filterTutors();
                });
            });

            // Sort functionality
            sortTutors.addEventListener('change', filterTutors);
        }

        // Filter Tutors
        function filterTutors() {
            let filteredTutors = [...tutorsData];

            // Search filter
            const searchTerm = tutorSearch.value.toLowerCase();
            if (searchTerm) {
                filteredTutors = filteredTutors.filter(tutor =>
                    tutor.name.toLowerCase().includes(searchTerm) ||
                    tutor.subjects.some(subject => subject.toLowerCase().includes(searchTerm)) ||
                    tutor.bio.toLowerCase().includes(searchTerm)
                );
            }

            // Subject filter
            const activeSubject = document.querySelector('.subject-filter.active').dataset.subject;
            if (activeSubject !== 'all') {
                filteredTutors = filteredTutors.filter(tutor =>
                    tutor.subjects.some(subject =>
                        subject.toLowerCase().includes(activeSubject)
                    )
                );
            }

            // Rating filter
            const minRating = parseFloat(document.querySelector('.rating-filter.active').dataset.rating);
            if (minRating > 0) {
                filteredTutors = filteredTutors.filter(tutor => tutor.rating >= minRating);
            }

            // Rate filter
            const maxRate = document.querySelector('.rate-filter.active').dataset.rate;
            if (maxRate !== 'all') {
                filteredTutors = filteredTutors.filter(tutor => tutor.price <= parseInt(maxRate));
            }

            // Sort tutors
            const sortBy = sortTutors.value;
            filteredTutors.sort((a, b) => {
                switch (sortBy) {
                    case 'rating':
                        return b.rating - a.rating;
                    case 'price-low':
                        return a.price - b.price;
                    case 'price-high':
                        return b.price - a.price;
                    case 'name':
                        return a.name.localeCompare(b.name);
                    default:
                        return 0;
                }
            });

            displayTutors(filteredTutors);
        }

        // Contact Tutor Function
        function contactTutor(tutorId) {
            const tutor = tutorsData.find(t => t.id === tutorId);
            if (tutor) {
                alert(`Contacting ${tutor.name}...\n\nThis would open a messaging interface in a real application.`);
                // In a real app, this would open a chat/messaging interface
            }
        }

        // Update the setupEventListeners function to include tutor section
        function setupEventListeners() {
            // ... (previous event listeners)

            // Add smooth scrolling for the new section
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;

                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
