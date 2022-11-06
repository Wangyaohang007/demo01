$(function () {
  $('#footer').hide()

  $('.item').eq(0).on('blur', 'input', function () {
    const phone = $(this).val()
    if (phone == '') return
    $(this).siblings('span').hide()
    if (/^1[3-9]\d{9}$/.test(phone)) {
      $(this).removeClass('err').siblings('.ok').show()
    } else {
      $(this).removeClass('ok').siblings('.err').show()
    }
  })

  $('.item').eq(1).on('blur', 'input', function () {
    const pwd = $(this).val().length
    if (pwd == '') return
    $(this).siblings('span').hide()
    if (pwd >= 6 && pwd <= 12) {
      $(this).removeClass('err').siblings('.ok').show()
    } else {
      $(this).removeClass('ok').siblings('.err').show()
    }
  })

  $('.item').eq(2).on('blur', 'input', function () {
    const pwd1 = $(this).val()
    const pwd2 = $('.item:eq(1)>input').val()
    if (pwd1 == '') return
    $(this).siblings('span').hide()
    if (pwd1 == pwd2) {
      $(this).removeClass('err').siblings('.ok').show()
    } else {
      $(this).removeClass('ok').siblings('.err').show()
    }
  })

  $('.item').on('focus', 'input', function () {
    $(this).removeClass('err').siblings().hide()
  })

  $('button:contains(注册)').click(function () {
    $('input.err').addClass('animate__animated animate__headShake')
  })
  $('.item>input').on('animationend', function () {
    $(this).removeClass('animate__headShake')
  })
})