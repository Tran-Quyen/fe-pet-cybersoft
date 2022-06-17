export function convertData(copyData) {
  return JSON.stringify(copyData)
    .split('"').join("'")
    .split(/[\{\[]/)
    .join("(")
    .split(/[\}\]]/)
    .join(")")
    .replaceAll("&lsqb;&quest;&rsqb;", "♥")
    .replaceAll(/\:'|\:\s'|\s\:'|\s\:\s'/g, ":'")
    .replaceAll("\\'", '"')
    .replace(/'N'/g, "N'")
    .replaceAll("?''", "?'")
    .replaceAll("='", '="')
    .replace(/\\n|\\r/g, '')
    .slice(0, -1).slice(1);
}
