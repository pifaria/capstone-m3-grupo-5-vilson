export const formatDate2 = (dateString) => {
    const array = dateString.split("-")
    return `${array[2]}/${array[1]}/${array[0]}`
}

export const numberFormatter = (number) =>
Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
  Number(number)
);

export const formatDate = (input) => {
    var datePart = input.match(/\d+/g),
    year = datePart[0].substring(2),
    month = datePart[1], day = datePart[2];
    return day+'/'+month+'/'+year;
}