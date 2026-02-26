document.addEventListener('DOMContentLoaded', () => {
    // 1. Load User Data
    let user = JSON.parse(localStorage.getItem('user'));
    
    // Mock user if none exists for demonstration purposes
    if (!user) {
        user = {
            id: 1,
            name: "John Doe",
            email: "john@gmail.com",
            avatar: null
        };
        localStorage.setItem('user', JSON.stringify(user));
    }

    // Populate user profile
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userEmail').textContent = user.email;
    
    const avatarEl = document.getElementById('userAvatar');
    if (user.avatar) {
        avatarEl.innerHTML = `<img src="${user.avatar}" alt="${user.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
    } else {
        avatarEl.textContent = user.name.charAt(0).toUpperCase();
    }

    // 2. Navigation Logic
    const navLinks = document.querySelectorAll('.nav-link');
    const contentTitle = document.getElementById('contentTitle');
    const contentBody = document.getElementById('contentBody');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');

            // Update content
            const target = e.target.dataset.target;
            contentTitle.textContent = e.target.textContent;
            
            if (target === 'courses') {
                renderPurchasedCourses();
            } else if (target === 'orders') {
                contentBody.innerHTML = '<div class="empty-state"><p>You have no recent orders.</p></div>';
            } else if (target === 'settings') {
                contentBody.innerHTML = '<div class="empty-state"><p>Account settings coming soon.</p></div>';
            }
        });
    });

    // 3. Render Purchased Courses
    function renderPurchasedCourses() {
        // Try to get from localStorage
        let purchased = JSON.parse(localStorage.getItem('purchasedCourses')) || [];
        
        // If empty, let's check if there's a paid order in localStorage to mock a purchased course
        if (purchased.length === 0) {
            // Mocking a course if none exists for demo
            purchased = [
                {
                    id: "fullstack",
                    title: "Fullstack Web Development Bootcamp",
                    image: "https://picsum.photos/seed/fullstack/300/200"
                }
            ];
            localStorage.setItem('purchasedCourses', JSON.stringify(purchased));
        }

        if (purchased.length === 0) {
            contentBody.innerHTML = `
                <div class="empty-state">
                    <p>You have not purchased any courses yet.</p>
                    <a href="/" style="display: inline-block; margin-top: 15px; color: #1976d2; text-decoration: none; font-weight: bold;">Browse Courses</a>
                </div>
            `;
            return;
        }

        let html = '<div class="course-grid">';
        purchased.forEach(course => {
            html += `
                <div class="course-card">
                    <img src="${course.image}" alt="${course.title}" class="course-thumb" referrerpolicy="no-referrer">
                    <div class="course-info">
                        <h3 class="course-title">${course.title}</h3>
                        <a href="/course/${course.id}" class="btn-access">Access Course</a>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        contentBody.innerHTML = html;
    }

    // Initial render
    renderPurchasedCourses();

    // 4. Logout Functionality
    document.getElementById('btnLogout').addEventListener('click', () => {
        localStorage.removeItem('user');
        window.location.href = '/';
    });
});
