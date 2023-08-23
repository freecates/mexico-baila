module.exports = {
    env: {
        YOUTUBE_APY_KEY: process.env.YOUTUBE_APY_KEY,
    },
    webpack5: false,
    target: 'serverless',
    webpack: (config) => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty',
        };

        return config;
    },
};
