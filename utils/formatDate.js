// formats the date with the parameter Date object and returns a string mm/dd/yyyy
const formatDate = (Timestamp) => {
    return `${Timestamp.getMonth()}/${Timestamp.getDate()}/${Timestamp.getFullYear()} at ${Timestamp.getHours()}:${Timestamp.getMinutes()} (24hr time).`;
}

module.exports = formatDate;