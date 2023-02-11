import bookCover from '../images/book.jpg';
import bookImageOne from '../images/1.jpg';
import bookImageTwo from '../images/2.jpg';
import bookImageThree from '../images/3.jpg';
import bookImageFour from '../images/4.jpg';
import bookImageFive from '../images/5.jpg';
import bookImageSix from '../images/6.jpg';
import userPhoto from '../images/user-photo.png';
import {booksCategories} from './constants-menu';

export type TDetailedInformation = {
    'publishing office': string
    'the year of publishing': number
    'pagesAmount': number
    'binding': string
    'size': string
    'genre': string
    'weight': string
    'ISBN': string
    'manufacturer': string
}

export type TBooks = {
    bookId?: string
    cover?: Array<{ id: number, img: string }>
    rating?: number
    bookName?: string
    bookAuthor?: string
    status?: 'inStock' | 'isUsed' | 'booked'
    averageRating?: null | number
    detailedInformation?: TDetailedInformation
    feedbacks?: TFeedback[]
    category?: string

}

export const detailedInformationObject = {
    'publishing office': 'Питер',
    'the year of publishing': 2019,
    'pagesAmount': 288,
    'binding': 'Мягкая обложка',
    'size': '70х100',
    'genre': 'Компьютерная литература',
    'weight': '370 г',
    'ISBN': '978-5-4461-0923-4',
    'manufacturer': 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29'
};

export type TFeedback = {
    id?: string | null
    userPhoto?: string
    userName?: string | null
    data?: string | null
    rating?: null | number
    feedbackText?: null | string
}
export const feedbacksArray: TFeedback[] = [
    {
        id: '1',
        userPhoto,
        userName: 'Иван Иванов',
        data: '5 января 2019',
        rating: 4.3,
        feedbackText: null
    },
    {
        id: '2',
        userPhoto,
        userName: 'Николай Качков',
        data: '20 июня 2018',
        rating: 4.3,
        feedbackText: 'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.'
    },
    {
        id: '3',
        userPhoto,
        userName: 'Екатерина Беляева',
        data: '18 февраля 2018',
        rating: 4.3,
        feedbackText: null
    },

];

export const booksArray: TBooks[] = [
    {
        bookId: '1',
        cover: undefined,
        rating: 4,
        bookName: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих.',
        bookAuthor: 'Адитья Бхаргава, 2019',
        status: 'inStock',
        averageRating: 4.2,
        detailedInformation: detailedInformationObject,
        feedbacks: feedbacksArray,
        category: booksCategories[8].category
    },
    {
        bookId: '2',
        cover: [{id: 0, img: bookCover}],
        rating: 4,
        bookName: 'Грокаем алгоритмы. Иллюстрированное',
        bookAuthor: 'Адитья Бхаргава, 2019',
        status: 'inStock',
        averageRating: 4.3,
        detailedInformation: detailedInformationObject,
        feedbacks: feedbacksArray,
        category: booksCategories[8].category
    },
    {
        bookId: '3',
        cover: [{id: 0, img: bookCover}, {id: 1, img: bookImageOne}],
        rating: 4,
        bookName: 'Грокаем алгоритмы. ',
        bookAuthor: 'Адитья Бхаргава, 2019',
        status: 'isUsed',
        averageRating: 4.3,
        detailedInformation: detailedInformationObject,
        feedbacks: feedbacksArray,
        category: booksCategories[8].category
    },
    {
        bookId: '4',
        cover: [{id: 0, img: bookCover}, {id: 1, img: bookImageOne}, {id: 2, img: bookImageTwo}],
        rating: 4,
        bookName: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих.',
        bookAuthor: 'Адитья Бхаргава, 2019',
        status: 'inStock',
        averageRating: 4.3,
        detailedInformation: detailedInformationObject,
        feedbacks: feedbacksArray,
        category: booksCategories[8].category
    },
    {
        bookId: '5',
        cover: [{id: 0, img: bookCover}, {id: 1, img: bookImageOne}, {id: 2, img: bookImageTwo}, {id: 3, img: bookImageThree}],
        rating: 4,
        bookName: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
        bookAuthor: 'Адитья Бхаргава, Патрик Нимейер, 2019',
        status: 'booked',
        averageRating: 4.3,
        detailedInformation: detailedInformationObject,
        feedbacks: feedbacksArray,
        category: booksCategories[8].category
    },
    {
        bookId: '6',
        cover: undefined,
        rating: undefined,
        bookName: 'Грокаем алгоритмы. Иллюстрированное',
        bookAuthor: 'Адитья Бхаргава, Патрик Нимейер, 2019',
        status: 'isUsed',
        averageRating: null,
        detailedInformation: detailedInformationObject,
        feedbacks: [],
        category: booksCategories[8].category
    },
    {
        bookId: '7',
        cover: [{id: 0, img: bookCover}, {id: 1, img: bookImageOne}, {id: 2,img: bookImageTwo},
            {id: 3, img: bookImageThree}, {id: 4, img: bookImageFour},
            {id: 5,img: bookImageFive}],
        rating: 4,
        bookName: 'Грокаем алгоритмы.',
        bookAuthor: 'Адитья Бхаргава, Патрик Нимейер, 2019',
        status: 'inStock',
        averageRating: 4.3,
        detailedInformation: detailedInformationObject,
        feedbacks: feedbacksArray,
        category: booksCategories[8].category
    },
    {
        bookId: '8',
        cover: [{id: 0, img: bookCover}, {id: 1, img: bookImageOne}, {id: 2,img: bookImageTwo},
            {id: 3, img: bookImageThree}, {id: 4, img: bookImageFour},
            {id: 5,img: bookImageFive}],
        rating: 4,
        bookName: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
        bookAuthor: 'Адитья Бхаргава, Патрик Нимейер, 2019',
        status: 'inStock',
        averageRating: 4.3,
        detailedInformation: detailedInformationObject,
        feedbacks: feedbacksArray,
        category: booksCategories[8].category
    },
    {
        bookId: '9',
        cover: [{id: 0, img: bookCover}, {id: 1, img: bookImageOne}, {id: 2,img: bookImageTwo},
            {id: 3, img: bookImageThree}, {id: 4, img: bookImageFour},
            {id: 5,img: bookImageFive}, {id: 6, img: bookImageSix}],
        rating: 4,
        bookName: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        bookAuthor: 'Адитья Бхаргава, 2019',
        status: 'inStock',
        averageRating: 4.3,
        detailedInformation: detailedInformationObject,
        feedbacks: feedbacksArray,
        category: booksCategories[8].category
    },
    {
        bookId: '10',
        cover: undefined,
        rating: 4,
        bookName: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        bookAuthor: 'Адитья Бхаргава, 2019',
        status: 'inStock',
        averageRating: 4.3,
        detailedInformation: detailedInformationObject,
        feedbacks: feedbacksArray,
        category: booksCategories[8].category
    }
];


