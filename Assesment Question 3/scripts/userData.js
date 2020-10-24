//2 Classes: 1 to represent the entity, another to represent the collection of entities. 
let User = function(id, name, address) {
    this.userId = id;
    this.userName = name;
    this.userAddress = address;
}

let userManager = function() {
    this.userData = [];

    this.addUser = function(user) {
        this.userData.push(user);
        //alert("User added successfully to the database");
    }



    this.getAll = function() {
        return this.userData; //returns all the data from the store....
    }
}