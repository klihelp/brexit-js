var eu = [
  'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic',
  'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary',
  'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta',
  'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia',
  'Spain', 'Sweden', 'United Kingdom'
];

var leave = 51.9;
var remain = 48.1;

if (leave > remain) {
  delete eu[27];
  console.log('Goodbye, UK!');
} else {
  console.log('European Union: ' + eu.join(', '));
};
