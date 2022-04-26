export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6267df2f8e5bc721665eebf8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4hssdyu5',
                  apiId: '60583337-51a5-4e17-b507-9f71f3918a0f'
                },
                {
                  buildHookId: '6267df30ef8af7256052523f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wx4r54ij',
                  apiId: '87f39609-4de1-4987-97b1-ed585bf2374d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matt0rtega/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-wx4r54ij.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
