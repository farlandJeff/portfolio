const landingBtn = document.querySelector('.landingbtn');
const homeNav = document.querySelector('.home-link');
const aboutNav = document.querySelector('.about-link');
const projectsNav = document.querySelector('.projects-link');
const contactNav = document.querySelector('.contact-link');

// Landing Page Button
landingBtn.addEventListener('click', () => {
    document.querySelector('.navBar').scrollIntoView();
});

// Nav Bar Links
homeNav.addEventListener('click', () => {
    document.querySelector('.landing').scrollIntoView();
});

aboutNav.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView();
});

projectsNav.addEventListener('click', () => {
    document.querySelector('#projects').scrollIntoView();
});

contactNav.addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView();
});

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.querySelector(".submit-error");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)