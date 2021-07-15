import CardItem from './CardItem';
function CardList({ data, onclick }) {
  return (
    <div className='cards'>
      {data.map((item) => (
        <CardItem item={item} key={item.id} onclick={onclick} />
      ))}
    </div>
  );
}

export default CardList;
