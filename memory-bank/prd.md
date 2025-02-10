**Product Requirements Document (PRD)**

**Project Name:** Wi-Fi Hotspot Management System for Cyber Game iCafes (WIFI VIP)

**Date:** 10/02/2025

**Version:** 1.0

**Author:** Nathan Pham

---

### 1. **Executive Summary**

**1.1 Purpose**

This document details the requirements for developing a Wi-Fi hotspot management system that enables Cyber Game iCafes to offer high-speed, time-based Wi-Fi packages to their customers. The system will facilitate customer payments through electronic wallets or at the cashier, aiming to optimize revenue and enhance user experience.

**1.2 Scope**

The system will manage Wi-Fi access within the iCafe environment, including user authentication, session management, payment processing, and security measures to prevent unauthorized sharing of connections.

**1.3 Objectives**

- Implement a user-friendly interface for customers to purchase Wi-Fi packages.
- Integrate payment gateways for electronic wallet transactions.
- Ensure secure and reliable Wi-Fi connectivity.
- Prevent unauthorized sharing of Wi-Fi connections between devices.

---

### 2. **Background and Rationale**

With the increasing demand for high-speed internet in gaming environments, Cyber Game iCafes seek to monetize Wi-Fi access by offering time-based packages. A robust management system is required to handle user authentication, payment processing, and security to prevent misuse, thereby optimizing revenue and enhancing customer satisfaction.

---

### 3. **User Personas**

**3.1 Gamers**

- **Description:** Individuals who visit the iCafe primarily for gaming purposes.
- **Needs:** Stable and high-speed internet connectivity for online gaming.
- **Payment Preference:** Quick transactions, preferably through electronic wallets.

**3.2 Casual Users**

- **Description:** Customers who use the iCafe for browsing, studying, or casual activities.
- **Needs:** Reliable internet access for general use.
- **Payment Preference:** Flexible options, including cash payments at the cashier.

---

### 4. **Functional Requirements**

**4.1 User Authentication and Access Control**

- Implement a system to authenticate users before granting Wi-Fi access.
- Assign unique credentials or vouchers to each user.
- Restrict each voucher to a single device to prevent sharing.

**4.2 Payment Processing**

- Integrate with popular electronic wallets (e.g., MoMo, ZaloPay) for seamless transactions.
- Provide an option for users to pay at the cashier and receive a voucher code.

**4.3 Session Management**

- Allow users to select from various time-based packages (e.g., 1 hour, 2 hours).
- Automatically disconnect users upon expiration of their session.
- Notify users before their session expires with an option to extend.

**4.4 Security Measures**

- Implement firewall rules to prevent devices from sharing their connection via hotspots or tethering.
- Monitor for multiple MAC addresses using the same voucher and terminate sessions if detected.

**4.5 Reporting and Analytics**

- Generate reports on user sessions, revenue, and system performance.
- Provide insights into peak usage times and popular packages.

---

### 5. **Non-Functional Requirements**

**5.1 Performance**

- Ensure the system can handle up to [insert number] concurrent users without degradation.
- Maintain low latency to support online gaming requirements.

**5.2 Reliability**

- Achieve 99.9% uptime to ensure continuous availability.
- Implement failover mechanisms to handle hardware or software failures.

**5.3 Usability**

- Design an intuitive user interface for both customers and staff.
- Provide multi-language support to cater to a diverse user base.

**5.4 Security**

- Encrypt all user data and payment transactions.
- Comply with relevant data protection regulations.

---

### 6. **System Architecture**

[Include diagrams and descriptions of the system's architecture, highlighting components such as user devices, Wi-Fi access points, authentication servers, payment gateways, and administrative interfaces.]

---

### 7. **User Interface Design**

[Provide wireframes or mockups of key interfaces, including the user login portal, payment screens, and administrative dashboards.]

---

### 8. **Assumptions and Dependencies**

- Assume availability of reliable internet connectivity.
- Dependence on third-party payment gateways for electronic transactions.
- Assume users have devices compatible with standard Wi-Fi protocols.

---

### 9. **Acceptance Criteria**

- Users can successfully purchase and use Wi-Fi packages through both electronic wallets and cashier payments.
- The system prevents multiple devices from using the same voucher simultaneously.
- Administrators can access detailed reports on system usage and revenue.

---

### 10. **Appendices**

[Include any additional information, such as glossary of terms, references, or supporting documents.]

Integrating modern technologies into your Wi-Fi Hotspot Management System will enhance performance, maintainability, and user experience. Below is an updated section for your Product Requirements Document (PRD) detailing the technical stack:

---

### 11. **Technology Stack**

**11.1 Front-End**

- **Framework:** Next.js 15 with App Router
  - *Description:* Utilize Next.js 15's App Router for optimized routing and improved performance.
  - *Reference:* [Next.js 15 Starter Template with TailwindCSS and Shadcn/ui Support](https://next.jqueryscript.net/next-js/next-js-starter-template-core/)

- **UI Components:** Shadcn/UI
  - *Description:* Employ Shadcn/UI for a cohesive and customizable component library, enhancing UI consistency.
  - *Reference:* [Next.js - shadcn/ui Installation Guide](https://ui.shadcn.com/docs/installation/next)

- **Styling:** Tailwind CSS
  - *Description:* Implement Tailwind CSS for utility-first, responsive design, facilitating rapid UI development.
  - *Reference:* [How to use Shadcn UI with NextJS and Tailwind CSS](https://mydevpa.ge/blog/how-to-use-shadcn-ui-with-nextjs-and-tailwind-css)

- **Language:** TypeScript
  - *Description:* Adopt TypeScript for static typing, improving code quality and maintainability.

**11.2 Back-End**

- **Database ORM:** Prisma
  - *Description:* Use Prisma as the Object-Relational Mapping tool to interact with the PostgreSQL database efficiently.
  - *Reference:* [Setting up Next.js project with Prisma, Supabase, and Shadcn](https://dev.to/isaacdyor/setting-up-nextjs-project-with-prisma-200j)

- **Database:** PostgreSQL
  - *Description:* Choose PostgreSQL for its robustness and scalability in handling relational data.

**11.3 Authentication and Authorization**

- **Auth Framework:** LuciaAuth
  - *Description:* Implement LuciaAuth for secure and flexible authentication mechanisms.
  - *Reference:* [ChadNext - Quick Starter Template for your Next project](https://github.com/moinulmoin/chadnext)

**11.4 Payment Processing**

- **Payment Gateway:** Stripe
  - *Description:* Integrate Stripe for handling electronic wallet transactions seamlessly.
  - *Reference:* [Create a SaaS using Next.js, Kinde-Auth, Supabase, Prisma, Stripe, and Tailwind CSS](https://janmarshal.com/courses/create-a-saa-s-using-next-js-15-kinde-auth-supabase-prisma-stripe-and-tailwind-css)

**11.5 Deployment and DevOps**

- **Containerization:** Docker
  - *Description:* Utilize Docker for consistent development and production environments.
  - *Reference:* [Next.js 15 Starter Template with TailwindCSS and Shadcn/ui Support](https://next.jqueryscript.net/next-js/next-js-starter-template-core/)

- **Hosting Platform:** Vercel
  - *Description:* Deploy the application on Vercel for optimized performance and scalability.
  - *Reference:* [Create a SaaS using Next.js, Kinde-Auth, Supabase, Prisma, Stripe, and Tailwind CSS](https://janmarshal.com/courses/create-a-saa-s-using-next-js-15-kinde-auth-supabase-prisma-stripe-and-tailwind-css)