import './ExpensesFilter.css';

function Filter(){
    return(
        <div>
            <label>
                <p>Filter by year</p>
            </label>
            <div>
                <select>
                    <option value="2021">2021</option>
                    <option value="2021">2020</option>
                    <option value="2021">2019</option>
                    {/* <option value="2021">2021</option> */}
                </select>
            </div>
        </div>
    )

}

export default Filter;