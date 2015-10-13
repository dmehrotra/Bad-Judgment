var json;
var sessions;
var parsed_sessions = [];
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



});

var digest = function(res){  
  sessions=JSON.parse(res);
  return buildSessions(sessions);
}

var buildSessions = function(sessions){
  for (var i = 0; i <= sessions.length - 1; i++) {
    if (sessions[i] != undefined && sessions[i-1] != undefined){
      console.log(sessions[i].city);
      var session = new Session(sessions[i], sessions[i-1]);
      parsed_sessions.push(session);
      console.log(session.phrase.sentence);
    }  
    if (i == sessions.length - 1){
      $.each(parsed_sessions,function(i,v){
        $('ul').append('<li>'+v.phrase.sentence+'</li>');
      });
    } 
  }
 
};


