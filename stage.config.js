const { defineConfig } = require('cypress')
module.exports = defineConfig({
    video: true,
    e2e: {
        baseUrl: "https://demoqa.com/",
    }, env: {
        username: "stageuser"
    }
})
