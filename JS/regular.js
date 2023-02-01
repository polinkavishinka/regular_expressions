class Validator {
  static validateUsername(username) {
    const ruleOne = /[a-z]/i.test(username);
    const ruleTwo = /^[^\d_\W]+[\w-]*[^\d_\W]$/.test(username);
    const ruleTree = /\d{4,}/.test(username);
    if ((username.length === 1 && ruleOne) || (ruleTwo && !ruleTree)) {
      this.username = username;
      return true;
    }
    return false;
  }
}

const received = Validator.validateUsername('G3333');

console.log(received);
