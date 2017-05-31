module.exports =
{
    options:
    {
        fileNameFormat: '${name}.[${hash}].${ext}'
    },

    prod:
    {
        src: ['.build/js/index.js', '.build/js/script.min.js', '.build/css/style.min.css'],
        dest: 'index.html'
    }
};