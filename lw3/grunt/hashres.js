module.exports = 
{
	options:
	{
		fileNameFormat: '${name}.[${hash}].${ext}'
	},
	build:
	{
		src: ['.build/js/main.min.js', '.build/css/style.min.css'],
		dest: 'index.html'
	}
}