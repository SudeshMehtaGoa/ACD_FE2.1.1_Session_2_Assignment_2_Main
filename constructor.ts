/* Class */
class User {

    /* Private Variables */
    private _strUserName: string;
    private _numUserBirthDate: number;
    
    /* Constructor which sets value to private variables */
    constructor(strUserName: string, numUserBirthDate: number) {
        this._strUserName = strUserName;
        this._numUserBirthDate = numUserBirthDate;
    }

    /* Function uses backtick/backquote and embedded expressions */
    public funcUserAge() : string {
        let strMessage :string;
        strMessage=`Hello ${this._strUserName} , your age is ${(new Date().getFullYear())-this._numUserBirthDate}`;
        return strMessage;
    }
}

/* Function called by button on HTML */
function giveUserAge () {

    // Define variables
    let strUsername : string;
    let numUserBirthDate : number;
    let strAgeMessage : string;

    //Read values from HTML
    strUsername = (<HTMLInputElement>document.getElementById("txtUserName")).value;
    numUserBirthDate = parseFloat((<HTMLInputElement>document.getElementById("txtUserBirthYear")).value);

    //Create class and call method
    let clsUser = new User(strUsername,numUserBirthDate);
    strAgeMessage = clsUser.funcUserAge();

    //display output in HTML
    (<HTMLInputElement>document.getElementById("lblMessage")).innerHTML = strAgeMessage;
}