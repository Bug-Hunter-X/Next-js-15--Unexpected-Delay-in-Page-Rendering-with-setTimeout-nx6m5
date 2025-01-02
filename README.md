# Next.js 15 App Rendering Issue

This repository demonstrates an issue encountered in a Next.js 15 application where a page renders with unexpected delay, seemingly related to the use of `setTimeout` within the component.

## Bug Description

The application consists of two pages: Home and About.
Navigating from Home to About results in a noticeable delay before the About page content is rendered in the browser. This delay is not present in other Next.js versions and only occurs after using setTimeout within the About component.

## Reproduction

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate from the Home page to the About page.

Observe that the About page takes an unusually long time to display.

## Solution

The solution involves avoiding unnecessary asynchronous operations within page components during initial rendering.  For this case, removing or altering the `setTimeout` function ensures correct rendering. 