let userName = {
 firstName: "John"
}

function func() {
 console.log( this.firstName );
}

let funUser = func.bind( userName );
funUser();