function loaded() {
    var allSelect = document.querySelectorAll('select');

    if(allSelect){
        allSelect.forEach(function (select, indexSelect) {
            var allOption = [];
            var selected = select.selectedIndex;
            for (var i = 0; i < select.options.length; i++) {
                var classItem = selected === i ? "select_item selected" : "select_item";
                var obj = {index: null, value: '', text: '' , html: ''};
                obj.index = i;
                obj.value = select.options[i].value;
                obj.text = select.options[i].innerHTML;
                obj.html = '<div onclick="clickOption(this)" class="' + classItem + '" data-value="'+ obj.value +'">' + obj.text + '</div>';
                allOption.push(obj);
            }
      
            var selectedOption = allOption[selected].text;
            
            let resultSelect = document.createElement('div');
            resultSelect.className = "select_styling";
            var idSelect = select.id ? select.id : '';
            resultSelect.id = idSelect;

            var dropListString = "";
            for (var i = 0; i < allOption.length; i++) {
                dropListString += allOption[i].html;
            }
            var dropContainer = '<div class="drop_option">' + dropListString + '</div>';
            
            resultSelect.innerHTML = '<div class="selected_option" onclick="dropdown(this)">' + selectedOption + '</div>' +
                dropContainer;

            select.replaceWith(resultSelect);
        })
    }
}
function dropdown(el) {
    document.querySelectorAll('div.select_styling').forEach(function (select, index) {
        select.firstChild.classList.remove('is-focused');
    });
    el.classList.contains("is-focused") ? el.classList.remove('is-focused') : el.classList.add('is-focused');
}

function clickOption(el) {
    var allOption = el.parentNode.childNodes;
    el.querySelectorAll('div.select_styling');
    var obj = {id: null, value: '', text: '', idParent: ''};
    obj.value = el.dataset.value;
    obj.text = el.innerHTML;
    obj.idParent = el.parentNode.parentNode.id;

    for (var i = 0; i < allOption.length; i++) {
        if (allOption[i] === el) {
            obj.id = i;
        }
    }

    for (var i = 0; i < el.parentNode.childNodes.length; i++) {
        el.parentNode.childNodes[i].classList.remove('selected');
    }

    el.classList.add('selected');

    console.log(obj);
}

document.onclick = function (event) {
    if(event.target.closest('div.select_styling')){
        return;
    }else{
        document.querySelectorAll('div.select_styling').forEach(function (select, index) {
            select.firstChild.classList.remove('is-focused');
        });
    }
}