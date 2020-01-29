console.log('App was loaded...');

const id = document.getElementById('id');
const handleIdClick = () => {
    const sortStuff = stuff.reverse();
    id.removeEventListener('click', handleIdClick)
    render(columns, sortStuff);

    document.getElementById('id').addEventListener('click', handleIdClick)
}
id.addEventListener('click', handleIdClick);

const salary = document.getElementById('salary');
const handleSalaryClick = () => {
    console.log('sort salary')
    const sortStuff = stuff.sort((a,b) => (false)?a.salary - b.salary:b.salary - a.salary);
    salary.removeEventListener('click', handleSalaryClick);
    render(columns, sortStuff);

    document.getElementById('salary').addEventListener('click', handleSalaryClick)
}
salary.addEventListener('click', handleSalaryClick);
