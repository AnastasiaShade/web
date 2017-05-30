module.exports =
{
     main:
     {
          files:
          [
              {
                  expand: true,
                  cwd: 'node_modules/react/dist/',
                  src: 'react.min.js',
                  dest: '.build/js/'
              },

              {
                  expand: true,
                  cwd: 'node_modules/react-dom/dist/',
                  src: 'react-dom.min.js',
                  dest: '.build/js/'
              },
              {
                  expand: true,
                  cwd: 'node_modules/systemjs/dist/',
                  src: 'system.js',
                  dest: '.build/js/'
              },
              {
                  expand: true,
                  cwd: 'node_modules/bootstrap/dist/css',
                  src: 'bootstrap.min.css',
                  dest: '.build/css/'
              }
          ]
    },
    html:
    {
        files:
        [
             {
                  expand: true,
                  cwd: '',
                  src: 'index.html',
                  dest: '.build/'
             }
        ]
    }
};