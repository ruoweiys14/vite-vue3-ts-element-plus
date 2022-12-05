module.exports = {
    '**/*.less': 'yarn lint:style',
    '**/*.{js,jsx,ts,tsx}': 'yarn lint:js',
    '**/*.{js,jsx,tsx,ts,less,css,json}': ['yarn lint:prettier'],
    'package.json': ['yarn lint:package']
};
