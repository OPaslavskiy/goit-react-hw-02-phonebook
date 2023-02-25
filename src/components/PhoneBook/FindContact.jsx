export const FilterContact = ({ filter }) => {
  return (
    <label>
      <h3>Find contacts by Name</h3>
      <input type="text" onChange={filter} />
    </label>
  );
};
