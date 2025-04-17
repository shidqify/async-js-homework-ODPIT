const userDB = {
  username: 'joko',
  passsword: 'rahasia',
  role: 'admin'
};

const loginUser = (inputUsername, inputPassword, cb) => {
  setTimeout(() => {
    if (
      inputUsername === userDB.username &&
      inputPassword === userDB.passsword
    ) {
      cb(null, userDB);
    } else {
      cb('Username or password is wrong');
    }
  }, 500);
};

const getRole = (user, cb) => {
  setTimeout(() => {
    if (user.role) {
      cb(null, user.role);
    } else {
      cb('Role not found');
    }
  }, 500);
};

const getMenu = (role, cb) => {
  setTimeout(() => {
    if (role === 'admin') {
      cb(null, 'admin dashboard');
    } else {
      cb(null, 'dashboard');
    }
  }, 500);
};


module.exports.runMenu = () => {
  loginUser('joko', 'rahasia', (err, user) => {
    if (err) return console.log('Login failed:', err);
  
    getRole(user, (err, role) => {
      if (err) return console.log('Failed to get role:', err);
  
      getMenu(role, (err, menu) => {
        if (err) return console.log('Failed to get to the menu:', err);
  
        console.log(`Login success, getting access to: ${menu}`);
      });
    });
  });
}

