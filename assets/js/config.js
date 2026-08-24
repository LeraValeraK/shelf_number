/* Shelf Number — configuration
   Every path is relative to index.html so the site works from a repository
   sub-path (https://user.github.io/shelf-number/) as well as from a domain root. */

export const DATA_FILES = {
  catalogue: 'data/SN_2_catalogue.tsv',
  libraries: 'data/SN_2_libraries.tsv',
  holdings:  'data/SN_2_holdings.tsv',
  world:     'data/world.geojson'
};

/* Library names to leave out — test rows in the source data. */
export const EXCLUDE_LIBRARIES = [
  'Manchester Metropolitan University - TEST INSTITUTION',
  'Testbibliothek HD',
  'Muncy Library Test Instance'
];

/* Fallback used when a library row has no type. */
export const DEFAULT_LIBRARY_TYPE = 'Other';

/* Shown on a title whose `place` column carries no identifiable city. */
export const UNKNOWN_PLACE = 'Unknown';
