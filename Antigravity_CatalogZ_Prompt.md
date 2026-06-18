# 🚀 Antigravity Agent Prompt: Catalog-Z Pixel-Perfect Clone

**Instructions for the User:** Copy the text below the horizontal line and paste it directly into your **Google Antigravity** IDE, CLI, or Agent prompt bar. Ensure your environment is set to use **React** (Vite or Next.js) and **Tailwind CSS**. 

---

## 🎯 Master Prompt for Antigravity

**Role & Objective:**
You are an expert Full-Stack AI Developer. Your objective is to build a pixel-perfect, fully responsive clone of the **TemplateMo 556 Catalog-Z** website. I want the complete website "same to same" (identical layout, features, and styling) implemented in **React** and **Tailwind CSS**.

### 1. 🏗️ Tech Stack & Architecture Setup
- **Framework:** React 18+ (Vite) or Next.js.
- **Styling:** Tailwind CSS (configured for a modern, clean gallery aesthetic).
- **Icons:** `react-icons` (using `Fa` or `Md` icon sets).
- **Routing:** React Router v6 or native Next.js routing.
- **Mock Data:** Create a local JSON/JS file containing mock data for photos and videos to populate the app fully.

### 2. 📂 Project Structure & Required Pages
The original Catalog-Z has 6 core pages. Please generate the routing and components for the following:
1. `/` (Index / Photos Catalog)
2. `/videos` (Videos Catalog)
3. `/photo/:id` (Photo Detail View)
4. `/video/:id` (Video Detail View)
5. `/about` (About Us Page)
6. `/contact` (Contact Page)

### 3. 🎨 Global Design System & Layout (Pixel-Perfect Specs)
- **Container Width:** The original template targets an **1800px max-width** for full HD displays. Wrap the main content in a container: `max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8`.
- **Typography:** Use a clean Sans-Serif font like `Inter` or `Roboto`.
- **Color Palette:** - Accent Color: Teal / Cyan (approx `text-teal-500` / `bg-teal-500` in Tailwind).
  - Background: Crisp White (`bg-white`).
  - Text: Dark gray (`text-gray-800`) for headings, medium gray (`text-gray-500`) for body.
- **Header/Navbar:**
  - Sticky top navigation with a white background and subtle bottom shadow.
  - **Left Side:** Logo featuring a small teal icon next to the text "Catalog-Z" (text should be teal).
  - **Right Side:** Navigation links (Photos, Videos, About, Contact). Active links must be teal; inactive links gray but turn teal on hover. Include a prominent Search Icon on the far right.
- **Footer:** - Dark or light minimal footer containing "Copyright © 2026 Catalog-Z Company", social media icons, and terms/privacy links.

### 4. 📄 Page-by-Page Functional Requirements

#### A. Home Page (Photos Catalog) & Videos Page
- **Hero / Banner Section:** - A beautiful full-width banner image (approx 400px height).
  - Overlay with a centered, large **Search Bar** (Input field + Search Icon/Button). 
  - Placeholder text: *"Search free photos"* or *"Search free videos"*.
- **Filter/Sorting Bar (Below Hero):** - Left side tabs: "Latest", "Trending", "Most Viewed". Active tab highlighted in teal.
  - Right side: Pagination text "Page 1 of 200".
- **Gallery Grid (The Core Feature):** - A masonry-style or strictly squared responsive grid (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`).
  - **Image Cards:** Every grid item is a high-quality thumbnail.
  - **Hover Effects (Crucial):** On hover, the image should scale up slightly (`hover:scale-105 duration-300`). Add a dark/gradient overlay on hover that reveals the Author's Name (bottom left), View Count, and a Download icon (bottom right).
- **Pagination:** - Stylish pagination component at the bottom of the grid. Buttons for "Previous", page numbers "1, 2, 3, 4", and "Next".

#### B. Photo Detail Page (`/photo/:id`)
- **Main Section Split Layout:**
  - **Left Column (70%):** Large, high-resolution image display.
  - **Right Column (30%):** Photo meta-details. Include Title, Author Name (with small avatar), Resolution (e.g., 1920x1080), Format (JPG), and Upload Date.
  - **Call to Action:** A large, full-width teal "Download" button.
- **Related Photos Section:**
  - A smaller 4-column grid of related images placed at the bottom.

#### C. Video Detail Page (`/video/:id`)
- **Main Section:**
  - Similar layout to the Photo Detail page, but the left column features a fully functional HTML5 Video Player (`<video controls className="w-full rounded-lg">`).
  - Add video specific details (Resolution: 4K, Format: MP4, Duration: 0:45).
- **Related Videos Section:**
  - Grid of video thumbnails below.

#### D. About Page
- **Hero/Header:** A banner with the title "About Catalog-Z".
- **Mission Section:** Split layout. Left side: A large professional office image. Right side: Paragraphs detailing the company's mission and history.
- **Team Section:** A 3-column or 4-column grid showing team members. Each card needs a square profile picture, Name (bold, teal), Job Title, and small social media icons (Twitter, LinkedIn, Facebook).

#### E. Contact Page
- **Header:** Banner with "Contact Us".
- **Content Area (Split 50/50):**
  - **Left Column:** A clean Contact Form. Fields for Name, Email, Subject, and a Textarea for Message. Submit button in teal.
  - **Right Column:** Contact information block (Address, Phone, Email) and an embedded Google Map iframe (use any valid embed link).

### 5. 🖼️ Asset Management & Mock Data Rules
Since you do not have the original static files, **you MUST generate dynamic mock data** and use placeholder URLs so the application looks complete immediately.
- **Images:** Use `https://picsum.photos` (e.g., `https://picsum.photos/seed/1/800/600` for grid, `/1920/1080` for banners/detail pages).
- **Videos:** Use a reliable open-source sample video link (e.g., `https://www.w3schools.com/html/mov_bbb.mp4`) and Picsum placeholders for video thumbnails.
- **Avatars:** Use `https://i.pravatar.cc/150?img=1` for author and team profile pictures.
- **Data Initialization:** Write a robust `mockData.js` exporting `photos` (array of 16 objects) and `videos` (array of 12 objects) with fields like `id`, `url`, `author`, `views`, `downloads`, etc.

### 6. 🚀 Execution Plan
1. Scaffold the project structure.
2. Setup Tailwind CSS config with the specific teal accent (`#00B4CC` or similar).
3. Generate the `Layout`, `Navbar`, and `Footer` components.
4. Implement the mock data file.
5. Generate the `ImageCard` and `VideoCard` reusable components with all hover animations.
6. Build out the 6 pages routing to one another correctly.

**Please proceed to generate all the necessary code files, CSS, and configurations to bring this clone to life.**
