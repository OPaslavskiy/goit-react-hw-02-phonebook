export const RenderContact = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
        </li>
      ))}
    </ul>
  );
};
