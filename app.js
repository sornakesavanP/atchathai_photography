/**
 * ATCHATHAI PHOTOGRAPHY IN — CORE APPLICATION SCRIPT
 * Luxury photography website with dynamic portfolio masonry, interactive booking calendar,
 * WhatsApp integration, and studio admin dashboard.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. INITIAL STATE & LUXURY PORTFOLIO DATA ---
    const defaultPortfolio = [
        {
            id: 1,
            title: "Royal Indian Bridal Portrait",
            category: "wedding",
            img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop",
            featured: true
        },
        {
            id: 2,
            title: "Golden Hour Sunset Romance",
            category: "pre-wedding",
            img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
            featured: true
        },
        {
            id: 3,
            title: "Modern Couple Studio Portrait",
            category: "couples",
            img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
            featured: false
        },
        {
            id: 4,
            title: "Dramatic High-Contrast Editorial",
            category: "portraits",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
            featured: true
        },
        {
            id: 5,
            title: "Luxury Silk Fashion Lookbook",
            category: "fashion",
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
            featured: false
        },
        {
            id: 6,
            title: "Vibrant Celebration Lights",
            category: "events",
            img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop",
            featured: false
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
            img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop",
            featured: false
        },
        {
            id: 10,
            title: "Sacred Ritual & Temple Blessings",
            category: "traditional",
            img: "https://images.unsplash.com/photo-1605809761989-d4637a85c88b?q=80&w=1000&auto=format&fit=crop",
            featured: true
        },
        {
            id: 11,
            title: "Candid Haldi Joy & Colors",
            category: "wedding",
            img: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000&auto=format&fit=crop",
            featured: false
        },
        {
            id: 12,
            title: "Historical Fort Destination Shoot",
            category: "pre-wedding",
            img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop",
            featured: true
        },
        {
            id: 13,
            title: "Intricate Mehendi Details & Ornaments",
            category: "traditional",
            img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
            featured: true
        },
        {
            id: 14,
            title: "Monochrome Studio Shadow Play",
            category: "portraits",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
            featured: false
        },
        {
            id: 15,
            title: "Beachfront Twilight Promenade",
            category: "outdoor",
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
            featured: false
        },
        {
            id: 16,
            title: "Modern Ethnic Editorial Shoot",
            category: "fashion",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
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
            service: "Pre-Wedding Photography",
            date: "2026-10-22",
            time: "Golden Hour (4:30 PM)",
            package: "Standard",
            status: "Pending Review",
            notes: "Beach side golden hour shoot requested"
        }
    ];

    const defaultBlockedDates = ["2026-10-15", "2026-10-28", "2026-11-05"];

    // Refresh Local Storage with fresh portfolio items
    localStorage.setItem('atp_portfolio', JSON.stringify(defaultPortfolio));
    let portfolioData = defaultPortfolio;
    let bookingsData = JSON.parse(localStorage.getItem('atp_bookings')) || defaultBookings;
    let blockedDates = JSON.parse(localStorage.getItem('atp_blocked_dates')) || defaultBlockedDates;
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
                dayCell.title = "Fully Booked / Studio Unavailable";
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
});
