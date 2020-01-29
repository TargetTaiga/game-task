import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy';
import clear from 'rollup-plugin-clear'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    watch: {
        include: 'src/**/*'
    },
    plugins: [
        serve({
            open: true,
            contentBase: ['dist']
        }),
        copy({ targets: [{ src: 'src/public/**/*', dest: 'dist' }] }),
        clear({ targets: ['dist'], watch: true })
    ]
}