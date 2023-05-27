const Filter = ({search , handleSearch}) => {


    return(
        <div>
        <span>filter shown by the: </span>
         <input value={search} onChange={handleSearch}/>
        </div>
    )
} 

export default Filter ; 