/* =========================================================
   SKILLBRIDGE
   Academia - Industry Collaboration Portal
   SIH26044
   ========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", Arial, sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #f5f7fb;
    color: #172033;
}

/* =========================================================
   SIDEBAR
   ========================================================= */

.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    background: #0f172a;
    color: white;
    padding: 25px 18px;
    z-index: 1000;
    transition: 0.3s ease;
}

.logo {
    padding: 5px 12px 30px;
}

.logo h1 {
    font-size: 25px;
    color: #38bdf8;
    letter-spacing: -0.5px;
}

.logo p {
    color: #94a3b8;
    font-size: 12px;
    margin-top: 4px;
}

.menu {
    list-style: none;
}

.menu li {
    margin: 7px 0;
}

.menu a {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 13px 15px;
    border-radius: 10px;
    color: #94a3b8;
    text-decoration: none;
    font-size: 14px;
    transition: 0.3s;
}

.menu a:hover,
.menu a.active {
    background: #2563eb;
    color: white;
}

.sidebar-bottom {
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 25px;
    background: #1e293b;
    padding: 15px;
    border-radius: 12px;
}

.sidebar-bottom p {
    color: #94a3b8;
    font-size: 12px;
}

.sidebar-bottom strong {
    display: block;
    margin-top: 5px;
    font-size: 13px;
}

/* =========================================================
   MAIN
   ========================================================= */

.main {
    margin-left: 250px;
    min-height: 100vh;
}

/* =========================================================
   HEADER
   ========================================================= */

header {
    height: 75px;
    background: rgba(255, 255, 255, 0.95);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 35px;
    border-bottom: 1px solid #e5e7eb;
    position: sticky;
    top: 0;
    z-index: 500;
    backdrop-filter: blur(10px);
}

.header-title {
    display: flex;
    flex-direction: column;
}

.header-title p {
    color: #64748b;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.header-title h2 {
    font-size: 20px;
    margin-top: 3px;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 18px;
}

.search {
    width: 230px;
    background: #f1f5f9;
    padding: 10px 14px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.search input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 13px;
}

.notification {
    position: relative;
    font-size: 20px;
    cursor: pointer;
}

.notification::after {
    content: "";
    position: absolute;
    width: 7px;
    height: 7px;
    background: #ef4444;
    border-radius: 50%;
    right: -1px;
    top: -1px;
}

.profile {
    width: 42px;
    height: 42px;
    border-radius: 11px;
    background: #2563eb;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
}

.mobile-menu {
    display: none;
    font-size: 24px;
    cursor: pointer;
}

/* =========================================================
   CONTENT
   ========================================================= */

.content {
    padding: 35px;
}

.welcome {
    margin-bottom: 30px;
}

.welcome small {
    color: #2563eb;
    font-weight: 700;
    letter-spacing: 0.5px;
}

.welcome h1 {
    font-size: 30px;
    margin-top: 6px;
}

.welcome p {
    color: #64748b;
    margin-top: 8px;
}

/* =========================================================
   STATISTICS
   ========================================================= */

.stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.stat-card {
    background: white;
    padding: 22px;
    border-radius: 16px;
    border: 1px solid #e5e7eb;
    transition: 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
}

.stat-icon {
    width: 45px;
    height: 45px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    margin-bottom: 18px;
}

.blue {
    background: #eff6ff;
    color: #2563eb;
}

.purple {
    background: #f5f3ff;
    color: #7c3aed;
}

.green {
    background: #ecfdf5;
    color: #059669;
}

.orange {
    background: #fff7ed;
    color: #ea580c;
}

.stat-card p {
    color: #64748b;
    font-size: 14px;
}

.stat-card h2 {
    font-size: 28px;
    margin: 5px 0;
}

.growth {
    color: #059669;
    font-size: 12px;
    font-weight: 600;
}

/* =========================================================
   DASHBOARD GRID
   ========================================================= */

.dashboard-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 25px;
    margin-top: 30px;
}

