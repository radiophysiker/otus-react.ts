module.exports = {
  "*.(ts|js)?(x)": (filenames) => {
    console.log("commit files:", filenames);
    return ["npm run lint:check --"];
  },
};
