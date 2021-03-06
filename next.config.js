const withImages = require('next-images')

module.exports = {
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
    },
    webpack(config, options) {
        config.module.rules.push({
            loader: '@svgr/webpack',
            options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                    plugins: [{ removeViewBox: false }],
                },
                titleProp: true,
            },
            test: /\.svg$/
        });
        
        return config;
    },
}