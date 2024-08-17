/**
 * @link https://github.com/dmfilipenko/timezones.json/blob/master/timezones.json
 */
export const TIMEZONES = {
  '(UTC-12:00) International Date Line West': {
    value: 'Dateline Standard Time',
    abbr: 'DST',
    offset: -12,
    isdst: false,
    handle: '(UTC-12:00) International Date Line West', // originally called "text"
    utc: ['Etc/GMT+12'],
  },
  '(UTC-11:00) Coordinated Universal Time-11': {
    value: 'UTC-11',
    abbr: 'U',
    offset: -11,
    isdst: false,
    handle: '(UTC-11:00) Coordinated Universal Time-11', // originally called "text"
    utc: ['Etc/GMT+11', 'Pacific/Midway', 'Pacific/Niue', 'Pacific/Pago_Pago'],
  },
  '(UTC-10:00) Hawaii': {
    value: 'Hawaiian Standard Time',
    abbr: 'HST',
    offset: -10,
    isdst: false,
    handle: '(UTC-10:00) Hawaii', // originally called "text"
    utc: [
      'Etc/GMT+10',
      'Pacific/Honolulu',
      'Pacific/Johnston',
      'Pacific/Rarotonga',
      'Pacific/Tahiti',
    ],
  },
  '(UTC-09:00) Alaska': {
    value: 'Alaskan Standard Time',
    abbr: 'AKDT',
    offset: -8,
    isdst: true,
    handle: '(UTC-09:00) Alaska', // originally called "text"
    utc: [
      'America/Anchorage',
      'America/Juneau',
      'America/Nome',
      'America/Sitka',
      'America/Yakutat',
    ],
  },
  '(UTC-08:00) Baja California': {
    value: 'Pacific Standard Time (Mexico)',
    abbr: 'PDT',
    offset: -7,
    isdst: true,
    handle: '(UTC-08:00) Baja California', // originally called "text"
    utc: ['America/Santa_Isabel'],
  },
  '(UTC-07:00) Pacific Daylight Time (US & Canada)': {
    value: 'Pacific Daylight Time',
    abbr: 'PDT',
    offset: -7,
    isdst: true,
    handle: '(UTC-07:00) Pacific Daylight Time (US & Canada)', // originally called "text"
    utc: ['America/Los_Angeles', 'America/Tijuana', 'America/Vancouver'],
  },
  '(UTC-08:00) Pacific Standard Time (US & Canada)': {
    value: 'Pacific Standard Time',
    abbr: 'PST',
    offset: -8,
    isdst: false,
    handle: '(UTC-08:00) Pacific Standard Time (US & Canada)', // originally called "text"
    utc: [
      'America/Los_Angeles',
      'America/Tijuana',
      'America/Vancouver',
      'PST8PDT',
    ],
  },
  '(UTC-07:00) Arizona': {
    value: 'US Mountain Standard Time',
    abbr: 'UMST',
    offset: -7,
    isdst: false,
    handle: '(UTC-07:00) Arizona', // originally called "text"
    utc: [
      'America/Creston',
      'America/Dawson',
      'America/Dawson_Creek',
      'America/Hermosillo',
      'America/Phoenix',
      'America/Whitehorse',
      'Etc/GMT+7',
    ],
  },
  '(UTC-07:00) Chihuahua, La Paz, Mazatlan': {
    value: 'Mountain Standard Time (Mexico)',
    abbr: 'MDT',
    offset: -6,
    isdst: true,
    handle: '(UTC-07:00) Chihuahua, La Paz, Mazatlan', // originally called "text"
    utc: ['America/Chihuahua', 'America/Mazatlan'],
  },
  '(UTC-07:00) Mountain Time (US & Canada)': {
    value: 'Mountain Standard Time',
    abbr: 'MDT',
    offset: -6,
    isdst: true,
    handle: '(UTC-07:00) Mountain Time (US & Canada)', // originally called "text"
    utc: [
      'America/Boise',
      'America/Cambridge_Bay',
      'America/Denver',
      'America/Edmonton',
      'America/Inuvik',
      'America/Ojinaga',
      'America/Yellowknife',
      'MST7MDT',
    ],
  },
  '(UTC-06:00) Central America': {
    value: 'Central America Standard Time',
    abbr: 'CAST',
    offset: -6,
    isdst: false,
    handle: '(UTC-06:00) Central America', // originally called "text"
    utc: [
      'America/Belize',
      'America/Costa_Rica',
      'America/El_Salvador',
      'America/Guatemala',
      'America/Managua',
      'America/Tegucigalpa',
      'Etc/GMT+6',
      'Pacific/Galapagos',
    ],
  },
  '(UTC-06:00) Central Time (US & Canada)': {
    value: 'Central Standard Time',
    abbr: 'CDT',
    offset: -5,
    isdst: true,
    handle: '(UTC-06:00) Central Time (US & Canada)', // originally called "text"
    utc: [
      'America/Chicago',
      'America/Indiana/Knox',
      'America/Indiana/Tell_City',
      'America/Matamoros',
      'America/Menominee',
      'America/North_Dakota/Beulah',
      'America/North_Dakota/Center',
      'America/North_Dakota/New_Salem',
      'America/Rainy_River',
      'America/Rankin_Inlet',
      'America/Resolute',
      'America/Winnipeg',
      'CST6CDT',
    ],
  },
  '(UTC-06:00) Guadalajara, Mexico City, Monterrey': {
    value: 'Central Standard Time (Mexico)',
    abbr: 'CDT',
    offset: -5,
    isdst: true,
    handle: '(UTC-06:00) Guadalajara, Mexico City, Monterrey', // originally called "text"
    utc: [
      'America/Bahia_Banderas',
      'America/Cancun',
      'America/Merida',
      'America/Mexico_City',
      'America/Monterrey',
    ],
  },
  '(UTC-06:00) Saskatchewan': {
    value: 'Canada Central Standard Time',
    abbr: 'CCST',
    offset: -6,
    isdst: false,
    handle: '(UTC-06:00) Saskatchewan', // originally called "text"
    utc: ['America/Regina', 'America/Swift_Current'],
  },
  '(UTC-05:00) Bogota, Lima, Quito': {
    value: 'SA Pacific Standard Time',
    abbr: 'SPST',
    offset: -5,
    isdst: false,
    handle: '(UTC-05:00) Bogota, Lima, Quito', // originally called "text"
    utc: [
      'America/Bogota',
      'America/Cayman',
      'America/Coral_Harbour',
      'America/Eirunepe',
      'America/Guayaquil',
      'America/Jamaica',
      'America/Lima',
      'America/Panama',
      'America/Rio_Branco',
      'Etc/GMT+5',
    ],
  },
  '(UTC-05:00) Eastern Time (US & Canada)': {
    value: 'Eastern Standard Time',
    abbr: 'EST',
    offset: -5,
    isdst: false,
    handle: '(UTC-05:00) Eastern Time (US & Canada)', // originally called "text"
    utc: [
      'America/Detroit',
      'America/Havana',
      'America/Indiana/Petersburg',
      'America/Indiana/Vincennes',
      'America/Indiana/Winamac',
      'America/Iqaluit',
      'America/Kentucky/Monticello',
      'America/Louisville',
      'America/Montreal',
      'America/Nassau',
      'America/New_York',
      'America/Nipigon',
      'America/Pangnirtung',
      'America/Port-au-Prince',
      'America/Thunder_Bay',
      'America/Toronto',
    ],
  },
  '(UTC-04:00) Eastern Daylight Time (US & Canada)': {
    value: 'Eastern Daylight Time',
    abbr: 'EDT',
    offset: -4,
    isdst: true,
    handle: '(UTC-04:00) Eastern Daylight Time (US & Canada)', // originally called "text"
    utc: [
      'America/Detroit',
      'America/Havana',
      'America/Indiana/Petersburg',
      'America/Indiana/Vincennes',
      'America/Indiana/Winamac',
      'America/Iqaluit',
      'America/Kentucky/Monticello',
      'America/Louisville',
      'America/Montreal',
      'America/Nassau',
      'America/New_York',
      'America/Nipigon',
      'America/Pangnirtung',
      'America/Port-au-Prince',
      'America/Thunder_Bay',
      'America/Toronto',
    ],
  },
  '(UTC-05:00) Indiana (East)': {
    value: 'US Eastern Standard Time',
    abbr: 'UEDT',
    offset: -5,
    isdst: false,
    handle: '(UTC-05:00) Indiana (East)', // originally called "text"
    utc: [
      'America/Indiana/Marengo',
      'America/Indiana/Vevay',
      'America/Indianapolis',
    ],
  },
  '(UTC-04:30) Caracas': {
    value: 'Venezuela Standard Time',
    abbr: 'VST',
    offset: -4.5,
    isdst: false,
    handle: '(UTC-04:30) Caracas', // originally called "text"
    utc: ['America/Caracas'],
  },
  '(UTC-04:00) Asuncion': {
    value: 'Paraguay Standard Time',
    abbr: 'PYT',
    offset: -4,
    isdst: false,
    handle: '(UTC-04:00) Asuncion', // originally called "text"
    utc: ['America/Asuncion'],
  },
  '(UTC-04:00) Atlantic Time (Canada)': {
    value: 'Atlantic Standard Time',
    abbr: 'ADT',
    offset: -3,
    isdst: true,
    handle: '(UTC-04:00) Atlantic Time (Canada)', // originally called "text"
    utc: [
      'America/Glace_Bay',
      'America/Goose_Bay',
      'America/Halifax',
      'America/Moncton',
      'America/Thule',
      'Atlantic/Bermuda',
    ],
  },
  '(UTC-04:00) Cuiaba': {
    value: 'Central Brazilian Standard Time',
    abbr: 'CBST',
    offset: -4,
    isdst: false,
    handle: '(UTC-04:00) Cuiaba', // originally called "text"
    utc: ['America/Campo_Grande', 'America/Cuiaba'],
  },
  '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan': {
    value: 'SA Western Standard Time',
    abbr: 'SWST',
    offset: -4,
    isdst: false,
    handle: '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan', // originally called "text"
    utc: [
      'America/Anguilla',
      'America/Antigua',
      'America/Aruba',
      'America/Barbados',
      'America/Blanc-Sablon',
      'America/Boa_Vista',
      'America/Curacao',
      'America/Dominica',
      'America/Grand_Turk',
      'America/Grenada',
      'America/Guadeloupe',
      'America/Guyana',
      'America/Kralendijk',
      'America/La_Paz',
      'America/Lower_Princes',
      'America/Manaus',
      'America/Marigot',
      'America/Martinique',
      'America/Montserrat',
      'America/Port_of_Spain',
      'America/Porto_Velho',
      'America/Puerto_Rico',
      'America/Santo_Domingo',
      'America/St_Barthelemy',
      'America/St_Kitts',
      'America/St_Lucia',
      'America/St_Thomas',
      'America/St_Vincent',
      'America/Tortola',
      'Etc/GMT+4',
    ],
  },
  '(UTC-04:00) Santiago': {
    value: 'Pacific SA Standard Time',
    abbr: 'PSST',
    offset: -4,
    isdst: false,
    handle: '(UTC-04:00) Santiago', // originally called "text"
    utc: ['America/Santiago', 'Antarctica/Palmer'],
  },
  '(UTC-03:30) Newfoundland': {
    value: 'Newfoundland Standard Time',
    abbr: 'NDT',
    offset: -2.5,
    isdst: true,
    handle: '(UTC-03:30) Newfoundland', // originally called "text"
    utc: ['America/St_Johns'],
  },
  '(UTC-03:00) Brasilia': {
    value: 'E. South America Standard Time',
    abbr: 'ESAST',
    offset: -3,
    isdst: false,
    handle: '(UTC-03:00) Brasilia', // originally called "text"
    utc: ['America/Sao_Paulo'],
  },
  '(UTC-03:00) Buenos Aires': {
    value: 'Argentina Standard Time',
    abbr: 'AST',
    offset: -3,
    isdst: false,
    handle: '(UTC-03:00) Buenos Aires', // originally called "text"
    utc: [
      'America/Argentina/Buenos_Aires',
      'America/Argentina/Catamarca',
      'America/Argentina/Cordoba',
      'America/Argentina/Jujuy',
      'America/Argentina/La_Rioja',
      'America/Argentina/Mendoza',
      'America/Argentina/Rio_Gallegos',
      'America/Argentina/Salta',
      'America/Argentina/San_Juan',
      'America/Argentina/San_Luis',
      'America/Argentina/Tucuman',
      'America/Argentina/Ushuaia',
      'America/Buenos_Aires',
      'America/Catamarca',
      'America/Cordoba',
      'America/Jujuy',
      'America/Mendoza',
    ],
  },
  '(UTC-03:00) Cayenne, Fortaleza': {
    value: 'SA Eastern Standard Time',
    abbr: 'SEST',
    offset: -3,
    isdst: false,
    handle: '(UTC-03:00) Cayenne, Fortaleza', // originally called "text"
    utc: [
      'America/Araguaina',
      'America/Belem',
      'America/Cayenne',
      'America/Fortaleza',
      'America/Maceio',
      'America/Paramaribo',
      'America/Recife',
      'America/Santarem',
      'Antarctica/Rothera',
      'Atlantic/Stanley',
      'Etc/GMT+3',
    ],
  },
  '(UTC-03:00) Greenland': {
    value: 'Greenland Standard Time',
    abbr: 'GDT',
    offset: -3,
    isdst: true,
    handle: '(UTC-03:00) Greenland', // originally called "text"
    utc: ['America/Godthab'],
  },
  '(UTC-03:00) Montevideo': {
    value: 'Montevideo Standard Time',
    abbr: 'MST',
    offset: -3,
    isdst: false,
    handle: '(UTC-03:00) Montevideo', // originally called "text"
    utc: ['America/Montevideo'],
  },
  '(UTC-03:00) Salvador': {
    value: 'Bahia Standard Time',
    abbr: 'BST',
    offset: -3,
    isdst: false,
    handle: '(UTC-03:00) Salvador', // originally called "text"
    utc: ['America/Bahia'],
  },
  '(UTC-02:00) Coordinated Universal Time-02': {
    value: 'UTC-02',
    abbr: 'U',
    offset: -2,
    isdst: false,
    handle: '(UTC-02:00) Coordinated Universal Time-02', // originally called "text"
    utc: ['America/Noronha', 'Atlantic/South_Georgia', 'Etc/GMT+2'],
  },
  '(UTC-02:00) Mid-Atlantic - Old': {
    value: 'Mid-Atlantic Standard Time',
    abbr: 'MDT',
    offset: -1,
    isdst: true,
    handle: '(UTC-02:00) Mid-Atlantic - Old', // originally called "text"
    utc: [],
  },
  '(UTC-01:00) Azores': {
    value: 'Azores Standard Time',
    abbr: 'ADT',
    offset: 0,
    isdst: true,
    handle: '(UTC-01:00) Azores', // originally called "text"
    utc: ['America/Scoresbysund', 'Atlantic/Azores'],
  },
  '(UTC-01:00) Cape Verde Is.': {
    value: 'Cape Verde Standard Time',
    abbr: 'CVST',
    offset: -1,
    isdst: false,
    handle: '(UTC-01:00) Cape Verde Is.', // originally called "text"
    utc: ['Atlantic/Cape_Verde', 'Etc/GMT+1'],
  },
  '(UTC) Casablanca': {
    value: 'Morocco Standard Time',
    abbr: 'MDT',
    offset: 1,
    isdst: true,
    handle: '(UTC) Casablanca', // originally called "text"
    utc: ['Africa/Casablanca', 'Africa/El_Aaiun'],
  },
  '(UTC) Coordinated Universal Time': {
    value: 'UTC',
    abbr: 'UTC',
    offset: 0,
    isdst: false,
    handle: '(UTC) Coordinated Universal Time', // originally called "text"
    utc: ['America/Danmarkshavn', 'Etc/GMT'],
  },
  '(UTC) Edinburgh, London': {
    value: 'GMT Standard Time',
    abbr: 'GMT',
    offset: 0,
    isdst: false,
    handle: '(UTC) Edinburgh, London', // originally called "text"
    utc: [
      'Europe/Isle_of_Man',
      'Europe/Guernsey',
      'Europe/Jersey',
      'Europe/London',
    ],
  },
  '(UTC+01:00) Edinburgh, London': {
    value: 'British Summer Time',
    abbr: 'BST',
    offset: 1,
    isdst: true,
    handle: '(UTC+01:00) Edinburgh, London', // originally called "text"
    utc: [
      'Europe/Isle_of_Man',
      'Europe/Guernsey',
      'Europe/Jersey',
      'Europe/London',
    ],
  },
  '(UTC) Dublin, Lisbon': {
    value: 'GMT Standard Time',
    abbr: 'GDT',
    offset: 1,
    isdst: true,
    handle: '(UTC) Dublin, Lisbon', // originally called "text"
    utc: [
      'Atlantic/Canary',
      'Atlantic/Faeroe',
      'Atlantic/Madeira',
      'Europe/Dublin',
      'Europe/Lisbon',
    ],
  },
  '(UTC) Monrovia, Reykjavik': {
    value: 'Greenwich Standard Time',
    abbr: 'GST',
    offset: 0,
    isdst: false,
    handle: '(UTC) Monrovia, Reykjavik', // originally called "text"
    utc: [
      'Africa/Abidjan',
      'Africa/Accra',
      'Africa/Bamako',
      'Africa/Banjul',
      'Africa/Bissau',
      'Africa/Conakry',
      'Africa/Dakar',
      'Africa/Freetown',
      'Africa/Lome',
      'Africa/Monrovia',
      'Africa/Nouakchott',
      'Africa/Ouagadougou',
      'Africa/Sao_Tome',
      'Atlantic/Reykjavik',
      'Atlantic/St_Helena',
    ],
  },
  '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna': {
    value: 'W. Europe Standard Time',
    abbr: 'WEDT',
    offset: 2,
    isdst: true,
    handle: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna', // originally called "text"
    utc: [
      'Arctic/Longyearbyen',
      'Europe/Amsterdam',
      'Europe/Andorra',
      'Europe/Berlin',
      'Europe/Busingen',
      'Europe/Gibraltar',
      'Europe/Luxembourg',
      'Europe/Malta',
      'Europe/Monaco',
      'Europe/Oslo',
      'Europe/Rome',
      'Europe/San_Marino',
      'Europe/Stockholm',
      'Europe/Vaduz',
      'Europe/Vatican',
      'Europe/Vienna',
      'Europe/Zurich',
    ],
  },
  '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague': {
    value: 'Central Europe Standard Time',
    abbr: 'CEDT',
    offset: 2,
    isdst: true,
    handle: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague', // originally called "text"
    utc: [
      'Europe/Belgrade',
      'Europe/Bratislava',
      'Europe/Budapest',
      'Europe/Ljubljana',
      'Europe/Podgorica',
      'Europe/Prague',
      'Europe/Tirane',
    ],
  },
  '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris': {
    value: 'Romance Standard Time',
    abbr: 'RDT',
    offset: 2,
    isdst: true,
    handle: '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris', // originally called "text"
    utc: [
      'Africa/Ceuta',
      'Europe/Brussels',
      'Europe/Copenhagen',
      'Europe/Madrid',
      'Europe/Paris',
    ],
  },
  '(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb': {
    value: 'Central European Standard Time',
    abbr: 'CEDT',
    offset: 2,
    isdst: true,
    handle: '(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb', // originally called "text"
    utc: ['Europe/Sarajevo', 'Europe/Skopje', 'Europe/Warsaw', 'Europe/Zagreb'],
  },
  '(UTC+01:00) West Central Africa': {
    value: 'W. Central Africa Standard Time',
    abbr: 'WCAST',
    offset: 1,
    isdst: false,
    handle: '(UTC+01:00) West Central Africa', // originally called "text"
    utc: [
      'Africa/Algiers',
      'Africa/Bangui',
      'Africa/Brazzaville',
      'Africa/Douala',
      'Africa/Kinshasa',
      'Africa/Lagos',
      'Africa/Libreville',
      'Africa/Luanda',
      'Africa/Malabo',
      'Africa/Ndjamena',
      'Africa/Niamey',
      'Africa/Porto-Novo',
      'Africa/Tunis',
      'Etc/GMT-1',
    ],
  },
  '(UTC+01:00) Windhoek': {
    value: 'Namibia Standard Time',
    abbr: 'NST',
    offset: 1,
    isdst: false,
    handle: '(UTC+01:00) Windhoek', // originally called "text"
    utc: ['Africa/Windhoek'],
  },
  '(UTC+02:00) Athens, Bucharest': {
    value: 'GTB Standard Time',
    abbr: 'GDT',
    offset: 3,
    isdst: true,
    handle: '(UTC+02:00) Athens, Bucharest', // originally called "text"
    utc: [
      'Asia/Nicosia',
      'Europe/Athens',
      'Europe/Bucharest',
      'Europe/Chisinau',
    ],
  },
  '(UTC+02:00) Beirut': {
    value: 'Middle East Standard Time',
    abbr: 'MEDT',
    offset: 3,
    isdst: true,
    handle: '(UTC+02:00) Beirut', // originally called "text"
    utc: ['Asia/Beirut'],
  },
  '(UTC+02:00) Cairo': {
    value: 'Egypt Standard Time',
    abbr: 'EST',
    offset: 2,
    isdst: false,
    handle: '(UTC+02:00) Cairo', // originally called "text"
    utc: ['Africa/Cairo'],
  },
  '(UTC+02:00) Damascus': {
    value: 'Syria Standard Time',
    abbr: 'SDT',
    offset: 3,
    isdst: true,
    handle: '(UTC+02:00) Damascus', // originally called "text"
    utc: ['Asia/Damascus'],
  },
  '(UTC+02:00) E. Europe': {
    value: 'E. Europe Standard Time',
    abbr: 'EEDT',
    offset: 3,
    isdst: true,
    handle: '(UTC+02:00) E. Europe', // originally called "text"
    utc: [
      'Asia/Nicosia',
      'Europe/Athens',
      'Europe/Bucharest',
      'Europe/Chisinau',
      'Europe/Helsinki',
      'Europe/Kyiv',
      'Europe/Mariehamn',
      'Europe/Nicosia',
      'Europe/Riga',
      'Europe/Sofia',
      'Europe/Tallinn',
      'Europe/Uzhhorod',
      'Europe/Vilnius',
      'Europe/Zaporizhzhia',
    ],
  },
  '(UTC+02:00) Harare, Pretoria': {
    value: 'South Africa Standard Time',
    abbr: 'SAST',
    offset: 2,
    isdst: false,
    handle: '(UTC+02:00) Harare, Pretoria', // originally called "text"
    utc: [
      'Africa/Blantyre',
      'Africa/Bujumbura',
      'Africa/Gaborone',
      'Africa/Harare',
      'Africa/Johannesburg',
      'Africa/Kigali',
      'Africa/Lubumbashi',
      'Africa/Lusaka',
      'Africa/Maputo',
      'Africa/Maseru',
      'Africa/Mbabane',
      'Etc/GMT-2',
    ],
  },
  '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius': {
    value: 'FLE Standard Time',
    abbr: 'FDT',
    offset: 3,
    isdst: true,
    handle: '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius', // originally called "text"
    utc: [
      'Europe/Helsinki',
      'Europe/Kyiv',
      'Europe/Mariehamn',
      'Europe/Riga',
      'Europe/Sofia',
      'Europe/Tallinn',
      'Europe/Uzhhorod',
      'Europe/Vilnius',
      'Europe/Zaporizhzhia',
    ],
  },
  '(UTC+03:00) Istanbul': {
    value: 'Turkey Standard Time',
    abbr: 'TDT',
    offset: 3,
    isdst: false,
    handle: '(UTC+03:00) Istanbul', // originally called "text"
    utc: ['Europe/Istanbul'],
  },
  '(UTC+02:00) Jerusalem': {
    value: 'Israel Standard Time',
    abbr: 'JDT',
    offset: 3,
    isdst: true,
    handle: '(UTC+02:00) Jerusalem', // originally called "text"
    utc: ['Asia/Jerusalem'],
  },
  '(UTC+02:00) Tripoli': {
    value: 'Libya Standard Time',
    abbr: 'LST',
    offset: 2,
    isdst: false,
    handle: '(UTC+02:00) Tripoli', // originally called "text"
    utc: ['Africa/Tripoli'],
  },
  '(UTC+03:00) Amman': {
    value: 'Jordan Standard Time',
    abbr: 'JST',
    offset: 3,
    isdst: false,
    handle: '(UTC+03:00) Amman', // originally called "text"
    utc: ['Asia/Amman'],
  },
  '(UTC+03:00) Baghdad': {
    value: 'Arabic Standard Time',
    abbr: 'AST',
    offset: 3,
    isdst: false,
    handle: '(UTC+03:00) Baghdad', // originally called "text"
    utc: ['Asia/Baghdad'],
  },
  '(UTC+02:00) Kaliningrad': {
    value: 'Kaliningrad Standard Time',
    abbr: 'KST',
    offset: 3,
    isdst: false,
    handle: '(UTC+02:00) Kaliningrad', // originally called "text"
    utc: ['Europe/Kaliningrad'],
  },
  '(UTC+03:00) Kuwait, Riyadh': {
    value: 'Arab Standard Time',
    abbr: 'AST',
    offset: 3,
    isdst: false,
    handle: '(UTC+03:00) Kuwait, Riyadh', // originally called "text"
    utc: [
      'Asia/Aden',
      'Asia/Bahrain',
      'Asia/Kuwait',
      'Asia/Qatar',
      'Asia/Riyadh',
    ],
  },
  '(UTC+03:00) Nairobi': {
    value: 'E. Africa Standard Time',
    abbr: 'EAST',
    offset: 3,
    isdst: false,
    handle: '(UTC+03:00) Nairobi', // originally called "text"
    utc: [
      'Africa/Addis_Ababa',
      'Africa/Asmera',
      'Africa/Dar_es_Salaam',
      'Africa/Djibouti',
      'Africa/Juba',
      'Africa/Kampala',
      'Africa/Khartoum',
      'Africa/Mogadishu',
      'Africa/Nairobi',
      'Antarctica/Syowa',
      'Etc/GMT-3',
      'Indian/Antananarivo',
      'Indian/Comoro',
      'Indian/Mayotte',
    ],
  },
  '(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk': {
    value: 'Moscow Standard Time',
    abbr: 'MSK',
    offset: 3,
    isdst: false,
    handle: '(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk', // originally called "text"
    utc: [
      'Europe/Kirov',
      'Europe/Moscow',
      'Europe/Simferopol',
      'Europe/Volgograd',
      'Europe/Minsk',
    ],
  },
  '(UTC+04:00) Samara, Ulyanovsk, Saratov': {
    value: 'Samara Time',
    abbr: 'SAMT',
    offset: 4,
    isdst: false,
    handle: '(UTC+04:00) Samara, Ulyanovsk, Saratov', // originally called "text"
    utc: ['Europe/Astrakhan', 'Europe/Samara', 'Europe/Ulyanovsk'],
  },
  '(UTC+03:30) Tehran': {
    value: 'Iran Standard Time',
    abbr: 'IDT',
    offset: 4.5,
    isdst: true,
    handle: '(UTC+03:30) Tehran', // originally called "text"
    utc: ['Asia/Tehran'],
  },
  '(UTC+04:00) Abu Dhabi, Muscat': {
    value: 'Arabian Standard Time',
    abbr: 'AST',
    offset: 4,
    isdst: false,
    handle: '(UTC+04:00) Abu Dhabi, Muscat', // originally called "text"
    utc: ['Asia/Dubai', 'Asia/Muscat', 'Etc/GMT-4'],
  },
  '(UTC+04:00) Baku': {
    value: 'Azerbaijan Standard Time',
    abbr: 'ADT',
    offset: 5,
    isdst: true,
    handle: '(UTC+04:00) Baku', // originally called "text"
    utc: ['Asia/Baku'],
  },
  '(UTC+04:00) Port Louis': {
    value: 'Mauritius Standard Time',
    abbr: 'MST',
    offset: 4,
    isdst: false,
    handle: '(UTC+04:00) Port Louis', // originally called "text"
    utc: ['Indian/Mahe', 'Indian/Mauritius', 'Indian/Reunion'],
  },
  '(UTC+04:00) Tbilisi': {
    value: 'Georgian Standard Time',
    abbr: 'GET',
    offset: 4,
    isdst: false,
    handle: '(UTC+04:00) Tbilisi', // originally called "text"
    utc: ['Asia/Tbilisi'],
  },
  '(UTC+04:00) Yerevan': {
    value: 'Caucasus Standard Time',
    abbr: 'CST',
    offset: 4,
    isdst: false,
    handle: '(UTC+04:00) Yerevan', // originally called "text"
    utc: ['Asia/Yerevan'],
  },
  '(UTC+04:30) Kabul': {
    value: 'Afghanistan Standard Time',
    abbr: 'AST',
    offset: 4.5,
    isdst: false,
    handle: '(UTC+04:30) Kabul', // originally called "text"
    utc: ['Asia/Kabul'],
  },
  '(UTC+05:00) Ashgabat, Tashkent': {
    value: 'West Asia Standard Time',
    abbr: 'WAST',
    offset: 5,
    isdst: false,
    handle: '(UTC+05:00) Ashgabat, Tashkent', // originally called "text"
    utc: [
      'Antarctica/Mawson',
      'Asia/Aqtau',
      'Asia/Aqtobe',
      'Asia/Ashgabat',
      'Asia/Dushanbe',
      'Asia/Oral',
      'Asia/Samarkand',
      'Asia/Tashkent',
      'Etc/GMT-5',
      'Indian/Kerguelen',
      'Indian/Maldives',
    ],
  },
  '(UTC+05:00) Yekaterinburg': {
    value: 'Yekaterinburg Time',
    abbr: 'YEKT',
    offset: 5,
    isdst: false,
    handle: '(UTC+05:00) Yekaterinburg', // originally called "text"
    utc: ['Asia/Yekaterinburg'],
  },
  '(UTC+05:00) Islamabad, Karachi': {
    value: 'Pakistan Standard Time',
    abbr: 'PKT',
    offset: 5,
    isdst: false,
    handle: '(UTC+05:00) Islamabad, Karachi', // originally called "text"
    utc: ['Asia/Karachi'],
  },
  '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi': {
    value: 'India Standard Time',
    abbr: 'IST',
    offset: 5.5,
    isdst: false,
    handle: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi', // originally called "text"
    utc: ['Asia/Kolkata', 'Asia/Calcutta'],
  },
  '(UTC+05:30) Sri Jayawardenepura': {
    value: 'Sri Lanka Standard Time',
    abbr: 'SLST',
    offset: 5.5,
    isdst: false,
    handle: '(UTC+05:30) Sri Jayawardenepura', // originally called "text"
    utc: ['Asia/Colombo'],
  },
  '(UTC+05:45) Kathmandu': {
    value: 'Nepal Standard Time',
    abbr: 'NST',
    offset: 5.75,
    isdst: false,
    handle: '(UTC+05:45) Kathmandu', // originally called "text"
    utc: ['Asia/Kathmandu'],
  },
  '(UTC+06:00) Nur-Sultan (Astana)': {
    value: 'Central Asia Standard Time',
    abbr: 'CAST',
    offset: 6,
    isdst: false,
    handle: '(UTC+06:00) Nur-Sultan (Astana)', // originally called "text"
    utc: [
      'Antarctica/Vostok',
      'Asia/Almaty',
      'Asia/Bishkek',
      'Asia/Qyzylorda',
      'Asia/Urumqi',
      'Etc/GMT-6',
      'Indian/Chagos',
    ],
  },
  '(UTC+06:00) Dhaka': {
    value: 'Bangladesh Standard Time',
    abbr: 'BST',
    offset: 6,
    isdst: false,
    handle: '(UTC+06:00) Dhaka', // originally called "text"
    utc: ['Asia/Dhaka', 'Asia/Thimphu'],
  },
  '(UTC+06:30) Yangon (Rangoon)': {
    value: 'Myanmar Standard Time',
    abbr: 'MST',
    offset: 6.5,
    isdst: false,
    handle: '(UTC+06:30) Yangon (Rangoon)', // originally called "text"
    utc: ['Asia/Rangoon', 'Indian/Cocos'],
  },
  '(UTC+07:00) Bangkok, Hanoi, Jakarta': {
    value: 'SE Asia Standard Time',
    abbr: 'SAST',
    offset: 7,
    isdst: false,
    handle: '(UTC+07:00) Bangkok, Hanoi, Jakarta', // originally called "text"
    utc: [
      'Antarctica/Davis',
      'Asia/Bangkok',
      'Asia/Hovd',
      'Asia/Jakarta',
      'Asia/Phnom_Penh',
      'Asia/Pontianak',
      'Asia/Saigon',
      'Asia/Vientiane',
      'Etc/GMT-7',
      'Indian/Christmas',
    ],
  },
  '(UTC+07:00) Novosibirsk': {
    value: 'N. Central Asia Standard Time',
    abbr: 'NCAST',
    offset: 7,
    isdst: false,
    handle: '(UTC+07:00) Novosibirsk', // originally called "text"
    utc: ['Asia/Novokuznetsk', 'Asia/Novosibirsk', 'Asia/Omsk'],
  },
  '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi': {
    value: 'China Standard Time',
    abbr: 'CST',
    offset: 8,
    isdst: false,
    handle: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi', // originally called "text"
    utc: ['Asia/Hong_Kong', 'Asia/Macau', 'Asia/Shanghai'],
  },
  '(UTC+08:00) Krasnoyarsk': {
    value: 'North Asia Standard Time',
    abbr: 'NAST',
    offset: 8,
    isdst: false,
    handle: '(UTC+08:00) Krasnoyarsk', // originally called "text"
    utc: ['Asia/Krasnoyarsk'],
  },
  '(UTC+08:00) Kuala Lumpur, Singapore': {
    value: 'Singapore Standard Time',
    abbr: 'MPST',
    offset: 8,
    isdst: false,
    handle: '(UTC+08:00) Kuala Lumpur, Singapore', // originally called "text"
    utc: [
      'Asia/Brunei',
      'Asia/Kuala_Lumpur',
      'Asia/Kuching',
      'Asia/Makassar',
      'Asia/Manila',
      'Asia/Singapore',
      'Etc/GMT-8',
    ],
  },
  '(UTC+08:00) Perth': {
    value: 'W. Australia Standard Time',
    abbr: 'WAST',
    offset: 8,
    isdst: false,
    handle: '(UTC+08:00) Perth', // originally called "text"
    utc: ['Antarctica/Casey', 'Australia/Perth'],
  },
  '(UTC+08:00) Taipei': {
    value: 'Taipei Standard Time',
    abbr: 'TST',
    offset: 8,
    isdst: false,
    handle: '(UTC+08:00) Taipei', // originally called "text"
    utc: ['Asia/Taipei'],
  },
  '(UTC+08:00) Ulaanbaatar': {
    value: 'Ulaanbaatar Standard Time',
    abbr: 'UST',
    offset: 8,
    isdst: false,
    handle: '(UTC+08:00) Ulaanbaatar', // originally called "text"
    utc: ['Asia/Choibalsan', 'Asia/Ulaanbaatar'],
  },
  '(UTC+08:00) Irkutsk': {
    value: 'North Asia East Standard Time',
    abbr: 'NAEST',
    offset: 8,
    isdst: false,
    handle: '(UTC+08:00) Irkutsk', // originally called "text"
    utc: ['Asia/Irkutsk'],
  },
  '(UTC+09:00) Osaka, Sapporo, Tokyo': {
    value: 'Japan Standard Time',
    abbr: 'JST',
    offset: 9,
    isdst: false,
    handle: '(UTC+09:00) Osaka, Sapporo, Tokyo', // originally called "text"
    utc: [
      'Asia/Dili',
      'Asia/Jayapura',
      'Asia/Tokyo',
      'Etc/GMT-9',
      'Pacific/Palau',
    ],
  },
  '(UTC+09:00) Seoul': {
    value: 'Korea Standard Time',
    abbr: 'KST',
    offset: 9,
    isdst: false,
    handle: '(UTC+09:00) Seoul', // originally called "text"
    utc: ['Asia/Pyongyang', 'Asia/Seoul'],
  },
  '(UTC+09:30) Adelaide': {
    value: 'Cen. Australia Standard Time',
    abbr: 'CAST',
    offset: 9.5,
    isdst: false,
    handle: '(UTC+09:30) Adelaide', // originally called "text"
    utc: ['Australia/Adelaide', 'Australia/Broken_Hill'],
  },
  '(UTC+09:30) Darwin': {
    value: 'AUS Central Standard Time',
    abbr: 'ACST',
    offset: 9.5,
    isdst: false,
    handle: '(UTC+09:30) Darwin', // originally called "text"
    utc: ['Australia/Darwin'],
  },
  '(UTC+10:00) Brisbane': {
    value: 'E. Australia Standard Time',
    abbr: 'EAST',
    offset: 10,
    isdst: false,
    handle: '(UTC+10:00) Brisbane', // originally called "text"
    utc: ['Australia/Brisbane', 'Australia/Lindeman'],
  },
  '(UTC+10:00) Canberra, Melbourne, Sydney': {
    value: 'AUS Eastern Standard Time',
    abbr: 'AEST',
    offset: 10,
    isdst: false,
    handle: '(UTC+10:00) Canberra, Melbourne, Sydney', // originally called "text"
    utc: ['Australia/Melbourne', 'Australia/Sydney'],
  },
  '(UTC+10:00) Guam, Port Moresby': {
    value: 'West Pacific Standard Time',
    abbr: 'WPST',
    offset: 10,
    isdst: false,
    handle: '(UTC+10:00) Guam, Port Moresby', // originally called "text"
    utc: [
      'Antarctica/DumontDUrville',
      'Etc/GMT-10',
      'Pacific/Guam',
      'Pacific/Port_Moresby',
      'Pacific/Saipan',
      'Pacific/Truk',
    ],
  },
  '(UTC+10:00) Hobart': {
    value: 'Tasmania Standard Time',
    abbr: 'TST',
    offset: 10,
    isdst: false,
    handle: '(UTC+10:00) Hobart', // originally called "text"
    utc: ['Australia/Currie', 'Australia/Hobart'],
  },
  '(UTC+09:00) Yakutsk': {
    value: 'Yakutsk Standard Time',
    abbr: 'YST',
    offset: 9,
    isdst: false,
    handle: '(UTC+09:00) Yakutsk', // originally called "text"
    utc: ['Asia/Chita', 'Asia/Khandyga', 'Asia/Yakutsk'],
  },
  '(UTC+11:00) Solomon Is., New Caledonia': {
    value: 'Central Pacific Standard Time',
    abbr: 'CPST',
    offset: 11,
    isdst: false,
    handle: '(UTC+11:00) Solomon Is., New Caledonia', // originally called "text"
    utc: [
      'Antarctica/Macquarie',
      'Etc/GMT-11',
      'Pacific/Efate',
      'Pacific/Guadalcanal',
      'Pacific/Kosrae',
      'Pacific/Noumea',
      'Pacific/Ponape',
    ],
  },
  '(UTC+11:00) Vladivostok': {
    value: 'Vladivostok Standard Time',
    abbr: 'VST',
    offset: 11,
    isdst: false,
    handle: '(UTC+11:00) Vladivostok', // originally called "text"
    utc: ['Asia/Sakhalin', 'Asia/Ust-Nera', 'Asia/Vladivostok'],
  },
  '(UTC+12:00) Auckland, Wellington': {
    value: 'New Zealand Standard Time',
    abbr: 'NZST',
    offset: 12,
    isdst: false,
    handle: '(UTC+12:00) Auckland, Wellington', // originally called "text"
    utc: ['Antarctica/McMurdo', 'Pacific/Auckland'],
  },
  '(UTC+12:00) Coordinated Universal Time+12': {
    value: 'UTC+12',
    abbr: 'U',
    offset: 12,
    isdst: false,
    handle: '(UTC+12:00) Coordinated Universal Time+12', // originally called "text"
    utc: [
      'Etc/GMT-12',
      'Pacific/Funafuti',
      'Pacific/Kwajalein',
      'Pacific/Majuro',
      'Pacific/Nauru',
      'Pacific/Tarawa',
      'Pacific/Wake',
      'Pacific/Wallis',
    ],
  },
  '(UTC+12:00) Fiji': {
    value: 'Fiji Standard Time',
    abbr: 'FST',
    offset: 12,
    isdst: false,
    handle: '(UTC+12:00) Fiji', // originally called "text"
    utc: ['Pacific/Fiji'],
  },
  '(UTC+12:00) Magadan': {
    value: 'Magadan Standard Time',
    abbr: 'MST',
    offset: 12,
    isdst: false,
    handle: '(UTC+12:00) Magadan', // originally called "text"
    utc: [
      'Asia/Anadyr',
      'Asia/Kamchatka',
      'Asia/Magadan',
      'Asia/Srednekolymsk',
    ],
  },
  '(UTC+12:00) Petropavlovsk-Kamchatsky - Old': {
    value: 'Kamchatka Standard Time',
    abbr: 'KDT',
    offset: 13,
    isdst: true,
    handle: '(UTC+12:00) Petropavlovsk-Kamchatsky - Old', // originally called "text"
    utc: ['Asia/Kamchatka'],
  },
  "(UTC+13:00) Nuku'alofa": {
    value: 'Tonga Standard Time',
    abbr: 'TST',
    offset: 13,
    isdst: false,
    handle: "(UTC+13:00) Nuku'alofa", // originally called "text"
    utc: [
      'Etc/GMT-13',
      'Pacific/Enderbury',
      'Pacific/Fakaofo',
      'Pacific/Tongatapu',
    ],
  },
  '(UTC+13:00) Samoa': {
    value: 'Samoa Standard Time',
    abbr: 'SST',
    offset: 13,
    isdst: false,
    handle: '(UTC+13:00) Samoa', // originally called "text"
    utc: ['Pacific/Apia'],
  },
} as const;
