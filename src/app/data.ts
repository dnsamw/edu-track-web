export type ExamResult = {
    id:number,
    title:string,
    score:number,
    date:string,
    unit:string
}


export const examResults : ExamResult[] = [
    {id:1, title:'Mathematics 1', score:67, date:'2024-05-28', unit:'12'},
    {id:2, title:'Physics 1', score:78, date:'2024-05-28', unit:'11'},
    {id:3, title:'Chemistry 1', score:85, date:'2024-05-28', unit:'13'},
    {id:4, title:'Biology 1', score:72, date:'2024-05-28', unit:'14'},
    {id:5, title:'English 1', score:90, date:'2024-05-28', unit:'10'},
    {id:6, title:'History 1', score:65, date:'2024-05-28', unit:'9'},
    {id:7, title:'Geography 1', score:88, date:'2024-05-28', unit:'8'},
    {id:8, title:'Mathematics 2', score:70, date:'2024-06-01', unit:'12'},
    {id:9, title:'Physics 2', score:82, date:'2024-06-01', unit:'11'},
    {id:10, title:'Chemistry 2', score:79, date:'2024-06-01', unit:'13'},
    {id:11, title:'Biology 2', score:75, date:'2024-06-01', unit:'14'},
    {id:12, title:'English 2', score:93, date:'2024-06-01', unit:'10'},
    {id:13, title:'History 2', score:68, date:'2024-06-01', unit:'9'},
    {id:14, title:'Geography 2', score:91, date:'2024-06-01', unit:'8'},
    {id:15, title:'Mathematics 3', score:74, date:'2024-06-05', unit:'12'}
];
