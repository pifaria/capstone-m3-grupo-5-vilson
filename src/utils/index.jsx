export const formatDate = (dateString) => {
  const array = dateString.split("-")
  return `${array[2]}/${array[1]}/${array[0]}`
}

export const numberFormatter = (number) =>
  Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    Number(number)
  );

export const formatDate2 = (input) => {
  var datePart = input.match(/\d+/g),
    year = datePart[0].substring(2),
    month = datePart[1], day = datePart[2];
  return day + '/' + month + '/' + year;
}


export const typeTranslate = (type) => {
  let response = "any"
  switch (type) {
    case "marriage":
      response = "Casamento"
      break;
    case "essay":
      response = "Ensaio"
      break;
    case "children":
      response = "Ensaio infantil"
      break;
    case "newborn":
      response = "Ensaio de recém-nascido"
      break;
    case "fashion":
      response = "Moda"
      break;
    case "publicity":
      response = "Publicidade"
      break;
    default :
    break;
    } 
    return response
}