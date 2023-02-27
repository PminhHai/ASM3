function handleRequestInfoForm() {
  const $form = document.querySelector('.request-info-form')

  const $formHelper = document.getElementById('email_helper_block')

  $form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (validateForm()) {
      toggleFormInfo()
    } else {
      $formHelper.classList.add('text-danger')
    }
  })

  function toggleFormInfo() {
    document.querySelector('.personal-info-wrapper').classList.remove('d-none')

    $form.classList.add('d-none')
  }

  function validateForm() {
    const inputValue = document.getElementById('email_input').value

    const validateRes =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        inputValue
      )

    if (!validateRes) {
      $formHelper.textContent = 'Email sai định dạng.'
    }

    return validateRes
  }
}

function showExp() {
  var button = document.querySelector('#view1')
  if (button.innerHTML === 'View more') {
    document.querySelector('.exp').classList.remove('d-none')
    document.querySelector('#view1').innerHTML = 'View less'
  } else {
    document.querySelector('.exp').classList.add('d-none')
    document.querySelector('#view1').innerHTML = 'View more'
  }
}

function showSchool() {
  var button = document.querySelector('#view2')
  if (button.innerHTML === 'View more') {
    document.querySelector('.school').classList.remove('d-none')
    document.querySelector('#view2').innerHTML = 'View less'
  } else {
    document.querySelector('.school').classList.add('d-none')
    document.querySelector('#view2').innerHTML = 'View more'
  }
}

function showAct() {
  var button = document.querySelector('#view3')
  if (button.innerHTML === 'View more') {
    document.querySelector('.act').classList.remove('d-none')
    document.querySelector('#view3').innerHTML = 'View less'
  } else {
    document.querySelector('.act').classList.add('d-none')
    document.querySelector('#view3').innerHTML = 'View more'
  }
}

function showHob() {
  var button = document.querySelector('#view4')
  if (button.innerHTML === 'View more') {
    document.querySelector('.hob').classList.remove('d-none')
    document.querySelector('#view4').innerHTML = 'View less'
  } else {
    document.querySelector('.hob').classList.add('d-none')
    document.querySelector('#view4').innerHTML = 'View more'
  }
}

function showLan() {
  var button = document.querySelector('#view5')
  if (button.innerHTML === 'View more') {
    document.querySelector('.lan').classList.remove('d-none')
    document.querySelector('#view5').innerHTML = 'View less'
  } else {
    document.querySelector('.lan').classList.add('d-none')
    document.querySelector('#view5').innerHTML = 'View more'
  }
}

function showSkill() {
  var button = document.querySelector('#view6')
  if (button.innerHTML === 'View more') {
    document.querySelector('.skill').classList.remove('d-none')
    document.querySelector('#view6').innerHTML = 'View less'
  } else {
    document.querySelector('.skill').classList.add('d-none')
    document.querySelector('#view6').innerHTML = 'View more'
  }
}
