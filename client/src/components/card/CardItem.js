function CardItem({ item, onclick }) {
  return (
    <div className='card' onClick={() => onclick(item.url, item.source.name)}>
      <h5 className='card__title'>{item.title}</h5>
      <div className='card__container'>
        <div className='card__content'>{item.description}</div>
        <img src={item.image} alt='' />
      </div>
    </div>
  );
}

export default CardItem;
