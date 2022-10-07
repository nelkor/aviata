export const translationKeys = [
  // Tariff options
  'TARIFF_OPTIONS',
  'ONLY_DIRECT_FLIGHTS',
  'ONLY_WITH_LUGGAGE',
  'ONLY_REFUNDABLE',

  // Airlines
  'AIRLINES',
  'ALL',

  // Filters
  'RESET_ALL_FILTERS',
  'RESET_SELECTION',

  // Card
  'EMPTY_LIST',
  'CHOOSE',
  'TOTAL_PRICE',
  'NO_LUGGAGE',
  'KG',
  'ADD_LUGGAGE',
  'FLIGHT_DETAILS',
  'TARIFF_TERMS',
  'REFUNDABLE',
  'NON_REFUNDABLE',
  'PREFIX_THROUGH',
  'POSTFIX_THROUGH',

  // Popup
  'OK',
  'SELECTION_HEADER',
  'SELECTION_TEXT',
  'LUGGAGE_HEADER',
  'LUGGAGE_TEXT',
  'CALL_US',
] as const

export type TranslationKey = typeof translationKeys[number]
