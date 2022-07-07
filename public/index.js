const worker = new Worker("/worker.js");
worker.postMessage({
  question: "The Answer to the Ultimate Question of Life, The Universe, and Everything.",
});
worker.onmessage = ({ data: { answer } }) => {
  console.log(answer);
};
