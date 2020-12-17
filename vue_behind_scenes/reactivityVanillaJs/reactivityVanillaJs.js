//A very simple demostration of the use of proxy in vanilla js
//this proxy objetct create its a wrapper of the data object
//that add the posibility of updating the variables in a reactive form

const data = {
  message: "hello!",
  longMessage: "hello! world!",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " World!";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Hellooooo!";

console.log(proxy.longMessage);
