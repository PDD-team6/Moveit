---

### ✅ `README.md`

````markdown
# Moveit 🚚

**Moveit** is a smart truck booking platform inspired by Uber and Ola, designed to simplify logistics and goods transportation. It connects users with verified transport partners in real time, offering a smooth and secure booking experience.

---

## 🌟 Features

- 🔒 Secure Login & Registration
- 📦 Book Trucks by Type & Capacity
- 🗺️ Real-Time Tracking & Status Updates
- 💳 Multiple Payment Options
- 🧾 View Past Bookings & Invoices
- ⭐ Feedback & Ratings for Drivers
- 📞 Emergency Contact & Support Options

---

## 🛠️ Tech Stack

| Layer         | Technology Used                           |
|---------------|-------------------------------------------|
| **Frontend**  | HTML, CSS, JavaScript                     |
| **Backend**   | Java                                      |
| **Database**  | MySQL                                     |
| **Analytics** | PostHog (for funnels, A/B tests, cohorts) |
| **Version Control** | Git, GitHub                         |
| **Deployment**| (Add deployment method:        AWS/etc.)  |

---

## 📊 Product Analytics with PostHog

We use PostHog to monitor and improve user experience with:

- Funnel Analysis (Booking Flow)
- Cohort Analysis (Returning Users)
- A/B Testing (e.g., improved login vs original)
- Event Tracking (button clicks, form submissions)

---

## 🚀 Getting Started

### Prerequisites

- Java 17+
- Node.js & npm (if applicable for frontend)
- MySQL 8+
- Git

### Setup Instructions

1. **Clone the repo**

   ```bash
   git clone https://github.com/PDD-team6/Moveit.git
   cd Moveit
````

2. **Backend Setup**

   * Open the project in your IDE (e.g., IntelliJ).
   * Configure `application.properties` with your DB credentials.
   * Run the Spring Boot application.

3. **Frontend Setup**

   * Navigate to the frontend folder (if separate).
   * Serve using Live Server or open directly in the browser.

4. **Database**

   * Import the schema from `/database/schema.sql` (if present).
   * Make sure MySQL service is running.

---

## 📂 Folder Structure

```
Moveit/
│
├── backend/                  # Spring Boot backend
├── frontend/                 # Static or dynamic frontend
├── database/                 # SQL schema & seed files
├── analytics/                # PostHog event scripts
├── README.md                 # Project documentation
└── ...
```

---

## 🙋‍♀️ Contribution Guidelines

1. Fork the repo
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Create a Pull Request

---

## 📬 Contact

For queries or collaboration:

* Project Maintainers: `@PDD-team6`


---


