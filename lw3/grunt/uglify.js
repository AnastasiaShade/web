module.exports = 
{
	build: 
	{
		files: 
		[
			{
				expand: true,
				cwd: 'tmp/',
				src: 'main.js',
				dest: '.build/js',
				ext: '.min.js'
			}
		]
    }
}