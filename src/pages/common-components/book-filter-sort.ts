import {TBooksGenresType, TBooksType} from '../../services/book-service-types';
import {useParams} from 'react-router-dom';
export type TProps = {
    dataBooks: TBooksType[]
    dataCategories: TBooksGenresType[]
    isDefaultSort: boolean
    enteredText: string
}

export const bookFilterSort: ({
    dataBooks,
    dataCategories,
    isDefaultSort,
    enteredText
}: { dataBooks: any; dataCategories: any; isDefaultSort: any; enteredText: any }) => [any[], TBooksType[], TBooksType[]] = ({dataBooks,
    dataCategories,
    isDefaultSort,
    enteredText}) => {
    const {category} = useParams();
    const selectedCategory = dataCategories.find((bookCategory: { path: string | undefined; }) => bookCategory.path === category);

    const filteredDataBooks: TBooksType[] = [...dataBooks].sort((a, b) => isDefaultSort ? b.rating - a.rating : a.rating - b.rating).filter((book) =>
        book.categories.find((categoryBook: any) => categoryBook === selectedCategory?.name)
    );
    const filteredDataAllBooks = [...dataBooks].sort((a, b) =>
        isDefaultSort ? b.rating - a.rating : a.rating - b.rating);

    const filteredDataAllBooksSearch = filteredDataAllBooks.filter((book) => book.title.toLowerCase().includes(enteredText.toLowerCase()))
    const filteredAndSearchBooks = filteredDataBooks.filter((book) => book.title.toLowerCase().includes(enteredText.toLowerCase()))
    return ([filteredDataAllBooksSearch, filteredAndSearchBooks, filteredDataBooks])
}



