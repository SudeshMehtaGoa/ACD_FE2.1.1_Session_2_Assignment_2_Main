/* Class */
var User = (function () {
    /* Constructor which sets value to private variables */
    function User(strUserName, numUserBirthDate) {
        this._strUserName = strUserName;
        this._numUserBirthDate = numUserBirthDate;
    }
    /* Function uses backtick/backquote and embedded expressions */
    User.prototype.funcUserAge = function () {
        var strMessage;
        strMessage = "Hello " + this._strUserName + " , your age is " + ((new Date().getFullYear()) - this._numUserBirthDate);
        return strMessage;
    };
    return User;
}());
/* Function called by button on HTML */
function giveUserAge() {
    // Define variables
    var strUsername;
    var numUserBirthDate;
    var strAgeMessage;
    //Read values from HTML
    strUsername = document.getElementById("txtUserName").value;
    numUserBirthDate = parseFloat(document.getElementById("txtUserBirthYear").value);
    //Create class and call method
    var clsUser = new User(strUsername, numUserBirthDate);
    strAgeMessage = clsUser.funcUserAge();
    //display output in HTML
    document.getElementById("lblMessage").innerHTML = strAgeMessage;
}
