# Empowering the Nation
## Mobile Application Project Documentation

**Building Skills, Building Futures**

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Purpose](#project-purpose)
3. [Vision and Mission](#vision-and-mission)
4. [Target Users](#target-users)
5. [Core Features](#core-features)
6. [Mobile Application Features](#mobile-application-features)
7. [Technical Implementation](#technical-implementation)
8. [Mobile Application Wireframes](#mobile-application-wireframes)
9. [References](#references)

---

## Project Overview

Empowering the Nation is a skills training initiative founded in 2022 by Precious Radebe in Johannesburg. The organization provides practical training courses for domestic workers and gardeners, empowering them with marketable skills to enhance employment opportunities and enable entrepreneurship. 

Precious Radebe established this initiative as a personal mission to support her community. Her parents and other elderly relatives were never given the chance to upskill themselves or follow a formal educational qualification. This training school is her way of supporting similarly affected members from her community. The training she provides upskills domestic workers and gardeners by making them more marketable when seeking employment and enables them to be paid at a higher rate because of these additional skills. They can also be entrepreneurs and set up their own small business utilizing these newly obtained skills. Many employers would like to have their employees upskilled to offer more skilled services to the household.

The business offers both six-month learnerships (taking place over 12 weeks) and six-week short skills training programmes (The IIE, 2025).

---

## Project Purpose

The purpose of this project is to develop both a mobile application and web page to advertise Empowering the Nation's training services, receive requests for information from potential customers, and provide quotes to potential customers for services requested. 

Customers (employers or employees) can select from a range of courses available. They can select more than one course. The more courses the customers select, the more discount they receive, incentivizing comprehensive skills development (The IIE, 2025).

---

## Vision and Mission

### Vision Statement

To create a future where every domestic worker and gardener in South Africa has access to quality skills training, enabling them to achieve economic independence, dignity in their work, and the opportunity to break the cycle of limited educational access for themselves and future generations (The IIE, 2025).

### Mission Statement

Empowering the Nation is committed to providing accessible, practical, and affordable skills training to domestic workers and gardeners who have been historically excluded from formal education opportunities. Through comprehensive six-month programmes and focused six-week courses, we equip our learners with:

- Marketable skills that enhance their employability and earning potential
- Pathways to entrepreneurship and self-employment
- Confidence and self-sufficiency
- Opportunities for community upliftment

(The IIE, 2025)

---

## Target Users

**Primary Users:** Domestic workers and gardeners seeking to enhance and develop their skills, exposing themselves to more employable opportunities.

**Secondary Users:** Employers seeking to upskill their domestic workers and gardeners.

(The IIE, 2025)

---

## Core Features

### Course Information

Users can peruse detailed information about available training programmes.

### Six-Month Courses

**Duration:** 12 weeks

- **First Aid** (R1,500) - First aid awareness and basic life support
- **Sewing** (R1,500) - Alterations and garment tailoring services
- **Landscaping** (R1,500) - Professional landscaping services
- **Life Skills** (R1,500) - Essential skills for navigating daily life

### Six-Week Short Courses

**Duration:** 6 weeks

- **Child Minding** (R750) - Care for children from birth to toddler age
- **Cooking** (R750) - Preparation of nutritious family meals
- **Garden Maintenance** (R750) - Basic watering, pruning, and planting

### Quote Calculator

Select multiple courses and receive instant pricing with automatic discount application:

- 1 course: Standard pricing
- 2 courses: 5% discount
- 3 courses: 10% discount
- 4+ courses: 15% discount

(The IIE, 2025)

---

## Mobile Application Features

### Core Functionality

The mobile application enables users to:

- **Display Course Catalogue and Information:** View detailed information about all available courses, including six-month programs and six-week courses
- **Generate Price Quotes:** Select multiple courses and receive automated pricing with applicable discounts
- **Process User Input:** Receive, validate, handle, and respond to data entered by users through the interface

### User Interface Features

- Welcome message and home screen with app overview
- Quick access buttons to main sections
- Company logo and branding
- Multi-select course picker
- Discount percentage indicator (5%, 10%, 15%)
- Summary breakdown showing subtotal, discount, and total
- Visual feedback with clear checkbox selection
- Real-time price calculation
- Intuitive navigation system with back buttons and navigation bar
- Professional design reflecting business values
- Mobile-responsive layout
- Clear call-to-action buttons
- Accessible design for diverse user demographics

The interface is designed to be **intuitive and transparent**, showing exactly what the user is paying for and why.

### Key Requirements

- **Platform Consistency:** Both mobile app and web page must provide the same functionality, allowing users to comfortably navigate either platform
- **Navigation System:** Various icons/menu items for intuitive navigation throughout the application
- **Required Pages/Screens:**
  - Home page with logo and brief explanation
  - Summary of six-month courses (with hyperlinks to individual course pages)
  - Summary of six-week courses (with hyperlinks to individual course pages)
  - Individual detail pages for each course
  - Calculate Total Fees functionality
  - Contact Details page
- **Back Navigation:** Each page/screen must be able to return to the previous screen
- **Professional Design:** Reflecting the business's purpose and values with appropriate images, fonts, and colors
- **User-Friendly Interface:** Suitable for diverse user demographics
- **Clear Course Presentation:** Detailed content, fees, and purposes for each course
- **Automated Calculations:** 
  - Real-time discount calculation system
  - VAT calculation (15%)
  - Invoice generation with discounts applied
- **Contact Form:** Customer contact details submission (name, phone number, email address)
- **Quote Calculator:** 
  - Checkbox list of available courses with fees
  - Course selection storage in array
  - Calculator button to display total fees
  - Display of discount applied and VAT
  - Quoted fee output (not a formal invoice)
- **Contact Information:** Phone number, email address, and physical addresses of three Johannesburg venues with maps for directions
- **Data Validation:** Drop-down menus and error handling to verify data types entered in different fields/screens
- **Accessibility:** Design suitable for diverse user demographics

(The IIE, 2025)

---

## Technical Implementation

### Design Considerations

**Note on Visual Differences Between Wireframes and Final Application:**

The wireframes presented in this document were created using Miro, which served as an excellent tool for initial design conceptualization and layout planning. However, due to technical limitations within Miro—specifically the absence of linear gradient functionality—the wireframes display solid color backgrounds rather than the intended gradient design.

During the development phase, our frontend and backend development teams collaborated to implement the original design vision, which included a gradient-style background for enhanced visual appeal and modern aesthetics. Using TypeScript with React Native, we successfully implemented linear gradient backgrounds in the final application, achieving the sophisticated visual design that was initially envisioned but could not be accurately represented in the Miro wireframes.

This technical enhancement elevates the user experience by providing a more polished, contemporary interface while maintaining all the functional elements and user flow patterns illustrated in the wireframes.

### Technology Stack

- **Framework:** React Native (for mobile application)
- **Language:** TypeScript
- **Key Technical Features:** 
  - Linear gradient backgrounds
  - Responsive design
  - Real-time calculations
  - Array-based data storage for course selections
  - Form validation and error handling
  - Drop-down menus for data integrity

---

## Mobile Application Wireframes

### Welcome Screen

**Purpose:** Serves as an entry point, welcoming users and offering options to begin their journey with the application.

**Layout:**
- Top section features the company logo, title "Welcome to Empowering the Nation," and tagline "Building Skills, Building Futures"
- Three interactive buttons: "Sign up," "Log in," and "Continue as a guest"

**Interaction:**
- **Sign up:** New users can create an account through a registration form requiring name, email, and password
- **Log in:** Existing users can access their accounts by entering email and password credentials
- **Continue as a guest:** Users can explore the application with limited access without creating an account

---

### Log In Screen

**Purpose:** Allows existing users to access their accounts.

**Layout:**
- Displays "Welcome back, log in" prompt
- Contains fields for "Email Address" and "Password"
- "Remember me" checkbox option
- "Log in" button
- Social login options (Google, Facebook, Twitter)
- "Don't have an account? Sign up here" link at bottom

**Interaction:**
- Users enter credentials in respective fields
- "Remember me" checkbox saves login credentials for future sessions
- Clicking "Log in" submits details for authentication
- Alternative social media login options available
- "Sign up here" link directs new users to registration

---

### Sign Up Screen

**Purpose:** Enables new users to create an account.

**Layout:**
- "Sign up" heading with "Create a new account" prompt
- Fields for: Full name, Email Address, Username, Password, Repeat password
- "Sign up" button
- Social signup options (Google, Facebook, Twitter)
- "Already have an account? Log in here" link at bottom

**Interaction:**
- Users complete all required fields with personal details
- "Repeat password" field confirms password entry
- Clicking "Sign up" submits information to create new account
- Social media signup options available via respective icons

---

### Home Screen

**Purpose:** Serves as the homepage, offering an overview of the platform's mission and providing access to various features and courses.

**Layout:**
- Top section with company logo, title, and tagline
- Mission description highlighting high-quality skills development programs
- Four main action buttons: "Six Month Courses," "Six Week Courses," "Calculate fees," "Contact Us"
- Bottom navigation bar with "Home," "Account," and "Contact" icons

**Interaction:**
- **Six Month Courses:** Navigates to detailed catalogue of six-month programs
- **Six Week Courses:** Opens list of six-week programs
- **Calculate fees:** Navigates to Course Fee Calculation screen for fee breakdown
- **Contact Us:** Provides access to business contact information
- **Navigation Bar:** Quick access to Home, Account management, and Contact sections (available on all screens)

**User Experience:** Designed for easy navigation with clear buttons and concise descriptions. Users can explore courses, manage fees, or seek assistance based on their needs.

---

### Six-Month Courses Screen

**Purpose:** Provides detailed view of six-month courses with descriptions, costs, and exploration options.

**Layout:**
- Header with back arrow and screen title
- Four course listings: First Aid, Sewing, Landscaping, and Life Skills
- Each course entry includes brief description, R1,500 fee, and "View course" button
- Bottom navigation bar

**Interaction:**
- **Back Arrow:** Returns to previous screen
- **Course Entries:** Browse course descriptions
- **View course:** Opens detailed page for selected course

**User Experience:** User-friendly with clear course summaries and consistent layout. Standardized R1,500 fee structure for all six-month courses.

---

### Individual Six-Month Course Screens

Screens for: Sewing Course, First Aid Course, Life Skills Course, Landscaping Course

**Purpose:** Offer in-depth overview of respective courses, outlining content, certification, and cost.

**Layout:**
- Header with back arrow and course title
- Course-related image providing visual context
- Content section listing topics covered during program
- Details on accredited certification upon completion
- Cost display (R1,500)
- "Next" button for progression

**Interaction:**
- **Back Arrow:** Returns to previous screen
- **Content Review:** Read through listed topics and course details
- **Next Button:** Proceeds to next screen

**User Experience:** Designed for clarity with visual aids and detailed content lists. R1,500 fee and accreditation information highlight course value and credibility.

---

### Six-Week Courses Screen

**Purpose:** Provides detailed view of six-week courses with descriptions, costs, and exploration options.

**Layout:**
- Header with back arrow and screen title
- Three course listings: Cooking, Child Minding, and Garden Maintenance
- Each course entry includes brief description, R750 fee, and "View course" button
- Bottom navigation bar

**Interaction:**
- **Back Arrow:** Returns to previous screen
- **Course Entries:** Browse course descriptions
- **View course:** Opens detailed page for selected course

**User Experience:** User-friendly with clear course summaries and consistent layout. Standardized R750 fee structure for all six-week courses.

---

### Individual Six-Week Course Screens

Screens for: Cooking Course, Child Minding Course, Garden Maintenance Course

**Purpose:** Offer in-depth overview of respective courses, outlining content, certification, and cost.

**Layout:**
- Header with back arrow and course title
- Course-related image providing visual context
- Content section listing topics covered during program
- Details on accredited certification upon completion
- Cost display (R750)
- "Next" button for progression

**Interaction:**
- **Back Arrow:** Returns to previous screen
- **Content Review:** Read through listed topics and course details
- **Next Button:** Proceeds to next screen

**User Experience:** Consistent design across all three screens with visual aids, detailed content lists, and certification information. Standardized R750 pricing makes course comparison straightforward. Navigation bar ensures quick access to other platform sections.

---

### Course Fee Calculation Screen

**Purpose:** Collect user details and calculate course fees with automatic discount application and VAT calculation.

**Layout:**
- Back arrow (top left) returns to previous screen
- Course title at top
- User information fields: Full name, Phone number, Email (with validation)
- List of available courses with individual fees displayed
- **Discount Allocation Panel** (informational): Displays discount structure based on number of courses selected
  - One course: No discount
  - Two courses: 5% discount
  - Three courses: 10% discount
  - More than three courses: 15% discount
- **Select Courses Section** (interactive): Checkboxes for course selection
- **Total Fees Breakdown:** Real-time display of:
  - Subtotal (sum of selected courses)
  - Discount applied (percentage and amount)
  - VAT (15% on total after discount)
  - **Total Amount Due**
- "Ready to Enrol" button

**Interaction:**
- Users enter personal details in respective fields with data validation
- Select desired courses via checkboxes (selections stored in array)
- Click "Calculator" button to trigger fee calculation
- Application automatically calculates and applies appropriate discounts based on number of courses selected
- VAT (15%) is calculated on the total amount after discount
- Total fees update and display complete breakdown
- Output serves as a quoted fee for customer (not a formal invoice)
- "Ready to Enrol" button submits enrolment request for consultant follow-up

**User Experience:** Transparent pricing with clear breakdown of costs, discounts, VAT, and total. The calculator provides customers with an accurate quote that includes all applicable discounts, allowing them to verify courses they would like to register for before a consultant contacts them to make a booking.

---

### Contact Us Screen

**Purpose:** Allows users to find and contact the organization's office locations.

**Layout:**
- Three Johannesburg office locations displayed (West, East, and North)
- Each location includes:
  - Full physical address
  - Phone number
  - Email address
  - "Map Location" link for directions
- Privacy settings option

**Interaction:**
- Click "Map Location" link to view interactive map for respective office location
- Contact information readily available for phone or email communication
- Access and adjust application privacy settings
- Use drop-down menus where applicable for data entry

**User Experience:** Clear presentation of contact options across three Johannesburg venues (users can select their own neighborhoods), making it easy for users to connect with their nearest office. Maps provide clear directions to each venue location.

---

## References

### General References

- Miro, 2025. *App wireframes*. [Online] Available at: <https://miro.com/app/board/uXjVJEso5js=/> [Accessed: 21 September 2025]

- The Independent Institute of Education, 2025. *Work Integrated Learning 1 Module Manual [XHAW5112_MM]*. [Online via internal VLE] The Independent Institute of Education. Available at: <https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7B022BFEDB-81D5-47FC-98E0-571385158886%7D&file=XHAW5112_MM.docx&action=default&mobileredirect=true&DefaultItemOpen=1> [Accessed: 12 September 2025]

---
