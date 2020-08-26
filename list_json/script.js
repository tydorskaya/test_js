var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var users = JSON.parse(this.responseText);
        console.log(users);
    }
};
xmlhttp.open("GET", "users.json", true);
xmlhttp.send();

function load() {
    
    
    //var users = [];

    /*var user = document.getElementById('user');

    if(users.length <= 0){
        let error_row = document.createElement('div');
        error_row.className = 'col-sm-12';
        error_row.textContent = 'К сожалению при загрузке произошла ошибка';
        user.append(error_row);
    }else{
        /!*users.forEach(function (user) {
            let user_row = document.createElement('div');
            user_row.className = 'col';
            for (var i = 0; i< user.length; i++){
                user_row.textContent = user[i];
                user.append(user_row);
            }
        })*!/
    }*/
}



