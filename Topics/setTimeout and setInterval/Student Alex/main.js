function showName(name) {
  return('Hello, student ' + name + '!');
}

const studentGreeting = setInterval(showName, 3000, 'Alex');
setTimeout(() => clearInterval(studentGreeting), 7000);