.card {
    background: white;
    border-radius: 18px;
    padding: 25px;
    border: 1px solid #e5e7eb;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}

.card-header h3 {
    font-size: 18px;
}

.card-header p {
    color: #64748b;
    font-size: 13px;
    margin-top: 4px;
}

.view-btn {
    border: none;
    background: transparent;
    color: #2563eb;
    font-weight: 600;
    cursor: pointer;
}

/* =========================================================
   SKILL MAPPING
   ========================================================= */

.skill {
    margin-bottom: 20px;
}

.skill-info {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 7px;
}

.skill-info span {
    color: #64748b;
}

.progress {
    height: 9px;
    background: #e2e8f0;
    border-radius: 20px;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    border-radius: 20px;
    background: linear-gradient(
        90deg,
        #2563eb,
        #06b6d4
    );
    transition: width 1s ease;
}

.skill-demand {
    font-size: 11px;
    color: #64748b;
    margin-top: 5px;
}

/* =========================================================
   CAREER READINESS
   ========================================================= */

.career-card {
    background: linear-gradient(
        135deg,
        #2563eb,
        #4f46e5
    );
    color: white;
}

.career-icon {
    width: 50px;
    height: 50px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}

.career-card small {
    display: block;
    margin-top: 25px;
    color: #dbeafe;
    font-size: 11px;
}

.score {
    font-size: 55px;
    font-weight: 800;
    margin-top: 4px;
}

.career-card p {
    color: #dbeafe;
    font-size: 14px;
    line-height: 1.6;
    margin-top: 10px;
}

.career-btn {
    width: 100%;
    padding: 13px;
    margin-top: 25px;
    border: none;
    border-radius: 10px;
    background: white;
    color: #2563eb;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s;
}

.career-btn:hover {
    background: #eff6ff;
}

/* =========================================================
   SECTIONS
   ========================================================= */

.section {
    margin-top: 35px;
}

.section-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.section-title h2 {
    font-size: 21px;
}

.section-title p {
    color: #64748b;
    font-size: 13px;
    margin-top: 4px;
}

/* =========================================================
   INTERNSHIPS
   ========================================================= */

.internships {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.internship-card {
    background: white;
    padding: 22px;
    border-radius: 16px;
    border: 1px solid #e5e7eb;
    transition: 0.3s ease;
}

.internship-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
}

.internship-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.company-logo {
    width: 45px;
    height: 45px;
    border-radius: 11px;
    background: #0f172a;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
}

.tag {
    background: #ecfdf5;
    color: #059669;
    padding: 6px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
}

.company {
    color: #94a3b8;
    font-size: 11px;
    font-weight: 700;
    margin-top: 20px;
    letter-spacing: 0.5px;
}

.internship-card h3 {
    font-size: 17px;
    margin-top: 5px;
}

.location {
    color: #64748b;
    font-size: 13px;
    margin-top: 10px;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 15px;
}

.skill-tag {
    background: #f1f5f9;
    color: #475569;
    padding: 6px 9px;
    border-radius: 7px;
    font-size: 11px;
}

.apply-btn {
    width: 100%;
    margin-top: 18px;
    padding: 12px;
    border: none;
    background: #0f172a;
    color: white;
    border-radius: 9px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.3s;
}

.apply-btn:hover {
    background: #2563eb;
}

/* =========================================================
   AI RECOMMENDATION
   ========================================================= */

.ai-section {
    margin-top: 35px;
    background: linear-gradient(
        135deg,
        #0f172a,
        #1e293b
    );
    color: white;
    border-radius: 20px;
    padding: 30px;
}

.ai-section h2 {
    font-size: 22px;
}

.ai-section > p {
    color: #cbd5e1;
    margin-top: 8px;
    font-size: 14px;
}

.recommendations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-top: 25px;
}

.recommendation {
    background: rgba(255, 255, 255, 0.07);
    padding: 18px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: 0.3s;
}

.recommendation:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-3px);
}

.recommendation span {
    font-size: 25px;
}

.recommendation h3 {
    margin-top: 10px;
    font-size: 15px;
}

.recommendation p {
    color: #cbd5e1;
    font-size: 12px;
    line-height: 1.5;
}

/* =========================================================
   PLACEMENT TABLE
   ========================================================= */

.placement-table {
    width: 100%;
    border-collapse: collapse;
}

.placement-table th,
.placement-table td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
    font-size: 13px;
}

.placement-table th {
    background: #f8fafc;
    color: #64748b;
    font-weight: 600;
}

.placement-table tr:hover {
    background: #f8fafc;
}

.match {
    color: #059669;
    font-weight: bold;
}

/* =========================================================
   FOOTER
   ========================================================= */

footer {
    margin-top: 50px;
    background: #0f172a;
    color: #94a3b8;
    padding: 25px;
    text-align: center;
    font-size: 13px;
}

/* =========================================================
   MODAL
   ========================================================= */

.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.65);
    z-index: 2000;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.modal.show {
    display: flex;
}

.modal-content {
    width: 100%;
    max-width: 500px;
    background: white;
    border-radius: 18px;
    padding: 30px;
    animation: modalIn 0.25s ease;
}

@keyframes modalIn {
    from {
        transform: scale(0.9);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-modal {
    border: none;
    background: #f1f5f9;
    width: 35px;
    height: 35px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
}

.modal-content p {
    color: #64748b;
    margin-top: 15px;
    line-height: 1.6;
}

.modal-actions {
    display: flex;
    gap: 10px;
    margin-top: 25px;
}

.modal-actions button {
    flex: 1;
    padding: 12px;
    border-radius: 9px;
    border: none;
    cursor: pointer;
    font-weight: 600;
}

.primary-btn {
    background: #2563eb;
    color: white;
}

.secondary-btn {
    background: #e2e8f0;
    color: #334155;
}

/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 1200px) {

    .stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .internships {
        grid-template-columns: repeat(2, 1fr);
    }

    .dashboard-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 850px) {

    .sidebar {
        transform: translateX(-100%);
    }

    .sidebar.show {
        transform: translateX(0);
        box-shadow: 10px 0 30px rgba(0,0,0,0.2);
    }

    .main {
        margin-left: 0;
    }

    .mobile-menu {
        display: block;
        margin-bottom: 4px;
    }

    .search {
        display: none;
    }

    header {
        padding: 0 20px;
    }

    .content {
        padding: 20px;
    }

    .internships {
        grid-template-columns: 1fr;
    }

    .recommendations {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 550px) {

    .stats {
        grid-template-columns: 1fr;
    }

    .welcome h1 {
        font-size: 25px;
    }

    .header-title h2 {
        font-size: 16px;
    }

    .header-right {
        gap: 10px;
    }

    .profile {
        width: 38px;
        height: 38px;
    }

    .placement-table {
        min-width: 650px;
    }

    .card {
        overflow-x: auto;
    }

    .career-card {
        overflow: hidden;
    }
}
