import {TBooksGenresType, TBooksType} from '../services/book-service-types';

type TArrObj = {
    [key: string]: TBooksType[]
}
type TModifiedCategory = {
     bookAmount: number
        name: string
        path: string
        id: number
    }

export const categoryAmountCount = (booksArray: TBooksType[], categoryArray: TBooksGenresType[]) => {
    const arrObj: TArrObj = {}

    categoryArray.map((category) => {
        const key: string = category.name;

        arrObj[key] = []

        booksArray.map((book) =>
            book.categories.map((categoryBook) =>
                categoryBook === category.name ? arrObj[key].push(book) : null) )

        return  arrObj[key].length
    })
    return arrObj


}
