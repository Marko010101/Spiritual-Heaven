# The Spiritual Heaven - Booking Management System

The Spiritual Heaven is a comprehensive booking management system designed for agents, offering a plethora of features to streamline the booking process. Agents can utilize various tools including charts, statistics, cabin management, booking creation and editing, all within a professional and efficient application environment.

## Key Features

- **React Query:** Efficiently manage data fetching and caching.
- **Styled Components:** Styling components for a modern and customizable UI.
- **React Hook Form:** Simplify form management.
- **Supabase:** Backend API for structured data storage.
- **Advanced Compound Component Pattern:** Enhance reusability and maintainability.
- **Authentication:** Secure user registration and login.
- **Charts:** Visualize statistics for better insights.
- **Dark Mode:** Toggle between light and dark themes.
- **Lazy Loading:** Improve performance with lazy loading of pages.
- **Protected Routes:** Ensure access control with protected routes.
- **Context API:** Manage global state for features like dark mode.
- **Reusable Components:** Utilize compound components for modals, menus, filters, and pagination.
- **Responsive Design:** Ensure usability across various devices.

## Folder Structure

The project follows a feature-based folder structure with lazy-loaded pages for optimal performance.

## Registration and Authentication

Users are required to register and confirm their email, after which they are redirected to the dashboard. Access tokens are stored in local storage for authenticated access.

## Dashboard

Upon login, users are directed to the dashboard where they can view statistics and charts.

## Profile

In addition to logout and dark mode toggles, the profile section offers users access to their personal information. Users can view their email (which cannot be changed), update their full name, upload an avatar, and change their password.

## Bookings Management

Agents can manage bookings with features like filtering, sorting, and detailed view. Each booking includes options for check-in, check-out, and deletion.

## Cabins Management

Cabins can be created, edited, duplicated, and deleted. Images are uploaded to Supabase storage for each cabin.

## User Management

Users can register other users, facilitating collaboration within the platform.

## Settings

Users have the option to update settings such as breakfast prices, night duration limits, and cabin capacities.

## Backend APIs

Four structured APIs are provided via Supabase for managing bookings, cabins, guests, and settings.

## Access Control

The application is protected to ensure access is restricted to registered users only.
