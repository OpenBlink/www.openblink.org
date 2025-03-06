var editor = CodeMirror.fromTextArea(document.getElementById("ruby-code"), {
  mode: "ruby",
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true,
  autoCloseBrackets: true,
});
