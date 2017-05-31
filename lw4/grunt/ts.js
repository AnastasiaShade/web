module.exports =
{
    ts:
    {
        configFile: 'tsconfig.json',
        src: 'src/ts/*.ts',
        out: '.build/js/script.js',
        options: {
            module: 'system',
            target: 'es5',
            noImplicitAny: true,
            noEmitOnError: true,
            sourceMap: false
        }
    }
};