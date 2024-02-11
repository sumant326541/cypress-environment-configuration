const { defineConfig } = require('cypress')

module.exports = defineConfig({
    video: true,
    e2e: {
        baseUrl: "https://demo.nopcommerce.com",
    }, env: {
        username: "produser"
    },
})