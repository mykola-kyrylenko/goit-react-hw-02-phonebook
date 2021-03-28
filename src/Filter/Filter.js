

const Filter = ({ filter, onChange })=>{
    return (
        <div>
            <label htmlFor="">
                <input
                    type="text"
                    className=""
                    name="filter"
                    placeholder="Search"
                    value={filter}
                    onChange={({ target })=>onChange(target.value)}/>
            </label>
        </div>
    );
}

export default Filter;