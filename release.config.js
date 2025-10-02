const config = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: {
          // Permite comillas opcionales en el mensaje del commit
          headerPattern: /^(\w+):"?(.+?)"?$/,
          headerCorrespondence: ['type', 'subject'],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        parserOpts: {
          headerPattern: /^(\w+):"?(.+?)"?$/,
          headerCorrespondence: ['type', 'subject'],
        },
        writerOpts: {
          // Personalización del formato en el CHANGELOG
          commitPartial: '* {{subject}} ({{hash}})',
          groupBy: 'type',
          commitGroupsSort: 'title',
          commitsSort: ['scope', 'subject'],
          noteGroupsSort: 'title',
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};

module.exports = config;
