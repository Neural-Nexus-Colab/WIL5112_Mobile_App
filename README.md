# Empowering the Nation - Mobile App

A React Native mobile application for skills development and course enrollment. This app helps users browse courses, calculate fees with discounts, and connect with training locations.

## 📱 Features

### User Authentication
- **Welcome Screen** - Beautiful gradient landing page
- **Sign Up** - User registration with validation
- **Login** - Secure authentication with password visibility toggle
- **Guest Access** - Continue without account creation

### Course Management
- **Six Week Courses** - Browse short-term courses (R750 each)
  - Cooking Course
  - Child Minding Course
  - Garden Maintenance Course
- **Six Month Courses** - Long-term professional training (R1500 each)
  - First-Aid
  - Sewing
  - Landscaping
  - Life Skills

### Course Details
- View detailed course curriculum
- See certification information
- Check course pricing
- Image gallery for each course

### Fee Calculator
- Interactive course selection
- Real-time price calculation
- Automatic discount application:
  - 2 Courses: 5% discount
  - 3 Courses: 10% discount
  - 4+ Courses: 15% discount
- VAT calculation (15%)
- Total fees breakdown

### Contact Information
- Three location offices:
  - Johannesburg West
  - Johannesburg East
  - Johannesburg North
  - Email integration
- Privacy settings toggle

### Home Screen
- Quick navigation to all sections
- Beautiful logo display
- App description
- Modern gradient design

## 🛠️ Technologies used

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation (Native Stack)
- **UI Components**: 
  - React Native Core Components
  - Linear Gradient (expo-linear-gradient)
  - Vector Icons (@expo/vector-icons)
- **State Management**: React Hooks (useState, useEffect)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Studio (for emulator)
- Expo Go app (for physical device testing)

## 🎨 Design Features

### Visual Design
- **Linear Gradients** - Smooth teal-to-blue color transitions
- **Glass Morphism** - Semi-transparent cards with backdrop blur
- **Modern Shadows** - Elevation and depth throughout the UI
- **Rounded Corners** - Consistent 12-24px border radius
- **Vector Icons** - Professional icons from MaterialCommunityIcons and Ionicons

### User Experience
- **Keyboard Handling** - KeyboardAvoidingView for input screens
- **Touch Feedback** - ActiveOpacity on all interactive elements
- **Scrollable Content** - ScrollView for content that exceeds screen height
- **Safe Area** - Respects device notches and home indicators
- **Loading States** - Visual feedback during async operations

## 📱 Screen Navigation Flow

```
Welcome Screen
├── Sign Up → sign up screen → home
├── Login → login screen → Home
└── Continue as Guest → Home

Home Screen
├── Six Month Courses
│   ├── Landscaping Course Details
│   ├── First Aid Course Details
│   ├── Sewing Course Details
│   └── Life Skills Maintenance Course Details
├── Six Week Courses
│   ├── Cooking Course Details
│   ├── Child Minding Course Details
│   └── Garden Maintenance Course Details
├── Calculate Fees
└── Contact Us

Bottom Navigation (Global)
├── Home
├── Fees
└── Contact
```

## 🔐 Validation Rules

### Sign Up Form
- **Full Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Username**: Required, minimum 3 characters
- **Password**: Required, minimum 8 characters
- **Repeat Password**: Must match password

### Fee Calculator
- Minimum 1 course selection
- Maximum discount: 15% for 4+ courses
- VAT automatically calculated at 15%

## 🚧 Known Issues & Limitations

1. **Social Login**: Google, Facebook, and Twitter login buttons are placeholders
2. **API Integration**: No backend connection yet (simulated with setTimeout)
3. **Data Persistence**: No local storage (no user data saved)
4. **Map Integration**: Map location buttons are not functional
5. **Payment**: No payment gateway integration

## 🔮 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication with JWT
- [ ] Social media OAuth login
- [ ] Payment gateway (Stripe/PayPal)
- [ ] Push notifications
- [ ] Course progress tracking
- [ ] User profile management
- [ ] Offline mode support
- [ ] Google Maps integration
- [ ] In-app course videos
- [ ] Certificate downloads
- [ ] Multi-language support

## 📱 App Screenshots

*(Add screenshots of your app here)*

### Welcome Screen


### Home Screen


### Course Calculator


---

