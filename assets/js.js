function copyemail() {

    const email = "claadbricar@gmail.com";
    const numero = "+56948780950";
    navigator.clipboard.writeText(email).then(() => {

      const notification = document.getElementById("notification-email");
      notification.style.display = "block";


      setTimeout(() => {
        notification.style.display = "none";
      }, 2000);
    });
  }
  function copynumero() {
    const numero = "+56948780950";

  navigator.clipboard.writeText(numero).then(() => {

      const notification = document.getElementById("notification-numero");
      notification.style.display = "block";

      setTimeout(() => {
        notification.style.display = "none";
      }, 2000);
    });
  }
