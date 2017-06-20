;(function() {
  window.TaskManager = function(domEl) {
    this.id=0;
    
      domEl.addEventListener('click',function(e){
          if (e.target.tagName === "INPUT") {
              var e.target.getAttribute("data-count-id");
              var div = e.target.parentNode;
              div.classList.toggle("Complete");
//              var div = document.querySelector('[data-id-"'+id+'"]');
          }
      });
      
      TaskManager.prototype.addTask = function(name) {
          var task = new Task(name,this.id++);
          domEl.appendChild(task.render());
      }
}
    
    function Task(name,id) {
        this.name = name;
        this.complete = false;
        
        task.prototype.render = function() {
            var mainDiv = document.createElement('div');
            mainDiv.classList.add("task");
            mainDiv.setAttribute("data-id",id);
            var span = document.createElement('span');
            span.innerHTML = this.name;
            mainDiv.appendChild(span);
            var input = document.createElement('input');
            input.type = "checkbox";
             input.setAttribute("data-id",id);
            mainDiv.appendChild(input);
            return mainDiv;
        }
    }
  });