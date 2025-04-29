// /TGN-Roster-dev/config.js
window.APP_BASE = (function() {
  const path = window.location.pathname;
  
  // Check if we're in a GitHub Pages environment
  if (path.includes('/github.io/')) {
    // Extract repo name from path (e.g., "/TGN-Roster-dev/" or "/Poe-Roster/")
    const match = path.match(/^\/([^\/]+)\//);
    return match ? `/${match[1]}/` : '/';
  }
  
  // For local development
  return '/';
})();