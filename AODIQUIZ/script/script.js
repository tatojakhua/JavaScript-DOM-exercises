// 1. მოცემული გვერდიდან ამოიღე ლოგინი და პაროლი ჯავასკრიპტში მიიღე (input-ის) მათი მნიშვნელობები,
// 2. მოცემული მნიშნველობები შეინახე ლოკალურ მეხსიერებაში(local storage) მასივში ჩასმული ობიექტის სახით
// 3. მოაწყვე კოდი ისე, რომ ლოგინისა და პარლის თითოეულ შეყვანაზე ახალი ობიექტი დაემატოს ლოკალურ მეხსიერებაში.
// usersLoginLogger => [
//     {
//         username: "random1",
//         password: "random2"
//     },
//     {
//         username: "random3",
//         password: "random4"
//     }
// ]

function userInfoFun() {
  const username = document.getElementById("username").value;
  const userSurname = document.getElementById("userSurname").value;

  const usersLoginLogger = JSON.parse(
    localStorage.getItem("usersLoginLogger") || "[]"
  );

  console.log(usersLoginLogger);

  const newLog = {
    username: username,
    userSurname: userSurname,
  };

  usersLoginLogger.push(newLog);

  localStorage.setItem("usersLoginLogger", JSON.stringify(usersLoginLogger));
}
