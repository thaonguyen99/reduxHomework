import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../../redux/actions";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    number: "",
    checkbox: false,
  });

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setValues({
      ...values,
      [name]: value,
      [type]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(values.number));
    setErrors(validate(values));
    setIsSubmitting(true);
    console.log(values);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors, isSubmitting };
};

export default useForm;
