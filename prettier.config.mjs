export default {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  trailingComma: "all",
  semi: true,
  bracketSpacing: true,
  importOrder: [
    "^module-alias/register$",
    "^@/lib(/.*)?$",
    "^@/types(/.*)?$",
    "^@/utils(/.*)?$",
    "^[./]",
    "<THIRD_PARTY_MODULES>",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
