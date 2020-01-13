import Helper from "@ember/component/helper";

export function round(number) {
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + "k";
  } else {
    return number;
  }
}

export default Helper.helper(round);
