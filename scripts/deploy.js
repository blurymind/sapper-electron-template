const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'https://github.com/blurymind/sapper-electron-template.git',
        user: {
            name: 'blurymind',
            email: 'blurymind@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)