parse_version = (version) => {
  try {
    const [major, minor, patch] = version
      .match(/^([0-9]+).([0-9]+).([0-9]+)$/)
      .slice(1)
      .map(Number);

    return { major, minor, patch };
  } catch (error) {
    throw Object.assign(Error('Unable to parse version'), {
      details: {
        error: error.message,
        input: version
      }
    });
  }
};

module.exports = parse_version;
