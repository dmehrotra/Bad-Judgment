var json;
$(document).ready(function() {
    var json;
    var form = document.getElementById('uploadForm');
    var fileSelect = document.getElementById('file');
    
    form.onsubmit = function(event) {
        event.preventDefault();
        var file = fileSelect.files[0];
      // Create a new FormData object.
        var formData = new FormData();
      // Update button text.
      
          // Add the file to the request.
        formData.append('fbdata', file, file.name);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/upload', true);
        xhr.onload = function () {
          if (xhr.status === 200) {   
          } else {
            alert('An error occurred!');
          }
        };
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          digest(xhr.responseText);
        }
    };
        xhr.send(formData);
        
    }     

var digest = function(res){
   var parsed = JSON.parse(res);
  debugger;
}

});