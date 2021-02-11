const validateFN = () => {
  const firstName = document.querySelector('#firstName')
  const regex = /^[a-zA-Z]{1,30}$/
  if (!regex.test(firstName.value)) {
    firstName.classList.add('is-invalid')
    firstName.classList.remove('is-valid')
  } else {
    firstName.classList.add('is-valid')
    firstName.classList.remove('is-invalid')
  }
}

const validateLN = () => {
  const lastName = document.querySelector('#lastName')
  const regex = /^[a-zA-Z]{0,30}$/
  if (lastName.value === '') $('#lastName .valid-feedback').text('')
  else {
    if (!regex.test(lastName.value)) {
      lastName.classList.add('is-invalid')
      lastName.classList.remove('is-valid')
    } else {
      lastName.classList.add('is-valid')
      lastName.classList.remove('is-invalid')
    }
  }
}

const validateEmail = () => {
  const email = document.querySelector('#email')
  const regex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-z0-9_\.\-]+)\.[a-zA-Z]{2,5}$/
  if (!regex.test(email.value)) {
    email.classList.add('is-invalid')
    email.classList.remove('is-valid')
  } else {
    email.classList.add('is-valid')
    email.classList.remove('is-invalid')
  }
}

const validatePN = () => {
  const phoneNumber = document.querySelector('#phoneNumber')
  const regex = /^\d{3,4}\d{3,4}\d{4}$/
  if (!regex.test(phoneNumber.value)) {
    phoneNumber.classList.add('is-invalid')
    phoneNumber.classList.remove('is-valid')
  } else {
    phoneNumber.classList.add('is-valid')
    phoneNumber.classList.remove('is-invalid')
  }
}

const validateMessage = () => {
  const textMessage = document.querySelector('#textMessage')
  const regex = /^[a-zA-Z0-9$-/:-@{-~!"#^_` \[\]]{0,150}$/
  if (textMessage.value === '') $('#textMessage .valid-feedback').text('')
  else {
    if (!regex.test(textMessage.value)) {
      textMessage.classList.add('is-invalid', 'custom-is-invalid')
      textMessage.classList.remove('is-valid', 'custom-is-valid')
    } else {
      textMessage.classList.add('is-valid', 'custom-is-valid')
      textMessage.classList.remove('is-invalid', 'custom-is-invalid')
    }
  }
}

const validateFile = () => {
  const files = document.querySelector('#files')
  const regex = /\.(png|jpe?g|gif|pdf|doc?x|txt|zip|rar)$/i
  if (files.value == '') $('#files .valid-feedback').text('')
  else {
    if (!regex.test(files.value)) {
      files.classList.add('is-invalid')
      files.classList.remove('is-valid')
    } else {
      files.classList.add('is-valid')
      files.classList.remove('is-invalid')
    }
  }
}

const validationForm = () => {
  if (!$('#firstName, #lastName, #email, #phoneNumber, #textMessage, #files').not('.is-valid').length) {
    $('#submitBtn').prop('disabled', false)
    $('#submitBtn').removeClass('disabled-submit')
  } else {
    $('#submitBtn').prop('disabled', true)
    $('#submitBtn').addClass('disabled-submit')
  }
}

$(function () {
  setInterval(validationForm, 1000);
});

$('#firstName').bind('blur', validateFN)
$('#lastName').bind('blur', validateLN)
$('#email').bind('blur', validateEmail)
$('#phoneNumber').bind('blur', validatePN)
$('#textMessage').bind('blur', validateMessage)
$('#files').bind('change', validateFile)
