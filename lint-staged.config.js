module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  "*.{ts,tsx}": (filenames) => ["npm run format:fix", "npm run validate"]
};
