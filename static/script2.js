buttonsAreOn = true

function toggleCheckboxes() {
  var inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].type == "checkbox") {
            inputs[i].checked = !buttonsAreOn;
      }
  }

  buttonsAreOn = !buttonsAreOn;
  
}
