export default class Filtres{
    constructor() {
        this.form = document.getElementById('filters');
        this.btn = document.getElementById('search');
    }

    onClick(callback){
        this.btn.onclick = (e)=>{
            e.preventDefault();
            const data = new FormData(this.form); //Sacar datos a partir de un formulario
            callback({
                type:data.get('type'),
                words:data.get('words'),
            });
        }
    }
}