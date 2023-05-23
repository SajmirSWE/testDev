// Store subscriptions
let subscriptions = [];

// Function to add a subscription
function addSubscription() {
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const serviceInput = document.getElementById('serviceInput');
  const renewalDateInput = document.getElementById('renewalDateInput');

  const subscription = {
    name: nameInput.value,
    email: emailInput.value,
    service: serviceInput.value,
    renewalDate: renewalDateInput.value
  };

  subscriptions.push(subscription);

  displaySubscriptions();

  // Clear input fields
  nameInput.value = '';
  emailInput.value = '';
  serviceInput.value = '';
  renewalDateInput.value = '';
}

// Function to display subscriptions
function displaySubscriptions() {
  const subscriptionsUl = document.getElementById('subscriptionsUl');
  subscriptionsUl.innerHTML = '';

  subscriptions.forEach((subscription) => {
    const li = document.createElement('li');
    const nameSpan = document.createElement('span');
    const emailSpan = document.createElement('span');
    const serviceSpan = document.createElement('span');
    const renewalDateSpan = document.createElement('span');

    nameSpan.innerText = `Name: ${subscription.name}`;
    emailSpan.innerText = `Email: ${subscription.email}`;
    serviceSpan.innerText = `Service: ${subscription.service}`;
    renewalDateSpan.innerText = `Renewal Date: ${subscription.renewalDate}`;

    li.appendChild(nameSpan);
    li.appendChild(document.createElement('br'));
    li.appendChild(emailSpan);
    li.appendChild(document.createElement('br'));
    li.appendChild(serviceSpan);
    li.appendChild(document.createElement('br'));
    li.appendChild(renewalDateSpan);

    subscriptionsUl.appendChild(li);
  });
}
