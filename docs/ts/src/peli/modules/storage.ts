export default class Storage{
    id:number;
    constructor(){
        this.id = 1;
    }
    getData(){
        let pelisJson = localStorage.getItem('pelis');
        let pelis = (pelisJson !== null) ? JSON.parse(pelisJson) : null;

        if(!pelis || pelis.lenght < 1){
            pelis = [
                {
                    id:0,
                    title: "asdadsa",
                    description: "dasdadsaldsa"
                }
            ];
            this.id=1;
        }else{
            this.id = pelis[pelis.length -1].id + 1;
        }
        return pelis;
    }
    getLastId(){
        return this.id;
    }
    save(data:any){
        localStorage.setItem('pelis', JSON.stringify(data));
    }
} 