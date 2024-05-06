export let TOPICS = [
  {
    name: 'Arbeit',
    type: 'folder',
    open: true,
    content: [
      {
        name: 'Versicherung',
        type: 'doc'
      }
    ]
  },
  {
    name: 'Spring Boot',
    type: 'folder',
    open: false,
    content: [
      {
        name: 'CDI',
        type: 'folder',
        open: false,
        content: [
          {
            name: 'Events',
            type: 'doc'
          }
        ]
      },
      {
        name: 'Allgemeines',
        type: 'doc'
      }
    ]
  }
]