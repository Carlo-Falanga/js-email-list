const ulEl = document.getElementById("list");
const btnRefreshEl = document.getElementById("js_btn_refresh");

function apiMail(){
  ulEl.innerHTML = '';
  let mailsArr = [];
  for (let i = 0; i < 10; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((resp) => {
        const apiMails = resp.data.response;
        mailsArr.push(apiMails);
  
        if (mailsArr.length === 10) {
          for (let i = 0; i < mailsArr.length; i++) {
            const mail = mailsArr[i];
            const markup = `<li>${mail}</li>`;
            ulEl.innerHTML += markup;
          }
        }
      });
    }

}


btnRefreshEl.addEventListener('click', apiMail);