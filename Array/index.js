//CREATE ARRAY FROM SCRATCH
class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item
        this.length++
    }

    pop(){
        const lastiItem = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--;
        return lastiItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index){
        for(let i = index; i< this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push(10);
newArray.push(30);
newArray.push(50);
console.log(newArray);
console.log(newArray.length);
newArray.delete(1);
console.log(newArray);





