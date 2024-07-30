module.exports = {
    apps: [
        {
            name: 'WoundCareCONNECTS', // Application name
            script: 'index.js', // Entry point of your application
            instances: 1, // Number of instances to create
            autorestart: true, // Restart the app if it crashes
            watch: false, // Watch for file changes and restart
            max_memory_restart: '1G', // Restart the app if memory usage exceeds this amount
            env: {
                NODE_ENV: 'production',
                PORT: 3003 // Specify the port your app runs on
                // Add other environment variables here
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: 3003 // Specify the port your app runs on in production
                // Add other environment variables for production here
            }
        }
    ]
};
