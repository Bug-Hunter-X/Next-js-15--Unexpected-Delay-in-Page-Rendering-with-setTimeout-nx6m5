```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // Simulate a delay to reproduce the issue
  setTimeout(() => {
    console.log('About page rendered');
  }, 3000);

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```