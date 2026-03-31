console.log('succsesful')

function verify() {
    const UserID = document.getElementById("userId").value
    const Password = document.getElementById("password").value
    const UserKey = UserID + "&" + Password
    
    const wasfound = Users.some(user => user.key === UserKey)
    
    if (wasfound === true){
        location.href = './home.html'
    } else {
        alert("ユーザIDまたはパスワードが違います")
    }
}