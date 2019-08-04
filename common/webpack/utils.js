module.exports = {
  getWebpackMode(env)
  {
    switch(env) {
      case "prod":
        return "production";
      case "dev":
      case "local":
        return "development";
      default:
        return "none";
    }
  }
}