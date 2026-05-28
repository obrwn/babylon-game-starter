// ✅ Updated with both services:
const deploymentSettings = {
  host: 'render.com',
  type: 'web-service',
  services: [
    {
      name: 'api',
      type: 'node',
      routePrefix: '/api',
      localPort: 8787  // Node API service (future use)
    },
    {
      name: 'multiplayer',
      type: 'go',
      routePrefix: '/api/multiplayer',
      localPort: 5000  // ✅ GO Multiplayer service
    }
  ],
  static: {
    basePath: '/',
    publicUrl: 'https://your-service.onrender.com'
  }
};