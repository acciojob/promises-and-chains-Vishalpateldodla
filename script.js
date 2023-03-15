//your JS code here. If required.
function getObject() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: document.getElementById('name').value,
        age: Number(document.getElementById('age').value)
      });
    }, 4000);
  });
}

function extractAge(obj) {
  return Promise.resolve(obj.age);
}

function createMessage(age) {
  const name = document.getElementById('name').value;
  const message = age >= 18 ? `Welcome, ${name}. You can vote.` : `Oh sorry ${name}. You aren't old enough.`;
  return Promise.resolve({ message });
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  if (nameInput.checkValidity() && ageInput.checkValidity()) {
    getObject()
      .then(extractAge)
      .then(createMessage)
      .then(({ message }) => {
        alert(message);
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    alert('Please fill all the fields');
  }
});
