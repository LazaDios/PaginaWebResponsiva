import alert from './alert.js';
export default class Modal {
    constructor() {
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.btn = document.getElementById('modal-btn');
        this.completed = document.getElementById('modal-completed');
        this.todo = null;
        this.alert = new alert('modal-alert');
    }
    setValues(todo) {
        this.todo = todo; //para guardar id , dentro esta variable
        this.title.value = todo.title;
        this.description.value = todo.description;
        this.completed.checked = todo.completed;
    }

    onClick(callback) {
        this.btn.onclick = () => {
            if (!this.title.value || !this.description.value) {
                this.alert.show('ingrese Valores en los campos');
                return;

            }
            //Ocultar
            $('#modal').modal('toggle');

            callback(this.todo.id, {
                title: this.title.value,
                description: this.description.value,
                completed: this.completed.checked,
            });
        }

    }
}