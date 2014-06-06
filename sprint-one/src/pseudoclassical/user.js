/* Combination Constructor/Prototype Pattern  -----> this is basically the PseudoClassical method*/

function User (theName, theEmail) {
/*
The following lines initialize the instance properties. These properties will be defined on each User instance that is created.
So the values will be different for each user. The use of the this keyword inside the function specifies that these properties
will be unique to every instance of the User object.
*/
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
}


/* In the code below, we are overwriting the prototype property with an object literal,
and we define all of our methods (that will be inherited by all the User instances) in this object.

This way of overwriting the constructor is simply for convenience, so we don’t have to write User.prototype each time, like this:

    User.prototype.constructor = User;
    User.prototype.saveScore = function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    };

    User.prototype.showNameAndScores = function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    };

    User.prototype.changeEmail =  function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }

Every function has a constructor property, and this property points to the constructor of the function.
The one disadvantage of overwriting the prototype is that the constructor property no longer points to the prototype, so we have to set it manually.
*/
User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd);
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
};