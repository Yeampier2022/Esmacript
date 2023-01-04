function newUser(name, age, country) {
    var name = name || 'Yeampier'
    var age = age || 22;
    var country = country ||'VZ'
}

newUser()
newUser('Jesus', 22,  'Venezuela' )

function newAdmin(name = 'Yeampier', age = 32, country = 'Vz') {
    console.log(name, age, country);
}
newAdmin();
newAdmin('Jesus', 23, "VZ")