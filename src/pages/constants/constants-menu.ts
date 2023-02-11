export type TMenu = {
    id: string
    name: string
    amount?: number
    category: string
}
export const booksCategories: TMenu[] = [
    {id: '0', name: 'Все книги', category: 'all'},
    {id: '1', name: 'Бизнес-книги', amount: 14, category: 'business'},
    {id: '2', name: 'Детективы', amount: 8, category: 'detectives'},
    {id: '3', name: 'Детские книги', amount: 14, category: 'children'},
    {id: '4', name: 'Зарубежная литература', amount: 2, category: 'foreign'},
    {id: '5', name: 'История', amount: 5, category: 'history'},
    {id: '6', name: 'Классическая литература', amount: 12, category: 'classical'},
    {id: '7', name: 'Книги пo психологии', amount: 11, category: 'psychology'},
    {id: '8', name: 'Компьютерная литература', amount: 54, category: 'computer'},
    {id: '9', name: 'Культура и искусство', amount: 5, category: 'culture'},
    {id: '10', name: 'Наука и образование', amount: 2, category: 'science'},
    {id: '11', name: 'Публицистическая литература', amount: 0, category: 'public'},
    {id: '12', name: 'Справочники', amount: 10, category: 'references'},
    {id: '13', name: 'Фантастика', amount: 12, category: 'fantastic'},
    {id: '14', name: 'Юмористическая литература', amount: 8, category: 'comic'},
];
