module.exports = class {
  static encode(str, from = 'ascii') {
    return str ? Buffer.from(str, from).toString('base64') : '';
  }

  static decode(str, to = 'ascii') {
    return str ? Buffer.from(str, 'base64').toString(to) : '';
  }
}

