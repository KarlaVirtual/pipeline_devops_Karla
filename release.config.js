const config = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: {
          // Regex para reconocer commits tipo: feat:"texto", fix:"texto"
          headerPattern: /^(\w+):"(.*)"$/,
          headerCorrespondence: ['type', 'subject']
        }
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        parserOpts: {
          headerPattern: /^(\w+):"(.*)"$/,
          headerCorrespondence: ['type', 'subject']
        },
        writerOpts: {
          transform: (commit, context) => {
            const issues = []

            // Busca si el commit menciona un PR (ej: Merge pull request #3939)
            if (commit.subject && commit.subject.match(/#\d+/)) {
              commit.prNumber = commit.subject.match(/#\d+/)[0]
            }

            // Mapea el tipo de commit a la categoría del changelog
            if (commit.type === 'feat') {
              commit.type = 'Features'
            } else if (commit.type === 'fix') {
              commit.type = 'Bug Fixes'
            } else if (commit.type === 'chore') {
              commit.type = 'Chores'
            } else {
              return // ignora tipos que no interesan
            }

            // Si hay número de PR, lo anexa al subject
            if (commit.prNumber) {
              commit.subject = `${commit.subject} (${commit.prNumber})`
            }

            return commit
          }
        }
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
    '@semantic-release/github'
  ]
}

module.exports = config
