var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}

function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

if(performance.navigation.type == performance.navigation.TYPE_RELOAD ||
  performance.navigation.type == performance.navigation.TYPE_NAVIGATE) {
  var curr_page = localStorage.getItem("reload_state_var");
  if( curr_page == "1" ) {
      document.getElementById('Form_content').style.display = 'block';
      document.getElementById('Results_content').style.display = 'none';
      document.getElementById('Dashboard_content').style.display = 'none';
  }
  else if( curr_page == "2" ) {
      document.getElementById('Form_content').style.display = 'none';
      document.getElementById('Results_content').style.display = 'block';
      document.getElementById('Dashboard_content').style.display = 'none';
  }
  else if( curr_page == "3" ){
      document.getElementById('Dashboard_content').style.display = 'block';
      document.getElementById('Form_content').style.display = 'none';
      document.getElementById('Results_content').style.display = 'none';
  }
}

/* Added by Samarth Halyal */
document.getElementById('Form_link')
        .addEventListener('click', function (event) {
            document.getElementById('Form_content').style.display = 'block';
            document.getElementById('Results_content').style.display = 'none';
            document.getElementById('Dashboard_content').style.display = 'none';
            localStorage.setItem("reload_state_var", 1);
        });

document.getElementById('Results_link')
        .addEventListener('click', function (event) {
            document.getElementById('Form_content').style.display = 'none';
            document.getElementById('Results_content').style.display = 'block';
            document.getElementById('Dashboard_content').style.display = 'none';
            localStorage.setItem("reload_state_var", 2);
        });

document.getElementById('Dashboard_link')
        .addEventListener('click', function (event) {
            document.getElementById('Dashboard_content').style.display = 'block';
            document.getElementById('Form_content').style.display = 'none';
            document.getElementById('Results_content').style.display = 'none';
            localStorage.setItem("reload_state_var", 3);
});

function clickResults() {
  document.getElementById('Results_link').click();
  localStorage.setItem("reload_state_var", 2);
}

function toggleHypertension() {
  var x = document.getElementById("hrp-form");
  if(x.style.display == "none") {
    document.getElementById("toggleHypertensionButton").textContent = "-";
    document.getElementById("toggleDiabetesButton").textContent = "+";
    document.getElementById("toggleStrokeButton").textContent = "+";
    x.style.display = "block";
    document.getElementById("hrp-form-s").style.display = "none";
    document.getElementById("hrp-form-d").style.display = "none";
  } else {
    document.getElementById("toggleHypertensionButton").textContent = "+";
    x.style.display = "none";
  }
}

function toggleStroke() {
  var x = document.getElementById("hrp-form-s");
  if(x.style.display == "none") {
    document.getElementById("toggleStrokeButton").textContent = "-";
    document.getElementById("toggleHypertensionButton").textContent = "+";
    document.getElementById("toggleDiabetesButton").textContent = "+";
    x.style.display = "block";
    document.getElementById("hrp-form").style.display = "none";
    document.getElementById("hrp-form-d").style.display = "none";
  } else {
    document.getElementById("toggleStrokeButton").textContent = "+";
    x.style.display = "none";
  }
}

function toggleDiabetes() {
  var x = document.getElementById("hrp-form-d");
  if(x.style.display == "none") {
    document.getElementById("toggleDiabetesButton").textContent = "-";
    document.getElementById("toggleStrokeButton").textContent = "+";
    document.getElementById("toggleHypertensionButton").textContent = "+";
    x.style.display = "block";
    document.getElementById("hrp-form-s").style.display = "none";
    document.getElementById("hrp-form").style.display = "none";
  } else {
    document.getElementById("toggleDiabetesButton").textContent = "+";
    x.style.display = "none";
  }
}

