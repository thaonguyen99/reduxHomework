export default function validateForm(values) {
  let errors = {};
  const phoneRegex = /^[0-9\b]+$/;
  if (!values.number) {
    errors.number = "*Please enter your phone number";
  } else if (!phoneRegex.test(values.number)) {
    errors.number = "*Phone number contains only digits";
  } else if (values.number.length < 9 || values.number.length > 11) {
    errors.number = "*Phone number contains 9-11 digits";
  }

  if (!values.checkbox) {
    errors.checked = "*Please agree to our terms and conditions";
  }
  // console.log(errors, values.number, values.checkbox);
  return errors;
}
