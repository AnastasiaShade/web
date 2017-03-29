module.exports = 
{
    options:
    {
        livereload: true
    },
    scripts: 
    {
        files: ['index.html', 'js/*.js', 'css/*.css'],
        tasks: ['concat', 'eslint', 'uglify', 'cssmin', 'hashres', 'copy']
    }
}