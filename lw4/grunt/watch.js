module.exports =
{
    script: 
    {
        files: ['src/**/*.ts', 'src/**/*.jsx'],
        tasks: ['shell', 'tslint', 'ts', 'systemjs', 'react', 'uglify', 'hashres:prod']
    },
    css:
    {
        files: ['src/**/*.css'],
        tasks: ['shell', 'cssmin', 'hashres:prod']
    },
    html:
    {
        options:
        {
            livereload: true
        },
        files: 'index.html',
        tasks: 'copy:html'
    }
};