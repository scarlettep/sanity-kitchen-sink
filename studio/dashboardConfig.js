export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f917e33441f3e00c5dc41d2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vrm6qeum',
                  apiId: 'd54529ed-810f-4a79-b0f4-042d3b1d61d7'
                },
                {
                  buildHookId: '5f917e330f79930129c44593',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-h94c1p1p',
                  apiId: 'c40f0599-3403-4b81-86ca-31f5ede8db1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/scarlettep/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-h94c1p1p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
