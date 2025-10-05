/* 

{
title:[
{}
]
}


*/
export default function Validate(data, rules) {
  let errors = {};
  Object.keys(data).some((name) => {
    if (!(name in rules)) {
      errors[name] = "Invalid Field!";
      return true;
    }
    let fieldRules = rules[name];
    if (fieldRules?.minL && data[name].length < fieldRules?.minL) {
      errors[name] = name + " is required!";
      return true;
    }
    if (fieldRules?.maxL && data[name].length > fieldRules?.maxL) {
      errors[name] = "Title too long!";
      return true;
    }
    if (
      fieldRules?.type &&
      fieldRules.type === "number" &&
      !/^\d+$/.test(data[name])
    ) {
      errors[name] = "Invalid Input!";
      return true;
    }
  });
  return errors;
}
