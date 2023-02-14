export const dateFunc = (date: Date) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    let month = (newDate.getMonth() + 1).toString();
    if (+month < 10) month = `0${month}`;
    return `${day}.${month}`;
};
