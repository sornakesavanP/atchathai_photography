/**
 * ATCHATHAI PHOTOGRAPHY IN — CORE APPLICATION SCRIPT
 * Luxury photography website with dynamic portfolio masonry, interactive booking calendar,
 * WhatsApp integration, and studio admin dashboard.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. INITIAL STATE & LUXURY PORTFOLIO DATA ---
    const defaultPortfolio = [

        {
            id: 2,
            title: "Golden Hour Sunset Promenade",
            category: "outdoor",
            img: "image/p1.jpg",
            featured: true
        },

        {
            id: 4,
            title: "Dramatic High-Contrast Outdoor Portrait",
            category: "outdoor",
            img: "image/p2.jpg",
            featured: true
        },
        {
            id: 5,
            title: "Grand Wedding Reception & Gala",
            category: "wedding",
            img: "image/w0.4.jpeg",
            featured: true
        },
        {
            id: 6,
            title: "Bridal Warmth & Celebration Joy",
            category: "wedding",
            img: "image/w0.5.jpeg",
            featured: true
        },
        {
            id: 7,
            title: "Ethereal Outdoor Maternity Glow",
            category: "maternity",
            img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1000&auto=format&fit=crop",
            featured: true
        },
        {
            id: 8,
            title: "Generational Heritage Family Portrait",
            category: "family",
            img: "https://images.unsplash.com/photo-1609234656388-0ff363383899?q=80&w=1000&auto=format&fit=crop",
            featured: false
        },
        {
            id: 9,
            title: "Serene Mist & Landscape Silhouette",
            category: "outdoor",
            img: "image/p3.jpg",
            featured: true
        },

        {
            id: 11,
            title: "Candid Haldi Joy & Festivities",
            category: "wedding",
            img: "image/w0.6.jpeg",
            featured: true
        },
        {
            id: 12,
            title: "Historical Fort Outdoor Destination Shoot",
            category: "outdoor",
            img: "image/p4.jpg",
            featured: true
        },
        {
            id: 13,
            title: "Intricate Bridal Mehendi Ornaments",
            category: "wedding",
            img: "image/w0.7.jpeg",
            featured: true
        },
        {
            id: 14,
            title: "Monochrome Outdoor Shadow Play",
            category: "outdoor",
            img: "image/p5.jpg",
            featured: true
        },
        {
            id: 15,
            title: "Beachfront Twilight Outdoor Session",
            category: "outdoor",
            img: "image/p6.jpg",
            featured: true
        },
        {
            id: 16,
            title: "Modern Ethnic Bridal Lookbook",
            category: "wedding",
            img: "image/w0.8.jpeg",
            featured: true
        },
        {
            id: 17,
            title: "Sacred Vivaha Rituals",
            category: "wedding",
            img: "image/w0.9.jpeg",
            featured: true
        },
        {
            id: 18,
            title: "Royal South Indian Bride & Groom",
            category: "wedding",
            img: "image/w1.jpeg",
            featured: true
        },
        {
            id: 19,
            title: "Traditional Garland Ceremony",
            category: "wedding",
            img: "image/w2.jpeg",
            featured: true
        },
        {
            id: 20,
            title: "Cinematic Wedding Moments",
            category: "wedding",
            img: "image/w3.jpeg",
            featured: true
        },
        {
            id: 21,
            title: "Emotional Bridal Blessings",
            category: "wedding",
            img: "image/w4.jpeg",
            featured: true
        },
        {
            id: 22,
            title: "Festive Wedding Celebrations",
            category: "wedding",
            img: "image/w5.jpeg",
            featured: true
        },
        {
            id: 23,
            title: "Grand Mandap & Pheras",
            category: "wedding",
            img: "image/w6.jpeg",
            featured: true
        },
        {
            id: 24,
            title: "Joyous Couple Reception Stories",
            category: "wedding",
            img: "image/w7.jpeg",
            featured: true
        },
        {
            id: 25,
            title: "Timeless Bridal Elegance",
            category: "wedding",
            img: "image/@1.jpeg",
            featured: true
        },
        {
            id: 26,
            title: "Royal Ceremonial Portraiture",
            category: "wedding",
            img: "image/@2.jpeg",
            featured: true
        },
        {
            id: 27,
            title: "Sacred Vivaha Moments",
            category: "wedding",
            img: "image/@3.jpg",
            featured: true
        },
        {
            id: 28,
            title: "Grand Festal Celebrations",
            category: "wedding",
            img: "image/@4.jpg",
            featured: true
        },
        {
            id: 29,
            title: "Traditional Heritage Blessing",
            category: "wedding",
            img: "image/@5.jpg",
            featured: true
        },

        {
            id: 31,
            title: "Emotional Haldi & Mehndi",
            category: "wedding",
            img: "image/@7.jpg",
            featured: true
        },
        {
            id: 32,
            title: "Cinematic Wedding Procession",
            category: "wedding",
            img: "image/@8.jpg",
            featured: true
        },
        {
            id: 33,
            title: "Luminous Bridal Portrait",
            category: "wedding",
            img: "image/@9.jpg",
            featured: true
        },
        {
            id: 34,
            title: "Grand South Indian Bride",
            category: "wedding",
            img: "image/41.JPG",
            featured: true
        },
        {
            id: 35,
            title: "Sacred Ceremony Moments",
            category: "wedding",
            img: "image/42.jpg",
            featured: true
        },
        {
            id: 36,
            title: "Royal Couple Vivaha Blessings",
            category: "wedding",
            img: "image/43.JPG",
            featured: true
        },
        {
            id: 37,
            title: "Cinematic Mandap Celebrations",
            category: "wedding",
            img: "image/44.JPG",
            featured: true
        },
        {
            id: 38,
            title: "Ethereal Outdoor Nature Glow",
            category: "outdoor",
            img: "image/p7.jpg",
            featured: true
        },
        {
            id: 39,
            title: "High-Fashion Editorial Model Shoot",
            category: "model",
            img: "image/4.webp",
            featured: true
        },
        {
            id: 40,
            title: "Studio Fashion Model Lookbook",
            category: "model",
            img: "image/1.webp",
            featured: true
        },
        {
            id: 41,
            title: "Candid Model Portfolio & Pose",
            category: "model",
            img: "image/Untitled-222.jpeg",
            featured: true
        },
        {
            id: 42,
            title: "Monochrome Editorial Model Portrait",
            category: "model",
            img: "image/9.webp",
            featured: true
        },
        {
            id: 43,
            title: "Sacred South Indian Vivaha Ritual",
            category: "wedding",
            img: "image/61.jpg",
            featured: true
        },
        {
            id: 44,
            title: "Royal Bridal Garlands & Smiles",
            category: "wedding",
            img: "image/62.JPG",
            featured: true
        },
        {
            id: 45,
            title: "Traditional Mandap Blessings",
            category: "wedding",
            img: "image/63.JPG",
            featured: true
        },
        {
            id: 46,
            title: "Golden Hour Couple Moments",
            category: "wedding",
            img: "image/64.JPG",
            featured: true
        },
        {
            id: 47,
            title: "Grand Wedding Reception Festive Joy",
            category: "wedding",
            img: "image/65.jpg",
            featured: true
        },
        {
            id: 48,
            title: "Emotional Bridal Saptapadi",
            category: "wedding",
            img: "image/66.JPG",
            featured: true
        },
        {
            id: 49,
            title: "Candid Haldi & Wedding Colors",
            category: "wedding",
            img: "image/67.JPG",
            featured: true
        },
        {
            id: 50,
            title: "Intricate Mehendi Ornaments",
            category: "wedding",
            img: "image/68.jpg",
            featured: true
        },
        {
            id: 51,
            title: "Royal Bride & Groom Heritage",
            category: "wedding",
            img: "image/69.jpg",
            featured: true
        },
        {
            id: 52,
            title: "Sacred Temple Wedding Blessings",
            category: "wedding",
            img: "image/70.jpg",
            featured: true
        },
        {
            id: 53,
            title: "Cinematic Marriage Procession",
            category: "wedding",
            img: "image/71.JPG",
            featured: true
        },
        {
            id: 54,
            title: "Ethereal Bridal Glow & Jewellery",
            category: "wedding",
            img: "image/72.JPG",
            featured: true
        },
        {
            id: 55,
            title: "Joyous Couple Celebration Story",
            category: "wedding",
            img: "image/73.JPG",
            featured: true
        },
        {
            id: 56,
            title: "Candid Model Studio Lookbook",
            category: "model",
            img: "image/91.jpeg",
            featured: true
        },
        {
            id: 57,
            title: "High-Fashion Editorial Model",
            category: "model",
            img: "image/92.jpeg",
            featured: true
        },
        {
            id: 58,
            title: "Contemporary Model Portraiture",
            category: "model",
            img: "image/93.jpeg",
            featured: true
        },
        {
            id: 59,
            title: "Studio Fashion Model Pose",
            category: "model",
            img: "image/94.jpg",
            featured: true
        },
        {
            id: 60,
            title: "Modern Glamour Model Shoot",
            category: "model",
            img: "image/95.jpeg",
            featured: true
        },
        {
            id: 61,
            title: "Ethereal Model Editorial",
            category: "model",
            img: "image/96.jpeg",
            featured: true
        },
        {
            id: 62,
            title: "Chic Vogue Style Model Series",
            category: "model",
            img: "image/97.jpeg",
            featured: true
        },
        {
            id: 63,
            title: "Dramatic Lighting Model Portrait",
            category: "model",
            img: "image/98.jpeg",
            featured: true
        }
    ];

    const defaultBookings = [
        {
            ref: "ATP-2026-8941",
            name: "Rajesh Kumar",
            phone: "+91 8428757206",
            email: "rajesh.k@gmail.com",
            service: "Wedding Photography",
            date: "2026-10-15",
            time: "Full Day Coverage",
            package: "Premium",
            status: "Approved",
            notes: "Destination wedding at Palace Hotel"
        },
        {
            ref: "ATP-2026-9120",
            name: "Ananya Sharma",
            phone: "+91 8428757206",
            email: "ananya.s@outlook.com",
            service: "Couple Photography",
            date: "2026-10-22",
            time: "Golden Hour (4:30 PM)",
            package: "Standard",
            status: "Pending Review",
            notes: "Beach side golden hour shoot requested"
        }
    ];

    const defaultBlockedDates = [];

    // Refresh Local Storage with fresh portfolio items & reset blocked dates
    localStorage.setItem('atp_portfolio', JSON.stringify(defaultPortfolio));
    localStorage.setItem('atp_blocked_dates', JSON.stringify(defaultBlockedDates));
    let portfolioData = defaultPortfolio;
    let bookingsData = JSON.parse(localStorage.getItem('atp_bookings')) || defaultBookings;
    let blockedDates = defaultBlockedDates;
    let messagesData = JSON.parse(localStorage.getItem('atp_messages')) || [];

    // State Tracking
    let currentDate = new Date(2026, 9, 1); // October 2026
    let selectedBookingDate = "2026-10-18";
    let currentLightboxIndex = 0;
    let filteredPortfolio = [...portfolioData];
    let isAdminLoggedIn = false;

    // --- 2. DOM ELEMENTS ---
    const preloader = document.getElementById('preloader');
    const header = document.getElementById('main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerClose = document.getElementById('drawer-close');
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroControls = document.querySelectorAll('.hero-control-btn');
    const portfolioMasonry = document.getElementById('portfolio-masonry');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Calendar DOM
    const calMonthYear = document.getElementById('calendar-month-year');
    const calDaysGrid = document.getElementById('calendar-days-grid');
    const prevMonthBtn = document.getElementById('prev-month-btn');
    const nextMonthBtn = document.getElementById('next-month-btn');
    const custDateInput = document.getElementById('cust-date');
    const bookingForm = document.getElementById('booking-form');

    // Modals
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCategory = document.getElementById('lightbox-category');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    const bookingModal = document.getElementById('booking-modal');
    const bookingModalClose = document.getElementById('booking-modal-close');
    const btnCloseBookingModal = document.getElementById('btn-close-booking-modal');

    // Admin DOM
    const adminTrigger = document.getElementById('admin-trigger');
    const footerAdminLink = document.getElementById('footer-admin-link');
    const adminModal = document.getElementById('admin-modal');
    const adminClose = document.getElementById('admin-close');
    const adminLoginForm = document.getElementById('admin-login-form');
    const adminLoginView = document.getElementById('admin-login-view');
    const adminPanelView = document.getElementById('admin-panel-view');
    const adminPasscode = document.getElementById('admin-passcode');
    const adminTabBtns = document.querySelectorAll('.admin-tab-btn');
    const adminLogoutBtn = document.getElementById('admin-logout-btn');

    // --- 3. INITIALIZATION ---
    setTimeout(() => {
        if (preloader) preloader.classList.add('fade-out');
    }, 600);

    initHeroSlider();
    renderPortfolio('all');
    renderCalendar();
    if (custDateInput) custDateInput.value = selectedBookingDate;

    // --- 4. NAVIGATION & HEADER EFFECTS ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    if (menuToggle && mobileDrawer) {
        menuToggle.addEventListener('click', () => mobileDrawer.classList.add('active'));
        drawerClose.addEventListener('click', () => mobileDrawer.classList.remove('active'));
        document.querySelectorAll('.drawer-link').forEach(link => {
            link.addEventListener('click', () => mobileDrawer.classList.remove('active'));
        });
    }

    // --- 5. HERO SLIDER LOGIC ---
    function initHeroSlider() {
        let currentSlide = 0;
        const totalSlides = heroSlides.length;

        function showSlide(index) {
            heroSlides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            heroControls.forEach((btn, i) => {
                btn.classList.toggle('active', i === index);
            });
            currentSlide = index;
        }

        heroControls.forEach((btn, i) => {
            btn.addEventListener('click', () => showSlide(i));
        });

        setInterval(() => {
            let nextIndex = (currentSlide + 1) % totalSlides;
            showSlide(nextIndex);
        }, 5500);
    }

    // --- 6. PORTFOLIO MASONRY & FILTERING ---
    function renderPortfolio(categoryFilter = 'all') {
        if (!portfolioMasonry) return;
        portfolioMasonry.innerHTML = '';

        filteredPortfolio = categoryFilter === 'all'
            ? portfolioData
            : portfolioData.filter(item => item.category === categoryFilter);

        if (filteredPortfolio.length === 0) {
            portfolioMasonry.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No photography items in this category yet.</p>`;
            return;
        }

        filteredPortfolio.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'portfolio-item';
            card.setAttribute('data-index', index);

            card.innerHTML = `
                <img src="${item.img}" alt="${item.title}" loading="lazy">
                <div class="portfolio-item-overlay">
                    <span class="portfolio-category-badge">${item.category.replace('-', ' ')}</span>
                    <h3 class="portfolio-item-title">${item.title}</h3>
                    <div class="portfolio-expand-icon"><i class="fa-solid fa-expand"></i></div>
                </div>
            `;

            card.addEventListener('click', () => openLightbox(index));
            portfolioMasonry.appendChild(card);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-filter');
            renderPortfolio(category);
        });
    });

    // Lightbox Logic
    function openLightbox(index) {
        currentLightboxIndex = index;
        const item = filteredPortfolio[currentLightboxIndex];
        if (!item) return;

        lightboxImg.src = item.img;
        lightboxCategory.textContent = item.category.replace('-', ' ');
        lightboxTitle.textContent = item.title;
        lightboxModal.classList.add('active');
    }

    function closeLightbox() {
        lightboxModal.classList.remove('active');
    }

    function nextLightbox() {
        currentLightboxIndex = (currentLightboxIndex + 1) % filteredPortfolio.length;
        openLightbox(currentLightboxIndex);
    }

    function prevLightbox() {
        currentLightboxIndex = (currentLightboxIndex - 1 + filteredPortfolio.length) % filteredPortfolio.length;
        openLightbox(currentLightboxIndex);
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);

    document.addEventListener('keydown', (e) => {
        if (!lightboxModal.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
    });

    // --- 7. INTERACTIVE BOOKING CALENDAR ---
    function renderCalendar() {
        if (!calDaysGrid || !calMonthYear) return;

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        calMonthYear.textContent = `${monthNames[month]} ${year}`;

        calDaysGrid.innerHTML = '';

        const firstDayIndex = new Date(year, month, 1).getDay();
        const totalDays = new Date(year, month + 1, 0).getDate();

        // Empty lead slots
        for (let i = 0; i < firstDayIndex; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'cal-day empty';
            calDaysGrid.appendChild(emptyCell);
        }

        // Days
        for (let day = 1; day <= totalDays; day++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayCell = document.createElement('div');
            dayCell.className = 'cal-day';
            dayCell.textContent = day;

            const isBlocked = blockedDates.includes(dateStr);
            const isSelected = selectedBookingDate === dateStr;

            if (isBlocked) {
                dayCell.classList.add('unavailable');
                dayCell.title = "Unavailable";
            } else {
                dayCell.classList.add('available');
                if (isSelected) dayCell.classList.add('selected');

                dayCell.addEventListener('click', () => {
                    document.querySelectorAll('.cal-day').forEach(d => d.classList.remove('selected'));
                    dayCell.classList.add('selected');
                    selectedBookingDate = dateStr;
                    custDateInput.value = dateStr;
                });
            }

            calDaysGrid.appendChild(dayCell);
        }
    }

    if (prevMonthBtn && nextMonthBtn) {
        prevMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });
        nextMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });
    }

    // --- 8. BOOKING FORM SUBMISSION ---
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('cust-name').value;
            const phone = document.getElementById('cust-phone').value;
            const email = document.getElementById('cust-email').value;
            const service = document.getElementById('cust-service').value;
            const date = custDateInput.value || selectedBookingDate;
            const time = document.getElementById('cust-time').value;
            const location = document.getElementById('cust-location').value;
            const people = document.getElementById('cust-people').value;
            const pkg = document.getElementById('cust-package').value;
            const reqs = document.getElementById('cust-reqs').value;

            const randomCode = Math.floor(1000 + Math.random() * 9000);
            const refID = `ATP-2026-${randomCode}`;

            const newBooking = {
                ref: refID,
                name,
                phone,
                email,
                service,
                date,
                time,
                location,
                people,
                package: pkg,
                notes: reqs,
                status: "Pending Review",
                submittedAt: new Date().toISOString()
            };

            bookingsData.unshift(newBooking);
            localStorage.setItem('atp_bookings', JSON.stringify(bookingsData));

            // Populate confirmation modal
            document.getElementById('res-ref').textContent = refID;
            document.getElementById('res-service').textContent = service;
            document.getElementById('res-date').textContent = date;
            document.getElementById('res-name').textContent = name;

            bookingModal.classList.add('active');
            bookingForm.reset();
            custDateInput.value = selectedBookingDate;

            renderAdminView();
        });
    }

    if (bookingModalClose) bookingModalClose.addEventListener('click', () => bookingModal.classList.remove('active'));
    if (btnCloseBookingModal) btnCloseBookingModal.addEventListener('click', () => bookingModal.classList.remove('active'));

    // Pre-fill Package buttons
    document.querySelectorAll('.btn-enquire').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const pkgName = btn.getAttribute('data-package');
            const pkgSelect = document.getElementById('cust-package');
            if (pkgSelect && pkgName) {
                pkgSelect.value = pkgName;
            }
        });
    });

    // --- 9. CONTACT MESSAGE FORM ---
    const contactForm = document.getElementById('contact-message-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('msg-name').value;
            const phone = document.getElementById('msg-phone').value;
            const text = document.getElementById('msg-text').value;

            messagesData.unshift({
                name, phone, text, date: new Date().toLocaleDateString()
            });
            localStorage.setItem('atp_messages', JSON.stringify(messagesData));

            alert("Thank you! Your message has been sent to Atchathai Photography IN studio manager.");
            contactForm.reset();
            renderAdminMessages();
        });
    }

    // --- 10. ADMIN DASHBOARD LOGIC ---
    function openAdminModal() {
        adminModal.classList.add('active');
        if (isAdminLoggedIn) {
            adminLoginView.style.display = 'none';
            adminPanelView.style.display = 'flex';
            renderAdminView();
        } else {
            adminLoginView.style.display = 'flex';
            adminPanelView.style.display = 'none';
        }
    }

    if (adminTrigger) adminTrigger.addEventListener('click', openAdminModal);
    if (footerAdminLink) footerAdminLink.addEventListener('click', openAdminModal);
    if (adminClose) adminClose.addEventListener('click', () => adminModal.classList.remove('active'));

    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (adminPasscode.value === 'admin123' || adminPasscode.value === 'admin') {
                isAdminLoggedIn = true;
                adminLoginView.style.display = 'none';
                adminPanelView.style.display = 'flex';
                renderAdminView();
            } else {
                alert('Invalid passcode. Try "admin123".');
            }
        });
    }

    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', () => {
            isAdminLoggedIn = false;
            adminLoginView.style.display = 'flex';
            adminPanelView.style.display = 'none';
            adminPasscode.value = '';
        });
    }

    // Admin Tab Navigation
    adminTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            adminTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const targetTab = btn.getAttribute('data-tab');

            document.querySelectorAll('.admin-tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });

    // Render Admin Views
    function renderAdminView() {
        updateAdminStats();
        renderAdminBookingsTable();
        renderAdminPortfolioList();
        renderAdminAvailabilityCalendar();
        renderAdminMessages();
    }

    function updateAdminStats() {
        const statTotal = document.getElementById('stat-total-bookings');
        const statPending = document.getElementById('stat-pending-bookings');
        const statApproved = document.getElementById('stat-approved-bookings');
        const statPortfolio = document.getElementById('stat-portfolio-count');

        if (statTotal) statTotal.textContent = bookingsData.length;
        if (statPending) statPending.textContent = bookingsData.filter(b => b.status === 'Pending Review').length;
        if (statApproved) statApproved.textContent = bookingsData.filter(b => b.status === 'Approved').length;
        if (statPortfolio) statPortfolio.textContent = portfolioData.length;
    }

    function renderAdminBookingsTable() {
        const tableContainer = document.getElementById('admin-bookings-table');
        const recentContainer = document.getElementById('admin-recent-bookings-list');

        if (!tableContainer) return;

        let html = `
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Ref ID</th>
                        <th>Customer</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Package</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

        bookingsData.forEach((b, idx) => {
            html += `
                <tr>
                    <td><strong>${b.ref}</strong></td>
                    <td>${b.name}<br><small style="color:var(--text-muted)">${b.phone}</small></td>
                    <td>${b.service}</td>
                    <td>${b.date}</td>
                    <td>${b.package || 'Standard'}</td>
                    <td><span class="badge-status ${b.status.replace(/\s+/g, '')}">${b.status}</span></td>
                    <td>
                        <div class="tbl-actions">
                            <button class="btn-action-sm approve" onclick="updateBookingStatus(${idx}, 'Approved')">Approve</button>
                            <button class="btn-action-sm reject" onclick="updateBookingStatus(${idx}, 'Rejected')">Reject</button>
                        </div>
                    </td>
                </tr>
            `;
        });

        html += `</tbody></table>`;
        tableContainer.innerHTML = html;
        if (recentContainer) recentContainer.innerHTML = html;
    }

    window.updateBookingStatus = function (index, newStatus) {
        bookingsData[index].status = newStatus;
        localStorage.setItem('atp_bookings', JSON.stringify(bookingsData));
        renderAdminView();
    };

    function renderAdminPortfolioList() {
        const grid = document.getElementById('admin-portfolio-list');
        if (!grid) return;

        grid.innerHTML = '';
        portfolioData.forEach((photo, idx) => {
            const card = document.createElement('div');
            card.className = 'admin-photo-card';
            card.innerHTML = `
                <img src="${photo.img}" alt="${photo.title}">
                <div class="admin-photo-info">
                    <span class="admin-photo-title">${photo.title}</span>
                    <button class="btn-action-sm reject" onclick="deletePortfolioItem(${idx})"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    window.deletePortfolioItem = function (index) {
        portfolioData.splice(index, 1);
        localStorage.setItem('atp_portfolio', JSON.stringify(portfolioData));
        renderPortfolio('all');
        renderAdminView();
    };

    // Add Photo Form
    const btnAddPhoto = document.getElementById('btn-add-photo');
    const addPhotoFormBox = document.getElementById('add-photo-form-box');
    const formNewPhoto = document.getElementById('form-new-photo');

    if (btnAddPhoto) {
        btnAddPhoto.addEventListener('click', () => {
            addPhotoFormBox.style.display = addPhotoFormBox.style.display === 'none' ? 'block' : 'none';
        });
    }

    if (formNewPhoto) {
        formNewPhoto.addEventListener('submit', (e) => {
            e.preventDefault();
            const url = document.getElementById('photo-url').value;
            const title = document.getElementById('photo-title').value;
            const category = document.getElementById('photo-category').value;
            const featured = document.getElementById('photo-featured').checked;

            portfolioData.unshift({
                id: Date.now(),
                title,
                category,
                img: url,
                featured
            });

            localStorage.setItem('atp_portfolio', JSON.stringify(portfolioData));
            renderPortfolio('all');
            renderAdminView();
            formNewPhoto.reset();
            addPhotoFormBox.style.display = 'none';
        });
    }

    function renderAdminAvailabilityCalendar() {
        const container = document.getElementById('admin-calendar-container');
        if (!container) return;

        container.innerHTML = `
            <p style="margin-bottom:1rem; color:var(--text-muted);">Current blocked dates for studio maintenance or private bookings:</p>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:1rem;">
                ${blockedDates.map((d, i) => `
                    <span style="background:rgba(198,40,40,0.3); border:1px solid #ef5350; padding:0.4rem 0.8rem; border-radius:4px; font-size:0.85rem; color:#fff;">
                        ${d} <i class="fa-solid fa-xmark" style="cursor:pointer; margin-left:6px;" onclick="unblockDate(${i})"></i>
                    </span>
                `).join('')}
            </div>
            <div style="display:flex; gap:0.8rem;">
                <input type="date" id="new-block-date" style="padding:0.6rem; background:#000; color:#fff; border:1px solid rgba(255,255,255,0.2); border-radius:4px;">
                <button class="btn btn-gold btn-sm" onclick="addBlockedDate()">Block Date</button>
            </div>
        `;
    }

    window.addBlockedDate = function () {
        const input = document.getElementById('new-block-date');
        if (input && input.value) {
            if (!blockedDates.includes(input.value)) {
                blockedDates.push(input.value);
                localStorage.setItem('atp_blocked_dates', JSON.stringify(blockedDates));
                renderCalendar();
                renderAdminAvailabilityCalendar();
            }
        }
    };

    window.unblockDate = function (index) {
        blockedDates.splice(index, 1);
        localStorage.setItem('atp_blocked_dates', JSON.stringify(blockedDates));
        renderCalendar();
        renderAdminAvailabilityCalendar();
    };

    function renderAdminMessages() {
        const list = document.getElementById('admin-messages-list');
        if (!list) return;

        if (messagesData.length === 0) {
            list.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">No contact messages received yet.</p>`;
            return;
        }

        list.innerHTML = messagesData.map(m => `
            <div style="background:#09090b; border:1px solid rgba(255,255,255,0.08); border-radius:6px; padding:1rem; margin-bottom:0.8rem;">
                <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
                    <strong style="color:var(--gold-primary);">${m.name} (${m.phone})</strong>
                    <span style="font-size:0.75rem; color:var(--text-muted);">${m.date}</span>
                </div>
                <p style="font-size:0.88rem; color:var(--text-light);">${m.text}</p>
            </div>
        `).join('');
    }

    // --- 10. INSTAGRAM REELS HORIZONTAL CAROUSEL & SCROLLING MODEL ---
    const reelsTrack = document.getElementById('ig-reels-grid-track');
    const scrollLeftBtn = document.getElementById('ig-scroll-left');
    const scrollRightBtn = document.getElementById('ig-scroll-right');

    if (scrollLeftBtn && reelsTrack) {
        scrollLeftBtn.addEventListener('click', () => {
            reelsTrack.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }

    if (scrollRightBtn && reelsTrack) {
        scrollRightBtn.addEventListener('click', () => {
            reelsTrack.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }

    const reelsData = [
        {
            id: "DNQaMZMyhDP",
            url: "https://www.instagram.com/reel/DNQaMZMyhDP/",
            title: "Cinematic South Indian Wedding Story",
            likes: "14.2K",
            audio: "Original Audio — Atchathai Studio",
            thumb: "image/2.webp",
            hashtags: "#AtchathaiPhotography #CinematicWedding #BridalGlow #TamilWedding"
        },
        {
            id: "DOXPR_VE03z",
            url: "https://www.instagram.com/reel/DOXPR_VE03z/",
            title: "Golden Hour Romantic Couple Shoot",
            likes: "18.9K",
            audio: "Timeless Love Strings — Atchathai Edit",
            thumb: "image/8.webp",
            hashtags: "#CoupleShoot #GoldenHour #LoveStory #AtchathaiIN"
        },
        {
            id: "DcdpARAzXQS",
            url: "https://www.instagram.com/reel/DcdpARAzXQS/",
            title: "Royal South Indian Bridal Portraiture",
            likes: "22.5K",
            audio: "Royal Saree Moments — Studio Mix",
            thumb: "image/3.webp",
            hashtags: "#BridalPortrait #SilkSaree #RoyalBride #AtchathaiMagic"
        },
        {
            id: "DNQaMZMyhDP",
            url: "https://www.instagram.com/reel/DNQaMZMyhDP/",
            title: "Behind The Lens — Wedding Day Magic",
            likes: "11.8K",
            audio: "Behind The Scenes Vibe — Atchathai",
            thumb: "image/9.webp",
            hashtags: "#BehindTheScenes #WeddingPhotographer #CandidMoments"
        },
        {
            id: "DOXPR_VE03z",
            url: "https://www.instagram.com/reel/DOXPR_VE03z/",
            title: "Candid Haldi Moments & Sunset Joy",
            likes: "16.4K",
            audio: "Celebration Beats — Live Audio",
            thumb: "image/1.webp",
            hashtags: "#HaldiCeremony #CandidPhotography #AtchathaiIN"
        },
        {
            id: "DcdpARAzXQS",
            url: "https://www.instagram.com/reel/DcdpARAzXQS/",
            title: "Editorial Bridal Lookbook & High Fashion",
            likes: "25.1K",
            audio: "Vogue Editorial Symphony",
            thumb: "image/4.webp",
            hashtags: "#FashionPhotography #BridalVogue #EditorialShoot"
        }
    ];

    let currentReelIndex = 0;
    const igModal = document.getElementById('ig-reels-modal');
    const igModalClose = document.getElementById('ig-modal-close');
    const igModalBackdrop = document.getElementById('ig-modal-backdrop');
    const igIframe = document.getElementById('ig-embed-iframe');
    const igPoster = document.getElementById('ig-modal-poster');
    const igFallbackLink = document.getElementById('ig-fallback-play-link');
    const igCaption = document.getElementById('ig-modal-caption');
    const igHashtags = document.getElementById('ig-modal-hashtags');
    const igAudio = document.getElementById('ig-audio-title');
    const igLikes = document.getElementById('ig-like-count');
    const igCounter = document.getElementById('ig-reel-counter');
    const igExternalLink = document.getElementById('ig-external-link');
    const igPrevBtn = document.getElementById('ig-prev-reel');
    const igNextBtn = document.getElementById('ig-next-reel');
    const igLikeBtn = document.getElementById('ig-like-btn');
    const igShareBtn = document.getElementById('ig-share-btn');
    const igPhoneFrame = document.getElementById('ig-phone-frame');

    function updateReelView(index) {
        if (index < 0) index = reelsData.length - 1;
        if (index >= reelsData.length) index = 0;
        currentReelIndex = index;

        const reel = reelsData[currentReelIndex];

        if (igIframe) igIframe.src = `https://www.instagram.com/reel/${reel.id}/embed/`;
        if (igPoster) igPoster.src = reel.thumb;
        if (igFallbackLink) igFallbackLink.href = reel.url;
        if (igCaption) igCaption.textContent = reel.title;
        if (igHashtags) igHashtags.textContent = reel.hashtags;
        if (igAudio) igAudio.textContent = reel.audio;
        if (igLikes) igLikes.textContent = reel.likes;
        if (igCounter) igCounter.textContent = `${currentReelIndex + 1} / ${reelsData.length}`;
        if (igExternalLink) igExternalLink.href = reel.url;

        if (igLikeBtn) igLikeBtn.classList.remove('liked');
    }

    function openReelsModal(index) {
        updateReelView(index);
        if (igModal) {
            igModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeReelsModal() {
        if (igModal) {
            igModal.classList.remove('active');
            document.body.style.overflow = '';
        }
        if (igIframe) igIframe.src = '';
    }

    const reelCards = document.querySelectorAll('.ig-reel-card');
    reelCards.forEach((card) => {
        card.addEventListener('click', () => {
            const index = parseInt(card.getAttribute('data-index') || '0', 10);
            openReelsModal(index);
        });
    });

    if (igPrevBtn) igPrevBtn.addEventListener('click', () => updateReelView(currentReelIndex - 1));
    if (igNextBtn) igNextBtn.addEventListener('click', () => updateReelView(currentReelIndex + 1));
    if (igModalClose) igModalClose.addEventListener('click', closeReelsModal);
    if (igModalBackdrop) igModalBackdrop.addEventListener('click', closeReelsModal);

    if (igLikeBtn) {
        igLikeBtn.addEventListener('click', () => {
            igLikeBtn.classList.toggle('liked');
        });
    }

    if (igShareBtn) {
        igShareBtn.addEventListener('click', () => {
            const currentUrl = reelsData[currentReelIndex].url;
            navigator.clipboard.writeText(currentUrl).then(() => {
                const toast = document.createElement('div');
                toast.style.cssText = `
                    position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
                    background: var(--gold-primary); color: #000; font-weight: 700;
                    padding: 10px 20px; border-radius: 25px; z-index: 200000;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.5); font-size: 0.85rem;
                `;
                toast.textContent = '✨ Reel link copied to clipboard!';
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 2500);
            });
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!igModal || !igModal.classList.contains('active')) return;
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            updateReelView(currentReelIndex - 1);
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            updateReelView(currentReelIndex + 1);
        } else if (e.key === 'Escape') {
            closeReelsModal();
        }
    });

    let wheelCooldown = false;
    if (igPhoneFrame) {
        igPhoneFrame.addEventListener('wheel', (e) => {
            if (!igModal || !igModal.classList.contains('active')) return;
            if (wheelCooldown) return;
            wheelCooldown = true;
            if (e.deltaY > 0) {
                updateReelView(currentReelIndex + 1);
            } else if (e.deltaY < 0) {
                updateReelView(currentReelIndex - 1);
            }
            setTimeout(() => { wheelCooldown = false; }, 400);
        }, { passive: true });
    }
});
