const defaultRubyCode = `# RGB LED Blinking Example
while true do
  # Red
  LED.set([255, 0, 0])
  sleep 1

  # Green
  LED.set([0, 255, 0])
  sleep 1

  # Blue
  LED.set([0, 0, 255])
  sleep 1

  # Check if reload is requested
  # This line is crucial in OpenBlink applications. It allows the program to gracefully exit
  # the current execution loop when a code reload is requested through the Bluetooth interface.
  # Without this check, the program would continue running and ignore reload requests,
  # making development and debugging difficult. This mechanism enables the "Blink" feature -
  # the ability to update code wirelessly in less than 0.1 seconds without restarting the microprocessor.
  break if Blink.req_reload?
end
`;

var editor = CodeMirror.fromTextArea(document.getElementById("ruby-code"), {
  mode: "ruby",
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true,
  autoCloseBrackets: true,
});

editor.getDoc().setValue(defaultRubyCode);
