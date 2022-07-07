const { path } = require('@vuepress/utils');

const name = '@mint-system/plugin-plausible'

const plausiblePlugin = ({ domain }) => {
    console.log(domain)
    return {
        name,
        clientConfigFile: path.resolve(__dirname, 'client.js'),
        define: {
            __PLAUSIBLE_OPTIONS__: { domain },
        },
    }
}

module.exports = { plausiblePlugin }