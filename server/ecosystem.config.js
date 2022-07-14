module.exports = {
  apps: [
    {
      name: "app1",
      script: "npm start",
      watch: true,
      ignore_watch: ["src", "dist", "node_modules", "csv_folder"],
    },
  ],
};
