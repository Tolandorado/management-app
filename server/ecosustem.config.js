module.exports = {
    apps: [
        {
            name: "project-sup-app",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development",
            },
        },
    ],
};