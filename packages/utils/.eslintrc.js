module.exports = {
    extends: '../../.eslintrc.js',
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'prefer-object-spread': 'off', // prefer Object.assign
        'no-console': 'warn',
    },
};
