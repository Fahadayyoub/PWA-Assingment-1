console.log('find')


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});

// Or with jQuery

$(document).ready(function () {
    $('.sidenav').sidenav();
});
function getuser() {
    fetch('https://api.github.com/users/:Fahadayyoub')
        .then(function (result) {
            console.log(result);
            return result.json();
        })
        .then(function (user) {
            console.log(user);
            for (var i = 0; i < user.length; i++) {
              var main =document.getElementById('table_inner');
             var tr =document.createElement('tr');
             var td =document.createElement('td');
             var td1 =document.createElement('td')
             var td2 =document.createElement('td')
             var td3 =document.createElement('td')
             var td4 =document.createElement('td')
             var th = document.createElement('th');
              th.setAttribute("scope", "col");
              th.textContent = user[i].id;
              td1.textContent = user[i].url;
              td2.textContent = user[i].type;
              td3.textContent = user[i].site_admin;
              td4.innerHTML = '<img src="'+ user[i].avatar_url +'" width=50px height=50px />'
            main.appendChild(tr);
            tr.appendChild(th);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            
            
          
            }
        })
        .catch(function (error) {
            console.log(error);
        })
  }