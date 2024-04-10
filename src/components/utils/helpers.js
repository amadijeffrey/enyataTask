export const validateEmail = (emailAddress) => {
    const emailPattern =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/;
    return emailPattern.test(emailAddress);
  };
  
  export const validatePassword = (password) => {
  const requirements = {
      length: password?.length >= 8,
      containsNumber: /\d/.test(password),
      containsUppercase: /[A-Z]/.test(password),
      containsSymbol: /[-!@#$%^&*()_+]/.test(password),
    };
  
    return requirements;
  }

 export  const verifySelectedStatus = (obj) => {
    const keys = Object.keys(obj);
    for (const key of keys) {
      if(obj[key] === ""){
        return false
      } ;
     return true
    }
  }

  export function isPasswordValid(password) {
    if (password.length < 8) {
      return false;
    }
  
    const containsLetter = /[a-zA-Z]/.test(password);
    const containsNumber = /\d/.test(password);
  
    return containsLetter && containsNumber;
  }
