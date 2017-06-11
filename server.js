var db = require('db');  // set NODE_PATH = .
var User = require('user'); // or put db in node_modules directory
var log = require('logger')(module);

function run() {
    var vasya = new User("Вася");
    var petya = new User("Петя");

    log(db.getPhrase('Run successful'));

    vasya.hello(petya);
}

if (module.parent)
{
    exports.run = run;
} else {
    run();
}
