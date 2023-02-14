export const dateFuncReviews = (date: Date) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const year = newDate.getFullYear();
    const monthArray = ['января','февраля', 'марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']
    const month = newDate.getMonth();
    const monthString = monthArray[month]
    return `${day} ${monthString} ${year}`;
};
